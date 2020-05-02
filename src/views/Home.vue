<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-carousel :show-arrows="true" v-if="slides_count">
          <v-carousel-item
            v-for="(slide, index) in slides"
            :key="index"
            :src="slide.image"
            :options="options"
          ></v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
    <v-container>
      <list-projects :title="titleProjects" :projects="projects" :count="projects_count" />
      <list-albums :title="titleAlbums" :albums="albums" :count="albums_count" />
    </v-container>
  </v-app>
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
        options: {
          slideshowInterval: 3000
        }
      }
    },
    computed: {
      ...mapGetters({
        getProjects: 'project/getProjects',
        getAlbums: 'album/getAlbums',
        getSlides: 'slide/getSlides'
      }),
      projects() {
        return this.getProjects.results
      },
      projects_count() {
        return this.getProjects.count
      },
      albums() {
        return this.getAlbums.results
      },
      albums_count() {
        return this.getAlbums.count
      },
      slides() {
        return this.getSlides.results
      },
      slides_count() {
        return this.getSlides.count
      }
    }
  }
</script>
