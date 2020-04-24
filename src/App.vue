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
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
          @click="$router.push({ path: link.path })"
        >
          {{ link.title }}
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Thaís Minas</strong>
        </v-col>
      </v-row>
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
      links: [
        { title: 'Home', action: 'mdi-home', path: '/' },
        { title: 'Projetos', action: 'mdi-projector', path: '/projetos' },
        { title: 'Álbums', action: 'mdi-image-search-outline', path: '/albums'  },
        { title: 'Fale Conosco', action: 'mdi-email-newsletter', path: '/fale-conosco'  },
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
            this.alert.value = true
            this.alert.message = 'Ainda não temos nenhum projeto publicado por aqui.'
          }          
        })
        .catch(e => {
          this.alert.value = true
          this.alert.message = e.message
        })    
    }
  };
</script>
