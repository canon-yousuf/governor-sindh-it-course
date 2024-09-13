// main.ts
import { resumeData, saveData } from './data.js';
// Get DOM elements for the form and output
const form = document.getElementById('resumeForm');
const outputName = document.getElementById('output-name');
const outputEmail = document.getElementById('output-email');
const outputEducation = document.getElementById('output-education-text');
const outputSkillsList = document.getElementById('output-skills-list');
const outputWorkExperience = document.getElementById('output-work-text');
// Add event listener to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const workExperience = document.getElementById('workExperience').value;
    // Save the data in the data.ts module
    const formData = { name, email, education, skills, workExperience };
    saveData(formData);
    // Generate resume using the saved data
    generateResume();
});
// Function to generate the resume from data.ts
function generateResume() {
    if (!resumeData)
        return;
    // Update the resume output fields with the data
    outputName.textContent = resumeData.name;
    outputEmail.textContent = resumeData.email;
    outputEducation.textContent = resumeData.education;
    // Clear the skills list and add new ones
    outputSkillsList.innerHTML = '';
    resumeData.skills.forEach((skill) => {
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
