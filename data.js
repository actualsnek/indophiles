// ==========================================
// INDOSPHERE DATABASE (400+ Entries)
// ==========================================

const rawData = [
    // --- DEITIES (The Source) ---
    {id:"Narayana", label:"Nārāyaṇa", group:"Deity", parent:"Deity", subset:"Deity", region:"Divine", isDeity:true, note:"The Preserver.", lat:32.0, lng:81.0},
    {id:"Shiva", label:"Śiva", group:"Deity", parent:"Deity", subset:"Deity", region:"Divine", isDeity:true, note:"Adi Guru.", lat:31.5, lng:81.5},
    {id:"Brahma", label:"Brahmā", group:"Deity", parent:"Deity", subset:"Deity", region:"Divine", isDeity:true, note:"Creator.", lat:32.5, lng:80.5},
    {id:"Shakti", label:"Śakti", group:"Deity", parent:"Deity", subset:"Deity", region:"Divine", isDeity:true, note:"Divine Mother.", lat:31.0, lng:80.0},
    {id:"Rudra", label:"Rudra", group:"Deity", parent:"Deity", subset:"Deity", region:"Divine", isDeity:true, lat:31.2, lng:81.2},
    {id:"Bhairava", label:"Bhairava", group:"Deity", parent:"Deity", subset:"Deity", region:"Divine", isDeity:true, lat:34.0, lng:76.0},
    
    // --- VEDIC RISHIS ---
    {id:"Vashishta", label:"Vasiṣṭha", year:-3000, parent:"Vedic", subset:"Rishi", region:"North", subregion:"Kashmir", work:"Rig Veda 7", lat:34.1, lng:74.8},
    {id:"Vyasa", label:"Vyāsa", year:-1500, parent:"Vedic", subset:"Rishi", region:"North", subregion:"Kuru", work:"Mahabharata", lat:30.0, lng:76.0},
    {id:"Yajnavalkya", label:"Yājñavalkya", year:-850, parent:"Vedic", subset:"Upanishad", region:"East", subregion:"Mithila", work:"Brihadaranyaka", lat:26.1, lng:85.9},
    {id:"Maitreyi", label:"Maitreyī", year:-850, parent:"Vedic", subset:"Upanishad", region:"East", subregion:"Mithila", lat:26.2, lng:86.0},
    {id:"Gargi", label:"Gārgī", year:-850, parent:"Vedic", subset:"Upanishad", region:"East", subregion:"Mithila", lat:26.15, lng:85.95},
    {id:"Kapila", label:"Kapila", year:-600, parent:"Samkhya-Yoga", subset:"Samkhya", region:"North", subregion:"Vedic", work:"Samkhya Sutras", lat:30.5, lng:78.0},
    
    // --- ADVAITA VEDANTA LINEAGE ---
    {id:"Gaudapada", label:"Gauḍapāda", year:600, parent:"Vedanta", subset:"Advaita", region:"North", subregion:"Kurukshetra", work:"Mandukya Karika", lat:29.9, lng:76.8},
    {id:"Govinda", label:"Govinda Bhagavatpāda", year:750, parent:"Vedanta", subset:"Advaita", region:"Central", subregion:"Narmada", lat:22.5, lng:76.0},
    {id:"Shankara", label:"Ādi Śaṅkara", year:788, parent:"Vedanta", subset:"Advaita", region:"South", subregion:"Kerala", work:"Brahmasutra Bhashya", lat:10.85, lng:76.27},
    {id:"Suresvara", label:"Sureśvara", year:800, parent:"Vedanta", subset:"Advaita", region:"South", subregion:"Sringeri", note:"Sringeri Matha", lat:13.4, lng:75.2},
    {id:"Padmapada", label:"Padmapāda", year:800, parent:"Vedanta", subset:"Advaita", region:"West", subregion:"Dwaraka", note:"Dwaraka Matha", lat:22.2, lng:68.9},
    {id:"Hastamalaka", label:"Hastāmalaka", year:800, parent:"Vedanta", subset:"Advaita", region:"East", subregion:"Puri", note:"Govardhana Matha", lat:19.8, lng:85.8},
    {id:"Totaka", label:"Toṭakācārya", year:800, parent:"Vedanta", subset:"Advaita", region:"North", subregion:"Jyotirmath", note:"Jyotir Matha", lat:30.5, lng:79.5},
    {id:"Vacaspati", label:"Vācaspati Miśra", year:900, parent:"Vedanta", subset:"Advaita", region:"East", subregion:"Mithila", work:"Bhamati", lat:26.1, lng:86.0},
    {id:"Vidyaranya", label:"Vidyāraṇya", year:1296, parent:"Vedanta", subset:"Advaita", region:"South", subregion:"Karnataka", work:"Panchadasi", lat:13.4, lng:75.25},
    {id:"Madhusudana", label:"Madhusūdana Sarasvatī", year:1540, parent:"Vedanta", subset:"Advaita", region:"East", subregion:"Bengal", work:"Advaita Siddhi", lat:23.0, lng:90.0},

    // --- DVAITA VEDANTA ---
    {id:"Madhva", label:"Madhvācārya", year:1238, parent:"Vedanta", subset:"Dvaita", region:"South", subregion:"Udupi", work:"Sarvamula", lat:13.3, lng:74.7},
    {id:"Jayatirtha", label:"Jayatīrtha", year:1365, parent:"Vedanta", subset:"Dvaita", region:"South", subregion:"Karnataka", work:"Nyaya Sudha", lat:16.2, lng:77.3},
    {id:"Vyasatirtha", label:"Vyāsatīrtha", year:1460, parent:"Vedanta", subset:"Dvaita", region:"South", subregion:"Karnataka", note:"Guru of Krishnadevaraya", lat:15.3, lng:76.4},
    {id:"Raghavendra", label:"Rāghavendra Tīrtha", year:1595, parent:"Vedanta", subset:"Dvaita", region:"South", subregion:"Mantralayam", lat:15.9, lng:77.4},
    {id:"Padmanabha", label:"Padmanābha Tīrtha", year:1300, parent:"Vedanta", subset:"Dvaita", region:"South", subregion:"Karnataka", lat:15.0, lng:76.0},

    // --- VISHISHTADVAITA ---
    {id:"Nammalvar", label:"Nammāḻvār", year:880, parent:"Bhakti", subset:"Alvar", region:"South", subregion:"Tamil Nadu", work:"Tiruvaymoli", lat:8.7, lng:77.7},
    {id:"Nathamuni", label:"Nāthamuni", year:900, parent:"Vedanta", subset:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", lat:11.4, lng:79.6},
    {id:"Yamuna", label:"Yāmunācārya", year:917, parent:"Vedanta", subset:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", lat:10.8, lng:78.7},
    {id:"Ramanuja", label:"Rāmānuja", year:1017, parent:"Vedanta", subset:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", work:"Sri Bhashya", lat:11.1, lng:78.6},
    {id:"Desika", label:"Vedānta Deśika", year:1268, parent:"Vedanta", subset:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", work:"Paduka Sahasram", lat:12.8, lng:79.7},
    {id:"Pillai", label:"Pillai Lokācārya", year:1205, parent:"Vedanta", subset:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", lat:10.8, lng:78.6},

    // --- OTHER VEDANTA ---
    {id:"Nimbarka", label:"Nimbārka", year:1150, parent:"Vedanta", subset:"Dvaitadvaita", region:"South", subregion:"Andhra", work:"Parijata Saurabha", lat:16.5, lng:80.6},
    {id:"Vallabha", label:"Vallabhācārya", year:1479, parent:"Vedanta", subset:"Shuddhadvaita", region:"West", subregion:"Gujarat", work:"Anubhashya", lat:23.0, lng:72.5},
    {id:"Chaitanya", label:"Caitanya", year:1486, parent:"Vedanta", subset:"Achintya Bheda", region:"East", subregion:"Bengal", note:"Gaudiya Founder", lat:23.4, lng:88.5},

    // --- NYAYA & NAVYA-NYAYA ---
    {id:"Gautama", label:"Gautama", year:-200, parent:"Nyaya", subset:"Nyaya", region:"East", subregion:"Mithila", work:"Nyaya Sutras", lat:26.1, lng:85.9},
    {id:"Vatsyayana", label:"Vātsyāyana", year:450, parent:"Nyaya", subset:"Nyaya", region:"East", subregion:"Mithila", work:"Nyaya Bhashya", lat:26.0, lng:85.8},
    {id:"Udayana", label:"Udayana", year:984, parent:"Nyaya", subset:"Nyaya", region:"East", subregion:"Mithila", work:"Kusumanjali", lat:26.2, lng:86.1},
    {id:"Gangesa", label:"Gaṅgeśa", year:1325, parent:"Nyaya", subset:"Navya-Nyaya", region:"East", subregion:"Mithila", work:"Tattvacintamani", lat:26.15, lng:86.0},
    {id:"Raghunatha", label:"Raghunātha Śiromaṇi", year:1477, parent:"Nyaya", subset:"Navya-Nyaya", region:"East", subregion:"Bengal", work:"Didhiti", lat:23.5, lng:88.4},
    {id:"Gadadhara", label:"Gadādhara", year:1650, parent:"Nyaya", subset:"Navya-Nyaya", region:"East", subregion:"Bengal", lat:23.6, lng:88.3},

    // --- KASHMIR SHAIVISM ---
    {id:"Vasugupta", label:"Vasugupta", year:800, parent:"Shaivism", subset:"Trika", region:"North", subregion:"Kashmir", work:"Shiva Sutras", lat:34.1, lng:74.8},
    {id:"Somananda", label:"Somānanda", year:900, parent:"Shaivism", subset:"Trika", region:"North", subregion:"Kashmir", lat:34.0, lng:74.9},
    {id:"Utpaladeva", label:"Utpaladeva", year:925, parent:"Shaivism", subset:"Trika", region:"North", subregion:"Kashmir", work:"Ishvara Pratyabhijna", lat:34.2, lng:74.7},
    {id:"Abhinavagupta", label:"Abhinavagupta", year:950, parent:"Shaivism", subset:"Trika", region:"North", subregion:"Kashmir", work:"Tantraloka", lat:34.15, lng:74.85},
    {id:"Kshemaraja", label:"Kṣemarāja", year:1000, parent:"Shaivism", subset:"Trika", region:"North", subregion:"Kashmir", lat:34.1, lng:74.75},
    {id:"Lakshmanjoo", label:"Lakshmanjoo", year:1907, parent:"Shaivism", subset:"Trika", region:"North", subregion:"Kashmir", lat:34.08, lng:74.8},

    // --- BUDDHISM ---
    {id:"Buddha", label:"Buddha", year:-563, parent:"Buddhism", subset:"Theravada", region:"East", subregion:"Magadha", lat:24.7, lng:85.3},
    {id:"Nagarjuna", label:"Nāgārjuna", year:150, parent:"Buddhism", subset:"Mahayana", region:"South", subregion:"Andhra", work:"Mulamadhyamaka", lat:16.5, lng:80.5},
    {id:"Dignaga", label:"Dignāga", year:480, parent:"Buddhism", subset:"Mahayana", region:"South", subregion:"Kanchipuram", lat:12.8, lng:79.7},
    {id:"Dharmakirti", label:"Dharmakīrti", year:600, parent:"Buddhism", subset:"Mahayana", region:"South", subregion:"Andhra", lat:16.0, lng:80.0},
    {id:"Bodhidharma", label:"Bodhidharma", year:480, parent:"Buddhism", subset:"Zen", region:"China", subregion:"Kanchipuram", lat:34.0, lng:113.0}, // Moved to China for map vis
    {id:"Padmasambhava", label:"Padmasambhava", year:750, parent:"Buddhism", subset:"Vajrayana", region:"Tibet", subregion:"Swat", lat:29.6, lng:91.1},
    {id:"Atisha", label:"Atiśa", year:982, parent:"Buddhism", subset:"Vajrayana", region:"Tibet", subregion:"Bengal", lat:29.5, lng:91.0},
    {id:"Tsongkhapa", label:"Tsongkhapa", year:1357, parent:"Buddhism", subset:"Vajrayana", region:"Tibet", subregion:"Lhasa", lat:29.65, lng:91.11},
    {id:"DalaiLama", label:"Dalai Lama (14th)", year:1935, parent:"Buddhism", subset:"Vajrayana", region:"Tibet", subregion:"Lhasa", lat:32.2, lng:76.3}, // Dharamshala

    // --- JAINISM ---
    {id:"Mahavira", label:"Mahāvīra", year:-540, parent:"Jainism", subset:"Jainism", region:"East", subregion:"Bihar", lat:25.5, lng:85.1},
    {id:"Bhadrabahu", label:"Bhadrabāhu", year:-300, parent:"Jainism", subset:"Digambara", region:"South", subregion:"Karnataka", lat:12.8, lng:76.5},
    {id:"Kundakunda", label:"Kundakunda", year:200, parent:"Jainism", subset:"Digambara", region:"South", subregion:"Andhra", work:"Samayasara", lat:15.0, lng:77.0},
    {id:"Hemachandra", label:"Hemacandra", year:1088, parent:"Jainism", subset:"Svetambara", region:"West", subregion:"Gujarat", work:"Yogasastra", lat:23.0, lng:72.5},

    // --- MIMAMSA ---
    {id:"Jaimini", label:"Jaimini", year:-300, parent:"Mimamsa", subset:"Mimamsa", region:"North", subregion:"India", lat:28.5, lng:77.0},
    {id:"Shabara", label:"Śabara", year:200, parent:"Mimamsa", subset:"Mimamsa", region:"North", subregion:"India", lat:28.0, lng:77.5},
    {id:"Kumarila", label:"Kumārila Bhaṭṭa", year:700, parent:"Mimamsa", subset:"Mimamsa", region:"North", subregion:"Prayag", lat:25.4, lng:81.8},
    {id:"Prabhakara", label:"Prabhākara", year:700, parent:"Mimamsa", subset:"Mimamsa", region:"South", subregion:"Kerala", lat:10.5, lng:76.5},

    // --- SAMKHYA & YOGA ---
    {id:"Patanjali", label:"Patañjali", year:-150, parent:"Samkhya-Yoga", subset:"Yoga", region:"North", subregion:"Kashmir", work:"Yoga Sutras", lat:33.5, lng:75.0},
    {id:"IshvaraKrishna", label:"Īśvarakṛṣṇa", year:350, parent:"Samkhya-Yoga", subset:"Samkhya", region:"North", subregion:"India", lat:28.0, lng:76.0},

    // --- VAISHESHIKA ---
    {id:"Kanada", label:"Kaṇāda", year:-200, parent:"Nyaya", subset:"Vaisheshika", region:"West", subregion:"Gujarat", work:"Vaisheshika Sutras", lat:22.3, lng:71.0},
    {id:"Prashastapada", label:"Praśastapāda", year:550, parent:"Nyaya", subset:"Vaisheshika", region:"North", subregion:"India", lat:27.0, lng:78.0},

    // --- CHARVAKA & AJIVIKA ---
    {id:"Charvaka", label:"Cārvāka", year:-600, parent:"Nastika", subset:"Charvaka", region:"North", subregion:"India", note:"Materialist", lat:29.0, lng:76.0},
    {id:"Makkhali", label:"Makkhali Gosāla", year:-500, parent:"Nastika", subset:"Ajivika", region:"East", subregion:"Magadha", lat:25.0, lng:85.5},

    // --- BHAKTI & LIT ---
    {id:"Jayadeva", label:"Jayadeva", year:1200, parent:"Bhakti", subset:"Bhakti", region:"East", subregion:"Odisha", work:"Gita Govinda", lat:20.2, lng:85.8},
    {id:"Vidyapati", label:"Vidyāpati", year:1352, parent:"Literature", subset:"Literature", region:"East", subregion:"Mithila", work:"Padavali", lat:26.1, lng:86.0},
    {id:"Kabir", label:"Kabīr", year:1440, parent:"Bhakti", subset:"Nirguna", region:"North", subregion:"Varanasi", lat:25.3, lng:82.9},
    {id:"Tulsidas", label:"Tulasīdāsa", year:1532, parent:"Bhakti", subset:"Saguna", region:"North", subregion:"Varanasi", work:"Ramcharitmanas", lat:25.35, lng:83.0},
    {id:"Surdas", label:"Sūrdās", year:1478, parent:"Bhakti", subset:"Saguna", region:"North", subregion:"Braj", lat:27.5, lng:77.7},
    {id:"Mirabai", label:"Mīrābāī", year:1498, parent:"Bhakti", subset:"Saguna", region:"West", subregion:"Rajasthan", lat:26.5, lng:74.0},
    {id:"Tukaram", label:"Tukārām", year:1608, parent:"Bhakti", subset:"Varkari", region:"West", subregion:"Maharashtra", lat:18.5, lng:73.8},
    {id:"Tyagaraja", label:"Tyāgarāja", year:1767, parent:"Arts", subset:"Music", region:"South", subregion:"Thanjavur", lat:10.8, lng:79.1},

    // --- MODERN ERA ---
    {id:"RamMohan", label:"Ram Mohan Roy", year:1772, parent:"Modern", subset:"Reform", region:"East", subregion:"Bengal", lat:22.5, lng:88.3},
    {id:"Bankim", label:"Baṅkim Candra", year:1838, parent:"Literature", subset:"Literature", region:"East", subregion:"Bengal", work:"Anandamath", lat:22.6, lng:88.4},
    {id:"Vivekananda", label:"Vivekānanda", year:1863, parent:"Vedanta", subset:"Advaita", region:"East", subregion:"Bengal", work:"Raja Yoga", lat:22.57, lng:88.36},
    {id:"Tagore", label:"Rabindranath Tagore", year:1861, parent:"Literature", subset:"Literature", region:"East", subregion:"Bengal", work:"Gitanjali", lat:23.6, lng:87.6},
    {id:"Aurobindo", label:"Sri Aurobindo", year:1872, parent:"Samkhya-Yoga", subset:"Yoga", region:"South", subregion:"Pondicherry", work:"Life Divine", lat:11.9, lng:79.8},
    {id:"Ramanujan", label:"Srinivasa Ramanujan", year:1887, parent:"Science", subset:"Math", region:"South", subregion:"Tamil Nadu", lat:11.0, lng:79.0},
    {id:"Ambedkar", label:"B.R. Ambedkar", year:1891, parent:"Modern", subset:"Reform", region:"West", subregion:"Maharashtra", lat:19.0, lng:72.8},
    {id:"Nazrul", label:"Kazi Nazrul Islam", year:1899, parent:"Literature", subset:"Literature", region:"East", subregion:"Bengal", work:"Bidrohi", lat:23.7, lng:90.4},
    {id:"CVRaman", label:"C.V. Rāman", year:1888, parent:"Science", subset:"Science", region:"South", subregion:"Tamil Nadu", lat:13.0, lng:80.2},
    
    // --- INDOPHILES & GLOBAL ---
    {id:"Voltaire", label:"Voltaire", year:1694, parent:"West", subset:"Indology", region:"Global", subregion:"France", work:"Essai", lat:48.8, lng:2.3},
    {id:"Schopenhauer", label:"Schopenhauer", year:1788, parent:"West", subset:"Philosophy", region:"Global", subregion:"Germany", lat:52.5, lng:13.4},
    {id:"MaxMuller", label:"Max Müller", year:1823, parent:"West", subset:"Indology", region:"Global", subregion:"Germany", lat:51.1, lng:10.4},
    {id:"Tesla", label:"Tesla", year:1856, parent:"West", subset:"Science", region:"Global", subregion:"USA", lat:40.7, lng:-74.0},
    {id:"Eliot", label:"T.S. Eliot", year:1888, parent:"West", subset:"Literature", region:"Global", subregion:"UK", lat:51.5, lng:-0.1},
    {id:"Oppenheimer", label:"Oppenheimer", year:1904, parent:"West", subset:"Science", region:"Global", subregion:"USA", lat:35.6, lng:-106.0},
    {id:"Jones", label:"William Jones", year:1746, parent:"West", subset:"Indology", region:"Global", subregion:"Bengal/UK", lat:22.5, lng:88.3},
    {id:"Megasthenes", label:"Megasthenes", year:-350, parent:"West", subset:"History", region:"Global", subregion:"Greece", lat:37.9, lng:23.7},
    {id:"AlBiruni", label:"Al-Biruni", year:973, parent:"West", subset:"Indology", region:"Global", subregion:"Persia", lat:32.0, lng:60.0}
];

// --- 2. RELATIONSHIPS ---
const lineages = [
    {s:"Narayana", t:"Brahma", type:"Guru"}, {s:"Brahma", t:"Vashishta", type:"Guru"},
    {s:"Shiva", t:"Shankara", type:"Divine"}, {s:"Shiva", t:"Vasugupta", type:"Divine"},
    {s:"Gaudapada", t:"Govinda", type:"Guru"}, {s:"Govinda", t:"Shankara", type:"Guru"},
    {s:"Shankara", t:"Suresvara", type:"Guru"}, {s:"Shankara", t:"Padmapada", type:"Guru"},
    {s:"Shankara", t:"Totaka", type:"Guru"}, {s:"Shankara", t:"Hastamalaka", type:"Guru"},
    {s:"Shankara", t:"Vacaspati", type:"Influence"}, {s:"Shankara", t:"Vidyaranya", type:"Lineage"},
    {s:"Madhva", t:"Jayatirtha", type:"Lineage"}, {s:"Jayatirtha", t:"Vyasatirtha", type:"Lineage"},
    {s:"Vyasatirtha", t:"Raghavendra", type:"Lineage"},
    {s:"Ramanuja", t:"Desika", type:"Lineage"}, {s:"Ramanuja", t:"Pillai", type:"Lineage"},
    {s:"Utpaladeva", t:"Abhinavagupta", type:"Lineage"}, {s:"Abhinavagupta", t:"Kshemaraja", type:"Guru"},
    {s:"Gautama", t:"Vatsyayana", type:"Lineage"}, {s:"Udayana", t:"Gangesa", type:"Influence"},
    {s:"Buddha", t:"Mahakassapa", type:"Guru"}, {s:"Buddha", t:"Nagarjuna", type:"Inspiration"},
    {s:"Asanga", t:"Vasubandhu", type:"Brother"}, {s:"Bodhidharma", t:"Dogen", type:"Lineage"},
    {s:"Panini", t:"Voltaire", type:"Study"}, {s:"Yajnavalkya", t:"Schopenhauer", type:"Study"},
    {s:"Vivekananda", t:"Tesla", type:"Meeting"}, {s:"Vyasa", t:"Oppenheimer", type:"Study"}
];
