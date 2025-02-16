<template>
    <div id="experience" class="">
        <h1>experience(self):</h1>
        <h4 class="mb-5">_what i have done?</h4>
        <div class="mb-5 d-flex flex-column align-start">
            <div
                v-for="(company, index) in experience.slice(0, 2)"
                :key="index"
                class="exp-box"
            >
                <a
                    :href="company.link"
                    target="_blank"
                    class="text-decoration-none"
                >
                    <h4 class="title">{{ company.company }}</h4>
                </a>
                <p class="m-1 date">{{ company.duration }}</p>
                <ul>
                    <li
                        v-for="position in company.positions"
                        :key="position.title"
                    >
                        <p class="sub-title">{{ position.title }}</p>
                        <div class="d-flex m-1">
                            <div class="vr me-3"></div>
                            <div>
                                <p class="date">
                                    {{ position.date }} ·
                                    {{ position.duration }}
                                </p>
                                <p class="skills">
                                    <span
                                        v-for="(
                                            skill, index
                                        ) in position.skills"
                                        :key="skill"
                                    >
                                        {{ skill }}
                                        <span
                                            v-if="
                                                index <
                                                position.skills.length - 1
                                            "
                                            >·
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
            <button 
                v-if="experience.length > 3" 
                class="show-more-btn"
                data-bs-toggle="modal"
                data-bs-target="#experienceModal"
            >
                Show {{ experience.length - 2 }} More Experience{{ experience.length - 2 > 1 ? 's' : '' }}
            </button>
        </div>

        <!-- Bootstrap Modal -->
        <div class="modal fade" id="experienceModal" tabindex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="experienceModalLabel">Full Experience History</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div
                            v-for="(company, index) in experience"
                            :key="index"
                            class="exp-box"
                        >
                            <a
                                :href="company.link"
                                target="_blank"
                                class="text-decoration-none"
                            >
                                <h4 class="title">{{ company.company }}</h4>
                            </a>
                            <p class="m-1 date">{{ company.duration }}</p>
                            <ul>
                                <li
                                    v-for="position in company.positions"
                                    :key="position.title"
                                >
                                    <p class="sub-title">{{ position.title }}</p>
                                    <div class="d-flex m-1">
                                        <div class="vr me-3"></div>
                                        <div>
                                            <p class="date">
                                                {{ position.date }} ·
                                                {{ position.duration }}
                                            </p>
                                            <p class="skills">
                                                <span
                                                    v-for="(skill, index) in position.skills"
                                                    :key="skill"
                                                >
                                                    {{ skill }}
                                                    <span v-if="index < position.skills.length - 1">· </span>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul>
                                <li
                                    v-for="description in company.description"
                                    :key="description"
                                >
                                    {{ description }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
function elapsedMonthsAndYears(
    startMonth,
    startYear,
    endMonth = null,
    endYear = null
) {
    // Get current date if end month/year are not provided
    if (endMonth === null || endYear === null) {
        const currentDate = new Date();
        endMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript
        endYear = currentDate.getFullYear();
    }

    // Calculate elapsed years and months
    let elapsedYears = endYear - startYear;
    let elapsedMonths = endMonth - startMonth;

    // Adjust for negative months
    if (elapsedMonths < 0) {
        elapsedYears--;
        elapsedMonths += 12;
    }

    // Build the result string
    let result = '';
    if (elapsedYears > 0) {
        result += `${elapsedYears} yr${elapsedYears > 1 ? 's' : ''}`;
        if (elapsedMonths > 0) {
            result += ` ${elapsedMonths} mo${elapsedMonths > 1 ? 's' : ''}`;
        }
    } else if (elapsedMonths > 0) {
        result += `${elapsedMonths} mo${elapsedMonths > 1 ? 's' : ''}`;
    } else {
        result = '0 mos'; // When the start date is the same as the end date
    }

    return result;
}

const experience = [
    {
        company: 'Bitwork Solutions',
        link: 'https://bitworksolutions.com',
        duration: elapsedMonthsAndYears(1, 2025),
        positions: [
            {
                title: 'Software Engineer',
                date: 'January 2025 - Present',
                duration: elapsedMonthsAndYears(1, 2025),
                skills: [
                    'Next.js',
                    'FastAPI',
                    'Tailwind',
                    'React',
                    'TypeScript',
                    'Python',
                ],
            },
        ],
        description: [
            'Developed responsive web applications using Next.js, FastAPI, and PostgreSQL.',
            'Built and maintained APIs, user interfaces, and database solutions for seamless functionality.',
            'Collaborated with cross-functional teams to deliver high-quality software in Agile environments.',
        ],
    },
    {
        company: 'Tranches',
        link: 'https://www.linkedin.com/company/tranchesmarketing/',
        duration: elapsedMonthsAndYears(9, 2024),
        positions: [
            {
                title: 'Lead Software Engineer',
                date: 'September 2024 - Present',
                duration: elapsedMonthsAndYears(9, 2024),
                skills: [
                    'Svelte',
                    'Django',
                    'Docker',
                    'Python',
                    'Node.js',
                    'Express.js',
                    'AWS',
                    'Docker',
                    'After Effects',
                ],
            },
        ],
        description: [
            'Lead development of video automation pipelines using Nexrender for After Effects editing and rendering.',
            'Serve as the primary technical liaison with clients, managing project requirements and product delivery.',
            'Develop and maintain web applications using Svelte & ShadcnUI for frontend, and Django and Node.js  for backend services.',
            'Collaborate with stakeholders on product planning, contributing to feature design and roadmap strategy.',
            'Oversee AWS deployment and cloud infrastructure management to ensure reliable and scalable product delivery.',
        ],
    },
    {
        company: 'BPOSeats',
        link: 'https://www.linkedin.com/company/bposeats/mycompany/',
        duration: elapsedMonthsAndYears(9, 2023, 2, 2025),
        positions: [
            {
                title: 'Full Stack Developer',
                date: 'October 2023 - January 2025',
                duration: elapsedMonthsAndYears(10, 2023, 2, 2025),
                skills: ['Django', 'Vue.js', 'Python'],
            },
            {
                title: 'Full Stack Developer Intern',
                date: 'September 2023',
                duration: elapsedMonthsAndYears(9, 2023, 10, 2023),
                skills: ['Django', 'Vue.js', 'Python', 'PostgreSQL', 'SCSS'],
            },
        ],
        description: [
            'Developed scalable features using Vue.js, Django, and PostgreSQL, improving efficiency and maintainability.',
            'Led the creation of coachmarks/wizards for apps like hqzen and scalema, enhancing user engagement.',
            'Built a negotiations page with real-time messaging to streamline business discussions.',
            'Integrated unit tests into CI/CD pipelines, reducing deployment failures.',
            'Participated in agile processes, ensuring high code quality through rigorous testing.',
            'Resolved full-stack bugs, improving system stability and user experience.',
            'Implemented an invoicing permission feature for enhanced access control.',
        ],
    },
    {
        company: 'Wrytopia',
        link: 'https://wrytopia.vercel.app',
        duration: elapsedMonthsAndYears(8, 2023, 2, 2024),
        positions: [
            {
                title: 'Lead Web Developer',
                date: 'August 2023 - Febuary 2024',
                duration: elapsedMonthsAndYears(8, 2023, 2, 2024),
                skills: ['Vue.js', 'SCSS', 'Bootstrap', 'Lottie'],
            },
        ],
        description: [
            'Partnered with the marketing team to develop engaging landing pages, boosting conversion rates.',
            'Worked with designers to create intuitive, visually appealing UIs for seamless user experiences.',
            'Utilized Vue.js for efficient development and integration of UI components.',
        ],
    },
];
</script>
<style scoped>
h1 {
    font-weight: 1000;
}
h4 {
    color: rgb(241, 241, 120);
    font-weight: 600;
}
p {
    line-height: 0.8;
}
.sub-title {
    font-weight: 600;
    font-size: 1.2rem;
}
.date {
    color: gray;
}
.exp-box {
    margin: 1rem;
    /* max-width: 400px; */
}
.skills {
    line-height: 1.5;
}

.show-more-btn {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid rgb(241, 241, 120);
    color: rgb(241, 241, 120);
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
    animation: glowPulse 2s infinite;
}

@keyframes glowPulse {
    0% {
        box-shadow: 0 0 0 0 rgba(241, 241, 120, 0.4);
    }
    70% {
        box-shadow: 0 0 0 20px rgba(241, 241, 120, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(241, 241, 120, 0);
    }
}

.show-more-btn:hover {
    background-color: rgb(241, 241, 120);
    color: black;
}

.modal-content {
    background-color: var(--bs-dark);
    color: white;
}

.modal-header {
    border-bottom-color: #444;
}

.modal-footer {
    border-top-color: #444;
}

.btn-close {
    filter: invert(1) grayscale(100%) brightness(200%);
}
</style>
