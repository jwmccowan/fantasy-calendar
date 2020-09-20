module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.eslint.json',
    },
    ignorePatterns: ['**/*'],
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@nrwl/nx/enforce-module-boundaries': [
            'error',
            {
                enforceBuildableLibDependency: true,
                allow: [],
                depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }],
            },
        ],
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
    ],
};
