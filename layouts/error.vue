<template>
  <main class="space_err">
    <h1 v-if="error.statusCode === 404">404 — Page not found.</h1>
    <h1 v-if="error.statusCode === 500">500 — Err.</h1>
    <h4 v-else>An error occurred.</h4>
    <br>
    <nuxt-link to="/" class="btn btn__large">Back to
      <del>school</del>
      home.
    </nuxt-link>
  </main>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
  computed: {
    currentURL: function () {
      return this.$route.fullPath
    }
  }
}
</script>
<style scoped>
.space_err {
  padding-top: 15rem !important;
  padding-bottom: 15rem !important;
}
</style>
