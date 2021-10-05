import HomePagePrompt from 'modules/homepagePrompt/hpPrompt'
import SearchBar from 'modules/searchbar/searchbar'
import React from 'react'

const Homepage:React.FC = () => {
  return (
    <div>
      <HomePagePrompt />
      <SearchBar />
    </div>
  )
}

export default Homepage