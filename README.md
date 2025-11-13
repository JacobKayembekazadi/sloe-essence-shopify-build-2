# Sloe Essence Shopify Theme

A modern, AI-focused skincare Shopify theme converted from React to Shopify 2.0 standards.

## Features

- **Modern Design**: Clean, minimalist design focused on skincare products
- **AI-Focused Branding**: Built specifically for AI-powered skincare brands
- **Shopify 2.0 Compatibility**: Uses sections groups and modern Shopify features
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading with optimized assets
- **Customizable**: Easy to customize through the Shopify theme editor

## Included Sections

### Homepage Sections
- **Hero Section**: Main banner with customizable heading and CTA
- **Product Showcase**: Display featured products from a collection
- **How It Works**: Step-by-step process explanation with icons
- **Testimonials**: Customer reviews with star ratings
- **Brand Story**: About section with image and text
- **Newsletter Signup**: Email capture with customizable messaging

### Header & Footer
- **Header**: Logo, navigation menu, cart icon, account link
- **Footer**: Multi-column links and social media icons
- **Announcement Bar**: Promotional messaging

### Product Pages
- **Main Product**: Full product display with variants, quantity selector, buy buttons
- **Product Recommendations**: "You may also like" section

## Installation

1. **Download the theme files** to your local machine
2. **Compress the theme folder** into a ZIP file
3. **Upload to Shopify**:
   - Go to your Shopify Admin → Online Store → Themes
   - Click "Upload theme"
   - Select your ZIP file
   - Click "Upload"

## Configuration

### Theme Settings
Access through: **Shopify Admin → Online Store → Themes → Customize**

- **Colors**: Set primary, accent, text, background, and border colors
- **Typography**: Choose display and body fonts
- **Layout**: Configure container width and announcement bar
- **Social Media**: Add Instagram, TikTok, and Facebook URLs

### Required Setup

1. **Create Collections**:
   - Create a collection for your core products
   - Assign it to the Product Showcase section

2. **Navigation Menus**:
   - Create main menu: Shop, The Sloe App, Our Story
   - Assign to header section

3. **Footer Menus**:
   - Create footer menus for Shop, Learn, Help sections

### Content Recommendations

1. **Product Images**: Use high-quality, consistent product photography
2. **Product Descriptions**: Write detailed descriptions focusing on benefits
3. **About Page**: Create an about page explaining your AI technology
4. **Blog**: Set up a blog for skincare tips and AI insights

## Customization

### Adding New Sections
The theme uses Shopify 2.0 section groups. To add new sections:

1. Create new `.liquid` files in `/sections/`
2. Add the section to your template JSON files
3. Configure through the theme editor

### Styling Changes
Main styles are in:
- `/layout/theme.liquid` (CSS variables and base styles)
- `/assets/base.css` (utility classes and additional styles)

### Color Scheme
The theme uses CSS custom properties:
```css
--color-primary: #2563EB (Blue)
--color-accent: #F9FAFB (Light Gray)
--color-text: #1F2937 (Dark Gray)
--color-background: #FFFFFF (White)
--color-border: #E5E7EB (Light Gray)
```

## Development

### File Structure
```
sloe-essence-shopify/
├── assets/           # CSS, JS, and other assets
├── config/           # Theme settings and data
├── layout/           # Theme layout files
├── locales/          # Translation files
├── sections/         # Reusable sections
├── snippets/         # Small reusable code pieces
└── templates/        # Page templates
```

### Key Files
- `layout/theme.liquid`: Main theme layout
- `sections/header.liquid`: Site header
- `sections/footer.liquid`: Site footer
- `templates/index.json`: Homepage template
- `templates/product.json`: Product page template

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading images
- Optimized CSS delivery
- Minimal JavaScript
- CDN-ready assets
- Mobile-first responsive design

## AI Branding Elements

The theme is specifically designed for AI-powered skincare brands:

- Scientific/tech-focused design language
- Emphasis on personalization and data
- Clean, clinical aesthetic
- Trust-building elements (testimonials, process explanation)

## Support

For theme customization and development:
1. Review Shopify's theme development documentation
2. Use Shopify CLI for local development
3. Test thoroughly before deploying to production

## License

This theme is provided as-is for educational and commercial use. Please ensure compliance with Shopify's theme requirements and any applicable licenses for fonts or assets used.