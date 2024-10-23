# **Next.js Project with TypeScript and Tailwind CSS**

## **Introduction**
This project is a simple web application built using **Next.js**, **TypeScript**, and **Tailwind CSS**. It includes four main pages: **Home**, **About Us**, **Jobs**, and **Contact Us**. The purpose of this project is to demonstrate the creation of a responsive web app with clean code, leveraging the power of TypeScript and the utility-first CSS framework, Tailwind.

## **Features**
- **Next.js**: A React framework for production-grade applications with server-side rendering and static site generation.
- **TypeScript**: Ensures type safety and improves developer productivity by catching errors during development.
- **Tailwind CSS**: A utility-first CSS framework for styling the UI with ease and flexibility.
- **Multiple Pages**: Navigation between **Home**, **About Us**, **Jobs**, and **Contact Us** pages.
- **Reusable Header Component**: A header with links to each page, making navigation easy across the app.

## **Pages**
1. **Home**: The main landing page that welcomes visitors.
2. **About Us**: A brief description of the company or website purpose.
3. **Jobs**: Displays job opportunities.
4. **Contact Us**: Provides contact information with an email link.

## **Technologies Used**
- **Next.js**: [https://nextjs.org/](https://nextjs.org/)
- **TypeScript**: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **Tailwind CSS**: [https://tailwindcss.com/](https://tailwindcss.com/)

## **Getting Started**

### **Prerequisites**
Ensure you have **Node.js** and **npm** (or **yarn**) installed on your machine. You can download Node.js from [here](https://nodejs.org/).

### **Installation**

1. Clone the repository:

    ```bash
    git clone https://github.com/canon-yousuf/governor-sindh-it-course/quarter2/Assignement1/assignement01.git
    ```

2. Navigate to the project folder:

    ```bash
    cd Assignment-1
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## **Project Structure**

```bash
.
├── app
│   ├── about
│   │   └── page.tsx       # About Us page
│   ├── contact
│   │   └── page.tsx       # Contact Us page
│   ├── services
│   │   └── page.tsx       # Services page
│   ├── faq                # Faq Page
│   │   └── page.tsx 
│   └── page.tsx           # Home page
├── components
│   └── Header.tsx         # Reusable header component
├── styles
│   └── globals.css        # Global styles (includes Tailwind imports)
├── public                 # Public assets (if any)
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project metadata and dependencies
└── README.md               # Project overview and instructions
