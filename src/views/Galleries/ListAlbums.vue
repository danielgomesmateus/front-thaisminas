<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12">
          <v-alert
            dense
            border="left"
            type="warning"
            v-if="alert.value"
          >
            {{ alert.message }}
          </v-alert>
        </v-col>
      </v-row>
      <list-albums :title="title" />
    </v-container>
  </v-app>
</template>

<script>
  import ListAlbums from '../../components/Albums/List'

  export default {
    components: {
      'list-albums': ListAlbums
    },
    data() {
      return {
        title: '',
        alert: {
          value: false,
          message: ''
        }
      }
    }
  }
</script>
    