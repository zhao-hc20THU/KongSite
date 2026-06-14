# KongSite

Public static website prototype for Professor Xiangming Kong's research group.

Domain planned for deployment:

```text
cemchem.cn
```

## Contents

- `frontend/`: Next.js + TypeScript + Tailwind CSS static website
- `frontend/content/`: editable bilingual website content
- `frontend/public/images/`: optimized web images used by the website
- `deploy/`: Nginx and China mainland deployment notes

## Local Preview

```powershell
cd frontend
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:3000/
```

## Static Build

```powershell
cd frontend
npm run build
```

The static export is generated in:

```text
frontend/out/
```

Upload the contents of `frontend/out/` to the web server.

## Notes Before Public Release

- Replace TODO placeholders for members, publications, project details, ICP filing number, and public security filing number.
- Do not publish unverified DOI, project numbers, awards, or personal information.
- China mainland deployment generally requires ICP filing before domain-based public access.

