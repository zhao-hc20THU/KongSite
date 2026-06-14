# Kong Lab Website Prototype

Static-first bilingual website prototype for `cemchem.cn`.

## Local Development

This project is a Next.js static export site. From this folder:

```powershell
npm install
npm run dev
```

Open the shown local URL, usually `http://localhost:3000`.

If Windows cannot find `npm`, use the task-local Node toolchain:

```powershell
$env:Path = "E:\codex-projects\20260614_1_site\tools\node-v24.14.0-win-x64;$env:Path"
npm install
npm run dev
```

## Production Build

```powershell
npm run build
```

The deployable static website is generated in:

```text
frontend/out/
```

Upload the contents of `out/` to the web root on the server, not the `out` folder itself unless the Nginx config points to it.

## Content Editing

Most text is stored under:

```text
content/
```

Before public release, replace TODO placeholders and verify:

- member names and photos
- full publication list, DOI, volume, issue, pages
- project names, project numbers, partner units
- ICP and public security filing numbers
