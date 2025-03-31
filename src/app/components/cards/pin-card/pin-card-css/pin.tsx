"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0,
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 4,
            }}
            className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          />
        </div>

        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
        <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
        <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
        <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
      </div>
    </motion.div>
  );
};

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="Virat Kohli" href="#">
        <div className="flex flex-col p-5 tracking-tight text-slate-100/50 w-[24rem] h-[32rem] bg-gradient-to-b from-blue-900/50 to-blue-950/80 backdrop-blur-sm border border-blue-700/30 rounded-2xl">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <div className="size-2 rounded-full bg-green-500 animate-pulse" />
            <div className="text-[11px] text-blue-300 font-medium">Live Stats</div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="text-xl font-bold text-white">
              King Kohli
            </div>
            
            {/* Image with Points */}
            <div className="relative h-[280px] w-full rounded-xl overflow-hidden">
              <img 
                src="/images/virat.jpg"
                alt="Virat Kohli"
                className="absolute inset-0 w-full h-full object-cover object-[center_35%] scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/30 to-blue-900/10" />
              
              {/* Point 1 - Batting */}
              <div className="absolute top-[25%] left-[20%] group">
                <div className="h-3 w-3 rounded-full bg-yellow-400 animate-pulse ring-1 ring-yellow-400/30 ring-offset-1 ring-offset-black/30" />
                <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-900/90 text-yellow-200 text-[10px] px-2 py-0.5 rounded-lg whitespace-nowrap shadow-lg">
                  Batting Technique
                </div>
              </div>
              
              {/* Point 2 - Fitness */}
              <div className="absolute top-[45%] left-[75%] group">
                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse ring-1 ring-emerald-400/30 ring-offset-1 ring-offset-black/30" />
                <div className="absolute right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-900/90 text-emerald-200 text-[10px] px-2 py-0.5 rounded-lg whitespace-nowrap shadow-lg">
                  Elite Fitness
                </div>
              </div>
              
              {/* Point 3 - Celebration */}
              <div className="absolute top-[65%] left-[35%] group">
                <div className="h-3 w-3 rounded-full bg-red-400 animate-pulse ring-1 ring-red-400/30 ring-offset-1 ring-offset-black/30" />
                <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity bg-red-900/90 text-red-200 text-[10px] px-2 py-0.5 rounded-lg whitespace-nowrap shadow-lg">
                  Signature Celebration
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-yellow-400">76</div>
                <div className="text-[11px] text-blue-300 font-medium">International Centuries</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-3xl font-bold text-green-400">25K+</div>
                <div className="text-[11px] text-blue-300 font-medium">International Runs</div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">50+</div>
                <div className="text-[9px] text-blue-300">Average</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-pink-400">183</div>
                <div className="text-[9px] text-blue-300">Highest Score</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">254</div>
                <div className="text-[9px] text-blue-300">Matches</div>
              </div>
            </div>

            {/* Footer */}
            
          </div>
        </div>
      </PinContainer>
    </div>
  );
} 