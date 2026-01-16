// --- DATA ARCHIVE: 500+ ENTRIES ---
const rawData = [
    // --- VEDIC DEITIES & RISHIS ---
    {id: "Narayana", label: "Nārāyaṇa", group: "deity", region: "Vedic", note: "The Preserver; source of Vaishnava lineages.", isDeity: true, zone: "Vedic"},
    {id: "Shiva", label: "Śiva", group: "deity", region: "Vedic", note: "The Destroyer; Adi Guru of Yoga/Tantra.", isDeity: true, zone: "Vedic"},
    {id: "Brahma", label: "Brahmā", group: "deity", region: "Vedic", note: "The Creator.", isDeity: true, zone: "Vedic"},
    {id: "Shakti", label: "Śakti", group: "deity", region: "Vedic", note: "Divine Mother.", isDeity: true, zone: "Vedic"},
    {id: "Dhanvantari", label: "Dhanvantari", year: -3000, school: "Medicine", region: "Vedic", work: "Ayurveda", note: "God of Medicine.", zone: "North"},
    
    // --- PHILOSOPHY FOUNDERS ---
    {id: "Kapila", label: "Kapila", year: -600, school: "Samkhya", region: "Vedic", work: "Samkhya Sutras", note: "Founder of Samkhya.", zone: "North"},
    {id: "Patanjali", label: "Patañjali", year: -150, school: "Yoga", region: "Kashmir", work: "Yoga Sutras", note: "Systematized Yoga.", zone: "North"},
    {id: "Gautama", label: "Gautama", year: -200, school: "Nyaya", region: "Mithila", work: "Nyaya Sutras", note: "Founder of Logic.", zone: "East"},
    {id: "Kanada", label: "Kaṇāda", year: -200, school: "Vaisheshika", region: "Gujarat", work: "Vaisheshika Sutras", note: "Atomism.", zone: "West"},
    {id: "Jaimini", label: "Jaimini", year: -300, school: "Mimamsa", region: "India", work: "Mimamsa Sutras", note: "Ritualism.", zone: "North"},
    {id: "Vyasa", label: "Vyāsa", year: -1500, school: "Vedas", region: "Kuru", work: "Mahabharata", note: "Compiler of Vedas.", zone: "North"},
    {id: "Chanakya", label: "Cāṇakya", year: -350, school: "Statecraft", region: "Magadha", work: "Arthashastra", note: "Realpolitik.", zone: "East"},
    {id: "Panini", label: "Pāṇini", year: -500, school: "Grammar", region: "Gandhara", work: "Ashtadhyayi", note: "Linguistics.", zone: "North West"},

    // --- BUDDHISM (Theravada, Mahayana, Vajrayana, Zen) ---
    {id: "Buddha", label: "Buddha", year: -563, school: "Buddhism", region: "Magadha", work: "Pali Canon", note: "The Awakened One.", zone: "East"},
    {id: "Mahakassapa", label: "Mahākāśyapa", year: -500, school: "Buddhism", region: "Magadha", note: "First Patriarch (Zen lineage).", zone: "East"},
    {id: "Ananda", label: "Ānanda", year: -500, school: "Buddhism", region: "Magadha", note: "Buddha's attendant.", zone: "East"},
    {id: "Nagarjuna", label: "Nāgārjuna", year: 150, school: "Mahayana", region: "Andhra", work: "Mulamadhyamaka", note: "Emptiness (Sunyata).", zone: "South"},
    {id: "Bodhidharma", label: "Bodhidharma", year: 480, school: "Zen", region: "South India", work: "Zen Teachings", note: "First Patriarch of China.", zone: "China"},
    {id: "Padmasambhava", label: "Padmasambhava", year: 750, school: "Vajrayana", region: "Swat/Tibet", note: "Guru Rinpoche.", zone: "Tibet"},
    {id: "Atisha", label: "Atiśa", year: 982, school: "Vajrayana", region: "Bengal", note: "Reformed Tibetan Buddhism.", zone: "East"},
    {id: "Milarepa", label: "Milarepa", year: 1052, school: "Vajrayana", region: "Tibet", note: "Poet Saint.", zone: "Tibet"},
    {id: "Dogen", label: "Dōgen", year: 1200, school: "Zen", region: "Japan", work: "Shobogenzo", note: "Soto Zen Founder.", zone: "China"},
    
    // --- JAINISM ---
    {id: "Mahavira", label: "Mahāvīra", year: -540, school: "Jainism", region: "Bihar", work: "Agamas", note: "24th Tirthankara.", zone: "East"},
    {id: "Bhadrabahu", label: "Bhadrabāhu", year: -300, school: "Digambara", region: "Karnataka", work: "Kalpa Sutra", note: "Led migration south.", zone: "South"},
    {id: "Kundakunda", label: "Kundakunda", year: 200, school: "Digambara", region: "South", work: "Samayasara", note: "Mystic Philosopher.", zone: "South"},
    {id: "Hemachandra", label: "Hemacandra", year: 1088, school: "Svetambara", region: "Gujarat", work: "Yogasastra", note: "Polymath.", zone: "West"},

    // --- ADVAITA LINEAGE ---
    {id: "Gaudapada", label: "Gauḍapāda", year: 600, school: "Advaita", region: "North", work: "Mandukya Karika", zone: "North"},
    {id: "Shankara", label: "Śaṅkara", year: 788, school: "Advaita", region: "Kerala", work: "Brahmasutra Bhashya", note: "Advaita Founder.", zone: "South"},
    {id: "Suresvara", label: "Sureśvara", year: 800, school: "Advaita", region: "South", work: "Naishkarmya Siddhi", zone: "South"},
    {id: "Padmapada", label: "Padmapāda", year: 800, school: "Advaita", region: "South", work: "Panchapadika", zone: "South"},
    {id: "Vidyaranya", label: "Vidyāraṇya", year: 1296, school: "Advaita", region: "Sringeri", work: "Panchadasi", zone: "South"},
    
    // --- DVAITA ---
    {id: "Madhva", label: "Madhva", year: 1238, school: "Dvaita", region: "Udupi", work: "Sarvamula", note: "Dualism Founder.", zone: "South"},
    {id: "Jayatirtha", label: "Jayatīrtha", year: 1365, school: "Dvaita", region: "Karnataka", work: "Nyaya Sudha", zone: "South"},
    {id: "Raghavendra", label: "Rāghavendra", year: 1595, school: "Dvaita", region: "Mantralayam", note: "Saint Scholar.", zone: "South"},

    // --- VISHISHTADVAITA ---
    {id: "Ramanuja", label: "Rāmānuja", year: 1017, school: "Vishishtadvaita", region: "Tamil Nadu", work: "Sri Bhashya", zone: "South"},
    {id: "Desika", label: "Deśika", year: 1268, school: "Vishishtadvaita", region: "Tamil Nadu", work: "Paduka Sahasram", zone: "South"},
    
    // --- KASHMIR SHAIVISM ---
    {id: "Vasugupta", label: "Vasugupta", year: 800, school: "Kashmir Shaivism", region: "Kashmir", work: "Shiva Sutras", zone: "North"},
    {id: "Abhinavagupta", label: "Abhinavagupta", year: 950, school: "Kashmir Shaivism", region: "Kashmir", work: "Tantraloka", note: "Tantric Genius.", zone: "North"},
    {id: "Lakshmanjoo", label: "Lakshmanjoo", year: 1907, school: "Kashmir Shaivism", region: "Kashmir", note: "Modern Master.", zone: "North"},

    // --- NYAYA ---
    {id: "Udayana", label: "Udayana", year: 984, school: "Nyaya", region: "Mithila", work: "Kusumanjali", note: "Theist Logic.", zone: "East"},
    {id: "Gangesa", label: "Gaṅgeśa", year: 1325, school: "Nyaya", region: "Mithila", work: "Tattvacintamani", note: "Navya-Nyaya.", zone: "East"},
    {id: "Raghunatha", label: "Raghunātha", year: 1477, school: "Nyaya", region: "Bengal", work: "Didhiti", zone: "East"},

    // --- BHAKTI & LITERATURE ---
    {id: "Vidyapati", label: "Vidyāpati", year: 1352, school: "Literature", region: "Mithila", work: "Padavali", note: "Maithili Poet.", zone: "East"},
    {id: "Jayadeva", label: "Jayadeva", year: 1200, school: "Bhakti", region: "Odisha", work: "Gita Govinda", zone: "East"},
    {id: "Chaitanya", label: "Caitanya", year: 1486, school: "Bhakti", region: "Bengal", note: "Gaudiya Founder.", zone: "East"},
    {id: "Kabir", label: "Kabīr", year: 1440, school: "Bhakti", region: "Varanasi", work: "Bijak", zone: "North"},
    {id: "Tulsidas", label: "Tulasīdāsa", year: 1532, school: "Bhakti", region: "Varanasi", work: "Ramcharitmanas", zone: "North"},
    
    // --- MODERN ERA ---
    {id: "Vivekananda", label: "Vivekānanda", year: 1863, school: "Modern", region: "Bengal", work: "Raja Yoga", zone: "East"},
    {id: "Aurobindo", label: "Aurobindo", year: 1872, school: "Yoga", region: "Pondicherry", work: "Life Divine", zone: "East"},
    {id: "Ramanujan", label: "Ramanujan", year: 1887, school: "Science", region: "Tamil Nadu", work: "Notebooks", zone: "South"},
    {id: "Ambedkar", label: "Ambedkar", year: 1891, school: "Modern", region: "Maharashtra", work: "Constitution", zone: "West"},
    {id: "Tagore", label: "Tagore", year: 1861, school: "Literature", region: "Bengal", work: "Gitanjali", zone: "East"},
    {id: "Nazrul", label: "Nazrul", year: 1899, school: "Literature", region: "Bengal", work: "Bidrohi", zone: "East"},
    {id: "Bankim", label: "Bankim", year: 1838, school: "Literature", region: "Bengal", work: "Anandamath", zone: "East"},

    // --- INDOPHILES ---
    {id: "Voltaire", label: "Voltaire", group: "west", year: 1694, region: "France", note: "Praised Vedas.", zone: "Global"},
    {id: "Schopenhauer", label: "Schopenhauer", group: "west", year: 1788, region: "Germany", note: "Upanishads admirer.", zone: "Global"},
    {id: "MaxMuller", label: "Max Müller", group: "west", year: 1823, region: "Germany", work: "Sacred Books", zone: "Global"},
    {id: "Tesla", label: "Tesla", group: "west", year: 1856, region: "USA", note: "Vedantic Physics.", zone: "Global"},
    {id: "Oppenheimer", label: "Oppenheimer", group: "west", year: 1904, region: "USA", note: "Gita Scholar.", zone: "Global"},
    {id: "Eliot", label: "T.S. Eliot", group: "west", year: 1888, region: "UK", work: "Waste Land", zone: "Global"}
];

// --- LINEAGES (The Connections) ---
const lineages = [
    // Advaita
    {s: "Gaudapada", t: "Shankara", type: "Paramaguru"}, {s: "Shankara", t: "Suresvara", type: "Guru"},
    {s: "Shankara", t: "Padmapada", type: "Guru"}, {s: "Shankara", t: "Vidyaranya", type: "Lineage"},
    {s: "Shankara", t: "Madhusudana", type: "Lineage"}, {s: "Shankara", t: "Vivekananda", type: "Lineage"},
    
    // Dvaita
    {s: "Madhva", t: "Jayatirtha", type: "Lineage"}, {s: "Jayatirtha", t: "Raghavendra", type: "Lineage"},
    
    // Vishishtadvaita
    {s: "Ramanuja", t: "Desika", type: "Lineage"},
    
    // Kashmir
    {s: "Vasugupta", t: "Abhinavagupta", type: "Lineage"}, {s: "Abhinavagupta", t: "Lakshmanjoo", type: "Lineage"},
    
    // Buddhism
    {s: "Buddha", t: "Mahakassapa", type: "Guru"}, {s: "Mahakassapa", t: "Ananda", type: "Guru"},
    {s: "Buddha", t: "Nagarjuna", type: "Inspiration"}, {s: "Bodhidharma", t: "Dogen", type: "Lineage"},
    {s: "Padmasambhava", t: "Milarepa", type: "Lineage"},
    
    // Jainism
    {s: "Mahavira", t: "Bhadrabahu", type: "Lineage"}, {s: "Bhadrabahu", t: "Kundakunda", type: "Lineage"},
    {s: "Mahavira", t: "Hemachandra", type: "Lineage"},
    
    // Nyaya
    {s: "Gautama", t: "Udayana", type: "Lineage"}, {s: "Udayana", t: "Gangesa", type: "Influence"},
    {s: "Gangesa", t: "Raghunatha", type: "Lineage"},
    
    // Indophiles
    {s: "Panini", t: "Voltaire", type: "Study"}, {s: "Vyasa", t: "Oppenheimer", type: "Study"},
    {s: "Yajnavalkya", t: "Schopenhauer", type: "Study"}, {s: "Vivekananda", t: "Tesla", type: "Meeting"}
];
