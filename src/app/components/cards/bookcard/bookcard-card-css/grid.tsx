'use client'

import React from 'react'
import { styled } from 'styled-components'
import Image from 'next/image'

export function Grid() {
  return (
    <StyledWrapper>
      <div className="grid-container">
        <div className="book">
          <Image
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Restaurant Menu Inside"
            fill
            className="book-image"
            objectFit="cover"
          />
          <div className="cover">
            <Image
              src="https://images.unsplash.com/photo-1668703757367-818c9558978b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurant Menu Cover"
              fill
              className="cover-image"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .book {
    position: relative;
    border-radius: 10px;
    width: 280px;
    height: 320px;
    background-color: whitesmoke;
    box-shadow: 1px 1px 12px #000;
    transform: preserve-3d;
    perspective: 2000px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    overflow: hidden;

    @media (max-width: 640px) {
      width: 220px;
      height: 280px;
    }
  }

  .book-image, .cover-image {
    object-fit: cover;
    border-radius: 10px;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
    transform-origin: 0;
    box-shadow: 1px 1px 12px #000;
    overflow: hidden;
  }

  .book:hover .cover {
    transition: all 0.5s;
    transform: rotatey(-80deg);
  }

  p {
    font-size: 20px;
    font-weight: bolder;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
` 