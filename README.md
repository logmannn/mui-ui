# MUI App

A modern React application built with TypeScript, Material-UI, styled-components, and React Router.

## 🚀 Features

- **React 18** - Latest version with improved performance
- **TypeScript** - Type-safe code for better development experience
- **Material-UI (MUI) v5** - Beautiful, accessible component library
- **Styled Components** - CSS-in-JS for flexible, dynamic styling
- **React Router v6** - Client-side routing for seamless navigation
- **Vite** - Lightning-fast development server and build tool
- **ESLint** - Code linting for consistent code quality

## 📦 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
mui-ui/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Layout.tsx
│   │   └── Navigation.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Dashboard.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   ├── routes.tsx       # Route configuration
│   ├── theme.ts         # MUI theme configuration
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling Approach

This project demonstrates two styling methods working together:

### Material-UI System (sx prop)

```tsx
<Box sx={{ padding: 2, color: "primary.main" }}>Content</Box>
```

### Styled Components

```tsx
const StyledPaper = styled(Paper)`
  padding: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;
```

## 🧭 Routing

Routes are defined in `src/routes.tsx`:

- `/` - Home page
- `/about` - About page
- `/dashboard` - Dashboard page
- `*` - 404 Not Found page

## 🎨 Theme Customization

Customize the MUI theme in `src/theme.ts`:

```typescript
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  // ... more customization
});
```

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Material-UI Documentation](https://mui.com/)
- [Styled Components Documentation](https://styled-components.com/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 📝 License

This project is open source and available under the MIT License.
