<template>
  <div class="flex flex-row px-3 py-6">
    <div class="h-12 w-14 flex justify-center items-center bg-area-thumb rounded-full">
      <img
        :src="require(`~/assets/img/${selectedContinent}.svg`)"
        loading="lazy"
        class="h-10 w-12 flex-none"
      />
    </div>
    <div class="w-full ml-4 h-24 overflow-hidden">
      <p class="text-sm truncate">{{ setDescription() }}</p>
    </div>
  </div>
</template>

<script>
import description from '~/lib/area-description'

export default {
  name: 'AreaDescription',
  async fetch ({ store }) {
    await store.dispatch('getTravelList')
  },
  computed: {
    selectedContinent () {
      return this.$store.state.selectedContinent.code
    }
  },
  methods: {
    setDescription () {
      return description[this.selectedContinent]
    }
  }
}
</script>

<style>
.bg-area-thumb {
  background-color: #bfdec6;
}
</style>
