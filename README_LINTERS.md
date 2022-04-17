# Linters Configurations

## Prettier

1. Configuration for Svelte

> Reference: [Prettier doesn't seem to be aware of the plugin when installed with pnpm](https://github.com/sveltejs/prettier-plugin-svelte/issues/155)

Svelte Extension default editor formatter has to be set as **esbenp.prettier-vscode** (not **svelte.svelte-vscode**)

.prettierrc must include :

```json
"plugins":["./node_modules/prettier-plugin-svelte"],
"overrides": [
        {
            "files": "*.svelte",
            "options": {
                "parser": "svelte"
            }
        }]
```

Plugin options are set in .prettierrc file.

2. Tailwincss Prettier Plugin add-on

prettier-plugin-tailwindcss embeds prettier-plugin-svelte in the tailwindcss plugin. This later plugin needs to be uninstalled.

.prettierrc has to be updated :

```json
-"plugins":["./node_modules/prettier-plugin-svelte"],
+"plugins":["./node_modules/prettier-plugin-tailwindcss"],
```

3. Package.json Prettuer Plugin add-on

add the following to .prettierrc :

```json
"plugins":[..., "./node_modules/prettier-plugin-packagejson"],
```

## Stylelint

Install Stylelint and related plugins :

```bash
pnpm add -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-config-recommended
touch .stylelintrc
```

Add following parameters to .stylelintrc

```json
"rules": {
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "tailwind",
                    "apply",
                    "variants",
                    "responsive",
                    "screen",
                    "layer"
                ]
            }
        ],
    }
```
