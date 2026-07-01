// ============================================================
// MotorView — Static Site Data
// ============================================================

// ── Navigation Links ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Ceramic Coating', path: '/services/ceramic-coating' },
      { label: 'Paint Protection Film', path: '/services/ppf' },
      { label: 'Car Detailing', path: '/services/car-detailing' },
      { label: 'Car Wash', path: '/services/car-wash' },
      { label: 'Interior Detailing', path: '/services/interior-detailing' },
      { label: 'Bike Detailing', path: '/services/bike-detailing' },
    ],
  },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Contact', path: '/contact' },
];

// ── Services ─────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 1,
    slug: 'graphene-coating',
    title: 'Graphene Coating',
    shortDesc: 'Advanced graphene nano-technology coating with superior hydrophobic protection and deep gloss shine.',
    fullDesc:
      'Our premium Graphene Coating Package features cutting-edge nano-technology that provides unmatched protection for your vehicle. With advanced hydrophobic effects, your car stays cleaner longer while maintaining an incredible deep gloss and shine. Backed by a 5-year warranty and includes FREE Carware Sunfilm with every package.',
    icon: 'Shield',
    heroImage: null,
    features: [
      'Advanced Hydrophobic Effect',
      'Deep Gloss & Shine',
      'Scratch Resistant',
      'UV & Weather Resistant',
      'Chemical Resistant',
      'Easy to Clean & Maintain',
      '5 Year Warranty',
      'FREE Carware Sunfilm Included',
    ],
    priceRange: 'Starting at ₹17,999',
  },
  {
    id: 2,
    slug: 'borophene-coating',
    title: 'Borophene Coating',
    shortDesc: 'Revolutionary borophene technology offering extreme gloss, superior protection, and 7-year peace of mind.',
    fullDesc:
      'Experience the next generation of paint protection with our Borophene Coating Package. This advanced technology delivers extreme gloss & clarity, superior scratch resistance, and long-lasting durability. With a comprehensive 7-year warranty and FREE Carware Sunfilm, your vehicle receives the ultimate protection package available.',
    icon: 'Layers',
    heroImage: null,
    features: [
      'Advanced Borophene Technology',
      'Extreme Gloss & Clarity',
      'Superior Scratch Resistance',
      'UV & Weather Resistant',
      'Chemical & Stain Resistant',
      'Easy to Clean & Maintain',
      'Long-Lasting Durability',
      '7 Year Warranty',
      'FREE Carware Sunfilm Included',
    ],
    priceRange: 'Starting at ₹19,999',
  },
  {
    id: 3,
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    shortDesc: 'Professional-grade ceramic protection with 9H hardness for lasting shine and protection.',
    fullDesc:
      'Our professional ceramic coating service provides an ultra-hard, chemical-resistant layer over your vehicle\'s paint. Using 9H hardness coatings, we ensure hydrophobic protection against UV rays, bird droppings, acid rain, and minor scratches.',
    icon: 'Shield',
    heroImage: null,
    features: [
      '9H Hardness Protection',
      'UV & Oxidation Resistance',
      'Hydrophobic Self-Cleaning',
      'Swirl & Scratch Resistance',
      '3–5 Year Durability',
      'Enhanced Gloss Depth',
      'Chemical Resistance',
      'Easy Maintenance',
    ],
    priceRange: '₹15,000 – ₹45,000',
  },
  {
    id: 2,
    slug: 'ppf',
    title: 'Paint Protection Film (PPF)',
    shortDesc: 'Invisible urethane film shield that protects against rock chips, scratches, and road debris.',
    fullDesc:
      'Paint Protection Film (PPF) is an optically clear, self-healing urethane film applied to high-impact areas of your vehicle. It absorbs impact from stone chips, bug splatter, and minor abrasions while remaining virtually invisible.',
    icon: 'Layers',
    heroImage: null,
    features: [
      'Self-Healing Technology',
      'Rock Chip & Scratch Protection',
      'Optically Clear Film',
      'High-Impact Zone Coverage',
      '10-Year Warranty',
      'Anti-Yellowing Formula',
      'Maintains Paint Value',
      'Stain Resistance',
    ],
    priceRange: '₹25,000 – ₹1,50,000',
  },
  {
    id: 3,
    slug: 'car-detailing',
    title: 'Car Detailing',
    shortDesc: 'Full-body premium detailing using professional-grade products to restore showroom finish.',
    fullDesc:
      'Our comprehensive car detailing service covers every inch of your vehicle, inside and out. We perform machine polishing to remove swirl marks and scratches, decontamination washes, clay bar treatment, and finish with premium wax or sealant. Your car leaves looking better than the day you bought it.',
    icon: 'Sparkles',
    heroImage: null,
    features: [
      'Machine Polishing',
      'Swirl Mark Removal',
      'Clay Bar Decontamination',
      'Premium Wax/Sealant',
      'Engine Bay Cleaning',
      'Wheel & Tyre Dressing',
      'Glass Polishing',
      'Door Jamb Cleaning',
    ],
    priceRange: '₹4,500 – ₹15,000',
  },
  {
    id: 4,
    slug: 'car-wash',
    title: 'Car Wash',
    shortDesc: 'Premium hand wash using pH-neutral shampoo and microfiber tools — zero swirl risk.',
    fullDesc:
      'Unlike automated car washes that damage paint, our premium hand wash service uses two-bucket method, pH-neutral shampoos, and ultra-soft microfiber mitts. Every wash includes tyre cleaning, window cleaning, interior wipe-down, and a quick spray wax for added protection and shine.',
    icon: 'Droplets',
    heroImage: null,
    features: [
      'Two-Bucket Method',
      'pH-Neutral Shampoo',
      'Microfiber Tools Only',
      'Tyre & Rim Cleaning',
      'Interior Wipe-Down',
      'Spray Wax Finish',
      'Window Cleaning',
      'Zero Swirl Risk',
    ],
    priceRange: '₹999 – ₹3,500',
  },
  {
    id: 5,
    slug: 'interior-detailing',
    title: 'Interior Detailing',
    shortDesc: 'Deep clean and restore your cabin — seats, carpet, dashboard, and every surface.',
    fullDesc:
      'Our interior detailing service deep-cleans and restores every surface inside your vehicle. From steam-cleaning fabric seats and carpet extraction to leather conditioning, dashboard dressing, and odour elimination, we transform your interior into a fresh, luxurious environment.',
    icon: 'Sofa',
    heroImage: null,
    features: [
      'Steam Cleaning',
      'Carpet Extraction',
      'Leather Conditioning',
      'Dashboard Dressing',
      'Odour Elimination',
      'Vent & Console Cleaning',
      'Stain Removal',
      'Fabric Protection',
    ],
    priceRange: '₹3,500 – ₹10,000',
  },
  {
    id: 6,
    slug: 'bike-detailing',
    title: 'Bike Detailing',
    shortDesc: 'Specialised detailing for motorcycles — chrome polish, engine degreasing, and more.',
    fullDesc:
      'Our bike detailing service is tailored specifically for motorcycles, cruisers, and superbikes. We hand-wash every component, degrease the engine, polish chrome parts, condition leather seats, and apply ceramic or wax protection. Every detail is handled with the care your ride deserves.',
    icon: 'Bike',
    heroImage: null,
    features: [
      'Full Hand Wash',
      'Engine Degreasing',
      'Chrome Polishing',
      'Chain Cleaning & Lube',
      'Leather Conditioning',
      'Ceramic/Wax Protection',
      'Tank & Fairing Polish',
      'Wheel Detailing',
    ],
    priceRange: '₹1,999 – ₹7,500',
  },
];

// ── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Business Owner',
    car: 'Mercedes-Benz GLE',
    rating: 5,
    text: 'MotorView transformed my GLE completely. The ceramic coating they applied has made maintenance so easy — water just beads off. Absolutely flawless finish. Worth every rupee.',
    avatar: null,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'IT Professional',
    car: 'BMW 3 Series',
    rating: 5,
    text: 'I was skeptical about PPF but the MotorView team explained everything in detail. Six months later, my car still looks brand new despite daily highway driving. Incredible work.',
    avatar: null,
  },
  {
    id: 3,
    name: 'Rahul Verma',
    role: 'Entrepreneur',
    car: 'Porsche Cayenne',
    rating: 5,
    text: 'The attention to detail these guys have is unmatched. They spent 3 days on my Cayenne and the result was jaw-dropping. The paint looks deeper and richer than ever.',
    avatar: null,
  },
  {
    id: 4,
    name: 'Sneha Kapoor',
    role: 'Doctor',
    car: 'Audi Q7',
    rating: 5,
    text: 'Doorstep service is a game-changer for someone with a busy schedule. They came to my home, did a full detail and coating, and left my Q7 looking spectacular. Highly recommend.',
    avatar: null,
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Architect',
    car: 'Land Rover Defender',
    rating: 5,
    text: 'Got the interior detailing done before a road trip. The team removed every stain, eliminated all odour, and even conditioned the leather. My Defender felt brand new inside.',
    avatar: null,
  },
  {
    id: 6,
    name: 'Anita Desai',
    role: 'CA',
    car: 'Honda City',
    rating: 5,
    text: 'Even for a mid-range car, MotorView gave it the same luxury treatment. The Gold package detailing made my City shine like cars three times its price. Amazing value.',
    avatar: null,
  },
];

// ── Packages ─────────────────────────────────────────────────
export const PACKAGES = [
  {
    id: 1,
    name: 'Graphene',
    tagline: 'Advanced Protection',
    price: '₹17,999',
    period: 'starting',
    highlighted: false,
    features: [
      'Graphene Coating Package',
      'Advanced Hydrophobic Effect',
      'Deep Gloss & Shine',
      'Scratch Resistant',
      'UV & Weather Resistant',
      'Chemical Resistant',
      'Easy to Clean & Maintain',
      '5 Year Warranty',
      'FREE Carware Sunfilm',
    ],
    notIncluded: [],
  },
  {
    id: 2,
    name: 'Borophene',
    tagline: 'Ultimate Protection',
    price: '₹19,999',
    period: 'starting',
    highlighted: true,
    features: [
      'Borophene Coating Package',
      'Advanced Borophene Technology',
      'Extreme Gloss & Clarity',
      'Superior Scratch Resistance',
      'UV & Weather Resistant',
      'Chemical & Stain Resistant',
      'Easy to Clean & Maintain',
      'Long-Lasting Durability',
      '7 Year Warranty',
      'FREE Carware Sunfilm',
    ],
    notIncluded: [],
  },
  {
    id: 3,
    name: 'Custom',
    tagline: 'Tailored Solution',
    price: 'Contact Us',
    period: 'for quote',
    highlighted: false,
    features: [
      'Custom Package Design',
      'Multiple Coating Layers',
      'Full Paint Correction',
      'PPF + Coating Combo',
      'Glass & Wheel Coating',
      'Interior Protection',
      'Extended Warranty Options',
      'Priority Service',
    ],
    notIncluded: [],
  },
];

// ── FAQ Items ─────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How long does ceramic coating last?',
    answer:
      'A professionally applied ceramic coating typically lasts 3–5 years depending on the product used and how well it is maintained. With regular washing and annual top-up inspections, some coatings can last even longer. We offer 5-year warranty coatings as part of our Gold package.',
  },
  {
    id: 2,
    question: 'Is PPF worth it for a new car?',
    answer:
      'Absolutely. Paint Protection Film is best applied to a brand-new vehicle because it preserves the original factory paint in perfect condition. It protects against stone chips, scratches, and road debris that are nearly unavoidable. It also significantly enhances resale value.',
  },
  {
    id: 3,
    question: 'Can I wash my car after ceramic coating?',
    answer:
      'Yes, but we recommend waiting 7 days after application before washing. After that, regular hand washing with pH-neutral shampoo is recommended every 2–3 weeks. Avoid automatic car washes with harsh brushes as they can cause micro-scratches.',
  },
  {
    id: 4,
    question: 'Do you offer doorstep service?',
    answer:
      'Yes! MotorView offers full doorstep service across all 12 cities we operate in. Our team arrives with professional-grade equipment in our fully equipped service vans. Simply book online or call us, and we come to your home or office.',
  },
  {
    id: 5,
    question: 'How long does a full car detailing take?',
    answer:
      'A comprehensive full-detail service typically takes 6–10 hours depending on the vehicle size and condition. For larger vehicles like SUVs or heavily soiled cars, it may take longer. We recommend dropping off your vehicle in the morning. We will notify you when it is ready.',
  },
  {
    id: 6,
    question: 'What products do you use?',
    answer:
      'We exclusively use premium professional-grade products from brands like CarPro, Gyeon, Gtechniq, 3M, and XPEL. All our shampoos are pH-neutral, our polishes are machine-applied, and our ceramic coatings are certified for automotive use.',
  },
  {
    id: 7,
    question: 'Can ceramic coating be applied on top of PPF?',
    answer:
      'Yes, and this is actually our recommended combination. Applying a ceramic coating on top of PPF enhances the hydrophobic properties of the film, makes cleaning easier, and adds additional UV protection. It is the ultimate protection combo for your vehicle.',
  },
  {
    id: 8,
    question: 'How do I book an appointment?',
    answer:
      'You can book in three ways: through our online booking form on the website (available 24/7), by calling us directly on our helpline, or by messaging us on WhatsApp. We confirm appointments within 2 hours and send you a reminder the day before.',
  },
  {
    id: 9,
    question: 'Do you provide a warranty on your services?',
    answer:
      'Yes. Our ceramic coatings come with a 1–5 year warranty depending on the product selected. PPF comes with a 10-year manufacturer warranty. All detailing services are covered by our satisfaction guarantee — if you are not happy, we redo it free of charge.',
  },
  {
    id: 10,
    question: 'What is the difference between car wash and car detailing?',
    answer:
      'A car wash is a surface-level cleaning that removes dirt and dust. Detailing goes much deeper — it involves paint correction, clay bar decontamination, polishing, interior extraction, and protection application. Detailing restores and protects; washing merely cleans.',
  },
];

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { id: 1, value: 5000, suffix: '+', label: 'Cars Detailed' },
  { id: 2, value: 8, suffix: '+', label: 'Years Experience' },
  { id: 3, value: 4800, suffix: '+', label: 'Happy Clients' },
  { id: 4, value: 12, suffix: '+', label: 'Cities Served' },
];

// ── Team Members ──────────────────────────────────────────────
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Rajan Khanna',
    role: 'Founder & Master Detailer',
    bio: '12 years of detailing experience. Certified by CarPro and Gtechniq. Passionate about bringing European detailing standards to India.',
    avatar: null,
  },
  {
    id: 2,
    name: 'Amit Patel',
    role: 'Ceramic Coating Specialist',
    bio: 'Specialises in nano-ceramic applications and paint correction. Has worked on over 1,200 vehicles including supercars and luxury SUVs.',
    avatar: null,
  },
  {
    id: 3,
    name: 'Deepak Nair',
    role: 'PPF Installation Expert',
    bio: 'Precision PPF cutter and installer. Trained by XPEL and 3M. Known for invisible, bubble-free installations on complex body panels.',
    avatar: null,
  },
  {
    id: 4,
    name: 'Sanjana Roy',
    role: 'Interior Detailing Lead',
    bio: 'Expert in leather care, odour elimination, and cabin restoration. Trained in upholstery treatment and fabric protection technologies.',
    avatar: null,
  },
];

// ── Why Choose Us Features ────────────────────────────────────
export const WHY_CHOOSE_US = [
  {
    id: 1,
    icon: 'Award',
    title: 'Premium Products',
    desc: 'We use only certified, professional-grade products from globally trusted brands — never cheaper alternatives.',
  },
  {
    id: 2,
    icon: 'Users',
    title: 'Expert Team',
    desc: 'Every technician is factory-trained and certified. We invest in continuous education so your vehicle gets the best.',
  },
  {
    id: 3,
    icon: 'ShieldCheck',
    title: 'Guaranteed Results',
    desc: 'We stand behind every service with our satisfaction guarantee. Not happy? We redo it, no questions asked.',
  },
  {
    id: 4,
    icon: 'MapPin',
    title: 'Doorstep Service',
    desc: 'Can\'t come to us? We come to you. Our mobile units are fully equipped to deliver studio-quality results at your location.',
  },
];

// ── Blog Posts ────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Ceramic Coating vs. Wax: Which Offers Better Protection?',
    excerpt:
      'Wax has been the go-to paint protector for decades. Ceramic coatings are the modern challenger. We break down the differences in durability, cost, and performance so you can choose what is right for your vehicle.',
    category: 'Education',
    date: 'December 10, 2024',
    readTime: '6 min read',
    image: null,
  },
  {
    id: 2,
    title: 'How to Maintain Your Ceramic Coating for Maximum Longevity',
    excerpt:
      'Getting a ceramic coating is an investment. Protect that investment with the right maintenance routine. Our expert team shares the exact wash process, products, and schedule they recommend for coated vehicles.',
    category: 'Maintenance',
    date: 'November 28, 2024',
    readTime: '8 min read',
    image: null,
  },
  {
    id: 3,
    title: 'Top 5 Signs Your Car Needs a Professional Detail Right Now',
    excerpt:
      'Swirl marks under sunlight, faded trim, musty interior odours — these are all signs your car is crying for professional attention. Learn to spot the warning signs before minor issues become costly problems.',
    category: 'Tips',
    date: 'November 15, 2024',
    readTime: '5 min read',
    image: null,
  },
  {
    id: 4,
    title: 'The Complete Guide to Paint Protection Film (PPF) in 2024',
    excerpt:
      'Everything you need to know about PPF — from different film grades and brands to installation process and long-term care. Whether you are a new car owner or enthusiast, this guide covers it all.',
    category: 'Guide',
    date: 'October 30, 2024',
    readTime: '10 min read',
    image: null,
  },
];

// ── Gallery Items ─────────────────────────────────────────────
export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'BMW M3 — Ceramic Coating',
    category: 'Ceramic',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 2,
    title: 'Porsche 911 — PPF Full Body',
    category: 'PPF',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 3,
    title: 'Mercedes GLC — Full Detail',
    category: 'Detailing',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 4,
    title: 'Audi RS6 — Interior Detailing',
    category: 'Interior',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 5,
    title: 'Land Rover Defender — Ceramic',
    category: 'Ceramic',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 6,
    title: 'Lamborghini Urus — PPF',
    category: 'PPF',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 7,
    title: 'Honda CBR — Bike Detailing',
    category: 'Detailing',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 8,
    title: 'Range Rover Sport — Full Detail',
    category: 'Interior',
    beforeImage: null,
    afterImage: null,
  },
];
