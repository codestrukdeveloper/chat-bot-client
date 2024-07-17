import { InputGroup } from "@/components/Form/v2/Input";
import { SidebarCategory } from "@/components/Sidebar/Sidebar-Category";
import Text from "@/components/Typography/Text";
import { ContentContainer } from "@/layouts/content-container.layout";
import styled from "styled-components";

export const VisitorContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
`;

export const VisitorContent = styled.div`
  width: calc(100% - 279px);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      padding: unset;
      border: unset;
    }
  }
`;

export const StyledSidebar = styled(SidebarCategory)`
  display: flex;
  flex-direction: column;
  width: 279px;

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

export const VisitorStatus = styled.div`
  margin: auto;
  color: white;
  text-align: center;
`;

export const VisitorStatusTitle = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 14px;
`;

export const VisitorStatusDesc = styled(Text)`
  font-size: 12px;
  line-height: 18px;
`;

export const OnlineUsersBox = styled.div`
  width: 244px;
  height: 106px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(64px);
  border-radius: 15px;
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 20px 25px;
  z-index: 100;

  p {
    :first-child {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      margin-bottom: 18px;
    }

    :last-child {
      font-size: 16px;
      line-height: 24px;
      color: #40cf86;
    }
  }
`;

export const SearchVisitorInputGroup = styled(InputGroup)`
  background: #8b57f4;
  border-radius: 8px;
  width: 239px;
  height: 40px;
  width: 100%;
  border: unset;

  input {
    color: #ffffff;
    ::placeholder {
      color: #ffffff;
      opacity: 0.8;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
