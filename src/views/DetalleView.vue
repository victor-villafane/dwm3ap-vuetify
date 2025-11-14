<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const personaje = ref({})
const loading = ref(true)
const route = useRoute()

fetch('http://localhost/www/personajes.php?id=' + route.params.id)
  .then((res) => res.json())
  .then((character) => {
    personaje.value = character
    loading.value = false
  })
</script>
<template>
  <div v-if="loading">Cargando...</div>
  <div v-else>
    <p>{{ personaje.name }}</p>
    <p>{{ personaje.occupation }}</p>
  </div>

  <RouterLink to="/">Volver</RouterLink>
</template>
