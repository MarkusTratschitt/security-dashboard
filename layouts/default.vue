<template lang="pug">
v-app
  v-app-bar(app color="primary" dark)
    v-toolbar-title Security Dashboard
    v-spacer
    v-btn(text @click="goTo('dashboard')") Dashboard
    v-btn(text @click="goTo('about')") Über
  v-main
    NuxtPage
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DefaultLayout',
  data() {
    return {
      router: useRouter()
    }
  },
  methods: {
    goTo(route: string) {
      this.router.push('/' + route)
    }
  }
})
</script>

<style lang="less" scoped>
.v-app-bar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
