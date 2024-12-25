<template>
  <div class="relative flex h-20 w-[26rem] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-gray-950 p-4 text-white hover:border-cyan-600 ">
    <span class="flex flex-col">
      <span>{{ currentTime }} </span>
      <div class="flex flex-row gap-2 justify-center items-center">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="cursor-pointer hover:text-cyan-500">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="cursor-pointer hover:text-cyan-500">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        
        <a href="">
          <svg viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="28" height="28" class="cursor-pointer hover:text-cyan-500" stroke="currentColor">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path stroke-linecap="round" stroke-linejoin="round" class="cls-1" stroke="currentColor" fill="none"></path>
              <path class="cls-1" d="M6.47,10.71a2,2,0,0,0-2,2h0V35.32a2,2,0,0,0,2,2H41.53a2,2,0,0,0,2-2h0V12.68a2,2,0,0,0-2-2H6.47Zm33.21,3.82L24,26.07,8.32,14.53"></path>
            </g>
          </svg>
        </a>
        <a href="">
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="cursor-pointer hover:text-cyan-500">
            <path d="M14.095 10.316L22.286 1h-1.941l-7.115 8.088L7.551 1H1l8.589 12.231L1 23h1.941l7.509-8.543L16.449 23H23l-8.905-12.684z" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        </div>
    </span> 
  </div>
  
</template>


<script>
export default {
  data() {
    return {
      currentTime: ''
    };
  },
  methods: {
    fetchCurrentTime() {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      this.currentTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
    }
  },
  mounted() {
    this.fetchCurrentTime();
    setInterval(this.fetchCurrentTime, 1000);
  }
};
</script>