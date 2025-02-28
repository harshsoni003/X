'use client'

import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'

interface CodeBlockProps {
  code: string
  copied: boolean
  setCopied: (value: boolean) => void
  expanded: boolean
  setExpanded: (value: boolean) => void
}

// Rest of your code remains the same... 