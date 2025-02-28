'use client'

import React from 'react'
import { styled } from 'styled-components'

export function GlowButton() {
  return (
    <StyledButton>
      Glow Button
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #2563eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: #2563eb;
    filter: blur(15px);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    
    &:before {
      opacity: 0.5;
    }
  }
` 