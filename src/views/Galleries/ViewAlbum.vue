<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col md="12">
          <h1 class="display-1 text-center">
            {{ data.name }}
          </h1>
          <div class="text-center">
            <v-chip
              class="ma-2"
              color="primary"
              label
              text-color="white"
            >
              <v-icon left>mdi-label</v-icon>
              {{ data.photos.length }} fotos neste álbum
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col md="12">
          <div class="text-left" v-html="data.content">
          </div>
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
        dialog: false
      }
    },
    methods: {
      downloadProject() {
        this.dialog =  true
      }
    },
    mounted() {
      const slug = this.$route.params.slug
      axios
        .get(`http://localhost:8000/v1/galleries/${ slug }`)
        .then(response => {
          this.data = response.data
        })
        .catch(e => {
          console.error(e.message)
        })
    }
  }
</script>