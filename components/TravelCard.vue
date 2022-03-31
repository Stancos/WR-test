<template>
  <div :class="['flex', {'items-center': hasThumb}, {'p-2 border border-gray-200 rounded': !hasThumb}]">
    <div
      v-if="hasThumb"
      class=""
    >
      <picture v-if="travelInfo.thumbnailImage.mobile">
        <source :srcset="`${travelInfo.thumbnailImage.desktop.thumbnailUrl}`" media="(min-width: 768px)">
        <img
          :src="`${travelInfo.thumbnailImage.mobile.thumbnailUrl}`"
          loading="lazy"
          class="rounded-md"
        />
      </picture>
      <img
        v-else
        :src="`${travelInfo.thumbnailImage.desktop.thumbnailUrl}`"
        loading="lazy"
        class="rounded-md"
      />
    </div>
    <div :class="{'pl-3': hasThumb}">
      <p class="text-xs text-semibold">{{ travelInfo.title }}</p>
      <p class="text-xs text-gray-400">{{ travelInfo.numberOfDays }} giorni</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TravelCard',
  props: {
    hasThumb: {
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
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
