const rawData = [
    // --- DEITIES ---
    {id:"Narayana", label:"Nārāyaṇa", group:"Deity", region:"Divine", isDeity:true, note:"The Preserver."},
    {id:"Shiva", label:"Śiva", group:"Deity", region:"Divine", isDeity:true, note:"Adi Guru."},
    {id:"Brahma", label:"Brahmā", group:"Deity", region:"Divine", isDeity:true, note:"The Creator."},
    {id:"Shakti", label:"Śakti", group:"Deity", region:"Divine", isDeity:true, note:"Divine Mother."},
    {id:"Rudra", label:"Rudra", group:"Deity", region:"Divine", isDeity:true, note:"Vedic Form."},
    {id:"Bhairava", label:"Bhairava", group:"Deity", region:"Divine", isDeity:true, note:"Trika Source."},

    // --- ANCIENT RISHIS ---
    {id:"Dhanvantari", label:"Dhanvantari", year:-3000, school:"Ayurveda", region:"North", work:"Ayurveda", others:["Dhanvantari Nighantu"]},
    {id:"Vyasa", label:"Vyāsa", year:-1500, school:"Vedic", region:"North", work:"Mahabharata", others:["Brahma Sutras", "Bhagavata Purana"]},
    {id:"Vashishta", label:"Vashishta", year:-3000, school:"Vedic", region:"North", work:"Rig Veda 7", others:["Yoga Vashishta"]},
    {id:"Parashara", label:"Parashara", year:-2000, school:"Vedic", region:"North", work:"Vishnu Purana", others:["Parashara Smriti"]},
    {id:"Shuka", label:"Shuka", year:-1400, school:"Advaita", region:"North", work:"Bhagavata (Narrator)", others:[]},
    {id:"Yajnavalkya", label:"Yājñavalkya", year:-850, school:"Vedic", region:"East", work:"Brihadaranyaka", others:["Shatapatha Brahmana"]},
    {id:"Kapila", label:"Kapila", year:-600, school:"Samkhya", region:"North", work:"Samkhya Sutras", others:[]},
    {id:"Jaimini", label:"Jaimini", year:-300, school:"Mimamsa", region:"North", work:"Mimamsa Sutras", others:[]},
    {id:"Gautama", label:"Gautama", year:-200, school:"Nyaya", region:"East", work:"Nyaya Sutras", others:[]},
    {id:"Kanada", label:"Kaṇāda", year:-200, school:"Vaisheshika", region:"West", work:"Vaisheshika Sutras", others:[]},
    {id:"Patanjali", label:"Patañjali", year:-150, school:"Yoga", region:"North", work:"Yoga Sutras", others:["Mahabhasya"]},
    {id:"Panini", label:"Pāṇini", year:-500, school:"Grammar", region:"North West", work:"Ashtadhyayi", others:["Dhatupatha"]},
    {id:"Chanakya", label:"Cāṇakya", year:-350, school:"Statecraft", region:"East", work:"Arthashastra", others:["Chanakya Niti"]},
    {id:"Sushruta", label:"Suśruta", year:-600, school:"Medicine", region:"North", work:"Sushruta Samhita", others:[]},
    {id:"Charvaka", label:"Cārvāka", year:-600, school:"Nastika", region:"North", work:"Barhaspatya Sutras", others:[]},

    // --- HETERODOX ---
    {id:"Buddha", label:"Buddha", year:-563, school:"Buddhism", region:"East", work:"Pali Canon", others:["Dhammapada"]},
    {id:"Mahavira", label:"Mahāvīra", year:-540, school:"Jainism", region:"East", work:"Agamas", others:[]},
    {id:"Makkhali", label:"Makkhali Gosala", year:-500, school:"Ajivika", region:"East", work:"(Lost)", others:[]},

    // --- ADVAITA LINEAGE ---
    {id:"Gaudapada", label:"Gauḍapāda", year:600, school:"Advaita", region:"North", work:"Mandukya Karika", others:[]},
    {id:"Govinda", label:"Govinda Bhagavatpāda", year:750, school:"Advaita", region:"Central", work:"Yoga Taravali", others:[]},
    {id:"Shankara", label:"Ādi Śaṅkara", year:788, school:"Advaita", region:"South", work:"Brahmasutra Bhashya", others:["Vivekachudamani", "Bhaja Govindam"]},
    {id:"Suresvara", label:"Sureśvara", year:800, school:"Advaita", region:"South", work:"Naishkarmya Siddhi", others:["Manasollasa"]},
    {id:"Padmapada", label:"Padmapāda", year:800, school:"Advaita", region:"South", work:"Panchapadika", others:[]},
    {id:"Hastamalaka", label:"Hastāmalaka", year:800, school:"Advaita", region:"South", work:"Hastamalakiya", others:[]},
    {id:"Totaka", label:"Toṭakācārya", year:800, school:"Advaita", region:"South", work:"Totakashtakam", others:[]},
    {id:"Vidyaranya", label:"Vidyāraṇya", year:1296, school:"Advaita", region:"South", work:"Panchadasi", others:["Jivanmuktiviveka"]},
    {id:"Madhusudana", label:"Madhusūdana", year:1540, school:"Advaita", region:"East", work:"Advaita Siddhi", others:["Gudhartha Dipika"]},

    // --- DVAITA LINEAGE ---
    {id:"Achyuta", label:"Acyutaprekṣa", year:1200, school:"Dvaita", region:"South", note:"Guru of Madhva", others:[]},
    {id:"Madhva", label:"Madhvācārya", year:1238, school:"Dvaita", region:"South", work:"Sarvamula", others:["Mahabharata Tatparya Nirnaya"]},
    {id:"Jayatirtha", label:"Jayatīrtha", year:1365, school:"Dvaita", region:"South", work:"Nyaya Sudha", others:["Vadavali"]},
    {id:"Vyasatirtha", label:"Vyāsatīrtha", year:1460, school:"Dvaita", region:"South", work:"Nyayamrita", others:["Tarkatandava"]},
    {id:"Raghavendra", label:"Rāghavendra", year:1595, school:"Dvaita", region:"South", work:"Parimala", others:[]},

    // --- VISHISHTADVAITA ---
    {id:"Nammalvar", label:"Nammāḻvār", year:880, school:"Bhakti", region:"South", work:"Tiruvaymoli", others:[]},
    {id:"Nathamuni", label:"Nāthamuni", year:900, school:"Vishishtadvaita", region:"South", work:"Yoga Rahasya", others:["Nyayatattva"]},
    {id:"Yamuna", label:"Yāmunācārya", year:917, school:"Vishishtadvaita", region:"South", work:"Siddhitraya", others:["Gitartha Sangraha"]},
    {id:"Ramanuja", label:"Rāmānuja", year:1017, school:"Vishishtadvaita", region:"South", work:"Sri Bhashya", others:["Vedartha Sangraha"]},
    {id:"Desika", label:"Vedānta Deśika", year:1268, school:"Vishishtadvaita", region:"South", work:"Paduka Sahasram", others:["Rahasyatrayasara"]},

    // --- KASHMIR SHAIVISM ---
    {id:"Vasugupta", label:"Vasugupta", year:800, school:"Kashmir Shaivism", region:"North", work:"Shiva Sutras", others:["Spanda Karika"]},
    {id:"Somananda", label:"Somānanda", year:900, school:"Kashmir Shaivism", region:"North", work:"Shiva Drishti", others:[]},
    {id:"Utpaladeva", label:"Utpaladeva", year:925, school:"Kashmir Shaivism", region:"North", work:"Ishvara Pratyabhijna", others:["Sivastotravali"]},
    {id:"Abhinavagupta", label:"Abhinavagupta", year:950, school:"Kashmir Shaivism", region:"North", work:"Tantraloka", others:["Abhinavabharati"]},
    {id:"Kshemaraja", label:"Kṣemarāja", year:1000, school:"Kashmir Shaivism", region:"North", work:"Pratyabhijnahridayam", others:["Shiva Sutra Vimarshini"]},
    {id:"Lakshmanjoo", label:"Lakshmanjoo", year:1907, school:"Kashmir Shaivism", region:"North", work:"Secret Supreme", others:[]},

    // --- NYAYA ---
    {id:"Vatsyayana", label:"Vātsyāyana", year:450, school:"Nyaya", region:"North", work:"Nyaya Bhashya", others:[]},
    {id:"Uddyotakara", label:"Uddyotakara", year:600, school:"Nyaya", region:"North", work:"Nyaya Varttika", others:[]},
    {id:"Vacaspati", label:"Vācaspati Miśra", year:900, school:"Nyaya", region:"East", work:"Nyaya Tatparya Tika", others:["Bhamati"]},
    {id:"Udayana", label:"Udayana", year:984, school:"Nyaya", region:"East", work:"Kusumanjali", others:["Atmatattvaviveka"]},
    {id:"Gangesa", label:"Gaṅgeśa", year:1325, school:"Nyaya", region:"East", work:"Tattvacintamani", others:[]},
    {id:"Raghunatha", label:"Raghunātha Śiromaṇi", year:1477, school:"Nyaya", region:"East", work:"Didhiti", others:[]},

    // --- MIMAMSA ---
    {id:"Shabara", label:"Śabara", year:200, school:"Mimamsa", region:"India", work:"Shabara Bhashya", others:[]},
    {id:"Kumarila", label:"Kumārila Bhaṭṭa", year:700, school:"Mimamsa", region:"North", work:"Slokavartika", others:["Tantravartika"]},
    {id:"Prabhakara", label:"Prabhākara", year:700, school:"Mimamsa", region:"South", work:"Brihati", others:[]},
    {id:"Mandana", label:"Maṇḍana Miśra", year:800, school:"Mimamsa", region:"East", work:"Brahmasiddhi", others:[]},

    // --- SAMKHYA & YOGA ---
    {id:"IshvaraKrishna", label:"Ishvara Krishna", year:350, school:"Samkhya", region:"India", work:"Samkhya Karika", others:[]},
    {id:"Vijnanabhikshu", label:"Vijnanabhikshu", year:1550, school:"Yoga", region:"India", work:"Yogavarttika", others:[]},
    {id:"Prashastapada", label:"Prashastapada", year:550, school:"Vaisheshika", region:"India", work:"Padarthadharmasamgraha", others:[]},

    // --- OTHER VEDANTA ---
    {id:"Nimbarka", label:"Nimbārka", year:1150, school:"Dvaitadvaita", region:"South", work:"Parijata Saurabha", others:[]},
    {id:"Vallabha", label:"Vallabhācārya", year:1479, school:"Shuddhadvaita", region:"West", work:"Anubhashya", others:["Subodhini"]},
    {id:"Chaitanya", label:"Caitanya", year:1486, school:"Bhakti", region:"East", work:"Siksastakam", others:[], note:"Gaudiya Founder."},

    // --- BUDDHISM ---
    {id:"Mahakassapa", label:"Mahākāśyapa", year:-500, school:"Buddhism", region:"India", note:"1st Patriarch", others:[]},
    {id:"Ananda", label:"Ānanda", year:-500, school:"Buddhism", region:"India", note:"Dhamma Keeper", others:[]},
    {id:"Nagarjuna", label:"Nāgārjuna", year:150, school:"Mahayana", region:"South", work:"Mulamadhyamaka", others:["Ratnavali"]},
    {id:"Dignaga", label:"Dignāga", year:480, school:"Mahayana", region:"South", work:"Pramana Samuccaya", others:["Hetucakra"]},
    {id:"Dharmakirti", label:"Dharmakīrti", year:600, school:"Mahayana", region:"South", work:"Pramanavarttika", others:[]},
    {id:"Bodhidharma", label:"Bodhidharma", year:480, school:"Zen", region:"China", work:"Zen Teachings", others:[]},
    {id:"Padmasambhava", label:"Padmasambhava", year:750, school:"Vajrayana", region:"Tibet", note:"Guru Rinpoche", others:[]},
    {id:"Atisha", label:"Atiśa", year:982, school:"Vajrayana", region:"East", note:"Kadampa Founder", others:[]},
    {id:"Tsongkhapa", label:"Tsongkhapa", year:1357, school:"Vajrayana", region:"Tibet", note:"Gelug Founder", others:[]},
    {id:"DalaiLama", label:"Dalai Lama (14th)", year:1935, school:"Vajrayana", region:"Tibet", note:"14th.", others:[]},

    // --- JAINISM ---
    {id:"Mahavira", label:"Mahāvīra", year:-540, school:"Jainism", region:"East", note:"24th Tirthankara.", others:[]},
    {id:"Bhadrabahu", label:"Bhadrabāhu", year:-300, school:"Jainism", region:"South", work:"Kalpa Sutra", others:[]},
    {id:"Kundakunda", label:"Kundakunda", year:200, school:"Jainism", region:"South", work:"Samayasara", others:[]},
    {id:"Hemachandra", label:"Hemacandra", year:1088, school:"Jainism", region:"West", work:"Yogasastra", others:["Siddha-Hema"]},

    // --- BHAKTI & LIT ---
    {id:"Jayadeva", label:"Jayadeva", year:1200, school:"Bhakti", region:"East", work:"Gita Govinda", others:[]},
    {id:"Vidyapati", label:"Vidyāpati", year:1352, school:"Literature", region:"East", work:"Padavali", others:["Kirtilata"]},
    {id:"Kabir", label:"Kabīr", year:1440, school:"Bhakti", region:"North", work:"Bijak", others:[]},
    {id:"Tulsidas", label:"Tulasīdāsa", year:1532, school:"Bhakti", region:"North", work:"Ramcharitmanas", others:["Vinaya Patrika"]},
    {id:"Surdas", label:"Sūrdās", year:1478, school:"Bhakti", region:"North", work:"Sur Sagar", others:[]},
    {id:"Mirabai", label:"Mīrābāī", year:1498, school:"Bhakti", region:"West", work:"Bhajans", others:[]},
    {id:"Andal", label:"Āṇḍāḷ", year:750, school:"Bhakti", region:"South", work:"Tiruppavai", others:[]},
    {id:"Tyagaraja", label:"Tyāgarāja", year:1767, school:"Music", region:"South", work:"Pancharatna", others:[]},
    {id:"Muthuswami", label:"Muthuswāmi", year:1775, school:"Music", region:"South", work:"Navagraha Kritis", others:[]},

    // --- MODERN ERA ---
    {id:"RamMohan", label:"Ram Mohan Roy", year:1772, school:"Modern", region:"East", work:"Brahmo Samaj", others:[]},
    {id:"Bankim", label:"Baṅkim Candra", year:1838, school:"Literature", region:"East", work:"Anandamath", others:["Vande Mataram"]},
    {id:"Vivekananda", label:"Vivekānanda", year:1863, school:"Advaita", region:"East", work:"Raja Yoga", others:["Karma Yoga"]},
    {id:"Tagore", label:"Rabindranath Tagore", year:1861, school:"Literature", region:"East", work:"Gitanjali", others:["Gora"]},
    {id:"Aurobindo", label:"Sri Aurobindo", year:1872, school:"Yoga", region:"South", work:"Life Divine", others:["Savitri"]},
    {id:"Ramanujan", label:"Srinivasa Ramanujan", year:1887, school:"Science", region:"South", work:"Notebooks", others:[]},
    {id:"Ambedkar", label:"B.R. Ambedkar", year:1891, school:"Modern", region:"West", work:"Constitution", others:["Annihilation of Caste"]},
    {id:"Nazrul", label:"Kazi Nazrul Islam", year:1899, school:"Literature", region:"East", work:"Bidrohi", others:[]},
    {id:"CVRaman", label:"C.V. Rāman", year:1888, school:"Science", region:"South", work:"Raman Effect", others:[]},
    {id:"Bose", label:"JC Bose", year:1858, school:"Science", region:"East", work:"Plant Science", others:[]},
    {id:"Satyendranath", label:"S.N. Bose", year:1894, school:"Science", region:"East", work:"Boson", others:[]},

    // --- INDOLOGISTS ---
    {id:"Voltaire", label:"Voltaire", year:1694, school:"Indology", region:"Global", work:"Essai", note:"Indophile"},
    {id:"Schopenhauer", label:"Schopenhauer", year:1788, school:"Philosophy", region:"Global", work:"World as Will", note:"Upanishads admirer"},
    {id:"MaxMuller", label:"Max Müller", year:1823, school:"Indology", region:"Global", work:"Sacred Books", note:"Indologist"},
    {id:"Tesla", label:"Tesla", year:1856, school:"Science", region:"Global", work:"AC", note:"Vedantic Physics"},
    {id:"Eliot", label:"T.S. Eliot", year:1888, school:"Literature", region:"Global", work:"Waste Land", note:"Sanskrit"},
    {id:"Oppenheimer", label:"Oppenheimer", year:1904, school:"Science", region:"Global", work:"Trinity", note:"Gita Scholar"},
    {id:"Harrison", label:"Harrison", year:1943, school:"Music", region:"Global", work:"Sitar", note:"Beatles"},
    {id:"Jones", label:"William Jones", year:1746, school:"Indology", region:"Global", work:"Asiatic Researches", others:["Sakuntala Translation"]},
    {id:"Megasthenes", label:"Megasthenes", year:-350, school:"History", region:"Global", work:"Indica", others:[]},
    {id:"AlBiruni", label:"Al-Biruni", year:973, school:"Indology", region:"Global", work:"Indica", others:["Chronology"]},
    {id:"Goethe", label:"Goethe", year:1749, school:"Literature", region:"Global", note:"Admired Shakuntalam", others:[]},
    {id:"Prinsep", label:"James Prinsep", year:1799, school:"Indology", region:"Global", work:"Decipherment of Brahmi", others:[]},
    {id:"Cunningham", label:"Cunningham", year:1814, school:"Indology", region:"Global", work:"ASI Reports", others:[]},
    {id:"Basham", label:"A.L. Basham", year:1914, school:"Indology", region:"Global", work:"The Wonder That Was India", others:[]},
    {id:"Renou", label:"Louis Renou", year:1896, school:"Indology", region:"Global", work:"Vedic India", others:[]},
    {id:"Gonda", label:"Jan Gonda", year:1905, school:"Indology", region:"Global", work:"Sanskrit Syntax", others:[]},
    {id:"Zimmer", label:"Heinrich Zimmer", year:1890, school:"Indology", region:"Global", work:"Philosophies of India", others:[]},
    {id:"Oldenberg", label:"Oldenberg", year:1854, school:"Indology", region:"Global", work:"Buddha", others:[]},
    {id:"Deussen", label:"Paul Deussen", year:1845, school:"Indology", region:"Global", work:"Sixty Upanishads", others:[]},
    {id:"SilvainLevi", label:"Sylvain Lévi", year:1863, school:"Indology", region:"Global", work:"Indian Theatre", others:[]}
];

// --- RELATIONSHIPS ---
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

    // Indophiles
    {s:"Panini", t:"Voltaire", type:"Study"}, {s:"Vyasa", t:"Oppenheimer", type:"Study"},
    {s:"Yajnavalkya", t:"Schopenhauer", type:"Study"}, {s:"Vivekananda", t:"Tesla", type:"Meeting"},
    {s:"Kalidasa", t:"Goethe", type:"Inspiration"}, {s:"Jones", t:"MaxMuller", type:"Influence"}
];
