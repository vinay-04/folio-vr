<template>
  <div class="relative flex h-28 w-72 flex-col items-center justify-start overflow-hidden rounded-lg border bg-gray-800 p-4 text-white shadow-lg hover:border-cyan-600 transition duration-300 ease-in-out transform hover:scale-105">
    <div class="flex flex-col self-start w-full space-y-2">
      <div class="flex items-center justify-between w-full">
        <div class="text-lg font-thin">Now</div>
        <div class="flex items-center space-x-2">
          <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500 translate-x-[1.26rem]"></span>
          <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500 animate-ping"></span>
        </div>
      </div>
      <div class="flex flex-col space-y-1">
        <div class="text-sm">Software Engineer</div>
        <div class="text-sm">Musician</div>
      </div>
    </div>
  </div>
</template>
