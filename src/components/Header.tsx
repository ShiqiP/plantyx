import Image from "next/image"
export default function Header() {
    const navList = [
        { name: 'Plants', id: 0, router: '' },
        { name: 'For offices', id: 1, router: '' },
        { name: 'Plants care', id: 2, router: '' },
        { name: 'About', id: 3, router: '' },
    ]
    return (
        <>
            <header className="fixed w-full box-border top-0 bg-white flex headerPadding mx-auto justify-between items-center z-50">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.svg`}
                    alt="logo"
                    width={123}
                    height={35}
                    className="object-contain"
                />
                <nav className="items-center gap-8 hidden md:flex">
                    {
                        navList.map((item) => {
                            return <a key={item.id}>{item.name}</a>
                        })
                    }
                </nav>
                <div className="flex justify-between items-center gap-7">
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/search.svg`}
                        alt="search"
                        width={22}
                        height={22}
                    />
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/avatar.svg`}
                        alt="avatar"
                        width={24}
                        height={24}
                    />
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/cart.svg`}
                        alt="cart"
                        width={24}
                        height={24}
                    />
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/menu.svg`}
                        alt="menu"
                        width={24}
                        height={24}
                        className="object-contain flex md:hidden"
                    />
                </div>
            </header>
        </>
    )
}