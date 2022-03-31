<template>
<div class="max-w-6xl mx-auto h-16 p-2 flex justify-between items-center">
  <div>
    <img
      src="~/assets/img/logo-wr-white.svg"
      class="w-12 h-12 md:hidden"
    />
    <img
      src="~/assets/img/logo-white.svg"
      class="h-12 hidden md:block"
    />
  </div>
  <FormInputSearch />
  <button class="px-2 py-1 text-xs text-white border border-white rounded md:hidden">Parla con noi</button>
  <ul class="hidden flex text-white md:flex">
    <nuxt-link
      v-for="(item, i) in menuList"
      :key="i"
      tag="li"
      to="#_"
      class="px-3"
    >{{ item }}</nuxt-link>
  </ul>
  <div class="md:hidden" @click="showMobileMenu = !showMobileMenu">
    <span class="icon-list text-white"></span>
  </div>
  <!-- Mobile Menu -->
  <div
    v-if="showMobileMenu"
    class="fixed top-0 right-0 bottom-0 left-0 z-10 bg-blue-400 md:hidden"
  >
    <ul class="p-4 text-white">
      <li>Viaggi</li>
      <li>Come funziona</li>
      <li>Fasce d'età</li>
      <li>Offerte</li>
      <li>Turni confermati</li>
      <li>FAQ</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'MenuItem',
  data () {
    return {
      showMobileMenu: false,
      menuList: [
        'Viaggi',
        'Come funziona',
        'Face d\'età',
        'Offerte',
        'Turni confermati',
        'FAQ'
      ]
    }
  }
}
</script>