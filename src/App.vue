
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
    const response = await fetch(apiUrl)

    // Check if the response is JSON
    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('API response error:', text)
      throw new Error('response data is not JSON')
    }

    classes.value = await response.json()
  } catch (error) {
    console.error('loading error:', error)
  }
})

</script>
