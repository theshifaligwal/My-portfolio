import { useEffect, useState } from "react";
import "./portfolio.scss";
import { GitHub } from "@material-ui/icons";

export default function Portfolio() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/theshifaligwal/repos").then((response) => response.json());
    // Filter forked repos
    data.filter((repo) => !repo.fork);
    // Sort repos according to there update time
    data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    const newData = data.slice(0, 6);
    setData(newData);
    console.log(newData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Current Projects</h1>
      <div className="container">
        {data.map((repo) => (
          <div className="item-repos" key={repo.id}>
            <a href={repo.url} class="icon-github">
              <GitHub />
              <h3>{repo.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
