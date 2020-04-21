<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12" v-if="error.value">
        <alert :error="error" :type="type" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Alert from '../components/Alerts/Alert'

  export default {
    components: {
      'alert': Alert
    },
    data() {
      return {
        error: {
          value: true,
          message: '404 - Página não encontrada.'
        },
        type: 'error'
      }
    }
  }
</script>
