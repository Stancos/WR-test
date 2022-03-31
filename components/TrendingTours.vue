<template>
  <div class="pb-3 md:py-6 md:border-b md:border-gray-200">
    <h2 class="mb-4 px-3 md:px-0 font-500">Trending tours in <span class="capitalize">{{ selectedContinent }}</span></h2>
    <div class="max-w-sm md:max-w-none">
      <div class="overflow-x-scroll grid grid-flow-col grid-rows-auto gap-4 md:gap-8 px-3 md:px-0 pb-4">
        <TravelCard
          v-for="(travel, i) in cheapestTravelList"
          :key="i"
          :travel-info="travel"
          with-thumb
          class="w-64"
        />
        <p
          v-if="!cheapestTravelList.length"
          class="p-3 bg-yellow-100 rounded-md text-sm text-gray-500"
        >Siamo spiacenti ma non ci sono viaggi in programma in questo continente!</p>
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
  }
}
</script>

<style scoped>
/* It should be moved inside tailwind.config.js */
.grid-rows-auto {
  grid-template-rows: auto auto;
}
</style>
