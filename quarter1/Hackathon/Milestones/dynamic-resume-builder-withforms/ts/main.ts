// main.ts
import { resumeData, saveData, ResumeData } from './data.js';



// Get DOM elements for the form and output
const form = document.getElementById('resumeForm') as HTMLFormElement;
const outputName = document.getElementById('output-name') as HTMLElement;
const outputEmail = document.getElementById('output-email') as HTMLElement;
const outputEducation = document.getElementById('output-education-text') as HTMLElement;
const outputSkillsList = document.getElementById('output-skills-list') as HTMLElement;
const outputWorkExperience = document.getElementById('output-work-text') as HTMLElement;

// Add event listener to handle form submission
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Collect form data
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

  // Save the data in the data.ts module
  const formData: ResumeData = { name, email, education, skills, workExperience };
  saveData(formData);

  // Generate resume using the saved data
  generateResume();
});

// Function to generate the resume from data.ts
function generateResume() {
  if (!resumeData) return;

  // Update the resume output fields with the data
  outputName.textContent = resumeData.name;
  outputEmail.textContent = resumeData.email;
  outputEducation.textContent = resumeData.education;
  
  // Clear the skills list and add new ones
  outputSkillsList.innerHTML = '';
  resumeData.skills.forEach((skill: string | null) => {
    const li = document.createElement('li');
    li.textContent = skill;
    outputSkillsList.appendChild(li);
  });

  outputWorkExperience.textContent = resumeData.workExperience;
}

// Optional: Call generateResume on page load if resumeData is already populated
if (resumeData) {
  generateResume();
}
