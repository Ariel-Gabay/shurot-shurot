// app/categories/[slug]/page.tsx
import { authors, categories, mockPosts } from "@/lib/mock";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

const Category = async ({ params }: Props) => {
  const { name } = await Promise.resolve(params);
  const decodedName = decodeURIComponent(name).replaceAll(/-/g, " ");
  const category = categories.find((c) => c.name === decodedName);
  if (!category) return notFound();

  const categoryPosts = mockPosts.filter(
    (post) => post.categoryId === category.id
  );

  return (
    <main
      dir="rtl"
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}
    >
      <header
        style={{
          borderRight: `8px solid ${category.colorCode || "#333"}`,
          padding: "20px",
          backgroundColor: "#f9f9f9",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>{category.name}</h1>
        {category.description && (
          <p style={{ fontSize: "1.2rem", color: "#555", marginTop: "10px" }}>
            {category.description}
          </p>
        )}
        <div style={{ marginTop: "10px", fontSize: "0.9rem", color: "#888" }}>
          נמצאו {categoryPosts.length} כתבות בתחום זה
        </div>
      </header>
      <section>
        {categoryPosts.length > 0 ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            {categoryPosts.map((post) => {
              const author = authors.find((a) => a.id === post.authorId);
              return (
                <Link
                  key={post.id}
                  href={`/posts/${post.title.replaceAll(" ", "-")}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                  }}
                >
                  <article
                    style={{
                      display: "flex",
                      gap: "20px",
                      paddingBottom: "20px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <img
                      src={post.mainImageUrl}
                      alt={post.title}
                      style={{
                        width: "150px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                    <div>
                      <h2 style={{ margin: "0 0 10px 0", fontSize: "1.5rem" }}>
                        {post.title}
                      </h2>
                      <p style={{ color: "#444", margin: "0 0 10px 0" }}>
                        {post.excerpt}
                      </p>

                      <footer style={{ fontSize: "0.85rem", color: "#777" }}>
                        <span>
                          מאת: <strong>{author?.fullName}</strong>
                        </span>
                        {" • "}
                        <span>
                          {post.publishDate?.toLocaleDateString("he-IL")}
                        </span>
                      </footer>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <p>אין עדיין כתבות בקטגוריה זו.</p>
        )}
      </section>
    </main>
  );
};

export default Category;
