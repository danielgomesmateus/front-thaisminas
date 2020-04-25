<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="display-1 text-center">
            {{ data.name }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="text-left" v-html="data.content">
          </div>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn
            color="success"
            class="ma-2 white--text"
            @click="downloadProject"
          >
            Baixar projeto
            <v-icon right dark>mdi-cloud-download</v-icon>
          </v-btn>
          <v-dialog
            v-model="dialog"
            hide-overlay
            persistent
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                Aguarde um momento.
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
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
        .get(`${ process.env.VUE_APP_BASE_URL_API }projects/${ slug }`)
        .then(response => {
          this.data = response.data
        })
        .catch(e => {
          this.$router.push({ path: '/pagina-nao-encontrada' })
          console.error(e.message)
        })
    }
  }
</script>