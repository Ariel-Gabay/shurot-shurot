import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link
        href={`/categories`}
        style={{
          textDecoration: "none",
        }}
      >
        קטגוריות
      </Link>
      <br />
      <Link
        href={`/posts`}
        style={{
          textDecoration: "none",
        }}
      >
        פוסטים
      </Link>
      <br />
      <Link
        href={`/authors`}
        style={{
          textDecoration: "none",
        }}
      >
        כותבים
      </Link>
    </div>
  );
};

export default Home;
