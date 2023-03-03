export const selfTaughtCurriculumData: {
    topic: string
    itemList: {
        subtopic: string,
        videoList: {
            title: string,
            author: string
            duration: string,
            externalPlay: boolean,
            urlType: "video" | "playlist",
            urlParam: string
        }[],
        readingsList: {
            title: string,
            author: string,
            url: string
        }[]
    }[]
}[] = [
    {
        topic: "FUNDAMENTALS",
        itemList: [
            {
                subtopic: "JavaScript",
                videoList: [
                {
                    title: "JavaScript tutorial for complete beginners 🌐",
                    author: "Bro Code",
                    duration: "60 videos",
                    externalPlay: true,
                    urlType: "playlist",
                    urlParam: "PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1"
                },
                {
                    title: "Javascript Crash Course",
                    author: "Bro Code",
                    duration: "4:30:19 Hours",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "t9dEgHpCNJE"
                },
                {
                    title: "I Bet You Can’t Even Name 10",
                    author: "Web Dev Simplified",
                    duration: "20:32 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "UUoZ_U2_4tA"
                },
                {
                    title: "How to use Dynamic Imports for Modules - JavaScript Tutorial",
                    author: "dcode",
                    duration: "9:36 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "5s5fVghc4S8"
                },
                {
                    title: "5 MUST KNOW JavaScript Object Functions",
                    author: "dcode",
                    duration: "10:41 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "NrPwbrAnxNk"
                },
                {
                    title: "Why I Don't Use Semicolons In JavaScript",
                    author: "Web Dev Simplified",
                    duration: "6:03 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "cB0STl_A4l4"
                },
                {
                    title: "You're using Javascript Promises The wrong way",
                    author: "CoderOne",
                    duration: "9:56 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "i1ktjumqT64"
                },
                {
                    title: "How to use JSDoc - Basics & Introduction",
                    author: "dcode",
                    duration: "13:04 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "Nqv6UkTROak"
                }
                ],
                readingsList: [],
            },
            {
                subtopic: "Java",
                videoList: [
                    {
                        title: "Java Full Course",
                        author: "Bro Code",
                        duration: "11:59:59 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "xk4_1vDrzzo"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "Python",
                videoList: [
                    {
                        title: "Python Full Course",
                        author: "Bro Code",
                        duration: "12:00:00 Hours",
                        externalPlay: false,
                        urlType: "video",
                        urlParam: "XKHEtdqhLK8"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "C#",
                videoList: [
                    {
                        title: "C# tutorial for beginners",
                        author: "Bro Code",
                        duration: "50 videos",
                        externalPlay: true,
                        urlType: "playlist",
                        urlParam: "PLZPZq0r_RZOPNy28FDBys3GVP2LiaIyP_"
                    },
                    {
                        title: "C# Programming All-in-One Tutorial Series (6 HOURS!)",
                        author: "Caleb Curry",
                        duration: "6:20:34 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "qOruiBrXlAw"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "C++",
                videoList: [
                {
                  title: "C++",
                  author: "The Cherno",
                  duration: "100 videos",
                  externalPlay: true,
                  urlType: "playlist",
                  urlParam: "PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"
                },
                {
                  title: "C++ Crash Course",
                  author: "Bro Code",
                  duration: "4:34:24 Hours",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "uhFpPlMsLzY"
                },
                {
                  title: "C++ Programming Course, Beginner to Advanced",
                  author: "freeCodeCamp.org",
                  duration: "31:07:29 Hours",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "8jLOx1hD3_o"
                },
                {
                  title: "C++ FULL COURSE For Beginners (Learn C++ in 10 hours)",
                  author: "CodeBeauty",
                  duration: "10:27:40 Hours",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "GQp1zzTwrIg"
                },
                {
                  title: "C++ POINTERS FULL COURSE Beginner to Advanced (Learn C++ Pointers in 2,5 hours)",
                  author: "CodeBeauty",
                  duration: "2:23:14 Hours",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "kiUGf_Z08RQ"
                }
              ],
              readingsList: []
            },
            {
                subtopic: "SQL",
                videoList: [
                  {
                    title: "SQL Básico ao Avançado 2019",
                    author: "Dev Aprender",
                    duration: "32 videos",
                    externalPlay: true,
                    urlType: "playlist",
                    urlParam: "PLnNURxKyyLIInBfeGiJ8L314AD015mHkv"
                  },
                  {
                    title: "SQL Tutorial | Full Course",
                    author: " Data with Baraa",
                    duration: "28 videos",
                    externalPlay: true,
                    urlType: "playlist",
                    urlParam: "PLNcg_FV9n7qZDdRInCl7wfOO8yZqYX5hO"
                  }
                ],
                readingsList: []
            },
            {
              subtopic: "HTML and CSS",
              videoList: [
                {
                  title: "CSS Tutorials for Beginners",
                  author: "Dave Gray",
                  duration: "13 videos",
                  externalPlay: true,
                  urlType: "playlist",
                  urlParam: "PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
                },
                {
                  title: "HTML & CSS Full Course 🌎【FREE】",
                  author: "Bro Code",
                  duration: "4:55:12 Hours",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "cyuzt1Dp8X8"
                },
                {
                  title: "Learn HTML in 1 hour",
                  author: "Bro Code",
                  duration: "1 Hour",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "HD13eq_Pmp8"
                },
                {
                  title: "Learn CSS 1 hour",
                  author: "Bro Code",
                  duration: "1 Hour",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "wRNinF7YQqQ"
                },
                {
                  title: "Learn Every CSS Selector In 20 Minutes",
                  author: "Web Dev Simplified",
                  duration: "19:37 Minutes",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "l1mER1bV0N0"
                },
                {
                  title: "Why You Should Use REM Instead of Pixels",
                  author: "frontendfyi",
                  duration: "8:25 Minutes",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "pKX7YnkyR8g"
                },
                {
                  title: "Embed external website page and display only particular portion of it in a webpage",
                  author: "E 4 E-Learning",
                  duration: "6:31 Minutes",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "zceu0DmuZ7w"
                },
                {
                  title: "Create custom scrollbars using CSS",
                  author: "Kevin Powell",
                  duration: "13:57 Minutes",
                  externalPlay: true,
                  urlType: "video",
                  urlParam: "lvKK2fs6h4I"
                }
              ],
              readingsList: []
            },
            {
                subtopic: "Git",
                videoList: [
                    {
                        title: "Curso de Git e Github COMPLETO 2021 [iniciantes] + Desafios + Muita Prática",
                        author: "Dev Aprender",
                        duration: "49:58 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "kB5e-gTAl_s"
                    },
                    {
                        title: "Learn Git in 15 Minutes",
                        author: "Colt Steele",
                        duration: "15:58 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "USjZcfj8yxE"
                    },
                    {
                        title: "Learn Github in 20 Minutes",
                        author: "Colt Steele",
                        duration: "19:59 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "nhNq2kIvi9s"
                    },
                    {
                        title: "13 Advanced (but useful) Git Techniques and Shortcuts",
                        author: "Fireship",
                        duration: "8:06 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "ecK3EnyGD8o"
                    },
                    {
                        title: "Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git",
                        author: "freeCodeCamp.org",
                        duration: "40:41 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "Uszj_k0DGsg"
                    },
                    {
                        title: "Git e Github para Iniciantes",
                        author: "Willian Justen Cursos",
                        duration: "30 videos",
                        externalPlay: true,
                        urlType: "playlist",
                        urlParam: "PLlAbYrWSYTiPA2iEiQ2PF_A9j__C4hi0A"
                    },
                    {
                        title: "Git e Github na Vida Real",
                        author: "Willian Justen Cursos",
                        duration: "45 videos",
                        externalPlay: true,
                        urlType: "playlist",
                        urlParam: "PLlAbYrWSYTiNqugqFFWWsgONJsmc3eMpg"
                    }
                ],
                readingsList: []
            }            
        ]
    },
    {
        topic: "FRAMEWORKS",
        itemList: [
            {
                subtopic: "Node Js",
                videoList: [
                    {
                        title: "Node.js Full Course for Beginners | Complete All-in-One Tutorial | 7 Hours",
                        author: "Dave Gray",
                        duration: "6:50:41 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "f2EqECiTBL8"
                    },
                    {
                        title: "Node.js and Express.js - Full Course",
                        author: "freeCodeCamp.org",
                        duration: "8:16:47 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "Oe421EPjeBE"
                    },
                    {
                        title: "Node.js / Express Course - Build 4 Projects",
                        author: "freeCodeCamp.org",
                        duration: "10:00:07 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "qwfE7fSVaZM"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "Bootstrap",
                videoList: [
                    {
                        title: "Curso de Bootstrap",
                        author: "CFB Cursos",
                        duration: "46 videos",
                        externalPlay: true,
                        urlType: "playlist",
                        urlParam: "PLx4x_zx8csUgop9qBqm6ReuNa3XraZBrc"
                    }, 
                    {
                        title: "Bootstrap CSS Framework - Full Course for Beginners",
                        author: "freeCodeCamp.org",
                        duration: "2:46:21 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "-qfEOE4vtxE"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "React",
                videoList: [
                {
                    title: "React Course - Beginner's Tutorial for React JavaScript Library [2022]",
                    author: "freeCodeCamp.org",
                    duration: "11:55:27 Hours",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "bMknfKXIFA8"
                    },
                    {
                    title: "Advanced React Patterns, Performance, Environment and Testing | New Course Launch",
                    author: "codedamn",
                    duration: "58:03 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "MfIoAG3e7p4"
                    },
                    {
                    title: "Junior Vs Senior Code - How To Write Better Code As A Web Developer - React",
                    author: "Web Dev Simplified",
                    duration: "21:47 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "0yzoAbrjV6k"
                    },
                    {
                    title: "Speed Up Your React Apps With Code Splitting",
                    author: "Web Dev Simplified",
                    duration: "16:49 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "JU6sl_yyZqs"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "React Native",
                videoList: [
                    {
                        title: "Como configurar ambiente React Native no Windows - 2022",
                        author: "Vinicius Guedes",
                        duration: "31:20 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "4_zDCS2fVAU"
                    },
                    {
                        title: "Fix for Android Emulator Hypervisor Driver For AMD Processor - Ryzen CPU + Gigabyte Aorus X470",
                        author: "Gamer Tweak",
                        duration: "4:13 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "Y1WhS2yuF8I"
                    },
                    {
                        title: "How to install Android Studio Emulator on AMD Processor(TODAY)|| #Android Emulator|| #AMD Processor.",
                        author: "Muni raja",
                        duration: "10:40 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "hSFo33XktgY"
                    },
                    {
                        title: "Configurando ícone, splash screen e nome do app Android no React Native | Claudio Orlandi",
                        author: "Rocketseat",
                        duration: "10:41 Minutes",
                        externalPlay: false,
                        urlType: "video",
                        urlParam: "3Gf9yb53bJM"
                    },
                    {
                        title: "Gerando APK | AAB com React Native CLI 2021",
                        author: "Sujeito programador",
                        duration: "14:49 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "i28btjntmNE"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "Github Copilot",
                videoList: [
                    {
                        title: "The Truth about Github Copilot // AI Programming First Look",
                        author: "Fireship",
                        duration: "8:29 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "4duqI8WyfqE"
                    },
                    {
                        title: "Can GitHub Copilot Build an API & React Application in Record Time?",
                        author: "TomDoesTech",
                        duration: "11:36 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "vvVw4Uw9rn4"
                    },
                    {
                        title: "Pair Programming With GitHub Copilot and React | Practical Examples",
                        author: "Travis Media",
                        duration: "24:56 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "yKSoHWLmWYM"
                    },
                    {
                        title: "Programação Vai Mudar COMPLETAMENTE Com Isso",
                        author: "Filipe Deschamps",
                        duration: "10:31 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "awm2k3sEtOY"
                    }
                ],
                readingsList: [
                    {
                        title: "Technical Preview",
                        author: "GitHub Copilot",
                        url: "https://copilot.github.com/"
                    }
                ]
            }
              ,
              {
                subtopic: "Twitch API",
                videoList: [
                  {
                    title: "How To Build a Twitch Chat Bot with Nodejs",
                    author: "James Q Quick",
                    duration: "13:44 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "9SO3-IKQTqc"
                  },
                  {
                    title: "How to Build a Twitch Bot Using TMI.JS (a moderator bot).",
                    author: "Techno Tim",
                    duration: "23:59 Minutes",
                    externalPlay: true,
                    urlType: "video",
                    urlParam: "7uSjKbAUHXg"
                  }
                ],
                readingsList: []
              }
              ,
            {
                subtopic: "CodeMirror",
                videoList: [
                    {
                        title: "CodeMirror Tutorial for Beginners: Create A Fully Functional Text Editor",
                        author: "Mansoor Ghazi",
                        duration: "14:20 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "o1DDWQDBT9Y"
                    },
                    {
                        title: "How To Build CodePen With React",
                        author: "Web Dev Simplified",
                        duration: "30:25 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "wcVxX7lu2d4"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "CODE CONCEPTS",
                videoList: [
                    {
                        title: "Learn Data Structures and Algorithms for free 📈",
                        author: "Bro Code",
                        duration: "4:00:14 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "CBYHwZcbD-s"
                    },
                    {
                        title: "Algorithms and Data Structures Tutorial - Full Course for Beginners",
                        author: "freeCodeCamp.org",
                        duration: "5:22:08 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "8hly31xKli0"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "Oriented Object Programming",
                videoList: [
                    {
                        title: "Singleton Pattern - Design Patterns",
                        author: "Web Dev Simplified",
                        duration: "8:27 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "sJ-c3BA-Ypo"
                    },
                    {
                        title: "SINGLETONS in C++",
                        author: "The Cherno",
                        duration: "19:15 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "PPup1yeU45I"
                    },
                    {
                        title: "Builder Pattern - Design Patterns",
                        author: "Web Dev Simplified",
                        duration: "10:48 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "M7Xi1yO_s8E"
                    },
                    {
                        title: "Builder Design Pattern (C#)",
                        author: "Raw Coding",
                        duration: "12:04 Mintues",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "WfBsYo20D_I"
                    },
                    {
                        title: "Builder Design Pattern Explained (with Code Examples)",
                        author: "dcode",
                        duration: "19:44 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "ALzvPK9_r0A"
                    },
                    {
                        title: "Builder : Design Patterns In Python",
                        author: "seanwasere ytbe",
                        duration: "5:52 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "pMadA6F4zGU"
                    },
                    {
                        title: "Observer Pattern Tutorial: I NEVER knew events were THIS powerful",
                        author: "ArjanCodes",
                        duration: "15:16 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "oNalXg67XEE"
                    },
                    {
                        title: "Observer Design Pattern (C#)",
                        author: "Raw Coding",
                        duration: "8:06 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "8nICu7ZSPtE"
                    },
                    {
                        title: "Facade Pattern - Design Patterns",
                        author: "Web Dev Simplified",
                        duration: "8:49 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "fHPa5xzbpaA"
                    },
                    {
                        title: "Facade Design Pattern",
                        author: "SBCODE",
                        duration: ":25 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "VrRDami28N0"
                    },
                    {
                        title: "Design Patterns in Python by Peter Ullrich",
                        author: "PyCon Sweden",
                        duration: "27:30 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "bsyjSW46TDg"
                    },
                    {
                        title: "Association, Composition, Aggregation",
                        author: "Gray Hoodie Software | Kevin Ewig",
                        duration: "3:12 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "TL0TPMTzfz8"
                    },
                    {
                        title: "Why COMPOSITION is better than INHERITANCE - detailed Python example",
                        author: "ArjanCodes",
                        duration: "23:28 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "0mcP8ZpUR38"
                    }
                ],
                readingsList: [
                    {
                        title: "You Don’t Need to Use Design Patterns (Until You Do)!",
                        author: "devgenius",
                        url: "https://blog.devgenius.io/you-dont-need-to-use-design-patterns-until-you-do-1f2404d38ff"
                    },
                    {
                        title: "Builder",
                        author: "refactoring.guru",
                        url: "https://refactoring.guru/design-patterns/builder"
                    },
                    {
                        title: "Singleton",
                        author: "refactoring.guru",
                        url: "https://refactoring.guru/design-patterns/singleton"
                    },
                    {
                        title: "Factory",
                        author: "refactoring.guru",
                        url: "https://refactoring.guru/design-patterns/factory-method"
                    }
                ]
            },
            {
                subtopic: "Functional Programming",
                videoList: [
                    {
                        title: "Functional Design Patterns - Scott Wlaschin",
                        author: "NDC Conferences",
                        duration: "1:05:49 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "srQt1NAHYC0"
                    }
                ],
                readingsList: []
            },
            {
                subtopic: "Game Maker Studio 2",
                videoList: [
                    {
                        title: "How to move diagonal correctly [Game Maker Studio 2 | Basics]",
                        author: "1up Indie",
                        duration: "5:38 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "y7SHWtjeqAM"
                    }
                ],
                readingsList: []
            }
        ]
    },
    {
        topic: "WORKFLOW",
        itemList: [
            {
                subtopic: "AGILE methodology",
                videoList: [
                    {
                        title: "What is Agile?",
                        author: "Telusko",
                        duration: "15:21 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "NpCEjtKAa20"
                    },
                    {
                        title: "What is Scrum? | Agile",
                        author: "Telusko",
                        duration: "9:46 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "oTZd2vo3FQU"
                    },
                    {
                        title: "Scrum Methodology | Agile Scrum Framework | Scrum Master Tutorial | Edureka",
                        author: "edureka!",
                        duration: "34:13 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "8dGdIcyDk1w"
                    },
                    {
                        title: "Scrum in 16 minutes",
                        author: "freeCodeCamp.org",
                        duration: "16:01 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "vuBFzAdaHDY"
                    },
                    {
                        title: "Introduction to Scrum",
                        author: "Uzility",
                        duration: "7 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "9TycLR0TqFA"
                    },
                    {
                        title: "What is Kanban? - Agile Coach (2019)",
                        author: "Atlassian",
                        duration: "5:31 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "iVaFVa7HYj4"
                    },
                    {
                        title: "Kanban Tutorial: A Fun & Effective Productivity Tool that can Change your Life",
                        author: "Ed Tchoi",
                        duration: "7:18 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "ea-TH3MixM8"
                    },
                    {
                        title: "Agile Project Management with Kanban | Eric Brechner | Talks at Google",
                        author: "Talks at Google",
                        duration: "1:04:30 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "CD0y-aU1sXo"
                    },
                    {
                        title: "Visão Executiva das Metodologias Ágeis - Extreme Programming (XP)",
                        author: "Andy Barbosa",
                        duration: "26:52 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "45sHomVMqA8"
                    }
                ],
                readingsList: []
            }
        ]
    }
    ,
    {
        topic: "TO RELAX",
        itemList: [
            {
                subtopic: "NDC Conferences",
                videoList: [
                    {
                        title: "The Worst Programming Language Ever - Mark Rendle - NDC Oslo 2021",
                        author: "NDC Conferences",
                        duration: "1:00:40 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "vcFBwt1nu2U"
                    },
                    {
                        title: "I Turned Fake Mobile Game Ad into a Real Game",
                        author: "Fat Dino",
                        duration: "10:25 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "zRDhiN50Vo0"
                    },
                    {
                        title: "Clean Coders Hate What Happens to Your Code When You Use These Enterprise Programming Tricks",
                        author: "NDC Conferences",
                        duration: "1:11:22 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "FyCYva9DhsI"
                    },
                    {
                        title: '"Game Development in Eight Bits" by Kevin Zurawel',
                        author: "Strange Loop Conference",
                        duration: "39:40 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "TPbroUDHG0s"
                    },
                    {
                        title: "The Art of Code - Dylan Beattie",
                        author: "NDC Conferences",
                        duration: "1:00:48 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "6avJHaC3C2U"
                    },
                    {
                        title: "Ctrl-Alt-Del: Learning to Love Legacy Code - Dylan Beattie",
                        author: "NDC Conferences",
                        duration: "56:46 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "wPjHuvulivM"
                    },
                    {
                        title: "Keynote: Are There any Questions? - Dylan Beattie",
                        author: "NDC Conferences",
                        duration: "58:47 Minutes",
                        externalPlay: true, 
                        urlType: "video",
                        urlParam: "o6aLNvlQaGo"
                    },
                    {
                        title: "Linguagem Compilada vs Interpretada | Qual é melhor?",
                        author: "Fabio Akita",
                        duration: "1:11:44 Hours",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "SNyh-cubxaU"
                    },
                    {
                        title: "How Video Game Economies are Designed",
                        author: "Game Maker's Toolkit",
                        duration: "16:12 Minutes",
                        externalPlay: true,
                        urlType: "video",
                        urlParam: "Zrf1cou_yVo"                        
                    }
                ],
                readingsList: []
            }
        ]
    }
]
