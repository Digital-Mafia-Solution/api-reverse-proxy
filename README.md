# 🛡️ API Reverse Proxy

Reverse proxy server for backend APIs under `api.digital-mafia.co.za`.

Routes requests to internal API services like Task Manager, Customer CMS, and others.

---

## ✨ Features
- Central reverse proxy for all backend services
- Supports multiple internal and external API targets
- Built with Node.js, Express, and http-proxy-middleware
- Clean, modular proxy config

---

## 📦 Folder structure
```

api-reverse-proxy/
├── config/
│   └── proxies.js         # Proxy rules (targets, paths, rewrites)
├── .env                   # Environment variables
├── index.js               # Entry point
├── package.json
└── README.md

````

---

## ⚙️ Local development

Clone and run locally:
```bash
git clone https://github.com/YOUR_USERNAME/api-reverse-proxy.git
cd api-reverse-proxy
npm install
npm start
````

Starts at:

```
http://localhost:5000
```

---

## 🧪 Example routes

| Path                | Target backend API                                    |
| ------------------- | ----------------------------------------------------- |
| `/task-manager` | Task Manager backend |
| `/user-manager` | User Manager backend |
| ...                 | Add more as needed |

### Adding a route:  
In the module.exports dictionary at `config/proxies.js` add:
```
path: "/path-to-route",
middleware: createProxyMiddleware({
  target: process.env.TARGET_ROUTE_URL,
  changeOrigin: true,
}),
```

And add `TARGET_ROUTE_URL` in `.env`.

---

## 🌱 Environment variables (`.env`)

| Key                | Example                                  | Purpose                              |
| ------------------ | ---------------------------------------- | ------------------------------------ |
| TASK\_MANAGER\_URL | `https://task-tracker.onrender.com` | Task Manager API target              |
| USER\_MANAGER\_URL | `https://user-manager.onrender.com` | User Manager API target              |
| PORT               | `5000`                                   | Local port (Render overrides \$PORT) |

---

## ☁️ Deployment (Render.com)

1. Push to GitHub.
2. Create a Render **Web Service**.
3. Build command:

   ```bash
   npm install
   ```
4. Start command:

   ```bash
   npm start
   ```
5. Add environment variables on Render.
6. Add custom domain:

   ```
   api.digital-mafia.co.za
   ```

---

## ✅ Best practices

* Keep `.env` out of version control (`.gitignore`).
* Use `changeOrigin: true` when proxying to Render.

---

## 🧠 License

MIT — Digital Mafia