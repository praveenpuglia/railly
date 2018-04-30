<template>
  <v-container fluid grid-list-md>
      <v-card loading flat class="pnr-status">
          <v-card-text>
              <v-card class="mb-2 pnr-status__journey">
                  <v-card-title><h2 class="subheading">Journey Details</h2></v-card-title>
                  <v-card-text>
                      <h1 class="title">
                          <v-icon medium>today</v-icon>
                          {{pnr.doj}}
                      </h1>
                      <v-layout>
                          <v-flex xs6 >
                            <v-card flat>
                                <v-card-title primary-title>
                                    <v-flex>
                                        <small v-text="pnr.from_station.name"></small>
                                        <h1 class="display-2" v-text="pnr.from_station.code"></h1>
                                    </v-flex>
                                </v-card-title>
                            <v-card-text>
                                <h2 class="body-2">Boarding At</h2>
                                <h3 class="headline">{{pnr.boarding_point.name}}</h3>
                            </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs6 >
                            <v-card flat>
                                <v-card-title primary-title>
                                    <v-spacer></v-spacer>
                                    <v-flex class="text-xs-right">
                                        <small v-text="pnr.to_station.name"></small>
                                        <h1 class="display-2" v-text="pnr.to_station.code"></h1>
                                    </v-flex>
                                </v-card-title>
                                <v-card-text class="text-xs-right">
                                    <h2 class="body-2">Reservation Upto</h2>
                                    <h3 class="headline">{{pnr.reservation_upto.name}}</h3>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                      </v-layout>
                  </v-card-text>
              </v-card>
            <v-card class="mb-2 pnr-status__passenger">
                  <v-card-title><h2 class="subheading">Passenger Details</h2></v-card-title>
                  <v-card-text>
                      <h2 class="headline">Class &mdash; {{pnr.journey_class.code}}</h2>
                      <v-data-table 
                        hide-actions
                        :headers="headers"
                        :items="pnr.passengers">
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.no }}</td>
                            <td>{{ props.item.booking_status }}</td>
                            <td>{{ props.item.current_status }}</td>
                        </template>
                        </v-data-table>
                  </v-card-text>
              </v-card>
              <v-card class="pnr-status__train">
                  <v-card-title><h2 class="subheading">Train Details</h2></v-card-title>
                  <v-card-text>
                    <v-toolbar flat>
                        <v-toolbar-title>
                            {{pnr.train.number}}&mdash;{{pnr.train.name}} 
                            <span class="ml-4" :class="chartingStatus.class">{{chartingStatus.text}}</span>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip top>
                            <v-btn icon slot="activator">
                                <v-icon>map</v-icon>
                            </v-btn>
                            <span>Live Status</span>
                        </v-tooltip> 
                        <v-tooltip top>
                            <v-btn icon slot="activator">
                                <v-icon>timeline</v-icon>
                            </v-btn>
                            <span>Train Route</span>
                        </v-tooltip>                                           
                    </v-toolbar>
                  </v-card-text>
              </v-card>
          </v-card-text>
      </v-card>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["pnr"]),
    chartingStatus() {
      if (this.pnr.chart_prepared) {
        return { text: "Chart Prepared", class: "green--text" };
      }
      return { text: "Chart Not Prepared", class: "red--text" };
    }
  },
  data() {
    return {
      headers: [
        { text: "#", sortable: false },
        { text: "Booking Status", sortable: false },
        { text: "Current Status", sortable: false }
      ]
    };
  }
};
</script>
