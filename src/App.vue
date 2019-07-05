<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout";

export default {
  components: {
    AuthLayout,
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "auth") + "-layout";
    }
  }
};
</script>


<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
