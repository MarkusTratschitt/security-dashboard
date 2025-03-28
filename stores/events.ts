import { defineStore } from 'pinia'

export const useEventStore = defineStore('events', {
  state: () => ({
    events: [] as { id: number, type: string, message: string, level: string }[],
    nextId: 1,
  }),
  actions: {
    simulateEvent(type: string, message: string, level: string = 'info') {
      this.events.unshift({
        id: this.nextId++,
        type,
        message,
        level,
      })
    },
    clearEvents() {
      this.events = []
      this.nextId = 1
    },
  },
})
