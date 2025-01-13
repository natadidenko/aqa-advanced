import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Помилки форматування згідно Prettier
      'no-console': 'warn', // Попередження при використанні console.log
      'no-unused-vars': 'warn', // Попередження для невикористаних змінних
      'react/prop-types': 'off', // Вимкнення перевірки типів пропсів
      'react/react-in-jsx-scope': 'off', // Вимкнення обов'язкового імпорту React
      eqeqeq: 'warn', // Попередження для нестрогих порівнянь
      'no-trailing-spaces': 'error', // Помилка при пробілах в кінці рядків
      indent: ['error', 2], // Помилка при некоректних відступах (2 пробіли)
      semi: ['error', 'always'], // Вимога ставити крапку з комою
      quotes: ['error', 'single'], // Використовувати одинарні лапки
    },
  },
  pluginJs.configs.recommended,
];
