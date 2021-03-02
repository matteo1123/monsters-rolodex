import React from 'react'

import './search-box.css'

export const SearchBox = ({ placeholder, handleChange  }) => (
    <input 
    className="search"
    onChange={handleChange} 
    type="search" 
    placeholder={placeholder}
  />
)