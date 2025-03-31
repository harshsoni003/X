import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(45, 100%, 50%)"

  return (
    <Component 
      className={cn(
        "relative inline-block py-[5px] px-[5px] overflow-hidden rounded-[20px]",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[80%] bottom-[-20px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-100 dark:opacity-100"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[80%] top-[-20px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-100 dark:opacity-100"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 border-2 text-center text-base py-4 px-6 rounded-[20px]",
        "bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 text-white",
        "dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-100 dark:border-gray-600 dark:text-gray-900",
        "hover:from-gray-700 hover:to-gray-800",
        "dark:hover:from-white dark:hover:to-gray-50",
        "transition-colors duration-300"
      )}>
        {children}
      </div>
    </Component>
  )
} 