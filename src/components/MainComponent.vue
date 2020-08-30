<template>
  <div>
    <div class="container-fluid my-2">
      <header-view></header-view>
      <hr />
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- <home-view></home-view> -->
    </div>
  </div>
</template>
<script>
import headerView from "./Header/header";
// import homeView from "./Homepage/Home";
export default {
  components: {
    headerView,
    // homeView,
  },
};
</script>

<style scoped>
  .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>