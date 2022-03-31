<template>
  <div class="flex flex-row px-3 md:px-0 py-6 md:py-10 md:border-b md:border-gray-200">
    <div class="md:w-1/4 md:flex-none">
      <div class="h-12 w-12 flex justify-center items-center bg-area-thumb rounded-full">
        <img
          :src="require(`~/assets/img/${selectedContinent}.svg`)"
          loading="lazy"
          class="h-10 w-12"
        />
      </div>
      <nuxt-link
        class="mt-4 block text-xs hidden md:block"
        to="#_"
      >Vedi tutti i viaggi in Europa ></nuxt-link>
    </div>
    <div class="w-full ml-4">
      <p :class="['text-sm md:line-clamp-none', {'line-clamp-3': !toggleDescription}]">{{ setDescription() }}</p>
      <p
        class="mt-2 text-sm text-gray-500 md:hidden"
        @click="toggleDescription = !toggleDescription"
      >{{ toggleShowDescText() }}</p>
    </div>
  </div>
</template>

<script>
import description from '~/lib/area-description'

export default {
  name: 'AreaDescription',
  data () {
    return {
      toggleDescription: false
    }
  },
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
    },
    toggleShowDescText () {
      return this.toggleDescription ? 'Chiudi' : 'Leggi di più'
    }
  }
}
</script>

<style>
.bg-area-thumb {
  background-color: #bfdec6;
}
</style>
