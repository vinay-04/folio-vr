<template>
  <div class="relative flex h-56 w-[26rem] flex-col items-start justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl bg-gray-950 p-4 text-white hover:border-cyan-600">
    <div class="timeline-container ">
      <div
      class="timeline relative flex items-center justify-center overflow-x-scroll border-b border-gray-600 pb-2"
      ref="timeline"
      @scroll="handleScroll"
      >

      <div class="flex gap-12 min-w-max relative pl-[40rem]">
        <div
        v-for="year in years"
        :key="year"
        ref="yearElements"
        :class="['year', year === selectedYear ? 'text-cyan-600' : 'text-gray-300']"
        @click="selectYear(year)"
        >
        {{ year }}
        </div>
        <span class="translate-y-1">-------→</span>
        <div
        class="line-follower absolute h-1 bg-cyan-600 rounded-md"
        :style="{ left: `${linePosition}px`, width: '4px' }"
        ></div>
      </div>
      </div>

      <div class="content mt-4 text-white">
      <p v-for="content in yearContents[selectedYear]" :key="content">
        <ul>
        <li>- {{ content }}</li>
        </ul>
      </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: [2020, 2021, 2022, 2023, 2024],
      selectedYear: null,
      yearContents: {
        2020: ['1', '2', '3'],
        2021: ['4', '5', '6'],
        2022: ['7', '8', '9'],
        2023: ['10', '11', '12'],
        2024: ['13', '14', '15'],
      },
      linePosition: 0,
    };
  },
  mounted() {
    this.selectedYear = Math.max(...this.years); 
    this.scrollToSelectedYear(); 
    this.updateLinePosition(); 
  },
  methods: {
    selectYear(year) {
      this.selectedYear = year;
      this.scrollToSelectedYear();
      this.updateLinePosition();
    },
    handleScroll() {
      const timeline = this.$refs.timeline;
      const yearElements = this.$refs.yearElements;

      let closestYear = null;
      let closestDistance = Infinity;

      yearElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.left - timeline.getBoundingClientRect().left - timeline.offsetWidth / 2);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestYear = this.years[index];
        }
      });

      if (closestYear && closestYear !== this.selectedYear) {
        this.selectedYear = closestYear;
        this.updateLinePosition();
      }
    },
    updateLinePosition() {
  const yearElements = this.$refs.yearElements;
  const selectedElement = yearElements[this.years.indexOf(this.selectedYear)];
  if (selectedElement) {
    const timeline = this.$refs.timeline;
    const selectedRect = selectedElement.getBoundingClientRect();
    const timelineRect = timeline.getBoundingClientRect();

    this.linePosition =
      selectedElement.offsetLeft + selectedElement.offsetWidth / 2 - 2;
  }
},
    scrollToSelectedYear() {
      const timeline = this.$refs.timeline;
      const yearElements = this.$refs.yearElements;
      const selectedElement = yearElements[this.years.indexOf(this.selectedYear)];
      if (selectedElement) {
        const rect = selectedElement.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        const offset = rect.left - timelineRect.left - timeline.offsetWidth / 2 + rect.width / 2;
        const maxScrollLeft = timeline.scrollWidth - timeline.clientWidth;
        const targetScroll = Math.min(Math.max(timeline.scrollLeft + offset, 0), maxScrollLeft);

        timeline.scrollTo({ left: targetScroll, behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.timeline::-webkit-scrollbar {
  display: none;
}
.timeline-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.timeline {
  position: relative;
  white-space: nowrap;
  scrollbar-width: none;
}
.year {
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background 0.3s, color 0.3s;
}
.line-follower {
  position: absolute;
  bottom: -2px;
  transition: left 0.3s ease;
}
</style>
