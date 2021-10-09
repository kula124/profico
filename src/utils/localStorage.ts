import { INewsArticle } from "constants/newsItem"

/**
 * This file is dead code
 * I'm leaving it here in case I reconsider using local storage for bookmark persistance
 */

export const getSavedArticles = ():INewsArticle[] | null => {
  const articles = localStorage.getItem('saved')

  if (articles){
    return JSON.parse(articles)
  }
  
  return null
}

export const saveArticle = (article: INewsArticle):void=> {
  const articles = getSavedArticles()

  const updatedArticle:INewsArticle = { ...article, bookmarked: true }
  
  if (articles) {
    articles.push(article)
    localStorage.setItem('saved', JSON.stringify(updatedArticle))
  }

  localStorage.setItem('saved', JSON.stringify([updatedArticle]))
}

export const removeSavedArticle = (article:INewsArticle):void => {
  const articles = getSavedArticles()

  if (articles) {
    const newArticles = articles.filter(x => x.title != article.title)

    localStorage.setItem('saved', JSON.stringify(newArticles))
  }
}