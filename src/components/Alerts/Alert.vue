<template>    
  <v-row>
    <v-col cols="12" md="12">
      <v-alert
        dense
        border="left"
        :type="type"
        v-if="alert.value"
      >
        {{ alert.message }}
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>  
  export default {
    name: 'Alert',
    props: ['alert', 'type']
  }
</script>