import Image from "next/image"
export default function Comment() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0">
            <div className="flex flex-col gap-3 font-[Aeonik] text-center md:text-start">
                <div className="font-semibold tracking-[0.1rem]">REVIEWS</div>
                <div className="font-light text-gray-500 text-[10px] md:text-sm"><p>Shop with confidence by reading customer</p>
                    <p>reviews given by individuals who have used</p>
                    <p>Bioomey. Excelient quality and streamlined</p>
                    <p>service are both offered here.</p>
                </div>
                <div className="flex gap-4 items-center justify-center md:justify-start">
                    <div className="flex gap-2">
                        {[0, 1, 2, 3, 4].map(item =>
                            <Image
                                key={item}
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/Star.svg`}
                                alt="Star"
                                width={20}
                                height={20}
                            />
                        )}
                    </div>
                    <div className="font-semibold text-sm">5/5</div>
                </div>
                <div className="text-xs hidden md:block">2,479 reviews</div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="min-w-[30vw] md:max-w-[40vw] font-semibold font-[Lora] text-lg md:text-3xl text-center md:text-start">
                    We adore all our friends atBloomey,
                    especially the beauties who have come
                    to live with us! Great advice when
                    needed, beautifully and safely packaged.
                    {"Highly recommend, it's just the best"}
                    place for healthy plants and great value!
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-[Lora] font-medium text-lg">Pamela S.</div>
                        <div className="text-sm">Lake Forest, CA</div>
                    </div>
                    <div className="md:hidden">
                        <div className="flex gap-3">
                            <Image
                                className="cursor-pointer"
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/left-arrow.svg`}
                                alt="left-arrow"
                                width={28}
                                height={28}
                            />
                            <Image
                                className="cursor-pointer"
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/right-arrow.svg`}
                                alt="right-arrow"
                                width={28}
                                height={28}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="flex gap-3">
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/left-arrow.svg`}
                        alt="left-arrow"
                        width={30}
                        height={30}
                    />
                    <Image
                        className="cursor-pointer"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/right-arrow.svg`}
                        alt="right-arrow"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
        </div>
    )
}