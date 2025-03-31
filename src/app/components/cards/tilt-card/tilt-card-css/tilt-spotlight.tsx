"use client";

import { Tilt } from "./tilt";
import { Spotlight } from "./spotlight";
import Image from "next/image";

function TiltSpotlight() {
  return (
    <div className='w-[320px] mx-auto'>
      <Tilt
        rotationFactor={6}
        isRevese
        style={{
          transformOrigin: 'center center',
        }}
        springOptions={{
          stiffness: 26.7,
          damping: 4.1,
          mass: 0.2,
        }}
        className='group relative rounded-xl bg-zinc-950 p-4'
      >
        <Spotlight
          className='z-10 from-white/20 via-white/10 to-transparent blur-2xl'
          size={300}
          springOptions={{
            stiffness: 26.7,
            damping: 4.1,
            mass: 0.2,
          }}
        />
        <div className="relative h-[420px] w-full overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=1964&auto=format&fit=crop"
            alt="Northern Lights in the night sky"
            fill
            priority
            className="object-cover transition duration-700 
              will-change-transform group-hover:scale-105
              grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className='font-mono text-2xl font-medium text-white mb-2'>
              Aurora
              <br />
              Borealis
            </h3>
            <p className='text-sm text-zinc-300'>
              Nature's celestial light show in the Arctic night sky
            </p>
          </div>
        </div>
        <div className="absolute -bottom-2 -left-2 -right-2 -top-2 rounded-[20px] bg-gradient-to-t from-zinc-900 to-zinc-800 shadow-lg -z-10" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-zinc-800/30 opacity-0 transition duration-500 group-hover:opacity-100" />
      </Tilt>
      <div className='flex flex-col space-y-1 pb-0 pt-4 text-center'>
        <div className="flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <h3 className='font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400'>
            Currently Visible
          </h3>
        </div>
        <p className='text-sm text-black dark:text-white'>
          Best viewing time: 10 PM - 2 AM
        </p>
      </div>
    </div>
  );
}

export { TiltSpotlight }; 