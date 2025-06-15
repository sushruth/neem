# Neem

A neat email client that's a PWA, built with Deno and a plugin-based architecture, using Deno Workspaces.

## Project Structure

The project is a Deno Workspace monorepo. All packages are located in the `packages/` directory and are automatically recognized by Deno.

- `deno.json`: The root Deno configuration file. It defines project-wide settings, tasks, and the `workspace` field which includes all packages under `packages/*`.
- `packages/`: Directory containing all the project's packages.
    - `<package-name>/`: Each package directory.
        - `mod.ts`: The main entry point for the package.
        - `mod.test.ts`: Unit tests for the package.
        - `package.json`: Defines package-specific details like name, version, and exports. It can also contain package-specific tasks.

## Available Packages

The following packages are part of this monorepo under the `@neem` scope:

-   `@neem/client-ui`
-   `@neem/service-worker`
-   `@neem/server`
-   `@neem/library`
-   `@neem/types`
-   `@neem/plugins`

Each package is a Deno Workspace member, defined by its `package.json` and included in the root `deno.json`'s `workspace` property.

## Development

### Setup

Ensure you have Deno installed (version 1.28 or later recommended for full workspace support). Visit [https://deno.land/](https://deno.land/) for installation instructions.

### Common Tasks (Root `deno.json`)

The following tasks are defined in the root `deno.json` and can be run using `deno task <task-name>` from the project root:

-   `check`: Runs formatter checks, linter, and all tests across the workspace.
-   `test`: Runs all tests for all packages in the workspace. A combined coverage report is generated in `cov_report/` at the project root.
-   `bundle`: Bundles all packages by running their individual bundle tasks. Output files will be in the `dist/` directory.

### Package-Specific Tasks

Tasks can be run in the context of a specific package:

-   **Using root `deno.json` tasks**:
    -   `test-<package-name>`: Runs tests for a specific package (e.g., `deno task test-client-ui`). Coverage reports are generated in `cov_report_<package_name>/`.
    -   `bundle-<package-name>`: Bundles a specific package (e.g., `deno task bundle-client-ui`). The output will be in `dist/<package-name>.js`.
    *(Replace `<package-name>` with the actual package name, e.g., `client-ui`)*

-   **Using package's `package.json` tasks**:
    Each package has a `test` task defined in its `package.json`. You can run this by navigating to the package directory:
    ```bash
    cd packages/client-ui
    deno task test
    ```
    This will run the tests for `client-ui` and generate a coverage report in `packages/client-ui/cov_report/`.

### Linting and Formatting

-   To check formatting for the entire workspace: `deno fmt --check`
-   To format files across the entire workspace: `deno fmt`
-   To lint files across the entire workspace: `deno lint`

These are also part of the root `check` task. Deno automatically handles files within all workspace packages.
