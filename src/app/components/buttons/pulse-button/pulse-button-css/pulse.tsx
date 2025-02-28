'use client'

import React from 'react'
import { styled } from 'styled-components'

export function PulseButton() {
  return (
    <StyledButton>
      Pulse Button
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: #dc2626;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(220, 38, 38, 0.2);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
    }
  }
` 