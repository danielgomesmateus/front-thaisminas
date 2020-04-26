<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12" v-if="alert.value">
        <alert :alert="alert" />
      </v-col>
    </v-row>
    <v-row>
      <v-carousel :show-arrows="true" v-if="images.length >= 1">
        <v-carousel-item
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <list-projects :title="titleProjects" />
    <list-albums :title="titleAlbums" />
  </v-container>
</template>

<script>
  import Alert from '../components/Alerts/Alert'  
  import ListProjects from '../components/Projects/List'
  import ListAlbums from '../components/Albums/List'

  import store from '../store/store'

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
          message: '',
          type: ''
        },
        slide: 0,
        donation: true,
        contact: true
      }
    },
    mounted() {
      store.dispatch('page/getPages')
        .then(() => {

        })
        .catch(e => {
          this.alert.value = true
          this.alert.message = e.message
          this.alert.type = 'error'
        })

      store.dispatch('projectCategory/getProjectsCategories')
        .then(() => {
          
        })
        .catch(e => {
          this.alert.value = true
          this.alert.message = e.message
          this.alert.type = 'error'          
        })
    }
  }
</script>
