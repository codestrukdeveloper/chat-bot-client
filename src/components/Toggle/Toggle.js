import styled from "styled-components";

const Toggle = styled.div`
  width: 72px;
  height: 37px;
  border-radius: 22px;
  background: #c8cfd7;
  position: relative;
  cursor: pointer;

  ::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    transition: 0.5s;
  }

  ${(props) =>
    props.active === true &&
    `
    & {
      background: #32C279;
      
      ::after {
        left: unset;
        right: 6px;

      }

      @media screen and (max-width: 996px) {
        ::after {
          left: unset !important;
          right: 3.3px;
        }
      }
    }
  `}

  @media screen and (max-width: 996px) {
    & {
      width: 40px;
      height: 21px;
      border-radius: 22px;

      ::after {
        top: 3.41px;
        left: 3.34px;
        bottom: 3.41px;
        width: 15px;
        height: 15px;
      }
    }
  }
`;

export default Toggle;
