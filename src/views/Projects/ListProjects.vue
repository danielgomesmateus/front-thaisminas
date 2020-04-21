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
        <v-col md="4" v-for="(project, index) in data" :key="index">
          <v-card
            class="mx-auto"
          >
            <v-img
              :src="project.cover_image"
            ></v-img>
        
            <v-card-title>
              {{ project.name }}
            </v-card-title>
        
            <v-card-subtitle>
              {{ project.description_short }}
            </v-card-subtitle>
        
            <v-card-actions>
              <v-btn small color="primary" dark @click="$router.push({ path: `/projeto/${ project.slug }` })">
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
        .get(`http://localhost:8000/v1/projects/`)
        .then(response => {
          if (response.data.results && response.data.results.length >= 1) {
            this.data = response.data.results
          }
          else {
            this.error.value = true
            this.error.message = 'Ainda não temos nenhum projeto publicado por aqui.'
          }          
        })
        .catch(e => {
          this.error.value = true
          this.error.message = e.message
        })
    }
  }
</script>
    