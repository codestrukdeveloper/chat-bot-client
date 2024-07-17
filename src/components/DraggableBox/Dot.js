import styled from "styled-components";

const Dot = styled.div`
  display: flex;
  color: #292d32;
  font-size: 12px;
  line-height: 18px;
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;

  width: max-content;
  padding: 1.41px;
  filter: drop-shadow(0px 0px 4px rgba(123, 64, 242, 0.22));

  ::after {
    content: "";
    display: block;
    background: white;
    margin-left: 8px;
    width: 14px;
    border-radius: 50%;
    height: 14px;
    border: 5px solid ${(props) => props.theme.colors["cb-purple"]};
    transform: scale(0.6);
  }

  ${(props) =>
    props.dotFirst &&
    `
    & {
      ::after {
        display: none;
      }

      ::before {
        content: "";
        display: block;
        background: white;
        margin-right: 8px;
        width: 14px;
        border-radius: 50%;
        height: 14px;
        border: 5px solid ${props.theme.colors["cb-purple"]};
        transform: scale(0.6);
      }
    }
  `}
`;

const DotComponent = ({ name, ...props }) => {
  return <Dot {...props}>{name}</Dot>;
};

export default DotComponent;
