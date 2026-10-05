# Contributing to the portfolio project

Thank you for taking the time to contribute. To maintain high code quality, predictability and performance this project enforces a disciplined development workflow. Please review these guidelines before opening a pull request.

## Git Branching strategy

We use a modified feature-branch workflow to isolate changes:

- `main` : The stable, production-ready branch. Never commit directly to this branch.
- `develop` The integration branch for current feature. All featurebranches pullfrom and merge back into `develop`.
- `feature/*` Short-lived branches dedicated to a specific task or component

### Workflow

1. Checkout from the latest `develop` branch `git switch c feature/your-feature-name`
2. Implement and test your changes locally
3. Push your feature branch `git push origin feature/your-feature-name`
4. Open a PR targeting the `develop` branch

## Commit message convention

- `feat` A new feature or user-facing element (eg `feat: add theme toggle component`)
- `fix` A bug fix (eg `fix: resolve mobile layout breaking on cards`)
- `docs` Documentation updates only (eg `docs: update system design architecture`)
- `style` Formatting changes missing semi-colons or CSS updates without functional logic modifications
- `refactor` Code changes that neither fix a bug nor add a feature but optimize structural logic

## Code quality & Linting

Beforepushing your changes you must check your code using the project's verification pipeline:

- **Instant Scan (OxLint)** Run Oxlint to instantly catch major syntax issues, bugs and non-performant patterns in milliseconds:

```bash
npx oxlint@latest
```

- **Deep Rules (ESLint)** Run ESLint to verify structural guidelines and formatting constraints matc our strict template standards.

Any code submitted with unresolved linter errors or warnings will fail the automated evaluation check.
