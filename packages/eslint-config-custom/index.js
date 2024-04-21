module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    'react-hooks/exhaustive-deps': 'off',
    'semi': [0, "always"],
    'quotes': [2, 'single'],
  },
  parserOptions: {
    babelOptions: {
      // presets: [require.resolve("next/babel") ?? ''],
    },
  },
};
