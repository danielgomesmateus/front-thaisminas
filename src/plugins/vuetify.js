import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import minifyTheme from 'minify-css-string'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#967C0B',
        info: '#FF6D00',
        anchor: '#FFF'
      },
    },
    dark: false,
    options: { minifyTheme },
  },
});
