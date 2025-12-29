import { authors } from "@/lib/mock";
import Link from "next/link";

const Authors = () => {
  return (
    <main>
      <header>
        <h1>נבחרת המומחים</h1>
        <p>האנשים שמאחורי הידע המקצועי באתר</p>
      </header>
      <hr />
      <section>
        {authors.map((author) => (
          <article
            key={author.id}
            style={{
              marginBottom: "40px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "20px",
            }}
          >
            <header>
              <img
                src={author.avatarUrl}
                alt={author.fullName}
                style={{ borderRadius: "50%", backgroundColor: "#eee" }}
                width={100}
                height={100}
              />
              <h2>{author.fullName}</h2>
              <p>
                <strong>תואר:</strong> {author.title}
              </p>
            </header>
            <div>
              <h3>אודות</h3>
              <p>{author.bio}</p>
            </div>
            <ul>
              <li>מספר כתבות: {author.totalPosts}</li>
              <li>התמחות: {author.specialties.join(", ")}</li>
              <li>
                חבר באתר מ- {author.joinedDate.toLocaleDateString("he-IL")}
              </li>
            </ul>
            <nav>
              {author.socialLinks.linkedin && (
                <a
                  href={author.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {author.socialLinks.website && (
                <a
                  href={author.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "15px" }}
                >
                  אתר אישי
                </a>
              )}
            </nav>
            <footer style={{ marginTop: "15px" }}>
              <Link href={`/authors/${author.fullName.replaceAll(" ", "-")}`}>
                צפייה בכל המאמרים של {author.fullName}
              </Link>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Authors;
