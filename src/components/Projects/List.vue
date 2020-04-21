<template>  
  <v-row>
    <v-col cols="12" md="12" v-if="title">
      <h1 class="headline content-title">
        {{ title }}
        <v-chip
          class="float-right"
          color="green"
          text-color="white"
        >
          <v-avatar
            left
            class="green darken-4"
          >
            {{ count }}
          </v-avatar>
          projetos
        </v-chip>
      </h1>
    </v-col>
    <v-col cols="12" md="4" v-for="(project, index) in projects" :key="index">
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
  import axios from 'axios'

  export default {
    name: 'ListProjects',
    props: ['title', 'slug', 'display'],
    data() {
      return {
        projects: [],
        count: 0
      }
    },
    mounted() {
      const url = this.slug ? `http://localhost:8000/v1/projects-categories/${ this.slug }` : `http://localhost:8000/v1/projects/`
      
      axios
        .get(url)
        .then(response => {
          if (response.data.results && response.data.results.length >= 1) {
            this.projects = response.data.results
            this.count = response.data.count
          }
          else if (response.data.projects && response.data.projects.length >= 1) {
            this.projects = response.data.projects
            this.count = response.data.projects.length
          }
          else {
            this.error.value = true
            this.error.message = 'Ainda não temos nenhum projeto publicado por aqui.'
          }          
        })
        .catch(e => {
          this.error.value = true
          this.error.message = e.message
        })
    } 
  }
</script>

<style>
  .content-title {
    background: #1565C0;
    color: #FFF;
    padding: 8px;
    border-radius: 3px;
  }
</style>