# Modern Portfolio Frontend

A modern portfolio website built with **Astro.js**, **Lit components**, **SCSS**, **CSS Modules**, and comprehensive **accessibility testing**.

## 🚀 Tech Stack

- **[Astro.js](https://astro.build/)** - Modern static site generator with island architecture
- **[Lit](https://lit.dev/)** - Lightweight web components for interactive elements
- **[SCSS](https://sass-lang.com/)** - Enhanced CSS with variables, mixins, and more
- **CSS Modules** - Scoped CSS for component styling
- **[Vitest](https://vitest.dev/)** - Fast and modern testing framework
- **Accessibility Tools**: axe-core, lighthouse-cli, pa11y for comprehensive a11y testing
- **TypeScript** - Type safety and better developer experience

## 🏁 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Astro and TypeScript checks
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI interface

### Accessibility Testing

While the core accessibility tools are included, you'll need to install additional packages for full CLI automation:

```bash
# For automated lighthouse testing
npm install -g lighthouse lighthouse-cli

# For pa11y testing
npm install -g pa11y pa11y-ci
```

Then you can run:
```bash
# Run lighthouse on your built site
lighthouse http://localhost:4321 --output=html --output-path=./lighthouse-report.html

# Run pa11y accessibility tests
pa11y http://localhost:4321
```

## 🏗️ Project Structure

```
/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable components
│   │   ├── WelcomeCard.ts       # Lit component
│   │   ├── WelcomeCard.module.scss  # CSS module styles
│   │   └── HeroSection.astro    # Astro component with SCSS
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # File-based routing
│   │   └── index.astro    # Home page
│   ├── styles/            # Global styles and variables
│   │   ├── _variables.scss
│   │   └── global.scss
│   ├── test/              # Test files and setup
│   │   ├── setup.ts
│   │   └── WelcomeCard.test.ts
│   └── env.d.ts           # TypeScript declarations
├── astro.config.mjs       # Astro configuration
├── tsconfig.json          # TypeScript configuration
├── vitest.config.ts       # Vitest configuration
└── package.json
```

## 🎨 Styling Architecture

### SCSS + CSS Modules

- **Global styles**: Located in `src/styles/global.scss`
- **Variables**: Centralized in `src/styles/_variables.scss`
- **Component styles**: Use CSS Modules (`.module.scss`) for Astro components
- **Lit components**: Use Lit's built-in `css` template literal for styling

### Responsive Design

The project uses a mobile-first approach with breakpoints defined in `_variables.scss`:

- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ♿ Accessibility Features

### Built-in Accessibility

- **Semantic HTML**: All components use proper semantic markup
- **ARIA attributes**: Comprehensive ARIA labels and roles
- **Keyboard navigation**: Full keyboard accessibility support
- **Focus management**: Visible focus indicators and proper focus flow
- **Skip links**: Skip-to-content functionality
- **Screen reader support**: Proper heading hierarchy and alt text

### Testing Tools

- **axe-core**: Automated accessibility testing in unit tests
- **Vitest + @open-wc/testing**: Component accessibility testing
- **lighthouse**: Performance and accessibility auditing
- **pa11y**: Command-line accessibility testing

### Running Accessibility Tests

```bash
# Unit tests include accessibility checks
npm run test:run

# Manual testing with built-in tools
npm run build
npx http-server dist

# Then use browser dev tools or run lighthouse/pa11y against the served site
```

## 🧪 Testing

### Unit Testing

Tests are written with Vitest and include:
- Component rendering tests
- Accessibility validation
- Props and state management
- User interaction testing

### Running Tests

```bash
# Watch mode
npm run test

# Single run
npm run test:run

# UI mode
npm run test:ui
```

## 🏗️ Building for Production

```bash
# Build the site
npm run build

# Preview the build
npm run preview
```

The built site will be in the `dist/` directory, optimized and ready for deployment.

## 🚀 Deployment

This is a static site that can be deployed anywhere:

- **Netlify**: Connect your repo and deploy automatically
- **Vercel**: Zero-configuration deployment
- **GitHub Pages**: Enable in repository settings
- **Any static hosting**: Upload the `dist/` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the established code style
- Write tests for new components
- Ensure accessibility compliance
- Update documentation as needed
- Run `npm run check` before committing

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🎯 Features Implemented

- ✅ Astro.js framework setup
- ✅ Lit web components integration
- ✅ SCSS preprocessing with variables
- ✅ CSS Modules support
- ✅ Vitest testing framework
- ✅ Accessibility testing with axe-core
- ✅ TypeScript configuration
- ✅ Responsive design system
- ✅ Component architecture
- ✅ Build optimization
- ✅ Development server setup

## 🔮 Future Enhancements

- [ ] Add more interactive Lit components
- [ ] Implement dark/light theme toggle
- [ ] Add animation library integration
- [ ] Set up automated CI/CD pipeline
- [ ] Add more comprehensive accessibility tests
- [ ] Implement content management system
- [ ] Add PWA capabilities
- [ ] Performance monitoring setup