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
        key: 0,
        error: {
          value: false,
          message: ''
        }
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
    