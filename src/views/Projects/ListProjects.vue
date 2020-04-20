<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col md="3">
          <v-card
            class="mx-auto"
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            ></v-img>
        
            <v-card-title>
              Top western road trips
            </v-card-title>
        
            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>
        
            <v-card-actions>
              <v-btn text>Share</v-btn>
        
              <v-btn
                color="purple"
                text
              >
                Explore
              </v-btn>
        
              <v-spacer></v-spacer>
        
              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
        
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
        
                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        data: [],
        show: false
      }
    },
    methods: {

    },
    mounted() {
      axios
        .get(`https://api.thaisminas.com.br/v1/projects/`)
        .then(response => {
          this.data = response.data
        })
        .catch(e => {
          console.error(e.message)
        })
    }
  }
</script>
    