<script setup>
import { ref } from 'vue'

const toggle = ref(true)
</script>

<template>
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon class="d-md-none" @click="toggle = !toggle"></v-app-bar-nav-icon>
    <v-app-bar-title class="d-none d-md-flex">Application Bar</v-app-bar-title>

    <v-spacer></v-spacer>
    <div class="d-none d-md-flex">
      <v-btn :to="{ name: 'listado' }">Listado</v-btn>
      <v-btn :to="{ name: 'movies' }">Movies</v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer v-model="toggle" temporary location="left">
    <v-list-item tile="Usuario" subtitle="usuario subtitulo"></v-list-item>
    <v-list density="compact" nav>
      <v-list-item :to="{ name: 'listado' }">listado</v-list-item>
      <v-list-item :to="{ name: 'movies' }">movies</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
