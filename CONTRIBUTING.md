# Contributing to SnakeScan

Thank you for your interest in contributing to SnakeScan! This project aims to save lives by providing accurate snakebite response guidance.

## How to Contribute

### 1. Report Bugs
Found an issue? Create a GitHub issue with:
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots/error logs
- Your environment (OS, browser, device)

### 2. Suggest Features
Have an idea? Open a GitHub issue with label `enhancement`:
- Clear description of the feature
- Why it's needed
- Potential impact

### 3. Submit Code

#### Setup
```bash
git clone https://github.com/Sanjay-AI-ML/SnakeScan.git
cd SnakeScan
```

#### Backend
```bash
cd backend
pip install -r requirements.txt
# Make changes
# Test locally: uvicorn app.main:app --reload
git add .
git commit -m "fix: description of change"
git push origin feature-branch
```

#### Frontend
```bash
cd frontend
npm install
# Make changes
# Test: npm run dev
git add .
git commit -m "fix: description of change"
git push origin feature-branch
```

#### Create Pull Request
1. Push your branch to GitHub
2. Click "Compare & pull request"
3. Write a clear description
4. Link any related issues
5. Wait for review

### 4. Improve Documentation
Grammar fixes, clarity improvements, and examples are welcome!

## Code Standards

- **Python:** PEP 8 (use `black` for formatting)
- **JavaScript:** ESLint + Prettier (see `.eslintrc`)
- **Commit messages:** `type: brief description`
  - `fix:` bug fix
  - `feat:` new feature
  - `docs:` documentation
  - `refactor:` code improvement

## Testing

Before submitting:
```bash
# Backend
pytest backend/tests/

# Frontend
npm run test
```

## Important Notes

- This is a **life-saving tool**. Medical accuracy is critical.
- All species data must be WHO-verified or peer-reviewed.
- Patient privacy is paramount.
- Deployment affects real doctors and patients.

## Questions?

Open a GitHub discussion or email: [maintainer email]

Thank you for helping save lives! 🐍💚
