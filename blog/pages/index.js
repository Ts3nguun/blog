import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=paul_freeman")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <main>
      <div>
        {articles.map((item) => (
          <div key={item.id}>
            <Link href={item.url} target="_blank">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
