<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12">
          <v-alert
            dense
            border="left"
            type="warning"
            v-if="error.value"
          >
            {{ error.message }}
          </v-alert>
        </v-col>
        <v-col cols="12" md="4" v-for="(album, index) in data" :key="index">
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
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        data: [],
        error: {
          value: false,
          message: ''
        }
      }
    },
    mounted() {
      axios
        .get(`http://localhost:8000/v1/galleries/`)
        .then(response => {
          if (response.data.results && response.data.results.length >= 1) {
            this.data = response.data.results
          }
          else {
            this.error.value = true
            this.error.message = 'Ainda não temos nenhum álbum publicado por aqui.'
          } 
        })
        .catch(e => {
          this.error.value = true
          this.error.message = e.message
        })
    }
  }
</script>
    