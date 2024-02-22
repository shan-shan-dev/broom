# Broom

> [!CAUTION]
> 🚧 Under construction

---

## License

See [./LICENSE.md] file for more information.

[./LICENSE.md]: https://github.com/shan-shan-dev/shan-shan/blob/main/LICENSE.md

---

## Technology stack

For a detailed review of the technology stack used,
please see the [./TECHSTACK.md] file.

[./TECHSTACK.md]: https://github.com/shan-shan-dev/shan-shan/blob/main/.github/TECHSTACK.md

---

### Project structure

Below is a quick legend which should help onto
how to navigate in this project workspace root **directories**.

```text
.
├── [1] .changeset
├── [2] .github
├── [3] apps
├── [4] libs
└── [5] types
```

Where as:

- [`[1] .changeset`](https://github.com/shan-shan-dev/shan-shan/tree/main/.changeset) -> Atomized upcoming release notes
- [`[2] .github`](https://github.com/shan-shan-dev/shan-shan/tree/main/.github) -> GitHub related setup for this repository
- [`[3] apps`](https://github.com/shan-shan-dev/shan-shan/tree/main/apps) -> workspace apps
- [`[4] libs`](https://github.com/shan-shan-dev/shan-shan/tree/main/libs) -> library packages
- [`[5] types`](https://github.com/shan-shan-dev/shan-shan/tree/main/types) -> reusable types for the entire workspace

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

These instructions are for **general** usage _(as in for any other purposes than development)_.

1. Install the project dependencies _(optional ones are for development purpose only)_:

```sh
pnpm install --no-optional
```

1. Setup environment variables via the following quick CLI script:

```sh
pnpm setup:env
```
