<template>
    <v-container>
        <v-form @submit.prevent="searchPnr" v-model="pnrForm">
            <v-text-field maxlength="10" class="mb-4" append-icon="search" :append-icon-cb="searchPnr" type="text" :rules="[(v) => v.length === 10 || 'Must be a valid 10-digit PNR']" v-model="pnrNumber" label="PNR Number"></v-text-field>
        </v-form>
        <h1 class="headline">Previously Searched PNRs</h1>
        <v-expansion-panel class="mt-4" v-if="searchedPnrs.length">
            <v-expansion-panel-content v-for="pnr in searchedPnrs" :key="pnr.pnr">
                <div slot="header">{{pnr.pnr}}</div>
                <v-card>
                    Yeah! This was searched before. We know!
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-alert outline class="mt-4" type="info" :value="true" v-if="!searchedPnrs.length">You have not searched for PNRs before.</v-alert>
    </v-container>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["searchedPnrs"]),
    ...mapState(["pnr"])
  },
  data() {
    return {
      pnrNumber: "",
      pnrForm: null
    };
  },
  created() {
    this.$store.dispatch("fetchSearchedPnrs");
  },
  methods: {
    searchPnr() {
      if (this.pnrForm) {
        this.$router.push({
          name: "pnrStatus",
          params: { pnrNumber: this.pnrNumber }
        });
      }
    }
  }
};
</script>
