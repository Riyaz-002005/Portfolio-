# NOVAForge — Demo Static Site

This project is a static two-page demo (Login + Landing) built with HTML5, CSS3, and vanilla JavaScript.

Structure:

- index.html — login page
- landing.html — main studio landing
- css/style.css, css/landing.css — styles
- js/script.js, js/landing.js — interactivity
- images/ — artwork placeholders

Open `index.html` in a browser to view the site. Replace images in `/images` with high-quality covers for production.

## Deploying to GitHub Pages

This project includes a GitHub Actions workflow that publishes the repository to GitHub Pages when you push to `main` or `master`.

Steps to deploy:

1. Initialize git and create the repo locally (if not already):

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
```

2. Create a repository on GitHub (via the website) and add it as a remote (replace `<your-repo-url>`):

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

3. The workflow `.github/workflows/deploy.yml` will run and publish the site to GitHub Pages automatically. Visit your repo's Settings → Pages to see the published URL.

Notes:
- If you want a project site like `https://<username>.github.io/<repo>/`, the workflow will publish to the pages environment automatically.
- If you want a user site `https://<username>.github.io/`, name the repo `<username>.github.io` and push to `main`.

