import Link from "next/link"


const navigation = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Blog",
        link: "/Blog"
    },
    {
        name: "Contact",
        link: "/Contact"
    },

]

export function Footer() {
    return (
        <div>
            <div className=" flex justify-between w-[1216px] mx-auto gap-24 mb-24">
                <div>
                    <p className="font-bold">About</p>
                    <p className="flex-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  </p>
                    <li>
                        <ul>Email : info@jstemplate.net</ul>
                        <ul>Phone : 880 123 456 789 </ul>
                    </li>
                </div>
                <div className=" justify-content gap-6 hidden">
                    {navigation.map((nav) => (
                        <Link key={nav.link} href={nav.link} className="background: rgba(20, 22, 36, 1); ">{nav.name}</Link>
                    ))}
                </div>
                <div></div>
            </div>
        </div> 
    )
}