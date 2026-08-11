# Portfolio

A simple yet customizable portfolio template for showcasing your work. Fork or clone the repository and adapt it to your needs!

⭐ If you find it useful, consider giving it a star. Attribution isn't required, but a link back or credit would be greatly appreciated.

## 🌐 Live Demo

Check out the [live demo](https://gabrielpdsilva.github.io/portfolio/) built with this template.

## ✨ Features

- 📱 Responsive design
- 🌍 Easy localization (i18n)
- 🌙 Light and dark themes
- 🎨 Easy to customize
- 🧩 Reusable components
- 🚀 Ready for GitHub Pages deployment

## How to use

To customize the portfolio, simply update the following files and folders:

### `public/assets/`

Store your images here, such as your avatar, project screenshots, and other static assets.

### `public/locales/`

Update the translation keys and localized text for your portfolio.

### `src/hooks/use-content.ts`

This file contains the portfolio data (projects, experience, skills, etc.).

That's it! 🎉

## Project architecture

### `components/`

Components follow the principles of Atomic Design, separating them by their level of complexity. They are generic and reusable throughout the application.

### `config/`

Application configuration, including DaisyUI themes and localization settings.

### `hooks/`

Reusable hooks that can be used across the application.

### `pages/portfolio/`

Defines the portfolio layout and injects your custom content into the reusable components.

## 💻 Local development

Install the dependencies:

```bash
yarn
```

Start the development server:

```bash
yarn dev
```

## 🚀 How to deploy

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:

```json
"homepage": "https://<your-username>.github.io/<repository-name>/"
```

2. If necessary, update the `base` option in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/<repository-name>/',
  // ...
})
```

> If you're deploying to `https://<your-username>.github.io`, set `base` to `/`.

3. Build and deploy the project:

```bash
yarn deploy
```

The `deploy` script automatically builds the project and publishes the contents of the `dist/` directory to the `gh-pages` branch.

4. In your GitHub repository, go to **Settings → Pages** and configure:

   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`

Once the deployment finishes, your portfolio will be available at the URL specified in the `homepage` field.

## 🙏 Special thanks

- https://daisyui.com/

- https://flowbite.com/icons/

- https://www.svgrepo.com/

- https://thesvg.org/

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
