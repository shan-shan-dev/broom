# Packages

**Library** packages, which powers the project's apps.

> [!NOTE]
> All of the library packages are **prefixed with `@libs/`**.

```text
../
.
├── [1] config
├── [2] core
├── [3] database
├── [4] i18n
├── [5] logger
├── [6] path
├── [7] token
├── [9] unit
├── [9] ui
└── [10] util
```

Where as:

- [`../`](../README.md) - project workspace root
- [`[1] config`](./config/README.md) -> `@libs/config` - project configuration
- [`[2] core`](./core/README.md) -> `@libs/core` - fundamental structures
- [`[3] database`](./database/README.md) -> `@libs/database` - database services
- [`[5] i18n`](./i18n/README.md) -> `@libs/i18n` - translation messages
- [`[6] logger`](./logger/README.md) -> `@libs/logger` - universal logger
- [`[7] path`](./path/README.md) -> `@libs/path` - absolute paths
- [`[7] token`](./token/README.md) -> `@libs/token` - Design tokens
- [`[7] ui`](./ui/README.md) -> `@libs/ui` - modular UI components
- [`[9] unit`](./unit/README.md) -> `@libs/unit` - smallest and modular units
- [`[10] util`](./util/README.md) -> `@libs/util` - reusable snippets
