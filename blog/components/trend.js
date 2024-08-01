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
        <div className="container mx-auto flex flex-col items-center">
            <div className="carousel rounded-box w-96">
                {article.map((items) => (
                    <div key={items.id} className="carousel-item w-full relative">
                        <Link href={items.path}>
                            <Image src={items.social_image} width={200} height={200} className="h-full size-96" />
                        </Link>

                        <div className="absolute bottom-10 left-10 z-50">
                            <p className="badge badge-primary">{items.tag_list[0]}</p>
                            <div className="text-white rounded-lg">{items.descriptiond}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
