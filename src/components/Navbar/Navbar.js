import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  position: sticky;
  padding: 35px 80px;
  height: 124px;
  top: 0;
  margin: 0 -80px;
  width: auto;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media screen and (max-width: 996px) {
    & {
      padding: 14px 20px;
      height: 72px;
      box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
      margin: 0 -20px;
    }
  }
`;

const NavLogo = styled(Link)`
  display: block;
  width: 169px;
  height: 37px;
  background: url("/images/infinity-logo.png") no-repeat;
  background-size: contain;

  @media screen and (max-width: 996px) {
    width: 158px;
    height: 33px;
    background-size: cover;
  }
`;

const NavLists = styled.ul`
  display: flex;
  align-items: center;

  &.open {
    height: 313px;
    transition: 0.5s;
    padding: 20px;
  }

  @media screen and (max-width: 996px) {
    & {
      position: absolute;
      inset: 0;
      top: 72px;
      flex-direction: column;
      width: 100%;
      transition: 0.5s;
      height: 0px;
      overflow: hidden;
      background: white;
      align-items: flex-start;

      li {
        height: 53px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 16px;
        border-radius: 12px;
        cursor: pointer;

        a {
          font-size: ${(props) => props.theme.fontSize["sm"]};
          line-height: 21px;
          width: 100%;
          height: 100%;
        }

        :not(:first-child) {
          margin-left: unset;
        }

        :hover {
          background: #f3eefe;
          a {
            color: ${(props) => props.theme.colors["cb-purple"]};
          }
        }

        :last-child {
          background: ${(props) => props.theme.colors["cb-purple"]};
          a {
            color: white;
          }
        }
      }
    }
  }
`;

const NavList = styled.li`
  a {
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    line-height: 24px;
    color: #292d32;
    cursor: pointer;
  }

  :not(:first-child) {
    margin-left: 67px;
  }

  &.signin,
  &.signup {
    display: none;
  }

  @media screen and (max-width: 996px) {
    &.signin,
    &.signup {
      display: flex;
    }
  }
`;

const NavButtons = styled.div`
  display: flex;

  button {
    padding: 15px 25px;
    font-size: ${(props) => props.theme.fontSize["base"]};
    justify-content: center;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};

    :first-child {
      width: 104px;
      height: 54px;
      border-radius: 15px;
      background: white;
      color: #292d32;
      margin-right: 15px;
    }

    :last-child {
      border-radius: 15px;
      width: 177px;
      height: 54px;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      display: none;
    }
  }
`;

const StyledHamburger = styled(Hamburger)`
  background: rgba(123, 64, 242, 0.09);
  border-radius: 50%;

  & > div {
    width: 16px;
    height: 12px;
  }

  &.active {
    background: ${(props) => props.theme.colors["cb-purple"]};
    transition: 0.3s;

    span {
      background: white;
    }
  }
`;

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const handleClickHamburger = () => {
    setOpenNav(!openNav);
  };

  return (
    <Nav>
      <NavLogo to="/" />
      <NavLists className={openNav && "open"}>
        <NavList>
          <Link to="/pricing" onClick={() => setOpenNav(false)}>
            Pricing
          </Link>
        </NavList>
        <NavList>
          <Link to="/features" onClick={() => setOpenNav(false)}>
            Features
          </Link>
        </NavList>
        <NavList>
          <Link to="/help" onClick={() => setOpenNav(false)}>
            Help
          </Link>
        </NavList>

        <NavList className="signin">
          <Link to="/auth/signin" onClick={() => setOpenNav(false)}>
            Sign In
          </Link>
        </NavList>
        <NavList className="signup">
          <Link to="/auth/signup" onClick={() => setOpenNav(false)}>
            Create Account
          </Link>
        </NavList>
      </NavLists>
      <NavButtons>
        <Button onClick={() => navigate("/auth/signin")}>Sign In</Button>
        <Button onClick={() => navigate("/auth/signup")}>Create Account</Button>
      </NavButtons>
      <StyledHamburger
        className={openNav && "active"}
        onClick={handleClickHamburger}
        line={3}
        lineColor="cb-purple"
      />
    </Nav>
  );
};

export default Navbar;
