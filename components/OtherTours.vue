<template>
  <div class="px-3">
    <input
      type="search"
      :placeholder="`Cerca viaggi in ${selectedContinent}`"
      class="w-full p-2 mb-6 text-sm font-light border border-gray-200 rounded-md"
    >
    <div class="grid grid-cols-2 gap-4">
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
  data () {
    return {
    }
  },
  computed: {
    selectedContinent () {
      return this.$store.state.selectedContinent.name
    },
    notCheapestTravelList () {
      return this.$store.getters.notCheapestTravelList
    }
  },
  methods: {
  }
}
</script>
