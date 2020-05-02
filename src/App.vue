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
              @click="$router.push({ path: item.path }).catch(err => {})"
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
      <vue-page-transition name="zoom">
        <router-view />
      </vue-page-transition>
    </v-content>
  
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="orange accent-3 white--text text-center"
      >
        <v-card-text class="black">
          <help :donation="donation" :contact="contact" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          <v-row
            justify="center"
            no-gutters
          >
            <v-btn
              v-for="(page, index) in pages"
              :key="index"
              color="white"
              text
              @click="$router.push({ path: `/pagina/${ page.slug }` }).catch(err => {})"
            >
              {{ page.title }}
            </v-btn>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

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
  
        <v-card-text class="white--text">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Thaís Minas</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  import Help from './components/Dialogs/Help'

  import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    name: 'App',
    components: {
      'help': Help
    },
    data: () => ({
      donation: false,
      contact: true
    }),
    computed: {
      ...mapGetters({
        getProjectsCategoriesGetter: 'projectCategory/getProjectsCategories',
        getPagesGetter: 'page/getPages',
      }),
      ...mapState({
        icons: state => state.icons,
        items: state => state.items
      }),
      pages() {
        return this.getPagesGetter.results
      }
    },
    methods: {
      ...mapActions({
        getProjectsAction: 'project/getProjects',
        getAlbumsAction: 'album/getAlbums',
        getProjectsCategoriesAction: 'projectCategory/getProjectsCategories',
        getSlidesAction: 'slide/getSlides',
        getPagesAction: 'page/getPages'
      })
    },
    created() {
      this.getProjectsAction()       
      this.getAlbumsAction()
      this.getSlidesAction()
      this.getProjectsCategoriesAction()
      this.getPagesAction()
    }
  }
</script>
