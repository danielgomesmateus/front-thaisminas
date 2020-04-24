<template>
  <v-container fluid>
    <alert :alert="alert" :type="type" v-if="alert.value" />
    <b-carousel
      v-if="images.length >= 1"
      id="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :caption="image.title"
        :text="image.description_short"
        :img-src="image.image"
      ></b-carousel-slide>
    </b-carousel>
    <list-projects :title="titleProjects" />
    <list-albums :title="titleAlbums" />
  </v-container>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import Alert from '../components/Alerts/Alert'  
  import ListProjects from '../components/Projects/List'
  import ListAlbums from '../components/Albums/List'

  import axios from 'axios'

  export default {
    components: {
      'alert': Alert,
      'list-projects': ListProjects,
      'list-albums': ListAlbums
    },
    data() {
      return {
        titleProjects: 'Conheça meus projetos',
        titleAlbums: 'Fotos de eventos',
        images: [],
        alert: {
          value: false,
          message: ''
        },
        type: '',
        slide: 0
      }
    },
    mounted() {
      axios
        .get(`http://localhost:8000/v1/slides/`)
        .then(response => {
          if (response.data.results && response.data.results.length >= 1) {
            this.images = response.data.results
          }
        })
        .catch(e => {
          this.alert.value = true
          this.alert.message = e.message
          this.type = 'error'
        })
    }
  }
</script>
