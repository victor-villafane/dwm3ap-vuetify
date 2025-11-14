<script setup>
import { ref, watch } from 'vue'
const peliculas = ref([])
const loading = ref(true)
const page = ref(1)
const fetchMovies = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page.value}&sort_by=popularity.desc`
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDRlZTZiNTg0MzVkMDlhMzRkOTM2MzQ3MjY4NzdhNyIsIm5iZiI6MTczMDc1OTIxMC4wNDgsInN1YiI6IjY3Mjk0YTJhZGU2OWE3OGJhOTY0NjJmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gf7LSwy31gGc3Njn3kURs9cc5YEIktR7EHxtb015C18',
    },
  })
    .then((res) => res.json())
    .then((movies) => {
      peliculas.value = movies.results
    })
    .finally(() => (loading.value = false))
}
watch(page, () => {
  loading.value = true
  fetchMovies()
})
fetchMovies()
const nextPage = () => {
  page.value = page.value + 1
}
const prevPage = () => {
  page.value = page.value - 1
}
</script>
<template>
  <v-container fluid v-if="!loading">
    <v-row class="mb-4">
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold">Peliculas</h1>
        <p class="text-subtitle-1 text-gray">Populares</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="pelicula in peliculas">
        <v-card hover elevation="2" class="h-100">
          <v-img :src="'https://image.tmdb.org/t/p/w500' + pelicula.poster_path">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>

            <v-chip class="ma-2" color="primary" variant="elevated">
              <v-icon start icon="mdi-star"></v-icon>
              {{ pelicula.vote_average.toFixed(1) }}
            </v-chip>
          </v-img>
          <v-card-title class="text-h6">
            {{ pelicula.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ pelicula.release_date }}
          </v-card-subtitle>
          <v-card-text>
            <p class="text-body-2 text-trucate-3">{{ pelicula.overview }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="text"> Ver mas </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-heart-outline" variant="text"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div v-else>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-progress-circular color="primary" indeterminate></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <button @click="prevPage">anterior</button>
  <button @click="nextPage">siguiente</button>
</template>
<style scoped>
.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.h-100 {
  height: 100%;
}
</style>
