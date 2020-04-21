<template>
  <v-container fluid>
    <list-projects :title="titleProjects" />
    <list-albums :title="titleAlbums" />
  </v-container>
</template>

<script>
  import ListProjects from '../components/Projects/List'
  import ListAlbums from '../components/Albums/List'

  export default {
    components: {
      'list-projects': ListProjects,
      'list-albums': ListAlbums
    },
    data() {
      return {
        titleProjects: 'Conheça meus projetos',
        titleAlbums: 'Fotos de eventos',
      }
    }
  }
</script>
