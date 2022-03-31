<template>
  <div class="mt-2 px-2 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px justify-center">
      <li
        v-for="(continent, i) in continents"
        :key="i"
        class="mr-2"
        @click="setContinent(continent)"
      >
        <p :class="['inline-block p-2 rounded-t-lg border-b-2 border-transparent text-sm text-gray-300 hover:text-gray-800 hover:border-red-300 dark:hover:text-gray-300', {'border-red-300 text-gray-800': selectedContinent === continent.name}]">
          {{continent.name}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabItems',
  data () {
    return {
      continents: [
        {name: 'Europa', code: 'europe'},
        {name: 'Asia', code: 'asia'},
        {name: 'Africa', code: 'africa'},
        {name: 'America', code: 'america'},
        {name: 'Oceania', code: 'oceania'}
      ]
    }
  },
  computed: {
    selectedContinent () {
      return this.$store.state.selectedContinent.name
    }
  },
  methods: {
    setContinent (continent) {
      const formattedContinent = {
        name: continent.name,
        code: continent.code
      }
      return this.$store.commit('SET_CONTINENT', formattedContinent)
    }
  }
}
</script>
