import { useState } from "react";
import Search from "./components/Search";

const App = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    
  return (
      <>
          <main>
              <div className="pattern" />
              <div className="wrapper">
                  <header>
                      <img src="./hero.png" alt="movies logo"/>
                      <h1>Search <span className="text-gradient">MOVIES</span> </h1>
                      
                      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  </header>
                  <p></p>
              </div>
      </main>
    </>
  )
}

export default App;