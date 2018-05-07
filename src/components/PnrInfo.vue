<template>
    <div class="pnr-info">
        <v-card flat v-if="loaded && data.pnr">
            <v-card-text>
                <v-card class="mb-2 pnr-info__journey">
                    <v-card-title>
                        <h2 class="subheading">Journey Details -
                            <strong>{{data.pnr}}</strong>
                        </h2>
                    </v-card-title>
                    <v-card-text>
                        <h1 class="title">
                            <v-icon medium>today</v-icon>
                            {{data.doj}}
                        </h1>
                        <v-layout>
                            <v-flex xs6>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <v-flex>
                                            <small v-text="data.from_station.name"></small>
                                            <h1 class="display-2" v-text="data.from_station.code"></h1>
                                        </v-flex>
                                    </v-card-title>
                                    <v-card-text>
                                        <h2 class="body-2">Boarding At</h2>
                                        <h3 class="headline">{{data.boarding_point.name}}</h3>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs6>
                                <v-card flat>
                                    <v-card-title primary-title>
                                        <v-spacer></v-spacer>
                                        <v-flex class="text-xs-right">
                                            <small v-text="data.to_station.name"></small>
                                            <h1 class="display-2" v-text="data.to_station.code"></h1>
                                        </v-flex>
                                    </v-card-title>
                                    <v-card-text class="text-xs-right">
                                        <h2 class="body-2">Reservation Upto</h2>
                                        <h3 class="headline">{{data.reservation_upto.name}}</h3>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
                <v-card class="mb-2 pnr-info__passenger">
                    <v-card-title>
                        <h2 class="subheading">Passenger Details</h2>
                    </v-card-title>
                    <v-card-text>
                        <h2 class="headline">Class &mdash; {{data.journey_class.code}}</h2>
                        <v-data-table hide-actions :headers="headers" :items="data.passengers">
                            <template slot="items" slot-scope="props">
                                <td>{{ props.item.no }}</td>
                                <td>{{ props.item.booking_status }}</td>
                                <td>{{ props.item.current_status }}</td>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
                <v-card class="pnr-info__train">
                    <v-card-title>
                        <h2 class="subheading">Train Details</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-toolbar flat>
                            <v-toolbar-title>
                                {{data.train.number}}&mdash;{{data.train.name}}
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
        <v-alert :value="true" v-else-if="loaded && !data.pnr">The given PNR is invalid.</v-alert>
    </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    loaded: {
      type: Boolean,
      default: false
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
  },
  computed: {
    chartingStatus() {
      if (this.data.chart_prepared) {
        return { text: "Chart Prepared", class: "green--text" };
      }
      return { text: "Chart Not Prepared", class: "red--text" };
    }
  }
};
</script>
