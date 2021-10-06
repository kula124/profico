import axios from "axios"
import { INewsArticle, Source } from "constants/newsItem"

const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_ENDPOINT,
  headers: {
    "Content-Type": 'application/json',
    "X-Api-Key": process.env.REACT_APP_API_CRED || '',
  }
})

export interface Query {
  q?: string,
  category?: string,
  limit?: number,
  pageNumber?: number
}

export const getNewsByQuery = async (q: Query): Promise<INewsArticle[]> => {
  return instance.get<INewsArticle[]>('/everything', {
    params: { 
      page: q.pageNumber, 
      pageSize: q.limit,
      q: q.q,
    }
  }).then(r => r.data)
}

export const getNewsByCategory = async (q: Query) : Promise<INewsArticle[]> => {
  if (!q.category) {
    throw { 
      code: '600',
      msg: "category is not optional in this request",
    }
  }

  
  return instance.get<INewsArticle[]>('/top-headlines', {
    params: {
      category: q.category,
      page: q.pageNumber, 
      pageSize: q.limit,
      q: q.q,
    }
  }).then(r => r.data)
}