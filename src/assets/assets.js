import logo from "./logo.png";

export const assets = {
  logo,
};

export const ArticlesData = [
  {
    id: 1,
    question: "JavaScript এ startsWith(), endsWIth() কি?",
    commonLine: "Hello Developers",
    heading:
      "startsWith() এবং endsWith() — দুটোই JavaScript-এর inbuilt string method।",

    paragraphs: [
      "এরা case-sensitive, মানে বড়/ছোট অক্ষর মিলতে হবে।",
      "শুধুমাত্র string-এর উপর কাজ করে।",
    ],

    examples: [
      {
        title: "startsWith():",
        code: [
          `const str = "Hello world";
          console.log(str.startsWith("Hello")); // true
          console.log(str.startsWith("world")); // false`,
        ],
      },
      {
        title: "endsWith():",
        code: [
          `const str = "Hello world";
          console.log(str.endsWith("world")); // true,
          console.log(str.endsWith("Hello")); // false`,
        ],
      },
    ],
  },

  {
    id: 2,
    question: "Double Bang Operator কি?",
    commonLine: "Hello Developers",
    heading: `আজকে আমরা জানতে চলেছি javaScript এর Double Bang Operator (!!) সম্পর্কে ।`,

    paragraphs: [
      "প্রথম ! (not operator) value টাকে উল্টো করে যার মানে হোল !true → false এবং !false → true হোয়ে যাই ।",
      "এরপর দ্বিতীয় ! আবার সেটা উল্টো করে, মানে একদম মূল Boolean মানে রূপান্তর করে দেয়।",
      "আমরা যখন চেক করতে চাই কোনো value আছে কিনা / ফাঁকা কিনা / null কিনা, তখন !! ব্যবহার করা হয় Boolean রূপে নিশ্চিত করার জন্য।",
    ],

    examples: [
      {
        title: "Double Bang Example:",
        code: [
          `console.log(!!"hello"); // true
          console.log(!!0);      // false
          console.log(!!null);   // false`,
        ],
      },
    ],

    paragraphs2: [
      `javaScript এ Double Bang Operator (!!) এর কাজ হল "truthy" বা "falsy" value কে Boolean এ রূপান্তর করা। আমরা উদাহরণ দেখলে বুজতে পারব ঃ `,
    ],

    examples2: [
      {
        code: [
          `1. !!"hello" // true
           2. !!0 // false
           3. !!null // false
           4. !!undefined // false
           5. !!{} // true
           6. !![] // true
           7. !!"" // false`,
        ],
      },
    ],
  },

  {
    id: 3,
    question: "JavaScript Function length কিভাবে বের করে?",
    commonLine: "Hello Developers",

    heading:
      "আজকে আমরা জানতে চলেছি javaScript এর function length কিভাবে বের করব",

    paragraphs: [
      "সাধারণত আমরা জেনে থাকি যে JS a array এর length বের করা যাই । কিন্ত আজকে আমরা শিখব কিভাবে JS function length বের করে । নিচে code মাধ্যমে বঝান হল ঃ ",
    ],

    examples: [
      {
        title: "এখানে আমাদের length এর মান আসবে  শূন্য (০) ।",
        code: [
          `function my_function() {

          },
          console.log(my_function.length);`,
        ],
      },
      {
        title:
          "এখানে আমাদের length এর মান আসবে ২ । কারণ JavaScript এ number of parameter কে function এর number of length বলা হয়।",

        code: [
          `function my_function(num1, num2) {

          },
          console.log(my_function.length);`,
        ],
      },
    ],
  },

  {
    id: 4,
    question: "JavaScript Promise question solve",
    commonLine: "Hello Developers",

    heading: "আজকে আমরা  javaScript Promise related question solve করব",

    examples: [
      {
        title:
          "q1. user will ask for a number between 0 - 9 and if the number is below 5 resolve if not reject",

        code: [
          ` const ans = new Promise(function(resolve, reject){
              let number = Math.floor(Math.random() * 10)

              if(number < 5) {
                return resolve("5 ar niche");
              } else {
                reject("5 ar opore");
              }
            })

            ans
            .then(function(condition) {
              console.log("success", condition);
            })
            .catch(function(error) {
              console.log("error", error);
            }) `,
        ],
      },
      {
        title:
          "q2. First of come in home after work , Then cook for you , then eat and scrolling facebook , go to sleep ",

        code: [
          `const p1 = new Promise((res, rej) => {
              return res("First of come in home after work.")
            })

            const p2 = p1.then(function(data) {
              console.log(data);

              return new Promise((res, rej) => {
                return res("Then cook for you")
              })
            });

            const p3 = p2.then(function(p2Data) {
              console.log(p2Data);
              
              return new Promise((res, rej) => {
                return res("eat and scrolling facebook")
              })
            });

            const p4 = p3.then(function(p3Data){
              console.log(p3Data);
              
              return new Promise((res, rej) => {
                return res("go to sleep")
              })
            })

            p4.then(function(p4Data) {
              console.log(p4Data);
            })`,
        ],
      },
    ],
  },

  {
    id: 5,
    question: "Node.js কিভাবে আবিস্কার হয়",
    commonLine: "Hello Developers",

    heading: "আজকে জানব কিভাবে node.js আবিস্কার হোয়েছিল ঃ",

    paragraphs: [
      "Ryan Dahl ২০০৮–২০০৯ সালের দিকে ওয়েব ডেভেলপমেন্টে দেখছিলেন যে JavaScript তখন কেবল ব্রাউজারের ভেতরেই চলে, আর backend/server-side কাজের জন্য আলাদা ভাষা যেমন PHP, Python, Ruby, Java ইত্যাদি ব্যবহার করতে হয়।",

      "এই সময় গুগল তাদের নতুন ব্রাউজার Google Chrome রিলিজ করেছিল, আর তার সাথে এসেছিল খুবই ফাস্ট একটি JavaScript ইঞ্জিন — V8 Engine। Ryan Dahl লক্ষ্য করলেন যে এই V8 আসলে ব্রাউজারের বাইরে চালালেও JavaScript execute করতে পারে। তখন তার মাথায় একটা প্রশ্ন এল“যদি আমি এই V8 ইঞ্জিন ব্রাউজারের বাইরে নিয়ে গিয়ে সার্ভার সাইড কোড রান করাই, তাহলে কি JavaScript দিয়ে backend লেখা যাএরপর তিনি কয়েকটা পরীক্ষা-নিরীক্ষা করেন:V8 Engine কে ব্রাউজারের বাইরের একটা প্রোগ্রামে embed করেন।",

      "File system access, networking (HTTP, TCP) ইত্যাদি ফিচার যোগ করতে C++ দিয়ে binding লিখেন।",

      "Event-driven, non-blocking I/O সিস্টেম বানান যাতে সার্ভার একসাথে অনেক request handle করতে পারে (এটাই Node.js এর বড় সাফল্যের কারণ)।২০০৯ সালে এই প্রজেক্টের নাম দেন Node.js। এর ফলে JavaScript প্রথমবারের মতো ব্রাউজারের বাইরে, server-side এ, খুব দ্রুত এবং স্কেলেবল অ্যাপ্লিকেশন বানানোর জন্য জনপ্রিয় হয়ে ওঠে।",

      `মানে, Ryan Dahl এর মূল চিন্তা ছিল:`,
      ". Chrome এর V8 JavaScript Engine ব্যবহার করা",
      ". JavaScript কে ব্রাউজারের বাইরে চালানো",
      ". Backend ডেভেলপমেন্টে JavaScript আনা",
      ,
    ],
  },

  {
    id: 6,
    question: "MySQL কিভাবে আবিস্কার হয়",
    commonLine: "Hello Developers",

    heading: "আজকে আমরা জানব কিভাবে MySQL আবিস্কার হয় ঃ",

    paragraphs: [
      `মাইকেল মন্টি (Michael Monty Widenius) হলেন MySQL ডাটাবেসের অন্যতম প্রতিষ্ঠাতা এবং প্রধান বিকাশকারী।`,

      "MySQL এর ইতিহাস:",

      `1. মাইকেল মন্টি (Michael Monty Widenius): ফিনল্যান্ডের একজন প্রোগ্রামার, যিনি MySQL এর মূল বিকাশকারীদের একজন। “Monty” তার ডাকনাম।`,

      `2. MySQL প্রথম তৈরি হয়েছিল ১৯৯৫ সালে, Monty Widenius এবং তার সহকর্মী David Axmark দ্বারা। তারা একটি ওপেন সোর্স রিলেশনাল ডাটাবেস তৈরি করার জন্য কাজ শুরু করেন, যা হালকা, দ্রুত এবং ব্যবহার সহজ হবে।
      `,

      `3.  MySQL একটি জনপ্রিয় ওপেন সোর্স রিলেশনাল ডাটাবেস ম্যানেজমেন্ট সিস্টেম (RDBMS), যা SQL (Structured Query Language) ব্যবহার করে ডেটা ম্যানেজ করে।`,

      `4. তখনকার বাজারে ডাটাবেস সফটওয়্যারগুলো অনেক সময় বেশি দামি ও জটিল ছিল। Monty চেয়েছিলেন একটি সহজ, দ্রুত, এবং সস্তা (ওপেন সোর্স) ডাটাবেস তৈরি করতে যা ওয়েব অ্যাপ্লিকেশন এবং ছোট-মাঝারি ব্যবসার জন্য উপযুক্ত হবে।`,

      `5. ওয়েব সার্ভার এবং ওয়েব অ্যাপ্লিকেশনের জন্য MySQL দ্রুত জনপ্রিয় হয়ে ওঠে, বিশেষ করে LAMP স্ট্যাকের (Linux, Apache, MySQL, PHP) অংশ হিসেবে।`,

      `6.  ২০১০ সালে Oracle Corporation MySQL কে কিনে নেয়, তখন থেকে MySQL এর কিছু অংশে প্রোপ্রাইটারি ফিচার যোগ করা হয়, তবে এটি এখনও একটি প্রধান ওপেন সোর্স ডাটাবেস।`,

      `7.  Oracle এর অধিগ্রহণের পর Monty Widenius MySQL থেকে সরে এসে MariaDB নামে আরেকটি ওপেন সোর্স ডাটাবেস তৈরি করেন, যা MySQL এর একটি ফর্ক এবং অনেক ক্ষেত্রেই MySQL এর বিকল্প হিসেবে ব্যবহৃত হয়।`,
    ],
  },

  {
    id: 7,
    question: "Unix Epoch কি ?",
    commonLine: "Hello Developers",

    heading: "আজকে আমরা জানব Unix Epoch কিভাবে programing এ কাজ করে",

    paragraphs: [
      "প্রোগ্রামিং-এ সময় মাপার জন্য একটা নির্দিষ্ট শুরুর বিন্দু দরকার হয়। সেই বিন্দুটাকেই বলা হয় Unix Epoch।",

      "📌 Unix Epoch = 1970 সালের ১লা (পহেলা) জানুয়ারি, রাত 00:00:00 (UTC) । এরপর থেকে যত সময় কেটেছে, তা সেকেন্ডে গোনা হয়।",

      "এই সেকেন্ডের মানকেই আমরা বলি:",
      "১. Unix Time",
      "২. Epoch Time",
      "৩. POSIX Time",
      "৪. Timestamp",

      "🕒 উদাহরণঃ ",
      "১. 0 → মানে 1970-01-01 00:00:00 UTC",
      "২. 60 → মানে ১ মিনিট পরে → 1970-01-01 00:01:00 UTC",
    ],

    examples: [
      {
        title: "ধরো JavaScript এ current timestamp বের করতে চাই:",
        code: [
          `// Current Unix timestamp in seconds
          const timestampInSeconds = Math.floor(Date.now() / 1000);
          console.log("Unix Timestamp:", timestampInSeconds); `,
        ],
      },
    ],

    paragraphs2: [
      "Output: 1724846000 (মানে 1970 থেকে এত সেকেন্ড কেটে গেছে",

      "🚀 কেন দরকার?",
      `.সময়কে সংখ্যায় রাখা সহজ → তুলনা (compare) করা যায়।`,
      `.ভিন্ন ভিন্ন সিস্টেমে একই স্ট্যান্ডার্ড বজায় থাকে।`,
      `.Database, Server log, Authentication system—সব জায়গায় timestamp ব্যবহার হয়।`,

      "📢 সংক্ষেপে: Unix Epoch হলো সময় মাপার জন্য প্রোগ্রামিং দুনিয়ার ঘড়ির শুরুর পয়েন্ট।",
    ],
  },

  {
    id: 8,
    question: "What is TRUNCATE in SQL ?",
    commonLine: "Hello Developers",

    heading: "আজকে আমরা জানব TRUNCATE কিভাবে SQL এ কাজ করে",

    paragraphs: [
      `আমরা যখন SQL এ CRUD Oparation চালাই তখন কোণ Table থেকে সব Data মুছে ফেলতে আমরা DELETE ব্যাবহার করে থাকি । পরে যখন আবার সেই Table এ আবার Data Input করতে যাই তখন একটা বিশেষ জিনিস এর change দেখা যাই। আর সেটা হোল "Data মুছে ফেলার আগে যেই id সবার Last এ ছিল new Data input করলে সেই id থেকে 1 increase hoe চলে আসবে ।"`,

      "Example:",

      " suppose amder কাছে id ase 1,2,3. akon SQL ar maddome jodi ai id এবং ai id এর সব Data Delete kore dai and then new Data Insert kori tahole amder abar id no. 1,2,3 না এসে 4,5,6 আসবে।",

      "🚀 এই problem ta fix korar jonnoi মুলত TRUNCATE ব্যাবহার করা হয়",
    ],
  },
];
