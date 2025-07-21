# Vietnamese Crafts - Authentic Handicrafts Marketplace

A modern, culturally-inspired landing page for a Vietnamese traditional handicraft marketplace built with React, Vite, and Tailwind CSS.

## 🎯 Project Overview

This eCommerce platform connects users, travelers, and craft lovers with authentic Vietnamese artisans across traditional villages and regions. The platform focuses on selling handmade items such as:

- **Ceramics** (Bát Tràng)
- **Silk** (Hà Đông)
- **Đông Hồ Paintings**
- **Bamboo Crafts**
- **Lacquerware**
- **Woodwork**

## ✨ Features

### 🏠 Landing Page Sections

1. **Header** - Navigation with logo and CTA buttons
2. **Hero Section** - Main banner with artisan crafting background
3. **About Platform** - Mission and how it works
4. **Featured Categories** - Product categories showcase
5. **Featured Artisans** - Artisan profiles and stories
6. **Upcoming Workshops** - Hands-on learning experiences
7. **Customer Testimonials** - Social proof and reviews
8. **Blog Section** - Cultural stories and artisan tales
9. **Call to Action** - Final encouragement and community building
10. **Footer** - Links, newsletter signup, and social media

### 🎨 Design Features

- **Vietnamese Cultural Aesthetics** - Warm, earthy tones (brown, beige, terracotta, deep red)
- **Modern UX** - Clean, responsive design with smooth animations
- **Mobile-First** - Fully responsive across all devices
- **Accessibility** - Semantic HTML and ARIA labels
- **Performance** - Optimized with lazy loading and efficient CSS

### 🛠 Technical Features

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Vietnamese Color Palette** - Culturally-inspired design system
- **Google Fonts** - Noto Sans + Playfair Display typography
- **SEO Optimized** - Meta tags, semantic HTML, and structured content

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd vietnamese-handicrafts
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Vietnamese Brown** (`#8B4513`) - Primary brand color
- **Vietnamese Beige** (`#F5F5DC`) - Background color
- **Vietnamese Terracotta** (`#E2725B`) - Accent color
- **Vietnamese Deep Red** (`#8B0000`) - Secondary accent
- **Vietnamese Warm Orange** (`#FF8C42`) - Highlight color
- **Vietnamese Sage** (`#9CAF88`) - Muted accent

### Typography

- **Primary Font** - Noto Sans (Modern, readable)
- **Decorative Font** - Playfair Display (Elegant headings)

### Components

- **Buttons** - Primary and secondary button styles
- **Cards** - Product and content cards with hover effects
- **Sections** - Consistent padding and container styles
- **Navigation** - Sticky header with mobile menu

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Follow the existing design patterns

### Modifying Colors

Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  'vietnamese': {
    'brown': '#8B4513',
    'beige': '#F5F5DC',
    // ... add more colors
  }
}
```

### Adding New Fonts

1. Import fonts in `src/index.css`
2. Add to `tailwind.config.js` fontFamily section
3. Use in components with utility classes

## 📄 Project Structure

```
vietnamese-handicrafts/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── FeaturedCategories.jsx
│   │   ├── FeaturedArtisans.jsx
│   │   ├── UpcomingWorkshops.jsx
│   │   ├── Testimonials.jsx
│   │   ├── BlogSection.jsx
│   │   ├── CallToAction.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🌟 Key Features Implemented

### Cultural Authenticity

- Vietnamese village names and locations
- Traditional craft descriptions
- Artisan stories and quotes
- Cultural heritage preservation messaging

### User Experience

- Clear navigation and CTAs
- Trust indicators and social proof
- Workshop registration system
- Newsletter signup integration
- Mobile-responsive design

### E-commerce Ready

- Product category showcase
- Artisan profiles
- Customer testimonials
- Workshop booking system
- Contact information

## 🔮 Future Enhancements

- **Multi-language Support** - Vietnamese language option
- **Product Catalog** - Full e-commerce functionality
- **Artisan Dashboard** - For artisans to manage products
- **Workshop Booking System** - Real-time availability
- **Payment Integration** - Secure payment processing
- **User Authentication** - Customer accounts
- **Search Functionality** - Product and artisan search
- **Review System** - Customer ratings and reviews

## 📞 Support

For questions or support, please contact the development team.

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for Vietnamese cultural heritage preservation**
