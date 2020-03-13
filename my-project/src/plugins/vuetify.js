import Vue from 'vue';
// import Vuetify from 'vuetify/lib';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
// import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      primary: colors.red.darken1,
      secondary: colors.red.lighten4,
      accent: colors.indigo.base,
    }
  },
  // icons: {
  //   iconfont: 'mdi',
  // }
});
