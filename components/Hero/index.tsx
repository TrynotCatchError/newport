"use client";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";



const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-5xl font-extrabold text-black dark:text-primary">
                 Web Developer
              </h4>
              <h1 className="mb-5 pr-16 text-6xl font-bold text-black dark:text-white xl:text-hero ">
                Hello I'am Karin Sookkalya
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                 
                </span>
              </h1>
              <p  >
              Front-End & back-End Developer
              </p>
               <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start text-3xl "
        >
        
           
            <TypeAnimation
              sequence={[
                
                "Web Developer",
                1500,
                "Front-End",
                1500,
                "Back-End",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
      </div>

              <div className="mt-10">
                
                  <div className="flex flex-wrap gap-5">
                      <Link href='/#support'>
                        <button
                            aria-label="get started button"
                            className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                          >
                            Hire Me
                          </button>
                      </Link>    
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Dowload CV
                    </button>
                  </div>
                

                <p className="mt-5 text-black dark:text-white">
                  
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[100/100] w-full">
                  <Image
                    className="rounded-full shadow-solid-l dark:hidden"
                    src="/images/hero/hero-image.png (1).png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="rounded-full hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-image.png (1).png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
