module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		"plugin:react/recommended",
		"eslint:recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"prettier",
		"plugin:import/recommended",
		"plugin:@next/next/recommended"
	],
	plugins: [
		"react",
		"react-hooks",
		"unused-imports",
		"babel",
		"import"
	],
	rules: {
		"import/no-unresolved": 0,
		"import/named": 2,
		"import/namespace": 2,
		"import/default": 2,
		"import/export": 2,
		quotes: [
			2,
			"double", {
				avoidEscape: true
			}
		],
		indent: ["error", "tab"],
		semi: ["error", "always"],
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/prop-types": 0,
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/jsx-curly-brace-presence": [
			"error",
			{
				props: "never",
				children: "never"
			}
		],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1
			}
		],
		"no-trailing-spaces": ["error"],
		"no-use-before-define": "error",
		"prefer-const": "error",
		"comma-dangle": ["error", "never"],
		"linebreak-style": ["error", "unix"],
		"no-duplicate-imports": 2,
		"no-unused-vars": [
			2,
			{
				ignoreRestSiblings: true
			}
		],
		"no-dupe-class-members": ["error"],
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true
			}
		],
		"prefer-template": ["error"]
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		allowImportExportEverywhere: true,
		parser: "babel-eslint"
	},
	settings: {
		"import/extensions": [
			".js",
			".jsx"
		],
		react: {
			pragma: "React",  // Pragma to use, default to "React"
			fragment: "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
			version: "detect" // React version. "detect" automatically picks the version you have installed.
		}
	}
};
