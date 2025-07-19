import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gradient-to-br from-[#d97706] to-[#78716c] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-2xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Let's Build the Future Together
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Ready to transform your business with AI-powered solutions and strategic innovation?
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="mailto:kshrinivas.lead@gmail.com"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#d97706] bg-white rounded-md px-7 lg:px-10 lg:py-5 hover:bg-gray-100 hover:text-[#78716c] transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Container>
  );
};
