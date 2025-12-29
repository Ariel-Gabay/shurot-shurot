type Author = {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string;
  title: string;
  bio: string;
  specialties: string[];
  socialLinks: {
    linkedin?: string;
    website?: string;
    twitter?: string;
  };
  totalPosts: number;
  joinedDate: Date;
};

type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  colorCode?: string;
  iconUrl?: string;
};

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  mainImageUrl: string;
  authorId: string;
  categoryId: string;
  tags: string[];
  status: "draft" | "pending_review" | "published";
  publishDate: Date | null;
  viewCount: number;
  likeCount: number;
};
