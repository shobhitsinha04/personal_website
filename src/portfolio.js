const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shobhitsinha04.github.io/personal_website',
  title: 'SS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shobhit Sinha',
  description: [
    'Hi, I\'m Shobhit, a Computer Engineering student specializing in AI and Machine Learning. My experience and interests range from Generative AI, LLM fine-tuning and NLP to FPGA development and circuit design.',
    <br />,
    <br />,
    'My goal is to build impactful, scalable solutions for real-world challenges. Feel free to explore my portfolio to see what I\'ve been working on.'
  ],
  resume: 'https://github.com/shobhitsinha04/personal_website/blob/master/public/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/shobhit-sinha-uiuc/',
    github: 'https://github.com/shobhitsinha04',
  },
}

const experience = [
  {
    name: 'AI Researcher on GenAI and LLMs',
    company: 'University of New South Wales, Sydney, Australia',
    description: [
      'Secured a competitive research scholarship under Professor Flora Salim, to develop and publish multiple papers on a new generative AI agent structure that integrates personality and memory generation using LLMs such as GPT and LLAMA.',
      'Utilized AI and Machine Learning tools (PyTorch, Transformers) to optimize predictive models by integrating real-world data.',
      'Developed memory management algorithms and improved the contextual understanding and interaction efficiency of AI agents by leveraging spatial analysis and co-ordinate mapping.'
    ],
  }, 
  {
    name: 'Software Team - Battery Management System Viewer',
    company: 'Illinois Electric Motorsport',
    description: [
      'Collaborating on developing a real-time BMS Viewer for battery data visualization using CAN Bus communication.',
      'Refactoring the user interface with PyQt, incorporating multithreading to enhance data rendering speed and responsiveness.',
      'Implementing unit tests to ensure maintainability, scalability, and compliance with industry standards.'
    ]
  }
]

const publications = [
  {
    title: 'Generative AI Agents with Integrated Personality and Memory Systems',
    authors: 'Shobhit Sinha, Flora Salim',
    venue: 'Under Review - International Conference on AI Research',
    year: '2025',
    description: [
      'Novel approach to developing AI agents that integrate personality traits with advanced memory management.',
      'Demonstrated improved contextual understanding and user interaction through spatial analysis techniques.',
      'Achieved 30% improvement in response relevance compared to baseline LLM implementations.'
    ],
    links: {
      paper: '#', // Add actual link when available
      code: 'https://github.com/shobhitsinha04' // Add actual repo link
    }
  },
  // Add more publications as needed
]

const projects = [
  {
    name: 'Dynamic Reading Companion',
    description: [
      'Engineered a full-stack platform utilizing LLMs for automated text summarization and sentiment analysis, generating personalized Spotify playlists via Gutendex API integration.',
      'Optimized user experience by 30% through emotion-driven playlist adjustments.',
      'Leveraging advanced NLP techniques to analyze mood transitions, and API integration (OpenAI, Spotify, Gutendex) for enhanced data processing efficiency.'
    ],
    stack: ['Python', 'Flask', 'OpenAI API', 'React', 'Spotify API'],
    sourceCode: 'https://github.com',
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
    date: '2024',
    description: [
      'Comprehensive course covering supervised learning, unsupervised learning, and reinforcement learning.',
      'Hands-on projects implementing neural networks, decision trees, and clustering algorithms.',
      'Applied machine learning techniques to real-world datasets and problems.'
    ],
    credentialId: 'ABC123XYZ', // Add actual credential ID
    link: 'https://coursera.org/verify/ABC123XYZ' // Add actual verification link
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    date: '2024',
    description: [
      'Advanced deep learning concepts including CNNs, RNNs, and Transformer architectures.',
      'Implemented attention mechanisms and worked with sequence-to-sequence models.',
      'Built and deployed deep learning models using TensorFlow and PyTorch.'
    ],
    credentialId: 'DEF456ABC',
    link: 'https://coursera.org/verify/DEF456ABC'
  },
  {
    name: 'AWS Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: [
      'Cloud-based machine learning services and deployment strategies.',
      'Experience with SageMaker, Lambda, and other AWS ML services.',
      'Model optimization and production deployment best practices.'
    ],
    credentialId: 'AWS-ML-12345',
    link: 'https://aws.amazon.com/verification'
  }
  // Add more certifications as needed
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