<template>
  <v-app>
    <v-container fluid>
      <list-projects :title="title" />
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
      }
    }
  }
</script>
    