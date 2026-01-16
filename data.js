const rawData = [
    // --- DEITIES ---
    {id:"Narayana", label:"Nārāyaṇa", group:"Deity", region:"Divine", isDeity:true, note:"The Preserver."},
    {id:"Shiva", label:"Śiva", group:"Deity", region:"Divine", isDeity:true, note:"Adi Guru."},
    {id:"Brahma", label:"Brahmā", group:"Deity", region:"Divine", isDeity:true, note:"The Creator."},
    {id:"Shakti", label:"Śakti", group:"Deity", region:"Divine", isDeity:true, note:"Divine Mother."},
    {id:"Rudra", label:"Rudra", group:"Deity", region:"Divine", isDeity:true, note:"Vedic Form."},
    {id:"Bhairava", label:"Bhairava", group:"Deity", region:"Divine", isDeity:true, note:"Trika Source."},
    
    // --- ANCIENT RISHIS ---
    {id:"Dhanvantari", label:"Dhanvantari", year:-3000, school:"Ayurveda", region:"North", work:"Ayurveda", others:["Dhanvantari Nighantu"], lat:30.0, lng:78.0},
    {id:"Vyasa", label:"Vyāsa", year:-1500, school:"Vedic", region:"North", work:"Mahabharata", others:["Brahma Sutras", "Bhagavata Purana"], lat:30.2, lng:79.0},
    {id:"Vashishta", label:"Vashishta", year:-3000, school:"Vedic", region:"North", work:"Rig Veda 7", others:["Yoga Vashishta"], lat:34.0, lng:76.0},
    {id:"Parashara", label:"Parashara", year:-2000, school:"Vedic", region:"North", work:"Vishnu Purana", others:["Parashara Smriti", "Brihat Parashara Hora"], lat:33.0, lng:75.0},
    {id:"Shuka", label:"Shuka", year:-1400, school:"Advaita", region:"North", work:"Bhagavata (Narrator)", others:[], lat:31.0, lng:77.0},
    {id:"Yajnavalkya", label:"Yājñavalkya", year:-850, school:"Vedic", region:"East", work:"Brihadaranyaka", others:["Shatapatha Brahmana", "Yajnavalkya Smriti"], lat:26.1, lng:85.9},
    {id:"Kapila", label:"Kapila", year:-600, school:"Samkhya", region:"North", work:"Samkhya Sutras", others:[], lat:30.0, lng:78.0},
    {id:"Jaimini", label:"Jaimini", year:-300, school:"Mimamsa", region:"North", work:"Mimamsa Sutras", others:[], lat:29.0, lng:77.0},
    {id:"Gautama", label:"Gautama", year:-200, school:"Nyaya", region:"East", work:"Nyaya Sutras", others:[], lat:26.0, lng:86.0},
    {id:"Kanada", label:"Kaṇāda", year:-200, school:"Vaisheshika", region:"West", work:"Vaisheshika Sutras", others:[], lat:22.5, lng:71.0},
    {id:"Patanjali", label:"Patañjali", year:-150, school:"Yoga", region:"North", work:"Yoga Sutras", others:["Mahabhasya"], lat:34.0, lng:74.5},
    {id:"Panini", label:"Pāṇini", year:-500, school:"Grammar", region:"North West", work:"Ashtadhyayi", others:["Dhatupatha"], lat:34.0, lng:72.0},
    {id:"Chanakya", label:"Cāṇakya", year:-350, school:"Statecraft", region:"East", work:"Arthashastra", others:["Chanakya Niti"], lat:25.6, lng:85.1},
    {id:"Sushruta", label:"Suśruta", year:-600, school:"Medicine", region:"North", work:"Sushruta Samhita", others:[], lat:25.3, lng:83.0},
    {id:"Charvaka", label:"Cārvāka", year:-600, school:"Nastika", region:"North", work:"Barhaspatya Sutras", others:[], lat:28.0, lng:77.0},

    // --- HETERODOX ---
    {id:"Buddha", label:"Buddha", year:-563, school:"Buddhism", region:"East", work:"Pali Canon", others:["Dhammapada"], lat:24.7, lng:85.0},
    {id:"Mahavira", label:"Mahāvīra", year:-540, school:"Jainism", region:"East", work:"Agamas", others:[], lat:25.5, lng:85.5},
    {id:"Makkhali", label:"Makkhali Gosala", year:-500, school:"Ajivika", region:"East", work:"(Lost)", others:[], lat:25.0, lng:86.0},

    // --- ADVAITA LINEAGE ---
    {id:"Gaudapada", label:"Gauḍapāda", year:600, school:"Advaita", region:"North", work:"Mandukya Karika", others:[], lat:30.0, lng:78.0},
    {id:"Govinda", label:"Govinda Bhagavatpāda", year:750, school:"Advaita", region:"Central", work:"Yoga Taravali", others:[], lat:22.0, lng:76.0},
    {id:"Shankara", label:"Ādi Śaṅkara", year:788, school:"Advaita", region:"South", work:"Brahmasutra Bhashya", others:["Vivekachudamani", "Bhaja Govindam", "Soundarya Lahari", "Upadesasahasri"], lat:10.0, lng:76.3},
    {id:"Suresvara", label:"Sureśvara", year:800, school:"Advaita", region:"South", work:"Naishkarmya Siddhi", others:["Manasollasa", "Vartikas"], lat:13.4, lng:75.2},
    {id:"Padmapada", label:"Padmapāda", year:800, school:"Advaita", region:"South", work:"Panchapadika", others:[], lat:12.0, lng:75.0},
    {id:"Hastamalaka", label:"Hastāmalaka", year:800, school:"Advaita", region:"South", work:"Hastamalakiya", others:[], lat:12.1, lng:75.1},
    {id:"Totaka", label:"Toṭakācārya", year:800, school:"Advaita", region:"South", work:"Totakashtakam", others:[], lat:12.2, lng:75.2},
    {id:"Vidyaranya", label:"Vidyāraṇya", year:1296, school:"Advaita", region:"South", work:"Panchadasi", others:["Jivanmuktiviveka"], lat:13.4, lng:75.2},
    {id:"Madhusudana", label:"Madhusūdana", year:1540, school:"Advaita", region:"East", work:"Advaita Siddhi", others:["Gudhartha Dipika"], lat:23.0, lng:89.0},

    // --- DVAITA LINEAGE ---
    {id:"Achyuta", label:"Acyutaprekṣa", year:1200, school:"Dvaita", region:"South", note:"Guru of Madhva", others:[], lat:13.3, lng:74.7},
    {id:"Madhva", label:"Madhvācārya", year:1238, school:"Dvaita", region:"South", work:"Sarvamula", others:["Mahabharata Tatparya Nirnaya"], lat:13.3, lng:74.7},
    {id:"Jayatirtha", label:"Jayatīrtha", year:1365, school:"Dvaita", region:"South", work:"Nyaya Sudha", others:["Vadavali"], lat:16.2, lng:77.3},
    {id:"Vyasatirtha", label:"Vyāsatīrtha", year:1460, school:"Dvaita", region:"South", work:"Nyayamrita", others:["Tarkatandava"], lat:15.3, lng:76.4},
    {id:"Raghavendra", label:"Rāghavendra", year:1595, school:"Dvaita", region:"South", work:"Parimala", others:[], lat:15.9, lng:77.4},

    // --- VISHISHTADVAITA ---
    {id:"Nammalvar", label:"Nammāḻvār", year:880, school:"Bhakti", region:"South", work:"Tiruvaymoli", others:[], lat:8.7, lng:77.7},
    {id:"Nathamuni", label:"Nāthamuni", year:900, school:"Vishishtadvaita", region:"South", work:"Yoga Rahasya", others:["Nyayatattva"], lat:11.4, lng:79.6},
    {id:"Yamuna", label:"Yāmunācārya", year:917, school:"Vishishtadvaita", region:"South", work:"Siddhitraya", others:["Gitartha Sangraha"], lat:10.8, lng:78.7},
    {id:"Ramanuja", label:"Rāmānuja", year:1017, school:"Vishishtadvaita", region:"South", work:"Sri Bhashya", others:["Vedartha Sangraha", "Gita Bhashya"], lat:11.1, lng:78.6},
    {id:"Desika", label:"Vedānta Deśika", year:1268, school:"Vishishtadvaita", region:"South", work:"Paduka Sahasram", others:["Rahasyatrayasara"], lat:12.8, lng:79.7},

    // --- KASHMIR SHAIVISM ---
    {id:"Vasugupta", label:"Vasugupta", year:800, school:"Kashmir Shaivism", region:"North", work:"Shiva Sutras", others:["Spanda Karika"], lat:34.1, lng:74.8},
    {id:"Somananda", label:"Somānanda", year:900, school:"Kashmir Shaivism", region:"North", work:"Shiva Drishti", others:[], lat:34.0, lng:74.9},
    {id:"Utpaladeva", label:"Utpaladeva", year:925, school:"Kashmir Shaivism", region:"North", work:"Ishvara Pratyabhijna", others:["Sivastotravali"], lat:34.2, lng:74.7},
    {id:"Abhinavagupta", label:"Abhinavagupta", year:950, school:"Kashmir Shaivism", region:"North", work:"Tantraloka", others:["Abhinavabharati", "Paramarthasara"], lat:34.1, lng:74.8},
    {id:"Kshemaraja", label:"Kṣemarāja", year:1000, school:"Kashmir Shaivism", region:"North", work:"Pratyabhijnahridayam", others:["Shiva Sutra Vimarshini"], lat:34.1, lng:74.7},

    // --- NYAYA & NAVYA-NYAYA ---
    {id:"Vatsyayana", label:"Vātsyāyana", year:450, school:"Nyaya", region:"North", work:"Nyaya Bhashya", others:[], lat:26.0, lng:80.0},
    {id:"Uddyotakara", label:"Uddyotakara", year:600, school:"Nyaya", region:"North", work:"Nyaya Varttika", others:[], lat:26.5, lng:80.5},
    {id:"Vacaspati", label:"Vācaspati Miśra", year:900, school:"Nyaya", region:"East", work:"Nyaya Tatparya Tika", others:["Bhamati"], lat:26.1, lng:86.0},
    {id:"Udayana", label:"Udayana", year:984, school:"Nyaya", region:"East", work:"Kusumanjali", others:["Atmatattvaviveka"], lat:26.2, lng:86.1},
    {id:"Gangesa", label:"Gaṅgeśa", year:1325, school:"Nyaya", region:"East", work:"Tattvacintamani", others:[], lat:26.1, lng:86.0},
    {id:"Raghunatha", label:"Raghunātha Śiromaṇi", year:1477, school:"Nyaya", region:"East", work:"Didhiti", others:[], lat:23.5, lng:88.4},

    // --- BUDDHISM LINEAGE ---
    {id:"Mahakassapa", label:"Mahākāśyapa", year:-500, school:"Buddhism", region:"East", note:"1st Patriarch", others:[], lat:25.0, lng:85.0},
    {id:"Ananda", label:"Ānanda", year:-500, school:"Buddhism", region:"East", note:"Dhamma Keeper", others:[], lat:25.1, lng:85.1},
    {id:"Nagarjuna", label:"Nāgārjuna", year:150, school:"Mahayana", region:"South", work:"Mulamadhyamaka", others:["Ratnavali"], lat:16.5, lng:80.5},
    {id:"Dignaga", label:"Dignāga", year:480, school:"Mahayana", region:"South", work:"Pramana Samuccaya", others:["Hetucakra"], lat:12.8, lng:79.7},
    {id:"Dharmakirti", label:"Dharmakīrti", year:600, school:"Mahayana", region:"South", work:"Pramanavarttika", others:[], lat:16.0, lng:80.0},
    {id:"Bodhidharma", label:"Bodhidharma", year:480, school:"Zen", region:"South", work:"Zen Teachings", others:[], lat:12.8, lng:79.7},
    {id:"Padmasambhava", label:"Padmasambhava", year:750, school:"Vajrayana", region:"North West", note:"Guru Rinpoche", others:[], lat:35.0, lng:72.0},
    {id:"Atisha", label:"Atiśa", year:982, school:"Vajrayana", region:"East", note:"Kadampa Founder", others:[], lat:23.0, lng:90.0},

    // --- JAINISM ---
    {id:"GautamaGanadhara", label:"Gautama Gaṇadhara", year:-500, school:"Jainism", region:"East", note:"Disciple", others:[], lat:25.5, lng:85.5},
    {id:"Bhadrabahu", label:"Bhadrabāhu", year:-300, school:"Jainism", region:"South", work:"Kalpa Sutra", others:[], lat:12.8, lng:76.5},
    {id:"Kundakunda", label:"Kundakunda", year:200, school:"Jainism", region:"South", work:"Samayasara", others:[], lat:15.0, lng:77.0},
    {id:"Hemachandra", label:"Hemacandra", year:1088, school:"Jainism", region:"West", work:"Yogasastra", others:["Siddha-Hema-Shabdanushasana"], lat:23.0, lng:72.5},

    // --- BHAKTI & LIT ---
    {id:"Jayadeva", label:"Jayadeva", year:1200, school:"Bhakti", region:"East", work:"Gita Govinda", others:["Dasavatara Stotra"], lat:20.2, lng:85.8},
    {id:"Vidyapati", label:"Vidyāpati", year:1352, school:"Literature", region:"East", work:"Padavali", others:["Kirtilata"], lat:26.1, lng:86.0},
    {id:"Chaitanya", label:"Caitanya", year:1486, school:"Bhakti", region:"East", work:"Siksastakam", others:[], lat:23.4, lng:88.5},
    {id:"Kabir", label:"Kabīr", year:1440, school:"Bhakti", region:"North", work:"Bijak", others:["Sakhi Granth"], lat:25.3, lng:82.9},
    {id:"Tulsidas", label:"Tulasīdāsa", year:1532, school:"Bhakti", region:"North", work:"Ramcharitmanas", others:["Vinaya Patrika"], lat:25.35, lng:83.0},
    {id:"Mirabai", label:"Mīrābāī", year:1498, school:"Bhakti", region:"West", work:"Bhajans", others:[], lat:26.5, lng:74.0},
    {id:"Tyagaraja", label:"Tyāgarāja", year:1767, school:"Music", region:"South", work:"Pancharatna Kritis", others:[], lat:10.8, lng:79.1},

    // --- INDOLOGISTS (From your CSV) ---
    {id:"Megasthenes", label:"Megasthenes", year:-350, school:"Indology", region:"Global", work:"Indica", others:[], lat:37.9, lng:23.7},
    {id:"Faxian", label:"Faxian", year:399, school:"Indology", region:"China", work:"Records of Buddhist Kingdoms", others:[], lat:34.3, lng:108.9},
    {id:"Xuanzang", label:"Xuanzang", year:629, school:"Indology", region:"China", work:"Great Tang Records", others:[], lat:34.0, lng:108.0},
    {id:"AlBiruni", label:"Al-Biruni", year:973, school:"Indology", region:"Global", work:"Indica", others:["Chronology of Ancient Nations"], lat:32.0, lng:60.0},
    {id:"MarcoPolo", label:"Marco Polo", year:1288, school:"Indology", region:"Global", work:"Travels", others:[], lat:45.4, lng:12.3},
    {id:"Jones", label:"William Jones", year:1746, school:"Indology", region:"Global", work:"Asiatic Researches", others:["Sakuntala Translation"], lat:51.5, lng:-0.1},
    {id:"MaxMuller", label:"Max Müller", year:1823, school:"Indology", region:"Global", work:"Sacred Books of the East", others:["History of Sanskrit Lit"], lat:51.1, lng:10.4},
    {id:"Prinsep", label:"James Prinsep", year:1799, school:"Indology", region:"Global", work:"Decipherment of Brahmi", others:[], lat:51.0, lng:-0.2},
    {id:"Cunningham", label:"Alexander Cunningham", year:1814, school:"Indology", region:"Global", work:"ASI Reports", others:[], lat:55.0, lng:-3.0},
    {id:"Basham", label:"A.L. Basham", year:1914, school:"Indology", region:"Global", work:"The Wonder That Was India", others:[], lat:51.5, lng:-0.1},
    {id:"Renou", label:"Louis Renou", year:1896, school:"Indology", region:"Global", work:"Vedic India", others:[], lat:48.8, lng:2.3},
    {id:"Schopenhauer", label:"Schopenhauer", year:1788, school:"Philosophy", region:"Global", work:"World as Will", others:["Parerga and Paralipomena"], lat:52.5, lng:13.4},
    {id:"Voltaire", label:"Voltaire", year:1694, school:"Philosophy", region:"Global", work:"Essai sur les mœurs", others:["Fragments on India"], lat:48.8, lng:2.3},
    {id:"Tesla", label:"Tesla", year:1856, school:"Science", region:"Global", work:"AC Current", others:[], note:"Vedantic influence.", lat:40.7, lng:-74.0},
    {id:"Oppenheimer", label:"Oppenheimer", year:1904, school:"Science", region:"Global", work:"Trinity", others:[], note:"Gita scholar.", lat:35.6, lng:-106.0},
    {id:"Eliot", label:"T.S. Eliot", year:1888, school:"Literature", region:"Global", work:"The Waste Land", others:["Four Quartets"], lat:51.5, lng:-0.1},
    
    // --- MODERN INDIAN ---
    {id:"Vivekananda", label:"Vivekānanda", year:1863, school:"Advaita", region:"East", work:"Raja Yoga", others:["Karma Yoga", "Chicago Address"], lat:22.57, lng:88.36},
    {id:"Aurobindo", label:"Sri Aurobindo", year:1872, school:"Yoga", region:"South", work:"Life Divine", others:["Savitri"], lat:11.9, lng:79.8},
    {id:"Tagore", label:"Rabindranath Tagore", year:1861, school:"Literature", region:"East", work:"Gitanjali", others:["Gora", "Jana Gana Mana"], lat:23.6, lng:87.6},
    {id:"Ramanujan", label:"Srinivasa Ramanujan", year:1887, school:"Science", region:"South", work:"Notebooks", others:["Mock Theta Functions"], lat:11.0, lng:79.0},
    {id:"Ambedkar", label:"B.R. Ambedkar", year:1891, school:"Modern", region:"West", work:"Constitution of India", others:["Annihilation of Caste"], lat:19.0, lng:72.8}
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
    {s:"Utpaladeva", t:"Abhinavagupta", type:"GrandGuru"}, {s:"Abhinavagupta", t:"Kshemaraja", type: "Guru"},
    {s:"Abhinavagupta", t:"Lakshmanjoo", type:"Lineage"},
    
    // Nyaya
    {s:"Gautama", t:"Vatsyayana", type:"Lineage"}, {s:"Vatsyayana", t:"Uddyotakara", type:"Lineage"},
    {s:"Uddyotakara", t:"Vacaspati", type:"Lineage"}, {s:"Vacaspati", t:"Udayana", type:"Lineage"},
    {s:"Udayana", t:"Gangesa", type:"Influence"}, {s:"Gangesa", t:"Raghunatha", type:"Lineage"},
    {s:"Raghunatha", t:"Gadadhara", type:"Lineage"},
    
    // Buddhism
    {s:"Buddha", t:"Mahakassapa", type:"Guru"}, {s:"Mahakassapa", t:"Ananda", type:"Guru"},
    {s:"Buddha", t:"Nagarjuna", type:"Inspiration"}, {s:"Nagarjuna", t:"Aryadeva", type:"Guru"},
    {s:"Asanga", t:"Vasubandhu", type:"Brother"}, {s:"Vasubandhu", t:"Dignaga", type:"Lineage"},
    {s:"Bodhidharma", t:"Huineng", type:"Lineage"}, {s:"Padmasambhava", t:"Milarepa", type:"Lineage"},
    {s:"Tsongkhapa", t:"DalaiLama", type:"Lineage"},
    
    // Jainism
    {s:"Mahavira", t:"GautamaGanadhara", type:"Guru"}, {s:"Mahavira", t:"Bhadrabahu", type:"Lineage"},
    {s:"Bhadrabahu", t:"Kundakunda", type:"Lineage"}, {s:"Mahavira", t:"Hemachandra", type:"Lineage"},
    
    // Mimamsa
    {s:"Jaimini", t:"Shabara", type:"Lineage"}, {s:"Shabara", t:"Kumarila", type:"Lineage"},
    {s:"Kumarila", t:"Mandana", type:"Guru"}, {s:"Kumarila", t:"Prabhakara", type:"Guru"},
    
    // Samkhya
    {s:"Kapila", t:"Asuri", type:"Guru"}, {s:"Asuri", t:"Panchashikha", type:"Guru"},
    {s:"Panchashikha", t:"IshvaraKrishna", type:"Lineage"},
    
    // Other
    {s:"Ramanuja", t:"Madhva", type:"Reaction"}, {s:"Jayadeva", t:"Chaitanya", type:"Influence"},
    {s:"Chaitanya", t:"Tagore", type:"Influence"}, {s:"Ramakrishna", t:"Vivekananda", type:"Guru"},
    
    // Indophiles
    {s:"Panini", t:"Voltaire", type:"Study"}, {s:"Vyasa", t:"Oppenheimer", type:"Study"},
    {s:"Yajnavalkya", t:"Schopenhauer", type:"Study"}, {s:"Vivekananda", t:"Tesla", type:"Meeting"},
    {s:"Kalidasa", t:"Goethe", type:"Inspiration"}, {s:"Jones", t:"MaxMuller", type:"Influence"}
];
