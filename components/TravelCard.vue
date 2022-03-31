<template>
  <div
    :class="['flex', {'items-center': withThumb}, {'p-2 border border-gray-200 md:border-none md:p-0 rounded': !withThumb}]"
    @click="showTravelInfo()"
  >
    <div
      v-if="withThumb"
      class="flex-none"
    >
      <picture v-if="hasThumb()">
        <source :srcset="`${travelInfo.thumbnailImage.desktop.thumbnailUrl}`" media="(min-width: 768px)">
        <img
          :src="`${travelInfo.thumbnailImage.mobile.thumbnailUrl}`"
          loading="lazy"
          class="h-16 w-16 rounded-md object-fit"
        />
      </picture>
      <img
        v-else
        src="https://via.placeholder.com/150"
        loading="lazy"
        class="h-16 w-16 rounded-md object-fit"
      />
    </div>
    <div :class="{'pl-3': withThumb}">
      <p class="text-xs text-semibold">{{ travelInfo.title }}</p>
      <p class="text-xs text-gray-400">{{ travelInfo.numberOfDays }} giorni</p>
    </div>
  </div>
</template>

<script>
import { EventBus } from '~/lib/global-event-bus.js'

export default {
  name: 'TravelCard',
  props: {
    withThumb: {
      type: Boolean,
      required: false,
      default: false
    },
    travelInfo: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    hasThumb () {
      const hasMobileThumb = this.travelInfo.thumbnailImage.mobile && 'thumbnailUrl' in this.travelInfo.thumbnailImage.mobile
      const hasDesktopThumb = this.travelInfo.thumbnailImage.desktop && 'thumbnailUrl' in this.travelInfo.thumbnailImage.desktop
      return hasMobileThumb || hasDesktopThumb
    },
    showTravelInfo () {
      this.$store.dispatch('setSelectedTravel', this.travelInfo)
      EventBus.$emit('showTravelModal', true)
    }
  }
}
</script>
