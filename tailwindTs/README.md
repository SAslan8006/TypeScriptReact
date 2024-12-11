![image](https://github.com/user-attachments/assets/8e755f91-1cfa-4c79-9c4e-28fd476f7ad8)
![image](https://github.com/user-attachments/assets/ccd32644-efa6-4161-8a17-f4c6974e9341)
![image](https://github.com/user-attachments/assets/5f0b2bf9-c153-433b-aac4-ad78b15b03c0)
![image](https://github.com/user-attachments/assets/89400883-a982-48a5-9049-a22780fb08ba)
![image](https://github.com/user-attachments/assets/1ea6ddcc-044e-4623-a6c6-016c027b9230)
![image](https://github.com/user-attachments/assets/2e341446-48dc-42d3-8819-147bc2131b66)
![image](https://github.com/user-attachments/assets/c3903193-e6a4-421c-b425-57d961f4fdfa)
![image](https://github.com/user-attachments/assets/71093d5a-161d-4cae-b826-756a12872511)
![image](https://github.com/user-attachments/assets/fa59784e-c19f-4ef8-8af2-fa47c48a5be9)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
