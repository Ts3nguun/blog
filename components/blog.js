import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import relativeTime from 'dayjs/plugin/relativeTime';
import "@/components/dayjs-mn";


dayjs.extend(relativeTime);

const pageSize = 6;
const tags = [
  { value: "All", name: "Бүгд" },
  { value: "beginners", name: "Анхан шат" },
  { value: "javascript", name: "javascript" },
  { value: "webdev", name: "webdev" },
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadMore();
  }, [selectedCategory]);

  async function loadMore() {
    setLoading(true);

    const response = await fetch(`https://dev.to/api/articles?username=sh20raj&page=${page}&per_page=${pageSize}`);
    const newArticles = await response.json();

    const updatedArticles = articles.concat(newArticles);
    setArticles(updatedArticles);
    setPage(page + 1);
    if (newArticles.length < pageSize) {
      setEnded(true);
    }
    setLoading(false);
  }

  return (
    <div className="container mx-auto "id="Blog">
      <p className="font-bold">All Blog Post</p>
      <div className="flex gap-5 mb-5">
        {tags.map((tag) => (
          <div key={tags.value} className={`cursor-pointer font-bold hover:text-orange-500 ${selectedCategory === tag.value ? "text-orange-600" : ""}`}>
            {tag.name}
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {articles.map((article) => (
          <div key={article.id} className="shadow-lg card bg-base-100">
            <div className="card-body ">
              <Image src={article.social_image} width={500} height={250} className="aspect-video object-cover bg-slate-100" />
              <div className="badge text-blue-600">{article.tag_list[0]}</div>
              <Link href={article.path}>
                {article.title}
              </Link>
              <div className="flex items-center ">
                <div className="text-gray-400 ">{dayjs(article.published_at).locale("mn").fromNow()}</div>
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