<template>
  <div>
    <div class="container border border-secondary text-center p-2">
      <h2>Trade or view your Portfolio here</h2>
      <p>You may save and load your data</p>
      <p>Click on end day to begi a new day</p>
      <hr />
      <h4>Your funds : ${{ getFunds }}</h4>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFunds"]),
  },
};
</script>