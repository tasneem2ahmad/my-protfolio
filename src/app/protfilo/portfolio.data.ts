export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  details: string[];
  certificateUrl?: string;
}

export interface Education {
  degree: string;
  period: string;
  institution: string;
  details: string;
  certificateUrl?: string;
}

export interface Project {
  name: string;
  category: 'Full Stack' | 'AI';
  description: string;
  technologies: string[];
  githubUrl?: string;
  docsUrl?: string;
  icon: string;
  number: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export const profile = {
  name: 'Tasneem Ahmed Gamal Eldin Shehata',
  email: 'Tasneemashehata@gmail.com',
  phone: '+20 1062614879',
  location: 'Cairo, Egypt'
};

export const stats = [
  { value: 'CRM', label: 'Customer workflows & support' },
  { value: 'ERP', label: 'Finance, HR & operations' },
  { value: 'AR / EN', label: 'Bilingual user interfaces' },
  { value: 'API', label: 'Permissions & automated tests' }
];

export const skillGroups: SkillGroup[] = [
  { title: 'Backend & APIs', icon: 'bi-braces', items: ['C#', 'ASP.NET Core Web API', 'ASP.NET Core MVC', 'Entity Framework Core', 'LINQ', 'RESTful APIs', 'Windows Forms'] },
  { title: 'Frontend', icon: 'bi-window', items: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'DevExtreme', 'HTML5 / CSS3', 'Bootstrap', 'Angular CLI'] },
  { title: 'Data & tools', icon: 'bi-database', items: ['SQL Server', 'DevExpress Reporting', 'ClosedXML', 'Postman', 'Swagger / OpenAPI', 'Git & GitHub', 'Python'] },
  { title: 'Engineering', icon: 'bi-diagram-3', items: ['Layered Architecture', 'Dependency Injection', 'Repository Pattern', 'Role-Based Access Control', 'Automated Testing', 'REST APIs'] }
];

export const educationList: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    period: 'Sept 2019 – May 2023',
    institution: 'Menofia University',
    details: 'Relevant coursework: Database Systems, Software Engineering, Data Structures & Algorithms, Computational Theory, Distributed Systems, and Operating Systems.',
    certificateUrl: 'https://drive.google.com/file/d/1GKG1dLZUCyatcdcGaek2KJXsQVTE-mmL/view?usp=drive_link'
  }
];

export const experiences: Experience[] = [
  {
    role: 'Full Stack Developer (.NET & Angular)',
    company: 'Pioneers Solutions — Cairo, Egypt',
    period: 'October 2024 – Present',
    description: 'Developing ERP features across CRM, accounting, HR, healthcare, sales, inventory, and production with ASP.NET Core, EF Core, SQL Server, Angular, and DevExtreme.',
    details: [
      'Built CRM APIs, EF Core models, SQL upgrade scripts, and Angular screens for leads, Customer 360, activities, opportunities, custom fields, dashboards, notifications, and support tickets with working-hours SLA calculations.',
      'Extended journal entries, cost centers, cheques, receipts, payment methods, due dates, and financial reports across backend services and Angular screens.',
      'Improved sales documents, returns, store transfers, production line job orders, and their validation and user interfaces.',
      'Contributed to Egyptian Tax Authority e-Invoicing and e-Receipt workflows across backend services and Angular screens.',
      'Worked on patient documents, admissions, insurance policies, clinical reports, employee workflows, payroll screens, and approval processes.',
      'Enhanced dynamic report definitions, filters, SQL-backed reports, statements, and the Angular report viewer with Arabic and English presentation.',
      'Added API permission actions, branch-aware access checks, user-facing validation, and automated tests for new CRM workflows.'
    ]
  },
  {
    role: '.NET Development Trainee',
    company: 'Information Technology Institute (ITI) — Cairo, Egypt',
    period: 'July 2023 – Sept 2023',
    description: 'Intensive training in enterprise backend engineering and relational database design.',
    details: [
      'Worked with C#, ASP.NET Core, LINQ, SQL Server, and EF Core Code-First.',
      'Applied repository patterns and dependency injection; developed Windows Forms database utilities.'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1GOdDiVfUu8qCOUOZmJj__nlDpoH0wbPa/view?usp=drive_link'
  },
  {
    role: 'UI Development Trainee',
    company: 'Information Technology Institute (ITI) — Cairo, Egypt',
    period: 'July 2022 – Aug 2022',
    description: 'Hands-on training in client-side engineering and responsive interfaces.',
    details: [
      'Built cross-browser single-page interfaces with JavaScript, HTML5, and CSS3.',
      'Practiced CSS Flexbox/Grid and DOM manipulation.'
    ],
    certificateUrl: 'https://drive.google.com/file/d/1GQe-K-szZLc80KjQaYi9uy6X9ZNDtuKS/view?usp=drive_link'
  }
];

export const projects: Project[] = [
  { name: 'E-Commerce Store (ASP.NET MVC)', category: 'Full Stack', description: 'ASP.NET MVC store with catalog, inventory, and order workflows, organized into presentation, business-logic, and data-access projects with published source code and API examples.', technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'Postman', 'Git'], githubUrl: 'https://github.com/tasneem2ahmad/PioneersStore', docsUrl: 'https://www.postman.com/joint-operations-technologist-15153356/workspace/my-workspace/collection/31032075-adb16389-84ea-451f-b470-9b0d17655f44?action=share&creator=31032075', icon: 'bi-bag', number: '01' },
  { name: 'Educational Management System', category: 'Full Stack', description: 'Institutional portal for students, faculty, courses, grades, and enrollment with role-based access and validation.', technologies: ['C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server'], githubUrl: 'https://github.com/tasneem2ahmad/TrainingStudent', icon: 'bi-mortarboard', number: '02' },
  { name: 'HR Management System', category: 'Full Stack', description: 'HR administration for payroll, leave, attendance, and shifts, including rules for overtime and deductions.', technologies: ['C#', 'ASP.NET MVC', 'Entity Framework', 'SQL Server'], icon: 'bi-people', number: '03' },
  { name: 'Lung Cancer Detection System', category: 'AI', description: 'Graduation research project training CNNs on chest X-ray images, with image preprocessing, augmentation pipelines, and feature map visualizations using OpenCV and Python.', technologies: ['Python', 'CNN', 'Computer Vision', 'OpenCV'], icon: 'bi-cpu', number: '04' }
];

