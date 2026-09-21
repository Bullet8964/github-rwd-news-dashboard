# GitHub RWD 最新消息＋MySQL 圖表網站

這是一個可以直接部署到 GitHub Pages 的 RWD 響應式網站範例。

## 功能

1. 最新消息
2. 響應式 RWD 版面
3. JavaScript 資料圖表
4. 未來 MySQL 資料庫串接架構預留
5. 手機、平板、電腦版面
6. GitHub Pages 可直接部署

## 檔案

```text
github-rwd-news-dashboard/
├── index.html
├── README.md
└── assets/
    ├── style.css
    └── script.js
```

## GitHub Pages

將檔案上傳至 GitHub Repository。

進入：

Repository → Settings → Pages

選擇：

- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

儲存後等待 GitHub Pages 建置。

## MySQL 注意事項

GitHub Pages 是靜態網站，不能直接安全地讓瀏覽器連接 MySQL。

未來建議架構：

```text
MySQL
  ↓
後端 API
  ↓
HTML / JavaScript
  ↓
Chart.js
```

例如可以使用：

- Node.js + Express
- Python + Flask
- Python + FastAPI
- PHP

前端未來可以：

```javascript
fetch("/api/data")
    .then(response => response.json())
    .then(data => {
        // 更新 Chart.js
    });
```

這樣 MySQL 帳號、密碼可以放在後端環境變數，而不是暴露在 GitHub Pages 前端。
