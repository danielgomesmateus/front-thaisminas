<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="display-1 text-center">
            {{ project.name }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="text-left" v-html="project.content">
          </div>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn
            small
            dark
            color="success"
            class="white--text"
            @click="downloadProject"
          >
            <v-icon>mdi-cloud-download</v-icon> <span class="font-weight-bold"> Baixar projeto</span>
          </v-btn>
          <v-dialog
            v-model="dialog"
            width="300"
          >
            <v-card
              color="primary"
              dark
            >
              <v-card-text>
                Aguarde um momento...
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
  import { mapActions } from 'vuex'
  import axios from 'axios'

  export default {
    data() {
      return {
        project: {},
        dialog: false
      }
    },
    methods: {
      ...mapActions({
        getProjectByActions: 'project/getProjectBySlug'
      }),
      downloadProject() {
        this.dialog =  true
        
        axios({
          method: 'GET',
          url: `${ process.env.VUE_APP_BASE_URL_API }files/${ this.project.slug }`,
          responseType: 'blob'
        })
        .then(response => {
          const fileURL = window.URL.createObjectURL(new Blob([response.data]))
          let fileLink = document.createElement('a')  

          fileLink.href = fileURL
          fileLink.setAttribute('download', `${ this.project.name }.zip`)
          document.body.appendChild(fileLink)   
          fileLink.click()

          this.dialog = false
        })
        .catch(error => {
          this.dialog = false

          this.alert.value = true
          this.alert.type = 'error'
          this.alert.message = error.message
        })
      }
    },
    mounted: function() {
      const slug = this.$route.params.slug     

      this.getProjectByActions(slug)
        .then(response => {
          if (response == undefined) {
            this.$router.push({ path: '/pagina-nao-encontrada' })
            return false
          }

          this.project = response
        })
        .catch(e => {
          this.$router.push({ path: '/pagina-nao-encontrada' })
          console.error(e.message)
        })
    }
  }
</script>