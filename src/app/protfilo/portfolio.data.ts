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
  { value: '10K+', label: 'Tax documents per month' },
  { value: '20K+', label: 'Journal records per batch' },
  { value: '35%', label: 'Faster report generation' },
  { value: '100+', label: 'User roles supported' }
];

export const skillGroups: SkillGroup[] = [
  { title: 'Backend & APIs', icon: 'bi-braces', items: ['C#', 'ASP.NET Core Web API', 'ASP.NET Core MVC', 'Entity Framework Core', 'LINQ', 'RESTful APIs'] },
  { title: 'Frontend', icon: 'bi-window', items: ['Angular (v14+)', 'TypeScript', 'JavaScript', 'RxJS', 'DevExpress', 'HTML5 / CSS3', 'Bootstrap'] },
  { title: 'Data & tools', icon: 'bi-database', items: ['SQL Server', 'ClosedXML', 'EPPlus', 'Postman', 'Swagger / OpenAPI', 'Git & GitHub', 'Python'] },
  { title: 'Engineering', icon: 'bi-diagram-3', items: ['Clean Architecture', 'SOLID', 'Dependency Injection', 'RBAC', 'ACID Transactions', 'Repository Pattern', 'OOP'] }
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
    period: 'Oct 2023 – Present',
    description: 'Building financial, supply chain, manufacturing, and healthcare ERP solutions with ASP.NET Core, Angular, EF Core, and SQL Server.',
    details: [
      'Integrated ETA e-Invoicing and e-Receipt APIs, including document validation, error recovery, and status synchronization for 10,000+ monthly documents.',
      'Built a double-entry general ledger engine for sales, purchases, insurance claims, and returns with transactional consistency.',
      'Developed asynchronous Excel pipelines with EPPlus and ClosedXML to validate 20,000+ journal records per batch before database commits.',
      'Delivered inventory, warehouse, production-line, and healthcare billing workflows through backend services and Angular interfaces.',
      'Implemented hierarchical role-based access across 100+ user roles and optimized reporting latency by 35%.'
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
  { name: 'Enterprise E-Commerce Platform', category: 'Full Stack', description: 'MVC storefront and secure REST APIs for catalog, stock reservations, checkout, and transaction verification, with 25+ documented endpoints.', technologies: ['ASP.NET Core MVC', 'Web API', 'EF Core', 'SQL Server', 'JWT'], githubUrl: 'https://github.com/tasneem2ahmad/PioneersStore', docsUrl: 'https://www.postman.com/joint-operations-technologist-15153356/workspace/my-workspace/collection/31032075-adb16389-84ea-451f-b470-9b0d17655f44?action=share&creator=31032075', icon: 'bi-bag', number: '01' },
  { name: 'Educational Management System', category: 'Full Stack', description: 'Institutional portal for students, faculty, courses, grades, and enrollment with role-based access and validation.', technologies: ['C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server'], githubUrl: 'https://github.com/tasneem2ahmad/TrainingStudent', icon: 'bi-mortarboard', number: '02' },
  { name: 'HR Management System', category: 'Full Stack', description: 'HR administration for payroll, leave, attendance, and shifts, including rules for overtime and deductions.', technologies: ['C#', 'ASP.NET MVC', 'Entity Framework', 'SQL Server'], icon: 'bi-people', number: '03' },
  { name: 'Lung Cancer Detection System', category: 'AI', description: 'Graduation project using CNNs and chest X-ray data to classify pulmonary lesions, reaching 92% validation accuracy.', technologies: ['Python', 'CNN', 'Computer Vision', 'OpenCV'], icon: 'bi-cpu', number: '04' }
];

