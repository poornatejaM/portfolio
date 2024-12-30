// Resume data structure
const resumeData = {
    experience: [
        {
            title: "GenAI Intern",
            company: "Digiquanta",
            location: "Hyderabad, Telangana",
            period: "Sep 2024 - Present",
            description: "• Worked on extracting structured data from medical documents using OCR and Visual Large Language Models (VLLMs).\n• Fine-tuned VLLMs on medical document datasets to improve their ability to extract key information.\n• Contributed to video generation model development by fine-tuning pre-trained models."
        },
        {
            title: "AI/ML Intern",
            company: "Swecha",
            location: "Hyderabad, Telangana",
            period: "July 2024 - Sep 2024",
            description: "• Collaborated on developing a pipeline for processing Telugu language PDFs.\n• Extracted text using OCR technologies to support Large Language Model (LLM) training.\n• Worked on Agritech, developing models for tomato classification and leaf disease detection using CNNs."
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
            institution: "Reva University",
            location: "Bengaluru, Karnataka",
            year: "Aug 2020 - May 2024",
            description: "CGPA: 8.5/10"
        },
        {
            degree: "Intermediate",
            institution: "Sastra Junior College",
            location: "Vijayawada, Andhra Pradesh",
            year: "Aug 2018 - May 2020",
            description: ""
        }
    ],
    projects: [
        {
            title: "Doc-AI",
            tech: "Python, Huggingface, Pytorch, Gradio, VLLM, Google Colab",
            period: "Oct 2024 - Dec 2024",
            description: "• Utilized open-source VLLMs to extract data from scanned documents\n• Achieved 90% accuracy in demographic data extraction\n• Reduced infrastructure costs by 40% using Unsloth"
        },
        {
            title: "Doc-Classifier",
            tech: "Python, Transformers, PyTorch",
            period: "Nov 2024 - Dec 2024",
            description: "• Implemented document classification pipeline for medical documents\n• Utilized LayoutLMv3 model for complex document structures\n• Achieved 95% accuracy in document classification"
        },
        {
            title: "Stock Prediction",
            tech: "Python, Numpy, TensorFlow, Matplotlib, Pandas",
            period: "Sep 2023 - Jun 2024",
            description: "• Developed stock price prediction model using Random Forest and LSTMs\n• Trained on historical data and financial indicators\n• Created autonomous trading bot for investment decisions"
        }
    ],
    skills: {
        languages: ["Python"],
        frameworks: ["Autogen", "TensorFlow", "Pytorch"],
        tools: ["Gradio", "Streamlit", "Hugging Face", "Unsloth", "Ollama", "Google Colab"],
        domains: ["NLP", "Deep Learning", "Computer Vision"],
        additional: ["Lora Finetuning", "LLMs", "Multimodals", "VLLMs"],
        libraries: ["Pandas", "NumPy", "Matplotlib", "Transformers"]
    }
};

// Particle.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff88'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff88',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Populate Experience Section
function populateExperience() {
    const timeline = document.querySelector('.timeline');
    resumeData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <h3>${exp.title}</h3>
            <h4>${exp.company} - ${exp.location}</h4>
            <p class="period">${exp.period}</p>
            <p>${exp.description.split('\n').join('<br>')}</p>
        `;
        timeline.appendChild(item);
    });
}

// Populate Education Section
function populateEducation() {
    const educationContent = document.querySelector('.education-content');
    resumeData.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <h3>${edu.degree}</h3>
            <h4>${edu.institution} - ${edu.location}</h4>
            <p class="period">${edu.year}</p>
            ${edu.description ? `<p>${edu.description}</p>` : ''}
        `;
        educationContent.appendChild(item);
    });
}

// Populate Projects Section
function populateProjects() {
    const projectsContent = document.querySelector('.projects-content');
    resumeData.projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';
        item.innerHTML = `
            <h3>${project.title}</h3>
            <p class="tech-stack">${project.tech}</p>
            <p class="period">${project.period}</p>
            <p>${project.description.split('\n').join('<br>')}</p>
        `;
        projectsContent.appendChild(item);
    });
}

// Populate Skills Section
function populateSkills() {
    const skillsContent = document.querySelector('.skills-content');
    
    const categories = [
        { title: 'Languages', items: resumeData.skills.languages },
        { title: 'Frameworks', items: resumeData.skills.frameworks },
        { title: 'Tools & Platforms', items: resumeData.skills.tools },
        { title: 'Domains', items: resumeData.skills.domains },
        { title: 'Additional Skills', items: resumeData.skills.additional },
        { title: 'Libraries', items: resumeData.skills.libraries }
    ];
    
    categories.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        skillCategory.innerHTML = `
            <h3>${category.title}</h3>
            <ul>${category.items.map(skill => `<li>${skill}</li>`).join('')}</ul>
        `;
        skillsContent.appendChild(skillCategory);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    populateExperience();
    populateEducation();
    populateProjects();
    populateSkills();
});
