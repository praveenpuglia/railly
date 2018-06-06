<template>
  <v-container fluid>
    {{pnrNumber}}
    <pnr-info :data="pnr.status" :loaded="pnr.dataLoaded" :loading="pnr.loading"></pnr-info>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import PnrInfo from "@/components/PnrInfo";
export default {
  components: {
    PnrInfo
  },
  computed: {
    ...mapState(["pnr"]),
    pnrNumber() {
      return this.$store.state.route.params.pnrNumber;
    }
  },
  created() {
    // if the PNR supplied by PNR is not a number and not 10 digits,
    // redirect them back to pnr page. possibly with an error.
    if (!this.pnrNumber.match(/^\d{10}$/)) {
      this.$router.push({ name: "pnrHome" });
    } else {
      this.fetchPnrStatus();
    }
  },
  methods: {
    fetchPnrStatus() {
      this.$store.dispatch("fetchPnr", this.pnrNumber);
    }
  }
};
</script>
