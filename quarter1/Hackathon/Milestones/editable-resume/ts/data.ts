export interface ResumeData {
  name: string;
  email: string;
  education: string;
  skills: string[];  // Make sure this is an array of strings
  workExperience: string;
}

 export let resumeData: ResumeData | null = null;  // Initialize as null or some default


// Function to save the data
export function saveData(data: ResumeData) {
  resumeData = data;
}
