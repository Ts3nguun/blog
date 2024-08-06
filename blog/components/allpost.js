import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import relativeTime from 'dayjs/plugin/relativeTime';
import "@/components/dayjs-mn";

const pageSize = 6;
const tags = [
    { value: "", name: "Бүгд" },
    { value: "beginners", name: "Анхан шат" },
    { value: "javascript", name: "javascript" },
    { value: "webdev", name: "webdev" },
];

export default function AllPost() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [ended, setEnded] = useState(false);
    const [page, setPage] = useState(1);

    async function loadInitialArticles() {
        setLoading(true);
        const response = await fetch(`https://dev.to/api/articles?username=thomasbnt&tag=${selectedCategory}&per_page3`);
        const tagArticles = await response.json();
        setArticles(tagArticles);
        setPage(1);
        setLoading(false);
    }

    useEffect(() => {
        loadInitialArticles();
    }, [selectedCategory]);

    async function loadNextArticle() {
        setLoading(true);

        const nextPage = page + 1;
        const response = await fetch(`https://dev.to/api/articles?username=sh20raj&page=${page}&per_page=3&page=${nextPage}`);
        const newArticles = await response.json();
        setArticles([...articles, ...newArticles]);
        setPage(nextPage);

        setLoading(false);
    }

    return (
        <div className="container mx-auto ">
            <div className="flex gap-5 mb-5">
                {tags.map((tag) => (
                    <div key={tag.value} className={`cursor-pointer font-bold hover:text-orange-500  ${selectedCategory === tag.value ? "text-orange-600" : ""}`} onClick={() => setSelectedCategory(tag.value)}>
                        {tag.name}
                    </div>
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                {articles.map((item) => (
                    <div key={item.id} className="shadow-lg card bg-base-100">
                        <div className="card-body ">
                            <div className="badge badge-primary">{item.tag_list[0]}</div>

                            <Image src={item.social_image} width={500} height={250} className="aspect-video object-cover bg-slate-100" />
                            <Link href={item.path}>
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
                <div className="py-16 text-center" >
                    <button disabled={loading} className="btn btn-lg btn-accent" onClick={loadNextArticle}>
                        {loading && <span className="loading loading-spinner"></span>}
                        load more
                    </button>
                </div>
            )}

        </div >
    )
}