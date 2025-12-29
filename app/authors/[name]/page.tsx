// app/authors/[name]/page.tsx
import { authors, mockPosts } from "@/lib/mock";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

const Author = async ({ params }: Props) => {
  const { name } = await Promise.resolve(params);
  const decodedName = decodeURIComponent(name).replaceAll(/-/g, " ");
  const author = authors.find((a) => a.fullName === decodedName);
  if (!author) return notFound();

  const authorPosts = mockPosts.filter((post) => post.authorId === author.id);

  return (
    <main dir="rtl">
      <section
        style={{
          backgroundColor: "#f9f9f9",
          padding: "3rem",
          textAlign: "center",
          borderRadius: "12px",
        }}
      >
        <img
          src={author.avatarUrl}
          alt={author.fullName}
          style={{
            borderRadius: "50%",
            width: "120px",
            height: "120px",
            border: "3px solid #ddd",
          }}
        />
        <h1 style={{ fontSize: "2.5rem", margin: "10px 0" }}>
          {author.fullName}
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>{author.title}</p>

        <div
          style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}
        >
          <p>{author.bio}</p>
        </div>

        <nav style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {author.socialLinks.linkedin && (
            <a href={author.socialLinks.linkedin}>LinkedIn</a>
          )}
          {author.socialLinks.website && (
            <a href={author.socialLinks.website}>אתר אישי</a>
          )}
        </nav>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2 style={{ borderBottom: "2px solid #333", paddingBottom: "10px" }}>
          כתבות שפורסמו על ידי {author.fullName}
        </h2>

        {authorPosts.length > 0 ? (
          <div style={{ display: "grid", gap: "25px", marginTop: "20px" }}>
            {authorPosts.map((post) => (
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
                    padding: "15px",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                  }}
                >
                  <h3 style={{ margin: "0 0 10px 0", color: "#0070f3" }}>
                    {post.title}
                  </h3>
                  <p>{post.excerpt}</p>
                  <footer
                    style={{
                      fontSize: "0.85rem",
                      color: "#888",
                      marginTop: "10px",
                    }}
                  >
                    <span>
                      📅 {post.publishDate?.toLocaleDateString("he-IL")}
                    </span>
                    {" | "}
                    <span>👍 {post.likeCount} לייקים</span>
                  </footer>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p>לא נמצאו כתבות עבור כותב זה.</p>
        )}
      </section>
    </main>
  );
};

export default Author;
