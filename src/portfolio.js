const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'SS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shobhit Sinha',
  role: 'Computer Engineer',
  description:
    'I am a junior at the University of Illinois Urbana-Champaign, pursuing a B.S. in Computer Engineering with a minor in Statistics. My interests and experience span AI, Machine Learning, Large Language Models, FPGA Development, NLP, and Embedded Systems. I have worked on projects involving generative models, LLM fine-tuning, and NLP applications focusing on innovation to solve real-world problems.',
  resume: '/resume.pdf',
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
const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dynamic Reading Companion',
    description: [
      'Engineered a full-stack platform utilizing OpenAI GPT for automated text summarization and sentiment analysis, processing over 1,000 words per chapter, and generating personalized Spotify playlists via seamless Gutendex API integration.',
      'Optimized user experience by 30% through emotion-driven playlist adjustments, leveraging advanced NLP techniques to analyze mood transitions, and streamlined API integration (OpenAI, Spotify, Gutendex) for enhanced data processing efficiency.'
    ],
    stack: ['Python', 'Flask', 'OpenAI API', 'React', 'Spotify API'],
    sourceCode: 'https://github.com',
  },
  {
    name: 'Building and Fine-Tuning a Large Language Model (LLM)',
    description: [
      'Built and fine-tuned a transformer-based LLM using PyTorch, applying techniques from Sebastian Raschka\'s book, and optimizing training with efficient weight loading and LoRA-based fine-tuning, reducing training time by 20%.',
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
    "Designed an automated chair for the Controlled Home Unit Transportation project with ultrasonic sensors and custom logic, achieving 95% positioning accuracy.",
    "Implemented transistor control with Boolean logic for multi-directional movement.",
    "Enhanced sensor modules (infrared and reflective object sensors) with custom op-amp circuits for voltage amplification, achieving high accuracy in over 30 test scenarios.",
    "Contributed to the chair\’s modeling at the Illinois MakerLab."
  ],
  stack: ["Circuit Design", "Transistor Control"],
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

export { header, about, experience, projects, skills, contact }