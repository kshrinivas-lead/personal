import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              TuvisMinds has transformed how I approach <Mark>challenges</Mark>. 
              Instead of seeing obstacles, I now see opportunities for growth and learning.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Chen"
              title="Innovation Lead at TechCorp"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The <Mark>growth mindset</Mark> principles have revolutionized 
              our team's approach to problem-solving and innovation.
            </p>

            <Avatar
              image={userTwoImg}
              name="Marcus Johnson"
              title="Startup Founder"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Working with TuvisMinds has shown me that <Mark>continuous learning</Mark> 
              is the key to sustainable success in any venture.
            </p>

            <Avatar
              image={userThreeImg}
              name="Priya Sharma"
              title="Educational Consultant"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-[#1a2842] bg-[#96d712] bg-opacity-20 rounded-md ring-[#96d712] ring-opacity-30 ring-4 dark:ring-[#2bb9c7] dark:bg-[#2bb9c7] dark:bg-opacity-20 dark:text-[#96d712]">
        {props.children}
      </mark>{" "}
    </>
  );
}
