import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



export function Trend() {
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
        <div className="max-w-[1216px] w-full mx-auto">
            <div className="hidden md:flex justify-between mb-28 mx-auto carousel carousel-center"> 
                {article.map(
                    (item, index) =>
                        index < 4 && (
                            <div key={item.id}
                                className="max-w-[293px] w-full carousel-item relative group hover:cursor-pointer hover:scale-105 ">
                                <Image
                                    className="w-full rounded-xl"
                                    src={item.user.profile_image}
                                    width={100}
                                    height={100}
                                />
                                <div className="bg-[#141624] w-full absolute inset-0 group-hover:opacity-0 opacity-50 hover:opacity-0 rounded-xl"></div>
                                <div className="p-7 absolute w-full bottom-0 left-0">
                                    <div className="badge badge-primary mb-4">
                                        {item.tag_list[0]}
                                    </div>
                                    <div className="text-[#ffffff] drop-shadow-xl">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                )}
            </div>




            <div className="md:hidden mx-auto carousel carousel-vertical rounded-box h-96">
                <div className="carousel-item h-full">
                    {article.map(
                        (item, index) =>
                            index < 4 && (
                                <div
                                    key={item.id}
                                    className="carousel-item h-full max-w-[80%] w-full mx-auto">
                                    <Image
                                        className="w-full rounded-xl"
                                        src={item.user.profile_image}
                                        width={100}
                                        height={100}
                                    />

                                </div>
                            )
                    )}˝
                </div>
            </div>

        </div>
    )
}
