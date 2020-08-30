<template>
  <div>
    <div class="row p-5">
      <ind-stock v-for="k in stocks" :key="k" :stocks="k"></ind-stock>
    </div>
    <!-- <p v-for="k in stocks" :key="k">{{k.price}}</p> -->
  </div>
</template>

<script>
import indStock from "./individualStock";
export default {
  components: {
    indStock,
  },
  data() {
    return {
      stocks: [
        {
          id: 1,
          price: 99,
          name: "Google",
        },
        {
          id: 2,
          price: 69,
          name: "Microsoft",
        },
        {
          id: 3,
          price: 39,
          name: "TCS",
        },
        {
          id: 4,
          price: 89,
          name: "Apple",
        },
        {
          id: 5,
          price: 81,
          name: "Hyundai",
        },
        {
          id: 6,
          price: 75,
          name: "Honda",
        },
      ],
    };
  },
};
</script>