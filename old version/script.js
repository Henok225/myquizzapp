// import questions from "./Questions";
const container = document.querySelector(".container");
const ques = document.querySelector(".question");
const ans = document.querySelector(".answer");
const btnAns = document.querySelector(".btnans");
const btnNex = document.querySelector(".btnex");
const restart = document.querySelector(".restrt");
const choices = document.querySelector(".choices");
let n = 0;
let startQuiz;


const historyQuiz =  [

    // Chapter 5 questions

    {
        question: "__________ led the Sultanate of Adal in a significant campaign against the Christian Kingdom.",
        choice: ["a) Ahmad ibn Ibrahim al-Ghazi (Ahmad Gragn)", "b) Nur ibn Mujahid", "c) Sultan Al-Hadi", "d) Walasma Ibn Hamid"],
        Answer: "a"
      },
      {
        question: "The campaigns of Ahmad Gragn resulted in __________.",
        choice: ["a) Widespread destruction and a temporary shift in power", "b) Diplomatic negotiations", "c) Economic prosperity", "d) Religious unity"],
        Answer: "a"
      },
      {
        question: "The Portuguese intervened in Ethiopia’s conflicts primarily to support __________.",
        choice: ["a) The Christian Kingdom", "b) The Muslim Sultanates", "c) The Ottoman Empire", "d) The Zemene Mesafint"],
        Answer: "a"
      },
      {
        question: "The Ottoman Turks influenced the region by supporting __________.",
        choice: ["a) The Christian Kingdom", "b) Muslim Sultanates", "c) European powers", "d) African tribes"],
        Answer: "b"
      },
      {
        question: "The Oromo population movement had a significant impact on __________.",
        choice: ["a) The Ethiopian highlands", "b) The Red Sea trade routes", "c) The Nile River basin", "d) Coastal cities"],
        Answer: "a"
      },
      {
        question: "The Afar and Somali migrations contributed to __________.",
        choice: ["a) The complex political landscape of the region", "b) The spread of Christianity", "c) The development of trade routes", "d) The decline of the Gondar period"],
        Answer: "a"
      },
      {
        question: "Emperor Susenyos converted to __________ during the religious controversies of this period.",
        choice: ["a) Islam", "b) Catholicism", "c) Judaism", "d) Protestantism"],
        Answer: "b"
      },
      {
        question: "The Jesuit mission aimed to convert Ethiopia to __________.",
        choice: ["a) Catholicism", "b) Islam", "c) Orthodoxy", "d) Judaism"],
        Answer: "a"
      },
      {
        question: "The __________ marked the decentralization of power in Ethiopia during this period.",
        choice: ["a) Solomonic Restoration", "b) Zemene Mesafint (Era of the Princes)", "c) Zagwe Dynasty", "d) Gondar Period"],
        Answer: "b"
      },
      {
        question: "The Yejju dynasty held hegemonic power during the __________.",
        choice: ["a) Solomonic Restoration", "b) Zemene Mesafint", "c) Zagwe Dynasty", "d) Gondar Period"],
        Answer: "b"
      },
      {
        question: "Urbanization during the Gondar period led to the development of __________.",
        choice: ["a) Arts, architecture, and culture", "b) Trade routes", "c) Military fortifications", "d) Agricultural innovations"],
        Answer: "a"
      },
      {
        question: "The construction of __________ in Gondar is a key architectural achievement of this period.",
        choice: ["a) Mosques", "b) Churches and castles", "c) Pyramids", "d) Monasteries"],
        Answer: "b"
      },
      {
        question: "The Zemene Mesafint was characterized by the rise of __________.",
        choice: ["a) Centralized monarchy", "b) Regional lords and the weakening of central authority", "c) Trade guilds", "d) Religious unity"],
        Answer: "b"
      },
      {
        question: "The main economic activities during the Gondar period included __________.",
        choice: ["a) Agriculture, trade, and craftsmanship", "b) Mining and metallurgy", "c) Fishing and hunting", "d) Maritime trade"],
        Answer: "a"
      },
      {
        question: "The Zemene Mesafint ended due to __________.",
        choice: ["a) The rise of centralized power under Emperor Tewodros II", "b) European colonization", "c) Economic collapse", "d) Religious reforms"],
        Answer: "a"
      },
      {
        question: "The Yejju dynasty maintained its power by __________.",
        choice: ["a) Exercising military and political control over regional lords", "b) Building trade networks", "c) Converting locals to Christianity", "d) Forming alliances with European powers"],
        Answer: "a"
      },
      {
        question: "The Jesuit mission created internal strife by promoting __________.",
        choice: ["a) Catholicism, which conflicted with the Ethiopian Orthodox faith", "b) Islam", "c) Judaism", "d) Protestantism"],
        Answer: "a"
      },
      {
        question: "The __________ was a significant cultural development during the Gondar period.",
        choice: ["a) Flourishing of arts and architecture", "b) Decline of trade", "c) Military expansion", "d) Religious unity"],
        Answer: "a"
      },
      {
        question: "The Christian Kingdom recovered from the devastation caused by Ahmad Gragn through __________.",
        choice: ["a) Rebuilding efforts and alliances with European powers", "b) Converting to Islam", "c) Migration to safer areas", "d) Forming alliances with neighboring tribes"],
        Answer: "a"
      },
      {
        question: "The Oromo migration led to the integration of __________ within Ethiopia.",
        choice: ["a) Various ethnic groups", "b) Religious practices", "c) Trade routes", "d) Military strategies"],
        Answer: "a"
      },
      {
        question: "Religious unity in Ethiopia was challenged by __________.",
        choice: ["a) The Jesuit mission and the conversion of Emperor Susenyos", "b) The rise of Islam", "c) Internal power struggles", "d) Economic decline"],
        Answer: "a"
      },
      {
        question: "The Christian Kingdom managed its relations with Muslim Sultanates through __________.",
        choice: ["a) Diplomacy and military engagements", "b) Trade and commerce", "c) Religious conversions", "d) Educational exchanges"],
        Answer: "a"
      },
      {
        question: "The Zemene Mesafint led to the decentralization of __________.",
        choice: ["a) Political authority", "b) Economic power", "c) Military strength", "d) Religious influence"],
        Answer: "a"
      },
      {
        question: "The Gondar period contributed to the development of __________.",
        choice: ["a) Ethiopian arts and architecture", "b) Military strategies", "c) Trade routes", "d) Religious practices"],
        Answer: "a"
      },
      {
        question: "The Portuguese supported the Christian Kingdom primarily to counter the influence of __________.",
        choice: ["a) The Ottoman Turks", "b) The Catholic Church", "c) The Zemene Mesafint", "d) European powers"],
        Answer: "a"
      },
      {
        question: "The rise of regional lords during the Zemene Mesafint was a result of __________.",
        choice: ["a) The weakening of central authority", "b) The rise of Islam", "c) Economic prosperity", "d) Military expansion"],
        Answer: "a"
      },
      {
        question: "The main challenges faced by the Yejju rulers included __________.",
        choice: ["a) Maintaining control over regional lords and dealing with external threats", "b) Expanding trade routes", "c) Converting locals to Christianity", "d) Forming alliances with European powers"],
        Answer: "a"
      },
      {
        question: "The Gondar period saw significant developments in __________.",
        choice: ["a) Arts, architecture, and culture", "b) Trade routes", "c) Military fortifications", "d) Agricultural innovations"],
        Answer: "a"
      },
      {
        question: "The Jesuit mission ended with the abdication of __________.",
        choice: ["a) Emperor Susenyos", "b) Emperor Menelik II", "c) Emperor Tewodros II", "d) Emperor Zara Yaqob"],
        Answer: "a"
      },
      {
        question: "The Yejju dynasty's rule was marked by __________.",
        choice: ["a) Political dominance during the Zemene Mesafint", "b) Economic prosperity", "c) Religious unity", "d) Military expansion"],
        Answer: "a"
      },
      {
        question: "The __________ played a significant role in Ethiopia's external relations during this period.",
        choice: ["a) Ottoman Turks and the Portuguese", "b) Indian Ocean merchants", "c) African tribes", "d) European explorers"],
        Answer: "a"
      },
      {
        question: "The main sources of conflict during the Zemene Mesafint included __________.",
        choice: ["a) Power struggles between regional lords", "b) Economic competition", "c) Religious differences", "d) Territorial disputes with neighboring tribes"],
        Answer: "a"
      },
      {
        question: "The Ethiopian Orthodox Church influenced political decisions by __________.",
        choice: ["a) Maintaining strong ties with the monarchy and regional rulers", "b) Promoting religious conversions", "c) Building trade networks", "d) Forming alliances with European powers"],
        Answer: "a"
      },
      {
        question: "The Zemene Mesafint affected Ethiopia's military structure by __________.",
        choice: ["a) Fragmenting military power among regional lords", "b) Centralizing military command", "c) Expanding the navy", "d) Reducing the number of standing armies"],
        Answer: "a"
      },
      {
        question: "The main sources of revenue during the Gondar period were __________.",
        choice: ["a) Agriculture, trade, and taxation", "b) Mining and metallurgy", "c) Fishing and hunting", "d) Maritime trade"],
        Answer: "a"
      },
      {
        question: "The Portuguese intervention in Ethiopia was primarily motivated by __________.",
        choice: ["a) Religious alliances and geopolitical interests", "b) Economic interests", "c) Military expansion", "d) Cultural exchange"],
        Answer: "a"
      },
      {
        question: "The Zemene Mesafint impacted the political unity of Ethiopia by __________.",
        choice: ["a) Decentralizing power and increasing regional autonomy", "b) Unifying the kingdom", "c) Expanding trade routes", "d) Promoting religious reforms"],
        Answer: "a"
      },
      {
        question: "The Yejju dynasty's socio-economic policies included __________.",
        choice: ["a) Maintaining control over trade routes and agricultural production", "b) Expanding mining operations", "c) Promoting education", "d) Building naval fleets"],
        Answer: "a"
      },
      {
        question: "The Gondar period contributed to the development of Ethiopian arts by __________.",
        choice: ["a) Sponsoring the construction of churches and promoting cultural activities", "b) Encouraging trade with Europe", "c) Building fortresses", "d) Promoting military expansion"],
        Answer: "a"
      },
      {
        question: "The main religious practices during the Gondar period included __________.",
        choice: ["a) Orthodox Christian rituals and celebrations", "b) Islamic prayers", "c) Jewish customs", "d) Animist rituals"],
        Answer: "a"
      },
      {
        question: "The __________ was a key factor in the decline of the Sultanate of Adal.",
        choice: ["a) Military campaigns of Ahmad Gragn", "b) Rise of the Oromo", "c) Decline in trade", "d) European colonization"],
        Answer: "a"
      },
      {
        question: "The main population movements during this period included __________.",
        choice: ["a) The Oromo migration and the expansion of Somali groups", "b) European settlers", "c) The rise of the Afar people", "d) The migration of the Kushitic people"],
        Answer: "a"
      },
      {
        question: "The Christian Kingdom's recovery from conflicts was facilitated by __________.",
        choice: ["a) Alliances with European powers and internal consolidation", "b) Economic prosperity", "c) Military expansion", "d) Religious conversions"],
        Answer: "a"
      },
      {
        question: "The Zemene Mesafint ended due to the rise of __________.",
        choice: ["a) Centralized power under Emperor Tewodros II", "b) Foreign invasions", "c) Economic collapse", "d) Religious reforms"],
        Answer: "a"
      },
      {
        question: "The Yejju dynasty maintained control by __________.",
        choice: ["a) Exercising military and political dominance over regional leaders", "b) Expanding trade routes", "c) Converting locals to Christianity", "d) Forming alliances with European powers"],
        Answer: "a"
      },
      {
        question: "The main cultural exchanges during this period were between Ethiopia and __________.",
        choice: ["a) European powers, particularly Portugal", "b) African tribes", "c) Asian empires", "d) Indian Ocean merchants"],
        Answer: "a"
      },
      {
        question: "The Jesuit mission's impact on Ethiopia's relations with the Catholic Church included __________.",
        choice: ["a) Tensions and conflicts with the Ethiopian Orthodox Church", "b) Building stronger alliances", "c) Promoting religious unity", "d) Establishing new trade routes"],
        Answer: "a"
      },
      {
        question: "The Gondar period's architectural achievements included __________.",
        choice: ["a) The construction of churches, castles, and other cultural monuments", "b) Building trade routes", "c) Expanding military fortifications", "d) Developing irrigation systems"],
        Answer: "a"
      },
      {
        question: "The main challenges in maintaining religious unity during this period were __________.",
        choice: ["a) The Jesuit mission and internal religious conflicts", "b) Economic decline", "c) Political fragmentation", "d) Military expansion"],
        Answer: "a"
      },
      {
        question: "The Zemene Mesafint was characterized by conflicts between __________.",
        choice: ["a) Regional lords and the central authority", "b) Ethiopian Orthodox and Catholic Church", "c) Ethiopia and European colonizers", "d) Muslim Sultanates and African tribes"],
        Answer: "a"
      }
   ]
 const emergingQuiz =  [
    //chapter one

    {
        question: "Where did the Industrial Revolution start and why did it begin there?",
        choice: ["a) France due to technological advances", "b) Great Britain due to economic stability", "c) USA due to labor availability", "d) China due to raw materials"],
        Answer: "b"
      },
      {
        question: "What is an example of a programmable device?",
        choice: ["a) Achronix Speedster SPD60", "b) Telegraph", "c) Steam Engine", "d) Diesel Engine"],
        Answer: "a"
      },
      {
        question: "Which term refers to the interaction between humans and machines?",
        choice: ["a) Human-computer interaction", "b) Machine learning", "c) Data processing", "d) Robotics"],
        Answer: "a"
      },
      {
        question: "What is the role of data in emerging technologies?",
        choice: ["a) It fuels technological growth", "b) It is used only for storage", "c) It is not important", "d) It is used for creating hardware"],
        Answer: "a"
      },
      {
        question: "What is the first Industrial Revolution known for?",
        choice: ["a) The rise of digital technology", "b) The introduction of steam power", "c) The development of smart systems", "d) The advent of electricity"],
        Answer: "b"
      },
      {
        question: "Which of the following technologies is considered emerging?",
        choice: ["a) Artificial Intelligence", "b) Electricity", "c) The Telephone", "d) The Cotton Gin"],
        Answer: "a"
      },
      {
        question: "What is considered the driving force behind the fourth Industrial Revolution?",
        choice: ["a) Data and machine learning", "b) Assembly line production", "c) Steam engines", "d) Raw materials"],
        Answer: "a"
      },
      {
        question: "Which programming concept helps in human-to-machine interaction?",
        choice: ["a) Programmable devices", "b) Logic gates", "c) Natural user interfaces", "d) Storage algorithms"],
        Answer: "c"
      },
      {
        question: "What device is an example of a programmable logic device?",
        choice: ["a) Xilinx Virtex 6", "b) Cotton Gin", "c) Telegraph", "d) Steam Engine"],
        Answer: "a"
      },
      {
        question: "Which of the following is a current trend in emerging technologies?",
        choice: ["a) 5G Networks", "b) The invention of the telegraph", "c) Diesel engine production", "d) Mechanical farming"],
        Answer: "a"
      },
      {
        question: "Which industrial revolution introduced computers and automation?",
        choice: ["a) Third Industrial Revolution", "b) First Industrial Revolution", "c) Second Industrial Revolution", "d) Fourth Industrial Revolution"],
        Answer: "a"
      },
      {
        question: "What technology enables devices to communicate over a network?",
        choice: ["a) Internet of Things (IoT)", "b) Steam Engines", "c) Telegraph Systems", "d) Industrial Power Grids"],
        Answer: "a"
      },
      {
        question: "What term refers to the digital transformation of society through technology?",
        choice: ["a) Technological Evolution", "b) Digital Revolution", "c) Industrial Innovation", "d) Mechanization"],
        Answer: "b"
      },
      {
        question: "Which innovation spurred the Second Industrial Revolution?",
        choice: ["a) Development of electricity", "b) Steam power", "c) Robotics", "d) AI systems"],
        Answer: "a"
      },
      {
        question: "The term 'emerging technology' commonly refers to technologies that are expected to be available within how many years?",
        choice: ["a) 5-10 years", "b) 20 years", "c) 1-2 years", "d) 50 years"],
        Answer: "a"
      },
      {
        question: "What type of data is processed to create useful insights in emerging technologies?",
        choice: ["a) Structured, semi-structured, and unstructured data", "b) Unstructured data only", "c) Machine data only", "d) Text-based data"],
        Answer: "a"
      },
      {
        question: "Which field studies how people interact with computers?",
        choice: ["a) Human-computer interaction", "b) Data science", "c) Robotics", "d) Programming languages"],
        Answer: "a"
      },
      {
        question: "What is the key aspect of the fourth Industrial Revolution?",
        choice: ["a) Smart systems and automation", "b) Use of coal power", "c) Textile manufacturing", "d) Handcraft production"],
        Answer: "a"
      },
      {
        question: "Which of the following is considered a programmable device?",
        choice: ["a) Lattice Semiconductor’s ECP3", "b) Steam Engine", "c) Telephone", "d) Diesel Engine"],
        Answer: "a"
      },
      {
        question: "What major advancement is associated with the first Industrial Revolution?",
        choice: ["a) Steam Engines", "b) Artificial Intelligence", "c) Blockchain", "d) Digital Twins"],
        Answer: "a"
      },

  // chapter 2

  {
    question: "What is data science?",
    choice: ["a) A field that uses scientific methods to extract knowledge from data", "b) A method for storing data", "c) A programming language", "d) A type of artificial intelligence"],
    Answer: "a"
  },
  {
    question: "What are the common data types from a data analytics perspective?",
    choice: ["a) Structured, semi-structured, and unstructured", "b) Binary, decimal, and hex", "c) Static, dynamic, and virtual", "d) Real, imaginary, and complex"],
    Answer: "a"
  },
  {
    question: "Which tool is used for processing large datasets across computer clusters?",
    choice: ["a) Hadoop", "b) SQL", "c) Excel", "d) PowerBI"],
    Answer: "a"
  },
  {
    question: "What is Big Data?",
    choice: ["a) Large and complex data sets difficult to process with traditional tools", "b) Data about large objects", "c) Data that is used for creating games", "d) Data used in small-scale applications"],
    Answer: "a"
  },
  {
    question: "Which of the following is a step in the Data Processing Cycle?",
    choice: ["a) Input", "b) Storage", "c) Testing", "d) Formatting"],
    Answer: "a"
  },
  {
    question: "What type of data is organized into rows and columns?",
    choice: ["a) Structured data", "b) Unstructured data", "c) Semi-structured data", "d) Metadata"],
    Answer: "a"
  },
  {
    question: "Which of the following is a characteristic of Big Data?",
    choice: ["a) Volume, velocity, variety", "b) Size, scope, strategy", "c) Power, speed, storage", "d) Input, processing, output"],
    Answer: "a"
  },
  {
    question: "What is Hadoop?",
    choice: ["a) A framework for distributed processing of large data sets", "b) A programming language", "c) A machine learning algorithm", "d) A relational database"],
    Answer: "a"
  },
  {
    question: "Which of the following data types is considered semi-structured?",
    choice: ["a) JSON", "b) SQL database", "c) Audio file", "d) Text document"],
    Answer: "a"
  },
  {
    question: "What does metadata represent?",
    choice: ["a) Data about data", "b) Raw data", "c) Processed data", "d) Unstructured data"],
    Answer: "a"
  },
  {
    question: "Which process is responsible for preparing data for analysis?",
    choice: ["a) Data curation", "b) Data visualization", "c) Data transfer", "d) Data storage"],
    Answer: "a"
  },
  {
    question: "What is the first step in the data value chain?",
    choice: ["a) Data acquisition", "b) Data analysis", "c) Data storage", "d) Data usage"],
    Answer: "a"
  },
  {
    question: "Which of the following is an example of unstructured data?",
    choice: ["a) Video file", "b) Excel spreadsheet", "c) SQL table", "d) CSV file"],
    Answer: "a"
  },
  {
    question: "What is the primary goal of data science?",
    choice: ["a) To generate insights from data", "b) To create machines", "c) To store data", "d) To develop games"],
    Answer: "a"
  },
  {
    question: "What term is used to describe the management of data over its lifecycle?",
    choice: ["a) Data curation", "b) Data mining", "c) Data transfer", "d) Data sorting"],
    Answer: "a"
  },
  {
    question: "What is the role of data scientists?",
    choice: ["a) Extract useful intelligence from data", "b) Build robots", "c) Create video games", "d) Manage servers"],
    Answer: "a"
  },
  {
    question: "What is the purpose of Hadoop's HDFS component?",
    choice: ["a) Storing large datasets across multiple machines", "b) Executing data queries", "c) Running machine learning algorithms", "d) Transferring data between servers"],
    Answer: "a"
  },
  {
    question: "Which of the following is a common tool for analyzing data in Hadoop?",
    choice: ["a) MapReduce", "b) Python", "c) SQL", "d) JavaScript"],
    Answer: "a"
  },
  {
    question: "What is the final step in the data value chain?",
    choice: ["a) Data usage", "b) Data curation", "c) Data storage", "d) Data processing"],
    Answer: "a"
  },
  {
    question: "Which of the following is a benefit of using clustered computing for big data?",
    choice: ["a) High availability and fault tolerance", "b) Increased power consumption", "c) Smaller data sets", "d) Less computational power"],
    Answer: "a"
  },

  // chapter 3

  {
    question: "What is Artificial Intelligence (AI)?",
    choice: ["a) The ability of machines to mimic human intelligence", "b) A new programming language", "c) The hardware that powers computers", "d) A type of database"],
    Answer: "a"
  },
  {
    question: "Who is known as the father of AI?",
    choice: ["a) John McCarthy", "b) Alan Turing", "c) Elon Musk", "d) Bill Gates"],
    Answer: "a"
  },
  {
    question: "Which of the following is an application of AI in healthcare?",
    choice: ["a) Diagnosis assistance", "b) Agriculture automation", "c) Online education platforms", "d) E-commerce product recommendation"],
    Answer: "a"
  },
  {
    question: "Which of the following is a key characteristic of AI?",
    choice: ["a) Learning and problem solving", "b) High power consumption", "c) Hard-coded instructions", "d) Manual data entry"],
    Answer: "a"
  },
  {
    question: "Which type of AI is capable of performing specific tasks?",
    choice: ["a) Narrow AI", "b) General AI", "c) Super AI", "d) Domain AI"],
    Answer: "a"
  },
  {
    question: "What does 'machine learning' refer to in AI?",
    choice: ["a) Machines learning from data to improve performance", "b) Machines learning human emotions", "c) Machines learning to program themselves", "d) Machines learning to repair hardware"],
    Answer: "a"
  },
  {
    question: "Which company developed the AI program 'Deep Blue' that defeated a world chess champion?",
    choice: ["a) IBM", "b) Google", "c) Microsoft", "d) Facebook"],
    Answer: "a"
  },
  {
    question: "Which AI application helps provide personalized product recommendations?",
    choice: ["a) E-commerce recommendation systems", "b) Medical diagnosis tools", "c) Financial fraud detection", "d) Automated driving systems"],
    Answer: "a"
  },
  {
    question: "Which AI model focuses on the hierarchical extraction of features from data?",
    choice: ["a) Neural networks", "b) Genetic algorithms", "c) Decision trees", "d) Expert systems"],
    Answer: "a"
  },
  {
    question: "Which of the following is an advantage of AI?",
    choice: ["a) High accuracy with fewer errors", "b) Increased data redundancy", "c) Reduced learning capabilities", "d) Limited data processing ability"],
    Answer: "a"
  },
  {
    question: "What is a major disadvantage of AI?",
    choice: ["a) High cost of development and maintenance", "b) The ability to think creatively", "c) AI systems are easy to build", "d) AI systems require little data"],
    Answer: "a"
  },
  {
    question: "Which of the following is a goal of Artificial Intelligence?",
    choice: ["a) Replicate human intelligence", "b) Store large amounts of data", "c) Provide faster computing power", "d) Develop new hardware components"],
    Answer: "a"
  },
  {
    question: "In which year was the term 'Artificial Intelligence' first coined?",
    choice: ["a) 1956", "b) 1965", "c) 1980", "d) 2001"],
    Answer: "a"
  },
  {
    question: "Which of the following is an AI application in business?",
    choice: ["a) Predicting customer preferences", "b) Agricultural automation", "c) Medical diagnosis tools", "d) Personalized education"],
    Answer: "a"
  },
  {
    question: "Which AI technology is used to interpret spoken language?",
    choice: ["a) Natural Language Processing (NLP)", "b) Machine Vision", "c) Robotics", "d) Neural Networks"],
    Answer: "a"
  },
  {
    question: "Which level of AI involves machines outperforming humans in every domain?",
    choice: ["a) Artificial Superintelligence (ASI)", "b) Artificial General Intelligence (AGI)", "c) Narrow AI", "d) Artificial Learning Intelligence"],
    Answer: "a"
  },
  {
    question: "What is a chatbot in AI?",
    choice: ["a) A program that simulates human conversation", "b) A system for diagnosing medical conditions", "c) A software for online banking", "d) A type of virtual reality system"],
    Answer: "a"
  },
  {
    question: "Which field of AI involves mimicking the way the human brain processes information?",
    choice: ["a) Neural Networks", "b) Decision trees", "c) Genetic algorithms", "d) Fuzzy logic"],
    Answer: "a"
  },
  {
    question: "Which AI system defeated the world chess champion Garry Kasparov?",
    choice: ["a) IBM's Deep Blue", "b) Google's AlphaGo", "c) Amazon's Alexa", "d) Tesla's Autopilot"],
    Answer: "a"
  },
  {
    question: "What is the focus of Artificial General Intelligence (AGI)?",
    choice: ["a) Achieving human-level intelligence across various tasks", "b) Performing specific tasks with intelligence", "c) Providing large data storage capabilities", "d) Replacing hardware components"],
    Answer: "a"
  }, 

//   chapter 4

{
    question: "What does IoT stand for?",
    choice: ["a) Internet of Things", "b) Information of Things", "c) Interaction of Technologies", "d) Interconnected Technology"],
    Answer: "a"
  },
  {
    question: "What is the key concept of IoT?",
    choice: ["a) Connecting devices to the internet", "b) Building faster computers", "c) Reducing power consumption", "d) Enhancing AI algorithms"],
    Answer: "a"
  },
  {
    question: "Which of the following is a common application of IoT?",
    choice: ["a) Smart homes", "b) Desktop computing", "c) Manual data entry", "d) Traditional farming"],
    Answer: "a"
  },
  {
    question: "What is an example of an IoT-enabled device?",
    choice: ["a) Smart thermostat", "b) Desktop PC", "c) Manual typewriter", "d) Traditional camera"],
    Answer: "a"
  },
  {
    question: "Which component is necessary for IoT devices to communicate with each other?",
    choice: ["a) Sensors and networks", "b) Mechanical switches", "c) Typewriters", "d) Power plants"],
    Answer: "a"
  },
  {
    question: "Which technology is crucial for IoT-based smart homes?",
    choice: ["a) Wireless communication", "b) Traditional telegraph", "c) Landline phones", "d) Copper wiring"],
    Answer: "a"
  },
  {
    question: "Which of the following is a challenge of IoT?",
    choice: ["a) Privacy and security concerns", "b) Lack of AI integration", "c) High battery consumption", "d) Lack of wireless networks"],
    Answer: "a"
  },
  {
    question: "What is a common use case of IoT in agriculture?",
    choice: ["a) Smart irrigation systems", "b) Faster tractor engines", "c) Increased data storage", "d) Online marketing"],
    Answer: "a"
  },
  {
    question: "Which IoT application improves urban living?",
    choice: ["a) Smart cities", "b) Personal computers", "c) Virtual reality systems", "d) Handheld gaming consoles"],
    Answer: "a"
  },
  {
    question: "Which protocol is often used to connect IoT devices to the internet?",
    choice: ["a) MQTT", "b) FTP", "c) SMTP", "d) HTTP"],
    Answer: "a"
  },
  {
    question: "Which component in IoT collects data from the environment?",
    choice: ["a) Sensors", "b) CPU", "c) Hard drives", "d) Printers"],
    Answer: "a"
  },
  {
    question: "What is a smart grid in the context of IoT?",
    choice: ["a) A system that uses IoT to manage energy distribution efficiently", "b) A type of computer system", "c) A tool for improving internet speed", "d) A solar-powered grid system"],
    Answer: "a"
  },
  {
    question: "Which of the following is a benefit of IoT in healthcare?",
    choice: ["a) Remote patient monitoring", "b) Faster data processing", "c) Improved server speeds", "d) AI integration"],
    Answer: "a"
  },
  {
    question: "What is an example of IoT in transportation?",
    choice: ["a) Autonomous vehicles", "b) Telephones", "c) Landline internet", "d) Electric stoves"],
    Answer: "a"
  },
  {
    question: "What does IoT rely on to collect and process data?",
    choice: ["a) Sensors and networks", "b) Mechanical parts", "c) Manual inputs", "d) Analog systems"],
    Answer: "a"
  },
  {
    question: "What is a security concern in IoT systems?",
    choice: ["a) Data breaches", "b) Slow processing speed", "c) Manual device control", "d) Limited bandwidth"],
    Answer: "a"
  },
  {
    question: "What is a common IoT use case in retail?",
    choice: ["a) Inventory tracking using smart sensors", "b) Improved barcode scanning", "c) Manual inventory counting", "d) Stock market prediction"],
    Answer: "a"
  },
  {
    question: "Which IoT component sends data to the cloud for storage and analysis?",
    choice: ["a) Network interface", "b) Analog systems", "c) Mechanical controls", "d) Power cables"],
    Answer: "a"
  },
  {
    question: "Which of the following is an example of IoT in the environment?",
    choice: ["a) Environmental monitoring using smart sensors", "b) Increased landline installation", "c) More efficient farming tools", "d) Solar-powered calculators"],
    Answer: "a"
  },
  {
    question: "Which IoT architecture component ensures communication between devices?",
    choice: ["a) Network layer", "b) Memory", "c) Sensors", "d) Data storage units"],
    Answer: "a"
  },

//   chapter 5

{
    question: "What is the main difference between Augmented Reality (AR) and Virtual Reality (VR)?",
    choice: ["a) AR overlays digital content on the real world", "b) VR overlays digital content on the real world", "c) AR replaces the real world", "d) AR requires a VR headset"],
    Answer: "a"
  },
  {
    question: "Which of the following is a key component of AR systems?",
    choice: ["a) Cameras and sensors", "b) Joysticks", "c) Touchscreens", "d) Headphones"],
    Answer: "a"
  },
  {
    question: "What is one application of AR in education?",
    choice: ["a) Overlaying virtual content to enhance learning", "b) Replacing textbooks with digital books", "c) Providing lecture notes", "d) Grading assignments automatically"],
    Answer: "a"
  },
  {
    question: "Which of the following best describes AR in medicine?",
    choice: ["a) Overlaying medical information during surgery", "b) Using virtual environments for training", "c) Providing virtual consultations", "d) Managing hospital inventory"],
    Answer: "a"
  },
  {
    question: "What is an example of AR in entertainment?",
    choice: ["a) Pokémon Go", "b) Virtual museum tours", "c) 3D movie viewing", "d) Voice-controlled games"],
    Answer: "a"
  },
  {
    question: "Which device is commonly used to experience AR?",
    choice: ["a) Smartphones and tablets", "b) Laptops", "c) Desktops", "d) Televisions"],
    Answer: "a"
  },
  {
    question: "What is Mixed Reality (MR)?",
    choice: ["a) A combination of AR and VR", "b) A fully virtual environment", "c) A hologram technology", "d) A physical interaction interface"],
    Answer: "a"
  },
  {
    question: "Which of the following is an application of AR in retail?",
    choice: ["a) Virtual try-ons", "b) Digital inventory", "c) Customer relationship management", "d) Augmented pricing"],
    Answer: "a"
  },
  {
    question: "Which of these sectors uses AR for overlaying geographic data?",
    choice: ["a) Navigation", "b) Gaming", "c) Healthcare", "d) Education"],
    Answer: "a"
  },
  {
    question: "Which of the following is a benefit of using AR in education?",
    choice: ["a) Enhanced interactive learning", "b) Access to digital libraries", "c) Virtual classrooms", "d) Online tests"],
    Answer: "a"
  },
  {
    question: "Which system component helps render the AR environment?",
    choice: ["a) Rendering engine", "b) Power supply", "c) Camera lens", "d) Data cables"],
    Answer: "a"
  },
  {
    question: "Which AR system tracks the user’s position?",
    choice: ["a) GPS", "b) Memory storage", "c) Touchpad", "d) File system"],
    Answer: "a"
  },
  {
    question: "AR applications often rely on which technology for tracking movement?",
    choice: ["a) Motion sensors", "b) Data encryption", "c) Biometric scanners", "d) Touchscreens"],
    Answer: "a"
  },
  {
    question: "Which AR tool is essential for overlaying information on real-world images?",
    choice: ["a) Camera", "b) Microphone", "c) Keyboard", "d) Printer"],
    Answer: "a"
  },
  {
    question: "Which of these is a common challenge in AR development?",
    choice: ["a) High power consumption", "b) Lack of data storage", "c) Slow internet speed", "d) Inconsistent camera quality"],
    Answer: "a"
  },
  {
    question: "What is an example of AR in smart cities?",
    choice: ["a) Smart parking with real-time overlays", "b) Virtual road maps", "c) Digital street signs", "d) Video surveillance"],
    Answer: "a"
  },
  {
    question: "Which AR element provides users with real-time information about objects?",
    choice: ["a) Information overlay", "b) Speech recognition", "c) Gesture control", "d) Voice commands"],
    Answer: "a"
  },
  {
    question: "What is the main benefit of AR in navigation systems?",
    choice: ["a) Real-time route guidance", "b) Entertainment during travel", "c) In-car audio systems", "d) Parking assistance"],
    Answer: "a"
  },
  {
    question: "AR applications in healthcare improve which aspect?",
    choice: ["a) Real-time visual guidance for surgeons", "b) Faster diagnosis algorithms", "c) Reduced patient waiting time", "d) Hospital data management"],
    Answer: "a"
  },
  {
    question: "Which AR application provides the ability to visualize construction projects?",
    choice: ["a) AR in architecture", "b) AR in education", "c) AR in entertainment", "d) AR in navigation"],
    Answer: "a"
  }

//    chapter 6


  ];
  
 const anthropologyQuiz =  [];
 const civicsQuiz =  [];


 document.getElementById("history").addEventListener("click", ()=>{
    
  container.style.visibility = "visible";
  startQuiz =historyQuiz;
  console.log(startQuiz)
  startingQuiz();
 });
 document.getElementById("emerging").addEventListener("click", ()=>{
    container.style.visibility = "visible";
    startQuiz =emergingQuiz;
    console.log(startQuiz)
    startingQuiz();
   });
   document.getElementById("anthropology").addEventListener("click", ()=>{
    container.style.visibility = "visible";
    startQuiz =anthropologyQuiz;
    startingQuiz();
   });
   document.getElementById("civics").addEventListener("click", ()=>{
    container.style.visibility = "visible";
    startQuiz =civicsQuiz;
    startingQuiz();
   });
 



function startingQuiz(){
document.querySelector(".subs").style.display = "none";
    const questions = startQuiz;
    let n = 0;
    choices.innerHTML = "";
    ans.innerHTML = "";
    btnAns.innerText = "Show Answer" ;
    ques.innerHTML = `<li> ${n+1} . ${questions[n].question} </li>`;
    n++;
    const chos = questions[n-1].choice;
        let m = 0; // for id purpose

        chos.forEach(function(ele){           
            choices.innerHTML +=  `<li><input type="radio" name="ans" id="iam${m}"> ${ele}</li>`;
                m++;
             });
    btnNex.addEventListener("click", ()=>{
        ques.innerHTML = `<li> ${n+1} . ${questions[n].question} </li>`;
        // choices.innerHTML = `<li> ${chos}</li>`
        
        choices.innerHTML = "";
        const chos = questions[n].choice;
        let m = 0; // for id purpose

        chos.forEach(function(ele){           
            choices.innerHTML +=  `<li><input type="radio" name="ans" id="iam${m}"> ${ele}</li>`;
                m++;
             });
           
        ans.innerHTML = "";
        btnAns.innerText = "Show Answer" ;
        n++;
    })
    btnAns.addEventListener("click", ()=>{
        if(btnAns.innerText != "Hide Answer"){
        btnAns.innerText = "Hide Answer";
        ans.innerHTML = `<p><span style="color:black; font-weight:600;"> Answer : </span> ${questions[n-1].Answer} </p> `;
           
        
        }
        else{
            btnAns.innerText = "Show Answer" ;
            ans.innerHTML = "";
        }
    })
    restart.addEventListener('click',()=>{
        n = 0;
        choices.innerHTML = "";
        ques.innerHTML = `<li> ${n+1} . ${questions[n].question} </li>`;
        n++; 
        const chos = questions[n-1].choice;
        let m = 0; // for id purpose

        chos.forEach(function(ele){           
            choices.innerHTML +=  `<li><input type="radio" name="ans" id="iam${m}"> ${ele}</li>`;
                m++;
             });
        ans.innerHTML = "";
       
        btnAns.innerText = "Show Answer" ;
    })
    
}



