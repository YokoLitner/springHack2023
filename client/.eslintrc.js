/*
  GUIDE
  https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md

  REACT
  https://github.com/yannickcr/eslint-plugin-react

  REACT-HOOKS
  https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks

  TYPESCRIPT
  https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project

  STORYBOOK
  https://github.com/storybookjs/eslint-plugin-storybook#readme

  PRETTIER
  https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
  Uses the recommended rules from the @typescript-eslint/eslint-plugin
  Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettierEnables eslint-plugin-prettier and eslint-config-prettier.
  This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.

  SIMPLE-IMPORT-SORT
  https://www.npmjs.com/package/eslint-plugin-simple-import-sort

  GROUPED-IMPORT
  https://www.npmjs.com/package/eslint-plugin-grouped-import
*/
module.exports = {
    ignorePatterns: ['README.md'],
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:storybook/recommended',
      'plugin:prettier/recommended'
    ],
    settings: {
      react: {
        version: 'detect'
      }
    },
    env: {
      browser: true,
      node: true,
      es6: true
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'grouped-import'],
    rules: {
      'no-console': 2,
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-curly-spacing': 'off',
      'react/jsx-sort-props': [
        2,
        {
          callbacksLast: true,
          multiline: 'last',
          noSortAlphabetically: false
        }
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    overrides: [
      {
        files: ['*.ts'],
        rules: {
          '@typescript-eslint/no-namespace': 'off'
        }
      },
      {
        files: ['*.story.tsx'],
        rules: {
          'storybook/prefer-pascal-case': 'off'
        }
      }
    ]
  }
  