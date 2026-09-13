const header = {
  homepage: 'https://shobhitsinha04.github.io/personal_website',
  title: 'SS.',
}

const about = {
  name: 'Shobhit Sinha',
  description: [
    'I\'m an MEng student in EECS at UC Berkeley and a Computer Engineering graduate from UIUC. I enjoy building intelligent, scalable systems, from low-level infrastructure to the machine learning that runs on top of it.',
    <br />,
    <br />,
    'My work spans research and engineering: publishing on LLM-driven agent simulation, building on-device AI tooling, and designing high-performance backends and data pipelines. I like technology that\'s practical, efficient, and actually makes a difference. Feel free to explore what I\'ve been working on.'
  ],
  resume: 'https://drive.google.com/file/d/14oTJgcrOMfsewHer1f3M-5GJiVb68GL1/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/sinha04/',
    github: 'https://github.com/shobhitsinha04',
    googleScholar: 'https://scholar.google.com/citations?user=v0q1vF8AAAAJ&hl=en&authuser=6',
  },
}

const experience = [
  {
    name: 'Applied AI Engineer, Satellite Operations',
    company: 'Satlyt Inc.',
    duration: 'Sep. 2026 – Present',
    location: 'Berkeley, CA',
    description: [
      'Collaborating with Satlyt through the UC Berkeley MEng Capstone on foundational AI for in-orbit computing.',
      'Building an on-device satellite operations agent using SLMs to reason over telemetry and logs for autonomous decisions.',
      'Benchmarking model latency, memory footprint, and reliability on Jetson-class hardware under realistic edge constraints.'
    ],
  },
  {
    name: 'ML Research Assistant',
    company: 'Siebel School of Computing and Data Science',
    duration: 'Aug. 2025 – Aug. 2026',
    location: 'Champaign, IL',
    description: [
      'Established and scaled biomedical pipelines using Python and BigQuery SQL, ingesting 10M+ clinical records.',
      'Engineered median-imputed feature pipelines across 600+ lab predictors for sparse clinical data.',
      'Evaluated biomarker predictability across 75+ brain-health phenotypes using XGBoost and other ML classifiers.'
    ],
  },
  {
    name: 'Data Science and R&D Intern',
    company: 'CCC Intelligent Solutions',
    duration: 'Jul. 2025 – Aug. 2025',
    location: 'Chicago, IL',
    description: [
      'Developed computer vision data pipelines to convert vehicle imagery into meshes for 3D modeling and reconstruction.',
      'Integrated physics-based validation into NeRF and Gaussian Splatting pipelines, achieving 90% mesh watertightness.',
      'Automated a synthetic 3D data pipeline in NVIDIA Omniverse for downstream ML training.'
    ],
  },
  {
    name: 'Software Engineering Intern',
    company: 'HERE Technologies',
    duration: 'Jan. 2025 – May 2025',
    location: 'Chicago, IL',
    description: [
      'Classified 10,000+ POIs across 70 categories with 95.65% accuracy using MiniLM embeddings and LLaMA models.',
      'Configured CI/CD deployments with Docker and GitHub Actions, reducing AWS deployment time by 60%.',
      'Parallelized LLM calls within a multi-stage POI classification pipeline, increasing measured throughput by 35%.'
    ]
  },
  {
    name: 'AI Researcher',
    company: 'University of New South Wales',
    duration: 'May 2024 – May 2025',
    location: 'Sydney, Australia',
    description: [
      'Co-first author of a peer-reviewed publication on a modular framework for LLM-based human trajectory simulation.',
      'Deployed a 1,000+ concurrent-agent system with memory generation via GPT, LLaMA, and custom algorithms.',
      'Reduced invalid agent destination selections by 31% using coordinate mapping and a potential-based spatial model.'
    ]
  }
]


const education = [
  {
    school: 'University of California, Berkeley',
    degree: 'Master of Engineering (M.Eng.) in Electrical Engineering and Computer Sciences (EECS)',
    track: 'Concentration in Data Science',
    duration: 'Aug. 2026 - May 2027',
    location: 'Berkeley, CA',
  },
  {
    school: 'University of Illinois Urbana-Champaign',
    degree: 'Bachelor of Science (B.S.) in Computer Engineering',
    duration: 'Aug. 2022 - May 2026',
    location: 'Urbana-Champaign, IL',
    gpa: '3.67',
    honors: 'Dean\'s List  ·  Edmund J. James Scholar',
    coursework:
      'Applied Machine Learning, Artificial Intelligence, Human-LLM Interaction, Computer Systems Engineering, Applied Parallel Programming, Digital Systems Laboratory, Algorithms & Models of Computation, Data Structures, Database Systems, Text Information Systems, Principles of Safe Autonomy, Control Systems, Social & Information Networks.',
  },
]

const publications = [
  {
    title: 'TrajLLM: A Modular LLM-Enhanced Agent-Based Framework for Realistic Human Trajectory Simulation',
    authors: 'Sinha, S.*, Ju, C.*, Liu, J.*, Xue, H., & Salim, F.',
    venue: 'The 2025 ACM Web Conference (WWW \'25)',
    location: 'Sydney, Australia',
    year: '2025',
    month: 'April',
    description: [
      'Developed a novel modular framework combining Large Language Models with agent-based modeling for realistic human trajectory simulation.',
      'Integrated personality and memory generation capabilities using GPT and Llama models with custom algorithms.',
      'Achieved 31% improvement in inference-driven agent interactions through advanced spatial analysis and contextual understanding.',
      'Demonstrated scalability with 1000+ simultaneous agents maintaining individual personalities and memory states.'
    ],
    links: {
      paper: 'https://dl.acm.org/doi/pdf/10.1145/3701716.3715201',
      code: 'https://github.com/shobhitsinha04/TrajLLM',
      arxiv: "https://arxiv.org/abs/2502.18712"
    },
    status: 'Published',
  }
]

const projects = [
  {
    name: 'Custom gRPC Load Balancer',
    description: [
      'Programmed a multithreaded L7 load balancer in C++ routing gRPC traffic across replicas at sub-millisecond latency.',
      'Implemented the gRPC health-checking protocol, detecting failed backends in ~300 ms and rerouting 100% of requests.',
      'Containerized with Docker and created Kubernetes deployment configs on GCP with Prometheus/Grafana observability.'
    ],
    stack: ['C++', 'gRPC', 'Kubernetes', 'Terraform', 'Docker'],
    sourceCode: 'https://github.com/shobhitsinha04/grpc-load-balancer',
  },
  {
    name: 'Knot AI – On-Device Coding Assistant',
    description: [
      'Built a privacy-first coding assistant with LLM inference running entirely on-device, eliminating reliance on cloud APIs.',
      'Structured a RAG pipeline with embeddings and reranking over local codebases, achieving 97 ms p50 retrieval latency.',
      'Validated a 21-module TypeScript architecture with 168 automated tests across 13 suites.'
    ],
    stack: ['TypeScript', 'Node.js', 'LLM Inference', 'Vector Database'],
    sourceCode: 'https://github.com/freshgoldfish/knot',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=freshgoldfish.knot-ai',
  },
  {
    name: 'Driver Fatigue Detection System',
    description: [
      'Built a real-time fatigue detection system using Python, OpenCV, and MTCNN, aiming for 90% accuracy.',
      'Trained a custom Deep Learning model in PyTorch for fatigue detection, improving prediction reliability.',
      'Designed a computer vision pipeline to improve real-time detection speed and efficiency'
    ],
    stack: ['OpenCV', 'Deep Learning', 'PyTorch'],
    sourceCode: 'https://github.com/shobhitsinha04/driver_monitoring_system/tree/main/Driver%20Monitoring%20System'
  },
  {
    name: 'Building and Fine-Tuning a Large Language Model (LLM)',
    description: [
      'Built and fine-tuned a transformer-based LLM using PyTorch, applying techniques from Sebastian Raschka\'s book',
      'Optimized training with efficient weight loading and LoRA-based methods, reducing training time by 20%.',
      'Developed a custom tokenizer leveraging GPT encoding, improving tokenization efficiency and boosting inference speed by 25%.',
      'Pretrained and optimized the model on instruction-based NLP tasks, achieving enhanced real-time text generation across multiple datasets.'
    ],
    stack: ['Python', 'PyTorch', 'LLMs'],
    sourceCode: 'https://github.com/shobhitsinha04/Building_LLM',
  },
  {
    name: 'HealthConnect | Integrated Health Management App',
    description: [
      'Deployed a scalable health management platform on GCP, handling 50M+ records through NHANES and Fitbit.',
      'Streamlined 20+ secure Node.js API endpoints for real-time interaction, supporting 3,000+ daily users.',
      'Delivered a data-driven alert system that detected early health risks in 85% of flagged cases.'
    ],
    stack: ['SQL', 'GCP', 'DBMS'],
    sourceCode: 'https://github.com/shobhitsinha04/healthconnect',
  },
  {
    name: 'DocuMine – AI Chrome Extension for Research',
    description: [
      'Programmed a Chrome Extension enabling RAG-powered Q&A, delivering context-aware answers in under 3 secs.',
      'Processed 200+ documents, embedding 10,000+ chunks into ChromaDB, boosting retrieval speed by 35%.',
      'Developed a Flask-based query server for file uploads and chatbot interactions with an LLM.'
    ],
    stack: ['LLMs', 'RAG', 'Python', 'Flask', 'ChromaDB'],
    sourceCode: 'https://github.com/shobhitsinha04/chrome-rag-main',
  },
  {
    name: 'Sentiment Analysis on Social Media and Reviews',
    description: [
      'Conducted sentiment analysis on Amazon reviews and Tweets achieving over 85% accuracy with DeepLearning (BERT).',
      'Applied NLP preprocessing techniques, including tokenization and embedding, to improve model performance.',
      'Utilized Matplotlib for data visualization to identify patterns and trends in the sentiment data.'
    ],
    stack: ['Python', 'NLP', 'Deep Learning'],
    sourceCode: 'https://github.com/shobhitsinha04/sentiment_analysis1',
  },
  {
    name: 'Dynamic Reading Companion',
    description: [
      'Engineered a full-stack platform utilizing LLMs for automated text summarization and sentiment analysis, generating personalized Spotify playlists via Gutendex API integration.',
      'Optimized user experience by 30% through emotion-driven playlist adjustments.',
      'Leveraging advanced NLP techniques to analyze mood transitions, and API integration (OpenAI, Spotify, Gutendex) for enhanced data processing efficiency.'
    ],
    stack: ['Python', 'Flask', 'OpenAI API', 'React', 'Spotify API'],
  },
  {
    name: "FPGA Golf Game",
    description: [
      "Developed a mini golf game on FPGA using SystemVerilog, integrating USB keyboard controls and VGA/HDMI display.",
      "Optimized BRAM usage to 89% for efficient graphics storage and utilized a MicroBlaze processor for SoC integration.",
      "Implemented game logic with finite state machines for ball movement, collisions, and real-time scoring.",
      "Designed and tested UART and SPI communication, achieving 100% system functionality using Vivado for debugging."
    ],
    stack: ["SystemVerilog", "FPGA Development"],
    sourceCode: "https://github.com/shobhitsinha04/FPGA_Golf_ECE385"
  },
  {
    name: "Controlled Home Unit Transportation",
    description: [
      "Designed an automated chair for the project with custom logic, achieving 95% positioning accuracy.",
      "Implemented transistor control with Boolean logic to enable multi-directional movement.",
      "Enhanced sensor modules (infrared and reflective object sensors) by designing op-amp circuits for voltage amplification.",
      "Achieved high accuracy in over 30 test scenarios through sensor optimizations."
    ],
    stack: ["Circuit Design", "Transistor Control"],
  }
]

const certifications = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University (Coursera)',
    date: 'June 2025',
    verifyLink: 'https://www.coursera.org/account/accomplishments/specialization/4TIWJC2BCAEO',
    certificateLink: 'https://drive.google.com/file/d/1ZoCTZFFN8M7R_wuwHvMqPOgdsZ3SG36X/view?usp=sharing'
  },
  {
    name: 'Deep Neural Networks with PyTorch',
    issuer: 'IBM (Coursera)',
    date: '2024',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/BUX22BQFA6CM',
    certificateLink: 'https://drive.google.com/file/d/1wvKcj0qfguzSGfOw8w0I7GhynvHBeWu9/view?usp=sharing'
  },
  {
    name: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI (Coursera)',
    date: '2024',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/7WY74D5VKP43',
    certificateLink: 'https://drive.google.com/file/d/1RCSQSvlHIFL7qvzEk16rcylsefbhqBNd/view?usp=sharing'
  },
  {
    name: 'Generative AI and LLMs: Architecture and Data Preparation',
    issuer: 'IBM (Coursera)',
    date: '2024',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/2JKXUTKK3WCK',
    certificateLink: 'https://drive.google.com/file/d/1rQxyedk8faGPQeMRNP-E6n6lKhMjfU9V/view?usp=sharing'
  },
  {
    name: 'Generative AI: Introduction and Applications',
    issuer: 'IBM (Coursera)',
    date: '2024',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/TCRWMYZL4QCF',
    certificateLink: 'https://drive.google.com/file/d/1BbpGDfCA8yHdzUR3uysdyMcPJGTdZCiS/view?usp=sharing'
  }
]

const skills = [
  'Python',
  'C/C++',
  'RISC-V Assembly',
  'SQL',
  'HDL (System Verilog)',
  'PyTorch',
  'TensorFlow',
  'NumPy',
  'NLTK',
  'Microsoft Azure',
  'Git',
  'Docker',
  'Flask',
  'AI/ML',
  'NLP',
  'LLM Fine-Tuning',
  'API Integration',
  'Full-Stack Development',
  'FPGA Design',
];

const contact = {
  email: 'shobhit.sinha2004@gmail.com',
}

export { header, about, experience, education, publications, projects, certifications, skills, contact }