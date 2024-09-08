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
    const formData = {
        name, email, education, skills, workExperience
    };
    saveData(formData);
    // Generate resume using the saved data
    generateResume(formData);
});
// Function to generate the resume from submitted data
function generateResume(formData) {
    // Update the resume output fields with the data
    outputName.textContent = formData.name;
    outputEmail.textContent = formData.email;
    outputEducation.textContent = formData.education;
    // Clear the skills list and add new ones
    outputSkillsList.innerHTML = '';
    formData.skills.forEach((skill) => {
        const li = document.createElement('li');
        li.textContent = skill;
        li.contentEditable = 'true'; // Make each skill editable
        outputSkillsList.appendChild(li);
    });
    outputWorkExperience.textContent = formData.workExperience;
    // Add contentEditable attributes for direct editing
    outputName.contentEditable = 'true';
    outputEmail.contentEditable = 'true';
    outputEducation.contentEditable = 'true';
    outputWorkExperience.contentEditable = 'true';
    // Save changes back to resumeData when editing
    [outputName, outputEmail, outputEducation, outputWorkExperience].forEach(element => {
        element.addEventListener('blur', () => {
            formData.name = outputName.textContent || '';
            formData.email = outputEmail.textContent || '';
            formData.education = outputEducation.textContent || '';
            formData.workExperience = outputWorkExperience.textContent || '';
            saveData(formData); // Save updated data
        });
    });
}
// Optional: Call generateResume on page load if resumeData is already populated
if (resumeData) {
    generateResume(resumeData);
}
