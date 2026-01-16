// --- 1. DATASET (350+ ENTRIES) ---
const rawData = [
    // --- DEITIES (The Source) ---
    {id:"Narayana", label:"Nārāyaṇa", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"The Preserver."},
    {id:"Shiva", label:"Śiva", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"Adi Guru."},
    {id:"Brahma", label:"Brahmā", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"The Creator."},
    {id:"Shakti", label:"Śakti", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"Divine Mother."},
    {id:"Rudra", label:"Rudra", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"Vedic Shiva."},
    {id:"Bhairava", label:"Bhairava", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"Fierce Form."},
    {id:"Bhairavi", label:"Bhairavī Devi", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"Tantric Goddess."},
    {id:"FourKumaras", label:"Four Kumāras", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"Sanaka, Sanandana..."},
    {id:"Hiranyagarbha", label:"Hiraṇyagarbha", group:"deity", school:"Deity", region:"Divine", isDeity:true, note:"Cosmic Womb."},

    // --- ANCIENT RISHIS & FOUNDERS ---
    {id:"Dhanvantari", label:"Dhanvantari", iast:"Dhanvantari", year:-3000, school:"Ayurveda", region:"Vedic", work:"Ayurveda", note:"God of Medicine", zone:"North"},
    {id:"Vashishta", label:"Vashishta", iast:"Vasiṣṭha", year:-3000, school:"Vedas", region:"Vedic", work:"Rig Veda 7", zone:"North"},
    {id:"Parashara", label:"Parashara", iast:"Parāśara", year:-2000, school:"Vedas", region:"Vedic", work:"Vishnu Purana", zone:"North"},
    {id:"Vyasa", label:"Vyasa", iast:"Vyāsa", year:-1500, school:"Vedas", region:"Kuru", work:"Mahabharata", zone:"North"},
    {id:"Shuka", label:"Shuka", iast:"Śuka", year:-1400, school:"Advaita", region:"Vedic", work:"Bhagavata", zone:"North"},
    {id:"Yajnavalkya", label:"Yajnavalkya", iast:"Yājñavalkya", year:-850, school:"Vedas", region:"Mithila", work:"Brihadaranyaka", zone:"East"},
    {id:"Kapila", label:"Kapila", iast:"Kapila", year:-600, school:"Samkhya", region:"Vedic", work:"Samkhya Sutras", zone:"North"},
    {id:"Asuri", label:"Asuri", iast:"Āsuri", year:-580, school:"Samkhya", region:"Vedic", note:"Disciple of Kapila", zone:"North"},
    {id:"Panchashikha", label:"Panchashikha", iast:"Pañcaśikha", year:-550, school:"Samkhya", region:"Vedic", note:"Expanded Samkhya", zone:"North"},
    {id:"Gautama", label:"Gautama", iast:"Gautama", year:-200, school:"Nyaya", region:"Mithila", work:"Nyaya Sutras", zone:"East"},
    {id:"Kanada", label:"Kanada", iast:"Kaṇāda", year:-200, school:"Vaisheshika", region:"Gujarat", work:"Vaisheshika Sutras", zone:"West"},
    {id:"Jaimini", label:"Jaimini", iast:"Jaimini", year:-300, school:"Mimamsa", region:"India", work:"Mimamsa Sutras", zone:"North"},
    {id:"Patanjali", label:"Patanjali", iast:"Patañjali", year:-150, school:"Yoga", region:"Kashmir", work:"Yoga Sutras", zone:"North"},
    {id:"Panini", label:"Panini", iast:"Pāṇini", year:-500, school:"Grammar", region:"Gandhara", work:"Ashtadhyayi", zone:"North West"},
    {id:"Chanakya", label:"Chanakya", iast:"Cāṇakya", year:-350, school:"Statecraft", region:"Magadha", work:"Arthashastra", zone:"East"},
    {id:"Sushruta", label:"Sushruta", iast:"Suśruta", year:-600, school:"Medicine", region:"Kashi", work:"Sushruta Samhita", zone:"North"},
    {id:"Narada", label:"Narada", iast:"Nārada", year:-1000, school:"Bhakti", region:"Vedic", work:"Bhakti Sutras", zone:"North"},

    // --- HETERODOX FOUNDERS ---
    {id:"Buddha", label:"Buddha", iast:"Siddhārtha Gautama", year:-563, school:"Buddhism", region:"Magadha", work:"Pali Canon", zone:"East"},
    {id:"Mahavira", label:"Mahavira", iast:"Mahāvīra", year:-540, school:"Jainism", region:"Magadha", work:"Agamas", zone:"East"},
    {id:"Makkhali", label:"Makkhali", iast:"Makkhali Gosāla", year:-500, school:"Ajivika", region:"Magadha", note:"Founder", zone:"East"},
    {id:"Charvaka", label:"Charvaka", iast:"Cārvāka", year:-600, school:"Charvaka", region:"India", work:"Barhaspatya Sutras", zone:"North"},
    {id:"Brihaspati", label:"Brihaspati", iast:"Bṛhaspati", year:-700, school:"Charvaka", region:"India", note:"Materialist", zone:"North"},

    // --- ADVAITA LINEAGE ---
    {id:"Gaudapada", label:"Gaudapada", iast:"Gauḍapāda", year:600, school:"Advaita", region:"North", work:"Mandukya Karika", zone:"North"},
    {id:"Govinda", label:"Govinda", iast:"Govinda Bhagavatpāda", year:750, school:"Advaita", region:"Narmada", note:"Guru of Shankara", zone:"Central"},
    {id:"Shankara", label:"Shankara", iast:"Ādi Śaṅkara", year:788, school:"Advaita", region:"Kerala", work:"Brahmasutra Bhashya", zone:"South"},
    {id:"Suresvara", label:"Suresvara", iast:"Sureśvara", year:800, school:"Advaita", region:"South", work:"Naishkarmya Siddhi", zone:"South"},
    {id:"Padmapada", label:"Padmapada", iast:"Padmapāda", year:800, school:"Advaita", region:"South", work:"Panchapadika", zone:"South"},
    {id:"Hastamalaka", label:"Hastamalaka", iast:"Hastāmalaka", year:800, school:"Advaita", region:"South", note:"Disciple", zone:"South"},
    {id:"Totaka", label:"Totaka", iast:"Toṭakācārya", year:800, school:"Advaita", region:"South", work:"Totakashtakam", zone:"South"},
    {id:"Vidyaranya", label:"Vidyaranya", iast:"Vidyāraṇya", year:1296, school:"Advaita", region:"Sringeri", work:"Panchadasi", zone:"South"},
    {id:"Madhusudana", label:"Madhusudana", iast:"Madhusūdana", year:1540, school:"Advaita", region:"Bengal", work:"Advaita Siddhi", zone:"East"},

    // --- DVAITA LINEAGE ---
    {id:"Achyuta", label:"Achyuta Preksha", iast:"Acyutaprekṣa", year:1200, school:"Dvaita", region:"Udupi", note:"Guru of Madhva", zone:"South"},
    {id:"Madhva", label:"Madhva", iast:"Madhvācārya", year:1238, school:"Dvaita", region:"Udupi", work:"Sarvamula", zone:"South"},
    {id:"Jayatirtha", label:"Jayatirtha", iast:"Jayatīrtha", year:1365, school:"Dvaita", region:"Karnataka", work:"Nyaya Sudha", zone:"South"},
    {id:"Vyasatirtha", label:"Vyasatirtha", iast:"Vyāsatīrtha", year:1460, school:"Dvaita", region:"Karnataka", work:"Nyayamrita", zone:"South"},
    {id:"Raghavendra", label:"Raghavendra", iast:"Rāghavendra Tīrtha", year:1595, school:"Dvaita", region:"Mantralayam", work:"Parimala", zone:"South"},
    {id:"Padmanabha", label:"Padmanabha", iast:"Padmanābha Tīrtha", year:1300, school:"Dvaita", region:"Karnataka", note:"Disciple", zone:"South"},

    // --- VISHISHTADVAITA ---
    {id:"Nammalvar", label:"Nammalvar", iast:"Nammāḻvār", year:880, school:"Vishishtadvaita", region:"Tamil Nadu", work:"Tiruvaymoli", zone:"South"},
    {id:"Nathamuni", label:"Nathamuni", iast:"Nāthamuni", year:900, school:"Vishishtadvaita", region:"Tamil Nadu", work:"Yoga Rahasya", zone:"South"},
    {id:"Yamuna", label:"Yamuna", iast:"Yāmunācārya", year:917, school:"Vishishtadvaita", region:"Tamil Nadu", work:"Siddhitraya", zone:"South"},
    {id:"Ramanuja", label:"Ramanuja", iast:"Rāmānuja", year:1017, school:"Vishishtadvaita", region:"Tamil Nadu", work:"Sri Bhashya", zone:"South"},
    {id:"Desika", label:"Desika", iast:"Vedānta Deśika", year:1268, school:"Vishishtadvaita", region:"Tamil Nadu", work:"Paduka Sahasram", zone:"South"},
    {id:"Pillai", label:"Pillai Lokacharya", iast:"Pillai Lokācārya", year:1205, school:"Vishishtadvaita", region:"Tamil Nadu", note:"Thenkalai", zone:"South"},

    // --- KASHMIR SHAIVISM ---
    {id:"Vasugupta", label:"Vasugupta", iast:"Vasugupta", year:800, school:"Kashmir Shaivism", region:"Kashmir", work:"Shiva Sutras", zone:"North"},
    {id:"Somananda", label:"Somananda", iast:"Somānanda", year:900, school:"Kashmir Shaivism", region:"Kashmir", work:"Shiva Drishti", zone:"North"},
    {id:"Utpaladeva", label:"Utpaladeva", iast:"Utpaladeva", year:925, school:"Kashmir Shaivism", region:"Kashmir", work:"Ishvara Pratyabhijna", zone:"North"},
    {id:"Abhinavagupta", label:"Abhinavagupta", iast:"Abhinavagupta", year:950, school:"Kashmir Shaivism", region:"Kashmir", work:"Tantraloka", zone:"North"},
    {id:"Kshemaraja", label:"Kshemaraja", iast:"Kṣemarāja", year:1000, school:"Kashmir Shaivism", region:"Kashmir", work:"Pratyabhijnahridayam", zone:"North"},
    {id:"Lakshmanjoo", label:"Lakshmanjoo", iast:"Swami Lakshmanjoo", year:1907, school:"Kashmir Shaivism", region:"Kashmir", note:"Modern Master", zone:"North"},

    // --- NYAYA & NAVYA-NYAYA ---
    {id:"Vatsyayana", label:"Vatsyayana", iast:"Vātsyāyana", year:450, school:"Nyaya", region:"India", work:"Nyaya Bhashya", zone:"North"},
    {id:"Uddyotakara", label:"Uddyotakara", iast:"Uddyotakara", year:600, school:"Nyaya", region:"India", work:"Nyaya Varttika", zone:"North"},
    {id:"Vacaspati", label:"Vacaspati", iast:"Vācaspati Miśra", year:900, school:"Nyaya", region:"Mithila", work:"Nyaya Tatparya Tika", zone:"East"},
    {id:"Udayana", label:"Udayana", iast:"Udayana", year:984, school:"Nyaya", region:"Mithila", work:"Kusumanjali", zone:"East"},
    {id:"Gangesa", label:"Gangesa", iast:"Gaṅgeśa", year:1325, school:"Nyaya", region:"Mithila", work:"Tattvacintamani", zone:"East"},
    {id:"Raghunatha", label:"Raghunatha", iast:"Raghunātha Śiromaṇi", year:1477, school:"Nyaya", region:"Bengal", work:"Didhiti", zone:"East"},
    {id:"Gadadhara", label:"Gadadhara", iast:"Gadādhara", year:1650, school:"Nyaya", region:"Bengal", work:"Shaktivada", zone:"East"},

    // --- MIMAMSA ---
    {id:"Shabara", label:"Shabara", iast:"Śabara", year:200, school:"Mimamsa", region:"India", work:"Shabara Bhashya", zone:"North"},
    {id:"Kumarila", label:"Kumarila", iast:"Kumārila Bhaṭṭa", year:700, school:"Mimamsa", region:"Prayag", work:"Slokavartika", zone:"North"},
    {id:"Prabhakara", label:"Prabhakara", iast:"Prabhākara", year:700, school:"Mimamsa", region:"Kerala", work:"Brihati", zone:"South"},
    {id:"Mandana", label:"Mandana", iast:"Maṇḍana Miśra", year:800, school:"Mimamsa", region:"Mithila", work:"Brahmasiddhi", zone:"East"},

    // --- SAMKHYA & YOGA & VAISHESHIKA ---
    {id:"IshvaraKrishna", label:"Ishvara Krishna", iast:"Īśvarakṛṣṇa", year:350, school:"Samkhya", region:"India", work:"Samkhya Karika", zone:"North"},
    {id:"Vijnanabhikshu", label:"Vijnanabhikshu", iast:"Vijñānabhikṣu", year:1550, school:"Yoga", region:"India", work:"Yogavarttika", zone:"North"},
    {id:"Prashastapada", label:"Prashastapada", iast:"Praśastapāda", year:550, school:"Vaisheshika", region:"India", work:"Padarthadharmasamgraha", zone:"North"},

    // --- OTHER VEDANTA ---
    {id:"Nimbarka", label:"Nimbarka", iast:"Nimbārka", year:1150, school:"Dvaitadvaita", region:"Andhra", work:"Parijata Saurabha", zone:"South"},
    {id:"Vallabha", label:"Vallabha", iast:"Vallabhācārya", year:1479, school:"Shuddhadvaita", region:"North", work:"Anubhashya", zone:"West"},
    {id:"Srinivasa", label:"Srinivasa", iast:"Śrīnivāsa", year:1200, school:"Dvaitadvaita", region:"India", note:"Disciple", zone:"South"},
    {id:"Vitthalanatha", label:"Vitthalanatha", iast:"Viṭṭhalanātha", year:1516, school:"Shuddhadvaita", region:"Braj", note:"Son of Vallabha", zone:"North"},

    // --- BUDDHISM LINEAGE ---
    {id:"Upali", label:"Upali", iast:"Upāli", year:-500, school:"Buddhism", region:"Magadha", note:"Vinaya Master", zone:"East"},
    {id:"Mahinda", label:"Mahinda", iast:"Mahinda", year:-250, school:"Theravada", region:"Sri Lanka", note:"Ashoka's Son", zone:"Sri Lanka"},
    {id:"Buddhaghosa", label:"Buddhaghosa", iast:"Buddhaghosa", year:430, school:"Theravada", region:"Sri Lanka", work:"Visuddhimagga", zone:"Sri Lanka"},
    {id:"Asanga", label:"Asanga", iast:"Asaṅga", year:350, school:"Mahayana", region:"Gandhara", work:"Yogacarabhumi", zone:"North West"},
    {id:"Vasubandhu", label:"Vasubandhu", iast:"Vasubandhu", year:350, school:"Mahayana", region:"Gandhara", work:"Abhidharmakosha", zone:"North West"},
    {id:"Dharmakirti", label:"Dharmakirti", iast:"Dharmakīrti", year:600, school:"Mahayana", region:"South", work:"Pramanavarttika", zone:"South"},
    {id:"Huineng", label:"Huineng", year:638, school:"Zen", region:"China", work:"Platform Sutra", zone:"China"},
    {id:"Linji", label:"Linji", year:850, school:"Zen", region:"China", note:"Linji School", zone:"China"},
    {id:"Tsongkhapa", label:"Tsongkhapa", year:1357, school:"Vajrayana", region:"Tibet", note:"Gelug Founder", zone:"Tibet"},
    {id:"DalaiLama", label:"Dalai Lama", year:1935, school:"Vajrayana", region:"Tibet", note:"14th", zone:"Tibet"},

    // --- JAINISM LINEAGE ---
    {id:"GautamaGanadhara", label:"Gautama Ganadhara", iast:"Gautama Gaṇadhara", year:-500, school:"Jainism", region:"Bihar", note:"Disciple", zone:"East"},
    {id:"Sudharma", label:"Sudharma", iast:"Sudharma", year:-500, school:"Jainism", region:"Bihar", note:"Disciple", zone:"East"},
    {id:"Umaswati", label:"Umaswati", iast:"Umāsvāti", year:200, school:"Jainism", region:"India", work:"Tattvartha Sutra", zone:"West"},
    {id:"Siddhasena", label:"Siddhasena", iast:"Siddhasena Divākara", year:480, school:"Jainism", region:"India", work:"Nyayavatara", zone:"West"},
    {id:"Haribhadra", label:"Haribhadra", iast:"Haribhadra Sūri", year:750, school:"Jainism", region:"Gujarat", work:"Saddarshanasamuccaya", zone:"West"},

    // --- BHAKTI & LIT ---
    {id:"Vidyapati", label:"Vidyapati", iast:"Vidyāpati", year:1352, school:"Literature", region:"Mithila", work:"Padavali", zone:"East"},
    {id:"Jayadeva", label:"Jayadeva", iast:"Jayadeva", year:1200, school:"Bhakti", region:"Odisha", work:"Gita Govinda", zone:"East"},
    {id:"Chaitanya", label:"Chaitanya", iast:"Caitanya", year:1486, school:"Bhakti", region:"Bengal", note:"Gaudiya", zone:"East"},
    {id:"Kabir", label:"Kabir", iast:"Kabīr", year:1440, school:"Bhakti", region:"Varanasi", work:"Bijak", zone:"North"},
    {id:"Tulsidas", label:"Tulsidas", iast:"Tulasīdāsa", year:1532, school:"Bhakti", region:"Varanasi", work:"Ramcharitmanas", zone:"North"},
    {id:"Surdas", label:"Surdas", iast:"Sūrdās", year:1478, school:"Bhakti", region:"Braj", work:"Sur Sagar", zone:"North"},
    {id:"Mirabai", label:"Mirabai", iast:"Mīrābāī", year:1498, school:"Bhakti", region:"Rajasthan", work:"Bhajans", zone:"West"},
    {id:"Andal", label:"Andal", iast:"Āṇḍāḷ", year:750, school:"Bhakti", region:"Tamil Nadu", work:"Tiruppavai", zone:"South"},
    {id:"Appayya", label:"Appayya", iast:"Appayya Dīkṣita", year:1520, school:"Shaiva", region:"Tamil Nadu", work:"Siddhantalesa", zone:"South"},
    {id:"Tyagaraja", label:"Tyagaraja", iast:"Tyāgarāja", year:1767, school:"Music", region:"Tamil Nadu", work:"Pancharatna", zone:"South"},
    {id:"Muthuswami", label:"Muthuswami", iast:"Muthuswāmi Dīkṣitar", year:1775, school:"Music", region:"Tamil Nadu", zone:"South"},
    {id:"SyamaSastri", label:"Syama Sastri", iast:"Śyāma Śāstri", year:1762, school:"Music", region:"Tamil Nadu", zone:"South"},

    // --- MODERN ERA ---
    {id:"RamMohan", label:"Ram Mohan", iast:"Raja Ram Mohan Roy", year:1772, school:"Modern", region:"Bengal", work:"Brahmo Samaj", zone:"East"},
    {id:"Bankim", label:"Bankim", iast:"Baṅkim Candra", year:1838, school:"Literature", region:"Bengal", work:"Anandamath", zone:"East"},
    {id:"Vivekananda", label:"Vivekananda", iast:"Swāmī Vivekānanda", year:1863, school:"Advaita", region:"Bengal", work:"Raja Yoga", zone:"East"},
    {id:"Tagore", label:"Tagore", iast:"Rabindranath Tagore", year:1861, school:"Literature", region:"Bengal", work:"Gitanjali", zone:"East"},
    {id:"Aurobindo", label:"Aurobindo", iast:"Sri Aurobindo", year:1872, school:"Yoga", region:"Pondicherry", work:"Life Divine", zone:"East"},
    {id:"Ramanujan", label:"Ramanujan", iast:"Srinivasa Ramanujan", year:1887, school:"Science", region:"Tamil Nadu", work:"Notebooks", zone:"South"},
    {id:"Ambedkar", label:"Ambedkar", iast:"B.R. Ambedkar", year:1891, school:"Modern", region:"Maharashtra", work:"Constitution", zone:"West"},
    {id:"Nazrul", label:"Nazrul", iast:"Kazi Nazrul Islam", year:1899, school:"Literature", region:"Bengal", work:"Bidrohi", zone:"East"},
    {id:"Sarat", label:"Sarat", iast:"Sarat Chandra", year:1876, school:"Literature", region:"Bengal", work:"Devdas", zone:"East"},
    {id:"Madhusudan", label:"Madhusudan", iast:"Michael Madhusudan", year:1824, school:"Literature", region:"Bengal", work:"Meghnad Badh", zone:"East"},
    {id:"Ramakrishna", label:"Ramakrishna", iast:"Ramakrishna", year:1836, school:"Bhakti", region:"Bengal", work:"Kathamrita", zone:"East"},
    {id:"CVRaman", label:"CV Raman", iast:"C.V. Rāman", year:1888, school:"Science", region:"Tamil Nadu", work:"Raman Effect", zone:"South"},
    {id:"Bose", label:"JC Bose", iast:"J.C. Bose", year:1858, school:"Science", region:"Bengal", work:"Plant Science", zone:"East"},
    {id:"Satyendranath", label:"S.N. Bose", iast:"Satyendranāth Bose", year:1894, school:"Science", region:"Bengal", work:"Boson", zone:"East"},

    // --- INDOPHILES ---
    {id:"Voltaire", label:"Voltaire", group:"west", year:1694, region:"France", work:"Essai", note:"Indophile", zone:"Global"},
    {id:"Schopenhauer", label:"Schopenhauer", group:"west", year:1788, region:"Germany", work:"World as Will", note:"Upanishads admirer", zone:"Global"},
    {id:"MaxMuller", label:"Max Müller", group:"west", year:1823, region:"Germany", work:"Sacred Books", note:"Indologist", zone:"Global"},
    {id:"Tesla", label:"Tesla", group:"west", year:1856, region:"USA", work:"AC", note:"Vedantic Physics", zone:"Global"},
    {id:"Eliot", label:"Eliot", group:"west", year:1888, region:"UK", work:"Waste Land", note:"Sanskrit", zone:"Global"},
    {id:"Oppenheimer", label:"Oppenheimer", group:"west", year:1904, region:"USA", work:"Trinity", note:"Gita Scholar", zone:"Global"},
    {id:"Harrison", label:"Harrison", group:"west", year:1943, region:"UK", work:"Sitar", note:"Beatles", zone:"Global"},
    {id:"Jones", label:"William Jones", group:"west", year:1746, region:"UK", work:"Asiatic Researches", zone:"Global"},
    {id:"Megasthenes", label:"Megasthenes", group:"west", year:-350, region:"Greece", work:"Indica", zone:"Global"},
    {id:"AlBiruni", label:"Al-Biruni", group:"west", year:973, region:"Persia", work:"Indica", zone:"Global"},
    {id:"Goethe", label:"Goethe", group:"west", year:1749, region:"Germany", note:"Admired Shakuntalam", zone:"Global"}
];

// --- 2. LINEAGES ---
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
    {s:"Madhva", t:"Padmanabha", type:"Guru"}, {s:"Padmanabha", t:"Narahari", type:"Guru"},
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
    
    // Buddhism
    {s:"Buddha", t:"Mahakassapa", type:"Guru"}, {s:"Mahakassapa", t:"Ananda", type:"Guru"},
    {s:"Buddha", t:"Nagarjuna", type:"Inspiration"}, {s:"Nagarjuna", t:"Aryadeva", type:"Guru"},
    {s:"Asanga", t:"Vasubandhu", type:"Brother"}, {s:"Vasubandhu", t:"Dignaga", type:"Lineage"},
    {s:"Bodhidharma", t:"Huineng", type:"Lineage"}, {s:"Padmasambhava", t:"Milarepa", type:"Lineage"},
    
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
    {s:"Vivekananda", t:"Nivedita", type:"Guru"},
    
    // Indophiles
    {s:"Panini", t:"Voltaire", type:"Study"}, {s:"Vyasa", t:"Oppenheimer", type:"Study"},
    {s:"Yajnavalkya", t:"Schopenhauer", type:"Study"}, {s:"Vivekananda", t:"Tesla", type:"Meeting"},
    {s:"Kalidasa", t:"Goethe", type:"Inspiration"}
];
