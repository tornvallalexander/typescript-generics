type SearchInputProps = {
  setSearchQuery: (search: string) => void
}

const SearchInput = ({ setSearchQuery }: SearchInputProps) => {
  return (
    <div>
      <label htmlFor="search">
        Search...
      </label>
      <input
        type="search"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export { SearchInput }