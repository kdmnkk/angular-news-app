import { ArticleInterface } from "./article.interface"

export interface NewsResponseInterface {
  status: string;
  totalResults: number;
  articles: ArticleInterface[];
}
