<template>
  <div
    class="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl bg-black"
  >
    <ParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
    <div class="relative flex min-h-screen flex-col md:flex-row items-center justify-center gap-4">
      <div class="relative flex min-h-screen flex-col items-center justify-center gap-4 w-full md:w-auto">
      <Me />
      <div class="relative flex flex-col md:flex-row items-center justify-center gap-4">
        <Projects />
        <div class="relative flex flex-col items-center justify-center gap-4">
        <TimeLine />
        <Contacts />
        </div>
      </div>
      </div>
      <div class="relative flex min-h-screen flex-col items-center justify-center gap-4 w-full md:w-auto">
      <Now />
      <Tech />
      <Footer />
      </div>
    </div>
    </div>

</template>

<script setup lang="ts">
import Me from './components/Me.vue';
import Now from './components/Now.vue';
import Projects from './components/Projects.vue';
import TechStack from './components/TimeLine.vue';
const isDark = computed(() => useColorMode().value === 'dark');
</script>