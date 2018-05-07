<template>
  <v-container fluid grid-list-md>
    <v-form v-model="pnrForm">
      <v-text-field maxlength="10" class="mb-2" append-icon="search" :append-icon-cb="fetchPnrStatus" :loading="pnr.loading" box type="number" :rules="[(v) => v.length === 10 || 'Must be a valid 10-digit PNR']" v-model="pnrNumber" label="PNR Number"></v-text-field>
    </v-form>
    <pnr-info :data="pnr.status" :loaded="pnr.dataLoaded" :loading="pnr.loading"></pnr-info>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import PnrInfo from "../components/PnrInfo";
export default {
  data() {
    return {
      pnrNumber: "",
      pnrForm: null
    };
  },
  components: {
    PnrInfo
  },
  computed: {
    ...mapState(["pnr"])
  },
  created() {
    this.$store.dispatch("setPage", "PNR Status");
  },
  methods: {
    fetchPnrStatus() {
      if (this.pnrForm) {
        this.$store.dispatch("fetchPnr", this.pnrNumber);
      }
    }
  }
};
</script>
