<template>
  <v-app>
    <v-container fluid hidden-sm-and-down>
      <v-row>
        <v-carousel 
          v-if="slides_count"
          cycle
          height="500"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, index) in slides"
            :key="index"
            :src="slide.image"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3 white--text">{{ slide.title }}</div>
            </v-row>
          </v-carousel-item>
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
        titleProjects: 'Projetos',
        titleAlbums: 'Eventos',
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

<style>
  .container--fluid {
    padding: 0px;
  }
</style>
