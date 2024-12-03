const logotext = "SARA";
const meta = {
    title: "SARA SHANNAN",
    description: "I'm Sara, a computer science student _ currently studuing at University of Detroit Mercy",
};

const introdata = {
    title: "I'm Sara Shannan",
    animated: {
        first: "I enjoy coding",
        second: "I code cool websites",
        third: "Free Palestine",
    },
    description: "Welcome to my digital playground, where resilience fuels creativity and innovation comes to life",
    your_img_url: "/portfolio/pics/saraport1.jpg",
};

const dataabout = {
    title: "A Little About Me",
    aboutme: "I am a Computer Science student with a passion for full-stack development and artificial intelligence. I enjoy building dynamic and user-friendly applications while exploring the innovative potential of AI to solve real-world problems and contribute positively to communities, drawing inspiration from the innovative spirit of my culture.",
};
const worktimeline = [{
    jobtitle: "Freelancer: Technical Writer",
    where: "Upwork",
    date: "2018-2020",
},
{
    jobtitle: "Language Instructor",
    where: "Sallam Center",
    date: "2018",
},

];
const skills = [{
    name: "C++",
    value: 90,
},
{
    name: "Javascript",
    value: 95,
},
{
    name: "Java",
    value: 85,
},
{
    name: "HTML",
    value: 80,
},
{
    name: "React",
    value: 90,
},
{
    name: "Jquery",
    value: 85,
},
{
    name: "Python",
    value: 85,
},
{
    name: "SEO",
    value: 90,
},
{
    name: "MySql",
    value: 80,
},
{
    name: "Resilience",
    value: 110,
},
];

const services = [{
    title: "University of Detroit Mercy, Detroit, Michigan - BS in Computer Science",
    description: "GPA: 4.00.",
    detailedDescription: "Jesuit Founders Full-Tuition Scholarship Recipient. ",

},
{
    title: "Henry Ford Community College - Computer Science credits ",
    description: "GPA: 4.00.",
    detailedDescription: "Honors Student - Member of Phi Theta Kappa Honor Society. "

},
];

const dataportfolio = [
    {
        img: "/portfolio/pics/tech2.PNG",
        description: "Developed an instruction set for building a basic website. Focused on clear, step-by-step guidance and visual aids to make it accessible to beginners.",
        title: "Instruction Set -Technical Writing",
        details:  [
            "Project Overview.",
            "The project involved creating a clear, easy-to-follow instruction set on building a basic website. I ensured the content was suitable for beginners and included visuals and step-by-step guidance.",
          ],
          file: "/portfolio/pics/projecttech2.zip" 
    
    },
    {
        img: "/portfolio/pics/tech1.PNG",
        description: " Created a detailed technical description of the Medela breast pump, focusing on defining its key characteristics and explaining its processes to inform new mothers.",
        title: "Defenitions and Descriptions -Technical Writing",
        details:  [
            "Project Overview.",
            "This technical writing project involved developing a technical description of a product, I selected the Medela breast pump, aimed at informing new mothers. This task required presenting the product's attributes, distinguishing characteristics, and the processes it uses in a structured and clear manner. The project allowed me to practice and apply the Item = Category + Distinguishing Characteristics framework for precise technical definitions.",
          ],
          file: "/portfolio/pics/projecttech1.zip" // Path to the downloadable file
    
    },
    {
    img: "/portfolio/pics/e-commerce.PNG",
    description: "Transforming an E-commerce app into a server-side application using Express, where the app's core functionalities are accessed through browser routes and rendered dynamically with EJS templates.",
    title: "Marketpkace Website",
    details:  [
        "Project Overview.",
        "Objective: Develop an understanding of routing concepts and use of template engines by converting an existing E-commerce app into a server-side application using Express.js and EJS for dynamic content rendering.",
        "Goal: Transform the E-commerce app from the previous assignment into a web-based application where users interact through a browser.",
        "This involves: Using Express to define server routes, integrating EJS templates for dynamic webpage generation, using a users.json file for data persistence (read/write locally), and dapting user interaction from console-based to web-based forms."
      ],
      file: "/portfolio/pics/project1.zip" // Path to the downloadable file

},
{
    img: "/portfolio/pics/stocks-app.PNG",
    description: "Building DOM functionality for a stocks web app using JavaScript, allowing users to view a list of people and their stocks, click on names to see details and portfolios, and view individual stock details within a single-page application (SPA).",
    title: "The Stocks App",
    details:  [
        "Project Overview.",
        "Objective: The objective of this project is to understand and implement DOM manipulation techniques, while also developing the ability to read and interpret template codebases. For this assignment, I created a partially designed stocks application by modifying a JavaScript file. The resources include HTML, CSS, and JS files, along with dummy data and images to be used in the implementation.",
        "Goal: The stocks web application is a straightforward project designed as a Single Page Web Application (SPA). It requires displaying a list of people and their stock portfolios. When a user clicks on a name, the application should dynamically show the person’s details and the portfolio of stocks they own. Additionally, clicking on a specific stock will reveal its details, all without leaving the page. The focus is on leveraging DOM manipulation techniques to ensure a seamless and interactive single-page user experience.",
      ],
      file: "/portfolio/pics/project2.zip"   
      },
{
    img: "/portfolio/pics/glasshour.PNG",
    description: "Mimicking the design of a time monitoring device based on an hourglass timer that can be manipulated through user input.",
    title: "Time Variance Authority App",
    details:  [
        "Project Overview.",
        "Objective: The objective of this project is to become familiar with JavaScript syntax and fundamental programming constructs, while also learning to interact with the Document Object Model (DOM) and handle events using JavaScript. I designed a web application for the Time Variance Authority (TVA), an organization that monitors time across universal timelines. Inspired by Earth's classic hourglass timer, the assignment involved creating a visual, interactive representation of an hourglass that depicts the passage of time",
        "Goal: The project focuses on leveraging HTML, CSS, and JavaScript to generate the hourglass dynamically, transitioning from static command-line interactions to a responsive, visually engaging web-based design. This enhanced implementation aims to provide an improved user experience while reinforcing key JavaScript and DOM manipulation skills.",
    ],
    file: "/portfolio/pics/project3.zip"    

},
{
    img: "/portfolio/pics/rest-harry.PNG",
    description: "Designing the HTML and CSS structure and outline of Harry Potter-themed restaurant",
    title: "Harry Potter Restaurant Website",
    details:  [
        "Project Overview.",
        "Objective: Demonstrating proficiency in using basic CSS and HTML5 elements by creating a simple multi-page website and meeting specific functional and non-functional requirements.",
        "Goal: The assignment aims to ensure the building and styling of a functional and organized website using fundamental web development techniques.",
    ],
    file: "/portfolio/pics/project4.zip"    
},
{
    img: "/portfolio/pics/paper1.PNG",
    description: "A Conceptual Model for Intelligent Software System Desig which presents a model focusing on AI integration, detailing the iterative stages, and a layered approach to address challenges like data reliability and adaptive interfaces.",
    title: "A Review of “Development of a Conceptual Model for Intelligent Software System Designing”",
    details:  [
        "Project Overview:",
        "Purpose and Framework: The paper proposes a comprehensive, systematic model for designing intelligent software systems, focusing on integrating artificial intelligence to enhance system functionality. It emphasizes an iterative, layered approach, addressing critical aspects like task identification, data reliability, decision-making mechanisms, and adaptive user interfaces.",
        "Key Contributions: The conceptual model outlines detailed design phases, involving domain experts to ensure robust development, cost efficiency, and adaptability. Its application is demonstrated across diverse fields such as healthcare, finance, and engineering, showcasing its potential to streamline intelligent system design.",
        ],
    file: "/portfolio/pics/project5.zip"     
},
{
    img: "/portfolio/pics/paper2.PNG",
    description: "The software engineering process of a library software system inlcuding the funcational and nontfunctional requirements, the process model, and archeticutre.",
    title: "Engineering a Library Software System",
    details:  [
        "Project Overview:",
        "Purpose and Functionality: The project aims to create a feature-rich library management system to enhance efficiency and user experience. It includes tools for managing library resources (e.g., books, journals, e-books) and user services like borrowing, returning, account management, and automated notifications.",
        "Technology and Goals: Utilizing a MySQL database and user-friendly interfaces, the system focuses on robust search, automated reminders, fine management, and security measures. It aims to reduce manual work, boost user satisfaction, and encourage modern library technology adoption.",
    ],
    file: "/portfolio/pics/project6.zip"     
},

{
    img: "/portfolio/pics/paper3.PNG",
    description: "A research paper addressing the cybersecurity threats and measurments in autonmous vehicles.",
    title: "Cybersecurity Threats and Countermeasures in Automotive Vehicles",
    details:  [
        "Project Overview:",
        "Cybersecurity Risks in Autonomous Vehicles: The paper reviews the key cybersecurity challenges faced by autonomous and connected vehicles, focusing on vulnerabilities in sensors, network attacks on the CAN bus and V2X communication, and issues related to data privacy and physical access points.",
        "Countermeasures and Future Directions: It discusses potential solutions such as secure hardware and software architectures, data encryption, and intrusion detection systems. The importance of industry standards and collaboration is highlighted, along with the need for continued research to strengthen AV cybersecurity and ensure system resilience.",
],
    file: "/portfolio/pics/project7.zip"
},
{
    img: "/portfolio/pics/maze.PNG",
    description: "Implemented a maze solver program that reads a pre-generated 10x10 maze from a file and employs an appropriate data structures such as stacks, queues, deques and a breadth-first search algorithm to find the path from the start to the exit.",
    title: "Maze and Data Structures",
    details:  [
        "Project Overview:",
        "Objective: Assess understanding of data structures and problem-solving techniques.",
        "Goal: To implement a maze solver program that reads a 10x10 maze from a file and uses a suitable data structure (e.g., stacks, queues, deques) along with an algorithm (e.g., breadth-first search) to find the path from the starting point to the exit.",
        "Read project reflection paper below. ",
],
    file: "/portfolio/pics/project8.zip"
},
{
    img: "/portfolio/pics/sorting.PNG",
    description: "Implemented and analyzed the performance of selected sorting algorithms in terms of runtime, comparisons, and movements.",
    title: "Sorting Algorthims Project",
    details:  [
        "Project Overview:",
        "Objective: To implement and analyze the performance of different sorting algorithms by assessing their runtime, number of comparisons, and movements, and to reflect on the design choices and algorithmic efficiency.",
        "Goal: To understand how sorting algorithms with different time complexities (O(n^2) and O(n log n)) perform in various scenarios and to provide a comparative analysis based on runtime, comparisons, and movements.",
        "The project involves implementing four sorting algorithms—two with O(n^2) complexity (e.g., Bubble Sort, Selection Sort, Insertion Sort) and two with O(n log n) complexity (e.g., Merge Sort, Quick Sort)—and analyzing their performance.",
        "Read project analyis below",
],
    file: "/portfolio/pics/project9.zip" 
},
{
    img: "/portfolio/pics/calc.PNG",
    description: "Used Java to design and implement a well-documented graphical user interface for a simple scientific calculator that is capable of performing basic arithmetic operations and handling user input effectively.",
    title: "Java Calculator",
    details:  [
        "Project Overview:",
        "Objective: To create a well-documented scientific calculator with a functional GUI that handles user input, displays calculations, and processes basic arithmetic operations.",            
        "This project involves designing and implementing a graphical user interface (GUI) for a scientific calculator that can perform basic arithmetic operations and manage user input efficiently.",
        "Read project assignment in details below.",
],
    file: "/portfolio/pics/project10.zip"     
},
{
    img: "/portfolio/pics/tic.PNG",
    description: "Used Java to design and implement a basic GUI for Tic-Tac-Toe game. It keeps track of the game state and information about the two players, including their names and how many games each has won.",
    title: "Java Tic Tac Toe",
    details:  [
        "Project Overview:",
        "Objective: To create an interactive, user-friendly Tic-Tac-Toe game with a GUI that records player statistics, supports game logic, and handles various user interactions.",
        "This project involves designing and implementing a graphical user interface (GUI) for a Tic-Tac-Toe game. The application should manage the game state, keep track of player information, and update the game log with each play.",
        "Read project assignment in details below.",
],
    file: "/portfolio/pics/project11.zip"    
},
{
    img: "/portfolio/pics/maze1.PNG",
    description: "Used Java to design and implement a GUI for a maze game. The player is able to walk through the maze, starting from the entrance and trying to find the exit.",
    title: "Java Maze",
    details:  [
        "Project Overview:",
        "Objective: To create an interactive, user-friendly maze game with a GUI that generates and displays mazes, allows player navigation, and includes features like pathfinding, movement tracking, and game state management.",
        "Goal: The project involves designing and implementing a graphical user interface (GUI) for a maze game where players navigate from an entrance to an exit. The maze should be generated with configurable settings and be solvable, allowing for interaction through cell clicks and tracking of player progress.",
        "Read project assignment in details below.",
],
    file: "/portfolio/pics/project12.zip"    
},
];

const contactConfig = {
    YOUR_EMAIL: "sarahshannan1996@gmail.com",
    // YOUR_FONE: "Not really comfortable posting my phone # online yet. ",
    description: "Feel free to email me for any questions or inquiries! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};