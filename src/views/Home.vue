<template>
  <v-container fluid>
    <v-row>
      <v-carousel :show-arrows="true" v-if="images.length >= 1">
        <v-carousel-item
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <list-projects :title="titleProjects" :projects="projects" />
    <list-albums :title="titleAlbums" :albums="albums" />
  </v-container>
</template>

<script>
  import ListProjects from '../components/Projects/List'
  import ListAlbums from '../components/Albums/List'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      'list-projects': ListProjects,
      'list-albums': ListAlbums
    },
    data() {
      return {
        titleProjects: 'Conheça meus projetos',
        titleAlbums: 'Fotos de eventos',
        slide: 0,
        images: []
      }
    },
    computed: {
      ...mapGetters({
        getProjects: 'project/getProjects',
        getProjectBySlug: 'project/getProjectBySlug',
        getAlbums: 'album/getAlbums',
        getAlbumBySlug: 'album/getAlbumBySlug'
      }),
      projects() {
        return this.getProjects
      },
      albums() {
        return this.getAlbums
      }
    },
    created() {
      this.$store.dispatch('project/getProjects')
      this.$store.dispatch('album/getAlbums')
    }
  }
</script>
