<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <template v-for="(item, index) in items">
            <v-list-item
              v-if="item.action"
              :key="item.title"
              @click="$router.push({ path: item.path })"
            >
              <v-list-item-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider
              v-else-if="item.divider"
              :key="index"
            ></v-divider>

            <v-subheader
              v-else-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>
          </template>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="blue darken-4 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    data: () => ({
      data: [],
      categories: [],
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
      items: [
        { title: 'Home', action: 'mdi-home', path: '/' },
        { title: 'Projetos', action: 'mdi-projector', path: '/projetos' },
        { title: 'Álbums', action: 'mdi-image-search-outline', path: '/albums'  },
        { title: 'Fale Conosco', action: 'mdi-email-newsletter', path: '/fale-conosco'  },
        { divider: true },
        { header: 'Categorias de projeto' },
        { divider: true },
      ]
    }),
    mounted() {
      axios
        .get(`http://localhost:8000/v1/projects-categories/`)
        .then(response => {
          if (response.data.results && response.data.results.length >= 1) {
            this.data = response.data.results
            this.data.forEach(categorie => {
              this.items.push({ title: categorie.name, action: 'mdi-label', path: `/projeto-categorias/${ categorie.slug }`  })
            })
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
  };
</script>
