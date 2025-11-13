class ThemeCart {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize cart functionality when DOM is ready
      this.updateCartCount();
    });

    // Listen for cart updates
    document.addEventListener('cart:updated', (event) => {
      this.updateCartCount(event.detail);
    });
  }

  async updateCartCount(cartData) {
    try {
      if (!cartData) {
        const response = await fetch('/cart.js');
        cartData = await response.json();
      }

      const cartCountElement = document.querySelector('.cart-count-bubble span[aria-hidden="true"]');
      const cartCountBubble = document.querySelector('.cart-count-bubble');

      if (cartCountElement && cartCountBubble) {
        if (cartData.item_count > 0) {
          cartCountElement.textContent = cartData.item_count < 100 ? cartData.item_count : '99+';
          cartCountBubble.classList.remove('hidden');
        } else {
          cartCountBubble.classList.add('hidden');
        }
      }
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  async addToCart(variantId, quantity = 1) {
    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const item = await response.json();
      
      // Trigger cart updated event
      const cartResponse = await fetch('/cart.js');
      const cartData = await cartResponse.json();
      
      document.dispatchEvent(new CustomEvent('cart:updated', {
        detail: cartData
      }));

      return item;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  }
}

class ThemeFAQ {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      const faqButtons = document.querySelectorAll('.faq-toggle');
      faqButtons.forEach(button => {
        button.addEventListener('click', this.toggleFAQ.bind(this));
      });
    });
  }

  toggleFAQ(event) {
    const button = event.currentTarget;
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      button.setAttribute('aria-expanded', 'false');
      content.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
    } else {
      // Close other open FAQs
      document.querySelectorAll('.faq-toggle[aria-expanded="true"]').forEach(openButton => {
        if (openButton !== button) {
          openButton.setAttribute('aria-expanded', 'false');
          openButton.nextElementSibling.style.display = 'none';
          openButton.querySelector('svg').style.transform = 'rotate(0deg)';
        }
      });

      button.setAttribute('aria-expanded', 'true');
      content.style.display = 'block';
      icon.style.transform = 'rotate(45deg)';
    }
  }
}

class ThemeProductForm {
  constructor() {
    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      const productForms = document.querySelectorAll('[data-product-form]');
      productForms.forEach(form => {
        form.addEventListener('submit', this.handleAddToCart.bind(this));
      });

      const quantityInputs = document.querySelectorAll('[data-quantity-input]');
      quantityInputs.forEach(input => {
        const minusBtn = input.parentElement.querySelector('[data-quantity-minus]');
        const plusBtn = input.parentElement.querySelector('[data-quantity-plus]');

        if (minusBtn) minusBtn.addEventListener('click', () => this.updateQuantity(input, -1));
        if (plusBtn) plusBtn.addEventListener('click', () => this.updateQuantity(input, 1));
      });
    });
  }

  updateQuantity(input, change) {
    const currentValue = parseInt(input.value) || 1;
    const newValue = Math.max(1, currentValue + change);
    input.value = newValue;
  }

  async handleAddToCart(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('[type="submit"]');
    const formData = new FormData(form);
    
    const variantId = formData.get('id');
    const quantity = parseInt(formData.get('quantity')) || 1;

    if (!variantId) {
      console.error('No variant ID found');
      return;
    }

    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Adding...';
    submitButton.disabled = true;

    try {
      await window.themeCart.addToCart(variantId, quantity);
      
      // Show success feedback
      submitButton.textContent = 'Added!';
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);

    } catch (error) {
      // Show error feedback
      submitButton.textContent = 'Error - Try Again';
      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 3000);
    }
  }
}

// Initialize theme functionality
document.addEventListener('DOMContentLoaded', () => {
  window.themeCart = new ThemeCart();
  window.themeFAQ = new ThemeFAQ();
  window.themeProductForm = new ThemeProductForm();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ThemeCart, ThemeFAQ, ThemeProductForm };
}