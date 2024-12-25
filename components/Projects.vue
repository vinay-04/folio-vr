<template>
  <div>
    <div class="relative flex h-80 w-[15rem] flex-col items-start justify-start overflow-hidden rounded-lg border bg-background md:shadow-xl bg-gray-950 p-4 text-white hover:border-cyan-600">
      <span>
        <span class="text-2xl font-thin text-cyan-500 self-start">
          Projects
        </span>
        <div v-for="project in projects" :key="project.name" class="flex flex-col self-start w-full space-y-2 mb-4" @click="openModal(project)">
          <div class="flex flex-row items-center justify-between space-x-4">
            <div class="text-lg font-thin">{{ project.name }}</div>
            <div class="text-sm">{{ new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) }}</div>
          </div>
        </div>
      </span>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div class="bg-transparent text-white flex flex-col items-center justify-center p-4 rounded-lg">
        <h2 class="text-xl font-thin p-8 text-cyan-400">{{ selectedProject.name }}</h2>
        <p class="mt-2">{{ selectedProject.description }}</p>
        <div class="text-xs">{{ selectedProject.technologies.join(', ') }}</div>
        <a :href="selectedProject.link" v-if="selectedProject.link" class="p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="cursor-pointer hover:text-cyan-500">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg></a>
        <button @click="closeModal" class="mt-4 px-2 py-1 self-end bg-cyan-600 text-white rounded text-sm">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Project {
  name: string;
  description: string;
  date: Date;
  technologies: string[];
  link?: string;
}

export default defineComponent({
  name: 'Projects',
  data(): { projects: Project[], isModalOpen: boolean, selectedProject: Project } {
    return {
      projects: [
        {
          name: 'Project One',
          description: 'Description for project one.',
          date: new Date('2023-01-01'),
          technologies: ['Vue', 'TypeScript', 'TailwindCSS'],
          link: 'https://www.google.com',
        },
        {
          name: 'Project Two',
          description: 'Description for project two.',
          date: new Date('2023-02-01'),
          technologies: ['React', 'JavaScript', 'CSS'],
        },
      ] as Project[],
      isModalOpen: false,
      selectedProject: {} as Project,
    };
  },
  methods: {
    openModal(project: Project) {
      this.selectedProject = project;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedProject = {} as Project;
    },
  },
});
</script>
