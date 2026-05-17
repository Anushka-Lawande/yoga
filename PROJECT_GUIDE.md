# 🧘 YogaVerse - Premium Yoga Community Platform

A modern, elegant social media platform designed specifically for the yoga community. Built with React, Vite, and premium UI design principles.

## ✨ Features

### 🎨 Design & Aesthetics
- **Premium Modern UI**: Elegant dark theme with yoga-inspired colors (sage green, zen purple, warm coral)
- **Glass Morphism**: Frosted glass effects for a sophisticated look
- **Smooth Animations**: Advanced micro-interactions and transitions throughout
- **Mobile-First**: Fully responsive design for all devices
- **Wellness-Focused**: Calming color palette inspired by yoga and meditation

### 📱 Core Features
- **Home Feed**: Infinite scroll with stories bar and community posts
- **Explore Page**: Beautiful grid layout to discover yoga content
- **Profile**: Comprehensive user profile with stats and post gallery
- **Navigation**: Smooth navigation with desktop sidebar and mobile bottom nav
- **Social Interactions**: Like, comment, share, and save posts
- **Real-time Stats**: Live engagement metrics

### 🎯 Components
- **Navigation**: Responsive navigation with active indicators
- **Post Cards**: Feature-rich post cards with animations
- **Stories Bar**: Circular story avatars with unseen indicators
- **User Profiles**: Beautiful profile cards with follow buttons
- **Grid Layouts**: Masonry and grid layouts for content display

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**
```bash
cd yoga
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0A0E14` - Deep Navy
- **Secondary Background**: `#11151F` - Navy Blue
- **Accent Primary**: `#6D9F7D` - Healing Sage Green
- **Accent Secondary**: `#9B7DB3` - Zen Purple
- **Accent Tertiary**: `#D4AF87` - Gold
- **Accent Warm**: `#E89B7B` - Warm Coral

### Typography
- **Headings**: Poppins (600-800 weight)
- **Body**: Inter (300-700 weight)
- **Monospace**: System default

### Spacing & Radius
- **Border Radius**: 6px, 12px, 16px, 24px
- **Spacing Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px

## 📁 Project Structure

```
yoga/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Post.jsx
│   │   ├── Post.css
│   │   ├── StoriesBar.jsx
│   │   └── StoriesBar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Explore.jsx
│   │   ├── Explore.css
│   │   ├── Profile.jsx
│   │   └── Profile.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🎬 Key Pages

### 🏠 Home
- Community feed with latest posts
- Stories bar for quick updates
- Suggestions sidebar (desktop)
- Real-time engagement metrics

### 🔍 Explore
- Discover yoga content and creators
- Search functionality
- Category filters (Vinyasa, Yin, Hatha, etc.)
- Beautiful masonry grid layout

### 👤 Profile
- User profile information
- Post statistics
- Follow/Unfollow actions
- Tabbed interface for different content types
- Responsive gallery grid

## 🛠️ Technologies

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: CSS3 with CSS Variables
- **Routing**: React Router DOM 7.15.1
- **Icons**: Lucide React 1.16.0
- **Utilities**: clsx, tailwind-merge

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #6D9F7D;
  --accent-secondary: #9B7DB3;
  /* ... more variables */
}
```

### Fonts
Modify font imports in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
```

### Animations
Adjust animation timings and durations in component CSS files.

## 🚀 Performance Optimizations

- Lazy loading for images
- Smooth scrolling
- CSS animations for better performance
- Optimized bundle size
- Mobile-first approach

## 📝 Notes

- Mock data is used throughout the application
- All images use Unsplash for demonstration
- Real backend integration required for production
- Authentication system needs to be implemented
- Database integration needed for persistent data

## 🔐 Security Considerations

- Implement proper authentication
- Add CSRF protection
- Sanitize user input
- Use HTTPS in production
- Implement rate limiting
- Add content moderation

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 1024px
- **Desktop**: > 1024px

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## 🤝 Contributing

Feel free to fork and customize this template for your own projects!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspiration from Instagram and modern social media platforms
- Icons from Lucide React
- Images from Unsplash
- Built with ❤️ for the yoga community

---

**YogaVerse** - Connect, Share, and Grow Your Practice Together 🧘‍♀️✨
