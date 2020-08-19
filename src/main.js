import Vue from "vue";
import App from "./App.vue";
import Vuex from 'vuex'
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';
import VueHighlightJS from 'vue-highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/dracula.css';
import Snotify from 'vue-snotify';
// import '../node_modules/vue-snotify/styles/material.css';
import { SnotifyPosition, SnotifyToast, SnotifyToastConfig } from 'vue-snotify';

Vue.use(Argon);
Vue.use(Vuex);
Vue.use(VueHighlightJS, {
	languages: {
		javascript
	}
});
Vue.use(Snotify)
Vue.config.productionTip = false;


const store = new Vuex.Store({
  strict: false,
  state: {
    timeframe: null,
    response: [],
    deletedCandleId: null,
    candleId: null
  },
  mutations: {
      updateTimeframe (state, timeframe) {
        state.timeframe = timeframe;
      },
      updateCandleIdresponse (state, candleId) {
        state.candleId = candleId;
      },
			updateResponse (state, response) {
				state.response = response;
			},
			updateCandleId (state, candleId) {
				state.candleId = candleId;
		}
    }
  })

new Vue({
  router,
  render: h => h(App),
  store
}).$mount("#app");
