# Quickstart: Physical AI Book Development

## Prerequisites
- Node.js version 18.0 or above
- npm (comes with Node.js)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd physical-ai-book
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Local Development

Start the development server:
```bash
npm start
```
The site will open at `http://localhost:3000`. Content changes in `docs/` trigger auto-reload.

## Production Build

Test the production build locally:
```bash
npm run build
npm run serve
```

## Deployment

Deployment is automated via GitHub Actions on push to `main`.
Manual deployment (if configured):
```bash
GIT_USER=<your-username> npm run deploy
```
