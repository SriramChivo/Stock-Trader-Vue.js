<template>
  <div class="col-md-4 mb-5">
    <div class="card">
      <div class="card-header bg-success">
        {{stocks.name}}
        <span class="float-right">Rate: {{stocks.price}}</span>
      </div>
      <div class="card-body">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">Enter a Number</label>
            <input
              v-model="value"
              type="number"
              class="form-control"
              id="inputPassword2"
              placeholder="Enter a Number"
              size="24"
            />
            <template>
              <button
                type="submit"
                class="btn btn-primary btn-default mx-5"
                :disabled="value.length<=0 || value==0"
                @click.prevent="buystocks"
              >Buy</button>
            </template>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stocks"],
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    buystocks() {
      var order;
      order = {
        id: this.stocks.id,
        name: this.stocks.name,
        price: this.stocks.price,
        quantity: this.value,
      };
      // console.log(order);
      this.$store.dispatch("portfolioActions", order);
      this.value = 0;
    },
  },
  created() {
    console.log(this.$store.getters.getFunds);
  },
};
</script>