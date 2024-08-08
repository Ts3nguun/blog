import Image from "next/image";

export function Trend() {
    return (
        <div className="card bg-base-100 image-full w-96 shadow-xl">
            <Image width={500} height={500}
                src="   "
            />
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p></p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
}