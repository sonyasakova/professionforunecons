// UNECON Notable Professionals Database
// Extracted from unecon_notable_professionals.md

const professionalsData = {
    "Applied Mathematics and Informatics": [
        {
            name: "Terence Tao",
            workplace: "University of California, Los Angeles (UCLA) - Professor of Mathematics",
            achievement: "Fields Medal winner and one of the greatest living mathematicians. His work spans harmonic analysis, partial differential equations, combinatorics, and number theory, bridging pure mathematics with practical applications in data compression and signal processing.",
            image: "images/Terence Tao.png"
        },
        {
            name: "Fei-Fei Li",
            workplace: "Stanford University (Professor) & Former VP at Google Cloud AI",
            achievement: "Pioneer in computer vision and AI, creator of ImageNet which revolutionized deep learning. Her work in visual recognition algorithms has enabled breakthrough applications from medical imaging to autonomous vehicles.",
            image: "images/Fei-Fei Li.png"
        },
        {
            name: "Andrew Ng",
            workplace: "Founder of DeepLearning.AI and Coursera Co-founder; Former Chief Scientist at Baidu",
            achievement: "Democratized AI education globally through Coursera's machine learning courses taken by millions. Led development of Google Brain and advanced AI research at Baidu, making sophisticated algorithms accessible to practitioners worldwide.",
            image: "images/Andrew Ng.png"
        }
    ],
    "Information Systems and Technologies": [
        {
            name: "Werner Vogels",
            workplace: "Amazon - Chief Technology Officer (CTO)",
            achievement: "Architect of Amazon's cloud infrastructure (AWS), transforming how enterprises build and scale information systems. His distributed systems expertise enabled the creation of the world's largest cloud computing platform serving millions of businesses.",
            image: "images/Werner Vogels.png"
        },
        {
            name: "Diane Greene",
            workplace: "Former CEO of Google Cloud; Co-founder of VMware",
            achievement: "Co-founded VMware, pioneering virtualization technology that transformed enterprise IT infrastructure. As Google Cloud CEO, drove major cloud adoption initiatives, fundamentally changing how organizations deploy information systems.",
            image: "images/Diane Greene.png"
        },
        {
            name: "Satya Nadella",
            workplace: "Microsoft Corporation - Chairman and CEO",
            achievement: "Transformed Microsoft's information systems strategy from on-premise software to cloud-first architecture. Under his leadership, Azure became the world's second-largest cloud platform, reshaping enterprise technology infrastructure globally.",
            image: "images/Satya Nadella.png"
        }
    ],
    "Applied Informatics": [
        {
            name: "Tim Berners-Lee",
            workplace: "Massachusetts Institute of Technology (MIT) - Professor; Founder of World Wide Web Foundation",
            achievement: "Inventor of the World Wide Web, creating the foundational protocols (HTTP, HTML, URLs) that enable modern information exchange. His applied informatics work transformed human communication and information access globally.",
            image: "images/Tim Berners-Lee.png"
        },
        {
            name: "Vint Cerf",
            workplace: "Google - Vice President and Chief Internet Evangelist",
            achievement: "Co-designer of TCP/IP protocols, the fundamental architecture of the Internet. His applied informatics work created the technical foundation for global digital communication, earning him the title \"Father of the Internet.\"",
            image: "images/Vint Cerf.png"
        },
        {
            name: "Grace Hopper",
            workplace: "U.S. Navy (Rear Admiral, retired); Computer scientist and programmer",
            achievement: "Pioneered the development of COBOL, one of the first high-level programming languages. Her applied informatics work in compiler design made programming accessible to non-specialists, revolutionizing business computing worldwide.",
            image: "images/Grace Hopper.png"
        }
    ],
    "Information Security": [
        {
            name: "Bruce Schneier",
            workplace: "Harvard Kennedy School - Lecturer; Security Technologist and Author",
            achievement: "Leading voice in cryptography and cybersecurity policy. His work on encryption algorithms and security analysis has shaped global approaches to protecting digital information, from government systems to consumer privacy.",
            image: "images/Bruce Schneier.png"
        },
        {
            name: "Parisa Tabriz",
            workplace: "Google - VP of Engineering, Chrome Security",
            achievement: "Known as \"Security Princess\" at Google, she leads browser security protecting billions of users. Her team's work in identifying vulnerabilities and implementing protective measures has set industry standards for web security.",
            image: "images/Parisa Tabriz.png"
        },
        {
            name: "Kevin Mitnick",
            workplace: "Mitnick Security Consulting (Founder); Chief Hacking Officer at KnowBe4",
            achievement: "Transformed from notorious hacker to world-renowned security consultant. His penetration testing expertise and social engineering research have educated organizations worldwide on cybersecurity vulnerabilities and protection strategies.",
            image: "images/Kevin Mitnick.png"
        }
    ],
    "Quality Management": [
        {
            name: "W. Edwards Deming",
            workplace: "Consultant to Japanese Industry; Professor and Statistician",
            achievement: "Father of the quality management movement. His statistical process control methods and management philosophy (Plan-Do-Check-Act cycle) revolutionized manufacturing quality, particularly transforming Japanese industry into a global standard.",
            image: "images/W. Edwards Deming.png"
        },
        {
            name: "Joseph Juran",
            workplace: "Juran Institute (Founder); Quality Management Consultant",
            achievement: "Developed the Juran Trilogy (Quality Planning, Control, and Improvement) and the Pareto Principle application to quality management. His work established systematic approaches to quality that remain foundational in Six Sigma and modern quality systems.",
            image: "images/Joseph Juran.png"
        },
        {
            name: "Genichi Taguchi",
            workplace: "ASI Consulting Group; Quality Engineering Consultant",
            achievement: "Created the Taguchi Method for robust design and quality engineering. His loss function concept and Design of Experiments approach revolutionized product development, enabling companies to build quality into products from inception.",
            image: "images/Genichi Taguchi.png"
        }
    ],
    "Economics": [
        {
            name: "Janet Yellen",
            workplace: "U.S. Department of the Treasury - Secretary of the Treasury",
            achievement: "First woman to serve as Federal Reserve Chair and Treasury Secretary. Her economic policy expertise guided the U.S. through critical financial periods, influencing global monetary policy, employment strategies, and economic recovery initiatives.",
            image: "images/Janet Yellen.png"
        },
        {
            name: "Esther Duflo",
            workplace: "Massachusetts Institute of Technology - Professor of Poverty Alleviation and Development Economics",
            achievement: "Nobel Prize winner (2019) for experimental approach to alleviating poverty. Her randomized controlled trials in development economics transformed evidence-based policy making in education, healthcare, and poverty reduction globally.",
            image: "images/Esther Duflo.png"
        },
        {
            name: "Paul Krugman",
            workplace: "City University of New York - Distinguished Professor; New York Times Columnist",
            achievement: "Nobel Prize winner (2008) for international trade theory. His work on economic geography and trade patterns influences global economic policy, while his public commentary makes complex economics accessible to millions.",
            image: "images/Paul Krugman.png"
        }
    ],
    "Management": [
        {
            name: "Mary Barra",
            workplace: "General Motors - Chairman and CEO",
            achievement: "First female CEO of a major global automaker. Under her leadership, GM transformed toward electric vehicles and autonomous driving while managing complex organizational challenges, demonstrating strategic management in industry transformation.",
            image: "images/Mary Barra.png"
        },
        {
            name: "Indra Nooyi",
            workplace: "Former Chairman and CEO of PepsiCo; Board Director at Amazon",
            achievement: "Transformed PepsiCo through \"Performance with Purpose\" strategy, balancing profitability with sustainability. Her management philosophy integrating health, environment, and social responsibility became a model for 21st-century corporate leadership.",
            image: "images/Indra Nooyi.png"
        },
        {
            name: "Jim Collins",
            workplace: "Management Researcher and Author; Stanford Graduate School of Business - Lecturer",
            achievement: "Authored \"Good to Great\" and \"Built to Last,\" landmark studies on organizational excellence. His research-based management principles (Level 5 Leadership, Hedgehog Concept) have influenced millions of leaders and shaped modern management thinking.",
            image: "images/Jim Collins.png"
        }
    ],
    "Human Resources Management": [
        {
            name: "Laszlo Bock",
            workplace: "Former SVP of People Operations at Google; CEO of Humu",
            achievement: "Revolutionized HR practices at Google through data-driven people analytics. Author of \"Work Rules!\" which transformed HR thinking globally, emphasizing evidence-based hiring, performance management, and workplace culture.",
            image: "images/Laszlo Bock.png"
        },
        {
            name: "Patty McCord",
            workplace: "Former Chief Talent Officer at Netflix; HR Consultant and Author",
            achievement: "Co-creator of Netflix's revolutionary culture deck, one of the most influential HR documents ever published. Her radical transparency and \"Freedom and Responsibility\" approach redefined talent management for the digital age.",
            image: "images/Patty McCord.png"
        },
        {
            name: "Dave Ulrich",
            workplace: "University of Michigan Ross School of Business - Professor; The RBL Group Partner",
            achievement: "Known as the \"Father of Modern HR,\" he created the HR Business Partner model and strategic HR framework. His work transformed HR from administrative function to strategic business partnership, influencing HR practices worldwide.",
            image: "images/Dave Ulrich.png"
        }
    ],
    "State and Municipal Administration": [
        {
            name: "Michael Bloomberg",
            workplace: "Bloomberg LP (Founder); Former Mayor of New York City",
            achievement: "Transformed NYC government through data-driven administration and management reforms. His innovative use of analytics and accountability systems in municipal services became a model for modern urban governance worldwide.",
            image: "images/Michael Bloomberg.png"
        },
        {
            name: "Anne Hidalgo",
            workplace: "Mayor of Paris",
            achievement: "Leading urban transformation through sustainable transportation, green spaces, and climate initiatives. Her \"15-minute city\" concept and bold municipal policies on car-free zones have influenced global urban planning strategies.",
            image: "images/Anne Hidalgo.png"
        },
        {
            name: "Rahm Emanuel",
            workplace: "U.S. Ambassador to Japan; Former Mayor of Chicago",
            achievement: "As Chicago mayor, implemented major infrastructure improvements, education reform, and fiscal management in complex urban environment. His administrative experience spans municipal, congressional, and White House roles, demonstrating multi-level governance expertise.",
            image: "images/Rahm Emanuel.png"
        }
    ],
    "Business Informatics": [
        {
            name: "Satya Nadella",
            workplace: "Microsoft Corporation - Chairman and CEO",
            achievement: "Transformed Microsoft from declining software giant into $2 trillion cloud computing powerhouse through strategic digital transformation. His vision of \"empowering every person and organization\" exemplifies Business Informatics' integration of technology and organizational mission.",
            image: "images/Satya Nadella.png"
        },
        {
            name: "Ginni Rometty",
            workplace: "Former CEO & Chairman of IBM; Co-Chair of OneTen",
            achievement: "Led IBM through crucial digital transformation, pioneering enterprise AI, cloud computing, and blockchain adoption. Championed \"New Collar\" jobs concept, recognizing technical skills matter more than traditional degrees in business informatics.",
            image: "images/Ginni Rometty.png"
        },
        {
            name: "Sheryl Sandberg",
            workplace: "Former COO of Meta (Facebook); Founder of LeanIn.Org",
            achievement: "Architected Facebook's business model and advertising infrastructure, transforming social network into global technology empire generating $100B+ annual revenue. Her expertise in monetization strategy and business system design exemplifies Business Informatics excellence.",
            image: "images/Sheryl Sandberg.png"
        }
    ],
    "Trade Business": [
        {
            name: "Bernard Arnault",
            workplace: "LVMH (Moët Hennessy Louis Vuitton) - Chairman and CEO",
            achievement: "Built world's largest luxury goods conglomerate through strategic acquisitions and brand management. His trade expertise spans 75+ prestigious brands across fashion, wine, and jewelry, demonstrating mastery of global premium commerce.",
            image: "images/Bernard Arnault.png"
        },
        {
            name: "Jack Ma (Ma Yun)",
            workplace: "Co-founder of Alibaba Group; Philanthropist",
            achievement: "Created Alibaba, transforming Chinese e-commerce and revolutionizing global trade. His platforms (Alibaba, Taobao, Tmall) connect millions of businesses and consumers, pioneering digital marketplace models that reshaped international trade.",
            image: "images/Jack Ma (Ma Yun).png"
        },
        {
            name: "Angela Ahrendts",
            workplace: "Former SVP of Retail at Apple; Former CEO of Burberry",
            achievement: "Transformed Burberry into digital-first luxury brand and revolutionized Apple's retail experience. Her trade business expertise in combining physical retail with digital innovation set new standards for omnichannel commerce.",
            image: "images/Angela Ahrendts.png"
        }
    ],
    "Sociology": [
        {
            name: "Matthew Desmond",
            workplace: "Princeton University - Professor of Sociology",
            achievement: "Pulitzer Prize winner for \"Evicted,\" groundbreaking research on poverty and housing. His ethnographic work transformed understanding of systemic inequality, influencing housing policy and poverty research methodology globally.",
            image: "images/Matthew Desmond.png"
        },
        {
            name: "Arlie Russell Hochschild",
            workplace: "University of California, Berkeley - Professor Emerita of Sociology",
            achievement: "Pioneer in sociology of emotions and work-life balance. Her concept of \"emotional labor\" transformed understanding of service work, gender roles, and modern employment, influencing workplace policies worldwide.",
            image: "images/Arlie Russell Hochschild.png"
        },
        {
            name: "Saskia Sassen",
            workplace: "Columbia University - Professor of Sociology",
            achievement: "Leading scholar of globalization, immigration, and global cities. Her \"Global City\" concept revolutionized urban sociology, explaining how cities function as command centers in global economy, reshaping urban studies worldwide.",
            image: "images/Saskia Sassen.png"
        }
    ],
    "Social Work": [
        {
            name: "Brené Brown",
            workplace: "University of Houston - Research Professor; Author and Speaker",
            achievement: "Pioneered research on vulnerability, shame, and empathy. Her work transformed social work practice and therapeutic approaches globally, making concepts like \"vulnerability as strength\" mainstream in helping professions and organizational culture.",
            image: "images/Brené Brown.png"
        },
        {
            name: "Jane Addams",
            workplace: "Hull House (Founder); Social Worker and Peace Activist",
            achievement: "Nobel Peace Prize winner (1931) and founder of social work profession. Established Hull House settlement, pioneering community-based social services, advocacy for immigrants, and social reform that shaped modern social work practice.",
            image: "images/Jane Addams.png"
        },
        {
            name: "Harry Specht",
            workplace: "University of California, Berkeley - Former Dean of School of Social Welfare",
            achievement: "Influential critic who challenged social work's shift toward private practice. His call to \"unfaithful angels\" to return to community organizing and social justice advocacy reshaped debates about social work's mission and professional identity.",
            image: "images/Harry Specht.png"
        }
    ],
    "Jurisprudence": [
        {
            name: "Ruth Bader Ginsburg",
            workplace: "U.S. Supreme Court - Associate Justice (1993-2020)",
            achievement: "Pioneering advocate for gender equality and civil rights. Her legal arguments and judicial opinions transformed American jurisprudence on discrimination, establishing precedents that expanded equal protection under law for generations.",
            image: "images/Ruth Bader Ginsburg.png"
        },
        {
            name: "Sonia Sotomayor",
            workplace: "U.S. Supreme Court - Associate Justice (2009-present)",
            achievement: "First Hispanic and Latina Supreme Court Justice. Her jurisprudence on criminal justice, affirmative action, and civil rights, combined with extensive appellate court experience, has shaped American legal thinking on equality and access to justice.",
            image: "images/Sonia Sotomayor.png"
        },
        {
            name: "Amal Clooney",
            workplace: "Doughty Street Chambers - Barrister specializing in International Law and Human Rights",
            achievement: "High-profile international lawyer representing victims of human rights abuses, including work with UN and International Criminal Court. Her advocacy for press freedom, war crimes accountability, and refugee rights influences global legal standards.",
            image: "images/Amal Clooney.png"
        }
    ],
    "Foreign Regional Studies": [
        {
            name: "Fareed Zakaria",
            workplace: "CNN - Host of \"Fareed Zakaria GPS\"; Columnist for The Washington Post",
            achievement: "Leading voice on global affairs and international relations. Author of \"The Post-American World,\" his analysis of shifting global power dynamics and regional transformations has shaped understanding of international development and geopolitical change.",
            image: "images/Fareed Zakaria.png"
        },
        {
            name: "Anne-Marie Slaughter",
            workplace: "Princeton University - Professor; Former Director of Policy Planning, U.S. State Department",
            achievement: "Leading scholar of international law and foreign policy. Her work on networked governance and international cooperation influenced both international affairs scholarship and organizational policy. Author of \"The Chessboard and the Web.\"",
            image: "images/Anne-Marie Slaughter.png"
        },
        {
            name: "Rana Mitter",
            workplace: "Oxford University - Professor of Modern Chinese History and Politics",
            achievement: "Leading expert on modern China and East Asian studies. His book \"Forgotten Ally: China's World War II\" transformed Western understanding of Chinese history and its regional impact. Regular commentator on Chinese affairs for BBC and international media.",
            image: "images/Rana Mitter.png"
        }
    ],
    "International Relations": [
        {
            name: "Kofi Annan",
            workplace: "Former United Nations Secretary-General (1997-2006); Kofi Annan Foundation",
            achievement: "Nobel Peace Prize winner (2001) who revitalized UN and advanced global governance. His leadership on human rights, peacekeeping, and humanitarian intervention reshaped international relations during critical post-Cold War period.",
            image: "images/Kofi Annan.png"
        },
        {
            name: "Condoleezza Rice",
            workplace: "Stanford University - Professor; Former U.S. Secretary of State",
            achievement: "First African-American woman Secretary of State, shaping U.S. foreign policy during critical period. Her expertise in Soviet and Eastern European affairs and strategic diplomacy influenced international relations during major global transitions.",
            image: "images/Condoleezza Rice.png"
        },
        {
            name: "Joseph Nye",
            workplace: "Harvard Kennedy School - Distinguished Professor",
            achievement: "Developed concepts of \"soft power\" and \"smart power\" that transformed international relations theory and practice. His framework for understanding power in global politics influences diplomatic strategies worldwide.",
            image: "images/Joseph Nye.png"
        }
    ],
    "Advertising and Public Relations": [
        {
            name: "David Ogilvy",
            workplace: "Ogilvy & Mather (Founder); \"Father of Advertising\"",
            achievement: "Revolutionized advertising through research-based creative approach. His principles combining creativity with data, respect for intelligence, and brand-building strategies established modern advertising foundations used globally today.",
            image: "images/David Ogilvy.png"
        },
        {
            name: "Mary Wells Lawrence",
            workplace: "Wells Rich Greene (Founder and CEO); First female CEO of company listed on NYSE",
            achievement: "Pioneering female advertising executive who created iconic campaigns (Braniff Airlines, Alka-Seltzer). Her creative leadership and business acumen broke gender barriers while transforming brand advertising strategies.",
            image: "images/Mary Wells Lawrence.png"
        },
        {
            name: "Edward Bernays",
            workplace: "Public Relations Consultant; \"Father of Public Relations\"",
            achievement: "Pioneered modern public relations by applying psychological principles to mass communication. His campaigns and theoretical frameworks established PR as professional discipline, influencing corporate communications and political messaging worldwide.",
            image: "images/Edward Bernays.png"
        }
    ],
    "Service": [
        {
            name: "Horst Schulze",
            workplace: "Co-founder of The Ritz-Carlton Hotel Company; Founder of Capella Hotels",
            achievement: "Created legendary Ritz-Carlton service culture and \"Gold Standards.\" His philosophy that \"We are Ladies and Gentlemen serving Ladies and Gentlemen\" revolutionized luxury service industry standards globally.",
            image: "images/Horst Schulze.png"
        },
        {
            name: "Danny Meyer",
            workplace: "Union Square Hospitality Group (Founder); Shake Shack (Founder)",
            achievement: "Pioneered \"enlightened hospitality\" philosophy placing employees first to deliver exceptional service. His approach to hospitality management transformed restaurant industry standards and inspired service culture worldwide.",
            image: "images/Danny Meyer.png"
        },
        {
            name: "Isadore Sharp",
            workplace: "Four Seasons Hotels and Resorts (Founder and Chairman)",
            achievement: "Built global luxury hotel empire based on Golden Rule service philosophy. His emphasis on employee satisfaction creating superior guest experiences established new paradigm for service industry worldwide.",
            image: "images/Isadore Sharp.png"
        }
    ],
    "Tourism": [
        {
            name: "Rick Steves",
            workplace: "Rick Steves' Europe (Founder); Travel Writer and TV Host",
            achievement: "Democratized European travel through accessible guidebooks and television series. His philosophy of travel as means for cultural understanding and personal growth transformed mass tourism into educational experience for millions.",
            image: "images/Rick Steves.png"
        },
        {
            name: "Taleb Rifai",
            workplace: "Former Secretary-General of World Tourism Organization (UNWTO)",
            achievement: "Led global tourism policy development emphasizing sustainability and cultural preservation. His leadership positioned tourism as vehicle for economic development and intercultural dialogue, influencing international tourism strategies.",
            image: "images/Taleb Rifai.png"
        },
        {
            name: "Gloria Guevara Manzo",
            workplace: "Former CEO of World Travel & Tourism Council; Former Mexico Tourism Minister",
            achievement: "Shaped global tourism policy and crisis management, including leading industry response to COVID-19. Her work on sustainable tourism development and public-private partnerships transformed tourism governance worldwide.",
            image: "images/Gloria Guevara Manzo.png"
        }
    ],
    "Hotel Management": [
        {
            name: "Bill Marriott Jr.",
            workplace: "Marriott International - Executive Chairman",
            achievement: "Expanded family business into world's largest hotel company with 8,000+ properties across 139 countries. His leadership in franchising models, brand diversification, and hospitality innovation shaped modern hotel industry globally.",
            image: "images/Bill Marriott Jr..png"
        },
        {
            name: "Arne Sorenson",
            workplace: "Former President and CEO of Marriott International (2012-2021)",
            achievement: "First non-Marriott family CEO who led company through major expansion and digital transformation. His inclusive leadership and stakeholder-focused approach during crises set new standards for hotel management during challenging times.",
            image: "images/Arne Sorenson.png"
        },
        {
            name: "Christopher Nassetta",
            workplace: "Hilton Worldwide - President and CEO",
            achievement: "Transformed Hilton through global expansion, digital innovation, and brand portfolio strategy. His leadership through financial crisis and recovery positioned Hilton as leading global hospitality company with innovative guest experience strategies.",
            image: "images/Christopher Nassetta.png"
        }
    ],
    "Linguistics": [
        {
            name: "Noam Chomsky",
            workplace: "Massachusetts Institute of Technology - Institute Professor Emeritus",
            achievement: "Revolutionary linguist who transformed understanding of human language through Universal Grammar theory. His work established linguistics as scientific discipline and influenced cognitive science, psychology, and artificial intelligence development globally.",
            image: "images/Noam Chomsky.png"
        },
        {
            name: "Deborah Tannen",
            workplace: "Georgetown University - Professor of Linguistics",
            achievement: "Leading scholar of conversational analysis and gender linguistics. Her bestselling books on communication styles, particularly \"You Just Don't Understand,\" made sociolinguistic research accessible, transforming understanding of language in relationships and workplace.",
            image: "images/Deborah Tannen.png"
        },
        {
            name: "David Crystal",
            workplace: "University of Wales - Honorary Professor; Author and Language Consultant",
            achievement: "Prolific author on language with over 100 books, including definitive works on English language, Shakespeare, and internet linguistics. His accessible scholarship made linguistics engaging for general audiences worldwide.",
            image: "images/David Crystal.png"
        }
    ],
    "Economic Security": [
        {
            name: "Janet Napolitano",
            workplace: "Former U.S. Secretary of Homeland Security; Former President of University of California",
            achievement: "Led Homeland Security during critical period, establishing cybersecurity frameworks and infrastructure protection programs. Her work integrating economic security with national security influenced global approaches to protecting critical financial systems.",
            image: "images/Janet Napolitano.png"
        },
        {
            name: "Robert Mueller",
            workplace: "Former Director of Federal Bureau of Investigation (FBI)",
            achievement: "Led FBI for 12 years, including post-9/11 transformation. His leadership in combating financial crimes, cybercrime, and threats to economic infrastructure strengthened frameworks for protecting national economic security.",
            image: "images/Robert Mueller.png"
        },
        {
            name: "Christine Lagarde",
            workplace: "European Central Bank - President; Former Managing Director of IMF",
            achievement: "First woman to head IMF and ECB, shaping monetary policy affecting economic security globally. Her leadership through European debt crisis and pandemic demonstrated how central banking protects economic stability and security.",
            image: "images/Christine Lagarde.png"
        }
    ],
    "Customs Affairs": [
        {
            name: "Gil Kerlikowske",
            workplace: "Former Commissioner of U.S. Customs and Border Protection (2014-2017)",
            achievement: "Led CBP during critical period of immigration policy changes. His experience balancing security with trade facilitation, and implementing modernization programs influenced customs operations. Previously served as Seattle Police Chief and Director of ONDCP.",
            image: "images/Gil Kerlikowske.png"
        },
        {
            name: "Kunio Mikuriya",
            workplace: "World Customs Organization - Secretary General (2009-present)",
            achievement: "Led global customs modernization through digital transformation, coordinated border management, and harmonized procedures. His leadership on trade facilitation and security standards influenced customs operations in 183 member countries.",
            image: "images/Kunio Mikuriya.png"
        },
        {
            name: "Carla Provost",
            workplace: "Former Chief of U.S. Border Patrol (2018-2020)",
            achievement: "First woman to lead the Border Patrol. Her 22-year career in customs and border protection included operational expertise in trade enforcement, immigration policy, and border security operations coordination.",
            image: "images/Carla Provost.png"
        }
    ],
    "Food Technology from Plant Raw Materials": [
        {
            name: "Patrick Brown",
            workplace: "Impossible Foods - Founder and Chief Scientific Officer",
            achievement: "Stanford biochemistry professor who pioneered plant-based meat through molecular understanding of flavor and texture. His innovation using heme protein from plants to replicate meat created sustainable food alternative, revolutionizing plant-based food technology industry.",
            image: "images/Patrick Brown.png"
        },
        {
            name: "Ethan Brown",
            workplace: "Beyond Meat - Founder and CEO",
            achievement: "Built global plant-based meat company from startup to publicly traded leader. His focus on molecular architecture of meat—proteins, fats, minerals—transformed plant materials into realistic alternatives, accelerating mainstream adoption of plant-based foods.",
            image: "images/Ethan Brown.png"
        },
        {
            name: "Vaclav Smil",
            workplace: "University of Manitoba - Distinguished Professor Emeritus",
            achievement: "World's leading authority on energy, food production, and environmental systems. His comprehensive analysis of agricultural systems and plant-based food production influenced global understanding of sustainable food technology. Author of over 40 books on these topics.",
            image: "images/Vaclav Smil.png"
        }
    ],
    "Economics and Accounting (by industry)": [
        {
            name: "Mary Meeker",
            workplace: "Bond Capital - General Partner; Former Partner at Kleiner Perkins Caufield & Byers",
            achievement: "\"Queen of the Internet\" whose annual Internet Trends Report became essential industry analysis for tech sector. Her expertise in technology sector economics and financial analysis guided billions in investment decisions, shaping understanding of digital economy metrics.",
            image: "images/Mary Meeker.png"
        },
        {
            name: "Warren Buffett",
            workplace: "Berkshire Hathaway - Chairman and CEO",
            achievement: "Legendary investor whose value investing philosophy emphasizes fundamental accounting analysis across industries. His annual shareholder letters teach financial analysis principles. Has built one of world's most successful conglomerates through rigorous industry-by-industry financial evaluation.",
            image: "images/Warren Buffett.png"
        },
        {
            name: "Sheryl Sandberg",
            workplace: "Former COO of Meta (Facebook); Author and Philanthropist",
            achievement: "As Facebook's COO, built advertising business model generating over $100B annually. Her expertise in technology industry economics, accounting for digital platforms, and financial operations transformed social media into profitable industry. Author of \"Lean In.\"",
            image: "images/Sheryl Sandberg.png"
        }
    ],
    "Operational Activities in Logistics": [
        {
            name: "Frederick W. Smith",
            workplace: "FedEx Corporation - Founder, Chairman, and CEO",
            achievement: "Revolutionized logistics through hub-and-spoke model and overnight delivery when he founded FedEx in 1971. His operational innovations in package tracking, route optimization, and integrated logistics networks transformed global supply chain management permanently.",
            image: "images/Frederick W. Smith.png"
        },
        {
            name: "Rosalind Brewer",
            workplace: "Walgreens Boots Alliance - CEO (2021-present)",
            achievement: "Extensive logistics operations experience from Walmart (COO) and Starbucks (COO, President). Her leadership in retail operations, supply chain management, inventory optimization, and distribution networks advanced best practices in operational logistics at massive scale.",
            image: "images/Rosalind Brewer.png"
        },
        {
            name: "Yossi Sheffi",
            workplace: "Massachusetts Institute of Technology - Professor; Director of MIT Center for Transportation and Logistics",
            achievement: "Leading scholar on logistics resilience and supply chain risk management. His research on operational strategies, particularly managing disruptions (documented in books like \"The Resilient Enterprise\"), influenced how companies design supply chain operations globally.",
            image: "images/Yossi Sheffi.png"
        }
    ],
    "Tourism and Hospitality": [
        {
            name: "Isadore Sharp",
            workplace: "Four Seasons Hotels and Resorts - Founder and Chairman",
            achievement: "Built global luxury hotel empire (founded 1960) based on Golden Rule service philosophy. His emphasis on employee satisfaction creating superior guest experiences established new paradigm for service industry worldwide. Company now operates 120+ properties globally.",
            image: "images/Isadore Sharp.png"
        },
        {
            name: "Bill Marriott Jr.",
            workplace: "Marriott International - Executive Chairman and Chairman Emeritus",
            achievement: "Expanded family business from single restaurant (1927) into world's largest hotel company with 8,000+ properties across 139 countries. His leadership in franchising models, brand diversification, and hospitality innovation shaped modern hotel industry globally for over 60 years.",
            image: "images/Bill Marriott Jr..png"
        },
        {
            name: "Arne Sorenson",
            workplace: "Marriott International - President and CEO (2012-2021, deceased)",
            achievement: "First non-Marriott family CEO who led company through major expansion, digital transformation, and acquisition of Starwood. His inclusive leadership during crises (including COVID-19 pandemic) set new standards for hospitality management. Passed away in 2021.",
            image: "images/Arne Sorenson.png"
        }
    ],
    "Heat Supply and Heat Engineering Equipment": [
        {
            name: "Amory Lovins",
            workplace: "Rocky Mountain Institute - Co-founder (1982) and Chief Scientist",
            achievement: "Pioneer in energy efficiency and sustainable design. His work on integrated building systems, district heating optimization, heat recovery technologies, and \"soft energy paths\" transformed how buildings manage thermal energy efficiently. Recipient of numerous energy innovation awards.",
            image: "images/Amory Lovins.png"
        },
        {
            name: "Jan Rosenow",
            workplace: "Regulatory Assistance Project - European Programme Director; Oxford University - Research Fellow",
            achievement: "Leading expert on energy efficiency policy and heat decarbonization in Europe. His research on heat pumps, district heating systems, and building thermal efficiency influences European energy policy, particularly heat supply transition strategies.",
            image: "images/Jan Rosenow.png"
        },
        {
            name: "Paul Hawken",
            workplace: "Project Drawdown - Founder; Author and Entrepreneur",
            achievement: "Environmental entrepreneur who founded multiple sustainable businesses. His work on energy systems, including efficient heating and thermal management (documented in \"Drawdown\"), provides comprehensive analysis of climate solutions including heat engineering innovations.",
            image: "images/Paul Hawken.png"
        }
    ],
    "Finance and Credit": [
        {
            name: "Jamie Dimon",
            workplace: "JPMorgan Chase & Co. - Chairman and CEO (2006-present)",
            achievement: "Led America's largest bank (by assets) through 2008 financial crisis and digital transformation. His expertise in credit risk management, financial markets, investment banking, and commercial lending operations influenced global financial practices and regulatory frameworks.",
            image: "images/Jamie Dimon.png"
        },
        {
            name: "Christine Lagarde",
            workplace: "European Central Bank - President (2019-present); Former Managing Director of IMF (2011-2019)",
            achievement: "First woman to lead IMF and ECB, shaping monetary policy and credit conditions globally. Her leadership through European debt crisis, pandemic economic response, and inflation management demonstrated mastery of credit markets, central banking, and financial stability.",
            image: "images/Christine Lagarde.png"
        },
        {
            name: "Ray Dalio",
            workplace: "Bridgewater Associates - Founder (1975, world's largest hedge fund)",
            achievement: "Pioneer of risk parity investment strategy and systematic credit analysis. His principles-based approach to understanding debt cycles, credit markets, and financial systems (documented in \"Principles\") influenced institutional investing globally. Bridgewater manages approximately $150 billion.",
            image: "images/Ray Dalio.png"
        }
    ]
};
