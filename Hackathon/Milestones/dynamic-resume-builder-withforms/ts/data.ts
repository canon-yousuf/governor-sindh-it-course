// data.ts

export interface ResumeData {
  name: string;
  email: string;
  education: string;
  skills: string[];
  workExperience: string;
}

// Variable to store the form data
export let resumeData: ResumeData | null = null;

// Function to save the data
export function saveData(data: ResumeData) {
  resumeData = data;
}
