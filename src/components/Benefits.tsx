import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#96d712] via-[#2bb9c7] to-[#1a2842] opacity-15 rounded-2xl"></div>
            <Image
              src={data.image}
              width={521}
              height={521}
              alt="Growth Mindset Benefits"
              className={"object-cover rounded-2xl shadow-xl"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-[#96d712] to-[#2bb9c7] rounded-full opacity-70 blur-lg"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#2bb9c7] to-[#1a2842] rounded-full opacity-50 blur-md"></div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-gradient-to-br from-[#2bb9c7] to-[#1a2842] rounded-md w-11 h-11 shadow-lg">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-white",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  );
}
