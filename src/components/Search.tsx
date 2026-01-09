interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
    
    
    return (
        <>
            <div className="search">
                <img src="search.svg" alt="search" />
                
                <input
                    type="text"
                    placeholder="Search through thousands of Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </>
    )
};

export default Search;