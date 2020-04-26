<template>
  <v-app>
    <v-container fluid>
      <list-projects :title="title" :projects="projects" />
    </v-container>
  </v-app>
</template>

<script>
  import ListProjects from '../../components/Projects/List'

  import { mapGetters } from 'vuex'

  export default {
    components: {
      'list-projects': ListProjects
    },
    data() {
      return {
        title: '',
      }
    },
    computed: {
      ...mapGetters({
        getProjects: 'project/getProjects',
        getProjectBySlug: 'project/getProjectBySlug'
      }),
      projects() {
        return this.getProjects
      }
    },
    created() {
      this.$store.dispatch('project/getProjects')
    }
  }
</script>
    