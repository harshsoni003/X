'use client'

import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn(
      "relative p-[4px] group transition-all duration-300",
      "hover:shadow-[0_0_2rem_-0.5rem_#ffc414,0_0_4rem_-1rem_#1ca0fb]",
      containerClassName
    )}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export function Stack() {
  return (
    <div className="relative">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div 
            className="relative w-full h-[180px] sm:h-[220px] cursor-pointer overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.25 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/images/shoes.webp"
              alt="Air Jordan Shoes"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black dark:text-white 
              transition-all duration-300 hover:cursor-pointer
              hover:text-shadow-[0_0_1rem_#ffc414]
              dark:hover:text-shadow-[0_0_1rem_#1ca0fb]"
            >
              Air Jordan 4 Retro Reimagined
            </h3>
            
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">In Stock</span>
              <span className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Release: Feb 17, 2024</span>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-[90%]">
            Enter raffles and secure your pair of the upcoming Air Jordan 4 Retro Reimagined Bred release.
          </p>

          <div className="flex gap-3 w-full pt-2">
            <button 
              className="flex-1 rounded-xl px-4 py-2.5 text-white bg-black text-sm font-medium 
                dark:bg-zinc-800 flex items-center justify-center group 
                transition-all duration-300
                hover:shadow-[0_0_1rem_-0.2rem_#ffc414]
                hover:bg-gradient-to-r hover:from-black hover:to-zinc-800
                dark:hover:shadow-[0_0_1rem_-0.2rem_#1ca0fb]"
            >
              <span>Buy now</span>
              <span className="ml-2 bg-zinc-700 rounded-lg px-2 py-0.5 text-xs 
                group-hover:bg-zinc-600 group-hover:shadow-inner transition-all">
                $100
              </span>
            </button>
            <button 
              className="flex-1 rounded-xl px-4 py-2.5 text-black dark:text-white 
                border border-neutral-200 dark:border-neutral-700 text-sm font-medium 
                transition-all duration-300
                hover:border-transparent
                hover:shadow-[0_0_1rem_-0.2rem_#ffc414]
                hover:bg-gradient-to-r hover:from-white hover:to-neutral-50
                dark:hover:shadow-[0_0_1rem_-0.2rem_#1ca0fb]
                dark:hover:bg-gradient-to-r dark:hover:from-zinc-800 dark:hover:to-zinc-900"
            >
              Learn More
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  )
} 