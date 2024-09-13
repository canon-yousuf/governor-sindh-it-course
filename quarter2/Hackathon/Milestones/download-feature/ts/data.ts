export interface ResumeData {
  name: string;
  email: string;
  education: string;
  skills: string[];  // Array of skills
  workExperience: string;
}

export let resumeData: ResumeData | null = null;  // Initialize as null or some default

// Function to save the data
export function saveData(data: ResumeData) {
  resumeData = data;
}
