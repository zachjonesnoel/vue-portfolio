module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: "off",
    quotes: "off",
    semi: "off",
    "space-in-parens": "off",
    comma: "off",
    "comma-dangle": "off",
    "space-before-function-paren": "off",
    "vue/no-unused-components": "off",
  },
};
