<template lang="pug">
v-app
  v-app-bar(app color="primary" dark)
    v-toolbar-title {{ pageTitle }}
    v-spacer
    v-btn(text @click="goTo('dashboard')") Dashboard
    v-btn(text @click="goTo('about')") Über
    v-divider(vertical class="mx-2")
    span Benutzer: {{ username }}
  v-main
    NuxtPage
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'DefaultLayout',
  data() {
    return {
      route: useRoute(),
      router: useRouter(),
      username: 'admin' // später dynamisch aus Store
    }
  },
  computed: {
    pageTitle(): string {
      let map: Record<string, string> = {
        '/': 'Startseite',
        '/dashboard': 'Dashboard',
        '/about': 'Über das Projekt'
      }
      return map[this.route.path] || 'Unbekannte Seite'
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
