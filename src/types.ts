export interface BlogArticle {
  id: string;
  title: string;
  author: string;
  category: string;
  date: string;
  image: {
    url: string;
  };
  content: {
    text: string;
  };
}
