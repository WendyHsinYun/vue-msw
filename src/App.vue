
<template>
  <div>
    <h1>🥊 HYKO 拳擊教室 </h1>
    <ul>
      <li v-for="cls in classes" :key="cls.id">
        <strong>{{ cls.name }}</strong> - {{ cls.instructor }} ({{ cls.duration }})
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const classes = ref([])

const apiUrl = import.meta.env.BASE_URL + 'api/classes';

onMounted(async () => {
  try {
    const response = await fetch(apiUrl);

    // 檢查 Content-Type，確保是 JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('API 回應錯誤:', text);
      throw new Error('回應資料不是 JSON');
    }

    classes.value = await response.json();
  } catch (error) {
    console.error('載入課程失敗:', error);
  }
});


</script>
