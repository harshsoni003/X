'use client'

import React from 'react'
import { styled } from 'styled-components'

export function ShineButton() {
  return (
    <StyledButton>
      Shine Button
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 0.8em 2em;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(to right, #4f46e5, #7c3aed);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &:before {
      left: 100%;
    }
  }
` 