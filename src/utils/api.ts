import axios from "axios"
import { INewsArticle, INewsResponse, ISource, ISourcesResponse } from "constants/newsItem"

const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_ENDPOINT,
  headers: {
    "Content-Type": 'application/json',
    "X-Api-Key": process.env.REACT_APP_NEWS_API_CRED || 'no-key',
  }
})

let sourcesCache:ISource[] | null = null 

const populateSources = async ():Promise<ISource[]> => {
  if (!sourcesCache) {
    const sources = await instance.get<ISourcesResponse>('/top-headlines/sources').then(r => r.data.sources)

    sourcesCache = sources
  }

  return sourcesCache
}

export interface Query {
  q?: string,
  category?: string,
  limit?: number,
  pageNumber?: number
}

export const getNewsByQuery = async (q: Query): Promise<INewsArticle[]> => {
  const sources = await populateSources()

  return instance.get<INewsResponse>('/everything', {
    params: { 
      page: q.pageNumber, 
      pageSize: q.limit,
      q: q.q,
    }
  }).then(r => r.data.articles.map(a => {
    a.category = sources.find(s => s.id === a.source.id)?.category
    
    return a
  }))
}

export const getNewsByCategory = async (q: Query) : Promise<INewsArticle[]> => {
  if (!q.category) {
    throw { 
      code: '600',
      msg: "category is not optional in this request",
    }
  }

  
  return instance.get<INewsResponse>('/top-headlines', {
    params: {
      category: q.category,
      page: q.pageNumber, 
      pageSize: q.limit,
      q: q.q,
    }
  }).then(r => r.data.articles)
}