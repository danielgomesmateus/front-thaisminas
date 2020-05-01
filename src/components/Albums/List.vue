<template>  
  <v-row>
    <v-col cols="12" md="12" v-if="albums.count == 0">    
      <alert :alert="alert" />
    </v-col>
    <v-col cols="12" md="12" v-if="title && albums.count >= 1">
      <h1 class="title content-title">
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
            {{ albums.count }}
          </v-avatar>
          álbums
        </v-chip>
      </h1>
    </v-col>
    <v-col cols="12" md="4" v-for="(album, index) in albums.results" :key="index">
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
          <v-btn small color="info" dark @click="$router.push({ path: `/album/${ album.slug }` }).catch(err => {})">
            <v-icon>mdi-magnify</v-icon> <span class="font-weight-bold">Visualizar</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import Alert from '../../components/Alerts/Alert'
  
  export default {
    name: 'ListAlbums',
    components: {
      'alert': Alert
    },
    props: ['title', 'albums'],
    data() {
      return {
        alert: {
          value: true,
          type: 'warning',
          message: 'Nenhum álbum publicado por aqui ainda.'
        }
      }
    }
  }
</script>