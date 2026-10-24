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

## Deploy manually with Cloudflare Pages (no GitHub push required)

1. Run `npm run build`.
2. Open the Cloudflare dashboard and go to **Workers & Pages** > **Create application** > **Get started** > **Drag and drop your files**.
3. Upload the `dist/my-protfolio/browser` folder. Cloudflare also accepts a ZIP whose root contains `index.html`, such as `dist/cloudflare-pages-upload.zip`.
4. Choose a project name and select **Deploy site**. Cloudflare gives you a `<project-name>.pages.dev` address.

For later updates, rebuild and create a new deployment in the same Pages project. A Direct Upload project cannot be switched to Git integration later; you would create a separate project for automatic Git deployments.

## Deploy from Git later

Push this project to a Git repository and import it in Netlify. The included `netlify.toml` configures `npm run build` and publishes `dist/my-protfolio/browser`. Each push to the production branch can then trigger a new deployment.

The contact form opens the visitor's email app; it does not use a server. The current CV PDF is included in the public site assets.
