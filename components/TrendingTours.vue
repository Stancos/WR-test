<template>
  <div class="mb-6">
    <h2 class="mb-4 px-3 font-500">Trending tours in <span class="capitalize">{{ selectedContinent }}</span></h2>
    <div class="max-w-sm">
      <div class="overflow-x-scroll grid grid-flow-col grid-rows-auto gap-4 px-3">
        <TravelCard
          v-for="(travel, i) in cheapestTravelList"
          :key="i"
          :travel-info="travel"
          has-thumb
          class="w-64"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrendingTours',
  data () {
    return {
    }
  },
  computed: {
    selectedContinent () {
      return this.$store.state.selectedContinent.code
    },
    cheapestTravelList () {
      return this.$store.getters.cheapestTravelList
    }
  },
  methods: {
  }
}
</script>

<style>
.grid-rows-auto {
  grid-template-rows: auto auto;
}
</style>
