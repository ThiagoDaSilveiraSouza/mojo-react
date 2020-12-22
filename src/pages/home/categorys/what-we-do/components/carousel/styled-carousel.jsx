import styled from 'styled-components'

export const StyledCarouse = styled.section`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  .carousel-arrow {
    position: absolute;
    top: calc(50% - 50px);
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.8;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    :hover {
      transform: scale(1.1);
      opacity: 1;
    }
    :nth-child(2) {
      left: 5px;
    }
    :last-child {
      right: 5px;
    }
    @media (max-width: 500px) {
      width: 60px;
      height: 60px;
      top: calc(50% - 60px);
    }
  }
  .disable-button {
    opacity: 0.2;
    :hover {
      transform: none;
      opacity: 0.2;
      cursor: not-allowed;
    }
  }
`

export const StyledCarouselWrapper = styled.div`
  width: 80%;
  max-width: 90vw;
  min-width: 260px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  display: flex;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
