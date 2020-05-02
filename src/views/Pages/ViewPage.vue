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
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        getPageBySlugGetter: 'page/getPageBySlug'
      }),
      page() {
        const slug = this.$route.params.slug
        return this.getPageBySlugGetter(slug)
      }
    }
  }
</script>