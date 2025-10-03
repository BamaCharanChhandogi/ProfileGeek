# React-GFG & Use-React-GFG Landing Page

> A beautiful, modern landing page showcasing two powerful React packages for GeeksforGeeks profile integration.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)

## Overview

This landing page presents two NPM packages designed to seamlessly integrate GeeksforGeeks (GFG) profiles into React applications:

- **[react-gfg](https://www.npmjs.com/package/react-gfg)** - Pre-styled, production-ready component with beautiful defaults
- **[use-react-gfg](https://www.npmjs.com/package/use-react-gfg)** - Custom React hook providing raw profile data for complete design freedom

## Features

### Landing Page Features
- **Dark Developer-Focused Design** - Modern black theme with gradient accents
- **Interactive Animations** - Mouse-following glows, hover effects, and smooth transitions
- **Aceternity UI Inspired** - Premium components with glassmorphism and gradient effects
- **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **Performance Optimized** - Fast loading with minimal bundle size
- **SEO Ready** - Complete meta tags for social sharing

### Package Comparison
The landing page clearly presents both packages with:
- Detailed feature lists
- Installation instructions with copy-to-clipboard
- Code examples with syntax highlighting
- Side-by-side comparison table
- Direct links to NPM, GitHub, and documentation

## Tech Stack

- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Lucide React 0.344.0
- **Animations:** Custom CSS animations with Tailwind

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/BamaCharanChhandogi/react-gfg.git

# Navigate to the project
cd react-gfg-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── App.tsx           # Main landing page component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles & Tailwind imports
├── public/               # Static assets
├── index.html            # HTML template with meta tags
└── package.json          # Dependencies & scripts
```

## Customization

### Update Package Information
Edit `src/App.tsx` to update:
- Package versions
- Feature lists
- Links to documentation
- Code examples

### Styling
The design uses Tailwind CSS. Modify colors and spacing in:
- `tailwind.config.js` - Theme configuration
- `src/App.tsx` - Component-specific styles

### Meta Tags
Update SEO and social sharing information in `index.html`

## Deployment

This site can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## The Packages

### react-gfg
Beautiful, pre-styled component for quick integration.

```bash
npm install react-gfg
```

```jsx
import { GFGProfile } from "react-gfg";

function App() {
  return <GFGProfile username="bamacharan" />;
}
```

**Best for:** Portfolios, landing pages, quick projects

[NPM](https://www.npmjs.com/package/react-gfg) | [GitHub](https://github.com/BamaCharanChhandogi/react-gfg) | [Docs](https://hashnode.com/@BamacharanChhandogi)

### use-react-gfg
Custom hook providing raw data for complete design control.

```bash
npm install use-react-gfg
```

```jsx
import { useGFG } from "use-react-gfg";

function Profile() {
  const { profile, loading, error } = useGFG("bamacharan");

  return <div>{profile.info.userName}</div>;
}
```

**Best for:** Custom designs, complex UIs, advanced projects

[NPM](https://www.npmjs.com/package/use-react-gfg) | [GitHub](https://github.com/BamaCharanChhandogi/use-react-gfg) | [Docs](https://dev.to/bamacharan)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Lighthouse Score:** 95+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Bama Charan Chhandogi**

- GitHub: [@BamaCharanChhandogi](https://github.com/BamaCharanChhandogi)
- NPM: [@bamacharan](https://www.npmjs.com/~bamacharan)
- Website: [Portfolio](https://bamacharan.dev)

## Acknowledgments

- Design inspiration from [Aceternity UI](https://ui.aceternity.com/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

## Support

If you find these packages helpful, please consider:
- Giving a star on GitHub
- Sharing with other developers
- Contributing to the projects

---

<div align="center">

**Made with ❤️ by Bama Charan Chhandogi**

[View Demo](https://gfg-devkit.dev) | [Report Bug](https://github.com/BamaCharanChhandogi/react-gfg/issues) | [Request Feature](https://github.com/BamaCharanChhandogi/react-gfg/issues)

</div>
