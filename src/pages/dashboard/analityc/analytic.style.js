import { ContentContainer } from "@/layouts/content-container.layout";
import styled from "styled-components";

export const AnalyticsContainer = styled(ContentContainer)`
  display: flex;
  position: relative;

  @media screen and (max-width: 996px) {
    height: auto;
  }
`;

export const AnalyticsContent = styled.div`
  width: calc(100% - 208px);
  border: 1px solid #f1f4f9;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 29px 30px;
  display: flex;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      padding: unset;
      border: unset;
      flex-direction: column;
    }
  }
`;

export const AnalyticHeader = styled.div`
  display: flex;
  align-items: center;

  .analytic-title {
    color: #000016;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    margin-bottom: 6px;
  }

  @media screen and (max-width: 996px) {
    & {
      background: white;
      border: 10px solid #f9fafe;
      border-radius: 15px;
      margin-bottom: 40px;
      padding: 5px 10px;

      .analytic-title {
        font-size: ${(props) => props.theme.fontSize["lg"]};
        line-height: 27px;
        margin-bottom: unset;
        text-align: center;
        width: 100%;
        padding-right: 44px;
      }
    }
  }
`;

export const Analytic = styled.div`
  width: calc(100% - 283px);
  margin-right: 20px;
  height: 100%;

  .analytic-last-update {
    color: #c1c7d4;
    line-height: 24px;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      height: auto;
    }
  }
`;
export const AnalyticDetail = styled.div`
  width: 283px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

export const ChartWrapper = styled.div`
  border-radius: 15px;
  border: 1px solid #f1f4f9;
  margin-top: 21px;
  padding: 15px;
  height: calc(100vh - 303px);

  @media screen and (max-width: 996px) {
    margin-top: 25px;
    padding: 30px 0;
    height: 471px;
  }
`;

export const DetailDateHeader = styled.div`
  border-radius: 15px;
  border: 1px solid #f1f4f9;
  padding: 14px 56px;
  color: #c1c7d4;
  font-size: ${(props) => props.theme.fontSize["sm"]};
  line-height: 21px;
`;

export const DetailContent = styled.div`
  border-radius: 15px;
  border: 1px solid #f1f4f9;
  height: calc(100vh - 303px);
  margin-top: 20px;
  padding: 25px 20px 20px 20px;
`;

export const DetailContentHeader = styled.div`
  .title {
    color: #000016;
    line-height: 24px;
    font-weight: 600;
  }

  .desc {
    margin-top: 13px;
    font-size: ${(props) => props.theme.fontSize["xs"]};
    line-height: 18px;
    color: #c1c7d4;
    margin-right: 21px;
  }
`;

export const ListDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  height: calc(100% - 100px);
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  font-weight: 500;
  border-top: 1px solid #f1f4f9;
  border-bottom: 1px solid #f1f4f9;
  margin-left: -20px;
  margin-right: -20px;

  p {
    font-size: ${(props) => props.theme.fontSize["xs"]};

    :last-child {
      margin-right: 21px;
    }
  }
`;

export const ListContent = styled.div`
  height: 100%;
  overflow-y: auto;
  margin-top: 26px;

  ::-webkit-scrollbar {
    background: transparent;
  }
`;

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    color: #292d32;
    font-size: ${(props) => props.theme.fontSize["xs"]};
  }

  p:last-child {
    margin-right: 21px;
  }

  :not(:last-child) {
    margin-bottom: 23px;
  }
`;