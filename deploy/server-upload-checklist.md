# Server Upload Checklist

Before uploading:

- Run `npm run build` in `frontend/`.
- Confirm `frontend/out/index.html` exists.
- Confirm no original PPT files are inside `frontend/out/`.
- Confirm no original high-resolution raw photos are inside `frontend/out/`.
- Confirm `frontend/out/images/` contains optimized web images only.

Upload:

```powershell
scp -r E:\codex-projects\20260614_1_site\frontend\out\* user@SERVER_IP:/var/www/cemchem.cn/
```

After uploading:

- Run `sudo nginx -t`.
- Run `sudo systemctl reload nginx`.
- Visit `http://SERVER_IP` if DNS is not ready.
- Visit `http://cemchem.cn` after DNS and ICP filing are ready.
- Enable HTTPS and test `https://cemchem.cn`.

Do not upload:

- `node_modules/`
- `.next/`
- original PPT files
- original full-resolution photos
- raw research data
- private keys or server credentials
