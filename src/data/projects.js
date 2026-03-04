export const projects = [
    {
        id: 1,
        title: "Brain Tumor Detection System",
        category: "Medical AI",
        headline: "Diagnostic Assistant & Image Analysis",
        overview: "Automated detection system designed to assist radiologists in identifying tumor regions from MRI scans. It addresses the challenge of diagnostic fatigue by pre-screening medical imagery.",
        architecture: [
            "Image Acquisition Pipeline",
            "Preprocessing (Noise Removal)",
            "Segmentation Engine",
            "Classification Model",
            "Diagnostic Reporting"
        ],
        models: ["CNN Architecture", "Image Processing", "Feature Extraction"],
        stack: ["Python", "TensorFlow", "OpenCV", "Flask"],
        links: {
            github: "https://github.com/NJ2612/Brain_Tumor_Detection_System",
            demo: "https://github.com/NJ2612/Brain_Tumor_Detection_System"
        }
    },
    {
        id: 2,
        title: "Exam Duty Allocation System",
        category: "Automation System",
        headline: "Constraint-Based Resource Scheduling",
        overview: "Solves the complex logistical problem of assigning faculty to exam duties. The system manages fairness constraints, leave status, and strictly avoids scheduling conflicts.",
        architecture: [
            "Faculty Database",
            "Constraint Engine",
            "Allocation Logic",
            "Conflict Resolver",
            "Notification Service"
        ],
        models: ["Constraint Satisfaction", "Automated Scheduling", "Fairness Algorithms"],
        stack: ["React", "Node.js", "MongoDB", "Express"],
        links: {
            github: "https://github.com/Stack-Nova/Exam_Duty_Allocation",
            demo: "https://exam-duty-allocation.onrender.com"
        }
    },
    {
        id: 3,
        title: "Movie Review Sentiment Analysis",
        category: "NLP / Analytics",
        headline: "Textual Intelligence & Opinion Mining",
        overview: "An analytical pipeline processing vast amounts of unstructured text data to extract sentiment polarity and identifies audience trends from reviews.",
        architecture: [
            "Data Collection",
            "Text Cleaning (Stopwords/Stemming)",
            "Vectorization (TF-IDF)",
            "Model Analysis",
            "Insight Dashboard"
        ],
        models: ["Natural Language Processing", "Sentiment Classification", "Text Vectorization"],
        stack: ["Python", "NLTK", "Scikit-Learn", "Streamlit"],
        links: {
            github: "https://github.com/NJ2612/Movie_Review_Sentiment_Analysis",
            demo: "https://github.com/NJ2612/Movie_Review_Sentiment_Analysis"
        }
    },
    {
        id: 4,
        title: "Smart EV Route Optimiser",
        category: "Optimization",
        headline: "Intelligent Navigation & Load Balancing",
        overview: "A routing system designed for electric vehicles that calculates optimal paths based on charging station availability, battery levels, and distance to reduce range anxiety.",
        architecture: [
            "Input Processor",
            "Graph Construction",
            "Pathfinding Engine",
            "Station Database",
            "Route Visualizer"
        ],
        models: ["Graph Algorithms", "Heuristic Search", "Battery Usage Estimation"],
        stack: ["Python", "NetworkX", "Google Maps API", "Pandas"],
        links: {
            github: "https://github.com/NJ2612/Smart_EV_Route_Optimiser",
            demo: "https://github.com/NJ2612/Smart_EV_Route_Optimiser"
        }
    },
    {
        id: 5,
        title: "Library Management System",
        category: "Full Stack Platform",
        headline: "Digital Asset & Inventory Management",
        overview: "A comprehensive platform for managing library operations, including book tracking, member management, and automating the borrowing lifecycle.",
        architecture: [
            "User Interface",
            "Authentication Service",
            "Transaction Manager",
            "Inventory Database",
            "Admin Control Panel"
        ],
        models: ["CRUD Operations", "Role-Based Access", "Search Indexing"],
        stack: ["Java", "Spring Boot", "MySQL", "React"],
        links: {
            github: "https://github.com/NJ2612/library_management_system",
            demo: "https://github.com/NJ2612/Library_management_system"
        }
    },
    {
        id: 6,
        title: "Stan Lee Tribute Page",
        category: "Creative Frontend",
        headline: "Interactive Digital Storytelling",
        overview: "A visually immersive tribute to the comic book legend, focusing on narrative animations, comic-style layouts, and emotional engagement through UI design.",
        architecture: [
            "Visual Storyboard",
            "DOM Animation Layer",
            "Responsive Layout",
            "Asset Optimization"
        ],
        models: ["Scroll Interactions", "CSS Animations", "Responsive Design"],
        stack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        links: {
            github: "https://github.com/NJ2612/Stan-Lee-Tribute-Page",
            demo: "https://nj2612.github.io/Stan-Lee-Tribute-Page/"
        }
    },
    {
        id: 7,
        title: "Cyber Crime Analysis System",
        category: "Data Intelligence",
        headline: "Pattern Discovery & Risk Intelligence",
        overview: "A decision-support intelligence system that processes multi-year cybercrime records to discover underlying patterns, potential hotspots, and emerging risk trends using exploratory data analysis.",
        architecture: [
            "Data Ingestion Pipeline",
            "Data Cleaning & Normalization",
            "Exploratory Analysis Engine",
            "Trend Identification Module",
            "Visualization Reporting"
        ],
        models: ["Statistical Analysis", "Pattern Recognition", "Geospatial Clustering"],
        stack: ["Python", "Pandas", "Seaborn", "Jupyter"],
        links: {
            github: "https://github.com/NJ2612/Cyber_Crime_Analysis_System",
            demo: "https://github.com/NJ2612/Cyber_Crime_Analysis_System"
        }
    },
    {
        id: 8,
        title: "Smart Task Manager",
        category: "System / OS",
        headline: "Process Monitoring & Anomaly Awareness",
        overview: "An intelligent system monitoring platform that analyzes active processes in real-time, detecting anomalies in resource usage and learning from user behavior to optimize task organization.",
        architecture: [
            "Process Monitor Daemon",
            "System Metrics Collector",
            "Behavior Analysis Engine",
            "Anomaly Detection Logic",
            "User Dashboard"
        ],
        models: ["Anomaly Detection", "Behavioral Profiling", "Resource Tracking"],
        stack: ["Python", "System APIs", "Scikit-Learn", "Tkinter"],
        links: {
            github: "https://github.com/Aksh2908/smart_task_manager",
            demo: "https://github.com/Aksh2908/smart_task_manager"
        }
    },
    {
        id: 9,
        title: "University Event Calendar",
        category: "Full Stack Platform",
        headline: "Centralized Scheduling & Conflict Resolution",
        overview: "A scalable organizational system for managing university-wide events, featuring automated conflict handling, approval workflows, and centralized reporting to streamline campus activities.",
        architecture: [
            "Authentication Service",
            "Event Scheduling Engine",
            "Conflict Resolution Logic",
            "Approval Workflow Manager",
            "Notification System"
        ],
        models: ["Constraint Checking", "Workflow Automation", "Role-Based Access Control"],
        stack: ["React", "Node.js", "MongoDB", "Express"],
        links: {
            github: "https://github.com/Stack-Nova/Event-Calendar",
            demo: "https://event-calendar-alpha-red.vercel.app/"
        }
    },
    {
        id: 10,
        title: "WhistleBlower: Decentralized Evidence Verification Platform",
        category: "Security / AI",
        headline: "AI-Powered Evidence Verification & Blockchain-Inspired Logging",
        overview: "A decentralized, multi-platform system designed to securely collect, verify, and store evidence in a tamper-resistant manner. It leverages AI-powered deepfake detection alongside blockchain-inspired logging to provide trustworthy validation for images, videos, and audio submissions.",
        architecture: [
            "Evidence Submission & Processing (Android/Web)",
            "AI Integration (Deepfake Detection)",
            "Ensemble & Verdict Generation",
            "Evidence Storage & Logging",
            "Blockchain-Inspired Hashing"
        ],
        models: ["CLIP Vision-Language Models", "CNN-based Classifiers", "Wav2Vec2 Audio Detection", "WavLM Hindi Fine-tuned Model", "Ensemble Deepfake Detection"],
        stack: ["Android App", "Web Frontend", "Python", "TensorFlow", "PostgreSQL", "RESTful APIs"],
        links: {
            github: "https://github.com/ReaalSATYAM/WhistleBlower",
            demo: "https://github.com/ReaalSATYAM/WhistleBlower"
        }
    },
    {
        id: 11,
        title: "EDGE: Early Detection Of Geohazard Events",
        category: "Environmental AI",
        headline: "Landslide Risk Prediction & Early Warning System",
        overview: "An advanced geohazard monitoring system that implements slope stability models using rainfall infiltration variables and factor-of-safety equations across multiple terrain profiles. The system evaluates historical landslide events to identify high-risk failure zones during extreme rainfall conditions.",
        architecture: [
            "Rainfall Infiltration Model",
            "Slope Stability Analysis Engine",
            "Factor-of-Safety Calculator",
            "Historical Event Database",
            "Real-Time Risk Scoring Module",
            "Early Warning Alert System"
        ],
        models: ["Slope Stability Modeling", "Rainfall Infiltration Analysis", "Factor-of-Safety Equations", "Geospatial Risk Mapping", "Time-Series Simulation"],
        stack: ["Python", "TensorFlow", "Pandas", "NumPy", "GIS Tools"],
        links: {
            github: "https://github.com/NJ2612/EDGE-Early-Detection-Of-Geohazarad-Events",
            demo: "https://github.com/NJ2612/EDGE-Early-Detection-Of-Geohazarad-Events"
        }
    }
];

