import { MenuDropdown } from "@/components/Dropdown/Dropdown";
import TableContainer from "@/components/Table/Table";
import { ContentContainer } from "@/layouts/content-container.layout";
import styled from "styled-components";

export const ContactContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
`;

export const ContactContent = styled.div`
  width: calc(100% - 208px);
  border: 1px solid #f1f4f9;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 29px 30px;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      padding: unset;
      border: unset;
    }
  }
`;

export const TableWrapper = styled(TableContainer)`
  margin-top: 30px;
  height: calc(100vh - 283.5px);
  padding-right: 15px;
  overflow-y: auto;

  table {
    thead {
      tr {
        th:first-child {
          text-align: left;
        }

        th:last-child {
          text-align: right;
        }
      }
    }

    tbody {
      tr {
        :not(:first-child) {
          td {
            :last-child {
              text-align: right;
            }

            :nth-child(2) {
              span {
                display: inline-block;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
              }
            }

            :nth-child(3) {
              span {
                width: max-content;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                color: ${(props) => props.theme.colors["cb-purple"]};
                font-weight: ${(props) => props.theme.fontWeight["medium"]};
                svg {
                  margin-right: 6px;
                }
              }
            }

            :nth-child(4) {
              span.ready-activate {
                color: #32b874;
              }

              span {
                position: relative;
                display: inline-block;
              }

              span.ready-activate::before {
                content: "";
                display: block;
                position: absolute;
                width: 6px;
                height: 6px;
                background: #32b874;
                left: -19px;
                top: 3px;
                bottom: 0;
                border-radius: 50%;
                box-shadow: 0 0 0 4px rgba(50, 184, 116, 0.3);
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    & {
      height: unset;

      tr {
        span {
          font-size: ${(props) => props.theme.fontSize["xs"]};
        }

        :not(:first-child) {
          td {
            ::before {
              color: #adb5c2;
            }

            :first-child {
              display: none;
            }

            :nth-child(2) {
              order: 2;
              ::before {
                content: "Email";
              }
            }

            :nth-child(3) {
              order: 3;
              ::before {
                content: "Country";
              }
            }

            :nth-child(4) {
              order: 4;
              padding-bottom: 35px;
              ::before {
                content: "Status";
              }
            }

            :nth-child(5) {
              order: 1;
              align-items: center;
              justify-content: flex-end;
              position: relative;

              ::before {
                content: "Lorem Ipsum";
                color: #292d32;
                font-weight: 500;
                position: absolute;
                left: 25px;
                word-break: break;
              }
            }
          }
        }
      }
    }
  }
`;

export const StyledMenuDropdown = styled(MenuDropdown)`
  top: 53px;
`;
