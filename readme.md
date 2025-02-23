# Script Assist

Script Assist is a web application that allows users to explore the Star Wars universe. Users can search for characters, view detailed information about them, and navigate through various resources.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:Rohandede1825/Script-Assist.git
   ```
2. Navigate to the project directory:
   ```sh
   cd script-assist
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To start the development server, run:
```sh
npm run dev
```

## Project Structure
```
.env
.gitignore
index.html
package.json
src/
  App.tsx
  Css/
    App.scss
    Dashboard.module.scss
    Header.scss
    Landing.module.scss
    LoginPage.scss
    ResourceDetail.scss
    style.scss
  main.tsx
  pages/
    components/
      Header.tsx
      ProtectedRoute.tsx
    HomeworldDetailPage.tsx
    landing/
      Dashboard.tsx
      Landing.tsx
    LoginPage.tsx
    ResourceDetailPage.tsx
    ResourceListPage.tsx
    Signup.tsx
  store/
    app.store.ts
    authStore.tsx
  styles/
    abstracts/
      _colours.scss
      _fonts.scss
    index.scss
  theme/
    index.ts
  vite-env.d.ts
tsconfig.json
vite.config.ts
```

## Available Scripts

- `npm run build`: Builds the project for production.
- `npm run dev`: Starts the development server.
- `npm run preview`: Previews the production build.

## Dependencies

This project uses the following dependencies:
- `@emotion/react`
- `@mantine/core`
- `@mantine/hooks`
- `@tanstack/react-query`
- `axios`
- `framer-motion`
- `react`
- `react-dom`
- `react-router-dom`
- `zustand`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

