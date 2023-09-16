import React, { createContext, useState } from "react"

export const Store=createContext();
const ContextApi = (props) => {
  const [data,setData] = useState([
    {
      id:1,
      category:'Bollywood',
      name:'GADAR2',
      image:'https://i.ytimg.com/vi/7kcjLAqdTy4/maxresdefault.jpg',
      text:'When Tara Singh goes missing during a skirmish and is believed to be captured in Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must escape at all costs.'
    },
    {
      id:2,
      category:'Bollywood',
      name:'Pathan',
      image:'https://images.hindustantimes.com/tech/img/2023/02/20/960x540/pathan_1674453019570_1676878377206_1676878377206.jpg',
      text:'If you are going to see Jawan in Jawan, then first you will see King Khan playing the character of an old man who hijacked the Metro, who is acting like a real hero by giving villainous dialogues. Along with her Girl’s brigade, whose dress and sequence will definitely remind you of Money Heist. But our romantic hero here doesn’t just mind like a professor. It kills, too, and yes, it kills a lot. Joker laughs like a gimmick and then gets a little emotional.'

    },
    {
      id:3,
      category:'Bollywood',
      name:'Border',
      image:'https://upload.wikimedia.org/wikipedia/en/9/9c/Border1997.jpg',
      text:'Border is a Bollywood war film that is set against the backdrop of the India-Pakistan war of 1971. The movie is based on real events and focuses on the Battle of Longewala, a significant military engagement during the war. The story primarily revolves around the brave soldiers of the Indian Army who were stationed at the Longewala post in the Thar Desert <br>The film introduces us to a group of soldiers from different backgrounds, including Major Kuldip Singh Chandpuri (played by Sunny Deol), who is in charge of the Longewala post, and Captain Bhairon Singh (played by Suniel Shetty). As the war escalates, the Indian soldiers find themselves vastly outnumbered and ill-equipped to defend the post against the advancing Pakistani forces.',
    },
    {
      id:4,
      category:'Bollywood',
      name:'Lagan',
      image:'https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg',
      text:'Lagaan" is a period drama that unfolds in the rural village of Champaner, located in the British-controlled part of India during 1893. The villagers are burdened by high taxes (lagaan) imposed by the British colonial rulers. Captain Andrew Russell (played by Paul Blackthorne) is the ruthless British officer in charge of the region, and he demands a double lagaan from the already impoverished villagers due to a prolonged drought<br>The villagers, led by Bhuvan (played by Aamir Khan), an earnest and spirited young man, are unable to pay the oppressive taxes. They protest against the British, and as a result, Captain Russell challenges them to a cricket match. He proposes that if the villagers win the match, their lagaan will be waived for three years, but if they lose, theyll have to pay triple lagaan.',
      
    },
    {
      id:5,
      category:'Bollywood',
      name:'Badhaai',
      image:'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/7309/177309-v.jpg',
      text:'"Badhaai Ho" tells the story of the Kaushik family, a middle-class family living in Delhi. The films protagonist Nakul Kaushik (played by Ayushmann Khurrana), is a young man who works in an IT job and lives a relatively ordinary life. Nakul is in a loving relationship with his girlfriend, Renee (played by Sanya Malhotra), and everything seems to be going smoothly<br> However Nakuls world is turned upside down when he discovers that his mother Priyamvada played by Neena Gupta is pregnant. The news comes as a shock to Nakul and his younger brother Gullar (played by Shardul Rana) because their parents are older and they had never expected them to have another child.',
    },
    {
      id:6,
      category:'Bollywood',
      name:'October',
      image:'https://resizing.flixster.com/i_2h0Sp3iCHcXsIC1suB6wkMmP0=/300x300/v2/https://flxt.tmsimg.com/assets/p15390261_v_h9_aa.jpg',
      text:'"October" is a unique and contemplative love story that centers around the lives of Dan (played by Varun Dhawan) and Shiuli (played by Banita Sandhu), who work together at a hotel in Delhi. While they are colleagues, they arent particularly close<br> The story takes a dramatic turn when Shiuli falls from the third floor of the hotel and is severely injured, leading her into a comatose state. This unexpected incident deeply affects Dan, who is deeply moved by her condition. He begins to visit her regularly at the hospital, even though they were not romantically involved or close friends.'
    },
    {
      id:7,
      category:"Bollywood",
      name:'IB71',
      image:'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3372/1543372-h-dbb5b6027e3d',
      text:'A finely directed spy thriller with remarkable finesse and restraint, IB71 is a film based on a phenomenal real-life mission executed by our secret services, and after watching this film, it fills you with pride. By not revealing all the cards at once and dumbing down everything by dumping information in the form of narration, the film retains a sense of urgency and suspense. It falters in writing especially in the detailing as a lot of things happen too easily and conveniently in the mission, but despite those hiccups, its tense narrative and brisk pace make the sail smooth. The BGM is nice and Vidyut shows his dramatic chops in this film and passes neatly. IB71 is not a great film but it executes its subject matter skillfully and will leave you with a good 2 hours worth of your time.. It falters in writing especially in the detailing as a lot of things happen too easily and conveniently in the mission, but despite those hiccups, its tense narrative and brisk pace make the sail smooth. The BGM is nice and Vidyut shows his dramatic chops in this film and passes neatly. IB71 is not a great film but it executes its subject matter skillfully and will leave you with a good 2 hours worth of your time.'
    },
    {
      id:8,
      category:"Bollywood",
      name:'Padmaavat',
      image:'https://upload.wikimedia.org/wikipedia/en/7/73/Padmaavat_poster.jpg',
      text:"Padmaavat is a historical drama set in the 13th century during the reign of the Rajput king Ratan Singh of Mewar (played by Shahid Kapoor). The story revolves around the legendary queen Padmavati (played by Deepika Padukone), known for her exceptional beauty and wisdom. The plot is set in motion when the ambitious and power-hungry Alauddin Khilji (played by Ranveer Singh), the Sultan of Delhi, learns about Padmavati's extraordinary beauty. Driven by lust and a desire to possess her, Khilji wages war against Mewar and captures Ratan Singh.",

     
    },
    {
      id:9,
      category:"Bollywood",
      name:'',
      image:'https://i.ytimg.com/vi/JfbxcD6biOk/maxresdefault.jpg',
      text:'"Gully Boy" is a coming-of-age drama that follows the life of Murad Ahmed (played by Ranveer Singh), a young man from a lower-income family in the slums of Mumbai. Murad has a passion for writing and poetry, and he uses this creative outlet to cope with the challenges he faces in his life<br>Living in a small, crowded home with his mother, grandmother, and abusive father, Murad dreams seem limited However, his life takes a turn when he discovers the world of underground rap music in Mumbai, which is thriving with talent and raw energy',

    },
    
      {
        id: 10,
        category: "Bollywood",
        name: "Dil Chahta Hai",
        image: 'https://i.ytimg.com/vi/9coA7bcpJII/maxresdefault.jpg',
        text: ' "Dil Chahta Hai" is a coming-of-age comedy-drama film that revolves around the lives of three close friends, Aakash (played by Aamir Khan), Sameer (played by Saif Ali Khan), and Siddharth (played by Akshaye Khanna). The film explores their journeys through love, friendship, and personal growth. Set in Mumbai and Goa, "Dil Chahta Hai" delves into the complexities of modern relationships and the inseparable bond of true friendship.'
      },
      {
        id: 11,
    category: "Bollywood",
    name: "3 Idiots",
    image: "https://flxt.tmsimg.com/assets/p7951929_p_v8_aa.jpg",
    text: "3 Idiots is a comedy-drama film that follows the adventures and misadventures of three engineering students as they navigate their way through college, friendship, and societal expectations.",
      },
      {
        id: 12,
    category: "Bollywood",
    name: "Chak De! India",
    image: "https://www.koimoi.com/wp-content/new-galleries/2021/08/shah-rukh-khans-chak-de-india-had-boosted-1-5x-sales-of-hockey-sticks-when-compared-to-cricket-bats001-1.jpg",
    text: "Chak De! India is a sports drama that tells the story of a former hockey player who becomes the coach of the Indian women's national hockey team, leading them to success against all odds.",
  },
  {
    id: 13,
    category: "Bollywood",
    name: "Dilwale Dulhania Le Jayenge",
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ddff52bf9c8cfaf6ad029644289c0cd71059f0417582a14226919a4551604627._UY500_UX667_RI_TTW_.jpg",
    text: "\"Dilwale Dulhania Le Jayenge\" is a classic romantic film that follows the love story of Raj and Simran as they journey across Europe and defy traditional family expectations."
  },
  {
    id: 14,
    category: "Bollywood",
    name: "Kabhi Khushi Kabhie Gham",
    image: "https://www.yashrajfilms.com/images/default-source/Movies/K3G/kabhi-khushi-kabhie-gham_767x430.jpg?sfvrsn=1b3fcfcc_0",
    text: "\"Kabhi Khushi Kabhie Gham\" is a family drama that explores the dynamics of a wealthy Indian family, emphasizing the importance of love and reconciliation."
  },
  {
    id: 15,
    category: "Bollywood",
    name: "PK",
    image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-319295,resizemode-75,msid-47516503/magazines/panache/pk-earns-13-5-million-in-china/pk_640x480.jpg",
    text: "\"PK\" is a satirical comedy-drama that follows an alien's journey on Earth, highlighting various societal norms, beliefs, and practices."
  },
  {
    id: 16,
    category: "Hollywood",
    name: "Inception",
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/26677df38123a3a1553d704477c100af81b641e1d539bc1991f99f89935f18b0._UY500_UX667_RI_TTW_.jpg",
    text: "\"Inception\" is a science fiction thriller that explores the concept of entering and manipulating dreams within dreams, leading to a complex heist scenario within the dream world."
  },
  {
    id: 17,
    category: "Hollywood",
    name: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_.jpg",
    text: "\"The Shawshank Redemption\" is a drama that follows the life of a wrongly convicted inmate, Andy Dufresne, as he navigates the challenges of prison life and seeks his freedom." 
  },
  {
    id: 18,
    category: "Hollywood",
    name: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg",
    text: "\"Pulp Fiction\" is a nonlinear crime film that weaves together multiple interconnected stories involving hitmen, crime, and unusual occurrences in Los Angeles."
  },
  {
    id: 19,
    category: "Hollywood",
    name: "The Godfather2",
    image: "https://m.media-amazon.com/images/I/81a5y311AVL._AC_UF1000,1000_QL80_.jpg",
    text: "\"The Godfather\" is a mafia crime epic that follows the Corleone family's patriarch, Vito Corleone, and his sons as they navigate the world of organized crime and power struggles."
  },
  {
    id: 20,
    category: "Hollywood",
    name: "Avatar2",
    image: "https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*",
    text: "\"Avatar\" is a science fiction film set on the alien planet of Pandora, where humans clash with the indigenous Na'vi people in a story of colonization and environmentalism."
  },
  {
    id: 21,
    category: "Hollywood",
    name: "Jurassic Park",
    image: "https://m.media-amazon.com/images/I/81GW8loPVJL._AC_UF1000,1000_QL80_.jpg",
    text: "\"Jurassic Park\" is a science fiction adventure film where a group of scientists and visitors must survive a deadly encounter with cloned dinosaurs on an isolated island."
  },
  {
    id: 22,
    category: "Hollywood",
    name: "The Matrix",
    image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/05/the-matrix-code-keanu-reeves.jpeg",
    text: "\"The Matrix\" is a cyberpunk science fiction film that explores the concept of a simulated reality and a group of rebels' fight against machines controlling humanity."
  },
  {
    id: 23,
    category: "Hollywood",
    name: "Forrest Gump",
    image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
    text: "\"Forrest Gump\" is a heartwarming drama that follows the extraordinary life of Forrest Gump, a man with a low IQ, as he unintentionally influences many historical events."
  },
  {
    id: 24,
    category: "Hollywood",
    name: "Avatar",
    image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
    text: "\"Avatar\" is a science fiction film set on the alien planet of Pandora, where humans clash with the indigenous Na'vi people in a story of colonization and environmentalism."
  },
  {
    id: 25,
    category: "Hollywood",
    name: "The Godfather",
    image: "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
    text: "\"The Godfather\" is a mafia crime epic that follows the Corleone family's patriarch, Vito Corleone, and his sons as they navigate the world of organized crime and power struggles."
  },
  {
    id: 26,
    category: "Hollywood",
    name: "Pulp Fiction",
    image: "https://www.miramax.com/assets/Pulp-Fiction1.png",
    text: "\"Pulp Fiction\" is a nonlinear crime film that weaves together multiple interconnected stories involving hitmen, crime, and unusual occurrences in Los Angeles."
  },
  {
    id: 27,
    category: "Hollywood",
    name: "The Shawshank Redemption",
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/66b4ed8b965ec8dbb658a907be990c7412d077e8c66dd1197011c9396bbb1bc5._RI_TTW_.jpg",
    text: "\"The Shawshank Redemption\" is a drama that follows the life of a wrongly convicted inmate, Andy Dufresne, as he navigates the challenges of prison life and seeks his freedom."
  },
  {
    id: 28,
    category: "Hollywood",
    name: "Eternal Sunshine of the Spotless Mind",
    image: "https://wallpapercave.com/dwp1x/wp2392647.jpg",
    text: "\"Eternal Sunshine of the Spotless Mind\" is a romantic science fiction film that explores the story of a couple, Joel and Clementine, who undergo a procedure to erase each other from their memories, only to rediscover their love."
  },
  {
    id: 29,
    category: "Technology",
    name: "The Future of Artificial Intelligence",
    image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/04/Future-of-AI-1.png",
    text: "In this article, we explore the exciting developments and challenges in the field of artificial intelligence (AI). From self-driving cars to healthcare advancements, AI is transforming various industries and shaping our future."
  },
  {
    id: 30,
    category: "Technology",
    name: "Quantum Computing Breakthroughs",
    image: "https://imageio.forbes.com/specials-images/imageserve/6335d06f4ce6892aac377afb/0x0.jpg?format=jpg&width=1200",
    text: "This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it."
  },
  {
    
    id: 31,
    category: "Technology",
    name: "5G Technology and Its Impact",
    image: "https://azilen-technologies.s3.us-west-1.amazonaws.com/wp-content/uploads/2023/07/5G.jpg",
    text: "Discover the latest developments in 5G technology and how it's set to transform connectivity, enabling faster data speeds, low latency, and the Internet of Things (IoT)."
  },
  {
    id: 32,
    category: "Technology",
    name: "Artificial Intelligence in Healthcare",
    image: "https://blog.ipleaders.in/wp-content/uploads/2021/11/ai-healthcare-title-image-2560x1365-1.jpeg",
    text: "Explore how artificial intelligence is revolutionizing healthcare with applications in medical diagnosis, drug discovery, and personalized treatment plans." 
  },
  {
    id: 33,
    category: "Technology",
    name: "The Rise of Electric Vehicles (EVs)",
    image: "https://dhyeyaias.com/sites/default/files/Electric-vehicle-Charging-infrastructure-as-a-constraint.jpg",
    text: "Learn about the growing popularity of electric vehicles (EVs) and their environmental benefits as we move towards a more sustainable future in transportation."
  },
  {
    id: 34,
    category: "Technology",
    name: "Augmented Reality (AR) in Education",
    image: "https://sugoilabs.com/wp-content/uploads/2018/05/education.png",
    text: "Discover how augmented reality is enhancing education by providing immersive learning experiences, interactive simulations, and virtual field trips for students."
  },
  {
    id: 35,
    category: "Technology",
    name: "Blockchain Technology and Cryptocurrency",
    image: "https://www.openaccessgovernment.org/wp-content/uploads/2019/10/dreamstime_xxl_126050352.jpg",
    text: "Explore the fundamentals of blockchain technology and the impact of cryptocurrencies like Bitcoin on the financial and technology sectors."
  },
  {
    id: 36,
    category: "Technology",
    name: "Space Exploration and Mars Missions",
    image: "https://cdn.mos.cms.futurecdn.net/tsRQNTJ8MhRUm32taXTdjm.jpg",
    text: "Learn about recent developments in space exploration, including Mars missions, space tourism, and the search for extraterrestrial life."
  },
  {
    id: 37,
    category: "Technology",
    name: "Cybersecurity in the Digital Age",
    image: "https://media.licdn.com/dms/image/D4D12AQEm8P5f1e9ylg/article-cover_image-shrink_600_2000/0/1672748202959?e=2147483647&v=beta&t=sLaVSHMbednYBK-ToxMZTcKKTV2hgKrB7n1V4Zprexw",
    text: "Delve into the world of cybersecurity and the importance of protecting digital assets, data, and privacy in an interconnected world."
  },
  {
    id: 38,
    category: "Technology",
    name: "Biotechnology Advancements",
    image: "https://the-dna-universe.com/wp-content/uploads/2021/12/Rewind_2021-main-image_v2.jpg",
    text: "Explore the latest advancements in biotechnology, including gene editing, CRISPR technology, and their potential applications in medicine and agriculture."
  },
  {
    id: 39,
    category: "Technology",
    name: "Renewable Energy Innovations",
    image: "data:image/jpeg;base64,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",
    text: "Discover innovations in renewable energy sources such as solar, wind, and hydroelectric power, contributing to a greener and sustainable future."
  },
  {
    
    id: 40,
    category: "Technology",
  name: "The Internet of Things (IoT) Revolution",
    image: "https://www.gbnews.ch/wp-content/gbnews-uploads/2016/06/IoT.png",
    text: "Learn how the Internet of Things is transforming our daily lives, from smart homes and cities to industrial automation and connected devices."
  },
  {
    id: 41,
    category: "Technology",
    name: "Robotics and Automation Trends",
    image: "https://3.imimg.com/data3/IT/MI/MY-17635245/robotics-technology-srt-3-months-500x500.png",
    text: "Explore the latest trends in robotics and automation technologies, from self-driving cars to robotic healthcare assistants and manufacturing automation."
  },
    {
      id:42,
      category: "Fitness",
      title: "Cardiovascular Health and Exercise",
      image: "https://www.frontiersin.org/files/Articles/458447/fcvm-06-00069-HTML/image_m/fcvm-06-00069-g001.jpg",
      content: "Explore the importance of cardiovascular health and the role of exercise in maintaining a healthy heart. Learn about various cardio workouts and lifestyle choices for better heart health."
    },
    {
      id: 43,
      category: "Fitness",
      title: "Nutrition Essentials for Athletes",
      image: "https://blog.nasm.org/hubfs/sports-nutrition-guide.jpg",
      content: "Discover the essential nutritional requirements for athletes and active individuals. Find out how to fuel your body for peak performance, recovery, and overall well-being."
    },
    {
      id: 44,
      category: "Fitness",
      title: "Yoga and Mindfulness for Stress Reduction",
      image: "https://www.ekhartyoga.com/media/image/articles/6-stress-relieving-pose.jpg",
      content: "Learn about the benefits of incorporating yoga and mindfulness practices into your daily routine. Explore techniques for reducing stress, improving mental clarity, and enhancing relaxation."
    },
    {
      id: 45,
      category: "Fitness",
      title: "High-Intensity Interval Training (HIIT)",
      image: "https://images.ctfassets.net/psi7gc0m4mjv/1b1d9f0c-67b7-45b7-bb72-31efc4da28d5/0ac6571699c4591043efd109fbf21052/issa-blog-header-hiit.jpg",
       content:"Youll work harder than you do when you do a typical cardio workout. But youll do it in spurts of 30 seconds to 3 minutes. Then you’ll have a chance to recover for about the same amount of time or longer."
    },
    {
      id: 46,
      category: "Fitness",
      title: "Nutrition Myths Debunked",
      image: "https://www.nocofitness.com/wp-content/uploads/2018/11/Nutrition-Myths-Debunked.jpg",
      content: "Separate fact from fiction as we debunk common nutrition myths. Learn about proper dietary choices and get evidence-based insights into maintaining a healthy diet."
    },
    {
      id: 47,
      category: "Fitness",
      title: "Strength Training for Beginners",
      image: "https://www.muscleandfitness.com/wp-content/uploads/2019/03/Kettleball.jpg?quality=86&strip=all",
      content: "If you're new to strength training, this article is for you. Discover the basics of weightlifting, resistance training, and building muscle safely and effectively."
    },
    {
      id: 48,
      category: "Fitness",
      title: "Running Tips for Beginners",
      image: "https://i.ndtvimg.com/i/2017-12/running_696x400_71514191052.jpg",
      content: "Are you considering taking up running? Learn valuable tips and advice for beginner runners, including proper footwear, pacing, and injury prevention."
    },
    {
      id: 49,
      category: "Fitness",
      title: "Healthy Habits for a Balanced Lifestyle",
      image: "https://possible.in/wp-content/uploads/2020/11/balanced-diet-chart-1-1024x683.jpg",
      content: "Explore healthy habits that contribute to a balanced lifestyle. From sleep routines to stress management, discover practices that promote overall well-being."
    },
    {
      id: 50,
      category: "Fitness",
      title: "Mind-Body Connection in Fitness",
      image: "https://www.hhhealth.com/wp-content/uploads/2022/07/AdobeStock_295859885-1024x480.jpeg",
      content: "Understand the mind-body connection in fitness and how mental well-being influences physical performance. Learn techniques for enhancing focus and motivation during workouts."
    },
    {
      id: 51,
      category: "Fitness",
      title: "Outdoor Activities for Fitness Enthusiasts",
      image: "https://zumpermedia.s3.amazonaws.com/blog/wp-content/uploads/2022/07/12104938/best-cities-for-outdoor-enthusiasts.jpg",
      content: "Embrace the outdoors as your fitness playground. Discover a variety of outdoor activities that not only keep you fit but also provide a refreshing change of scenery."
    },
    {
      id: 52,
      category: "Fitness",
      title: "Effective Core Workouts",
      image: "https://prod-ne-cdn-media.puregym.com/media/790253/blogimages_abs-26_12.jpg?quality=80",
      content: "Strengthen your core muscles with effective workout routines. Learn about exercises that target your abdominal and lower back muscles for better stability and posture."
    },
    {
      id: 53,
      category: "Fitness",
      title: "The Importance of Stretching",
      image: "https://www.starhealth.in/blog/wp-content/uploads/2022/04/Stretching-and-its-importance.jpg",
      content: "Discover the benefits of incorporating stretching into your fitness routine. Learn about different stretching techniques, including static and dynamic stretches."
    },
    {
      id: 54,
      category: "Fitness",
      title: "Mental Health and Exercise",
      image: "https://decisionmaker.in/wp-content/uploads/2022/12/How-Beneficial-is-Exercise-for-Our-Mental-Health.jpg",
      content: "Explore the positive impact of regular exercise on mental health. Learn how physical activity can reduce stress, anxiety, and depression while enhancing overall well-being."
    },
    {
      id: 55,
      category: "Fitness",
      title: "Healthy Eating on a Budget",
      image: "https://foodie.sysco.com/wp-content/uploads/2019/07/Simply-Classic-Burger.jpg",
      content: "Discover practical tips and strategies for maintaining a nutritious diet without breaking the bank. Learn how to make cost-effective and healthy food choices."
    },
      {
        id: 56,
        category: 'Food',
        name: 'Classic Burger',
        image: 'https://foodie.sysco.com/wp-content/uploads/2019/07/Simply-Classic-Burger.jpg',
        text: 'A classic fast-food burger with a juicy beef patty, lettuce, tomato, cheese, and special sauce.'
      },
      {
        id: 57,
        category: 'Food',
        name: 'Margherita Pizza',
        image: 'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg',
        text: 'Delicious Italian pizza topped with fresh mozzarella, tomato sauce, basil, and olive oil.'
      },
      {
        id: 58,
        category: 'Food',
        name: 'Chicken Quesadilla',
        image: 'https://www.wellplated.com/wp-content/uploads/2022/10/best-chicken-quesadilla.jpg',
        text: 'Savory chicken quesadilla with melted cheese, grilled chicken, and a side of salsa.'
      },
      {
        id: 59,
        category: 'Food',
        name: 'Salmon Sushi Roll',
        image: 'https://tatyanaseverydayfood.com/wp-content/uploads/2014/04/Spicy-Salmon-Sushi-Roll.jpg',
        text: 'Delicate salmon sushi roll with rice, seaweed, avocado, and wasabi.'
      },
      {
        id: 60,
        category: 'Food',
        name: 'Chicken Tikka Masala',
        image: 'https://greatcurryrecipes.net/wp-content/uploads/2012/01/tik1-735x735.jpg',
        text: 'Spicy and creamy chicken tikka masala served with naan bread and basmati rice.'
      },
      {
        id: 61,
        category: 'Food',
        name: 'Sweet and Sour Chicken',
        image: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Sweet-and-sour-chicken-square-FS-0833.jpg',
        text: 'Tangy sweet and sour chicken with bell peppers and pineapple chunks.'
      },
      {
        id: 62,
        category: 'Food',
        name: 'Vegetable Stir-Fry',
        image: 'https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=93a14607adf8487098a20c6c2f708b0d&vd=20220914T205534Z&hash=3462A145DB20845D4AB02C88469481FE',
        text: 'Healthy vegetable stir-fry with broccoli, carrots, bell peppers, and tofu in a savory sauce.'
      },
      {
        id: 63,
        category: 'Food',
        name: 'Chocolate Brownie',
        image: 'https://img.buzzfeed.com/video-api-prod/assets/fafe8090b4f3434f80c33b6e4ce40e24/BFV21539_BestFudgyBrownies-ThumbB1080.jpg?resize=1200:*',
        text: 'Rich and fudgy chocolate brownie topped with vanilla ice cream and drizzled with hot fudge.'
      },
      {
        id: 64,
        category: 'Food',
        name: 'Greek Salad',
        image: 'https://www.wellplated.com/wp-content/uploads/2022/05/Greek-Salad-Recipe-Easy-500x500.jpg',
        text: 'Fresh Greek salad with cucumbers, tomatoes, olives, feta cheese, and a zesty dressing.'
      },
      {
        id: 65,
        category: 'Food',
        name: 'Pad Thai Noodles',
        image: 'https://pinchofyum.com/wp-content/uploads/Vegetarian-Pad-Thai-Recipe.jpg',
        text: 'Classic Pad Thai noodles with shrimp, peanuts, bean sprouts, and a tangy sauce.'
      },
      {
        id: 66,
        category: 'Food',
        name: 'Grilled Salmon',
        image: 'https://www.wholesomeyum.com/wp-content/uploads/2021/06/wholesomeyum-Grilled-Salmon-Recipe-8.jpg',
        text: 'Perfectly grilled salmon fillet with a lemon dill sauce and steamed asparagus.'
      },
      {
        id: 67,
        category: 'Food',
        name: 'Pancakes',
        image: 'https://hips.hearstapps.com/hmg-prod/images/best-homemade-pancakes-index-640775a2dbad8.jpg?crop=0.503xw:1.00xh;0.235xw,0&resize=1200:*',
        text: 'Fluffy pancakes served with maple syrup, butter, and a side of crispy bacon.'
      },
      {
        id: 68,
        category: 'Food',
        name: 'BBQ Ribs',
        image: 'https://www.allrecipes.com/thmb/IWVelWahUb2gQxixWJC2N-HXp0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-2x1-210-e799db142f594b00bb317bb357d0971c.jpg',
        text: 'Succulent BBQ ribs with a smoky barbecue sauce, coleslaw, and cornbread.'
      },
      {
        id: 69,
        category: 'Food',
        name: 'Quinoa Salad',
        image: 'https://cookieandkate.com/images/2017/08/best-quinoa-salad-recipe-3.jpg',
        text: 'Nutritious vegan quinoa salad with mixed vegetables and a balsamic vinaigrette.'
      },
      {
        id: 70,
        category: 'Food',
        name: 'Filet Mignon',
        image: 'https://www.cookingclassy.com/wp-content/uploads/2020/12/filet-mignon-23-500x500.jpg',
        text: 'Tender and juicy filet mignon steak cooked to perfection, served with garlic mashed potatoes.'
      },
      {
        id:71,
        category:'Home',
        name:'Jawan',
        image:'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan.jpg?ssl=1&quality=80&w=f',

      },
      {
        id:72,
        category:'Home',
        name:'BlueBettle',
        image:'https://filmfare.wwmindia.com/thumb/content/2023/aug/upcominghollywoodmovies21690962006.jpg?width=1200&height=900', 
        text:'According to box office insider Luiz Fet another DCEU flop on its hands.',
      },
      {
        id: 73,
        category: "Home",
      name: "The Internet of Things (IoT) Revolution",
        image: "https://www.gbnews.ch/wp-content/gbnews-uploads/2016/06/IoT.png",
        text:'According to box office insider Luiz Fernan Tticn globally, Its adn theaters exclusively',
      },
      {
        id: 74,
        category: "Home",
        name: "Healthy Habits for a Balanced Lifestyle",
        image: "https://possible.in/wp-content/uploads/2020/11/balanced-diet-chart-1-1024x683.jpg",
        text: "Explore healthy habits that contribute to a bscover practices that promote overall well-being."
      },
      {
        id: 75,
        category: "Home",
        name: "Renewable Energy Innovations",
        image: "data:image/jpeg;base64,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",
        text: "Discover innovations in renewable energy sources such as solar, wind, and hydroelectric power, contributing to a greener and sustainable future."
      },
      {
        id: 76,
        category: "Home",
        name: "Jurassic Park",
        image: "https://m.media-amazon.com/images/I/81GW8loPVJL._AC_UF1000,1000_QL80_.jpg",
        text: "\"Jurassic Park\" is a science fiction adventure film where a group of scientists and visitors must survive a deadly encounter with cloned dinosaurs on an isolated island."
      },
      {
        id:77,
        category: "Home",
        name: "The Internet of Things (IoT) Revolution",
    image: "https://www.gbnews.ch/wp-content/gbnews-uploads/2016/06/IoT.png",
    text: "Learn how the Internet of Things is transforming our daily lives, from smart homes and cities to industrial automation and connected devices."
      },
      {
        id: 79,
        category: "Home",
        name: "Augmented Reality (AR) in Education",
        image: "https://sugoilabs.com/wp-content/uploads/2018/05/education.png",
        text: "Discover how augmented reality is enhancing education by providing immersive learning experiences, interactive simulations, and virtual field trips for students."
      },
      {
        id: 80,
        category: "Home",
        name: "Blockchain Technology and Cryptocurrency",
        image: "https://www.openaccessgovernment.org/wp-content/uploads/2019/10/dreamstime_xxl_126050352.jpg",
        text: "Explore the fundamentals of blockchain technology and the impact of cryptocurrencies like Bitcoin on the financial and technology sectors."
      },
      {
        id: 81,
        category: 'Home',
        name: 'Pancakes',
        image: 'https://hips.hearstapps.com/hmg-prod/images/best-homemade-pancakes-index-640775a2dbad8.jpg?crop=0.503xw:1.00xh;0.235xw,0&resize=1200:*',
        text: 'Fluffy pancakes served with maple syrup, butter, and a side of crispy bacon.'
      },
      {
        id: 82,
        category: 'Home',
        name: 'BBQ Ribs',
        image: 'https://www.allrecipes.com/thmb/IWVelWahUb2gQxixWJC2N-HXp0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22469-Barbecue-Ribs-ddmfs-2x1-210-e799db142f594b00bb317bb357d0971c.jpg',
        text: 'Succulent BBQ ribs with a smoky barbecue sauce, coleslaw, and cornbread.'
      },
      {
        id: 83,
        category: "Home",
        name: "Space Exploration and Mars Missions",
        image: "https://cdn.mos.cms.futurecdn.net/tsRQNTJ8MhRUm32taXTdjm.jpg",
        text: "Learn about recent developments in space exploration, including Mars missions, space tourism, and the search for extraterrestrial life."
      },
      {
        id: 84,
        category: "Home",
        name: "Cybersecurity in the Digital Age",
        image: "https://media.licdn.com/dms/image/D4D12AQEm8P5f1e9ylg/article-cover_image-shrink_600_2000/0/1672748202959?e=2147483647&v=beta&t=sLaVSHMbednYBK-ToxMZTcKKTV2hgKrB7n1V4Zprexw",
        text: "Delve into the world of cybersecurity and the importance of protecting digital assets, data, and privacy in an interconnected world."
      },
    


  ]);
  
  return (
    <>
      <Store.Provider value={[data,setData]}>
        {props.children}
      </Store.Provider>
    </>
  )
}

export default ContextApi


