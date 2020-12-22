import styled from 'styled-components'

export const StyledCarouselCard = styled.div`
  width: 280px;
  min-width: 260px;
  max-width: 80vw;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;
  height: fit-content;
  scroll-snap-align: start;
  flex: none;
  transition: 0.3s;
  :hover {
    div:first-child div {
      background: rgb(0, 0, 0, 0.3);
    }
    div:first-child span {
      transform: translateY(0);
      opacity: 1;
    }
  }
  div:first-child {
    background: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 210px;
    position: relative;
    transition: filter 0.2s;
    overflow: hidden;
    div {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.4s;
    }
    span {
      position: absolute;
      color: black;
      background: white;
      padding: 0 20px;
      border-radius: 50px;
      z-index: 10;
      transform: translateY(150px);
      transition: 0.4s;
      opacity: 0;
    }
  }
  div:last-child {
    text-align: center;
    background: white;
    color: black;
    padding: 15px 20px;
    height: 123px;
    box-sizing: border-box;
    h5 {
      margin: 0;
      font-size: 14px;
      text-transform: uppercase;
      color: black;
      font-weight: bolder;
    }
    p {
      font-size: 14px;
      color: #474747;
    }
  }
`
