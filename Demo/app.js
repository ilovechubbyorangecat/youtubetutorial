const projects = [
    {
        name: "not my website",
        image: "https://placehold.co/600x400.png",
        description: "An advanced auto farming script for Roblox games with multiple features.",
        githubLink: "https://linkvertise.com/1280164/stumble-guys"
    },
    {
        name: "mywebsite",
        image: "https://placehold.co/600x400.png",
        description: "A powerful ESP script for tracking players and items in Roblox games.",
        githubLink: "https://rowebs.vercel.app/Demo/testscript/"
    },
    {
        name: "anotha one",
        image: "https://placehold.co/600x400.png",
        description: "A powerful ESP script for tracking players and items in Roblox games.",
        githubLink: "https://rowebs.vercel.app/Demo/testscript/"
    }
];

class ProjectManager {
    constructor(projects) {
        this.projects = projects;
        this.projectContainer = document.getElementById('projectsContainer');
        this.searchInput = document.getElementById('searchInput');
        
        this.init();
    }

    init() {
        this.renderProjects(this.projects);
        this.searchInput.addEventListener('input', this.handleSearch.bind(this));
    }

    renderProjects(projectsToRender) {
        this.projectContainer.innerHTML = `
            <div class="project-grid">
                ${projectsToRender.map(project => this.createProjectCard(project)).join('')}
            </div>
        `;
    }

    createProjectCard(project) {
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.name}" class="project-image">
                <div class="project-content">
                    <h2 class="project-title">${project.name}</h2>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.githubLink}" target="_blank" class="github-btn">View Script</a>
                </div>
            </div>
        `;
    }

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        const filteredProjects = this.projects.filter(project => 
            project.name.toLowerCase().includes(searchTerm) || 
            project.description.toLowerCase().includes(searchTerm)
        );
        this.renderProjects(filteredProjects);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProjectManager(projects);
});
