import { SourceInterface } from "./source.interface"

export interface ArticleInterface {
  source: SourceInterface;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}
