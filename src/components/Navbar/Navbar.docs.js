import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  height: 94px;
  position: sticky;
  top: 0;
  padding: 28px 120px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors["cb-purple"]};
  z-index: 100;

  img {
    cursor: pointer;
    width: 52px;
    height: 39px;
  }

  @media screen and (max-width: 996px) {
    padding: 25px 20px 34px 20px;
    height: 98px;
  }
`;

const NavLists = styled.ul`
  display: flex;
  width: 596px;
  margin: auto;

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const NavList = styled.li`
  :not(:last-child) {
    margin-right: 45px;
  }

  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  font-size: ${(props) => props.theme.fontSize["lg"]};
  line-height: 27px;
  color: white;
  cursor: pointer;
`;

const NavbarDocs = ({ className, ...props }) => {
  const navigate = useNavigate();

  return (
    <NavWrapper className={className} {...props}>
      <img
        src="/images/logo.png"
        alt="logo"
        onClick={() => navigate("/docs")}
      />
      <NavLists>
        <NavList onClick={() => navigate("/docs/manage-account")}>
          Manage Account
        </NavList>
        <NavList onClick={() => navigate("/docs/security")}>Security</NavList>
        <NavList onClick={() => navigate("/docs/pricing-plans")}>
          Pricing Plans
        </NavList>
        <NavList onClick={() => navigate("/docs/topics")}>Other Topics</NavList>
      </NavLists>
    </NavWrapper>
  );
};

export default NavbarDocs;
