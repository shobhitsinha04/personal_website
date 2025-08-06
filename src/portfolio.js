const header = {
  homepage: 'https://shobhitsinha04.github.io/personal_website',
  title: 'SS.',
}

const about = {
  name: 'Shobhit Sinha',
  description: [
    'Hi, I\'m Shobhit,  a Computer Engineering student at UIUC passionate about building intelligent, scalable systems that solve real-world problems.',
    <br />,
    <br />,
    'My experience spans Machine Learning, Generative AI, LLM fine-tuning, and NLP. I enjoy building end-to-end AI solutions, from training models to deploying them in real-world applications where performance and usability matter.',
    <br />,
    'I\'m always looking to build technology that\'s practical, efficient, and actually makes a difference. Feel free to explore my portfolio to see what I\'ve been working on.'
  ],
  resume: 'https://drive.google.com/file/d/183VoJDwRaLPh9DrnK_41RzCcvE2vNXex/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/shobhit-sinha-uiuc/',
    github: 'https://github.com/shobhitsinha04',
  },
}

const experience = [
  {
    name: 'Data Science and R&D Intern',
    company: 'CCC Intelligent Solutions',
    duration: 'July 2025 - Present',
    location: 'Chicago, IL',
    description: [
      'Built a 3D reconstruction pipeline using Gaussian Splatting, Open3D, and Poisson Reconstruction.',
      'Converted point clouds to 3D meshes with surface data for physics engine integration achieving 90% watertightness.',
      'Enabled simulation-based data generation to train downstream ML models.'
    ],
  },
  {
    name: 'Software Engineering Intern',
    company: 'HERE Technologies',
    duration: 'Jan. 2025 – May 2025',
    location: 'Chicago, IL',
    description: [
      'Engineered an AWS cloud-based ML pipeline to classify 10,000+ POIs using vector embeddings and LLMs.',
      'Deployed a multi-prompt LLM framework using word embeddings to process large-scale data with 98% accuracy.',
      'Tuned thresholds and prompt variants to boost classification accuracy by 6% while reducing latency.'
    ]
  },
  {
    name: 'AI Researcher',
    company: 'University of New South Wales, Sydney',
    duration: 'May 2024 - May 2025',
    location: 'Sydney, Australia',
    description: [
      'Published a research paper as co-first author on a modular framework for LLM-based human trajectory simulation.',
      'Implemented 1000+ agents with personality and memory generation, integrating GPT, Llama and custom algorithms.',
      'Improved inference-driven agent interactions by 31% through spatial analysis and contextual understanding.'
    ]
  }
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
      paper: 'https://arxiv.org/pdf/2502.18712',
      code: 'https://github.com/shobhitsinha04/TrajLLM'
    },
    status: 'Published',
  }
]

const projects = [
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
    link: 'https://www.coursera.org/account/accomplishments/specialization/4TIWJC2BCAEO',
    certificate: 'https://drive.google.com/file/d/1ZoCTZFFN8M7R_wuwHvMqPOgdsZ3SG36X/view?usp=sharing'
  },
  {
    name: 'Deep Neural Networks with PyTorch',
    issuer: 'IBM (Coursera)',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/BUX22BQFA6CM',
    certificate: 'https://drive.google.com/file/d/1wvKcj0qfguzSGfOw8w0I7GhynvHBeWu9/view?usp=sharing'
  },
  {
    name: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI (Coursera)',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/7WY74D5VKP43',
    certificate: 'https://drive.google.com/file/d/1RCSQSvlHIFL7qvzEk16rcylsefbhqBNd/view?usp=sharing'
  },
  {
    name: 'Generative AI and LLMs: Architecture and Data Preparation',
    issuer: 'IBM (Coursera)',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/2JKXUTKK3WCK',
    certificate: 'https://drive.google.com/file/d/1rQxyedk8faGPQeMRNP-E6n6lKhMjfU9V/view?usp=sharing'
  },
  {
    name: 'Generative AI: Introduction and Applications',
    issuer: 'IBM (Coursera)',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/TCRWMYZL4QCF',
    certificate: 'https://drive.google.com/file/d/1BbpGDfCA8yHdzUR3uysdyMcPJGTdZCiS/view?usp=sharing'
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
  // email is optional - if left empty Contact section won't show up
  email: 'shobhit.sinha2004@gmail.com',
}

export { header, about, experience, publications, projects, certifications, skills, contact }