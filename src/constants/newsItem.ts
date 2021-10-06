/* eslint-disable max-len */
export interface INewsArticle {
  source:      Source;
  author:      string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  string;
  publishedAt: Date;
  content:     string;
}

export interface Source {
  id:   string;
  name: string;
}

export interface INewsResponse {
  articles: INewsArticle[],
  status: boolean,
  totalResults: number,
}