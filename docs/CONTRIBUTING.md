# 🛠 Contributing to GameBlame

Welcome! 🎉 We're excited to have you contribute to MealMind. Please follow these guidelines to make collaboration
smooth and efficient.

---

## 🚀 How to Contribute

### 1️. Fork the Repository

Click on the "Fork" button at the top right of this repository to create your own copy.

### 2. Clone Your Fork

```sh
git clone https://github.com/your-username/mealmind.git
cd mealmind
```

### 3. Create a Branch

Follow the naming convention `<type>/<branch-name>`

Common types used for branch naming:

```plain text
feat/      # New features or enhancements
fix/       # Bug fixes and patches
hotfix/    # Critical bug fixes that must be deployed immediately
refactor/  # Code improvements without changing functionality
chore/     # Maintenance tasks (e.g., dependency updates, build changes)
docs/      # Documentation updates
test/      # Adding or updating tests
```

### 4. Install Dependencies

```sh
npm install
```

### 5. Make Your Changes

Write clean, well-documented code, following project standards.

### 6. Test Your Code

Before committing your changes, ensure your code is thoroughly tested:

Run the test suite:

```sh
npm run test        # Run all tests
npm run test:watch  # Run tests in watch mode

```

Check code quality:

```sh
npm run lint        # Check for code style issues
npm run format      # Format code using Prettier
```

Manual testing checklist:

- Test your changes in development environment
- Verify all related features still work
- Check for browser console errors
- Test on different screen sizes if UI changes
- Ensure documentation is updated if needed

> ❗**IMPORTANT**  
> All tests must pass and there should be no linting errors before committing your changes. If you've added new
> features, include corresponding test cases.

### 7. Commit Changes

Use meaningful commit messages:

```sh
git commit -m "<type>: <commit-message>"
```

Common types used for commit naming:

```plain text
feat:      # Introduces a new feature
fix:       # Fixes a bug
refactor:  # Code restructuring without functional changes
chore:     # Maintenance tasks (e.g., dependency updates, build changes)
docs:      # Documentation updates
test:      # Adding or updating tests
revert:    # Reverting a previous commit
```

### 8. Push Your Branch

```sh
git push origin <branch>
```

### 9. Create a Pull Request

1. Open a Pull Request on GitHub.
2. Fill out the Pull Request template.
3. Wait for a review!

## 🚨 Need Help?

Feel free to open an issue or ask in our [Discussions forum](https://github.com/reenatoteixeira/mealmind/discussions) 🚀

---

Thanks for contributing! 🎮✨
