import React, { useState } from 'react';
import { Input, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './searchComponent.css'; // Import your CSS file

interface SearchProps {
  onSearch: (term: string) => void;
}

export const SearchComponent: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter your search term"
        disableUnderline
        className="searchInput" // Add class name for styling
        startAdornment={
          <InputAdornment position="start">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};
