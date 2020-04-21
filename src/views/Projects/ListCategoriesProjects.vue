<template>
  <v-app>
    <v-container fluid>
      <list-projects :title="title" :slug="this.$route.params.slug" :display="display" :key="key" />
    </v-container>
  </v-app>
</template>

<script>
  import ListProjects from '../../components/Projects/List'

  export default {
    components: {
      'list-projects': ListProjects
    },
    data() {
      return {
        title: '',
        slug: '',
        display: true,
        key: 0
      }
    },
    watch: {
      $route (to){
        this.slug = to.params.slug
        this.key += 1
      }
    }
  }
</script>
    