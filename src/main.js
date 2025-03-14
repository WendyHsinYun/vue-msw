import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// 初始化 MSW（模擬 API 伺服器）
const initMSW = async () => {
  if (import.meta.env.MODE === 'development' || location.hostname === 'localhost') {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      serviceWorker: {
        url: import.meta.env.BASE_URL + 'mockServiceWorker.js',
      },
      // onUnhandledRequest: 'bypass', // 讓未攔截的請求直接通過，避免影響其他 API
    })
  }
}

// 先初始化 MSW，再掛載 Vue 應用
initMSW().then(() => {
  app.mount('#app')
})
