import axios from "axios"

import { INewsArticle, INewsResponse, ISource, ISourcesResponse } from "constants/newsItem"

const instance = axios.create({
  baseURL: process.env.REACT_APP_NEWS_API_ENDPOINT,
  headers: {
    "Content-Type": 'application/json',
    "X-Api-Key": process.env.REACT_APP_NEWS_API_CRED || 'no-key',
  }
})

interface ICachedSources {
  sources: ISource[],
  timeStamp: Date,
}

export interface Query {
  q?: string,
  category?: string,
  limit?: number,
  pageNumber?: number,
  sortBy?: 'publishedAt' | 'relevancy',
  language?: 'en',
  from?: string,
  to?: string
}

const populateSources = async ():Promise<ISource[]> => {
  if(localStorage.getItem('sources') != null) {
    const cachedSources = JSON.parse(localStorage?.getItem('sources') || '{}') as ICachedSources

    if (new Date().getTime() - new Date(cachedSources.timeStamp).getTime()
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      < parseInt(process.env.REACT_APP_CACHE_DURATION!)) {
      return cachedSources.sources
    }
  }

  const sources = await instance.get<ISourcesResponse>('/top-headlines/sources').then(r => r.data.sources)

  localStorage.setItem('sources', JSON.stringify({ 
    sources,
    timeStamp: new Date().getTime(), 
  }))

  return sources
}

const runFetch = async (q: Query, sources: ISource[], path?: string):Promise<INewsArticle[]> => {
  return instance.get<INewsResponse>(path || '/top-headlines', {
    params: { 
      category: q.category,
      // country: 'us',
      language: 'en',
      page: q.pageNumber, 
      pageSize: q.limit,
      q: q.q,
    }
  }).then(r => r.data.articles.map(a => {
    a.category = sources.find(s => s.id === a.source.id || s.name === a.source.name)?.category
    
    return a
  }))
}

export const getNewsByQuery = async (q: Query): Promise<INewsArticle[]> => {
  const sources = await populateSources()

  if (!q.q) {
    q.q='new'
  }

  return runFetch(q, sources, '/everything')
}

export const getNewsByCategory = async (q: Query) : Promise<INewsArticle[]> => {
  const sources = await populateSources()

  if (!q.category) {
    throw { 
      code: '600',
      msg: "category is not optional in this request",
    }
  }

  return runFetch(q, sources)
}