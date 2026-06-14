# cemchem.cn 国内云服务器部署说明

本说明面向“静态 Next.js 网站 + 国内云服务器 + Nginx”的第一版部署。网站构建后是纯静态文件，不需要数据库、后台登录或 Node.js 常驻服务。

## 1. 备案与域名前置准备

1. 确认域名：`cemchem.cn` 已完成实名注册。
2. 购买中国内地云服务器，例如阿里云、腾讯云、华为云等。
3. 通过你购买服务器的接入商提交 ICP 备案。通常需要准备：
   - 主办者信息
   - 域名信息
   - 中国内地服务器信息或备案服务码
   - 网站名称、网站用途、负责人手机号
4. 备案通过前，不建议把 `cemchem.cn` 直接解析到中国内地服务器并公开访问。阿里云说明中明确提到，域名解析到中国内地服务器并对外提供服务需要备案；未备案可能被阻断访问。
5. 备案完成后，把备案号加入网站页脚，替换当前的“ICP备案号待补充”。
6. 公安联网备案完成后，把公安备案号和链接加入页脚。

参考入口：

- 工信部备案系统：https://beian.miit.gov.cn/
- 阿里云 ICP 备案流程：https://help.aliyun.com/zh/icp-filing/basic-icp-service/user-guide/
- 腾讯云 ICP 备案服务：https://cloud.tencent.com/product/ba

## 2. 本地构建网站

在 Windows PowerShell 中进入项目：

```powershell
cd E:\codex-projects\20260614_1_site\frontend
```

如果系统找不到 `npm`，先启用本任务文件夹内的 Node 工具链：

```powershell
$env:Path = "E:\codex-projects\20260614_1_site\tools\node-v24.14.0-win-x64;$env:Path"
```

安装依赖并构建：

```powershell
npm install
npm run build
```

构建成功后，静态文件在：

```text
E:\codex-projects\20260614_1_site\frontend\out
```

上传时上传 `out` 里面的内容。

## 3. 云服务器安装 Nginx

以下以 Ubuntu/Debian 为例：

```bash
sudo apt update
sudo apt install -y nginx
sudo mkdir -p /var/www/cemchem.cn
sudo chown -R "$USER":"$USER" /var/www/cemchem.cn
```

如果是 CentOS/RockyLinux：

```bash
sudo dnf install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
sudo mkdir -p /var/www/cemchem.cn
sudo chown -R "$USER":"$USER" /var/www/cemchem.cn
```

确认安全组/防火墙开放：

- TCP 80
- TCP 443

## 4. 上传静态文件

方式 A：用 `scp` 上传整个 `out` 内容：

```powershell
scp -r E:\codex-projects\20260614_1_site\frontend\out\* user@SERVER_IP:/var/www/cemchem.cn/
```

方式 B：先压缩再上传：

```powershell
cd E:\codex-projects\20260614_1_site\frontend\out
tar -czf ..\cemchem-site.tar.gz *
scp ..\cemchem-site.tar.gz user@SERVER_IP:/tmp/
```

服务器上解压：

```bash
cd /var/www/cemchem.cn
tar -xzf /tmp/cemchem-site.tar.gz
```

不要把原始 PPT、原始照片或开发目录上传到网站根目录；只上传 `out/` 的构建结果。

## 5. 配置 Nginx

把本项目中的示例文件复制到服务器：

```text
deploy/nginx.cemchem.cn.conf.example
```

服务器上创建配置：

```bash
sudo nano /etc/nginx/sites-available/cemchem.cn
```

粘贴示例配置，保存后启用：

```bash
sudo ln -s /etc/nginx/sites-available/cemchem.cn /etc/nginx/sites-enabled/cemchem.cn
sudo nginx -t
sudo systemctl reload nginx
```

如果系统使用 `/etc/nginx/conf.d/`，则把配置保存为：

```bash
sudo nano /etc/nginx/conf.d/cemchem.cn.conf
sudo nginx -t
sudo systemctl reload nginx
```

## 6. DNS 解析

在域名控制台添加：

```text
记录类型  主机记录  记录值
A        @        你的服务器公网 IPv4
A        www      你的服务器公网 IPv4
```

等待 DNS 生效后访问：

```text
http://cemchem.cn
http://www.cemchem.cn
```

## 7. 启用 HTTPS

可选方案 A：使用云厂商免费 SSL 证书。

1. 在云厂商 SSL 证书服务中申请 `cemchem.cn` 和 `www.cemchem.cn` 证书。
2. 下载 Nginx 类型证书。
3. 上传到服务器，例如：

```bash
sudo mkdir -p /etc/nginx/ssl/cemchem.cn
sudo cp cemchem.cn_bundle.crt /etc/nginx/ssl/cemchem.cn/fullchain.pem
sudo cp cemchem.cn.key /etc/nginx/ssl/cemchem.cn/privkey.pem
sudo chmod 600 /etc/nginx/ssl/cemchem.cn/privkey.pem
```

4. 打开示例 Nginx 配置中的 443 server block。
5. 测试并重载：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

可选方案 B：使用 Certbot。

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d cemchem.cn -d www.cemchem.cn
```

腾讯云 Nginx SSL 证书安装文档可参考：

- https://cloud.tencent.com/document/product/400/35244

## 8. 上线前检查

上线前请逐项确认：

- 首页、研究方向、团队成员、论文、项目、新闻、加入我们、联系页面可访问。
- 移动端导航可用。
- 图片正常加载。
- 页脚已替换真实 ICP 备案号；若公安备案已完成，也替换公安备案号。
- 不显示未确认的成员、论文 DOI、项目编号、合作单位和奖项。
- `http://cemchem.cn` 自动跳转到 `https://cemchem.cn`。
- `www.cemchem.cn` 可访问，且跳转策略符合你的偏好。

## 9. 交给公司精修时的说明

请把以下内容交给公司：

```text
frontend/
deploy/
```

重点说明：

- 网站是 Next.js 静态导出，不需要后端服务器。
- 内容数据主要在 `frontend/content/`。
- 构建命令是 `npm install` 和 `npm run build`。
- 生产静态文件在 `frontend/out/`。
- 原始 PPT 和原始大图不要直接发布到公网。
