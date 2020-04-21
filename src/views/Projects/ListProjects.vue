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
        error: {
          value: false,
          message: ''
        }
      }
    }
  }
</script>
    