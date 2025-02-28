'use client'

import React from 'react'
import { styled } from 'styled-components'

export function GradientButton() {
  return (
    <StyledButton>
      Gradient Button
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: gradient 15s ease infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
` 