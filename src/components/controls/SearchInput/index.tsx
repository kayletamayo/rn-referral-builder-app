import React, { useState, useEffect } from 'react';
import { Searchbar, useTheme } from 'react-native-paper';
import styles from './styles';

interface SearchInputProps {
  onSearch: (data: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, placeholder = "Search"}) => {
  const [search, setSearch] = useState<string>('');
  const theme = useTheme();

  useEffect(() => {
    const searchList = setTimeout(() => {
      onSearch(search);
    }, 2000);

    return () => clearTimeout(searchList);
  }, [search])

  return (
    <Searchbar
      autoCorrect={false}
      placeholder={placeholder}
      onChangeText={(value) => setSearch(value)}
      value={search}
      mode="bar"
      style={styles.searchInput}
      showDivider={false}
      theme={{
        colors: {
          elevation: {
            level3: theme.colors.surface,
          },
        },
        roundness: 1,
      }}
    />
  );
}

export default SearchInput;