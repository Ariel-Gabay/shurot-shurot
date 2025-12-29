// app/categories/page.tsx
import { categories } from "@/lib/mock";
import Link from "next/link";

const Categories = async () => {
  return (
    <main>
      <header>
        <h1>עולמות התוכן שלנו</h1>
        <p>בחרו תחום עניין וצוללו לתוך מאגרי הידע של המומחים שלנו</p>
      </header>
      <hr />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {categories.map((category) => (
          <article
            key={category.id}
            style={{
              border: `2px solid ${category.colorCode || "#eee"}`,
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            {category.iconUrl && (
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                <img src={category.iconUrl} alt="" width={40} height={40} />
              </div>
            )}
            <h2
              style={{ color: category.colorCode || "inherit", marginTop: 0 }}
            >
              {category.name}
            </h2>
            {category.description && <p>{category.description}</p>}
            <div
              style={{
                fontSize: "0.9rem",
                color: "#666",
                marginBottom: "15px",
              }}
            >
              <span>הסלאג במערכת: {category.slug}</span>
            </div>
            <footer>
              <Link
                href={`/categories/${category.name.replaceAll(" ", "-")}`}
                style={{
                  backgroundColor: category.colorCode || "#000",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                צפייה בכל הכתבות ב{category.name}
              </Link>
            </footer>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "5px",
                backgroundColor: category.colorCode || "#ccc",
              }}
            />
          </article>
        ))}
      </section>
      <footer
        style={{
          marginTop: "50px",
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2>לא מצאתם את התחום שאתם מחפשים?</h2>
        <p>אנחנו תמיד מחפשים כותבים מומחים בתחומים חדשים.</p>
        <button>הציעו קטגוריה חדשה / הצטרפו ככותבים</button>
      </footer>
    </main>
  );
};

export default Categories;
