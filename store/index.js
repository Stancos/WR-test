export const state = () => ({
  travelList: {},
  selectedContinent: undefined,
  selectedTravel: {}
})

export const getters = {
  cheapestTravelList(state) {
    const travels = state.travelList.filter(travel => travel.primaryDestination.primaryContinent.name === state.selectedContinent.name)
    return travels.filter(travel => travel.bestTour !== null).sort((a, b) => a.bestTour.price - b.bestTour.price).slice(0,8)
  },
  notCheapestTravelList(state, getters) {
    const travels = state.travelList.filter(travel => travel.primaryDestination.primaryContinent.name === state.selectedContinent.name)
    return travels.filter(travel => travel.bestTour !== null && !getters.cheapestTravelList.includes(travel))
  }
}

export const mutations = {
  SET_TRAVEL_LIST(state, travels) {
    state.travelList = travels
  },
  SET_CONTINENT(state, continent) {
    state.selectedContinent = continent
  },
  SET_SELECTED_CONTINENT(state, travelInfo) {
    state.selectedTravel = travelInfo
  }
}

export const actions = {
  async getTravelList({ commit }) {
    const defaultContinent = { name: 'Europa', code: 'europe' }
    const travels = await this.$axios.$get('https://staging-api-catalog.weroad.it/travels')
    commit('SET_TRAVEL_LIST', travels.data)
    commit('SET_CONTINENT', defaultContinent)
  },

  setSelectedTravel({ commit }, travelInfo) {
    commit('SET_SELECTED_CONTINENT', travelInfo)
  }
}