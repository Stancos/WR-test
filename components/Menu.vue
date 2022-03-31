<template>
<div class="h-16 p-2 flex items-center">
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
  <button class="px-2 py-1 text-xs text-white border border-white rounded">Parla con noi</button>
  <div @click="showMobileMenu = !showMobileMenu">
    Menu Icon
  </div>
  <!-- Mobile Menu -->
  <div
    v-if="showMobileMenu"
    class="fixed top-0 right-0 bottom-0 left-0 bg-blue-400"
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
      showMobileMenu: false
    }
  }
}
</script>