export type BlogPost = {
  id: string | number;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  summary: string;
  content: string[];
  recapLink?: {
    text: string;
    targetSlug: string;
  };
};

