<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <h1 class="display-1 text-center">
            {{ page.title }}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <div class="text-left" v-html="page.content">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        page: {}
      }
    },
    methods: {
      ...mapActions({
        getPageBySlugAction: 'page/getPageBySlug'
      })
    },
    mounted: function() {
      const slug = this.$route.params.slug
      
      this.getPageBySlugAction(slug)
        .then(response => {
          if (response == undefined) {
            this.$router.push({ path: '/pagina-nao-encontrada' })
            return false
          }

          this.page = response
        })
        .catch(e => {
          this.$router.push({ path: '/pagina-nao-encontrada' })
          console.error(e.message)
        })
    }
  }
</script>