import { INewsArticle } from 'constants/newsItem'
import { createContext, useContext } from 'react'

export interface IBookmarkContext {
  cache: INewsArticle[],
  toggleCacheElement: (arg:INewsArticle) => void
}

const defaultValue: IBookmarkContext = {
  cache: [],
  toggleCacheElement: () => {throw "Not implemented!"}
}

export const Context = createContext(defaultValue)

export const useBookmarks = ():IBookmarkContext => useContext(Context)
