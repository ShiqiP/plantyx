'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
export default function Step({ className }: { className: string }) {
    const list = [];
    const [step, setStep] = useState(1);

    const handleStep = (action: string) => {
        switch (action) {
            case 'add':
                if (step < list.length)
                    setStep(step + 1);
                break;
            case 'minus':
                if (step > 1)
                    setStep(step - 1);
                break;
            default: break;
        }
    }

    useEffect(() => {
        console.log(className)
    }, [className])


    return (
        <div className={`${className} w-full flex flex-col gap-8`}>
            <div className="relative w-full flex-1">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/step1.png`}
                    alt="step1"
                    className="object-cover aspect-1/1 object-[50%_0%] absolute "
                    fill
                />
            </div>
            <div className="flex justify-between items-center">
                <div className="font-semibold text-xs md:text-xl">STEP{step}</div>
                <div className="font-[lora] text-medium md:text-3xl font-medium">We put everything together</div>
                <div className="flex gap-3">
                    <Image
                        onClick={() => handleStep('add')}
                        className="cursor-pointer md:w-[50px] md:h-[50px]"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/left-arrow.svg`}
                        alt="left-arrow"
                        width={25}
                        height={25}
                    />
                    <Image
                        onClick={() => handleStep('minus')}
                        className="cursor-pointer md:w-[50px] md:h-[50px]"
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/right-arrow.svg`}
                        alt="right-arrow"
                        width={25}
                        height={25}
                    />
                </div>
            </div>
        </div>
    )
}