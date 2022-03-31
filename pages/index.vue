<template>
  <div class="pb-8">
    <Tabs />
    <AreaDescription />
    <TrendingTours />
    <OtherTours />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  async fetch ({ store }) {
    await store.dispatch('getTravelList')
  },
  computed: {
    travelList () {
      return this.$store.state.travelList
    },
    // continentsList () {
    //   return this.$store.getters.continents
    // }
  }
}
</script>
