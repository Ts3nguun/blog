import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import relativeTime from 'dayjs/plugin/relativeTime';
import "@/components/dayjs-mn";

dayjs.extend(relativeTime);

const pageSize = 6;

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadMore();
  }, []);

  function loadMore() {
    setLoading(true);
    

    fetch(`https://dev.to/api/articles?username=paul_freeman&${page}&per_page=${pageSize}`)
      .then((response) => {
        return response.json();
      })
      .then((newArticles) => {
        const updatedArticles = articles.concat(newArticles);
        setArticles(updatedArticles);
        setPage(page + 1);
        if (newArticles.length < pageSize) {
          setEnded(true);
        }
        setLoading(false);
      });
  }

  return (
    <div className="container mx-auto ">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {articles.map((item) => (
          <div key={item.id} className="shadow-lg card bg-base-100">
            <div className="card-body ">
              <div className="badge badge-primary">{item.tag_list[0]}</div>

              <Image src={item.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-100"/>
              <Link href={item.url} target="_blank">
                {item.title}
              </Link>
              <div className="flex items-center gap-2">
                <Image src={item.user.profile_image_90} width={50} height={50} />
                <div>{item.user.name}</div>
                <div>{dayjs(item.published_at).locale("mn").fromNow()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!ended && (
        <div className="py-16 text-center" onClick={loadMore}>
          <button disabled={loading} className="btn btn-lg btn-accent">
            {loading && <span className="loading loading-spinner"></span>}
            load more
          </button>
        </div>
      )}

    </div >
  );
}