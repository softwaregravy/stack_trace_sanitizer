# Username Sanitizer

A simple web application that helps developers sanitize stack traces by replacing their system username with a placeholder. This tool is particularly useful when sharing stack traces in public forums or bug reports while maintaining privacy.

![Username Sanitizer Screenshot](https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=1000)

## Features

- 🔒 Privacy-focused username replacement
- 💾 Persistent settings using cookies
- 📋 One-click copy functionality
- 🎨 Clean, responsive UI
- 🌐 Works entirely in the browser

## Live Demo

Visit [https://sanitizer.softwaregravy.dev](https://sanitizer.softwaregravy.dev) to try it out!

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/softwaregravy/stack_trace_sanitizer.git
cd stack_trace_sanitizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Netlify. To deploy:

1. Fork this repository
2. Sign up for a Netlify account
3. Create a new site from Git
4. Connect to your forked repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Created By

Built by [Softwaregravy](https://softwaregravy.io/)
