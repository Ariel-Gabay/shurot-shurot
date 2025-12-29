import Link from "next/link";
import { mockPosts, categories, authors } from "@/lib/mock";

const Posts = () => {
  return (
    <main>
      <header>
        <h1>כל הכתבות</h1>
        <p>מעטפת של ידע מכל העולמות: רפואה, טכנולוגיה, חשמל ועוד.</p>
      </header>
      <hr />
      <section
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
      >
        {mockPosts.map((post) => {
          const category = categories.find((c) => c.id === post.categoryId);
          const author = authors.find((a) => a.id === post.authorId);

          return (
            <Link
              key={post.id}
              href={`/posts/${post.title.replaceAll(" ", "-")}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  display: "flex",
                  gap: "20px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <img
                    src={post.mainImageUrl}
                    alt={post.title}
                    style={{
                      width: "200px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <header>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: category?.colorCode || "#666",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {category?.name || "כללי"}
                    </span>
                    <h2 style={{ margin: "5px 0" }}>{post.title}</h2>
                  </header>
                  <p style={{ color: "#444", margin: "10px 0" }}>
                    {post.excerpt}
                  </p>
                  <footer style={{ fontSize: "0.85rem", color: "#777" }}>
                    <span>
                      מאת: <strong>{author?.fullName}</strong>
                    </span>
                    {" • "}
                    <span>
                      פורסם ב: {post.publishDate?.toLocaleDateString("he-IL")}
                    </span>
                    {" • "}
                    <span>👁️ {post.viewCount} צפיות</span>
                    {" • "}
                    <span>❤️ {post.likeCount} לייקים</span>
                  </footer>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
      <footer style={{ marginTop: "40px", textAlign: "center" }}>
        <p>
          מציג {mockPosts.length} מתוך {mockPosts.length} כתבות
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button disabled>הקודם</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>הבא</button>
        </div>
      </footer>
    </main>
  );
};

export default Posts;
