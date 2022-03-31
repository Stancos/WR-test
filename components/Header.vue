<template>
<div class="h-72 w-full cover-height bg-blue-300 bg-header-cover bg-cover bg-no-repeat">
  <Menu />
  <div class="pt-8 md:pt-56 px-16 text-center text-white flex-1">
    <h1 class="text-2xl md:text-4xl font-display">Tutte le nostre destinazioni</h1>
    <p class="mt-2">WeRoad ti porta alla scoperta di tutto il mondo</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderItem'
}
</script>

<style>
.bg-header-cover {
  background-image: url('~assets/img/cover-mobile.svg');
}

@media only screen and (min-width: 768px) {
  .bg-header-cover {
    background-image: url('~assets/img/cover-desktop.svg');
  }
  .cover-height {
    min-height: 70vh;
  }
}
</style>