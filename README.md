# Neem

A neat email client that's a PWA, built with Deno and a plugin-based architecture.

## Project Structure

The project is a monorepo managed with Deno. All packages are located in the `packages/` directory.

- `deno.json`: Contains Deno configurations for linting, formatting, tasks, and import maps.
- `packages/`: Directory containing all the project's packages.

## Available Packages

The following packages are part of this monorepo under the `@neem` scope:

-   `@neem/client-ui`: Handles the client-side user interface.
-   `@neem/service-worker`: Manages the service worker for PWA functionalities.
-   `@neem/server`: Contains the server-side logic.
-   `@neem/library`: Shared utilities and functions.
-   `@neem/types`: TypeScript type definitions used across the project.
-   `@neem/plugins`: Core plugin infrastructure and plugin management.

Each package has a `mod.ts` as its main entry point and `mod.test.ts` for its unit tests.

## Development

### Setup

Ensure you have Deno installed. Visit [https://deno.land/](https://deno.land/) for installation instructions.

### Common Tasks

The following tasks are defined in `deno.json` and can be run using `deno task <task-name>`:

-   `check`: Runs formatter checks, linter, and all tests.
-   `test`: Runs all tests for all packages and generates a coverage report in `cov_report/`.
-   `bundle`: Bundles all packages. Output files will be in the `dist/` directory.

### Package-Specific Tasks

You can also run tests and bundle individual packages:

-   `test-<package-name>`: Runs tests for a specific package (e.g., `deno task test-client-ui`). Coverage reports are generated in `cov_report_<package_name>/`.
-   `bundle-<package-name>`: Bundles a specific package (e.g., `deno task bundle-client-ui`). The output will be in `dist/<package-name>.js`.

Replace `<package-name>` with the actual package name (e.g., `client-ui`, `service-worker`).

### Linting and Formatting

-   To check formatting: `deno fmt --check`
-   To format files: `deno fmt`
-   To lint files: `deno lint`

These are also part of the `check` task.
