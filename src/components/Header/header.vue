<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light my-4">
      <router-link tags="a" class="navbar-brand" to="/">StockTrader</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link tags="a" class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link tags="a" class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link tags="a" class="nav-link" to="/stocks">Stocks</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto pr-4">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#" @click.prevent="saveData">Save data</a>
              <a class="dropdown-item" href="#" @click.prevent="loadData">Load data</a>
            </div>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#" @click.prevent="end">EndDay</a>
          </li>
          <li class="nav-item">
            <span class="navbar-text">Funds : ${{ getFunds }}</span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFunds"]),
  },
  methods: {
    end() {
      this.$store.dispatch("randomStockAction");
    },
    saveData() {
      console.log("Excuse me");
      var storefund = this.$store.state.funds;
      var storeData = this.$store.state.stockPortfolio;
      var data = {
        funds: storefund,
        stockPortfolio: storeData,
      };
      console.log(storefund);
      console.log(storeData);
      this.$http
        .put("https://stocktrader-1b50b.firebaseio.com/data.json", data)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    },
    loadData() {
      this.$http.get("https://stocktrader-1b50b.firebaseio.com/data.json").then(
        (data) => {
          // console.log(data);
          console.log(data.body.funds);
          console.log(data.body.stockPortfolio);
          this.$store.state.funds = data.body.funds;
          this.$store.state.stockPortfolio = data.body.stockPortfolio;
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>