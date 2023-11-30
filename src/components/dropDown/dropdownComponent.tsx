// DropdownComponent.tsx

import React, { useState } from 'react';
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import './dropDown.css'; // Import your CSS file

interface DropdownProps {
  options: { label: string; value: string | number }[];
  onSelect: (selectedValue: string | number) => void;
  label: string;
}

export const DropdownComponent: React.FC<DropdownProps> = ({ options, onSelect, label }) => {
  const [selectedValue, setSelectedValue] = useState<string | number | ''>('');

  const handleSelection = (event: SelectChangeEvent<typeof selectedValue>) => {
    const value = event.target.value as string | number;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={selectedValue}
        onChange={handleSelection}
        className="underline-dropdown" // Add class name for styling
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
