const rawData = [
    // --- DEITIES ---
    {id:"Narayana", label:"Nārāyaṇa", group:"Deity", region:"Divine", isDeity:true, note:"The Preserver.", lat:32.0, lng:81.0},
    {id:"Shiva", label:"Śiva", group:"Deity", region:"Divine", isDeity:true, note:"Adi Guru.", lat:31.5, lng:81.5},
    {id:"Brahma", label:"Brahmā", group:"Deity", region:"Divine", isDeity:true, note:"The Creator.", lat:32.5, lng:80.5},
    {id:"Shakti", label:"Śakti", group:"Deity", region:"Divine", isDeity:true, note:"Divine Mother.", lat:31.0, lng:80.0},
    {id:"Rudra", label:"Rudra", group:"Deity", region:"Divine", isDeity:true, note:"Vedic Form.", lat:31.2, lng:81.2},
    {id:"Bhairava", label:"Bhairava", group:"Deity", region:"Divine", isDeity:true, note:"Trika Source.", lat:34.0, lng:76.0},

    // --- ANCIENT RISHIS ---
    {id:"Dhanvantari", label:"Dhanvantari", year:-3000, school:"Ayurveda", region:"North", work:"Ayurveda", others:["Dhanvantari Nighantu"], lat:30.0, lng:78.0},
    {id:"Vyasa", label:"Vyāsa", year:-1500, school:"Vedic", region:"North", work:"Mahabharata", others:["Brahma Sutras", "Bhagavata Purana"], lat:30.2, lng:79.0},
    {id:"Vashishta", label:"Vashishta", year:-3000, school:"Vedic", region:"North", work:"Rig Veda 7", others:["Yoga Vashishta"], lat:34.0, lng:76.0},
    {id:"Parashara", label:"Parashara", year:-2000, school:"Vedic", region:"North", work:"Vishnu Purana", others:["Parashara Smriti"], lat:33.0, lng:75.0},
    {id:"Shuka", label:"Shuka", year:-1400, school:"Advaita", region:"North", work:"Bhagavata (Narrator)", lat:31.0, lng:77.0},
    {id:"Yajnavalkya", label:"Yājñavalkya", year:-850, school:"Vedic", region:"East", work:"Brihadaranyaka", others:["Shatapatha Brahmana"], lat:26.1, lng:85.9},
    {id:"Kapila", label:"Kapila", year:-600, school:"Samkhya", region:"North", work:"Samkhya Sutras", lat:30.0, lng:78.0},
    {id:"Jaimini", label:"Jaimini", year:-300, school:"Mimamsa", region:"North", work:"Mimamsa Sutras", lat:29.0, lng:77.0},
    {id:"Gautama", label:"Gautama", year:-200, school:"Nyaya", region:"East", work:"Nyaya Sutras", lat:26.0, lng:86.0},
    {id:"Kanada", label:"Kaṇāda", year:-200, school:"Vaisheshika", region:"West", work:"Vaisheshika Sutras", lat:22.5, lng:71.0},
    {id:"Patanjali", label:"Patañjali", year:-150, school:"Yoga", region:"North", work:"Yoga Sutras", others:["Mahabhasya"], lat:34.0, lng:74.5},
    {id:"Panini", label:"Pāṇini", year:-500, school:"Grammar", region:"North West", work:"Ashtadhyayi", lat:34.0, lng:72.0},
    {id:"Chanakya", label:"Cāṇakya", year:-350, school:"Statecraft", region:"East", work:"Arthashastra", lat:25.6, lng:85.1},
    {id:"Sushruta", label:"Suśruta", year:-600, school:"Medicine", region:"North", work:"Sushruta Samhita", lat:25.3, lng:83.0},
    {id:"Charvaka", label:"Cārvāka", year:-600, school:"Nastika", region:"North", work:"Barhaspatya Sutras", lat:28.0, lng:77.0},

    // --- HETERODOX ---
    {id:"Buddha", label:"Buddha", year:-563, school:"Buddhism", region:"East", work:"Pali Canon", others:["Dhammapada"], lat:24.7, lng:85.0},
    {id:"Mahavira", label:"Mahāvīra", year:-540, school:"Jainism", region:"East", work:"Agamas", lat:25.5, lng:85.5},
    {id:"Makkhali", label:"Makkhali Gosala", year:-500, school:"Ajivika", region:"East", work:"(Lost)", lat:25.0, lng:86.0},

    // --- ADVAITA LINEAGE ---
    {id:"Gaudapada", label:"Gauḍapāda", year:600, school:"Advaita", region:"North", work:"Mandukya Karika", lat:30.0, lng:78.0},
    {id:"Govinda", label:"Govinda Bhagavatpāda", year:750, school:"Advaita", region:"Central", work:"Yoga Taravali", lat:22.0, lng:76.0},
    {id:"Shankara", label:"Ādi Śaṅkara", year:788, school:"Advaita", region:"South", work:"Brahmasutra Bhashya", others:["Vivekachudamani", "Bhaja Govindam"], lat:10.0, lng:76.3},
    {id:"Suresvara", label:"Sureśvara", year:800, school:"Advaita", region:"South", work:"Naishkarmya Siddhi", lat:13.4, lng:75.2},
    {id:"Padmapada", label:"Padmapāda", year:800, school:"Advaita", region:"South", work:"Panchapadika", lat:12.0, lng:75.0},
    {id:"Hastamalaka", label:"Hastāmalaka", year:800, school:"Advaita", region:"South", work:"Hastamalakiya", lat:12.1, lng:75.1},
    {id:"Totaka", label:"Toṭakācārya", year:800, school:"Advaita", region:"South", work:"Totakashtakam", lat:12.2, lng:75.2},
    {id:"Vidyaranya", label:"Vidyāraṇya", year:1296, school:"Advaita", region:"South", work:"Panchadasi", lat:13.4, lng:75.2},
    {id:"Madhusudana", label:"Madhusūdana", year:1540, school:"Advaita", region:"East", work:"Advaita Siddhi", lat:23.0, lng:89.0},

    // --- DVAITA LINEAGE ---
    {id:"Achyuta", label:"Acyutaprekṣa", year:1200, school:"Dvaita", region:"South", note:"Guru of Madhva", lat:13.3, lng:74.7},
    {id:"Madhva", label:"Madhvācārya", year:1238, school:"Dvaita", region:"South", work:"Sarvamula", lat:13.3, lng:74.7},
    {id:"Jayatirtha", label:"Jayatīrtha", year:1365, school:"Dvaita", region:"South", work:"Nyaya Sudha", lat:16.2, lng:77.3},
    {id:"Vyasatirtha", label:"Vyāsatīrtha", year:1460, school:"Dvaita", region:"South", work:"Nyayamrita", lat:15.3, lng:76.4},
    {id:"Raghavendra", label:"Rāghavendra", year:1595, school:"Dvaita", region:"South", work:"Parimala", lat:15.9, lng:77.4},

    // --- VISHISHTADVAITA ---
    {id:"Nammalvar", label:"Nammāḻvār", year:880, school:"Bhakti", region:"South", work:"Tiruvaymoli", lat:8.7, lng:77.7},
    {id:"Nathamuni", label:"Nāthamuni", year:900, school:"Vishishtadvaita", region:"South", work:"Yoga Rahasya", lat:11.4, lng:79.6},
    {id:"Yamuna", label:"Yāmunācārya", year:917, school:"Vishishtadvaita", region:"South", work:"Siddhitraya", lat:10.8, lng:78.7},
    {id:"Ramanuja", label:"Rāmānuja", year:1017, school:"Vishishtadvaita", region:"South", work:"Sri Bhashya", lat:11.1, lng:78.6},
    {id:"Desika", label:"Vedānta Deśika", year:1268, school:"Vishishtadvaita", region:"South", work:"Paduka Sahasram", lat:12.8, lng:79.7},

    // --- KASHMIR SHAIVISM ---
    {id:"Vasugupta", label:"Vasugupta", year:800, school:"Kashmir Shaivism", region:"North", work:"Shiva Sutras", lat:34.1, lng:74.8},
    {id:"Somananda", label:"Somānanda", year:900, school:"Kashmir Shaivism", region:"North", work:"Shiva Drishti", lat:34.0, lng:74.9},
    {id:"Utpaladeva", label:"Utpaladeva", year:925, school:"Kashmir Shaivism", region:"North", work:"Ishvara Pratyabhijna", lat:34.2, lng:74.7},
    {id:"Abhinavagupta", label:"Abhinavagupta", year:950, school:"Kashmir Shaivism", region:"North", work:"Tantraloka", lat:34.1, lng:74.8},
    {id:"Kshemaraja", label:"Kṣemarāja", year:1000, school:"Kashmir Shaivism", region:"North", work:"Pratyabhijnahridayam", lat:34.1, lng:74.7},

    // --- NYAYA & NAVYA-NYAYA ---
    {id:"Vatsyayana", label:"Vātsyāyana", year:450, school:"Nyaya", region:"North", work:"Nyaya Bhashya", lat:26.0, lng:80.0},
    {id:"Uddyotakara", label:"Uddyotakara", year:600, school:"Nyaya", region:"North", work:"Nyaya Varttika", lat:26.5, lng:80.5},
    {id:"Vacaspati", label:"Vācaspati Miśra", year:900, school:"Nyaya", region:"East", work:"Nyaya Tatparya Tika", lat:26.1, lng:86.0},
    {id:"Udayana", label:"Udayana", year:984, school:"Nyaya", region:"East", work:"Kusumanjali", lat:26.2, lng:86.1},
    {id:"Gangesa", label:"Gaṅgeśa", year:1325, school:"Nyaya", region:"East", work:"Tattvacintamani", lat:26.1, lng:86.0},
    {id:"Raghunatha", label:"Raghunātha Śiromaṇi", year:1477, school:"Nyaya", region:"East", work:"Didhiti", lat:23.5, lng:88.4},
    {id:"Gadadhara", label:"Gadādhara", year:1650, school:"Nyaya", region:"East", work:"Shaktivada", lat:23.6, lng:88.3},

    // --- INDOLOGISTS (Complete List) ---
    {id:"Megasthenes", label:"Megasthenes", year:-350, school:"Indology", region:"Global", work:"Indica", lat:37.9, lng:23.7},
    {id:"Faxian", label:"Faxian", year:399, school:"Indology", region:"China", work:"Records of Buddhist Kingdoms", lat:34.3, lng:108.9},
    {id:"Xuanzang", label:"Xuanzang", year:629, school:"Indology", region:"China", work:"Great Tang Records", lat:34.0, lng:108.0},
    {id:"AlBiruni", label:"Al-Biruni", year:973, school:"Indology", region:"Global", work:"Indica", lat:32.0, lng:60.0},
    {id:"IbnBattuta", label:"Ibn Battuta", year:1333, school:"Indology", region:"Global", work:"Rihla", lat:31.7, lng:-7.0},
    {id:"MarcoPolo", label:"Marco Polo", year:1288, school:"Indology", region:"Global", work:"Travels", lat:45.4, lng:12.3},
    {id:"Jones", label:"William Jones", year:1746, school:"Indology", region:"Global", work:"Asiatic Researches", lat:51.5, lng:-0.1},
    {id:"Wilkins", label:"Charles Wilkins", year:1749, school:"Indology", region:"Global", work:"Gita Translation", lat:51.0, lng:-0.5},
    {id:"Prinsep", label:"James Prinsep", year:1799, school:"Indology", region:"Global", work:"Decipherment of Brahmi", lat:51.0, lng:-0.2},
    {id:"Cunningham", label:"Alexander Cunningham", year:1814, school:"Indology", region:"Global", work:"ASI Reports", lat:55.0, lng:-3.0},
    {id:"MaxMuller", label:"Max Müller", year:1823, school:"Indology", region:"Global", work:"Sacred Books", lat:51.1, lng:10.4},
    {id:"Weber", label:"Albrecht Weber", year:1825, school:"Indology", region:"Global", work:"Indische Studien", lat:51.0, lng:10.0},
    {id:"Basham", label:"A.L. Basham", year:1914, school:"Indology", region:"Global", work:"The Wonder That Was India", lat:51.5, lng:-0.1},
    {id:"Renou", label:"Louis Renou", year:1896, school:"Indology", region:"Global", work:"Vedic India", lat:48.8, lng:2.3},
    {id:"Schopenhauer", label:"Schopenhauer", year:1788, school:"Philosophy", region:"Global", work:"World as Will", lat:52.5, lng:13.4},
    {id:"Voltaire", label:"Voltaire", year:1694, school:"Philosophy", region:"Global", work:"Essai", lat:48.8, lng:2.3},
    {id:"Tesla", label:"Tesla", year:1856, school:"Science", region:"Global", work:"AC Current", lat:40.7, lng:-74.0},
    {id:"Eliot", label:"T.S. Eliot", year:1888, school:"Literature", region:"Global", work:"The Waste Land", lat:51.5, lng:-0.1},
    {id:"Oppenheimer", label:"Oppenheimer", year:1904, school:"Science", region:"Global", work:"Trinity", lat:35.6, lng:-106.0},

    // --- MODERN INDIAN ---
    {id:"Vivekananda", label:"Vivekānanda", year:1863, school:"Advaita", region:"East", work:"Raja Yoga", lat:22.57, lng:88.36},
    {id:"Aurobindo", label:"Sri Aurobindo", year:1872, school:"Yoga", region:"South", work:"Life Divine", lat:11.9, lng:79.8},
    {id:"Tagore", label:"Rabindranath Tagore", year:1861, school:"Literature", region:"East", work:"Gitanjali", lat:23.6, lng:87.6},
    {id:"Ramanujan", label:"Srinivasa Ramanujan", year:1887, school:"Science", region:"South", work:"Notebooks", lat:11.0, lng:79.0},
    {id:"Ambedkar", label:"B.R. Ambedkar", year:1891, school:"Modern", region:"West", work:"Constitution", lat:19.0, lng:72.8},
    {id:"Gandhi", label:"Gandhi", year:1869, school:"Modern", region:"West", work:"My Experiments with Truth", lat:21.0, lng:71.0},
    {id:"Bankim", label:"Bankim Chandra", year:1838, school:"Literature", region:"East", work:"Anandamath", lat:22.6, lng:88.4}
];

// --- 2. RELATIONSHIPS ---
const lineages = [
    // Divine
    {s:"Narayana", t:"Brahma", type:"Guru"}, {s:"Brahma", t:"Vashishta", type:"Guru"},
    {s:"Vashishta", t:"Shakti", type:"Guru"}, {s:"Shakti", t:"Parashara", type:"Guru"},
    {s:"Parashara", t:"Vyasa", type:"Guru"}, {s:"Vyasa", t:"Shuka", type:"Guru"},
    {s:"Shiva", t:"Vasugupta", type:"Divine"}, {s:"Shiva", t:"Shankara", type:"Divine"},
    
    // Advaita
    {s:"Shuka", t:"Gaudapada", type:"Lineage"}, {s:"Gaudapada", t:"Govinda", type:"Guru"},
    {s:"Govinda", t:"Shankara", type:"Guru"}, {s:"Shankara", t:"Suresvara", type:"Guru"},
    {s:"Shankara", t:"Padmapada", type:"Guru"}, {s:"Shankara", t:"Totaka", type:"Guru"},
    {s:"Shankara", t:"Hastamalaka", type:"Guru"}, {s:"Shankara", t:"Vacaspati", type:"Influence"},
    {s:"Shankara", t:"Vidyaranya", type:"Lineage"}, {s:"Shankara", t:"Madhusudana", type:"Lineage"},
    {s:"Shankara", t:"Vivekananda", type:"Lineage"},
    
    // Dvaita
    {s:"Narayana", t:"Madhva", type:"Divine"},
    {s:"Madhva", t:"Jayatirtha", type:"Lineage"}, {s:"Jayatirtha", t:"Vyasatirtha", type:"Lineage"},
    {s:"Vyasatirtha", t:"Raghavendra", type:"Lineage"},
    
    // Vishishtadvaita
    {s:"Narayana", t:"Nammalvar", type:"Inspiration"}, {s:"Nammalvar", t:"Nathamuni", type:"Inspiration"},
    {s:"Nathamuni", t:"Yamuna", type:"GrandGuru"}, {s:"Yamuna", t:"Ramanuja", type:"Preceptor"},
    {s:"Ramanuja", t:"Desika", type:"Lineage"}, {s:"Ramanuja", t:"Pillai", type:"Lineage"},
    
    // Kashmir
    {s:"Vasugupta", t:"Somananda", type:"Lineage"}, {s:"Somananda", t:"Utpaladeva", type:"Guru"},
    {s:"Utpaladeva", t:"Abhinavagupta", type:"GrandGuru"}, {s:"Abhinavagupta", t:"Kshemaraja", type:"Guru"},
    {s:"Abhinavagupta", t:"Lakshmanjoo", type:"Lineage"},
    
    // Nyaya
    {s:"Gautama", t:"Vatsyayana", type:"Lineage"}, {s:"Vatsyayana", t:"Uddyotakara", type:"Lineage"},
    {s:"Uddyotakara", t:"Vacaspati", type:"Lineage"}, {s:"Vacaspati", t:"Udayana", type:"Lineage"},
    {s:"Udayana", t:"Gangesa", type:"Influence"}, {s:"Gangesa", t:"Raghunatha", type:"Lineage"},
    {s:"Raghunatha", t:"Gadadhara", type:"Lineage"},
    
    // Indophiles
    {s:"Panini", t:"Voltaire", type:"Study"}, {s:"Vyasa", t:"Oppenheimer", type:"Study"},
    {s:"Yajnavalkya", t:"Schopenhauer", type:"Study"}, {s:"Vivekananda", t:"Tesla", type:"Meeting"},
    {s:"Kalidasa", t:"Goethe", type:"Inspiration"}, {s:"Jones", t:"MaxMuller", type:"Influence"}
];
