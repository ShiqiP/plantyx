import Image from "next/image"
export default function Footer() {

    const navList = [
        { name: 'Help', id: 0, router: '' },
        { name: 'Contact Us', id: 1, router: '' },
        { name: 'Privacy & Terms', id: 2, router: '' },
    ]
    return (
        <>
            <footer className="bg-[#EDEDED] yPadding xPadding flex gap-8 justify-between items-center mx-auto flex-col md:flex-row">
                <div className="border-b-3 border-gray-900 pl-1 pb-1 md:hidden">
                    <input value="Your email" className="focus:outline-0"></input>
                    <button className="button-1">Subscribe</button>
                </div>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.svg`}
                    alt="logo"
                    width={123}
                    height={35}
                    className="object-contain"
                />
                <nav className="items-center gap-8 flex flex-col md:flex-row ">
                    {
                        navList.map((item) => {
                            return <a key={item.id}>{item.name}</a>
                        })
                    }
                </nav>
                <div className="w-full md:w-auto flex justify-around md:justify-between items-center md:gap-7 border-t-2 border-[#c7c7c7] py-8 md:py-0 md:border-0">
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/facebook.svg`}
                        alt="facebook"
                        width={12}
                        height={12}
                    />
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/twitter.svg`}
                        alt="twitter"
                        width={24}
                        height={24}
                    />
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/instagram.svg`}
                        alt="instagram"
                        width={24}
                        height={24}
                    />
                </div>
            </footer>
        </>
    )
}