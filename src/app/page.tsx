import Image from "next/image";
import Step from "@/components/Step";
import BestSeller from "@/components/Best-Seller";
import Comment from '@/components/Comment'

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex flex-col h-[50vh] md:min-h-screen avoidHeader box-border">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col gap-6 md:gap-18 pt-10 md:py-28 lPadding ">
            <div className="font-[Belleza] text-2xl md:text-4xl lg:text-6xl xl:text-8xl">
              <p>Best house</p>
              <p>plants varieties.</p>
            </div>
            <div>
              <button className="button-1">Shop now</button>
            </div>
            <div className="font-semibold text-[11px] md:text-3xl">
              <p>Beautiful living greenery for</p>
              <p>homes and offices</p>
            </div>
            <div className="text-[9px] md:text-lg">
              {`We've been mentioned in the press`}
            </div>
            <div className="flex gap-5 md:gap-30 text-base md:text-5xl ">
              <div className="font-extrabold text-[#7f7f7f]">Bloomberg</div>
              <div className="font-[lora] font-semibold text-[#818181]">Forbes</div>
            </div>
          </div>
          <div className="relative w-6/9 md:w-5/11 h-full ml-1.5">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/banner.png`}
              alt="banner"
              fill
              className="object-cover object-[80%_40%] absolute -z-30"
            />
          </div>
        </div>
      </section>
      <section className="h-auto avoidHeader">
        {/* <div className="flex flex-col md:flex-row gap-5 md:gap-50 xPadding text-center md:text-left yPadding">
          <div className="font-light text-xs md:text-xl">
            <p>Each houseplant set is handled quickly and safely</p>
            <p>before being sent to your destination in specially</p>
            <p> designed insulated packaging.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-[lora] font-medium text-lg md:text-3xl">
              <p>Learn how ve take care of your plant</p>
              <p>at every stage of its journey from our</p>
              <p>greenhouse to your home.</p>
            </div>
          </div>
        </div> */}
        <div className="flex w-full pb-5 md:pb-0 font-medium md:text-2xl justify-center items-center gap-3 md:gap-8 cursor-pointer">
          <div>LEARN MORE</div>
          <Image
            className="md:w-10 md:h-10"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/learn-more.svg`}
            alt="learn-more"
            width={25}
            height={25}
          />
        </div>
      </section>
      <section className="h-[60vh] md:h-screen avoidHeader relative">
        <div className="absolute top-0 w-full h-[30vh] md:h-[50vh]"></div>
        <div className="absolute bottom-0 w-full h-[30vh] md:h-[50vh] bg-[#EDEDED]"></div>
        <Step className="xPadding avoidHeader2 bPadding absolute top-0 left-0 right-0 bottom-0" />
      </section>
      <section className="avoidHeader h-screen xPadding">
        <BestSeller className="yPadding" />
      </section>
      <section className="xPadding yPadding">
        <Comment />
      </section>
      <section className="basePadding flex h-[50vh] md:h-[90vh] gap-5 md:gap-10">
        <div className="relative flex-1 md:flex-1">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img10.png`}
            alt="learn-more"
            fill
            className="object-cover absolute"
          />
        </div>
        <div className="relative flex-1 md:flex-2">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img11.jpg`}
            alt="learn-more"
            fill
            className="object-cover absolute  md:object-[0%_60%]"
          />
        </div>
      </section>
      <section className="xPadding h-[50vh] md:h-screen relative">
        <div className="relative h-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img12.png`}
            alt="learn-more"
            className="object-cover absolute "
            fill
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 px-6 py-3 md:px-30 md:py-20 flex flex-col gap-2 md:gap-5">
            <div className="font-[Lora] font-semibold text-lg md:text-5xl">
              <p>Get inspired from</p>
              <p>our Instagram</p>
            </div>
            <div className="font-[Aeoik] text-gray-700  font-extralight text-xs md:text-base">
              <p>If you use the hashtag #bioomey on Instagram,</p>
              <p>well spotlight you.</p>
            </div>
            <div className="flex w-full font-semibold text-xs md:text-xl items-center gap-1 md:gap-8 cursor-pointer">
              <div>Check it out</div>
              <Image
                className="md:w-7 md:h-7"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/learn-more.svg`}
                alt="learn-more"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="basePadding">
        <div className="flex justify-center md:justify-between items-end">
          <div className="font-[Lora] font-medium text-lg md:text-5xl">
            <p>Stay update with special offers,</p>
            <p>plant-parenting tips, and more. </p>
          </div>
          <div className="border-b-3 border-gray-900 pl-1 pb-1 hidden md:block">
            <input value="Your email" className="focus:outline-0"></input>
            <button className="button-1">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
