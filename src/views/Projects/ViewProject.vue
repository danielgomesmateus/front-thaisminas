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
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        dialog: false
      }
    },
    computed: {
      ...mapGetters({
        getProjectBySlugGetter: 'project/getProjectBySlug'
      }),
      project() {
        const slug = this.$route.params.slug     
        return this.getProjectBySlugGetter(slug)
      }
    },
    methods: {
      downloadProject() {
        this.dialog =  true
      }
    }
  }
</script>