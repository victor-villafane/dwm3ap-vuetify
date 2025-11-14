<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
    <v-layout>
      <NavBar></NavBar>
      <ul>
        <li><RouterLink to="/">Listado</RouterLink></li>
        <li><RouterLink to="/movies">Peliculas</RouterLink></li>
      </ul>
      <v-main>
        <v-container>
          <RouterView></RouterView>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
