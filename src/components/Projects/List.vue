<template>  
  <v-row>
    <v-col md="4" v-for="(project, index) in data" :key="index">
      <v-card
        class="mx-auto"
      >
        <v-img
          :src="project.cover_image"
        ></v-img>
    
        <v-card-title>
          {{ project.name }}
        </v-card-title>
    
        <v-card-subtitle>
          {{ project.description_short }}
        </v-card-subtitle>
    
        <v-card-actions>
          <v-btn small color="primary" dark @click="$router.push({ path: `/projeto/${ project.slug }` })">
            <v-icon>mdi-magnify</v-icon> Visualizar
          </v-btn>
        </v-card-actions>
    
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'ListProjects',
    data() {
      return {
      }
    },
    props: ['data']
  }
</script>