import { Footer } from "@/components/footer";
import { Header } from "@/components/header";


const dataText = [
    {
        title: "Address",
        text: "1328 Oak Ridge Drive, Saint Louis, Missouri"
    },
    {
        title: "Blog",
        text: "313-332-8662 info@email.com"
    },

]
export default function Contact() {
    return (
        <div className="bg-white">
            <Header />
            <div className="w-[643px] mx-auto h-screen gap-10 flex flex-col">
                <div className="mx-auto max-w-[624px mb-5">
                    <p className="font-bold text-4xl mb-3">Contact Us</p>
                    <p className="text-slate-400 w-[624px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="flex justify-between mb-4">
                    {dataText.map((data) => (
                        <div key={data.id} className="w-72 h-32 p-4 border-2 border-solid border-slate-100 rounded-xl">
                            <p>{data.title}</p>
                            <p>{data.text}</p>
                        </div>
                    ))}
                </div>
                <div className=" flex flex-col w-[643px] bg-slate-100 px-9 py-9 gap-5">
                    <p className="text-lg font-bold">Leave a message</p>
                    <div className="flex justify-between">
                        <input type="text" placeholder="Your name" className="input input-bordered w-56" />
                        <input type="text" placeholder="Your Email" className="input input-bordered w-56"/>
                    </div>
                    <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-2xl" />
                    <input type="text" placeholder="Write a message" className="input input-bordered w-full max-w-2xl h-40" />
                    <button className="btn btn-primary w-28"> </button>
                </div>
                
            </div>
            <Footer />
        </div >
    )
}