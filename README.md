# 🥊 拳擊教室 Vue 3 專案

這是一個使用 **Vue 3 + Vite + MSW（Mock Service Worker）** 開發的前端專案，專門模擬 API 來提供課程資訊，並支援 GitHub Pages 部署。

## 🚀 專案初始化與啟動

### **1️⃣ 安裝相依套件**

專案初始化後，請先安裝所有相依套件：

```bash
npm install
```

### **2️⃣ 啟動開發伺服器**

```bash
npm run dev
```

啟動後，打開瀏覽器進入：

```
http://localhost:5173/
```

此時 **MSW 會自動攔截 API，提供模擬資料**。

---

## 🔧 **Mock Service Worker（MSW）相關指令**

MSW 用於攔截 API 並提供模擬回應，當你在 `public/` 目錄找不到 `mockServiceWorker.js` 時，請執行：

```bash
npx msw init public/
```

### **📌 何時需要執行這個指令？**

1. **專案初始化後第一次執行時**
2. **如果 `public/mockServiceWorker.js` 遺失或被刪除**
3. **MSW 無法正常攔截 API 時，嘗試重新生成**

---

## 📦 **打包與部署**

### **1️⃣ 建立正式環境的 `dist/` 檔案**

```bash
npm run build
```

### **2️⃣ 部署到 GitHub Pages**

```bash
npm run deploy
```

完成後，你可以在 GitHub Pages 看到專案：

```
https://github.com/WendyHsinYun/vue-msw
```

---

## 📌 **其他重要設定**

### **確保 `vite.config.js` 設定正確**

```javascript
export default defineConfig({
  base: '/vue-msw/', // GitHub Pages 路徑
})
```

### **確保 `fetch` API 正確使用 `BASE_URL`**

```javascript
const apiUrl = import.meta.env.BASE_URL + 'api/classes'
```

這樣可以確保本地 (`localhost`) 及 GitHub Pages 都能正確請求 API。
