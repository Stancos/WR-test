<template>
  <div class="px-3 md:px-0 md:mt-10">
    <!-- This Input should be a component -->
    <input
      type="search"
      :placeholder="`Cerca viaggi in ${selectedContinent}`"
      class="w-full p-2 mb-6 md:mb-10 text-sm font-light border border-gray-200 rounded-md"
    >
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <TravelCard
        v-for="(travel, i) in notCheapestTravelList"
        :key="i"
        :travel-info="travel"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherTours',
  computed: {
    selectedContinent () {
      return this.$store.state.selectedContinent.name
    },
    notCheapestTravelList () {
      return this.$store.getters.notCheapestTravelList
    }
  }
}
</script>
