<template>
  <v-app>
    <v-container fluid>
      <list-albums :title="title" :albums="albums" />
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
        getAlbums: 'album/getAlbums',
        getAlbumBySlug: 'album/getAlbumBySlug'
      }),
      albums() {
        return this.getAlbums
      }
    },
    created() {
      this.$store.dispatch('album/getAlbums')
    }
  }
</script>
    