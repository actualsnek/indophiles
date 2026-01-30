// =============================================================================
//  SCRIPT.JS - INDOSPHERE ARCHIVE 
// =============================================================================

const rawData = [
    
    // =========================================================================
    // >>> SECTION 1: THE DIVINE <<<
    // =========================================================================
    {id:"Narayana", label:"Narayana", group:"Deity", region:"Divine", isDeity:true, note:"The Preserver; source of Vaishnava lineages.", religion:"[Hinduism]", otherNames:"Vishnu, Hari, Krishna", attributes:"Conch, Discus, Mace, Lotus"},
    {id:"Shiva", label:"Shiva", group:"Deity", region:"Divine", isDeity:true, note:"The Destroyer; Adi Guru of Yoga and Tantra.", religion:"[Hinduism]", otherNames:"Mahadeva, Shankara", attributes:"Trident, Crescent Moon, Third Eye"},
    {id:"Brahma", label:"Brahma", group:"Deity", region:"Divine", isDeity:true, note:"The Creator.", religion:"[Hinduism]", otherNames:"Prajapati", attributes:"Four Heads, Vedas, Water Pot"},
    {id:"Kali", label:"Kali", group:"Deity", region:"Divine", isDeity:true, note:"The Divine Mother; Ishta of Ramakrishna Paramahamsa.", religion:"[Hinduism]", otherNames:"Bhavatarini", attributes:"Scimitar, Garland of Skulls"},
    {id:"Rudra", label:"Rudra", group:"Deity", region:"Divine", isDeity:true, note:"Vedic form of Shiva.", religion:"[Hinduism]", otherNames:"Roarer", attributes:"Bow and Arrow"},
    {id:"FourKumaras", label:"Four Kumaras", group:"Deity", region:"Divine", isDeity:true, note:"Mind-born sons of Brahma; First teachers of Nimbarka Sampradaya.", religion:"[Hinduism]", otherNames:"Sanaka, Sanandana, Sanatana, Sanat", attributes:"Eternal Youth"},
    {id:"Hiranyagarbha", label:"Hiranyagarbha", group:"Deity", region:"Divine", isDeity:true, note:"Cosmic Womb; source of Yoga.", religion:"[Hinduism]", otherNames:"Golden Womb", attributes:"Cosmic Egg"},
    {id:"Dattatreya", label:"Dattatreya", group:"Deity", region:"Divine", isDeity:true, note:"Adi-Guru of Avadhutas; Synthesis of Trinity.", religion:"[Hinduism]", otherNames:"Datta Guru", attributes:"Three Heads, Four Dogs"},
    {id:"Surya", label:"Surya", group:"Deity", region:"Divine", isDeity:true, note:"Sun God.", religion:"[Hinduism]", attributes:"Chariot"},
    {id:"Agni", label:"Agni", group:"Deity", region:"Divine", isDeity:true, note:"Fire God; Mediator.", religion:"[Hinduism]", attributes:"Fire"},
    {id:"Indra", label:"Indra", group:"Deity", region:"Divine", isDeity:true, note:"King of Devas.", religion:"[Hinduism]", attributes:"Vajra"},
    {id:"Varuna", label:"Varuna", group:"Deity", region:"Divine", isDeity:true, note:"Lord of Cosmic Order (Rta).", religion:"[Hinduism]", attributes:"Noose"},

    // =========================================================================
    // >>> SECTION 2: VEDIC RISHIS (COMMON ANCESTORS) <<<
    // =========================================================================
    {id:"Vashishta", label:"Vashishta", year:-3000, displayDate:"c. 3000 BCE", school:"Vedas", region:"North", work:"Mandala 7 of the Rigveda", others:["Yoga Vashishta"], note:"Mind-born son of Brahma; Saptarishi."},
    {id:"ShaktiRishi", label:"Shakti (Rishi)", year:-2500, displayDate:"c. 2500 BCE", school:"Vedas", region:"North", others:[], note:"Son of Vashishta."},
    {id:"Parashara", label:"Parashara", year:-2000, displayDate:"c. 2000 BCE", school:"Vedas", region:"North", work:"Vishnu Purana", others:["Parashara Smriti"], note:"Father of Vyasa; narrator of Vishnu Purana."},
    {id:"Vyasa", label:"Vyasa", year:-1500, displayDate:"c. 1500 BCE", school:"Vedas", region:"North", work:"Mahabharata", others:["Brahma Sutras", "Puranas"], note:"Vedavyasa; Split the Vedas; Guru of the World."},
    {id:"Shuka", label:"Shuka", year:-1400, displayDate:"c. 1400 BCE", school:"Advaita", region:"North", work:"Bhagavata (Narrator)", others:[], note:"Son of Vyasa; born liberated."},
    {id:"Yajnavalkya", label:"Yajnavalkya", year:-850, displayDate:"c. 850 BCE", school:"Vedas", region:"East", subregion:"Mithila", work:"Brihadaranyaka", others:["Shatapatha Brahmana"], note:"Greatest Upanishadic sage."},
    {id:"Maitreyi", label:"Maitreyi", year:-850, displayDate:"c. 850 BCE", school:"Vedas", region:"East", subregion:"Mithila", note:"Philosopher wife."},
    {id:"Gargi", label:"Gargi", year:-850, displayDate:"c. 850 BCE", school:"Vedas", region:"East", subregion:"Mithila", note:"Vedic debater."},
    {id:"Dhanvantari", label:"Dhanvantari", year:-3000, displayDate:"Mythological", school:"Vedas", region:"Divine", note:"God of Ayurveda."},
    {id:"Sushruta", label:"Sushruta", year:-600, displayDate:"c. 600 BCE", school:"Vedas", region:"North", work:"Sushruta Samhita", note:"Father of Surgery."},

    // =========================================================================
    // >>> SECTION 3: ADVAITA VEDANTA (SHANKARA SAMPRADAYA) <<<
    // =========================================================================
    // --- Pre-Shankara ---
    {id:"Gaudapada", label:"Gaudapada", year:600, displayDate:"c. 6th Century CE", school:"Advaita", region:"South", work:"Mandukya Karika", others:[], note:"Paramaguru of Shankara; foundational text on Ajativada."},
    {id:"Govinda", label:"Govinda Bhagavatpada", year:725, displayDate:"c. 725 CE", school:"Advaita", region:"Central", work:"", others:[], note:"Direct guru of Adi Shankara; yogi and teacher."},
    
    // --- The Acharya & Disciples ---
    {id:"Shankara", label:"Adi Shankara", wiki:"Adi_Shankara", year:788, displayDate:"c. 788–820 CE", school:"Advaita", region:"South", subregion:"Kerala", work:"Brahmasutra Bhashya", workUrl:"https://www.wisdomlib.org/hinduism/book/brahma-sutras", others:["Vivekachudamani", "Bhaja Govindam", "Upadesasahasri"], note:"Jagadguru; established the four Amnaya Mathas."},
    {id:"Suresvara", label:"Suresvara", year:800, displayDate:"c. 800 CE", school:"Advaita - Sringeri", region:"South", work:"Naishkarmya Siddhi", others:["Brihadaranyaka Vartika"], note:"First Acharya of Sringeri Matha."},
    {id:"Padmapada", label:"Padmapada", year:800, displayDate:"c. 800 CE", school:"Advaita - Puri", region:"East", work:"Panchapadika", others:[], note:"First Acharya of Puri Govardhana Matha."},
    {id:"Hastamalaka", label:"Hastamalaka", year:800, displayDate:"c. 800 CE", school:"Advaita - Dwaraka", region:"West", work:"Hastamalakiya", others:[], note:"First Acharya of Dwaraka Matha."},
    {id:"Totaka", label:"Totakacharya", year:800, displayDate:"c. 800 CE", school:"Advaita - Jyotir", region:"North", work:"Totakashtakam", others:[], note:"First Acharya of Jyotir Matha."},

    // --- Sringeri Matha Lineage ---
    {id:"Vidyaranya", label:"Vidyaranya", year:1350, displayDate:"c. 1296–1386 CE", school:"Advaita - Sringeri", region:"South", subregion:"Karnataka", work:"Panchadasi", others:["Jivanmuktiviveka"], note:"Patron saint of Vijayanagara Empire."},
    {id:"BharatiTirtha", label:"Bharati Tirtha (Old)", year:1328, displayDate:"c. 1328–1380 CE", school:"Advaita - Sringeri", region:"South", work:"Drg Drsya Viveka", others:[], note:"Preceptor of Vidyaranya."},
    {id:"SacchidanandaS", label:"Sacchidananda Shivabhinava", year:1890, displayDate:"19th Century", school:"Advaita - Sringeri", region:"South", note:"Rediscovered Shankara's birthplace (Kalady)."},
    {id:"ChandrashekharaBharati", label:"Chandrashekhara Bharati", year:1892, displayDate:"1892–1954", school:"Advaita - Sringeri", region:"South", work:"Vivekachudamani Commentary", others:[], note:"Jivanmukta; 34th Pontiff."},
    {id:"AbhinavaVidyatirtha", label:"Abhinava Vidyatirtha", year:1917, displayDate:"1917–1989", school:"Advaita - Sringeri", region:"South", note:"35th Pontiff; great yogi."},
    {id:"BharatiTirthaCurrent", label:"Bharati Tirtha (Current)", year:1951, displayDate:"1951–Present", school:"Advaita - Sringeri", region:"South", note:"36th Pontiff."},

    // --- Puri & Jyotir Matha (North/East) ---
    {id:"BrahmanandaSaraswati", label:"Swami Brahmananda Saraswati", year:1871, displayDate:"1871–1953", school:"Advaita - Jyotir", region:"North", note:"Restored the lost Jyotirmath lineage; Guru of Mahesh Yogi & Karpatri."},
    {id:"KarpatriMaharaj", label:"Swami Karpatri Maharaj", year:1907, displayDate:"1907–1982", school:"Advaita - Puri", region:"North", subregion:"Varanasi", work:"Ram Rajya Parishad", others:["Veda Swarupa Vimarsha"], note:"Dharma Samrat; political and spiritual leader."},
    {id:"NischalanandaSaraswati", label:"Swami Nischalananda", year:1943, displayDate:"1943–Present", school:"Advaita - Puri", region:"East", note:"Current Shankaracharya of Puri; Mathematician."},

    // --- Kanchi Kamakoti Peetham ---
    {id:"Chandrashekharendra", label:"Chandrashekharendra (Mahaperiyava)", year:1894, displayDate:"1894–1994", school:"Advaita - Kanchi", region:"South", subregion:"Tamil Nadu", work:"Deivathin Kural", others:[], note:"The Walking God; lived 100 years."},
    {id:"JayendraSaraswathi", label:"Jayendra Saraswathi", year:1935, displayDate:"1935–2018", school:"Advaita - Kanchi", region:"South", note:"69th Pontiff; expanded social outreach."},
    {id:"VijayendraSaraswathi", label:"Vijayendra Saraswathi", year:1969, displayDate:"1969–Present", school:"Advaita - Kanchi", region:"South", note:"Current Pontiff."},

    // --- Ramakrishna Mission (RKM) ---
    {id:"Ramakrishna", label:"Ramakrishna Paramahamsa", year:1836, displayDate:"1836–1886", school:"Advaita - RKM", region:"East", subregion:"Bengal", work:"Kathamrita", others:[], note:"Prophet of the Modern Age; Harmony of Religions."},
    {id:"SaradaDevi", label:"Sarada Devi", year:1853, displayDate:"1853–1920", school:"Advaita - RKM", region:"East", note:"The Holy Mother; Sangha Janani."},
    {id:"Vivekananda", label:"Swami Vivekananda", year:1863, displayDate:"1863–1902", school:"Advaita - RKM", region:"East", work:"Raja Yoga", others:["Karma Yoga", "Jnana Yoga"], note:"Took Vedanta to the West."},
    {id:"Brahmananda", label:"Swami Brahmananda", year:1863, displayDate:"1863–1922", school:"Advaita - RKM", region:"East", note:"Rakhal; Spiritual Son of Ramakrishna; First President."},
    {id:"Nivedita", label:"Sister Nivedita", year:1867, displayDate:"1867–1911", school:"Advaita - RKM", region:"East", work:"The Master as I Saw Him", note:"Margaret Noble; dedicated to Indian Nationalism."},

    // --- Independent / Other Advaitins ---
    {id:"Vacaspati", label:"Vacaspati Mishra", year:900, displayDate:"c. 900–980", school:"Advaita", region:"East", work:"Bhamati", note:"Polymath (Nyaya, Yoga, Mimamsa, Vedanta)."},
    {id:"Sarvajnatman", label:"Sarvajnatman", year:900, displayDate:"c. 900", school:"Advaita", region:"South", work:"Samkshepa Sariraka", note:"Post-Shankara scholar."},
    {id:"Prakasatman", label:"Prakasatman", year:975, displayDate:"c. 975", school:"Advaita", region:"South", work:"Vivarana", note:"Founder of Vivarana sub-school."},
    {id:"Anandagiri", label:"Anandagiri", year:1260, displayDate:"c. 1260", school:"Advaita", region:"South", note:"Tikakara; wrote glosses on Shankara's works."},
    {id:"Amalananda", label:"Amalananda", year:1250, displayDate:"c. 1250", school:"Advaita", region:"South", work:"Vedanta Kalpataru", note:"Bhamati sub-school."},
    {id:"SadanandaYogindra", label:"Sadananda Yogindra", year:1450, displayDate:"c. 15th Century", school:"Advaita", region:"North", work:"Vedantasara", note:"Introductory primer."},
    {id:"Prakashananda", label:"Prakashananda Sarasvati", year:1500, displayDate:"c. 16th Century", school:"Advaita", region:"North", work:"Vedanta Siddhantamuktavali", note:"Emphasized drishti-srishti vada."},
    {id:"Madhusudana", label:"Madhusudana Sarasvati", year:1540, displayDate:"c. 1540–1640", school:"Advaita", region:"East", subregion:"Bengal", work:"Advaita Siddhi", note:"Defended Advaita against Dvaita; Bhakta of Krishna."},
    {id:"Appayya", label:"Appayya Dikshita", year:1520, displayDate:"1520–1593", school:"Advaita", region:"South", work:"Siddhantalesa Sangraha", note:"Reconciler of Shiva/Vishnu; Advaitin & Shaiva."},
    {id:"DharmarajaAdhvarindra", label:"Dharmaraja Adhvarindra", year:1600, displayDate:"c. 17th Century", school:"Advaita", region:"South", work:"Vedanta Paribhasa", note:"Standard epistemology text."},
    {id:"Nrisimhashrama", label:"Nrisimhashrama", year:1550, displayDate:"c. 16th Century", school:"Advaita", region:"South", note:"Bridged classical and later Advaita."},
    {id:"Sacchidanandendra", label:"Sacchidānandendra Sarasvatī", year:1880, displayDate:"1880–1975", school:"Advaita", region:"South", work:"Vedanta Prakriya Pratyabhijna", note:"Reformer; emphasized pure Shankara."},
    {id:"RamanaMaharshi", label:"Ramana Maharshi", year:1879, displayDate:"1879–1950", school:"Advaita", region:"South", subregion:"Arunachala", work:"Upadesa Saram", note:"Direct Path; Self-Inquiry (Who am I?)."},
    {id:"NisargadattaMaharaj", label:"Nisargadatta Maharaj", year:1897, displayDate:"1897–1981", school:"Advaita", region:"West", work:"I Am That", note:"Navnath Sampradaya; Radical Non-Dualism."},

    // =========================================================================
    // >>> SECTION 4: DVAITA VEDANTA (MADHVA SAMPRADAYA) <<<
    // =========================================================================
    // --- Foundation (The Direct Line) ---
    {id:"Achyuta", label:"Achyuta Preksha", year:1200, displayDate:"c. 1200 CE", school:"Dvaita", region:"South", subregion:"Udupi", note:"Guru of Madhva."},
    {id:"Madhva", label:"Madhvacharya", year:1238, displayDate:"1238–1317 CE", school:"Dvaita", region:"South", subregion:"Karnataka", work:"Sarvamula", others:["Mahabharata Tatparya Nirnaya"], note:"Founder of Tattvavada (Dualism)."},
    {id:"Padmanabha", label:"Padmanabha Tirtha", year:1310, displayDate:"d. 1324", school:"Dvaita", region:"South", subregion:"Godavari", work:"Sannyayaratnavali", others:[], note:"First successor of Madhva."},
    {id:"Narahari", label:"Narahari Tirtha", year:1325, displayDate:"d. 1333", school:"Dvaita", region:"South", subregion:"Orissa/Andhra", work:"", others:[], note:"Regent of Kalinga; brought the idols of Rama/Sita to Udupi."},
    {id:"MadhavaTirtha", label:"Madhava Tirtha", year:1335, displayDate:"d. 1350", school:"Dvaita", region:"South", note:"3rd Successor."},
    {id:"Akshobhya", label:"Akshobhya Tirtha", year:1350, displayDate:"d. 1365", school:"Dvaita", region:"South", subregion:"Karnataka", work:"Madhva Tatva Sara", others:[], note:"The Guru of Jayatirtha; famous for debate with Vidyaranya."},
    {id:"Jayatirtha", label:"Jayatirtha", year:1365, displayDate:"c. 1365–1388", school:"Dvaita", region:"South", subregion:"Malkheda", work:"Nyaya Sudha", others:["Vadavali"], note:"Tikacharya. He standardized Dvaita epistemology."},
    {id:"Trivikrama", label:"Trivikrama Panditacharya", year:1290, displayDate:"c. 1258–1320", school:"Dvaita", region:"South", subregion:"Kerala/Karnataka", work:"Vayu Stuti", others:["Tatvapradipa"], note:"Originally an Advaitin, converted by Madhva. Father of Narayanapandita."},
    {id:"NarayanaPandit", label:"Narayana Panditacharya", year:1320, displayDate:"c. 1290–1370", school:"Dvaita", region:"South", work:"Sumadhva Vijaya", others:["Manimanjari"], note:"The official biographer of Madhva."},

    // --- The Great Split (Post-Jayatirtha) ---
    {id:"Vidyadhiraja", label:"Vidyadhiraja Tirtha", year:1390, displayDate:"c. 1390–1400", school:"Dvaita", region:"South", note:"Successor of Jayatirtha. The lineage splits after him."},
    {id:"Kavindra", label:"Kavindra Tirtha", year:1400, displayDate:"14th-15th Cen.", school:"Dvaita", region:"South", note:"Founder of the lineage that became Raghavendra/Uttaradi Mathas."},
    {id:"Rajendra", label:"Rajendra Tirtha", year:1400, displayDate:"14th-15th Cen.", school:"Dvaita - Vyasaraja", region:"South", note:"Founder of the Vyasaraja Matha lineage."},

    // --- Vyasaraja Matha & Haridasas ---
    {id:"Brahmanya", label:"Brahmanya Tirtha", year:1460, displayDate:"c. 1460", school:"Dvaita - Vyasaraja", region:"South", subregion:"Abbur", note:"The ascetic Guru of Vyasatirtha."},
    {id:"Sripadaraja", label:"Sripadaraja", year:1450, displayDate:"1404–1502", school:"Dvaita - Vyasaraja", region:"South", subregion:"Mulbagal", work:"Vagvajra", others:["Bhramara Gita"], note:"Grand-Guru of Dasa Sahitya; Vidya-guru of Vyasatirtha."},
    {id:"Vyasatirtha", label:"Vyasatirtha", year:1460, displayDate:"1460–1539", school:"Dvaita - Vyasaraja", region:"South", subregion:"Hampi", work:"Nyayamrita", others:["Tarkatandava", "Tatparya Chandrika"], note:"Rajaguru of Vijayanagara; the peak of Dvaita logic."},
    {id:"Purandara", label:"Purandara Dasa", year:1540, displayDate:"1484–1564", school:"Dvaita - Vyasaraja", region:"South", subregion:"Hampi", work:"Dasa Sahitya", others:["475,000 Keerthanas"], note:"Pitamaha of Carnatic Music; disciple of Vyasatirtha."},
    {id:"Kanaka", label:"Kanaka Dasa", year:1550, displayDate:"1509–1609", school:"Dvaita - Vyasaraja", region:"South", subregion:"Karnataka", work:"Mohana Tarangini", others:["Nala Charitre"], note:"Disciple of Vyasatirtha; famous for 'Kanakana Kindi'."},
    {id:"Vadiraja", label:"Vadiraja Tirtha", year:1500, displayDate:"1480–1600", school:"Dvaita - Vyasaraja", region:"South", subregion:"Udupi (Sodhe)", work:"Yuktimallika", others:["Rukminisha Vijaya", "Tirthaprabandha"], note:"Polymath, poet, debater. Lived 120 years. Sodhe Matha."},

    // --- Rayara & Uttaradi Mathas ---
    {id:"Vijayindra", label:"Vijayindra Tirtha", year:1550, displayDate:"1514–1595", school:"Dvaita - Rayara", region:"South", subregion:"Kumbakonam", work:"Upasamhara Vijaya", others:["Madhvadhva Kantakoddhara"], note:"The Great Defender; defeated Appayya Dikshita."},
    {id:"Raghuttama", label:"Raghuttama Tirtha", year:1590, displayDate:"1548–1596", school:"Dvaita - Uttaradi", region:"South", subregion:"Manampundi", work:"Bhavabodha", others:["Brihadaranyaka Bhavabodha"], note:"Key pontiff of Uttaradi Matha."},
    {id:"Sudhindra", label:"Sudhindra Tirtha", year:1600, displayDate:"1596–1623", school:"Dvaita - Rayara", region:"South", work:"Sahitya Samrajya", note:"Guru of Raghavendra."},
    {id:"Raghavendra", label:"Raghavendra Tirtha", year:1625, displayDate:"1595–1671", school:"Dvaita - Rayara", region:"South", subregion:"Mantralayam", work:"Parimala", others:["Nyaya Muktavali"], note:"The Saint of Mantralaya; commentary on all Vedas/Upanishads."},
    {id:"Jagannatha", label:"Jagannatha Dasa", year:1750, displayDate:"1728–1809", school:"Dvaita - Rayara", region:"South", subregion:"Manvi", work:"Harikathamrutasara", others:[], note:"The Magnum Opus of Kannada Dasa Sahitya."},

    // --- Modern Dvaita ---
    {id:"Satyadharma", label:"Satyadharma Tirtha", year:1810, displayDate:"1797–1830", school:"Dvaita - Uttaradi", region:"South", work:"", others:[], note:"Prolific commentator of Uttaradi Matha."},
    {id:"Satyadhyana", label:"Satyadhyana Tirtha", year:1930, displayDate:"1872–1942", school:"Dvaita - Uttaradi", region:"South", work:"Chandrika Mandana", others:[], note:"Revived Dvaita polemics; challenged modern Advaita interpretations."},
    {id:"Vidyamanya", label:"Vidyamanya Tirtha", year:1950, displayDate:"d. 2000", school:"Dvaita", region:"South", subregion:"Bhandarkeri", work:"", others:[], note:"Guru of Pejavara and Palimaru Swamijis; great scholar."},
    {id:"Vishvesha", label:"Vishvesha Teertha (Pejavara)", year:1960, displayDate:"1931–2019", school:"Dvaita", region:"South", subregion:"Udupi", work:"", others:[], note:"Pejavara Swamiji; social reformer."},
    {id:"Bannanje", label:"Bannanje Govindacharya", year:1980, displayDate:"1936–2020", school:"Dvaita", region:"South", subregion:"Udupi", work:"Madhva Commentary Trans", others:[], note:"Encyclopedic scholar; recovered lost manuscripts."},

    // =========================================================================
    // >>> SECTION 5: VISHISHTADVAITA (SRI VAISHNAVISM) <<<
    // =========================================================================
    {id:"Nammalvar", label:"Nammalvar", year:880, displayDate:"c. 9th Century", school:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", work:"Tiruvaymoli", others:[], note:"Greatest Alvar; source of Dravida Veda."},
    {id:"Nathamuni", label:"Nathamuni", year:900, displayDate:"c. 900–950 CE", school:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", work:"Yoga Rahasya", others:["Nyayatattva"], note:"First Acharya."},
    {id:"Yamuna", label:"Yamunacharya", year:917, displayDate:"917–1037 CE", school:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", work:"Siddhitraya", others:["Gitartha Sangraha"], note:"Preceptor; laid foundation for Ramanuja."},
    {id:"Ramanuja", label:"Ramanuja", year:1017, displayDate:"1017–1137 CE", school:"Vishishtadvaita", region:"South", subregion:"Tamil Nadu", work:"Sri Bhashya", others:["Vedartha Sangraha"], note:"Founder; systematized Vishishtadvaita."},
    
    // --- Vadakalai ---
    {id:"Desika", label:"Vedanta Desika", year:1268, displayDate:"1268–1369", school:"Vishishtadvaita - Vadakalai", region:"South", subregion:"Tamil Nadu", work:"Paduka Sahasram", others:["Rahasyatrayasara"], note:"Lion of Logic and Poetry."},
    
    // --- Tenkalai ---
    {id:"Pillai", label:"Pillai Lokacharya", year:1205, displayDate:"1205–1311", school:"Vishishtadvaita - Tenkalai", region:"South", subregion:"Tamil Nadu", work:"Srivachana Bhushanam", others:[], note:"Emphasized Prapatti (Surrender)."},
    {id:"Manavala", label:"Manavala Mamunigal", year:1370, displayDate:"1370–1443", school:"Vishishtadvaita - Tenkalai", region:"South", work:"Yatiraja Vimsati", note:"Revived the Tenkalai tradition."},
    {id:"Andal", label:"Andal", year:750, displayDate:"c. 7th-8th Century", school:"Bhakti", region:"South", subregion:"Tamil Nadu", work:"Tiruppavai", others:["Nachiyar Tirumoli"], note:"Alvar; Divine Consort."},

    // =========================================================================
    // >>> SECTION 6: OTHER VEDANTA (GAUDIYA, VALLABHA, ETC) <<<
    // =========================================================================
    // --- Gaudiya (Acintya Bhedabheda) ---
    {id:"Chaitanya", label:"Chaitanya Mahaprabhu", year:1486, displayDate:"1486–1534", school:"Gaudiya", region:"East", subregion:"Bengal", work:"Siksastakam", others:[], note:"Golden Avatar; Sankirtana Movement."},
    {id:"RupaGoswami", label:"Rupa Goswami", year:1500, displayDate:"1489–1564", school:"Gaudiya", region:"North", subregion:"Vrindavan", work:"Bhakti-rasamrita-sindhu", note:"Chief of the Six Goswamis."},
    {id:"SanatanaGoswami", label:"Sanatana Goswami", year:1500, displayDate:"1488–1558", school:"Gaudiya", region:"North", work:"Brihad Bhagavatamrita", note:"Senior Goswami."},
    {id:"JivaGoswami", label:"Jiva Goswami", year:1550, displayDate:"1513–1598", school:"Gaudiya", region:"North", work:"Sat Sandarbhas", note:"Systematized Gaudiya philosophy."},
    {id:"Baladeva", label:"Baladeva Vidyabhushana", year:1750, displayDate:"1700–1793", school:"Gaudiya", region:"East", subregion:"Bengal/Jaipur", work:"Govinda Bhashya", others:["Prameya Ratnavali"], note:"Linked Gaudiya Vaishnavism to Madhva Sampradaya formally."},

    // --- Shuddhadvaita (Pushtimarg) ---
    {id:"Vallabha", label:"Vallabhacharya", year:1479, displayDate:"1479–1531", school:"Shuddhadvaita", region:"West", subregion:"Gujarat", work:"Anubhashya", others:["Subodhini"], note:"Founder of Pushtimarg."},
    {id:"Vitthalanatha", label:"Vitthalanatha (Gusainji)", year:1516, displayDate:"1516–1588", school:"Shuddhadvaita", region:"North", subregion:"Braj", note:"Established the Astachhap poets."},
    {id:"Surdas", label:"Surdas", year:1478, displayDate:"1478–1583", school:"Shuddhadvaita", region:"North", work:"Sur Sagar", note:"Blind poet-saint of Krishna."},

    // --- Other Schools ---
    {id:"Nimbarka", label:"Nimbarka", year:1150, displayDate:"c. 1130–1200", school:"Dvaitadvaita", region:"South", work:"Parijata Saurabha", others:["Dasasloki"], note:"Kumara Sampradaya."},
    {id:"Srinivasa", label:"Srinivasa Acharya", year:1200, displayDate:"c. 12th Century", school:"Dvaitadvaita", region:"South", note:"Disciple of Nimbarka."},
    {id:"Bhaskara", label:"Bhaskara", year:900, displayDate:"c. 8th-9th Century", school:"Bhedabheda", region:"South", work:"Bhaskara Bhashya", note:"Early Bhedabheda rival to Shankara."},
    {id:"Srikantha", label:"Srikantha", year:1100, displayDate:"c. 11th Century", school:"Shaiva Vedanta", region:"South", work:"Srikantha Bhashya", note:"Shaiva Vishishtadvaita (Shiva is Supreme)."},
    {id:"Jayadeva", label:"Jayadeva", year:1200, displayDate:"c. 1200 CE", school:"Bhakti", region:"East", subregion:"Odisha", work:"Gita Govinda", others:["Dasavatara Stotra"], note:"Poet."},
    {id:"Kabir", label:"Kabir", year:1440, displayDate:"1440–1518", school:"Bhakti", region:"North", subregion:"Varanasi", work:"Bijak", others:["Sakhi Granth"], note:"Nirguna."},
    {id:"Tulsidas", label:"Tulsidas", year:1532, displayDate:"1532–1623", school:"Bhakti", region:"North", subregion:"Varanasi", work:"Ramcharitmanas", others:["Vinaya Patrika"], note:"Ramayana."},
    {id:"Mirabai", label:"Mirabai", year:1498, displayDate:"1498–1546", school:"Bhakti", region:"West", subregion:"Rajasthan", work:"Bhajans", others:[], note:"Krishna Bhakta."},

    // =========================================================================
    // >>> SECTION 7: NASTIKA (BUDDHISM, JAINISM, CHARVAKA) <<<
    // =========================================================================
    {id:"Buddha", label:"Buddha", year:-563, displayDate:"c. 563–483 BCE", school:"Buddhism", region:"East", subregion:"Magadha", work:"Pali Canon", others:["Dhammapada"], note:"The Awakened One."},
    
    // --- Theravada / Early ---
    {id:"Mahakassapa", label:"Mahakassapa", year:-480, displayDate:"5th Cen BCE", school:"Theravada", region:"East", note:"First Patriarch."},
    {id:"Ananda", label:"Ananda", year:-480, displayDate:"5th Cen BCE", school:"Theravada", region:"East", note:"Attendant of Buddha."},
    
    // --- Mahayana ---
    {id:"Nagarjuna", label:"Nagarjuna", year:150, displayDate:"c. 150–250 CE", school:"Mahayana", region:"South", subregion:"Andhra", work:"Mulamadhyamakakarika", others:["Sunyatasaptati"], note:"Madhyamaka Founder; Emptiness."},
    {id:"Aryadeva", label:"Aryadeva", year:200, displayDate:"c. 3rd Century CE", school:"Mahayana", region:"South", subregion:"Andhra", work:"Catuhsataka", others:[], note:"Disciple of Nagarjuna."},
    {id:"Asanga", label:"Asanga", year:300, displayDate:"4th Century", school:"Mahayana", region:"North", work:"Yogacarabhumi", note:"Yogacara Founder."},
    {id:"Vasubandhu", label:"Vasubandhu", year:300, displayDate:"4th Century", school:"Mahayana", region:"North", work:"Abhidharmakosha", note:"Asanga's brother; Logic."},
    {id:"Dignaga", label:"Dignaga", year:480, displayDate:"c. 480–540", school:"Mahayana", region:"South", subregion:"Kanchipuram", work:"Pramana-samuccaya", others:[], note:"Father of Buddhist Logic."},
    {id:"Huineng", label:"Huineng", year:638, displayDate:"638–713 CE", school:"Mahayana", region:"China", work:"Platform Sutra", others:[], note:"6th Chan Patriarch (Zen)."},
    {id:"Bodhidharma", label:"Bodhidharma", year:500, displayDate:"5th/6th Century", school:"Mahayana", region:"South", subregion:"Kanchipuram/China", note:"Founder of Chan/Zen."},

    // --- Vajrayana ---
    {id:"Padmasambhava", label:"Padmasambhava", year:750, displayDate:"8th Century", school:"Vajrayana", region:"North", subregion:"Tibet", note:"Guru Rinpoche; brought Buddhism to Tibet."},
    {id:"Milarepa", label:"Milarepa", year:1052, displayDate:"1052–1135", school:"Vajrayana", region:"North", subregion:"Tibet", work:"100,000 Songs", note:"Yogi poet."},
    {id:"Tsongkhapa", label:"Tsongkhapa", year:1357, displayDate:"1357–1419", school:"Vajrayana", region:"North", subregion:"Tibet", note:"Founder of Gelug school."},

    // --- Travelers ---
    {id:"Faxian", label:"Faxian", year:399, displayDate:"337–422 CE", school:"Indology", region:"China", subregion:"China", work:"Buddhist Kingdoms", others:[], note:"Pilgrim."},
    {id:"Xuanzang", label:"Xuanzang", year:629, displayDate:"602–664 CE", school:"Indology", region:"China", subregion:"China", work:"Great Tang Records", others:[], note:"Pilgrim."},

    // --- Jainism ---
    {id:"Mahavira", label:"Mahavira", year:-540, displayDate:"c. 540–468 BCE", school:"Jainism", region:"East", subregion:"Bihar", work:"Agamas", others:[], note:"24th Tirthankara."},
    {id:"Bhadrabahu", label:"Bhadrabahu", year:-300, displayDate:"c. 300 BCE", school:"Jainism", region:"South", subregion:"Karnataka", work:"Kalpa Sutra", others:[], note:"Spiritual Teacher of Chandragupta."},
    {id:"Kundakunda", label:"Kundakunda", year:100, displayDate:"c. 1st Century CE", school:"Jainism", region:"South", work:"Samayasara", others:["Niyamasara"], note:"Digambara Leader."},
    
    // --- Charvaka/Ajivika ---
    {id:"Makkhali", label:"Makkhali Gosala", year:-500, displayDate:"c. 500 BCE", school:"Ajivika", region:"East", subregion:"Magadha", work:"(Lost)", others:[], note:"Founder of Ajivika."},
    {id:"Brihaspati", label:"Brihaspati", year:-700, displayDate:"Legendary", school:"Charvaka", region:"North", note:"Materialist Founder."},

    // =========================================================================
    // >>> SECTION 8: ORTHODOX PHILOSOPHY (DARSHANAS) <<<
    // =========================================================================
    // --- Nyaya & Vaisheshika ---
    {id:"Gautama", label:"Gautama", year:-200, displayDate:"c. 200 BCE", school:"Nyaya", region:"East", subregion:"Mithila", work:"Nyaya Sutras", others:[], note:"Logic Founder."},
    {id:"Vatsyayana", label:"Vatsyayana", year:450, displayDate:"c. 450–500 CE", school:"Nyaya", region:"North", work:"Nyaya Bhashya", others:[], note:"Commentator."},
    {id:"Udayana", label:"Udayana", year:984, displayDate:"c. 10th Century CE", school:"Nyaya", region:"East", subregion:"Mithila", work:"Kusumanjali", others:["Atmatattvaviveka"], note:"Theist Logic."},
    {id:"Gangesa", label:"Gangesa", year:1325, displayDate:"c. 1325 CE", school:"Nyaya", region:"East", subregion:"Mithila", work:"Tattvacintamani", others:[], note:"Navya-Nyaya Founder."},
    {id:"Raghunatha", label:"Raghunatha Shiromani", year:1477, displayDate:"c. 1477–1547", school:"Nyaya", region:"East", subregion:"Bengal", work:"Didhiti", others:[], note:"Logician."},
    {id:"Gadadhara", label:"Gadadhara", year:1650, displayDate:"c. 17th Century", school:"Nyaya", region:"East", subregion:"Bengal", work:"Shaktivada", others:[], note:"Logician."},
    {id:"Kanada", label:"Kanaka", year:-200, displayDate:"c. 200 BCE", school:"Vaisheshika", region:"West", subregion:"Gujarat", work:"Vaisheshika Sutras", others:[], note:"Atomism."},
    {id:"Prashastapada", label:"Prashastapada", year:550, displayDate:"c. 6th Century CE", school:"Vaisheshika", region:"North", work:"Padarthadharmasamgraha", others:[], note:"Atomism."},

    // --- Samkhya & Yoga ---
    {id:"Kapila", label:"Kapila", year:-600, displayDate:"c. 6th Century BCE", school:"Samkhya", region:"North", work:"Samkhya Sutras", others:[], note:"Founder of Samkhya."},
    {id:"Asuri", label:"Asuri", year:-580, displayDate:"c. 6th Century BCE", school:"Samkhya", region:"North", note:"Disciple of Kapila."},
    {id:"Panchashikha", label:"Panchashikha", year:-550, displayDate:"c. 6th Century BCE", school:"Samkhya", region:"North", note:"Expanded Samkhya."},
    {id:"IshvaraKrishna", label:"Ishvara Krishna", year:350, displayDate:"c. 350 CE", school:"Samkhya", region:"North", work:"Samkhya Karika", others:[], note:"Classical Samkhya."},
    {id:"Patanjali", label:"Patanjali", year:-150, displayDate:"c. 150 BCE", school:"Yoga", region:"North", subregion:"Kashmir", work:"Yoga Sutras", others:["Mahabhasya"], note:"Systematized Yoga."},
    {id:"Vijnanabhikshu", label:"Vijnanabhikshu", year:1550, displayDate:"c. 16th Century", school:"Yoga", region:"North", work:"Yogavarttika", others:[], note:"Syncretic."},

    // --- Mimamsa ---
    {id:"Jaimini", label:"Jaimini", year:-300, displayDate:"c. 300 BCE", school:"Mimamsa", region:"North", work:"Mimamsa Sutras", others:[], note:"Ritualism."},
    {id:"Shabara", label:"Shabara", year:200, displayDate:"c. 200 CE", school:"Mimamsa", region:"North", work:"Shabara Bhashya", others:[], note:"Commentator."},
    {id:"Kumarila", label:"Kumarila Bhatta", year:700, displayDate:"c. 700 CE", school:"Mimamsa", region:"North", subregion:"Prayag", work:"Slokavartika", others:["Tantravartika"], note:"Bhatta School."},
    {id:"Prabhakara", label:"Prabhakara", year:700, displayDate:"c. 700 CE", school:"Mimamsa", region:"South", subregion:"Kerala", work:"Brihati", others:[], note:"Guru School."},
    {id:"Mandana", label:"Mandana Mishra", year:800, displayDate:"c. 800 CE", school:"Mimamsa", region:"East", subregion:"Mithila", work:"Brahmasiddhi", others:[], note:"Debater."},

    // --- Kashmir Shaivism ---
    {id:"Vasugupta", label:"Vasugupta", year:800, displayDate:"c. 800–850 CE", school:"Kashmir Shaivism", region:"North", subregion:"Kashmir", work:"Shiva Sutras", others:["Spanda Karika"], note:"Founder of Trika."},
    {id:"Somananda", label:"Somananda", year:900, displayDate:"c. 900–950 CE", school:"Kashmir Shaivism", region:"North", subregion:"Kashmir", work:"Shiva Drishti", others:[], note:"Pratyabhijna."},
    {id:"Utpaladeva", label:"Utpaladeva", year:925, displayDate:"c. 925–975 CE", school:"Kashmir Shaivism", region:"North", subregion:"Kashmir", work:"Ishvara Pratyabhijna", others:["Sivastotravali"], note:"Architect."},
    {id:"Abhinavagupta", label:"Abhinavagupta", year:950, displayDate:"c. 950–1016 CE", school:"Kashmir Shaivism", region:"North", subregion:"Kashmir", work:"Tantraloka", others:["Abhinavabharati"], note:"Tantric Genius."},
    {id:"Kshemaraja", label:"Kshemaraja", year:1000, displayDate:"c. 1000–1050 CE", school:"Kashmir Shaivism", region:"North", subregion:"Kashmir", work:"Pratyabhijnahridayam", others:[], note:"Disciple."},
    {id:"Lakshmanjoo", label:"Lakshmanjoo", year:1907, displayDate:"1907–1991", school:"Kashmir Shaivism", region:"North", subregion:"Kashmir", work:"Secret Supreme", others:[], note:"Modern Master."},

    // =========================================================================
    // >>> SECTION 9: INDOLOGY, MODERN, ARTS & SCIENCE <<<
    // =========================================================================
    {id:"Kalidasa", label:"Kalidasa", year:400, displayDate:"c. 4th–5th Century CE", school:"Literature", region:"Central", subregion:"Ujjain", work:"Shakuntalam", others:["Meghaduta", "Raghuvamsha"], note:"Greatest Sanskrit Poet."},
    {id:"Vidyapati", label:"Vidyapati", year:1352, displayDate:"1352–1448", school:"Literature", region:"East", subregion:"Mithila", work:"Padavali", others:["Kirtilata"], note:"Maithili Poet."},
    {id:"AmirKhusrau", label:"Amir Khusrau", year:1253, displayDate:"1253–1325", school:"Literature", region:"North", subregion:"Delhi", work:"Qiran-us-Sa'dain", others:["Tughlaq Nama"], note:"Poet."},
    {id:"Tyagaraja", label:"Tyagaraja", year:1767, displayDate:"1767–1847", school:"Music", region:"South", subregion:"Tamil Nadu", work:"Pancharatna", others:[], note:"Musician."},
    {id:"Muthuswami", label:"Muthuswami Dikshitar", year:1775, displayDate:"1775–1835", school:"Music", region:"South", subregion:"Tamil Nadu", work:"Navagraha Kritis", others:[], note:"Musician."},
    {id:"SyamaSastri", label:"Syama Sastri", year:1762, displayDate:"1762–1827", school:"Music", region:"South", subregion:"Tamil Nadu", work:"Swarajatis", others:[], note:"Musician."},
    {id:"RamMohan", label:"Ram Mohan Roy", year:1772, displayDate:"1772–1833", school:"Modern", region:"East", subregion:"Bengal", work:"Brahmo Samaj", others:["Precepts of Jesus"], note:"Reformer."},
    {id:"Bankim", label:"Bankim Chandra", year:1838, displayDate:"1838–1894", school:"Literature", region:"East", subregion:"Bengal", work:"Anandamath", others:["Vande Mataram"], note:"Novelist."},
    {id:"Tagore", label:"Rabindranath Tagore", year:1861, displayDate:"1861–1941", school:"Literature", region:"East", subregion:"Bengal", work:"Gitanjali", others:["Gora", "Jana Gana Mana"], note:"Nobel Laureate."},
    {id:"Aurobindo", label:"Sri Aurobindo", year:1872, displayDate:"1872–1950", school:"Yoga", region:"East", subregion:"Pondicherry", work:"Life Divine", others:["Savitri"], note:"Integral Yoga."},
    {id:"Ramanujan", label:"Srinivasa Ramanujan", year:1887, displayDate:"1887–1920", school:"Science", region:"South", subregion:"Tamil Nadu", work:"Notebooks", others:["Mock Theta Functions"], note:"Math Genius."},
    {id:"Nazrul", label:"Kazi Nazrul Islam", year:1899, displayDate:"1899–1976", school:"Literature", region:"East", subregion:"Bengal", work:"Bidrohi", others:["Agnibina"], note:"Rebel Poet."},
    {id:"Sarat", label:"Sarat Chandra", year:1876, displayDate:"1876–1938", school:"Literature", region:"East", subregion:"Bengal", work:"Devdas", others:["Parineeta"], note:"Novelist."},
    {id:"Madhusudan", label:"Michael Madhusudan", year:1824, displayDate:"1824–1873", school:"Literature", region:"East", subregion:"Bengal", work:"Meghnad Badh", others:["Sharmistha"], note:"Epic Poet."},
    {id:"CVRaman", label:"C.V. Raman", year:1888, displayDate:"1888–1970", school:"Science", region:"South", subregion:"Tamil Nadu", work:"Raman Effect", others:[], note:"Physicist."},
    {id:"Bose", label:"J.C. Bose", year:1858, displayDate:"1858–1937", school:"Science", region:"East", subregion:"Bengal", work:"Plant Science", others:[], note:"Physicist/Botanist."},
    {id:"Satyendranath", label:"S.N. Bose", year:1894, displayDate:"1894–1974", school:"Science", region:"East", subregion:"Bengal", work:"Boson", others:["Planck-Bose Statistics"], note:"Physicist."},
    {id:"Gandhi", label:"Mahatma Gandhi", year:1869, displayDate:"1869–1948", school:"Modern", region:"West", subregion:"Gujarat", work:"Experiments with Truth", others:["Hind Swaraj"], note:"Freedom Fighter."},
    {id:"Megasthenes", label:"Megasthenes", year:-350, displayDate:"c. 350–290 BCE", school:"Indology", region:"Global", subregion:"Greece", work:"Indica", others:[], note:"Ambassador."},
    {id:"AlBiruni", label:"Al-Biruni", year:973, displayDate:"973–1050", school:"Indology", region:"Global", subregion:"Persia", work:"Indica", others:["Chronology"], note:"First Indologist."},
    {id:"IbnBattuta", label:"Ibn Battuta", year:1333, displayDate:"1304–1369", school:"Indology", region:"Global", subregion:"Morocco", work:"Rihla", others:[], note:"Traveler."},
    {id:"MarcoPolo", label:"Marco Polo", year:1288, displayDate:"1254–1324", school:"Indology", region:"Global", subregion:"Venice", work:"Travels", others:[], note:"Traveler."},
    {id:"Jones", label:"William Jones", year:1746, displayDate:"1746–1794", school:"Indology", region:"Global", subregion:"UK", work:"Asiatic Researches", others:["Sakuntala Trans"], note:"Indo-European Link."},
    {id:"Wilkins", label:"Charles Wilkins", year:1749, displayDate:"1749–1836", school:"Indology", region:"Global", subregion:"UK", work:"Gita Translation", others:[], note:"Translator."},
    {id:"Prinsep", label:"James Prinsep", year:1799, displayDate:"1799–1840", school:"Indology", region:"Global", subregion:"UK", work:"Decipherment of Brahmi", others:[], note:"Epigraphist."},
    {id:"Cunningham", label:"Alexander Cunningham", year:1814, displayDate:"1814–1893", school:"Indology", region:"Global", subregion:"UK", work:"ASI Reports", others:[], note:"Archaeology."},
    {id:"MaxMuller", label:"Max Muller", year:1823, displayDate:"1823–1900", school:"Indology", region:"Global", subregion:"Germany", work:"Sacred Books", others:["History of Sanskrit Lit"], note:"Philologist."},
    {id:"Weber", label:"Albrecht Weber", year:1825, displayDate:"1825–1901", school:"Indology", region:"Global", subregion:"Germany", work:"Indische Studien", others:[], note:"Vedic Scholar."},
    {id:"MonierWilliams", label:"Monier-Williams", year:1819, displayDate:"1819–1899", school:"Indology", region:"Global", subregion:"UK", work:"Sanskrit Dictionary", others:[], note:"Lexicographer."},
    {id:"Rajendralal", label:"Rajendralal Mitra", year:1822, displayDate:"1822–1891", school:"Indology", region:"East", subregion:"Bengal", work:"Antiquities of Orissa", others:["Indo-Aryans"], note:"First Indian Indologist."},
    {id:"Bhandarkar", label:"R.G. Bhandarkar", year:1837, displayDate:"1837–1925", school:"Indology", region:"West", subregion:"Maharashtra", work:"Vaishnavism/Shaivism", others:[], note:"Historian."},
    {id:"Buhler", label:"Georg Buhler", year:1837, displayDate:"1837–1898", school:"Indology", region:"Global", subregion:"Germany", work:"Encyclopedia", others:[], note:"Manuscripts."},
    {id:"Jacobi", label:"Hermann Jacobi", year:1850, displayDate:"1850–1937", school:"Indology", region:"Global", subregion:"Germany", work:"Jaina Sutras", others:[], note:"Jainism."},
    {id:"Roth", label:"Rudolf Roth", year:1821, displayDate:"1821–1895", school:"Indology", region:"Global", subregion:"Germany", work:"Vedic Philology", others:[], note:"Vedas."},
    {id:"Oldenberg", label:"Hermann Oldenberg", year:1854, displayDate:"1854–1920", school:"Indology", region:"Global", subregion:"Germany", work:"Buddha", others:[], note:"Buddhism."},
    {id:"Renou", label:"Louis Renou", year:1896, displayDate:"1896–1966", school:"Indology", region:"Global", subregion:"France", work:"Vedic India", others:[], note:"Vedas."},
    {id:"Gonda", label:"Jan Gonda", year:1905, displayDate:"1905–1991", school:"Indology", region:"Global", subregion:"Netherlands", work:"Sanskrit Syntax", others:[], note:"Prolific."},
    {id:"Jayaswal", label:"K.P. Jayaswal", year:1881, displayDate:"1881–1937", school:"Indology", region:"East", subregion:"Bihar", work:"Hindu Polity", others:[], note:"Republics."},
    {id:"Raychaudhuri", label:"H.C. Raychaudhuri", year:1892, displayDate:"1892–1957", school:"Indology", region:"East", subregion:"Bengal", work:"Political History", others:[], note:"Ancient India."},
    {id:"Kosambi", label:"D.D. Kosambi", year:1907, displayDate:"1907–1966", school:"Indology", region:"West", subregion:"Goa", work:"Indian History", others:[], note:"Marxist."},
    {id:"Raghavan", label:"V. Raghavan", year:1908, displayDate:"1908–1979", school:"Indology", region:"South", subregion:"Tamil Nadu", work:"Bhoja's Sringara", others:[], note:"Aesthetics."},
    {id:"Basham", label:"A.L. Basham", year:1914, displayDate:"1914–1986", school:"Indology", region:"Global", subregion:"UK", work:"The Wonder That Was India", others:[], note:"Cultural History."},
    {id:"SitaRamGoel", label:"Sita Ram Goel", year:1921, displayDate:"1921–2003", school:"Indology", region:"North", subregion:"Haryana", work:"Hindu Temples", others:[], note:"Historian."},
    {id:"DharamPal", label:"Dharam Pal", year:1922, displayDate:"1922–2006", school:"Indology", region:"North", subregion:"Punjab", work:"The Beautiful Tree", others:[], note:"Education."},
    {id:"RomilaThapar", label:"Romila Thapar", year:1931, displayDate:"b. 1931", school:"Indology", region:"North", subregion:"Punjab", work:"History of India", others:["Early India"], note:"Ancient History."},
    {id:"IrfanHabib", label:"Irfan Habib", year:1931, displayDate:"b. 1931", school:"Indology", region:"North", subregion:"Aligarh", work:"Agrarian System", others:["Medieval India"], note:"Mughal History."},
    {id:"RSSharma", label:"R.S. Sharma", year:1919, displayDate:"1919–2011", school:"Indology", region:"East", subregion:"Bihar", work:"Indian Feudalism", others:[], note:"Ancient History."},
    {id:"Staal", label:"Frits Staal", year:1930, displayDate:"1930–2012", school:"Indology", region:"Global", subregion:"Netherlands", work:"Agni", others:[], note:"Ritual."},
    {id:"Witzel", label:"Michael Witzel", year:1943, displayDate:"b. 1943", school:"Indology", region:"Global", subregion:"Germany", work:"Vedic Studies", others:[], note:"Vedas."},
    {id:"Doniger", label:"Wendy Doniger", year:1940, displayDate:"b. 1940", school:"Indology", region:"Global", subregion:"USA", work:"The Hindus", others:[], note:"Mythology."},
    {id:"Bronkhorst", label:"Johannes Bronkhorst", year:1946, displayDate:"b. 1946", school:"Indology", region:"Global", subregion:"Netherlands", work:"Greater Magadha", others:[], note:"Cultural."},
    {id:"Sanderson", label:"Alexis Sanderson", year:1948, displayDate:"b. 1948", school:"Indology", region:"Global", subregion:"UK", work:"Shaiva Studies", others:[], note:"Tantra."},
    {id:"Pollock", label:"Sheldon Pollock", year:1948, displayDate:"b. 1948", school:"Indology", region:"Global", subregion:"USA", work:"Language of Gods", others:[], note:"Sanskrit."},
    {id:"Olivelle", label:"Patrick Olivelle", year:1942, displayDate:"b. 1942", school:"Indology", region:"Global", subregion:"Sri Lanka", work:"Upanishads", others:[], note:"Philologist."},
    {id:"Eaton", label:"Richard Eaton", year:1940, displayDate:"b. 1940", school:"Indology", region:"Global", subregion:"USA", work:"Persianate Age", others:[], note:"Islam in India."},
    {id:"Wink", label:"Andre Wink", year:1990, displayDate:"N/A", school:"Indology", region:"Global", subregion:"Netherlands", work:"Al-Hind", others:[], note:"Indo-Islamic."},
    {id:"Subrahmanyam", label:"Sanjay Subrahmanyam", year:1961, displayDate:"b. 1961", school:"Indology", region:"South", subregion:"Tamil Nadu", work:"Connected History", others:[], note:"Early Modern."},
    {id:"Shulman", label:"David Shulman", year:1949, displayDate:"b. 1949", school:"Indology", region:"Global", subregion:"Israel", work:"Temple Myths", others:[], note:"South India."},
    {id:"Hart", label:"George Hart", year:1945, displayDate:"b. 1945", school:"Indology", region:"Global", subregion:"USA", work:"Tamil Poems", others:[], note:"Sangam."},
    {id:"Jamison", label:"Stephanie Jamison", year:2000, displayDate:"Active", school:"Indology", region:"Global", subregion:"USA", work:"Rig Veda Trans", others:[], note:"Vedas."},
    {id:"Brereton", label:"Joel Brereton", year:2000, displayDate:"Active", school:"Indology", region:"Global", subregion:"USA", work:"Rig Veda Trans", others:[], note:"Vedas."},
    {id:"Voltaire", label:"Voltaire", year:1694, displayDate:"1694–1778", school:"Indology", region:"Global", subregion:"France", work:"Essai", others:[], note:"Indophile."},
    {id:"Schopenhauer", label:"Schopenhauer", year:1788, displayDate:"1788–1860", school:"Indology", region:"Global", subregion:"Germany", work:"World as Will", others:[], note:"Upanishads admirer."},
    {id:"Tesla", label:"Tesla", year:1856, displayDate:"1856–1943", school:"Indology", region:"Global", subregion:"USA", work:"AC", others:[], note:"Vedantic Physics."},
    {id:"Eliot", label:"T.S. Eliot", year:1888, displayDate:"1888–1965", school:"Indology", region:"Global", subregion:"UK", work:"Waste Land", others:[], note:"Sanskrit influence."},
    {id:"Oppenheimer", label:"Oppenheimer", year:1904, displayDate:"1904–1967", school:"Indology", region:"Global", subregion:"USA", work:"Trinity", others:[], note:"Gita Scholar."},
    {id:"Harrison", label:"Harrison", year:1943, displayDate:"1943–2001", school:"Indology", region:"Global", subregion:"UK", work:"Sitar", others:[], note:"Beatles."},
    {id:"Goethe", label:"Goethe", year:1749, displayDate:"1749–1832", school:"Indology", region:"Global", subregion:"Germany", note:"Admired Shakuntalam", others:[]},
    {id:"Thoreau", label:"Thoreau", year:1817, displayDate:"1817–1862", school:"Indology", region:"Global", subregion:"USA", work:"Walden", others:[], note:"Transcendentalist."},
    {id:"Emerson", label:"Emerson", year:1803, displayDate:"1803–1882", school:"Indology", region:"Global", subregion:"USA", work:"Brahma", others:[], note:"Transcendentalist."},
    {id:"Zimmer", label:"Heinrich Zimmer", year:1890, displayDate:"1890–1943", school:"Indology", region:"Global", subregion:"Germany", work:"Philosophies of India", others:[], note:"Mythology."},
    {id:"Deussen", label:"Paul Deussen", year:1845, displayDate:"1845–1919", school:"Indology", region:"Global", subregion:"Germany", work:"Sixty Upanishads", others:[], note:"Vedanta."},
    {id:"Ingalls", label:"Daniel Ingalls", year:1916, displayDate:"1916–1999", school:"Indology", region:"Global", subregion:"USA", work:"Navya-Nyaya Logic", others:[], note:"Logic."},
    
    // =========================================================================
    // >>> SECTION 10: SHAIVA SIDDHANTA (NAYANARS, etc) <<<
    // =========================================================================
    // --- The Four Samayacharyas (The Pillars) ---
    {id:"Sambandar", label:"Tirugnana Sambandar", year:640, displayDate:"c. 7th Century CE", school:"Shaiva Siddhanta", region:"South", subregion:"Tamil Nadu", work:"Thevaram (1-3)", note:"Child prodigy; cured the Pandya King; debated Jains."},
    {id:"Appar", label:"Appar (Tirunavukkarasar)", year:630, displayDate:"c. 7th Century CE", school:"Shaiva Siddhanta", region:"South", subregion:"Tamil Nadu", work:"Thevaram (4-6)", note:"Converted Pallava King Mahendravarman I to Shaivism."},
    {id:"Sundarar", label:"Sundarar", year:710, displayDate:"c. 8th Century CE", school:"Shaiva Siddhanta", region:"South", subregion:"Tamil Nadu", work:"Thevaram (7)", note:"The 'Friend' of Shiva; sang the Tiruthonda Thogai (list of 63 Nayanars)."},
    {id:"Manikkavasagar", label:"Manikkavasagar", year:850, displayDate:"c. 9th Century CE", school:"Shaiva Siddhanta", region:"South", subregion:"Tamil Nadu", work:"Tiruvasagam", note:"The 4th Samayacharya; minister to Pandyan King."},

    // --- The Santhana Acharyas (Philosophical Lineage - 13th Century) ---
    {id:"Meykandar", label:"Meykandar", year:1230, displayDate:"c. 13th Century", school:"Shaiva Siddhanta", region:"South", subregion:"Tamil Nadu", work:"Sivajnana Bodham", note:"The systematizer of Shaiva Siddhanta philosophy."},
    {id:"Arulnandi", label:"Arulnandi Sivacharya", year:1250, displayDate:"c. 13th Century", school:"Shaiva Siddhanta", region:"South", work:"Sivajnana Siddhiyar", note:"Disciple of Meykandar; expanded the philosophy."},
    {id:"Maraijnana", label:"Maraijnana Sambandar", year:1280, displayDate:"c. 13th Century", school:"Shaiva Siddhanta", region:"South", note:"The silent Guru of Umapati."},
    {id:"Umapati", label:"Umapati Sivacharya", year:1310, displayDate:"c. 14th Century", school:"Shaiva Siddhanta", region:"South", subregion:"Chidambaram", work:"Sivaprakasam", note:"Wrote 8 major texts on Siddhanta."},
    {id:"Sekkizhar", label:"Sekkizhar", year:1135, displayDate:"c. 12th Century", school:"Shaiva Siddhanta", region:"South", work:"Periya Puranam", note:"Chief Minister of Chola King; compiled the lives of all 63 Nayanars."},

    // --- The 63 Nayanars (The Army of Shiva) ---
    {id:"Tiruneelakantar", label:"Tiru Neelakanta", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"The Potter Saint; swore celibacy on Shiva's name."},
    {id:"Iyarpagai", label:"Iyarpagai Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Gave his wife to a devotee (Shiva tested him)."},
    {id:"Ilayankudi", label:"Ilayankudi Mara", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Sowed grain in mud, gathered it back to feed a devotee."},
    {id:"Maiporul", label:"Maiporul Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Chieftain who forgave his assassin because he wore Ash."},
    {id:"Viralminda", label:"Viralminda Nayanar", year:710, displayDate:"Contemporary of Sundarar", school:"Shaiva Siddhanta", region:"South", note:"Insisted devotees be worshipped before the Deity."},
    {id:"Amaraneedi", label:"Amaraneedi Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Weighed himself and family against a loincloth."},
    {id:"Eripatha", label:"Eripatha Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Killed a royal elephant for trampling a devotee's flowers."},
    {id:"Enadinatha", label:"Enadinatha Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Swordsman; refused to strike an enemy wearing sacred ash."},
    {id:"Kannappa", label:"Kannappa Nayanar", year:500, displayDate:"Ancient/Legendary", school:"Shaiva Siddhanta", region:"South", note:"The Hunter Saint; offered his own eyes to Shiva."},
    {id:"Kungiliya", label:"Kungiliya Kalaya", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Straightened a tilted Lingam with his neck."},
    {id:"Manakanchara", label:"Manakanchara Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Cut his daughter's hair on her wedding day for a devotee."},
    {id:"Arivattaya", label:"Arivattaya Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Tried to cut his own throat when he spilled rice meant for Shiva."},
    {id:"Anaya", label:"Anaya Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Played the flute (Panchakshara) so beautifully beasts stood still."},
    {id:"Murthi", label:"Murthi Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Rubbed his elbow on stone when sandalwood was unavailable."},
    {id:"MurugaNayanar", label:"Muruga Nayanar", year:640, displayDate:"Contemporary of Sambandar", school:"Shaiva Siddhanta", region:"South", note:"Provided flower garlands for the Lord."},
    {id:"RudraPasupathi", label:"Rudra Pasupathi", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Chanted Sri Rudram standing neck-deep in water."},
    {id:"Nandanar", label:"Nandanar (Tirunalai Povar)", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Dalit saint; Nandi moved aside for him to see Shiva."},
    {id:"TiruKurippu", label:"Tiru Kurippu Thonda", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Washerman who died of sorrow when he couldn't wash a devotee's clothes."},
    {id:"Chandeshvara", label:"Chandeshvara Nayanar", year:500, displayDate:"Ancient", school:"Shaiva Siddhanta", region:"South", note:"Cut off his father's leg for interrupting worship."},
    {id:"Kulachirai", label:"Kulachirai Nayanar", year:640, displayDate:"c. 7th Century", school:"Shaiva Siddhanta", region:"South", note:"Prime Minister of Pandya King; hosted Sambandar."},
    {id:"Perumizhalai", label:"Perumizhalai Kurumba", year:710, displayDate:"Contemporary of Sundarar", school:"Shaiva Siddhanta", region:"South", note:"Attained liberation by meditating on Sundarar."},
    {id:"Karaikkal", label:"Karaikkal Ammaiyar", year:550, displayDate:"c. 6th Century", school:"Shaiva Siddhanta", region:"South", work:"Arputha Tiruvandhadhi", note:"The Mother; walked on her hands to Kailash."},
    {id:"Apputhi", label:"Apputhi Adigal", year:630, displayDate:"Contemporary of Appar", school:"Shaiva Siddhanta", region:"South", note:"Named everything he owned after Appar."},
    {id:"Tiruneelanakka", label:"Tiruneelanakka Nayanar", year:640, displayDate:"Contemporary of Sambandar", school:"Shaiva Siddhanta", region:"South", note:"Blew on a Lingam to remove a spider; hosted Sambandar."},
    {id:"Naminandi", label:"Nami Nandi Adigal", year:630, displayDate:"Contemporary of Appar", school:"Shaiva Siddhanta", region:"South", note:"Lit lamps with water when oil was refused."},
    {id:"Kalikama", label:"Eyarkon Kalikama", year:710, displayDate:"Contemporary of Sundarar", school:"Shaiva Siddhanta", region:"South", note:"Initially hated Sundarar for using Shiva as a messenger, later reconciled."},
    {id:"Tirumular", label:"Tirumular", year:600, displayDate:"c. 6th-8th Century", school:"Shaiva Siddhanta", region:"South", work:"Tirumandiram", note:"Siddha; composed the seminal Tantric text of Tamil Shaivism."},
    {id:"DandiAdigal", label:"Dandi Adigal", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Blind saint who excavated a temple tank."},
    {id:"Murkha", label:"Murkha Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Gambled to earn money to feed devotees."},
    {id:"SomasiMara", label:"Somasi Mara Nayanar", year:710, displayDate:"Contemporary of Sundarar", school:"Shaiva Siddhanta", region:"South", note:"Performed Soma Yajna; Shiva appeared as an outcaste."},
    {id:"Sakkiya", label:"Sakkiya Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Threw stones at Lingam as an act of constant devotion."},
    {id:"Sirappuli", label:"Sirappuli Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Fed 1000 devotees every day."},
    {id:"Siruthondar", label:"Siruthondar", year:642, displayDate:"c. 642 CE", school:"Shaiva Siddhanta", region:"South", note:"General of Narasimhavarman I; cooked his own son for a devotee (Shiva)."},
    {id:"Cheraman", label:"Cheraman Perumal", year:710, displayDate:"c. 800 CE", school:"Shaiva Siddhanta", region:"South", subregion:"Kerala", note:"Chera King; friend of Sundarar; went to Kailash on a horse."},
    {id:"Gananatha", label:"Gananatha Nayanar", year:640, displayDate:"Contemporary of Sambandar", school:"Shaiva Siddhanta", region:"South", note:"Trained devotees in temple service."},
    {id:"Kootruva", label:"Kootruva Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Chieftain who requested Shiva's feet as his crown."},
    {id:"PugalChola", label:"Pugal Chola Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Chola King; entered fire after his elephant killed a devotee."},
    {id:"Narasinga", label:"Narasinga Muniyaraiyar", year:710, displayDate:"Contemporary of Sundarar", school:"Shaiva Siddhanta", region:"South", note:"Chieftain who fostered Sundarar."},
    {id:"Adipattha", label:"Adipattha Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Fisherman who released the golden fish back to the sea for Shiva."},
    {id:"Kalikamba", label:"Kalikamba Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Cut off his wife's hand for hesitating to serve a former servant."},
    {id:"Kalia", label:"Kalia Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Oil-monger; tried to use his own blood as oil for lamps."},
    {id:"Satti", label:"Satti Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Cut off tongues of those who insulted Shiva's devotees."},
    {id:"Aiyadigal", label:"Aiyadigal Kadavarkon", year:575, displayDate:"c. 6th Century", school:"Shaiva Siddhanta", region:"South", note:"Pallava King who renounced the kingdom to visit temples."},
    {id:"Kanampulla", label:"Kanampulla Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Burnt his own hair as a lamp wick."},
    {id:"Kari", label:"Kari Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Poet who used his earnings to build temples."},
    {id:"Nedumara", label:"Ninra Seer Nedumara", year:640, displayDate:"c. 7th Century", school:"Shaiva Siddhanta", region:"South", note:"Pandya King (Koon Pandiyan); converted by Sambandar."},
    {id:"Mangayarkarasi", label:"Mangayarkarasiyar", year:640, displayDate:"c. 7th Century", school:"Shaiva Siddhanta", region:"South", note:"Pandya Queen; invited Sambandar to Madurai."},
    {id:"Vayilar", label:"Vayilar Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Built a temple for Shiva in his mind."},
    {id:"Munaiyaduvar", label:"Munaiyaduvar Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Mercenary who used earnings to feed devotees."},
    {id:"Kazharsinga", label:"Kazharsinga Nayanar", year:700, displayDate:"c. 700 CE", school:"Shaiva Siddhanta", region:"South", note:"Pallava King (Rajasimha); built Kanchi Kailasanathar temple."},
    {id:"Idangazhi", label:"Idangazhi Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Chieftain who allowed devotees to steal rice."},
    {id:"Seruthunai", label:"Seruthunai Nayanar", year:700, displayDate:"Contemporary of Kazharsinga", school:"Shaiva Siddhanta", region:"South", note:"Cut off the Queen's nose for smelling a flower meant for Shiva."},
    {id:"PugazhTunai", label:"Pugazh Tunai Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Priest who dropped the Abhishekam pot in hunger; Shiva supported him."},
    {id:"Kotpuli", label:"Kotpuli Nayanar", year:710, displayDate:"Contemporary of Sundarar", school:"Shaiva Siddhanta", region:"South", note:"General; killed his relatives for eating rice meant for Shiva."},
    {id:"Pusalar", label:"Pusalar Nayanar", year:700, displayDate:"Contemporary of Rajasimha", school:"Shaiva Siddhanta", region:"South", note:"Built a mental temple that Shiva visited instead of the King's stone temple."},
    {id:"Nesa", label:"Nesa Nayanar", year:600, displayDate:"Nayanar", school:"Shaiva Siddhanta", region:"South", note:"Weaver who donated clothes to devotees."},
    {id:"Kochengat", label:"Kochengat Chola", year:300, displayDate:"Early Chola", school:"Shaiva Siddhanta", region:"South", note:"Built 70 Maadakovil (elevated temples) so elephants couldn't enter."},
    {id:"TiruNeelakantaYazh", label:"Tiru Neelakanta Yazhpanar", year:640, displayDate:"Contemporary of Sambandar", school:"Shaiva Siddhanta", region:"South", note:"Musician who accompanied Sambandar."},
    {id:"Sadaya", label:"Sadaya Nayanar", year:700, displayDate:"c. 700 CE", school:"Shaiva Siddhanta", region:"South", note:"Father of Sundarar."},
    {id:"Isaijnaniyar", label:"Isaijnaniyar", year:700, displayDate:"c. 700 CE", school:"Shaiva Siddhanta", region:"South", note:"Mother of Sundarar."}
];

// --- 2. LINEAGES (The Connections) ---
const lineages = [
    // --- Divine Origins ---
    {s:"Narayana", t:"Brahma", type:"Lineage"},
    {s:"Brahma", t:"Vashishta", type:"Lineage"},
    {s:"Vashishta", t:"ShaktiRishi", type:"Lineage"},
    {s:"ShaktiRishi", t:"Parashara", type:"Lineage"},
    {s:"Parashara", t:"Vyasa", type:"Lineage"},
    {s:"Vyasa", t:"Shuka", type:"Lineage"},
    {s:"Shuka", t:"Gaudapada", type:"Lineage"}, 
    
    // --- Advaita ---
    {s:"Shiva", t:"Shankara", type:"Influence"}, 
    {s:"Gaudapada", t:"Govinda", type:"Lineage (Guru)"},
    {s:"Govinda", t:"Shankara", type:"Lineage (Guru)"},
    {s:"Shankara", t:"Suresvara", type:"Lineage (Guru)"},
    {s:"Shankara", t:"Padmapada", type:"Lineage (Guru)"},
    {s:"Shankara", t:"Totaka", type:"Lineage (Guru)"},
    {s:"Shankara", t:"Hastamalaka", type:"Lineage (Guru)"},
    {s:"Suresvara", t:"Vacaspati", type:"Lineage"}, 
    {s:"Padmapada", t:"Prakasatman", type:"Lineage"}, 
    {s:"Vacaspati", t:"Amalananda", type:"Influence"},
    {s:"Shankara", t:"Anandagiri", type:"Lineage"},
    {s:"Shankara", t:"Appayya", type:"Lineage"},
    {s:"Shankara", t:"Madhusudana", type:"Lineage"},
    {s:"Shankara", t:"BharatiTirtha", type:"Lineage"},
    {s:"BharatiTirtha", t:"Vidyaranya", type:"Lineage (Guru)"},
    {s:"Vidyaranya", t:"SadanandaYogindra", type:"Lineage"}, 
    {s:"BrahmanandaSaraswati", t:"KarpatriMaharaj", type:"Lineage (Guru)"},
    {s:"KarpatriMaharaj", t:"NischalanandaSaraswati", type:"Lineage (Guru)"},
    {s:"Ramakrishna", t:"Vivekananda", type:"Lineage (Guru)"},
    {s:"Shankara", t:"ChandrashekharaBharati", type:"Lineage"},
    {s:"ChandrashekharaBharati", t:"AbhinavaVidyatirtha", type:"Lineage (Guru)"},
    {s:"AbhinavaVidyatirtha", t:"BharatiTirthaCurrent", type:"Lineage (Guru)"},
    {s:"Shankara", t:"NischalanandaSaraswati", type:"Lineage"},
    {s:"Vivekananda", t:"RamanaMaharshi", type:"Influence"},
    {s:"RamanaMaharshi", t:"NisargadattaMaharaj", type:"Influence"},
    {s:"Shankara", t:"Chandrashekharendra", type:"Lineage"},
    {s:"Chandrashekharendra", t:"JayendraSaraswathi", type:"Lineage (Guru)"},
    {s:"JayendraSaraswathi", t:"VijayendraSaraswathi", type:"Lineage (Guru)"},
    {s:"Totaka", t:"BrahmanandaSaraswati", type:"Lineage"},
    {s:"Kali", t:"Ramakrishna", type:"Influence"}, 
    {s:"Ramakrishna", t:"SaradaDevi", type:"Lineage (Wife/Sangha)"},
    {s:"Ramakrishna", t:"Brahmananda", type:"Lineage (Guru)"},
    {s:"Vivekananda", t:"Nivedita", type:"Lineage (Guru)"},

    // --- Dvaita ---
    {s:"Narayana", t:"Madhva", type:"Influence"}, 
    {s:"Madhva", t:"Trivikrama", type:"Influence"}, 
    {s:"Trivikrama", t:"NarayanaPandit", type:"Lineage"}, 
    {s:"Madhva", t:"Padmanabha", type:"Lineage (Guru)"},
    {s:"Padmanabha", t:"Narahari", type:"Lineage (Guru)"},
    {s:"Narahari", t:"MadhavaTirtha", type:"Lineage (Guru)"},
    {s:"MadhavaTirtha", t:"Akshobhya", type:"Lineage (Guru)"},
    {s:"Akshobhya", t:"Jayatirtha", type:"Lineage (Guru)"},
    {s:"Jayatirtha", t:"Vidyadhiraja", type:"Lineage (Guru)"},
    {s:"Vidyadhiraja", t:"Rajendra", type:"Lineage (Guru)"},
    {s:"Rajendra", t:"Brahmanya", type:"Lineage"}, 
    {s:"Brahmanya", t:"Vyasatirtha", type:"Lineage (Guru)"}, 
    {s:"Sripadaraja", t:"Vyasatirtha", type:"Lineage (Vidya Guru)"}, 
    {s:"Jayatirtha", t:"Sripadaraja", type:"Lineage"},
    {s:"Vidyadhiraja", t:"Kavindra", type:"Lineage (Guru)"},
    {s:"Kavindra", t:"Raghuttama", type:"Lineage"}, 
    {s:"Kavindra", t:"Sudhindra", type:"Lineage"}, 
    {s:"Sudhindra", t:"Raghavendra", type:"Lineage (Guru)"},
    {s:"Vyasatirtha", t:"Vijayindra", type:"Lineage (Guru)"},
    {s:"Vyasatirtha", t:"Vadiraja", type:"Lineage (Vidya Guru)"},
    {s:"Vyasatirtha", t:"Purandara", type:"Lineage (Guru)"},
    {s:"Vyasatirtha", t:"Kanaka", type:"Lineage (Guru)"},
    {s:"Vijayindra", t:"Jagannatha", type:"Influence"},
    {s:"Purandara", t:"Jagannatha", type:"Influence"},
    {s:"Appayya", t:"Vijayindra", type:"Influence"}, 
    {s:"Akshobhya", t:"Vidyaranya", type:"Influence"}, 
    {s:"Raghuttama", t:"Satyadharma", type:"Lineage"},
    {s:"Satyadharma", t:"Satyadhyana", type:"Lineage"},
    {s:"Satyadhyana", t:"Vidyamanya", type:"Influence"},
    {s:"Vidyamanya", t:"Vishvesha", type:"Lineage (Guru)"},
    {s:"Vidyamanya", t:"Bannanje", type:"Lineage (Vidya Guru)"},

    // --- Vishishtadvaita ---
    {s:"Narayana", t:"Nammalvar", type:"Lineage"}, 
    {s:"Nammalvar", t:"Nathamuni", type:"Influence"}, 
    {s:"Nathamuni", t:"Yamuna", type:"Lineage"}, 
    {s:"Yamuna", t:"Ramanuja", type:"Lineage (Guru)"}, 
    {s:"Ramanuja", t:"Desika", type:"Lineage"}, 
    {s:"Ramanuja", t:"Pillai", type:"Lineage"},
    {s:"Pillai", t:"Manavala", type:"Lineage"},
    {s:"Ramanuja", t:"Madhva", type:"Influence"},

    // --- Other Vedanta ---
    {s:"Narayana", t:"Brahma", type:"Lineage"},
    {s:"Brahma", t:"FourKumaras", type:"Lineage"}, 
    {s:"FourKumaras", t:"Nimbarka", type:"Lineage (Guru)"},
    {s:"Nimbarka", t:"Srinivasa", type:"Lineage (Guru)"},
    {s:"Rudra", t:"Vallabha", type:"Lineage (Tradition)"}, 
    {s:"Narayana", t:"Vallabha", type:"Influence"}, 
    {s:"Vallabha", t:"Vitthalanatha", type:"Lineage (Guru)"},
    {s:"Madhva", t:"Baladeva", type:"Lineage"}, 
    {s:"Chaitanya", t:"Baladeva", type:"Lineage"},
    {s:"Jayadeva", t:"Chaitanya", type:"Influence"},
    {s:"Chaitanya", t:"Tagore", type:"Influence"},
    {s:"Chaitanya", t:"RupaGoswami", type:"Lineage (Guru)"},
    {s:"Chaitanya", t:"SanatanaGoswami", type:"Lineage"},
    {s:"RupaGoswami", t:"JivaGoswami", type:"Lineage (Guru)"},
    {s:"JivaGoswami", t:"Baladeva", type:"Lineage"},
    {s:"Vitthalanatha", t:"Surdas", type:"Lineage (Guru)"},
    
    // --- Shaiva Vedanta (Srikantha) ---
    {s:"Shiva", t:"Srikantha", type:"Influence"}, // Divine Origin
    {s:"Rudra", t:"Srikantha", type:"Influence"}, // Vedic Root
    {s:"Srikantha", t:"Appayya", type:"Influence"}, // Appayya wrote the 'Sivarkamani Dipika' commentary on Srikantha's work

    // --- Philosophy & Yoga ---
    {s:"Shiva", t:"Vasugupta", type:"Influence"}, 
    {s:"Vasugupta", t:"Somananda", type:"Lineage"},
    {s:"Somananda", t:"Utpaladeva", type:"Lineage (Guru)"},
    {s:"Utpaladeva", t:"Abhinavagupta", type:"Lineage"},
    {s:"Abhinavagupta", t:"Kshemaraja", type:"Lineage (Guru)"},
    {s:"Abhinavagupta", t:"Lakshmanjoo", type:"Lineage"},
    {s:"Hiranyagarbha", t:"Patanjali", type:"Influence"}, 
    {s:"Shiva", t:"Gautama", type:"Influence"}, 
    {s:"Gautama", t:"Vatsyayana", type:"Lineage"},
    {s:"Udayana", t:"Gangesa", type:"Influence"},
    {s:"Gangesa", t:"Raghunatha", type:"Lineage"},
    {s:"Raghunatha", t:"Gadadhara", type:"Lineage"},
    {s:"Kapila", t:"Asuri", type:"Lineage (Guru)"},
    {s:"Asuri", t:"Panchashikha", type:"Lineage (Guru)"},
    {s:"Panchashikha", t:"IshvaraKrishna", type:"Lineage"},
    {s:"Jaimini", t:"Shabara", type:"Lineage"},
    {s:"Shabara", t:"Kumarila", type:"Lineage"},
    {s:"Kumarila", t:"Mandana", type:"Lineage (Guru)"},
    {s:"Kumarila", t:"Prabhakara", type:"Lineage (Guru)"},
    {s:"Kapila", t:"Patanjali", type:"Influence"},

    // --- Heterodox/Global ---
    {s:"Buddha", t:"Nagarjuna", type:"Influence"},
    {s:"Buddha", t:"Mahakassapa", type:"Lineage (Guru)"},
    {s:"Mahakassapa", t:"Ananda", type:"Lineage (Guru)"},
    {s:"Nagarjuna", t:"Aryadeva", type:"Lineage (Guru)"},
    {s:"Vasubandhu", t:"Dignaga", type:"Lineage"},
    {s:"Bodhidharma", t:"Huineng", type:"Lineage"},
    {s:"Padmasambhava", t:"Milarepa", type:"Lineage"},
    {s:"Padmasambhava", t:"Tsongkhapa", type:"Lineage"},
    {s:"Mahavira", t:"Bhadrabahu", type:"Lineage"},
    {s:"Bhadrabahu", t:"Kundakunda", type:"Lineage"},
    {s:"Vivekananda", t:"Tesla", type:"Influence"},
    {s:"Panini", t:"Voltaire", type:"Influence"},
    {s:"Vyasa", t:"Oppenheimer", type:"Influence"},
    {s:"Yajnavalkya", t:"Schopenhauer", type:"Influence"},
    {s:"Kalidasa", t:"Goethe", type:"Influence"},
    {s:"Jones", t:"MaxMuller", type:"Influence"},

    // --- Shaiva Siddhanta Connections ---
    {s:"Shiva", t:"Sambandar", type:"Influence"}, 
    {s:"Shiva", t:"Appar", type:"Influence"}, 
    {s:"Shiva", t:"Sundarar", type:"Influence"}, 
    {s:"Shiva", t:"Manikkavasagar", type:"Influence"}, 
    {s:"Appar", t:"Sambandar", type:"Influence"}, 
    {s:"Appar", t:"Apputhi", type:"Influence"}, 
    {s:"Sambandar", t:"TiruNeelakantaYazh", type:"Lineage"}, 
    {s:"Sambandar", t:"Nedumara", type:"Influence"}, 
    {s:"Sambandar", t:"Mangayarkarasi", type:"Influence"}, 
    {s:"Sundarar", t:"Cheraman", type:"Influence"}, 
    {s:"Sundarar", t:"Viralminda", type:"Influence"}, 
    {s:"Sundarar", t:"Sadaya", type:"Lineage"}, 
    {s:"Sundarar", t:"Isaijnaniyar", type:"Lineage"}, 
    {s:"Kazharsinga", t:"Pusalar", type:"Influence"}, 
    {s:"Shiva", t:"Meykandar", type:"Influence"}, 
    {s:"Meykandar", t:"Arulnandi", type:"Lineage (Guru)"}, 
    {s:"Arulnandi", t:"Maraijnana", type:"Lineage (Guru)"}, 
    {s:"Maraijnana", t:"Umapati", type:"Lineage (Guru)"}, 
    {s:"Sundarar", t:"Sekkizhar", type:"Influence"} 
];

// --- 3. NETWORK SETUP & FUNCTIONS ---
let nodes = new vis.DataSet([]);
let edges = new vis.DataSet([]);
let allNodes = [];
let allEdges = [];

const container = document.getElementById('network');
const data = { nodes: nodes, edges: edges };

const options = {
    nodes: {
        shape: 'dot',
        size: 20,
        borderWidth: 2,
        shadow: { enabled: true, color: 'rgba(0,0,0,0.5)', size: 10, x: 5, y: 5 },
        font: { 
            face: 'Cinzel', 
            color: '#ffffff',
            size: 16,
            strokeWidth: 5, 
            strokeColor: '#050505', 
            align: 'center',
            vadjust: -35 
        },
        color: { border: '#333', background: '#222', highlight: { border: '#d4af37', background: '#444' } }
    },
    edges: {
        width: 1,
        selectionWidth: 2,
        smooth: { type: "continuous", forceDirection: "none", roundness: 0.4 },
        arrows: { to: { scaleFactor: 0.5 } },
        color: { color: '#444', highlight: '#d4af37', opacity: 0.4 },
        font: { face: 'Noto Serif', size: 9, color: '#666', strokeWidth: 3, strokeColor: '#050505', align: 'middle' }
    },
    physics: {
        enabled: true,
        stabilization: { enabled: true, iterations: 1500, updateInterval: 50 },
        barnesHut: { gravitationalConstant: -10000, centralGravity: 0.2, springLength: 250, springConstant: 0.02, damping: 0.09, avoidOverlap: 1 }
    },
    interaction: { hover: true, tooltipDelay: 200, hideEdgesOnDrag: true, zoomView: true }
};

const network = new vis.Network(container, data, options);

network.on("stabilizationIterationsDone", function () {
    network.setOptions({ physics: false });
});

// COLOR MAPPING
function getColor(school) {
    if (!school) return "#666";
    // Check specific mathas first
    if (school.includes('Sringeri') || school.includes('Puri') || school.includes('Jyotir') || school.includes('Dwaraka')) return "#ff9800"; // Orange
    if (school.includes('Kanchi')) return "#ffb74d"; // Lighter Orange
    if (school.includes('RKM')) return "#ffcc80"; // Pale Orange
    
    if (school.includes('Advaita')) return "#ff9800";
    if (school.includes('Vyasaraja') || school.includes('Rayara') || school.includes('Uttaradi')) return "#ff5722"; // Red-Orange
    if (school.includes('Dvaita')) return "#ff5722";
    
    if (school.includes('Vishishtadvaita')) return "#f44336"; // Red
    if (school.includes('Gaudiya')) return "#e91e63"; // Pink
    if (school.includes('Shuddhadvaita') || school.includes('Nimbarka')) return "#9c27b0"; // Purple
    
    if (school.includes('Theravada')) return "#8bc34a"; // Light Green
    if (school.includes('Mahayana') || school.includes('Vajrayana')) return "#4caf50"; // Green
    if (school.includes('Buddhism')) return "#4caf50";
    
    if (school.includes('Nyaya') || school.includes('Vaisheshika')) return "#00bcd4"; // Cyan
    if (school.includes('Samkhya') || school.includes('Yoga')) return "#03a9f4"; // Light Blue
    if (school.includes('Kashmir')) return "#673ab7"; // Deep Purple
    
    if (school.includes('Jainism')) return "#cddc39"; // Lime
    if (school.includes('Indology')) return "#a5a5a5"; // Grey
    if (school.includes('Shaiva Siddhanta')) return "#e040fb"; // Violet
    if (school.includes('Shaiva Vedanta')) return "#9575cd"; // Light Purple
    return "#ddd";
}

// INITIAL DATA PROCESSING
if (typeof rawData !== 'undefined') {
    const seenIds = new Set();
    const uniqueData = [];
    rawData.forEach(item => {
        if (!seenIds.has(item.id)) {
            seenIds.add(item.id);
            uniqueData.push(item);
        }
    });

    document.getElementById('total-counter').innerText = `Total Archived: ${uniqueData.length}`;

    uniqueData.forEach(p => {
        let schoolColor = p.school ? getColor(p.school) : "#ddd";
        let finalColor = { background: schoolColor, border: '#333' };
        let finalShape = 'dot';
        let finalSize = 20;
        let finalShadow = { enabled: true, color: 'rgba(0,0,0,0.5)', size: 10 };

        if (p.isDeity) {
            finalShape = 'star';
            finalColor = { background: '#e0f7fa', border: '#00ffff' };
            finalShadow = { enabled: true, color: '#00ffff', size: 20, x: 0, y: 0 };
            finalSize = 30;
        }

        allNodes.push({
            id: p.id,
            label: p.isDeity ? "★ " + p.label : p.label,
            group: p.school || "Unknown",
            value: finalSize,
            color: finalColor,
            shape: finalShape,
            shadow: finalShadow,
            font: { size: p.isDeity ? 22 : 16 },
            data: p
        });
    });

    lineages.forEach(l => {
        let s = uniqueData.find(x => x.id === l.s);
        let t = uniqueData.find(x => x.id === l.t);
        if (!s && seenIds.has(l.s)) s = {id: l.s}; 
        if (!t && seenIds.has(l.t)) t = {id: l.t};

        if (s && t) {
            let isGuru = (l.type === "Lineage (Guru)" || l.type === "Lineage (Vidya Guru)" || l.type.includes("Lineage"));
            let dashes = !isGuru;
            let color = isGuru ? "#d4af37" : "#555";
            let width = isGuru ? 2 : 1; 

            allEdges.push({
                from: l.s,
                to: l.t,
                arrows: "to",
                width: width,
                color: { color: color, opacity: 0.6 },
                dashes: dashes,
                label: l.type,
                font: { size: 9, color: '#777', strokeWidth: 0, align: 'middle' }
            });
        }
    });

    updateGraph();
}

// --- NEW FILTER LOGIC FOR CHECKBOXES ---
function toggleFilterMenu() {
    document.getElementById("filterMenu").classList.toggle("show");
}

function updateGraph() {
    // 1. Get Checked Schools
    const checkedSchools = Array.from(document.querySelectorAll('.school-chk:checked')).map(cb => cb.value);
    // 2. Get Checked Regions
    const checkedRegions = Array.from(document.querySelectorAll('.region-chk:checked')).map(cb => cb.value);

    let targetIds = new Set();

    allNodes.forEach(n => {
        let p = n.data;
        let matchesSchool = false;
        let matchesRegion = false;

        // School Logic (If none checked, show all)
        if (checkedSchools.length === 0) {
            matchesSchool = true;
        } else {
            for (let val of checkedSchools) {
                if (p.school && p.school.includes(val)) { matchesSchool = true; break; }
                // Handle Buddhism specific
                if (val === 'Buddhism' && (p.school.includes('Theravada') || p.school.includes('Mahayana') || p.school.includes('Vajrayana'))) {
                    matchesSchool = true; break;
                }
            }
        }

        // Region Logic (If none checked, show all)
        if (checkedRegions.length === 0) {
            matchesRegion = true;
        } else {
            for (let val of checkedRegions) {
                if ((p.region && p.region === val) || (p.subregion && p.subregion.includes(val))) {
                    matchesRegion = true; break;
                }
            }
        }

        if (matchesSchool && matchesRegion) {
            targetIds.add(n.id);
        }
    });

    // Recursive Ancestry Trace
    let visibleIds = new Set();
    
    // If NO filters are active, show everything
    if (checkedSchools.length === 0 && checkedRegions.length === 0) {
        allNodes.forEach(n => visibleIds.add(n.id));
    } else {
        targetIds.forEach(id => visibleIds.add(id));
        let changed = true;
        while (changed) {
            changed = false;
            allEdges.forEach(e => {
                if (visibleIds.has(e.to) && !visibleIds.has(e.from)) {
                    const fromNode = allNodes.find(n => n.id === e.from);
                    if (fromNode) {
                        if (fromNode.data.isDeity) {
                            visibleIds.add(e.from);
                            changed = true;
                        } else if (e.label && (e.label.includes("Lineage") || e.label.includes("Guru"))) {
                            visibleIds.add(e.from);
                            changed = true;
                        }
                    }
                }
            });
        }
    }

    const filteredNodes = allNodes.filter(n => visibleIds.has(n.id));
    nodes.clear();
    edges.clear();
    nodes.add(filteredNodes);
    
    const filteredEdges = allEdges.filter(e => visibleIds.has(e.from) && visibleIds.has(e.to));
    edges.add(filteredEdges);
}

// --- TIMELINE ---
const timelineData = new vis.DataSet(rawData.filter(x => !x.isDeity).map((t, i) => ({
    id: i,
    content: t.label,
    start: new Date(0).setFullYear(t.year),
    type: 'point', 
    className: 'vis-point', 
    personId: t.id,
    style: `border-color: ${getColor(t.school)}` 
})));

const timeline = new vis.Timeline(document.getElementById('mytimeline'), timelineData, {
    height: '100%',
    stack: true, // Prevents items from overlapping
    stackSubgroups: true,
    margin: { item: 10, axis: 5 },
    orientation: 'bottom',
    start: new Date(0).setFullYear(1000), // Default view: 1000 CE - 2000 CE
    end: new Date(0).setFullYear(2000),
    zoomMin: 1000 * 60 * 60 * 24 * 365 * 10, // Minimum zoom: 10 years
    maxHeight: '100%',
    verticalScroll: true, // Allows scrolling up/down if many people lived in the same era
    zoomKey: 'ctrlKey', // You must hold CTRL to zoom (prevents page scroll blocking)
    showCurrentTime: false // Hides the annoying red line for "today"
});

// Link Timeline Clicks to Side Panel
timeline.on('select', (props) => {
    if (props.items.length) {
        const item = timelineData.get(props.items[0]);
        const node = allNodes.find(n => n.id === item.personId);
        if (node) {
            openPanel(node.data);
            // Optional: Highlight the node in the network when clicked in timeline
            network.selectNodes([node.id]);
            network.focus(node.id, { scale: 1.5, animation: true });
        }
    }
});

function openPanel(d) {
    document.getElementById('p-name').innerText = d.iast || d.label;
     
    if (d.isDeity) {
        document.getElementById('p-religion').innerText = d.religion || "";
        document.getElementById('p-dates').innerText = "Divine / Timeless";
        document.getElementById('human-fields').style.display = 'none';
        document.getElementById('deity-fields').style.display = 'block';
        document.getElementById('p-othernames').innerText = d.otherNames || "N/A";
        document.getElementById('p-attributes').innerText = d.attributes || "N/A";
    } else {
        document.getElementById('p-religion').innerText = "";
        document.getElementById('p-dates').innerText = d.displayDate ? d.displayDate : (d.year < 0 ? Math.abs(d.year) + " BCE" : d.year + " CE");
        document.getElementById('human-fields').style.display = 'block';
        document.getElementById('deity-fields').style.display = 'none';
        document.getElementById('p-school').innerText = d.school || "";
        document.getElementById('p-region').innerText = (d.region || "") + (d.subregion ? ` (${d.subregion})` : "");

        const workEl = document.getElementById('p-work');
        if (d.work && d.workUrl) {
            workEl.innerHTML = `<a href="${d.workUrl}" target="_blank" class="opus-link">${d.work} ↗</a>`;
        } else {
            workEl.innerText = d.work || "N/A";
        }

        const ul = document.getElementById('p-others');
        ul.innerHTML = "";
        if (d.others && d.others.length > 0) d.others.forEach(w => ul.innerHTML += `<li>${w}</li>`);
        else ul.innerHTML = "<li>No other major records listed.</li>";
    }

    document.getElementById('p-note').innerText = d.note || "";
     
    const wikiBtn = document.getElementById('p-wiki');
    const wikiSlug = d.wiki || d.label.replace(/\s+/g, '_');
    wikiBtn.href = `https://en.wikipedia.org/wiki/${wikiSlug}`;
     
    let parent = lineages.find(l => l.t === d.id); 
    let lineageText = "Source / Independent";
    if (parent) {
        lineageText = `${parent.type} of ${parent.s}`; 
    }
    document.getElementById('p-lineage').innerText = lineageText;

    // UPDATED PANEL WIDTH TO 300px
    document.getElementById('side-panel').style.width = "300px";
    document.getElementById('panel-content').style.opacity = "1";
}

network.on("click", function(params) {
    if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const node = nodes.get(nodeId);
        if (node) {
            openPanel(node.data);
            if (!node.data.isDeity) {
                const tItem = timelineData.get({ filter: i => i.personId === node.id });
                if (tItem.length) timeline.moveTo(tItem[0].start);
            }
        }
    } else {
        document.getElementById('side-panel').style.width = "0";
        document.getElementById('panel-content').style.opacity = "0";
    }
});

// --- SEARCH LOGIC (AUTOCOMPLETE) ---
const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    searchResults.innerHTML = '';
     
    if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
    }

    const matches = allNodes.filter(n => 
        n.label.toLowerCase().includes(query) || 
        (n.data.school && n.data.school.toLowerCase().includes(query))
    );

    if (matches.length > 0) {
        searchResults.style.display = 'flex';
        matches.forEach(match => {
            const item = document.createElement('div');
            item.className = 'search-item';
            item.innerHTML = `<span>${match.label}</span><span class="meta">${match.data.school || ''}</span>`;
            item.onclick = () => {
                // CLEAR FILTERS ON SEARCH
                document.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false);
                
                updateGraph();
                setTimeout(() => {
                    network.selectNodes([match.id]);
                    network.focus(match.id, { scale: 1.5, animation: true });
                    openPanel(match.data);
                }, 100);
                searchResults.style.display = 'none';
                searchInput.value = '';
            };
            searchResults.appendChild(item);
        });
    } else {
        searchResults.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    if (e.target !== searchInput && e.target !== searchResults) {
        searchResults.style.display = 'none';
    }
    
    // Close Filter Menu if clicked outside
    const filterMenu = document.getElementById("filterMenu");
    const filterBtn = document.getElementById("filterBtn");
    if (!filterMenu.contains(e.target) && e.target !== filterBtn) {
        filterMenu.classList.remove("show");
    }
});

const gutter = document.getElementById('drag-gutter');
const timelineDiv = document.getElementById('mytimeline');
let isDragging = false;
let startY, startHeight;

gutter.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startHeight = timelineDiv.offsetHeight;
    document.body.style.cursor = 'ns-resize'; 
    document.body.style.userSelect = 'none'; 
});

window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaY = startY - e.clientY;
    const newHeight = startHeight + deltaY;
    if (newHeight > 50 && newHeight < window.innerHeight * 0.8) {
        timelineDiv.style.height = newHeight + 'px';
    }
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        network.redraw();
        timeline.redraw();
    }
});

