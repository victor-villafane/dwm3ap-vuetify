<script setup>
import { ref } from 'vue'
const personajes = ref([])

fetch('http://localhost/www/personajes.php')
  .then((res) => res.json())
  .then((characters) => (personajes.value = characters.results))
</script>
<template>
  <ul>
    <li v-for="personaje in personajes">
      {{ personaje.name }}
      <RouterLink :to="'/detalle/' + personaje.id">Ver</RouterLink>
    </li>
  </ul>
</template>
