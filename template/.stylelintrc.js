module.exports = {
    extends: "stylelint-config-standard",
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply",
                    "responsive",
                    "variants",
                    "screen",
                ],
            },
        ],
        "color-no-invalid-hex": true,
        indentation: 4,
        "max-empty-lines": 2,
        "declaration-colon-space-after": "always",
        "no-eol-whitespace": null,
        "value-list-comma-newline-after": null,
        "declaration-colon-newline-after": null,
    },
};
