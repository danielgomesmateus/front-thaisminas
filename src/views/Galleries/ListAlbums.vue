<template>
  <v-app>
    <v-container fluid>
      <list-albums :title="title" />
    </v-container>
  </v-app>
</template>

<script>
  import ListAlbums from '../../components/Albums/List'

  export default {
    components: {
      'list-albums': ListAlbums
    },
    data() {
      return {
        title: ''
      }
    }
  }
</script>
    