import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react"




export const Hero = () => {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch("https://dev.to/api/articles?username=thomasbnt")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setArticle(data);
            });
    }, [])

    return (
        <div id="Home">
            <div className="pb-24 hidden md:block max-w-[1216px] mx-auto">
                <div className="carousel carousel-center w-full aspect-[4/2]">
                    {
                        article.map((item, index) => (
                            <div key={item.id} id={`slide${index}`} className="carousel-item relative w-full">
                                <Image width={2000} height={2000}
                                    src={item.cover_image || item.social_image}
                                    className="w-full rounded-xl"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href={`#slide${index - 1}`} className="btn btn-circle">❮</a>
                                    <a href={`#slide${index + 1}`} className="btn btn-circle">❯</a>
                                </div>
                                <div className="absolute p-10 left-2 bottom-2 bg-slate-300 rounded-xl max-w-[50%] w-full">
                                    <div className="">{item.tag_list[0]}</div>
                                    <div className="font-bold mb-3">{item.description}</div>
                                    <div className="text-gray-500 ">{dayjs(item.published_at).format("YYYY/MM/d")}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
