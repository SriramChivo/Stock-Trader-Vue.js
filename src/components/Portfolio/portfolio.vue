<template>
  <div>
    <div v-if="portfolios.length!=0">
      <div class="row p-5">
        <port-Comp v-for="k in portfolios" :key="k" :stocks="k"></port-Comp>
      </div>
    </div>
    <div v-else>
      <p class="lead">No Portfolio's available please buy stocks</p>
    </div>
    <!-- <p v-for="k in stocks" :key="k">{{k.price}}</p> -->
  </div>
</template>
<script>
import portComp from "./stockInd";
export default {
  components: {
    portComp,
  },
  data() {
    return {
      portfolios: this.$store.state.stockPortfolio,
    };
  },
  watch: {
    "$store.state.stockPortfolio"() {
      this.portfolios = this.$store.state.stockPortfolio;
    },
  },
};
</script>