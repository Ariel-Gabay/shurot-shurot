import { authors, categories, mockPosts } from "@/lib/mock";
import { notFound } from "next/navigation";

interface Props {
  params: { title: string };
}

const Post = async ({ params }: Props) => {
  const { title } = await Promise.resolve(params);
  const decodedTitle = decodeURIComponent(title).replaceAll(/-/g, " ");
  const post = mockPosts.find((p) => p.title === decodedTitle);
  if (!post) return notFound();
  const author = authors.find((a) => a.id === post.authorId);
  const category = categories.find((c) => c.id === post.categoryId);

  return (
    <article
      dir="rtl"
      style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}
    >
      <header style={{ marginBottom: "30px" }}>
        <span style={{ color: "#0070f3", fontWeight: "bold" }}>
          {category?.name}
        </span>
        <h1 style={{ fontSize: "3rem", margin: "10px 0" }}>{post.title}</h1>
        <p style={{ fontSize: "1.3rem", color: "#555", fontStyle: "italic" }}>
          {post.excerpt}
        </p>
        <div
          style={{
            marginTop: "20px",
            borderTop: "1px solid #eee",
            paddingTop: "10px",
          }}
        >
          <span>
            מאת: <strong>{author?.fullName}</strong>
          </span>
          {" | "}
          <span>פורסם ב: {post.publishDate?.toLocaleDateString("he-IL")}</span>
          {" | "}
          <span>👁️ {post.viewCount} צפיות</span>
          {" | "}
          <span>❤️ {post.likeCount} לייקים</span>
        </div>
      </header>
      <img
        src={post.mainImageUrl}
        alt={post.title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      />
      <section style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
        <p>{post.content}</p>
      </section>
      <footer
        style={{
          marginTop: "50px",
          padding: "30px",
          backgroundColor: "#f0f0f0",
          borderRadius: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <img
            src={author?.avatarUrl}
            style={{ borderRadius: "50%", width: "80px" }}
            alt=""
          />
          <div>
            <h3>נכתב על ידי {author?.fullName}</h3>
            <p>{author?.bio}</p>
            <a href={`/authors/${author?.fullName.replaceAll(/\s+/g, "-")}`}>
              לכל הכתבות של המומחה
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Post;
