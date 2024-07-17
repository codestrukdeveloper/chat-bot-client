import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TableContainer = styled.div`
  overflow-x: auto;
  overflow-y: auto;

  ::-webkit-scrollbar {
    background: transparent;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["cb-purple"]};
    border-radius: 20px;
  }

  @media screen and (max-width: 996px) {
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    margin-right: -15px;
    margin-bottom: -15px;
    margin-left: -15px;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
`;

export const Thead = styled.thead`
  background: #f1f4f9;

  @media screen and (max-width: 996px) {
    & {
      position: absolute;
      left: -9999px;
      opacity: 0;
    }
  }
`;

export const Tbody = styled.tbody`
  ::before {
    content: "";
    display: block;
    height: 15px;
  }
`;

export const TR = styled.tr`
  border: 1px solid #f9fafe;

  @media screen and (max-width: 996px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: unset !important;
      padding: unset !important;

      &.title-type {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: unset;
        margin-bottom: 25px;

        td {
          font-size: 16px !important;
          padding: unset;

          :last-child {
            padding: unset;

            & > div {
              padding-right: unset;
            }
          }
        }
      }

      :not(&:first-child) {
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.05);
        margin-bottom: 25px;
        border-radius: 15px;
        padding: 25px 20px;

        td:last-child {
          padding: 34px 25px;
        }

        td {
          border-bottom: 2px solid #f9fafe;
        }
      }

      :not(tr:nth-child(1)) td {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }

  &.title-type {
    color: #adb5c2;

    td {
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

export const TD = styled.td`
  padding: 16px 18px;
  font-size: ${(props) => props.theme.fontSize["xs"]};

  :not(:first-child) {
    text-align: center;

    @media screen and (max-width: 996px) {
      text-align: left;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      align-item: center;
      padding: 22px 20px;
    }
  }

  .setting-icon,
  .next-icon {
    background: #f9fafe;
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .next-icon {
    margin-left: 16px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const TH = styled.th`
  padding: 15px 35px;
  color: #adb5c2;
  font-size: ${(props) => props.theme.fontSize["sm"]};

  :nth-child(1) {
    border-radius: 10px 0 0 10px;
  }

  :last-child {
    border-radius: 0 10px 10px 0;
  }
`;

export const NextPrepWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 36px;

  svg {
    cursor: pointer;
  }
`;

export const CurrentPageWrapper = styled.div`
  width: 27px;
  height: 27px;
  color: ${(props) => props.theme.colors["cb-purple"]};
  border-radius: 6px;
  border: 1px solid #f1f4f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize["sm"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  line-height: 21px;
  margin: 0 21px;
`;

const ChevronWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PaginationTable = ({ currentPage, colorPrevNext, ...props }) => {
  return (
    <NextPrepWrapper {...props}>
      <ChevronWrapper>
        <FaChevronLeft color={colorPrevNext} />
      </ChevronWrapper>
      <CurrentPageWrapper>{currentPage}</CurrentPageWrapper>
      <ChevronWrapper>
        <FaChevronRight color={colorPrevNext} />
      </ChevronWrapper>
    </NextPrepWrapper>
  );
};

export default TableContainer;
