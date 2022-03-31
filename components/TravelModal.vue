<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 bg-white">
    <div>
      <p class="text-sm">{{ travelInfo.title }}</p>
      <p class="text-sm">{{ travelInfo.primaryDestination.primaryContinent.name }}</p>
      <button
        class="text-sm bg-gray-200"
        @click="closeModal()"
      >Chiudi</button>
    </div>
  </div>
</template>

<script>
import { EventBus } from '~/lib/global-event-bus.js'

export default {
  name: 'TravelModal',
  props: {
    travelInfo: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    closeModal () {
      // this.$store.dispatch('setSelectedTravel', {})
      EventBus.$emit('showTravelModal', false)
    }
  }
}
</script>