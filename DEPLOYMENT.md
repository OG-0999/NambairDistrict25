# Deployment Notes

## Root Directory
- Root directory for Vercel and Netlify builds: . (repository root)

## Build Output
- Vite build output directory: dist

## Vercel Settings
- Install Command: npm ci
- Build Command: node ./node_modules/vite/bin/vite.js build
- Output Directory: dist

## Netlify Settings
- Build Command: npm install && npm run build
- Publish Directory: dist
