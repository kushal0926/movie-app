interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

// instead of using props using the dstructuring 
const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {    
    
    return (
        <>
            <div className="search">
                <div>
                    <img src="search.svg" alt="search" />
                    
                    <input
                        type="text"
                        placeholder="Search through thousands of Movies"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />    
                </div>
                
            </div>
        </>
    )
};

export default Search;