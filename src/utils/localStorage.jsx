const employees = [
  {
    id: 1,
    firstName: "Rohan",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      failed: 1,
      new_task: 0,
      completed: 1,
    },
    tasks: [
      {
        active: true,
        failed: false,
        new_task: false,
        completed: false,
        task_title: "Prepare monthly report",
        task_description: "Compile data for the monthly financial report.",
        task_date: "2024-11-10",
        category: "Finance",
      },
      {
        active: true,
        failed: false,
        new_task: true,
        completed: false,
        task_title: "Team meeting",
        task_description: "Attend the weekly team meeting.",
        task_date: "2024-11-08",
        category: "Meetings",
      },
      {
        active: false,
        failed: true,
        new_task: false,
        completed: false,
        task_title: "Project deadline review",
        task_description: "Review and submit the project deliverables.",
        task_date: "2024-10-20",
        category: "Projects",
      },
    ],
  },
  {
    id: 2,
    firstName: "Pranav",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 5,
      failed: 0,
      new_task: 1,
      completed: 3,
    },
    tasks: [
      {
        active: true,
        failed: false,
        new_task: true,
        completed: false,
        task_title: "Client call",
        task_description: "Discuss project requirements with the client.",
        task_date: "2024-11-09",
        category: "Client Communication",
      },
      {
        active: false,
        failed: false,
        new_task: false,
        completed: true,
        task_title: "Document updates",
        task_description: "Update project documentation with recent changes.",
        task_date: "2024-10-25",
        category: "Documentation",
      },
      {
        active: true,
        failed: false,
        new_task: false,
        completed: false,
        task_title: "Training session",
        task_description: "Attend the training on new software tools.",
        task_date: "2024-11-12",
        category: "Training",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ishaan",
    email: "employee3@example.com",
    password: "879473",
    taskNumbers: {
      active: 2,
      failed: 1,
      new_task: 1,
      completed: 0,
    },
    tasks: [
      {
        active: true,
        failed: false,
        new_task: true,
        completed: false,
        task_title: "Inventory check",
        task_description: "Verify stock levels and report discrepancies.",
        task_date: "2024-11-07",
        category: "Inventory",
      },
      {
        active: false,
        failed: true,
        new_task: false,
        completed: false,
        task_title: "Order processing",
        task_description: "Process new orders from last week.",
        task_date: "2024-10-30",
        category: "Orders",
      },
      {
        active: true,
        failed: false,
        new_task: false,
        completed: false,
        task_title: "System maintenance",
        task_description: "Perform scheduled maintenance on systems.",
        task_date: "2024-11-08",
        category: "Maintenance",
      },
    ],
  },
  {
    id: 4,
    firstName: "Arjun",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      failed: 0,
      new_task: 1,
      completed: 1,
    },
    tasks: [
      {
        active: true,
        failed: false,
        new_task: false,
        completed: false,
        task_title: "Prepare presentation",
        task_description: "Create a presentation for the upcoming conference.",
        task_date: "2024-11-13",
        category: "Events",
      },
      {
        active: false,
        failed: false,
        new_task: false,
        completed: true,
        task_title: "Submit expense report",
        task_description: "Complete and submit last month's expense report.",
        task_date: "2024-10-28",
        category: "Finance",
      },
      {
        active: true,
        failed: false,
        new_task: true,
        completed: false,
        task_title: "Team brainstorming session",
        task_description:
          "Participate in a brainstorming session for new project ideas.",
        task_date: "2024-11-07",
        category: "Meetings",
      },
    ],
  },
  {
    id: 5,
    firstName: "Richa",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      failed: 1,
      new_task: 1,
      completed: 0,
    },
    tasks: [
      {
        active: false,
        failed: true,
        new_task: false,
        completed: false,
        task_title: "Submit audit documents",
        task_description: "Gather and submit all documents for the audit.",
        task_date: "2024-10-15",
        category: "Audit",
      },
      {
        active: true,
        failed: false,
        new_task: true,
        completed: false,
        task_title: "Design review",
        task_description: "Attend a design review session for the product.",
        task_date: "2024-11-09",
        category: "Design",
      },
      {
        active: true,
        failed: false,
        new_task: false,
        completed: false,
        task_title: "Content writing",
        task_description: "Draft content for the new website section.",
        task_date: "2024-11-10",
        category: "Content Creation",
      },
    ],
  },
];

const admin = [
  {
    admin: {
      id: 1,
      email: "admin@example.com",
      password: "123",
      firstName: "Deepesh",
    },
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
