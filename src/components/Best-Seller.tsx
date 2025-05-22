import Image from "next/image";
export default function BestSeller({ className }: { className: string }) {
    const list = [
        { id: 0, title: 'Fiddle-leaf flg', price: '110.99', img: 'fiddle-leaf.png' },
        { id: 1, title: 'Aloe vera', price: '110.99', img: 'aloe-vera.png' },
        { id: 2, title: 'Strelitzia nicolai', price: '110.99', img: 'Strelitzia-nicolai.png' },
        { id: 3, title: 'Ficus microcarpa', price: '110.99', img: 'Ficus-microcarpa.png' },
    ];
    return (
        <div className={`${className} flex h-full w-full flex-col gap-5 md:gap-10 font-[Aeonik]`}>
            <div className="text-xs md:text-2xl font-bold">OUR SHOP</div>
            <div className="flex items-center justify-between md:flex-col md:items-start md:gap-10">
                <div className="text-xl md:text-5xl font-medium font-[Lora]">
                    <p>Here are the beset seller</p>
                    <p>from our varieties</p>
                </div>
                <div>
                    <button className="button-1">See all</button>
                </div>
            </div>
            <div className="flex-1 overflow-x-auto overflow-y-hidden whitespace-nowrap text-center">
                {/* <div className="h-full "> */}
                {
                    list.map(item => {
                        return (
                            <div key={item.id} className="h-full inline-block w-[40vh] md:w-[40vh] not-first:ml-7">
                                <div className="h-full flex flex-col gap-5">
                                    <div className="flex-1 h-full w-auto relative">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/${item.img}`}
                                            alt="learn-more"
                                            fill
                                            className="object-cover absolute"
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs md:text-lg font-[580]">
                                        <div>{item.title}</div>
                                        <div>${item.price}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* </div> */}
            </div>
        </div>
    )
}