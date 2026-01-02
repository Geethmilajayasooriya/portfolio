import { ExternalLink, Github, Leaf, Users, Car } from 'lucide-react';

import { Button } from './ui/button';

const projects = [
  {
    title: 'budgetmate',
    subtitle: 'Financial Tracking App',
     description: 'A smart budgeting mobile app that automatically detects transactions from messages using NLP and regex, supports manual income/expense entry, budget planning, reminders, receipt scanning, visual analytics, secure authentication, and cloud-based storage for real-time financial tracking.',
  techStack: ['React Native', 'Expo', 'Firebase','JavaScript'],
    github: 'https://github.com/Geethmilajayasooriya/budgetmate',
    icon: Users,
    gradient: 'from-green-500/20 to-emerald-600/20',
    iconColor: 'text-green-400',
  },
  {
    title: 'Cloud-Based Note-Taking App',
  subtitle: 'Personal & Collaborative Note Management',
  description: 'A  mobile app that allows users to create, edit,delete and store notes in the cloud. Features real-time synchronization, secure storage, and an intuitive user interface for easy note management.',
  techStack: ['React Native', 'Firebase', 'Expo','JavaScript'],
    github: 'https://github.com/Geethmilajayasooriya/note_taking_web_app',
    icon: Users,
    gradient: 'from-blue-500/20 to-cyan-600/20',
    iconColor: 'text-blue-400',
  },
  {
  icon: Users,
  title: 'Student Management System',
  subtitle: 'Full-Stack Student Data Management',
  description: 'LMS is a full-stack application built with Spring Boot (Java) for the backend and React.js for the frontend. It allows administrators to add, edit, view, and delete student data including names, contact information, department, and status. The app features a responsive and intuitive interface for easy management of student records.',
  techStack: [
    'React.js', 
    'Axios', 
    'Bootstrap', 
    'Spring Boot', 
    'Spring Data JPA', 
    'MySQL', 
    'RESTful APIs'
  ],
  github: 'https://github.com/Geethmilajayasooriya/studentmanagemet_withSpringboot',
  gradient: 'from-blue-400/20 to-indigo-500/20',
  iconColor: 'text-blue-500',
},
{
  icon: Users,
  title: 'Library Management System',
  subtitle: 'Full-Stack Library Administration App',
  description: 'A full-featured Library Management System built with React.js, React Router, and React-Bootstrap for the frontend, connected to a Node.js backend. The app allows administrators to manage books, staff, members, and lending activities, with full support for viewing, adding, updating, and deleting records. Includes a login system and intuitive navigation for seamless library operations.',
  techStack: [
    'React',
    
    'Bootstrap 5',
    ' CSS',
    'Node.js',
    'Express.js',
    'MySQL',
    'RESTful APIs',
    
  ],
  github: 'https://github.com/Geethmilajayasooriya/Library_Management_system',
  gradient: 'from-purple-400/20 to-pink-500/20',
  iconColor: 'text-purple-500',
},




  {
  icon: Users,
  title: 'Supermarket Assistant Chatbot',
  subtitle: 'AI-Powered Shopping Helper',
  description: 'A web-based chatbot that helps users locate items in a supermarket. Uses natural language processing (NLP) to extract product names from user input and maps them to shelf locations, providing an intuitive shopping experience.',
  techStack: ['Python', 'Flask', 'spaCy (NLP)', 'HTML/CSS', 'JavaScript'],
  github: 'https://github.com/Geethmilajayasooriya/Supermarket_Assistant_Chatbot',
  gradient: 'from-yellow-400/20 to-orange-500/20',
  iconColor: 'text-yellow-500',
},

{
  icon: Users,
  title: 'CardioMate',
  subtitle: 'Web App for Predicting Heart Disease Risk',
  description: 'A web-based application that estimates heart disease risk using a machine learning regression model. Users can input patient details such as age, gender, cholesterol, blood pressure, diabetes, smoking, and medication. The app provides a professional and responsive UI, predicts risk percentages in real-time via Flask, and displays results on a separate results page.',
  techStack: ['Python', 'Flask', 'scikit-learn', 'NumPy', 'Bootstrap 5', 'HTML', 'CSS', 'Joblib'],
  github: 'https://github.com/Geethmilajayasooriya/Heart_Risk_Predictor',
  gradient: 'from-red-400/20 to-pink-500/20',
  iconColor: 'text-red-500',
},
{
  icon: Users,
  title: 'Sinhala Handwritten Character Recognition',
  subtitle: 'Machine Learning Project for Recognizing Sinhala Characters',
  description: 'A machine learning project that recognizes Sinhala handwritten characters using a KNN classifier. Users can draw characters on a Tkinter-based canvas, save images to the dataset, and predict characters in real-time. The system preprocesses images into 8×8 grayscale features, trains a KNN model with scikit-learn, and provides accurate predictions with an intuitive GUI.',
  techStack: ['Python', 'Tkinter', 'scikit-learn', 'NumPy', 'OpenCV', 'Pillow', 'Joblib'],
  github: 'https://github.com/Geethmilajayasooriya/sinhala-character-recognition',
  gradient: 'from-indigo-400/20 to-purple-500/20',
  iconColor: 'text-indigo-500',
},

{
  icon: Users,
  title: 'BlackJack Game',
  subtitle: 'Interactive Web-Based Card Game',
  description: 'A browser-based BlackJack game built using JavaScript, HTML, and CSS. The game includes interactive card dealing, score tracking, and game logic to simulate a real BlackJack experience. Designed with a responsive UI for engaging gameplay and user interaction.',
  techStack: ['JavaScript', 'HTML', 'CSS'],
  github: 'https://github.com/Geethmilajayasooriya/BlackJackGame',
  gradient: 'from-yellow-300/20 to-orange-400/20',
  iconColor: 'text-yellow-500',
},
{
  icon: Users,
  title: 'Face Recognition System',
  subtitle: 'Python + OpenCV + KNN Project',
  description: 'A face recognition system built using Python, OpenCV, and a K-Nearest Neighbors (KNN) classifier. The system detects faces, captures training data manually, trains a model, and predicts identities from test images. Features include bounding boxes, name predictions, and model saving/loading with joblib.',
  techStack: ['Python', 'OpenCV', 'scikit-learn', 'KNN', 'Joblib', 'NumPy'],
  github: 'https://github.com/Geethmilajayasooriya/Face_recognition',
  gradient: 'from-indigo-400/20 to-purple-500/20',
  iconColor: 'text-indigo-500',
}







];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">03. Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What I've Built
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="group relative rounded-2xl bg-gradient-card border border-border overflow-hidden card-hover"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon & Links Row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-primary/10 ${project.iconColor} shadow-card`}>
                        <IconComponent size={28} />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          aria-label="View GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          aria-label="View Project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/80 mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground text-sm flex-grow mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono text-muted-foreground bg-primary/5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="glow" size="lg" asChild className="glow-primary">
              <a
                href="https://github.com/Geethmilajayasooriya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={20} />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
