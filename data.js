// UNECON Career Guidance - Data File

// List of all 29 specializations
const specializations = [
    "Applied Mathematics and Informatics",
    "Information Systems and Technologies",
    "Applied Informatics",
    "Information Security",
    "Quality Management",
    "Economics",
    "Management",
    "Human Resources Management",
    "State and Municipal Administration",
    "Business Informatics",
    "Trade Business",
    "Sociology",
    "Social Work",
    "Jurisprudence",
    "Foreign Regional Studies",
    "International Relations",
    "Advertising and Public Relations",
    "Service",
    "Tourism",
    "Hotel Management",
    "Linguistics",
    "Economic Security",
    "Customs Affairs",
    "Food Technology from Plant Raw Materials",
    "Economics and Accounting (by industry)",
    "Operational Activities in Logistics",
    "Tourism and Hospitality",
    "Heat Supply and Heat Engineering Equipment",
    "Finance and Credit"
];

// Questions with answers and probability adjustments
const questions = [
    {
        id: 1,
        text: "You find a broken coffee machine in the office kitchen. What catches your eye first?",
        answers: [
            {
                text: "⚙️ How the parts connect and what pattern the problem follows.",
                probabilities: [7, 6, 6, 5, 4, 2, 2, 0, 1, 5, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 2, 2, 0, 6, 2]
            },
            {
                text: "🔒 Whether this could create bigger risks or security issues.",
                probabilities: [3, 4, 3, 8, 5, 1, 3, 1, 4, 3, 2, 0, 0, 5, 1, 2, 0, 1, 0, 1, 0, 8, 6, 4, 2, 2, 1, 4, 3]
            },
            {
                text: "☕ The people waiting for their morning coffee and their frustration.",
                probabilities: [0, 1, 1, 1, 3, 2, 5, 7, 6, 3, 4, 6, 8, 3, 2, 3, 4, 7, 5, 6, 2, 2, 2, 3, 2, 4, 6, 3, 2]
            },
            {
                text: "🔧 How to fix it fastest and get everything running smoothly again.",
                probabilities: [2, 3, 3, 2, 6, 4, 7, 3, 5, 7, 5, 1, 1, 2, 1, 2, 2, 4, 3, 4, 1, 3, 4, 5, 5, 8, 4, 5, 4]
            }
        ]
    },
    {
        id: 2,
        text: "Your boss makes a decision you disagree with. What's your first thought?",
        answers: [
            {
                text: "⚖️ Is this even legal? What are the rules about this?",
                probabilities: [1, 1, 1, 4, 4, 3, 3, 2, 7, 2, 2, 3, 2, 8, 4, 5, 2, 1, 1, 1, 2, 6, 7, 3, 3, 2, 1, 2, 4]
            },
            {
                text: "💰 Does this make financial sense? Is money being wasted?",
                probabilities: [3, 2, 2, 2, 4, 8, 6, 3, 5, 6, 6, 2, 1, 2, 2, 3, 2, 2, 3, 3, 1, 5, 4, 3, 7, 5, 3, 3, 8]
            },
            {
                text: "📚 Why did they decide this? What's the history behind it?",
                probabilities: [0, 0, 0, 1, 1, 2, 2, 3, 4, 1, 2, 7, 4, 4, 8, 7, 4, 3, 5, 4, 6, 2, 3, 1, 1, 1, 5, 1, 2]
            },
            {
                text: "💬 How will people react to this? Was it explained well?",
                probabilities: [1, 2, 2, 2, 3, 3, 6, 7, 5, 4, 5, 5, 5, 3, 4, 6, 8, 5, 4, 5, 5, 3, 3, 2, 3, 3, 4, 2, 3]
            }
        ]
    },
    {
        id: 3,
        text: "You get unlimited money to solve one world problem. What excites you most?",
        answers: [
            {
                text: "🚀 Building smart technology that can scale to millions of people.",
                probabilities: [8, 7, 7, 5, 3, 3, 4, 1, 2, 6, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 2, 4, 2, 3, 1, 5, 3]
            },
            {
                text: "📈 Creating a business model that's profitable and sustainable forever.",
                probabilities: [2, 2, 2, 2, 4, 8, 7, 3, 6, 6, 7, 2, 2, 2, 3, 4, 2, 3, 4, 4, 1, 5, 4, 4, 7, 5, 4, 3, 8]
            },
            {
                text: "🌍 Bringing different cultures together and helping them understand each other.",
                probabilities: [0, 1, 1, 1, 2, 2, 4, 6, 5, 2, 3, 7, 8, 3, 8, 8, 5, 6, 7, 6, 7, 2, 3, 1, 1, 2, 7, 1, 2]
            },
            {
                text: "🛡️ Setting up safety systems that protect people from harm.",
                probabilities: [1, 2, 2, 7, 6, 3, 4, 4, 7, 3, 3, 4, 5, 8, 3, 4, 2, 3, 2, 2, 2, 8, 7, 5, 4, 3, 2, 4, 4]
            }
        ]
    },
    {
        id: 4,
        text: "In team meetings, you naturally:",
        answers: [
            {
                text: "🧠 Spot the holes in people's logic and suggest better options.",
                probabilities: [7, 6, 6, 5, 5, 5, 4, 2, 3, 6, 3, 2, 1, 3, 2, 2, 2, 1, 1, 2, 1, 4, 3, 4, 5, 4, 2, 5, 5]
            },
            {
                text: "🤝 Make sure everyone gets to speak and feels heard.",
                probabilities: [1, 2, 2, 2, 3, 2, 7, 8, 5, 3, 4, 6, 7, 3, 5, 6, 6, 6, 5, 6, 5, 2, 2, 2, 2, 3, 6, 2, 2]
            },
            {
                text: "🎨 Paint a picture with words that makes complex ideas simple.",
                probabilities: [1, 2, 3, 1, 2, 2, 3, 4, 2, 4, 5, 4, 3, 1, 5, 4, 8, 5, 7, 6, 6, 1, 1, 3, 2, 2, 7, 2, 2]
            },
            {
                text: "📊 Figure out what's actually possible with the time and money we have.",
                probabilities: [3, 4, 3, 3, 6, 6, 7, 4, 5, 7, 6, 2, 2, 3, 2, 3, 3, 4, 4, 5, 2, 5, 5, 5, 7, 8, 4, 6, 6]
            }
        ]
    },
    {
        id: 5,
        text: "You notice a weird pattern nobody else sees. You immediately want to:",
        answers: [
            {
                text: "🔬 Test it with numbers and see if it holds up.",
                probabilities: [8, 6, 6, 4, 4, 4, 2, 1, 2, 5, 2, 3, 1, 1, 2, 2, 1, 1, 1, 1, 2, 3, 2, 4, 4, 2, 1, 5, 4]
            },
            {
                text: "💡 Think about how to make money from this discovery.",
                probabilities: [2, 3, 3, 3, 3, 7, 7, 2, 3, 7, 8, 1, 1, 2, 2, 3, 5, 4, 4, 4, 2, 4, 3, 3, 5, 5, 4, 3, 7]
            },
            {
                text: "👥 Wonder what this says about society and human behavior.",
                probabilities: [1, 1, 1, 1, 1, 3, 2, 3, 4, 2, 3, 8, 4, 3, 8, 7, 4, 2, 5, 3, 7, 2, 3, 1, 2, 1, 4, 1, 3]
            },
            {
                text: "📝 Write it down carefully so you can prove it later.",
                probabilities: [4, 5, 5, 6, 7, 3, 4, 3, 4, 4, 3, 3, 2, 6, 2, 3, 2, 3, 2, 3, 3, 7, 7, 6, 6, 5, 2, 5, 4]
            }
        ]
    },
    {
        id: 6,
        text: "When you read something complicated, what grabs you?",
        answers: [
            {
                text: "📖 How precise the language is and whether the argument makes sense.",
                probabilities: [5, 4, 4, 4, 5, 4, 3, 2, 4, 4, 3, 3, 2, 7, 5, 5, 4, 2, 2, 2, 8, 4, 4, 3, 4, 3, 2, 3, 4]
            },
            {
                text: "📊 The data, numbers and proof they're showing.",
                probabilities: [7, 6, 6, 4, 5, 7, 4, 2, 4, 6, 4, 4, 2, 3, 3, 3, 2, 2, 2, 3, 2, 5, 4, 5, 7, 4, 2, 5, 7]
            },
            {
                text: "❤️ The personal stories and emotions behind the facts.",
                probabilities: [0, 1, 1, 1, 2, 1, 3, 7, 3, 2, 3, 7, 8, 2, 6, 5, 6, 7, 6, 6, 7, 2, 2, 2, 2, 2, 6, 2, 2]
            },
            {
                text: "🌐 How different cultures see this topic in their own way.",
                probabilities: [1, 2, 2, 2, 2, 3, 4, 4, 4, 3, 5, 5, 4, 3, 8, 8, 5, 5, 7, 6, 7, 3, 5, 3, 2, 4, 7, 2, 3]
            }
        ]
    },
    {
        id: 7,
        text: "Your family leaves you a failing business. First thing you do?",
        answers: [
            {
                text: "🔍 Check every system to find what's broken and where money is leaking.",
                probabilities: [4, 6, 6, 7, 7, 5, 6, 3, 4, 7, 5, 2, 1, 4, 1, 2, 2, 3, 3, 4, 1, 7, 5, 5, 7, 6, 3, 5, 6]
            },
            {
                text: "👥 Talk to the employees — understand what they're feeling and what they know.",
                probabilities: [1, 2, 2, 2, 4, 3, 7, 8, 5, 4, 4, 6, 7, 2, 3, 4, 5, 6, 5, 6, 3, 2, 2, 3, 3, 4, 6, 3, 3]
            },
            {
                text: "📈 Study the market — who's winning and what gaps can we fill?",
                probabilities: [2, 3, 3, 2, 3, 7, 7, 2, 3, 7, 8, 3, 1, 2, 4, 5, 6, 5, 6, 6, 3, 4, 4, 4, 6, 6, 6, 3, 7]
            },
            {
                text: "⚖️ Make sure we're following all laws and won't get in legal trouble.",
                probabilities: [1, 2, 2, 5, 5, 4, 5, 3, 6, 4, 4, 2, 2, 8, 2, 3, 2, 3, 3, 3, 1, 7, 7, 5, 6, 4, 3, 4, 5]
            }
        ]
    },
    {
        id: 8,
        text: "Foreign guests are visiting. What interests you most?",
        answers: [
            {
                text: "✨ Making sure everything runs perfectly — from airport pickup to dinner.",
                probabilities: [2, 3, 3, 3, 6, 3, 6, 4, 5, 5, 5, 2, 2, 3, 4, 5, 4, 7, 7, 8, 3, 3, 5, 4, 4, 8, 8, 3, 3]
            },
            {
                text: "🌏 Learning their customs and what's considered polite in their culture.",
                probabilities: [0, 1, 1, 2, 2, 2, 4, 5, 6, 2, 4, 6, 4, 4, 8, 8, 5, 6, 6, 6, 7, 3, 6, 2, 2, 3, 6, 1, 2]
            },
            {
                text: "💼 Exploring if this could lead to business deals or partnerships.",
                probabilities: [2, 3, 3, 3, 3, 7, 7, 3, 5, 7, 8, 2, 1, 3, 5, 6, 5, 4, 5, 5, 3, 4, 5, 3, 5, 5, 5, 3, 7]
            },
            {
                text: "🤝 Creating real human connections despite the language barrier.",
                probabilities: [0, 1, 1, 1, 2, 2, 4, 6, 4, 2, 3, 6, 7, 2, 6, 6, 6, 7, 7, 7, 8, 2, 3, 2, 2, 2, 7, 1, 2]
            }
        ]
    },
    {
        id: 9,
        text: "Two experts disagree. What do you do?",
        answers: [
            {
                text: "🧪 Build a test to see whose prediction actually works better.",
                probabilities: [8, 7, 7, 5, 4, 5, 3, 1, 2, 6, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 4, 3, 4, 4, 3, 1, 6, 5]
            },
            {
                text: "📜 Look up what the law or official rules say about this.",
                probabilities: [1, 2, 2, 4, 5, 3, 3, 2, 6, 3, 3, 3, 2, 8, 4, 5, 2, 2, 2, 2, 3, 7, 7, 4, 4, 3, 2, 3, 4]
            },
            {
                text: "📚 Research the history — why do people see this so differently?",
                probabilities: [1, 1, 1, 1, 2, 3, 3, 4, 4, 2, 3, 8, 5, 4, 8, 7, 4, 3, 4, 3, 6, 2, 3, 2, 2, 2, 4, 2, 3]
            },
            {
                text: "🎯 See which option gets better results in the real world.",
                probabilities: [3, 4, 4, 4, 7, 6, 7, 4, 5, 7, 6, 2, 2, 3, 2, 3, 3, 5, 4, 5, 2, 5, 5, 6, 7, 8, 4, 6, 6]
            }
        ]
    },
    {
        id: 10,
        text: "You're asked to fix a government service. What excites you?",
        answers: [
            {
                text: "💻 Redesigning how information flows so it's easier to use.",
                probabilities: [5, 7, 7, 4, 5, 3, 5, 3, 5, 7, 3, 3, 3, 2, 2, 3, 5, 6, 4, 5, 3, 3, 3, 3, 3, 4, 5, 4, 3]
            },
            {
                text: "🫶 Making sure it actually helps the people who need it most.",
                probabilities: [0, 1, 1, 2, 3, 3, 5, 6, 7, 3, 3, 8, 8, 5, 5, 5, 4, 7, 4, 4, 4, 3, 3, 2, 2, 3, 4, 2, 3]
            },
            {
                text: "💰 Figuring out how to do it cheaper without losing quality.",
                probabilities: [4, 4, 4, 3, 5, 8, 7, 3, 6, 7, 5, 2, 2, 3, 2, 3, 2, 3, 3, 4, 1, 5, 4, 4, 8, 6, 3, 4, 8]
            },
            {
                text: "✅ Building in proper checks so nothing goes wrong.",
                probabilities: [2, 3, 3, 6, 7, 4, 5, 3, 7, 4, 4, 3, 3, 8, 3, 4, 2, 4, 3, 4, 2, 7, 7, 6, 6, 5, 3, 5, 5]
            }
        ]
    },
    {
        id: 11,
        text: "You see someone being treated unfairly. What hits you first?",
        answers: [
            {
                text: "⚖️ This breaks the rules — there's a principle being violated here.",
                probabilities: [5, 4, 4, 5, 6, 4, 4, 3, 5, 4, 3, 4, 4, 7, 3, 4, 2, 3, 2, 3, 3, 6, 6, 4, 5, 4, 2, 4, 4]
            },
            {
                text: "💔 That person must feel awful — I can feel their pain.",
                probabilities: [0, 1, 1, 1, 2, 2, 4, 7, 4, 2, 2, 7, 8, 4, 5, 5, 4, 7, 5, 6, 4, 2, 2, 2, 2, 2, 6, 2, 2]
            },
            {
                text: "📉 This is inefficient — resources aren't being used right.",
                probabilities: [4, 4, 4, 3, 5, 7, 7, 4, 6, 7, 5, 5, 4, 4, 3, 4, 3, 3, 3, 4, 2, 5, 4, 4, 7, 6, 3, 4, 7]
            },
            {
                text: "📋 I need to document this and build a case to fix it.",
                probabilities: [2, 3, 3, 5, 5, 3, 5, 4, 7, 4, 3, 6, 5, 8, 4, 5, 5, 4, 3, 3, 3, 6, 6, 4, 4, 4, 3, 3, 4]
            }
        ]
    },
    {
        id: 12,
        text: "You're learning something totally new. What feels natural?",
        answers: [
            {
                text: "🧩 Breaking it into small pieces and mastering each one.",
                probabilities: [7, 6, 6, 5, 6, 5, 4, 2, 3, 5, 3, 3, 2, 4, 3, 3, 2, 2, 2, 3, 4, 5, 4, 5, 6, 4, 2, 6, 5]
            },
            {
                text: "🎢 Jumping in and learning by trying stuff, even if I fail.",
                probabilities: [3, 4, 5, 4, 5, 4, 6, 5, 5, 6, 6, 4, 5, 4, 5, 5, 6, 7, 6, 7, 5, 4, 5, 6, 5, 3, 5, 6, 4]
            },
            {
                text: "👨‍🏫 Finding someone who already knows it to teach me.",
                probabilities: [1, 2, 2, 2, 3, 3, 5, 6, 4, 3, 4, 5, 6, 3, 4, 5, 5, 6, 5, 6, 4, 2, 3, 3, 3, 3, 5, 3, 3]
            },
            {
                text: "📚 Reading everything written about it first before starting.",
                probabilities: [6, 5, 4, 4, 5, 5, 3, 3, 5, 4, 3, 4, 3, 6, 6, 5, 4, 2, 3, 2, 7, 5, 4, 4, 5, 3, 3, 4, 5]
            }
        ]
    },
    {
        id: 13,
        text: "At a party, you naturally gravitate toward:",
        answers: [
            {
                text: "💬 Deep one-on-one conversations with interesting people.",
                probabilities: [2, 3, 3, 2, 3, 4, 5, 7, 5, 4, 4, 7, 8, 5, 6, 6, 5, 6, 5, 6, 6, 3, 3, 3, 3, 3, 5, 3, 4]
            },
            {
                text: "👀 Observing group dynamics and how people interact.",
                probabilities: [1, 2, 2, 3, 4, 3, 5, 6, 5, 4, 4, 8, 6, 4, 7, 7, 6, 5, 5, 5, 5, 3, 3, 2, 3, 3, 5, 2, 3]
            },
            {
                text: "🤝 Networking and making connections that could be useful.",
                probabilities: [2, 3, 3, 3, 4, 6, 7, 5, 6, 7, 8, 3, 3, 4, 5, 6, 7, 5, 6, 6, 4, 5, 5, 4, 5, 5, 6, 4, 7]
            },
            {
                text: "🎉 Making sure everyone is comfortable and having a good time.",
                probabilities: [1, 2, 2, 2, 4, 3, 6, 8, 6, 4, 5, 6, 7, 3, 4, 5, 6, 8, 7, 8, 5, 3, 3, 3, 3, 4, 7, 3, 3]
            }
        ]
    },
    {
        id: 14,
        text: "When faced with a complex problem, your first instinct is to:",
        answers: [
            {
                text: "🧩 Break it down into logical components and analyze each part.",
                probabilities: [8, 7, 7, 6, 6, 6, 5, 3, 4, 6, 4, 3, 2, 5, 3, 4, 3, 3, 3, 4, 5, 6, 5, 5, 6, 5, 3, 6, 6]
            },
            {
                text: "💭 Talk it through with others to get diverse perspectives.",
                probabilities: [1, 2, 3, 2, 4, 4, 7, 7, 6, 5, 5, 7, 7, 4, 6, 7, 7, 6, 6, 6, 5, 3, 3, 3, 4, 4, 6, 3, 4]
            },
            {
                text: "🔍 Look for similar problems that have been solved before.",
                probabilities: [4, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 3, 6, 5, 5, 4, 4, 4, 5, 6, 5, 5, 5, 6, 5, 4, 5, 5]
            },
            {
                text: "🧪 Try different approaches and see what works.",
                probabilities: [5, 6, 6, 5, 6, 5, 6, 4, 5, 7, 6, 4, 4, 4, 4, 4, 5, 6, 5, 6, 4, 5, 5, 6, 5, 7, 5, 7, 5]
            }
        ]
    },
    {
        id: 15,
        text: "What motivates you most in your work?",
        answers: [
            {
                text: "🧩 Solving challenging intellectual puzzles and problems.",
                probabilities: [8, 7, 7, 6, 5, 5, 4, 2, 3, 6, 3, 3, 2, 5, 3, 4, 3, 2, 2, 3, 6, 6, 5, 5, 5, 4, 2, 6, 6]
            },
            {
                text: "🌟 Making a tangible positive impact on people's lives.",
                probabilities: [1, 2, 2, 2, 4, 3, 5, 8, 7, 3, 4, 8, 9, 6, 6, 6, 5, 8, 6, 7, 4, 4, 4, 4, 3, 4, 6, 3, 3]
            },
            {
                text: "🏗️ Building something successful and seeing it grow.",
                probabilities: [3, 4, 4, 3, 5, 7, 8, 4, 6, 7, 8, 3, 3, 4, 4, 5, 6, 5, 6, 6, 3, 5, 5, 5, 6, 6, 6, 5, 7]
            },
            {
                text: "🎓 Achieving mastery and becoming an expert in your field.",
                probabilities: [7, 6, 6, 7, 6, 6, 5, 4, 5, 6, 4, 4, 3, 7, 5, 5, 4, 4, 4, 5, 8, 6, 6, 6, 6, 5, 4, 6, 6]
            }
        ]
    },
    {
        id: 16,
        text: "When reading news about a major event, what catches your attention?",
        answers: [
            {
                text: "📊 The data, statistics and factual details.",
                probabilities: [7, 6, 6, 5, 5, 7, 5, 2, 4, 6, 4, 4, 2, 4, 4, 4, 3, 2, 3, 3, 3, 6, 5, 5, 7, 4, 3, 5, 7]
            },
            {
                text: "❤️ The human stories and personal experiences involved.",
                probabilities: [1, 2, 2, 2, 3, 2, 4, 8, 4, 3, 4, 8, 8, 4, 7, 6, 7, 7, 7, 7, 7, 3, 3, 3, 3, 3, 7, 2, 3]
            },
            {
                text: "🌐 The political and economic implications.",
                probabilities: [2, 3, 3, 3, 4, 7, 6, 3, 7, 6, 6, 5, 3, 6, 6, 7, 5, 3, 4, 4, 4, 6, 5, 4, 6, 5, 4, 4, 7]
            },
            {
                text: "🗺️ How different countries and cultures are responding.",
                probabilities: [1, 2, 2, 2, 3, 3, 4, 4, 5, 3, 4, 6, 5, 4, 8, 8, 6, 5, 7, 6, 7, 4, 6, 3, 3, 4, 7, 2, 3]
            }
        ]
    },
    {
        id: 17,
        text: "In a crisis situation, your natural role is to:",
        answers: [
            {
                text: "🧭 Stay calm and create a logical action plan.",
                probabilities: [6, 7, 7, 7, 7, 6, 7, 4, 6, 7, 5, 3, 3, 6, 4, 5, 4, 5, 5, 6, 4, 7, 6, 5, 6, 7, 5, 6, 6]
            },
            {
                text: "🫂 Support people emotionally and keep morale up.",
                probabilities: [1, 2, 2, 2, 3, 3, 6, 8, 6, 3, 4, 7, 8, 4, 5, 6, 6, 8, 6, 7, 5, 3, 3, 3, 3, 3, 7, 3, 3]
            },
            {
                text: "⚡ Take charge and make quick decisions.",
                probabilities: [3, 4, 4, 5, 6, 6, 8, 5, 7, 7, 7, 4, 4, 6, 5, 6, 5, 6, 6, 7, 4, 7, 6, 5, 6, 7, 6, 6, 7]
            },
            {
                text: "🔍 Gather information and assess all options before acting.",
                probabilities: [7, 6, 6, 6, 6, 6, 5, 4, 6, 6, 4, 5, 4, 7, 6, 6, 5, 4, 4, 4, 6, 6, 6, 5, 6, 5, 4, 5, 6]
            }
        ]
    },
    {
        id: 18,
        text: "What type of work environment appeals to you most?",
        answers: [
            {
                text: "📋 Structured with clear procedures and expectations.",
                probabilities: [5, 6, 6, 6, 7, 5, 6, 4, 7, 5, 5, 3, 3, 7, 4, 5, 4, 5, 5, 6, 5, 7, 7, 6, 7, 6, 5, 6, 6]
            },
            {
                text: "👥 Collaborative with lots of teamwork and interaction.",
                probabilities: [2, 3, 3, 3, 5, 4, 7, 8, 6, 5, 6, 7, 8, 4, 6, 7, 7, 7, 7, 7, 6, 4, 4, 4, 4, 5, 7, 4, 4]
            },
            {
                text: "⚡ Dynamic and fast-paced with new challenges daily.",
                probabilities: [4, 5, 5, 5, 5, 6, 7, 5, 6, 7, 8, 5, 5, 5, 5, 6, 7, 6, 7, 7, 5, 6, 6, 5, 6, 7, 7, 5, 7]
            },
            {
                text: "🚀 Independent where you can work autonomously.",
                probabilities: [7, 6, 6, 5, 4, 5, 4, 3, 4, 5, 3, 5, 4, 6, 6, 5, 4, 3, 3, 3, 7, 5, 5, 6, 5, 4, 3, 6, 5]
            }
        ]
    },
    {
        id: 19,
        text: "When learning about a new technology or system, you prefer to:",
        answers: [
            {
                text: "🔬 Understand the theoretical principles behind how it works.",
                probabilities: [8, 7, 6, 6, 5, 6, 4, 3, 4, 6, 3, 4, 3, 6, 5, 5, 4, 3, 3, 4, 7, 5, 5, 5, 6, 4, 3, 7, 6]
            },
            {
                text: "🎯 See practical examples of its real-world applications.",
                probabilities: [5, 6, 7, 5, 6, 6, 7, 5, 6, 7, 7, 5, 5, 5, 5, 5, 6, 6, 6, 6, 4, 6, 6, 6, 6, 7, 6, 6, 6]
            },
            {
                text: "🛠️ Experiment with it hands-on to figure it out yourself.",
                probabilities: [6, 7, 7, 6, 6, 5, 6, 4, 5, 7, 6, 4, 4, 4, 4, 5, 5, 5, 5, 6, 5, 5, 5, 7, 5, 6, 5, 7, 5]
            },
            {
                text: "👥 Learn how it impacts people and organizations.",
                probabilities: [2, 3, 3, 3, 5, 5, 7, 7, 7, 6, 6, 7, 7, 5, 6, 7, 7, 6, 6, 6, 5, 4, 5, 4, 5, 5, 7, 4, 5]
            }
        ]
    },
    {
        id: 20,
        text: "What would you find most rewarding in your career?",
        answers: [
            {
                text: "💡 Creating innovative solutions to complex problems.",
                probabilities: [8, 8, 8, 7, 6, 6, 6, 3, 5, 8, 5, 4, 3, 5, 4, 5, 5, 4, 4, 5, 5, 6, 5, 6, 6, 6, 4, 7, 7]
            },
            {
                text: "🌟 Helping people overcome challenges and improve their lives.",
                probabilities: [1, 2, 2, 3, 4, 3, 6, 9, 7, 4, 4, 8, 9, 6, 6, 6, 6, 8, 7, 7, 5, 4, 4, 4, 4, 4, 7, 3, 4]
            },
            {
                text: "🏆 Building a successful and profitable enterprise.",
                probabilities: [3, 4, 4, 4, 5, 8, 8, 4, 7, 8, 9, 4, 3, 5, 5, 6, 7, 6, 7, 7, 4, 6, 6, 6, 7, 7, 7, 5, 8]
            },
            {
                text: "🎓 Achieving recognition as an expert in your field.",
                probabilities: [7, 6, 6, 6, 6, 6, 5, 4, 5, 6, 4, 5, 4, 7, 7, 6, 5, 4, 5, 5, 8, 6, 6, 6, 6, 5, 5, 6, 6]
            }
        ]
    }
];

// Specialization descriptions (shortened for file size - full versions in separate file)
const specializationData = {
    "Applied Mathematics and Informatics": {
        description: "Applied Mathematics and Informatics represents the elegant fusion of pure mathematical theory with cutting-edge computational practice. As a specialist in this field, you become a master of abstract thinking who transforms complex real-world problems into solvable mathematical models.",
        careers: [
            "Data Scientist / Machine Learning Engineer ($120,000-$250,000+)",
            "Quantitative Analyst in Finance ($150,000-$500,000+)",
            "Research Scientist in AI ($150,000-$300,000+)",
            "Cryptographer / Security Analyst ($100,000-$200,000+)",
            "Operations Research Analyst ($80,000-$140,000)"
        ]
    },
    "Information Systems and Technologies": {
        description: "Information Systems and Technologies specialists are the architects of digital transformation, designing and implementing the complex technological infrastructures that enable modern organizations to function, compete, and innovate.",
        careers: [
            "IT Systems Architect / Solutions Architect ($130,000-$200,000+)",
            "Database Administrator / Data Engineer ($90,000-$200,000)",
            "Cloud Computing Specialist ($100,000-$180,000+)",
            "Enterprise Systems Consultant ($80,000-$150,000+)",
            "IT Project Manager ($100,000-$180,000+)"
        ]
    },
    "Applied Informatics": {
        description: "Applied Informatics is the discipline of translating computational theory into practical software solutions that directly address real-world problems across all sectors of society.",
        careers: [
            "Full-Stack Software Developer ($90,000-$250,000+)",
            "Mobile Application Developer ($85,000-$140,000)",
            "Software Quality Assurance Engineer ($70,000-$120,000)",
            "Business Application Developer ($75,000-$130,000)",
            "Technical Product Manager ($110,000-$180,000+)"
        ]
    },
    "Information Security": {
        description: "Information Security professionals stand as the guardians of our digital civilization, protecting the data, systems, and networks from an ever-evolving landscape of cyber threats.",
        careers: [
            "Cybersecurity Analyst ($60,000-$140,000)",
            "Penetration Tester / Ethical Hacker ($85,000-$150,000+)",
            "Security Architect / CISO ($120,000-$400,000+)",
            "Incident Response Specialist ($80,000-$140,000+)",
            "Security Consultant ($85,000-$160,000+)"
        ]
    },
    "Quality Management": {
        description: "Quality Management professionals are the architects of excellence, designing and implementing systematic approaches that ensure products, services, and processes consistently meet or exceed defined standards.",
        careers: [
            "Quality Manager / QA Director ($75,000-$200,000+)",
            "Six Sigma Black Belt ($90,000-$180,000)",
            "Regulatory Affairs Specialist ($70,000-$130,000)",
            "Quality Engineer ($70,000-$150,000)",
            "Supply Chain Quality Manager ($80,000-$130,000)"
        ]
    },
    "Economics": {
        description: "Economics is the science of human decision-making under conditions of scarcity, analyzing how individuals, businesses, and nations allocate limited resources to satisfy unlimited wants.",
        careers: [
            "Economic Analyst / Policy Analyst ($50,000-$120,000+)",
            "Financial Analyst / Investment Analyst ($70,000-$120,000+)",
            "Data Scientist ($100,000-$200,000+)",
            "Economic Consultant ($70,000-$300,000+)",
            "Professor / Researcher ($80,000-$200,000+)"
        ]
    },
    "Management": {
        description: "Management is the art and science of coordinating human, financial, and material resources to achieve organizational objectives efficiently and effectively.",
        careers: [
            "General Manager / Business Unit Leader ($100,000-$500,000+)",
            "Management Consultant ($80,000-$2,000,000+)",
            "Operations Manager ($70,000-$200,000+)",
            "Project Manager ($70,000-$170,000+)",
            "Entrepreneur / Business Owner (Variable)"
        ]
    },
    "Human Resources Management": {
        description: "Human Resources Management represents the strategic approach to cultivating an organization's most valuable asset: its people.",
        careers: [
            "HR Manager / Director ($70,000-$400,000+)",
            "Talent Acquisition Manager ($80,000-$140,000+)",
            "Learning and Development Manager ($70,000-$120,000)",
            "Compensation and Benefits Manager ($80,000-$140,000+)",
            "HR Consultant / Business Partner ($70,000-$130,000+)"
        ]
    },
    "State and Municipal Administration": {
        description: "State and Municipal Administration is the discipline of managing public sector organizations and delivering government services that impact millions of citizens daily.",
        careers: [
            "City Manager / Municipal Administrator ($80,000-$300,000+)",
            "State Agency Director ($100,000-$200,000+)",
            "Budget Analyst / Director ($70,000-$150,000)",
            "Policy Analyst ($45,000-$110,000+)",
            "Urban Planner / Development Director ($50,000-$130,000)"
        ]
    },
    "Business Informatics": {
        description: "Business Informatics represents the strategic convergence of information technology and business management—a discipline uniquely positioned at the intersection of innovation and organizational effectiveness.",
        careers: [
            "Digital Transformation Manager ($100,000-$220,000+)",
            "Enterprise Architect ($120,000-$200,000+)",
            "Business Intelligence Manager ($90,000-$180,000+)",
            "IT Strategy Consultant ($90,000-$160,000+)",
            "CIO / CTO ($150,000-$600,000+)"
        ]
    },
    "Trade Business": {
        description: "Trade Business specialists are the professionals who understand the complex mechanics of commerce—how products and services move from producers to consumers through sophisticated distribution networks.",
        careers: [
            "Retail Manager / Store Manager ($45,000-$180,000+)",
            "Purchasing Manager ($70,000-$150,000+)",
            "E-commerce Manager ($70,000-$180,000+)",
            "Supply Chain Coordinator ($55,000-$120,000)",
            "Business Development Manager ($60,000-$150,000+)"
        ]
    },
    "Sociology": {
        description: "Sociology is the scientific study of human society, social behavior, institutions, and relationships—examining how social forces shape individual lives.",
        careers: [
            "Social Research Analyst ($45,000-$130,000+)",
            "Policy Analyst / Program Evaluator ($50,000-$120,000+)",
            "Market Research Analyst ($50,000-$120,000+)",
            "Organizational Development Consultant ($70,000-$120,000+)",
            "Non-Profit Program Manager ($50,000-$120,000+)"
        ]
    },
    "Social Work": {
        description: "Social Work is the profession dedicated to enhancing human wellbeing and helping people meet basic needs, with particular attention to vulnerable populations.",
        careers: [
            "Clinical Social Worker / LCSW ($50,000-$110,000+)",
            "Medical Social Worker ($50,000-$90,000)",
            "Child and Family Social Worker ($40,000-$80,000)",
            "School Social Worker ($45,000-$70,000)",
            "Community Organizer ($40,000-$75,000+)"
        ]
    },
    "Jurisprudence": {
        description: "Jurisprudence—the study and practice of law—is the discipline that governs human behavior through systems of rules, adjudicates disputes, and protects rights.",
        careers: [
            "Attorney / Lawyer ($45,000-$2,000,000+)",
            "Corporate Counsel ($100,000-$1,000,000+)",
            "Judge / Judicial Officer ($80,000-$280,000+)",
            "Government Attorney ($50,000-$150,000+)",
            "Legal Consultant / Compliance Officer ($70,000-$300,000+)"
        ]
    },
    "Foreign Regional Studies": {
        description: "Foreign Regional Studies is the interdisciplinary examination of specific geographic regions, combining language proficiency, historical understanding, cultural analysis, and political economy.",
        careers: [
            "Foreign Service Officer / Diplomat ($60,000-$200,000+)",
            "International Business Development Manager ($80,000-$180,000+)",
            "Intelligence Analyst ($60,000-$160,000+)",
            "International Development Professional ($60,000-$150,000+)",
            "Regional Journalist ($60,000-$180,000+)"
        ]
    },
    "International Relations": {
        description: "International Relations is the study and practice of relations between nations, examining how states, organizations, and transnational forces interact in the global system.",
        careers: [
            "Diplomat / Foreign Affairs Officer ($60,000-$200,000+)",
            "International Organization Professional ($50,000-$200,000+)",
            "Policy Analyst / Think Tank Researcher ($50,000-$150,000+)",
            "International Security Analyst ($70,000-$180,000+)",
            "Corporate Global Affairs Manager ($90,000-$200,000+)"
        ]
    },
    "Advertising and Public Relations": {
        description: "Advertising and Public Relations represent the strategic communication disciplines that shape perceptions, influence behavior, build brands, and manage reputations.",
        careers: [
            "Advertising Account Executive ($45,000-$150,000+)",
            "Creative Director / Copywriter ($50,000-$250,000+)",
            "Public Relations Manager ($60,000-$300,000+)",
            "Digital Marketing Manager ($55,000-$140,000)",
            "Brand Manager / Strategist ($70,000-$150,000+)"
        ]
    },
    "Service": {
        description: "Service is the discipline focused on designing, delivering, and managing experiences that meet customer needs while creating value for organizations.",
        careers: [
            "Customer Experience Manager ($65,000-$150,000+)",
            "Service Operations Manager ($50,000-$140,000+)",
            "Guest Relations Manager ($50,000-$130,000+)",
            "Service Quality Manager ($55,000-$140,000+)",
            "Hospitality General Manager ($70,000-$200,000+)"
        ]
    },
    "Tourism": {
        description: "Tourism is the dynamic industry and academic discipline focused on travel, hospitality, cultural exchange, and the complex systems that enable people to explore the world.",
        careers: [
            "Destination Marketing Manager ($55,000-$200,000+)",
            "Tour Operations Manager ($45,000-$120,000)",
            "Sustainable Tourism Consultant ($60,000-$150,000)",
            "Event Manager / Festival Director ($45,000-$150,000+)",
            "Tourism Policy Analyst ($50,000-$120,000)"
        ]
    },
    "Hotel Management": {
        description: "Hotel Management is the specialized discipline of operating hospitality properties that provide accommodation, dining, meetings, and guest services.",
        careers: [
            "Hotel General Manager ($60,000-$300,000+)",
            "Revenue Manager ($60,000-$140,000)",
            "Director of Rooms ($40,000-$100,000)",
            "Food and Beverage Director ($60,000-$150,000+)",
            "Regional Director of Operations ($120,000-$350,000+)"
        ]
    },
    "Linguistics": {
        description: "Linguistics is the scientific study of language—examining its structure, development, and relationship to mind, society, and culture.",
        careers: [
            "Computational Linguist / NLP Specialist ($90,000-$200,000+)",
            "Language Teacher / Curriculum Developer ($45,000-$100,000)",
            "Speech-Language Pathologist ($70,000-$120,000)",
            "Translation / Interpretation Specialist ($50,000-$140,000+)",
            "Linguistic Researcher ($60,000-$120,000+)"
        ]
    },
    "Economic Security": {
        description: "Economic Security is the specialized field focused on protecting economic systems, financial infrastructure, and national prosperity from threats including financial crimes and economic warfare.",
        careers: [
            "Financial Crimes Investigator ($60,000-$180,000+)",
            "Sanctions Compliance Officer ($70,000-$250,000+)",
            "Economic Intelligence Analyst ($70,000-$160,000)",
            "Cybersecurity Analyst (Financial) ($80,000-$250,000+)",
            "Economic Security Policy Advisor ($90,000-$200,000+)"
        ]
    },
    "Customs Affairs": {
        description: "Customs Affairs encompasses the specialized field of managing international trade flows through border controls, tariff administration, and compliance enforcement.",
        careers: [
            "Customs Officer / Inspector ($40,000-$110,000+)",
            "Customs Broker ($50,000-$150,000+)",
            "Import/Export Compliance Manager ($70,000-$160,000+)",
            "Trade Policy Analyst ($60,000-$140,000)",
            "Customs Consultant ($70,000-$300,000+)"
        ]
    },
    "Food Technology from Plant Raw Materials": {
        description: "Food Technology from Plant Raw Materials applies scientific and engineering principles to transform plant-based agricultural products into safe, nutritious, and appealing foods.",
        careers: [
            "Food Scientist / Product Developer ($50,000-$140,000+)",
            "Quality Assurance Manager ($60,000-$140,000)",
            "Process Engineer / Plant Manager ($65,000-$180,000+)",
            "Regulatory Affairs Specialist ($60,000-$130,000)",
            "Plant-Based Food Innovation Specialist ($70,000-$160,000)"
        ]
    },
    "Economics and Accounting (by industry)": {
        description: "Economics and Accounting by Industry represents the specialized integration of economic analysis and accounting practices applied to specific sectors.",
        careers: [
            "Industry Financial Analyst ($70,000-$200,000+)",
            "Corporate Controller / CFO ($90,000-$400,000+)",
            "Accounting Consultant ($80,000-$1,000,000+)",
            "Regulatory Accountant ($70,000-$300,000+)",
            "M&A Analyst / Valuation Specialist ($80,000-$300,000+)"
        ]
    },
    "Operational Activities in Logistics": {
        description: "Operational Activities in Logistics encompasses the planning, implementation, and control of efficient flow and storage of goods from origin to consumption.",
        careers: [
            "Warehouse Manager / DC Manager ($55,000-$160,000)",
            "Transportation Manager ($60,000-$140,000)",
            "Supply Chain Analyst ($55,000-$150,000)",
            "Inventory Planning Manager ($65,000-$140,000)",
            "Logistics Consultant ($70,000-$500,000+)"
        ]
    },
    "Tourism and Hospitality": {
        description: "Tourism and Hospitality represents the integrated study and practice of providing travel, accommodation, food and beverage, and experiential services.",
        careers: [
            "Hotel General Manager / Resort Manager ($60,000-$300,000+)",
            "Restaurant Manager / F&B Director ($40,000-$120,000)",
            "Event Manager / Conference Services ($45,000-$130,000)",
            "Destination Manager ($50,000-$180,000)",
            "Hospitality Entrepreneur (Variable)"
        ]
    },
    "Heat Supply and Heat Engineering Equipment": {
        description: "Heat Supply and Heat Engineering Equipment encompasses the specialized engineering discipline focused on designing and optimizing systems that generate, distribute, and regulate thermal energy.",
        careers: [
            "HVAC Design Engineer ($55,000-$140,000)",
            "Energy Manager / Building Operations ($60,000-$130,000)",
            "District Energy Manager ($70,000-$160,000)",
            "Heat Pump Specialist ($60,000-$140,000)",
            "Thermal Systems Engineer ($60,000-$125,000)"
        ]
    },
    "Finance and Credit": {
        description: "Finance and Credit represent the foundational disciplines examining how money, investments, and lending facilitate economic activity and create value.",
        careers: [
            "Investment Banker / M&A Analyst ($85,000-$5,000,000+)",
            "Credit Analyst / Loan Officer ($55,000-$150,000+)",
            "Portfolio Manager / Investment Analyst ($70,000-$300,000+)",
            "Corporate Finance Manager / Treasurer ($80,000-$800,000+)",
            "Risk Manager / Quantitative Analyst ($80,000-$400,000+)"
        ]
    }
};