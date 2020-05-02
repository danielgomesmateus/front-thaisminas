<template>
  <v-app>
    <v-container>
      <list-albums :title="title" :albums="albums" :count="albums_count" />
    </v-container>
  </v-app>
</template>

<script>
  import ListAlbums from '../../components/Albums/List'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      'list-albums': ListAlbums
    },
    data() {
      return {
        title: ''
      }
    },
    computed: {
      ...mapGetters({
        getAlbums: 'album/getAlbums'
      }),
      albums() {
        return this.getAlbums.results
      },
      albums_count() {
        return this.getAlbums.count
      }
    }
  }
</script>
    