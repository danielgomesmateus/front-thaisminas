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
      </v-row>
      <list-projects :data="data" />
    </v-container>
  </v-app>
</template>

<script>
  import ListProjects from '../../components/Projects/List'
  import axios from 'axios'

  export default {
    components: {
      'list-projects': ListProjects
    },
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
    