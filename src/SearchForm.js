import React,{useState} from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext()
  const [darkMode,setDarkMode]=useState(false)

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <div className="nav-center">
      <h2>Search Developer news</h2>
      </div>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm