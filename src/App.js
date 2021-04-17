import { useState } from "react";
import "./style.scss";
import apiList from "./api.json";
import Search from "./components/Search/Search";
import ApiItem from "./components/ApiItem/ApiItem";

function App() {
  const [search, setSearch] = useState("");
  const [apis, setApis] = useState(apiList);

  const toggleBookmark = (id) => {
    setApis(
      apis.map((api) => {
        if (api.id === id) {
          api.bookmark = !api.bookmark;
        }
        return api;
      })
    );
  };

  return (
    <div className="container">
      <h1>
        A collective list of free APIs for use in software and web development.
      </h1>
      <Search placeholder="Arama" search={search} setSearch={setSearch} />
      <div className="container">
        <h2>Featured APIs of this week</h2>
        <div className="api-list">
          {apis
            .filter((api) =>
              api.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <ApiItem key={item.id} item={item} toggleBookmark={toggleBookmark} />
            ))}
        </div>
      </div>
      <div className="container">
        <h4>Your Bookmarks</h4>
        <div className="api-list">
          {apis
            .filter((api) => api.bookmark === true)
            .map((item) => (
              <ApiItem key={item.id} item={item} toggleBookmark={toggleBookmark}  />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
