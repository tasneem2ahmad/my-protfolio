# Tasneem Shehata portfolio

An Angular 17 portfolio. The site has one prerendered page and can be hosted as static files.

## Run locally

```powershell
npm install
npm start
```

Open `http://localhost:4200/`.

## Deploy manually with Netlify Drop

1. Run `npm run build` in this project directory.
2. Open [Netlify Drop](https://app.netlify.com/drop).
3. Drag the **`dist/my-protfolio/browser`** folder onto the drop zone. The folder itself must contain `index.html`.
4. Open the resulting `netlify.app` URL and check the résumé link, project links, and contact buttons.

To publish a later change, build again and drag the updated browser folder onto the site's deployment drop zone.

## Deploy from Git later

Push this project to a Git repository and import it in Netlify. The included `netlify.toml` configures `npm run build` and publishes `dist/my-protfolio/browser`. Each push to the production branch can then trigger a new deployment.

The contact form opens the visitor's email app; it does not use a server. The current CV PDF is included in the public site assets.
