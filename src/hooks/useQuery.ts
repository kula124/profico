import { createContext, useContext } from 'react'

export interface IQueryContext {
  query: string,
  setQuery: (arg:string) => void
}

export const QueryContext = createContext<IQueryContext>({ query: '', setQuery: () => {throw 'not implemented'} })

export const useQuery = ():IQueryContext => useContext(QueryContext)