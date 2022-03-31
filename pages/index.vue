<template>
  <div class="pb-8">
    <Tabs />
    <AreaDescription />
    <TrendingTours />
    <OtherTours />
    <TravelModal
      v-if="showTravelModal"
      :travel-info="getSelectedTravel"
    />
  </div>
</template>

<script>
import { EventBus } from '~/lib/global-event-bus.js'

export default {
  name: 'HomePage',
  data () {
    return {
      showTravelModal: false
    }
  },
  async fetch ({ store }) {
    await store.dispatch('getTravelList')
  },
  computed: {
    getSelectedTravel () {
      return this.$store.state.selectedTravel
    }
  },
  mounted () {
    EventBus.$on('showTravelModal', (val) => {
      this.showTravelModal = val
    })
  },
}
</script>
