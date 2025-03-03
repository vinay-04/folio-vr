<template>
    <div>
        <div
            class="relative flex h-80 w-[15rem] flex-col items-start justify-start overflow-hidden rounded-lg border bg-background md:shadow-xl bg-gray-950 p-4 text-white hover:border-cyan-600"
        >
            <span class="text-2xl font-thin text-cyan-500 self-start mb-4">
                Projects
            </span>
            <span>
                <div
                    v-for="project in projects"
                    :key="project.name"
                    class="flex flex-col self-start w-full"
                    @click="openModal(project)"
                >
                    <div
                        class="flex flex-row items-center justify-between space-x-4"
                    >
                        <div
                            class="text-lg font-thin hover:underline hover:cursor-grab"
                        >
                            {{ project.name }}
                        </div>
                        <div class="text-sm">
                            {{
                                new Date(project.date).toLocaleDateString(
                                    "en-US",
                                    { year: "numeric", month: "long" },
                                )
                            }}
                        </div>
                    </div>
                </div>
            </span>
        </div>

        <div
            v-if="isModalOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        >
            <div
                class="bg-transparent text-white flex flex-col items-center justify-center p-4 rounded-lg"
            >
                <h2
                    class="text-sm font-thin p-8 text-cyan-400 truncate max-w-full whitespace-nowrap overflow-hidden"
                >
                    {{ selectedProject.name }}
                </h2>
                <p class="mt-2">{{ selectedProject.description }}</p>
                <div class="text-xs">
                    {{ selectedProject.technologies.join(", ") }}
                </div>
                <a
                    :href="selectedProject.link"
                    v-if="selectedProject.link"
                    class="p-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        class="cursor-pointer hover:text-cyan-500"
                    >
                        <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        ></path></svg
                ></a>
                <button
                    @click="closeModal"
                    class="mt-4 px-2 py-1 self-end bg-cyan-600 text-white rounded text-sm"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Project {
    name: string;
    description: string;
    date: Date;
    technologies: string[];
    link?: string;
}

export default defineComponent({
    name: "Projects",
    data(): {
        projects: Project[];
        isModalOpen: boolean;
        selectedProject: Project;
    } {
        return {
            projects: [
                {
                    name: "Zedit",
                    description:
                        "iOS video clipping application to aid video editors. Uses Natural Language Processing and Computer vision to analyze scenes and split the video into multiple clips.",
                    date: new Date("2024-10-01"),
                    technologies: ["NLP", "OpenCV", "Swift"],
                    link: "https://github.com/Zedit-iOS/Zedit-UIKit",
                },
                {
                    name: "MyShow",
                    description:
                        "Event Booking app. A Flutter application enables artists to reserve performance slots and hosts to create events, with the backend built using the Echo framework.",
                    date: new Date("2024-09-01"),
                    technologies: ["Flutter", "Echo", "Dart", "Go"],
                },
                {
                    name: "Polinyx",
                    description:
                        "Video-chat application for disabled people, this application has Sign language detection integrated into it.",
                    date: new Date("2022-11-01"),
                    technologies: ["Tensorflow", "OpenCV", "Python"],
                    link: "https://github.com/stuff-makers/Polinyx",
                },
                {
                    name: "Dhwani",
                    description:
                        "Streamline interactions between supervisors of hospitals, therapists and patients, with auto speech assessment tests.",
                    date: new Date("2025-01-01"),
                    technologies: ["NestJS", "NextJS", "Python"],
                    link: "https://github.com/HoneyComb-Dhwani/dhwani",
                },
                {
                    name: "zk Precompile",
                    description:
                        "A hackathon project built using gnark, a Go library for zero-knowledge proofs. Implemented a Precompile to be deployed on Avalanche Network.",
                    date: new Date("2023-03-01"),
                    technologies: ["Go", "zkSNARK", "Avalanche", "Blockchain"],
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
