'use client'

import React from 'react'
import { styled } from 'styled-components'
import { useTheme } from '@/context/ThemeContext'

export function PulseButton() {
  const { theme } = useTheme()
  
  return (
    <StyledButton $isDark={theme === 'dark'}>
      Pulse Button
    </StyledButton>
  )
}

const StyledButton = styled.button<{ $isDark: boolean }>`
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.$isDark ? '#000000' : 'white'};
  background: ${props => props.$isDark ? 'white' : '#000000'};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.$isDark ? 
      '0 10px 20px rgba(255, 255, 255, 0.2)' : 
      '0 10px 20px rgba(0, 0, 0, 0.2)'};
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${props => props.$isDark ? 
        'rgba(255, 255, 255, 0.4)' : 
        'rgba(0, 0, 0, 0.4)'};
    }
    70% {
      box-shadow: 0 0 0 10px ${props => props.$isDark ? 
        'rgba(255, 255, 255, 0)' : 
        'rgba(0, 0, 0, 0)'};
    }
    100% {
      box-shadow: 0 0 0 0 ${props => props.$isDark ? 
        'rgba(255, 255, 255, 0)' : 
        'rgba(0, 0, 0, 0)'};
    }
  }
` 