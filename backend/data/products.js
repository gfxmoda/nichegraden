const customerReviews = [
  {
    user: "catrina coslov",
    title: "good stuff",
    rating: 4,
    body: "I liked this fragrance. It reminds me with the old days when I was in Ukraine back in the 19s.",
    _id: 11,
  },
  {
    user: "james clear",
    title: "not bad",
    rating: 3,
    body: "It took them more than a week to deliver despite the short distance from the warehouse. Please try to fix this for future purchases.",
    _id: 12,
  },
  {
    user: "john doe",
    title: "beautiful wrapping",
    rating: 5,
    body: "The custom wrapping the company added was fantastic. I'm gonna keep it as a decoration for my office display.",
    _id: 13,
  },
];

const products = [
  {
    _id: "1",
    category: "for-him",
    name: "sintra",
    designer: "Philippe Paparella-Paris",
    brand: "memo",
    description:
      "Sintra by Memo Paris is an Amber Floral fragrance for men and women, was launched in 2020, the nose behind this fragrance is Philippe Paparella-Paris.",
    story:
      "Sintra, like a reminiscence of childhood with its marshmallow note brought by Orange blossom Absolut, petitgrain, Vanilla Madagascar Absolut. Both mellow and airy, thanks to the presence of musks, it is a very round, with a floral and fruity sweetness. Gourmet yet light, resolutely addictive.",
    mainAccords: [
      "Sweet",
      "white floral",
      "citrus",
      "powdery",
      "lactonic",
      "vanilla",
      "caramel",
    ],
    keyNotes: ["Neroli", "Ptitgrain", "red fruits and bergamot"],
    ingredients: [
      "Milk",
      "orange blossom",
      "resins",
      "jasmine",
      "cinnamon",
      "rose",
      "Marshmallow",
      "Madagascar vanilla",
      "caramel",
      "musk and cedar",
    ],
    size: ["EDP 75ML SP"],
    images: [
      "/images/products/sintra/sintra-1.png",
      "/images/products/sintra/sintra-2.png",
    ],
    hero: "/images/products/sintra/sintra-hero.jpg",
    highlightedImage: "/images/products/sintra/sintra-1.png",
    countInStock: 13,
    price: 95.714,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "2",
    category: "for-him",
    name: "italica",
    designer: "xerjoff",
    brand: "casamorati",
    description:
      "Italica by Xerjoff an Amber woody fragrance for women and men, was launched in 2016.",
    story:
      "Warm and full-bodied, Italica opens to creamy top notes of almond and milk , warmed by hints of spicy saffron and leading to a sweet heart of bourbon, vanilla and irresistible toffee. Notes of deep sandalwood and white musk provide a classic base.",
    mainAccords: [
      "Sweet",
      "almond",
      "lactonic",
      "vanilla",
      "woody",
      "warm spicy",
      "powdery",
      "nutty",
      "fruity",
      "caramel",
    ],
    keyNotes: ["Almond", "milk and saffron"],
    ingredients: ["Toffee", "vanilla", "sandalwood", "cedar and musk"],
    size: ["EDP 100ML SP"],
    images: [
      "/images/products/casamorati/italica-1.png",
      "/images/products/casamorati/italica-2.png",
    ],
    hero: "/images/products/casamorati/italica-hero.jpg",
    highlightedImage: "/images/products/casamorati/italica-1.png",
    countInStock: 6,
    price: 128.571,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "3",
    category: "for-him",
    name: "TEMPO EAU DE PARFUM",
    designer: "Olivier Pescheux",
    brand: "Diptyque",
    description:
      "Tempo by Diptyque is a Aromatic Spicy fragrance for women and men. This is a new fragrance. Tempo was launched in 2018. The nose behind this fragrance is Olivier Pescheux. The fragrance features bergamot, pink pepper, violet leaf, clary sage, patchouli and mate.",
    story:
      "During the 60s, a certain scent was changing the world: patchouli. Tempo pays tribute to it with three extracts of this essence, a nuanced composition that hovers between elegant and woody, enveloping and earthy. Elevated by violet leaf, Tempo vibrates with remarkable sophistication.",
    mainAccords: [
      "Patchouli",
      "green",
      "soft spicy",
      "aromatic",
      "warm spicy",
      "fresh spicy",
    ],
    keyNotes: ["Patchouli"],
    ingredients: [
      "Bergamot",
      "pink pepper",
      "patchouli",
      "mate",
      "clary sage",
      "violet leaf",
    ],
    size: ["eau de parfum", "natural spray", "2.5 fl. Oz.", "75 ml"],
    images: [
      "/images/products/tempo/tempo-1.png",
      "/images/products/tempo/tempo-2.png",
      "/images/products/tempo/tempo-3.jpg",
    ],
    hero: "/images/products/tempo/tempo-hero.jpg",
    highlightedImage: "/images/products/tempo/tempo-1.png",
    countInStock: 6,
    price: 128.571,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "4",
    category: "for-him",
    name: "Original Vetiver",
    designer: "Creed",
    brand: "Creed",
    description:
      "Original Vetiver is Creed's modern take on the classic Vetiver fragrance. Vetiver fragrances traditionally derive their scent from the root of the plant. Original Vetiver infuses vetiver leaves into the blend for a fresh and original effect.This unisex fragrance pairs vetiver with Mediterranean citrus and spice, for a warm, sensual and sophisticated aroma.",
    story:
      "Formulated using all parts of the plant, Creed's Original Vetiver Eau de Parfum creates a delicious balance of fresh, green and sensual wood aromas. Conveying the scent of warm summers, it offers notes of sandalwood from Mysore, musk and ambergris. The result is an invigorating character provided by its zesty citrus top notes and the white pepper and coriander in its heart.",
    mainAccords: ["Woody", "citrus", "aromatic", "fresh spicy", "green"],
    keyNotes: ["Bergamot", "bitter orange", "mandarin", "vetiver"],
    ingredients: [
      "White pepper",
      "coriander",
      "pink pepper",
      "Sandalwood",
      "vetiver",
      "ambergris",
      "musk",
    ],
    size: ["100 ml EDP"],
    images: [
      "/images/products/originalvetiver/originalvetiver-1.png",
      "/images/products/originalvetiver/originalvetiver-2.png",
      "/images/products/originalvetiver/originalvetiver-3.webp",
    ],
    hero: "/images/products/originalvetiver/originalvetiver-hero.jpg",
    highlightedImage: "/images/products/originalvetiver/originalvetiver-1.png",
    countInStock: 2,
    price: 126.857,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "5",
    category: "for-her",
    name: "Regard Scintillant de Mille Beautes",
    designer: "Alberto Morillas",
    brand: "Salvador Dali",
    description:
      "Regard Scintillant de Mille Beautes by Salvador Dali is a Floral Woody Musk fragrance for women and men. Regard Scintillant de Mille Beautes was launched in 2015. The nose behind this fragrance is Alberto Morillas.",
    story:
      "This luxurious fragrance was introduced in 2016 by perfumer Alberto Morillas of the House of Salvador Dali. This designer has 69 perfumes to date, the first being introduced in 1983 and the latest being released in 2017. This vibrant perfume comes in a sleek vertical bottle with a black top adorned with a dazzling golden eye with a blue iris gemstone.",
    mainAccords: ["Musky", "rose", "citrus", "amber and woody"],
    keyNotes: ["Turkish rose", "Mandarin orange and Ambrette"],
    ingredients: [
      "turkish rose",
      "mandarin orange",
      "ambrette (musk mallow)",
      "cedar and musk",
    ],
    size: ["Eau De Parfum", "3.4 fl. Oz.", "100ml"],
    images: [
      "/images/products/RegardScintillant/RegardScintillant-1.png",
      "/images/products/RegardScintillant/RegardScintillant-2.png",
    ],
    hero: "/images/products/RegardScintillant/RegardScintillant-hero.jpg",
    highlightedImage:
      "/images/products/RegardScintillant/RegardScintillant-1.png",
    countInStock: 0,
    price: 96.0,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "6",
    category: "for-her",
    name: "Enslaved",
    designer: "Roja Dove",
    brand: "Roja",
    description:
      "Enslaved by Roja Dove is a Oriental fragrance for women. Enslaved was launched in 2007. Top notes are bergamot, lemon, lime and lavender; middle notes are carnation, jasmine, ylang-ylang, rose, geranium and orange blossom; base notes are labdanum, amber, patchouli, musk, oakmoss, vetiver and cedar.",
    story:
      "A secret weapon to wear on the skin, with just one breath, scent has the ability to enchant a loved one and hold them utterly captive. An opulent bouquet dances around the striking beauty of Carnation. The Clove-like nuance of this ruffled bloom is intensified by an opulent base of materials that bring sensuality to the fore. On a warm bed of Patchouli, Oakmoss and Cedarwood lies pure temptation as powdery Orris wraps around the notorious aphrodisiacs of Vanilla and Ambergris. A potion with the power to leave people captivated in your wake, once inhaled, they fall a slave to its power; a scent from which there is no escape.",
    mainAccords: [
      "Woody",
      "amber",
      "aromatic",
      "floral",
      "fresh spicy",
      "earthy",
    ],
    keyNotes: ["Lemon", "Bergamot", "Lime"],
    ingredients: [
      "Geranium",
      "Rose de Mai",
      "Orange Blossom",
      "Jasmin de Grasse",
      "Ylang Ylang",
      "Carnation",
      "Patchouli",
      "Oakmoss",
      "Vetiver",
      "Cedarwood",
      "Vanilla",
      "Orris",
      "Labdanum",
      "Ambergris",
      "Musk",
    ],
    size: ["1.7 fl. Oz.", "50ml"],
    images: [
      "/images/products/enslaved/enslaved-1.png",
      "/images/products/enslaved/enslaved-2.png",
    ],
    hero: "/images/products/enslaved/enslaved-hero.jpg",
    highlightedImage: "/images/products/enslaved/enslaved-1.png",
    countInStock: 0,
    price: 188.0,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "7",
    category: "for-her",
    name: "POIS DE SENTEUR Parfum",
    designer: "Caron Paris",
    brand: "Caron",
    description:
      "Pois de Senteur Parfum by Caron is a Floral fragrance for women. Pois de Senteur Parfum was launched in 1927. The nose behind this fragrance is Ernest Daltroff. Top notes are hyacinth, rose and cyclamen; middle notes are jasmine and lily-of-the-valley; base notes are musk, sandalwood, cedar and vanilla.",
    story:
      "A bouquet of white flowers centred on jasmine enhanced with the smooth and powdery facets of honey. This long-standing Caron creation by Ernest Daltroff in 1927 recreates the subtle scent of sweet pea, which fascinated the perfumer. A mingling of jasmine, hyacinth and lilac, its heart of white flowers unfolds into luminous and powdery notes on a musky amber base, with accents of honey. A wonderfully tender aura.",
    mainAccords: ["Floral", "green", "rose", "musky", "woody", "fresh spicy"],
    keyNotes: ["Hyacinth", "rose and cyclamen"],
    ingredients: [
      "Hyacinth",
      "rose and cyclamen",
      "lily-of-the-valley",
      "musk",
      "sandalwood",
      "cedar and vanilla",
    ],
    size: ["1.7 fl. Oz", "50ml"],
    images: [
      "/images/products/poisdemin/poisdemin-1.png",
      "/images/products/poisdemin/poisdemin-2.webp",
    ],
    hero: "/images/products/poisdemin/poisdemin-hero.webp",
    highlightedImage: "/images/products/poisdemin/poisdemin-1.png",
    countInStock: 7,
    price: 130.0,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "8",
    category: "for-her",
    name: "Oesel",
    designer: "Xerjoff",
    brand: "Xerjoff",
    description:
      "Oesel perfume from the Shooting Stars Collection is a symphony of bright and rich notes perfectly mixed with the best raw ingredients. Orange blossom and petitgrain from Paraguay lead the path to the heart of Bulgarian rose and Sambac jasmine, which are skillfully wrapped in sophisticated mimosa and white flowers. Graceful result of this mixed breed is the ambery wooden base of Indian patchouli, cedar and tobacco flower, which exudes the character, depth and persistence.",
    story:
      "Part of the Shooting Stars collection, the Oesel perfume from Xerjoff is a symphony of bright and rich notes for a deep fragrance. With petit grain and lemon leading the path to a blooming heart showcasing floral notes of rose, jasmine and white flowers, the scent comes to a graceful close with cedar, tobacco blossom and amber.",
    mainAccords: [
      "White floral",
      "citrus",
      "floral",
      "green",
      "sweet",
      "amber",
      "patchouli",
    ],
    keyNotes: ["Petitgrain", "African orange flower", "Lemon"],
    ingredients: [
      "Jasmine",
      "Mimosa",
      "White flowers",
      "Patchouli",
      "Tobacco blossom",
      "Amber",
    ],
    size: ["1.7 fl. Oz", "50ml"],
    images: [
      "/images/products/oesel/oesel-1.png",
      "/images/products/oesel/oesel-2.png",
    ],
    hero: "/images/products/oesel/oesel-hero.jpg",
    highlightedImage: "/images/products/oesel/oesel-1.png",
    countInStock: 0,
    price: 98.0,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "9",
    category: "unisex",
    name: "Oud Extrait De Parfum",
    designer: "Francis Kurkdjian",
    brand: "Maison Francis Kurkdjian",
    description:
      "Francis Kurkdjian launches a new fragrance within his perfume collection Maison Francis Kurkdjian in early May 2012. The fragrance is simply named Oud, focusing on this exquisite accord. This oriental scented material that had been neglected for decades has returned in a big way in recent years and most of the niche perfumery houses dedicated at least one edition to it. The aroma is rich and luxurious, representing a modern interpretation of the ancient Arabian perfumes. Francis Kurkdjian uses oud from Laos, where it is the purest and the most expensive. Oud is enriched with woody and spicy notes of cedar, patchouli and saffron.",
    story:
      "Simply named Oud, this opulent perfume carries whispers of Arabian Nights and the fragrant winds of the desert. The natural oud from Laos is enriched with oriental woody and spicy notes such as patchouli from Singapore and cedar wood from Morocco.",
    mainAccords: [
      "Warm spicy",
      "balsamic",
      "oud",
      "woody",
      "aromatic",
      "patchouli",
    ],
    keyNotes: ["Saffron", "Elemi gum", "Oud", "Cedarwood", "Patchouli"],
    ingredients: [
      "Elemi resin",
      "saffron",
      "Atlas cedar wood",
      "patchouli",
      "oud",
    ],
    size: ["2.4 fl. Oz", "70ml"],
    images: [
      "/images/products/oudextrait/oudextrait-1.png",
      "/images/products/oudextrait/oudextrait-2.png",
    ],
    hero: "/images/products/oudextrait/oudextrait-hero.jpg",
    highlightedImage: "/images/products/oudextrait/oudextrait-1.png",
    countInStock: 0,
    price: 98.0,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 4,
  },
  {
    _id: "10",
    category: "unisex",
    name: "Meydan",
    designer: "Spirit of Dubai",
    brand: "Dubai",
    description:
      "The exhilarating fragrance of Meydan is a symphony of saffron, lavender and bergamot top notes, with middle notes of geranium, cedar wood, tobacco with romantic undertones of patchouli and leather.",
    story:
      "Experience the thrill of ‘Dubai Meydan’ – a royal green leather inspiration studded with stones, capped with gold…'a meeting place' – one where you can expect to meet many different worlds – of business, sport and cosmopolitan living. Meydan was launched in 2015.",
    mainAccords: [
      "Leather",
      "fresh spicy",
      "warm spicy",
      "aromatic",
      "tobacco",
      "animalic",
    ],
    keyNotes: ["Saffron", "lavender and bergamot"],
    ingredients: ["Geranium", "cedar and tobacco", "patchouli and leather"],
    size: ["1.65 fl. Oz", "50ml"],
    images: [
      "/images/products/meydan/meydan-1.png",
      "/images/products/meydan/meydan-2.png",
    ],
    hero: "/images/products/meydan/meydan-hero.webp",
    highlightedImage: "/images/products/meydan/meydan-1.png",
    countInStock: 0,
    price: 90.476,
    numPurchased: 0,
    reviews: customerReviews,
    numReviews: 3,
    rating: 3.5,
  },
];

export default products;
