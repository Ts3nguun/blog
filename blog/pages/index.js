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
    <div className="container mx-auto ">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {articles.map((item) => (
          <div key={item.id} className="shadow-lg card bg-base-100 mx-auto  ">
            <div className="card-body">
              <div className="badge badge-primary">primary</div>
              <img src={item.social_image} width={500} height={500} />
              <Link href={item.url} target="_blank">
                {item.title}
              </Link>
              <div className="flex gap-4">
                <img src={item.user.profile_image_90} width={50} height={50} />
                <div>{item.user.name}</div>
                <div>{item.published_at}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}
