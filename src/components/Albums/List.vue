<template>  
  <v-row>    
    <v-col cols="12" md="12" v-if="error.value">
      <alert :error="error" :type="type" />
    </v-col>
    <v-col cols="12" md="12" v-if="title && !error.value">
      <h1 class="headline content-title">
        {{ title }}
        <v-chip
          class="float-right"
          color="green"
          text-color="white"
        >
          <v-avatar
            left
            class="green darken-4"
          >
            {{ count }}
          </v-avatar>
          álbums
        </v-chip>
      </h1>
    </v-col>
    <v-col cols="12" md="4" v-for="(album, index) in albums" :key="index">
      <v-card
        class="mx-auto"
      >
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">
              {{ album.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <p class="font-weight-medium">
                por Thaís Minas
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    
        <v-img
          :src="album.cover_image"
        ></v-img>
    
        <v-card-text>
          <p class="font-weight-medium">
            {{ album.description_short }}
          </p>
        </v-card-text>

        <v-card-actions>
          <v-btn small color="primary" dark @click="$router.push({ path: `/album/${ album.slug }` })">
            <v-icon>mdi-magnify</v-icon> Visualizar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import Alert from '../../components/Alerts/Alert'
  import axios from 'axios'
  
  export default {
    name: 'ListAlbums',
    components: {
      'alert': Alert
    },
    props: ['title'],
    data() {
      return {
        albums: [],
        count: 0,
        error: {
          value: false,
          message: ''
        },
        type: ''
      }
    },
    mounted() {
      axios
        .get(`http://localhost:8000/v1/galleries/`)
        .then(response => {
          if (response.data.results && response.data.results.length >= 1) {
            this.albums = response.data.results
            this.count = response.data.count
          }
          else {
            this.error.value = true
            this.error.message = 'Ainda não temos nenhum álbum publicado por aqui.'
            this.type = 'warning'
          } 
        })
        .catch(e => {
          this.error.value = true
          this.error.message = e.message
          this.type = 'error'
        })
    } 
  }
</script>