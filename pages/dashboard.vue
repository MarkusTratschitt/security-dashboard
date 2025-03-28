<template lang="pug">
v-container
  h1 Dashboard – Netzwerkereignisse
  v-row(v-for="event in eventStore.events" :key="event.id")
    v-col(cols="12")
      v-card.mb-3
        v-card-title {{ event.type }} - {{ event.level }}
        v-card-text {{ event.message }}
        v-card-actions
          v-btn(color="primary" @click="respondTo(event.id, 'investigate')") Untersuchen
          v-btn(color="success" @click="respondTo(event.id, 'isolate')") Isolieren
          v-btn(color="grey" @click="respondTo(event.id, 'ignore')") Ignorieren
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useEventStore } from '@/stores/events'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const eventStore = useEventStore()

    onMounted(() => {
      // Simulierter Scan beim Laden
      eventStore.simulateEvent('Port Scan', 'Verdächtiger Zugriff auf Port 22', 'warning')
      eventStore.simulateEvent('Login Failure', 'Mehrere Login-Versuche von IP 192.168.1.100', 'danger')
      eventStore.simulateEvent('Malware Fund', 'suspicious.exe wurde erkannt', 'critical')
    })

    function respondTo(id: number, action: string) {
      console.log(`Event ${id} → Aktion: ${action}`)
      // später echte Reaktion z. B. per API
    }

    return { eventStore, respondTo }
  }
})
</script>
