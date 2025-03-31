"use client";

import { cn } from "@/lib/utils"
import { StarBorder } from "@/app/components/buttons/star-border/star-border"

export function StarBorderDemo() {
  return (
    <div className="space-y-8">
      <StarBorder>
        Theme-aware Border
      </StarBorder>
    </div>
  )
} 