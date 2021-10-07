import { CategoryName } from "./categories"

/* eslint-disable max-len */
export interface INewsArticle {
  source:      Source;
  author:      string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  string;
  publishedAt: Date | string;
  content:     string;
  bookmarked?: boolean,
  category?: CategoryName
}

export interface Source {
  id:   string | null;
  name: string;
}

type Status = 'ok' | 'error'

export interface ISource {
  id:          string;
  name:        string;
  description: string;
  url:         string;
  category:    CategoryName;
  language:    string;
  country:     string;
}

export interface INewsResponse {
  articles: INewsArticle[],
  status: Status,
  totalResults: number,
  message?: string,
  code?: number,
}

export interface ISourcesResponse {
  status: Status,
  sources: ISource[]
}