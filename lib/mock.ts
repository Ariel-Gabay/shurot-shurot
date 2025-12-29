// 1. Categories (15 items)
export const categories: Category[] = [
  { id: "c1", name: "טכנולוגיה", slug: "technology", colorCode: "#3498db" },
  { id: "c2", name: "רפואה", slug: "medicine", colorCode: "#2ecc71" },
  { id: "c3", name: "חשמל", slug: "electrical", colorCode: "#f1c40f" },
  { id: "c4", name: "בינה מלאכותית", slug: "ai", colorCode: "#9b59b6" },
  { id: "c5", name: "כלכלה", slug: "economics", colorCode: "#27ae60" },
  { id: "c6", name: "פיזיקה", slug: "physics", colorCode: "#34495e" },
  { id: "c7", name: "חלל", slug: "space", colorCode: "#2c3e50" },
  { id: "c8", name: "משפטים", slug: "law", colorCode: "#7f8c8d" },
  {
    id: "c9",
    name: "הנדסת בניין",
    slug: "civil-engineering",
    colorCode: "#d35400",
  },
  { id: "c10", name: "תזונה", slug: "nutrition", colorCode: "#1abc9c" },
  { id: "c11", name: "ספורט", slug: "sports", colorCode: "#c0392b" },
  { id: "c12", name: "אדריכלות", slug: "architecture", colorCode: "#bdc3c7" },
  { id: "c13", name: "חינוך", slug: "education", colorCode: "#f39c12" },
  {
    id: "c14",
    name: "מדעי המחשב",
    slug: "computer-science",
    colorCode: "#2980b9",
  },
  { id: "c15", name: "קריפטו", slug: "crypto", colorCode: "#8e44ad" },
];

// 2. Authors (30 Men with diverse last names)
const firstNames = [
  "אברהם",
  "יצחק",
  "יעקב",
  "משה",
  "אהרן",
  "יוסף",
  "דוד",
  "שלמה",
  "יונתן",
  "עידו",
  "מתן",
  "נועם",
  "איתי",
  "דניאל",
  "אריאל",
  "עומר",
  "יוסי",
  "רוני",
  "אלון",
  "גיא",
  "מאור",
  "ניר",
  "ליאור",
  "שגיא",
  "דביר",
  "שי",
  "ארז",
  "עמית",
  "אור",
  "יניב",
];
const lastNames = [
  "כהן",
  "לוי",
  "מזרחי",
  "פרץ",
  "ביטון",
  "דהן",
  "אברהם",
  "פרידמן",
  "מלכה",
  "אזולאי",
  "כץ",
  "יוסף",
  "עמר",
  "אוחיון",
  "חדד",
  "גבאי",
  "בן דוד",
  "אדרי",
  "טל",
  "שפירא",
  "חזן",
  "משה",
  "רוזנברג",
  "וייס",
  "גולן",
  "קליין",
  "הראל",
  "לביא",
  "ניב",
  "צור",
];

export const authors: Author[] = firstNames.map((name, i) => ({
  id: `auth-${i + 1}`,
  fullName: `${name} ${lastNames[i]}`,
  email: `user${i + 1}@example.com`,
  avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}${i}&gender=male`,
  title:
    i % 3 === 0 ? "מומחה טכנולוגיה" : i % 3 === 1 ? "דוקטור" : "מהנדס בכיר",
  bio: "מומחה עם ניסיון רב בתחומו, כותב ומרצה על פיתוחים חדשים.",
  specialties: [categories[i % 15].id],
  socialLinks: {
    linkedin: `https://linkedin.com/in/user${i}`,
    website: `https://personalblog.co.il/user${i}`,
  },
  totalPosts: 5,
  joinedDate: new Date(2024, i % 12, (i % 28) + 1),
}));

// 3. Posts (150 items)
export const mockPosts: Post[] = Array.from({ length: 150 }).map((_, i) => {
  const cat = categories[i % 15];
  const auth = authors[i % 30];

  return {
    id: `p-${i + 1}`,
    title: `מאמר ${i + 1}: חידושים בתחום ה${cat.name}`,
    slug: `article-${i + 1}-${cat.slug}`,
    excerpt: `במאמר זה נסקור את ההתפתחויות האחרונות ב${cat.name} והשפעתן על העתיד.`,
    content: `זהו תוכן המאמר ה- ${i + 1}. מחקרים מראים כי הידע בתחום ה${
      cat.name
    } מתפתח במהירות עצומה.`,
    mainImageUrl: `https://picsum.photos/seed/post${i}/800/450`,
    authorId: auth.id,
    categoryId: cat.id,
    tags: [cat.name, "מחקר", "חדשנות"],
    status: "published",
    publishDate: new Date(2025, 0, (i % 28) + 1),
    viewCount: Math.floor(Math.random() * 5000),
    likeCount: Math.floor(Math.random() * 500),
  };
});
