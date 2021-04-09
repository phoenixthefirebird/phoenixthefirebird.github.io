export const prodesc = [
  {
    id: 2,
    cardImage: "./image/slack.jpg",
    cardTitle: "Slack Clone with Login",
    cardDesc: `A simple Slack Clone React web app with Firebase backend and login functionality (Firebase Auth).
    It makes use of framer motioin and styled components. It also allows login persistence through the use of localStorage.`,
    link: true,
    target: "https://github.com/phoenixthefirebird/slack-clone",
    style: "white-text blue accent-2",
    skills: [
      "React",
      "CSS",
      "Styled Components",
      "Firebase",
      "Authentication",
      "Framer Motion",
    ],
  },
  {
    id: 1,
    cardImage: "./image/wiki.jpg",
    cardTitle: "WikiMediator Query",
    cardDesc: `An API service that supports basic and structured queries from Wikipedia. It makes use of 
    concurrency and threads in Java. Queries for workload is available and is supported by a thread-safe 
    workload tracking system.`,
    link: false,
    style: "white-text green accent-3",
    skills: ["Java", "Concurrency", "IntelliJ", "API", "Structured Query"],
  },
  {
    id: 0,
    cardImage: "./image/javascheduler.jpg",
    cardTitle: "Java Scheduler",
    cardDesc: `A simple scheduler that allows user to manage their time. 
      User would input task name, estimated duration, and deadline, 
      they can then select the preferred algorithm for ranking the 
      task which include shortest remaining time, deadline monotonic, 
      and earliest deadline first. The current task to be performed 
      is indicated and the user can tick after finishing some amount of work
      to update progress. User can also add, edit and remove tasks.`,
    link: true,
    target: "https://github.com/phoenixthefirebird/scheduler",
    style: "white-text purple accent-1",
    skills: ["Java", "UX design", "IntelliJ", "JFrame"],
  },
];
