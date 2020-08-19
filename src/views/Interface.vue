<template id="interface">
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">

                        <h1 class="display-3  text-white">WaveRider API
                            <span>v1</span>
                        </h1>

                        <div class="row">
                            <div class="col-lg-6">

                              <div class="row" style='margin-top:20px;'>
                               <div class="col-md-6">
                                 <h5 style='color:white;'>HTTP Request</h5>
                                 <base-button @click.prevent="postCandles_WaveRiderAPI()" class="mb-3 mb-sm-0"
                                              type="default"
                                              icon="fa fa-plug"
                                              style='margin-top:0px;'>
                                     POST candles
                                 </base-button>
                                 <base-input style="margin-top:20px; width:70px;" v-on:keyup.enter="postCandles_WaveRiderAPI" v-model='timeframe' />
                               </div>

                               <!-- <div class="col-md-6">
                                 <h5 style='color:white;'>Post Data</h5>
                                 <highlight-code lang="javascript" style='border-radius: 3px;'>
                                   <pre>
                                      // JSON
                                      {
                                        timeframe: {{timeframe}}
                                      }
                                    </pre>
                                 </highlight-code>
                               </div>-->
                             </div>

                            <div class="row" style="margin-top:120px; width:560px">
                              <div>
                               <vue-snotify></vue-snotify>
                               </div>
                             </div>

                             <div class="row">
                              <div class="col-md-6">
                                <base-button @click.prevent="getCandles_WaveRiderAPI()" class="mb-3 mb-sm-0" style='margin-top:-120px;'
                                             type="default"
                                             icon="fa fa-plug">
                                    GET candles
                                </base-button>
                              </div>
                            </div>

                            <div class="row">
                             <div class="col-md-auto">

                               <table class="table table-light" style="width:100%; margin-top:50px">
                                 <thead>
                                   <tr>
                                     <th scope="col">CandlesId</th>
                                     <th scope="col">Timeframe</th>
                                     <th scope="col">Candles</th>
                                     <!-- <th scope="col">Entries</th>
                                     <th scope="col">TPs</th>
                                     <th scope="col">Volume</th>
                                     <th scope="col">P/L</th> -->
                                   </tr>
                                 </thead>
                                 <tbody>
                                   <!-- v-bind:class="{ 'hidden': candleId === res._id } -->
                                   <tr v-for="(res, index) in response" v-bind:key="index">
                                     <td>{{ res._id }}</td>
                                     <td>{{ res.timeframe }}</td>
                                     <td v-if="res.dataset">{{ res.dataset[0] }}</td>
                                     <td>
                                      <base-button @click.prevent="deleteCandles_WaveRiderAPI(res._id, index)" class="mb-3 mb-sm-0"
                                        type="warning"
                                        icon="">
                                        delete
                                      </base-button>
                                    </td>
                                   </tr>
                                 </tbody>
                                </table>

                             </div>
                           </div>
                         </div>

                          <!-- <div class="col-lg-6">
                            <h5 style='color:white; margin-top:20px;'>Return Data</h5>
                            <div style='background-color: #282a36; height:200px; overflow-y:scroll;
                              padding: 10px; border-color: #282a36; border-radius: 3px; font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'>
                              <highlight-code lang="javascript" style='border-radius: 3px;'>
                                <pre>
                                  {{response}}
                                </pre>
                             </highlight-code>
                            </div>
                          </div> -->

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import {
  mapState,
  mapMutations
} from 'vuex';

import axios from 'axios';
import Snotify from 'vue-snotify';


export default {
  template: '#interface',
  methods: {
    updateTimeframe (e) {
      this.$store.commit('updateTimeframe', e.target.value)
    },
    updateResponse (e) {
      this.$store.commit('updateResponse', e.target.value)
    },
    updateCandleId (e) {
      this.$store.commit('updateCandleId', e.target.value)
    },
    postCandles_WaveRiderAPI() {
        axios
          .post('http://localhost:8080/candles', {
              body: {
                timeframe: this.$store.state.timeframe
              }
          })
          .then(res => {

            const userEditedResponse = this.$store.state.response;

            userEditedResponse.push({
              _id: res.data._id,
              timeframe: res.data.timeframe,
              dataset: res.data.dataset
            });

            this.$store.commit('updateResponse', userEditedResponse);

            this.$snotify.success({
                body: '200',
                title: 'OK',
                config: {}
            });
          })
          .catch(error => {
            this.$snotify.error({
                body: '500',
                title: 'Server Error.',
                config: {}
            });
          })
    },
    getCandles_WaveRiderAPI() {
        axios
          .get('http://localhost:8080/candles')
          .then(res => {
            this.$store.commit('updateResponse', res.data);
            this.$snotify.success(
             {
                body: '200',
                title: 'OK'
            });
          })
          .catch(error => {
            if (error.response) {
              this.$snotify.error({
                  body: '500',
                  title: 'Server Error.',
                  config: {}
              });
            }
          })
    },
    deleteCandles_WaveRiderAPI(candleId, index) {
          axios
            .delete('http://localhost:8080/candles', {
                data: {
                  candleId: candleId
                }
            })
            .then(res => {
              // this.$store.commit('updateCandleId', res.data.message)
              const userEditedResponse = this.$store.state.response;
              userEditedResponse.splice(index, 1);
              this.$store.commit('updateResponse', userEditedResponse);
              this.$snotify.success({
                  body: '200',
                  title: 'OK',
                  config: {}
              });
            })
            .catch(error => {
              if (error.response) {
								this.$snotify.error({
					          body: '404',
					          title: 'Not Found',
					          config: {}
					      });
              }
            });
      }
  },
  computed: {
    candleId: {
      get: function () {
        return this.$store.state.candleId
      },
      set: function (value) {
          return this.$store.commit('updateCandleId', value);
      }
    },
    timeframe: {
      get: function () {
          return this.$store.state.timeframe
      },
      set: function (value) {
          return this.$store.commit('updateTimeframe', value);
      }
    },
    ...mapState([
      'response'
    ])
  }
}
</script>

<style>
.hidden {
  visibility: collapse;
}
</style>
