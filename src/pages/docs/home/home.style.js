import { Button } from "@/components/Button/Button";
import styled from "styled-components";

export const DocsContainer = styled.div`
  padding-bottom: 39px;

  .browse {
    margin: 31px auto 30px auto;
    line-height: 36px;
    width: max-content;
  }

  @media screen and (max-width: 996px) {
    & {
      .browse {
        margin: 66px auto 28px auto;
      }
    }
  }
`;

export const LiveChat = styled.div`
  position: fixed;
  bottom: 46px;
  right: 45px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  width: 62px;
  height: 62px;
  border-radius: 100%;
  cursor: pointer;

  ::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: url("/images/chat.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: 996px) {
    right: 20px;
    bottom: 20px;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 265px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  position: relative;
  z-index: 2;

  ::before {
    content: "";
    display: flex;
    position: absolute;
    inset: 0;
    left: 73px;
    background: url("/images/docs-head-1.svg"), url("/images/docs-head-2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left 0, right 0;
    z-index: -1;
  }

  @media screen and (max-width: 996px) {
    & {
      height: 247px;

      ::before {
        background: url("/images/docs-head-mobile.svg");
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
        background-size: cover;
      }
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 23px 120px 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 52px;
    height: 39px;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 25px 20px 0 20px;
    }
  }
`;

export const GotoWebButtons = styled.div``;

export const GotoWebButton = styled(Button)`
  font-size: ${(props) => props.theme.fontSize["sm"]};
  line-height: 21px;
  font-weight: 500;
  color: #fff;
  background: #8b57f4;
  padding: 13px 31px;
  cursor: pointer;

  :last-child {
    margin-left: 25px;
  }

  @media screen and (max-width: 996px) {
    :last-child {
      display: none;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  align-items: center;

  h2 {
    line-height: 36px;
    color: white;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-top: 55px;
    }
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  background: #f5f7fb;
  border-radius: 13.8348px;
  margin-top: 31px;
  padding: 15px 22px;
  width: 611px;
  height: 64px;
  align-items: center;

  svg {
    width: 33px;
    height: 33px;
    margin-right: 20px;
  }

  @media screen and (max-width: 996px) {
    & {
      width: auto;
      position: absolute;
      bottom: calc(-64px / 2);
      right: 20px;
      left: 20px;
      filter: drop-shadow(0px 13px 22px rgba(0, 0, 0, 0.04));
      background: #ffffff;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: ${(props) => props.theme.fontSize["lg"]};

  :placeholder {
    color: #c1c7d4;
    line-height: 27px;
  }
`;

export const CardDocsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 203px;

  @media screen and (max-width: 996px) {
    & {
      grid-template-columns: 100%;
      padding: unset;
      justify-items: center;
      gap: 26px;
      padding: 0 20px;
    }
  }
`;
