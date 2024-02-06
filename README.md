# Shan-Shan

> [!CAUTION]
> 🚧 Under construction

---

## Technology stack

For a detailed review of the technology stack used,
please see the [./techstack.md](./techstack.md) file.

---

## Getting started

In this section you can find instructions on how to get started with the project.

### Prerequisites

#### Required

- [Git](https://git-scm.com)
- [Node.js LTS version](https://nodejs.org)
- [pnpm](https://pnpm.io)
- [Docker](https://www.docker.com) or [Orbstack](https://orbstack.dev)

#### Optional _(for development)_

- [typos](https://github.com/crates-ci/typos-cli)

---

### First steps

1. Setup environment variables via the following quick CLI script:

```sh
pnpm setup:env
```

---

### Project structure

Below is a quick legend which should help onto
how to navigate in this project workspace root **directories**.

```text
.
├── [1] apps
└── [2] packages
```

Where as:

- [`[1] apps`](/apps/README.md) -> binary packages _(applications)_
- [`[2] packages`](./packages/README.md) -> library packages
