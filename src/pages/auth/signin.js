import useAuthStore from "@/hooks/useAuthStore";
import { Button } from "@/components/Button/Button";
import Checkbox from "@/components/Form/Checkbox";
import Label from "@/components/Form/Label";
import { InputGroup, Input, InputWrapper } from "@/components/Form/v2/Input";
import Text from "@/components/Typography/Text";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaGlobe, FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react"; // Import useState for managing local state

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
    height: auto;
  }
`;

const SignupContainer = styled.div`
  width: 50%;
  padding: 0 100px 31px 100px;

  @media screen and (max-width: 996px) {
    width: 100%;
    padding: 50px 20px 40px 20px;
  }
`;

const AuthNav = styled.nav`
  display: flex;
  width: 100%;
  height: 132px;
  padding: 48px 0 47px 0;
  background: white;

  @media screen and (max-width: 996px) {
    padding: unset;
    height: max-content;

    img {
      width: 158px;
      height: 33px;
    }
  }
`;

const AuthTitle = styled(Text)`
  line-height: 48px;
  font-size: 32px;
  letter-spacing: -0.03em;
  color: #292d32;
  font-weight: ${(props) => props.theme.fontWeight["bold"]};

  @media screen and (max-width: 996px) {
    margin-top: 24px;
    font-size: 24px;
    line-height: 40px;
  }
`;

const SignupForm = styled.form`
  margin-top: 24px;

  @media screen and (max-width: 996px) {
    margin-top: 40px;
  }
`;

const HeroWrapper = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(212.44deg, #7b40f2 0.86%, #783eed 86.32%);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  z-index: 3;

  img {
    max-width: 642px;
  }

  ::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: url("/images/auth/float-rounded-r.svg") top right no-repeat,
      url("/images/auth/float-rounded-l.svg") bottom left no-repeat;
  }

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const StyledInputGroup = styled(InputGroup)`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-top: 16px;
  width: max-content;

  .custom-checkbox {
    width: 15px;
    height: 15px;
    background: #f9fafe;
    border: 1px solid #e3e6f3;
    margin-right: 16px;
  }

  p {
    letter-spacing: -0.03em;
    font-size: 12px;
    line-height: 18px;
    color: #c1c7d4;
  }
`;

const GetStartedButton = styled(Button)`
  width: 100%;
  height: 57px;
  justify-content: center;
  padding: 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.03em;
  margin-top: 28px;
`;

const AlreadyHaveAccount = styled(Text)`
  font-size: 12px;
  margin-top: 16px;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
`;
const FlashMessage = styled.div`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
`;
const Signin = () => {
  const navigate = useNavigate();

  const { email, password, isLoading, error, setEmail, setPassword, login } =
    useAuthStore();

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [flashMessage, setFlashMessage] = useState("");

  const validateForm = () => {
    let valid = true;
    const errors = {
      email: "",
      password: "",
    };

    if (!email) {
      errors.email = "Email is required";
      valid = false;
    }
    if (!password) {
      errors.password = "Password is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlashMessage(""); // Set flash message on error
    if (validateForm()) {
      try {
        const response = await login();
        if (response?.status === 200) {
          navigate("/services");
        }
      } catch (error) {
        console.log(error);
        setFlashMessage("Invalid Email Or Password. Please try again."); // Set flash message on error
      }
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setFormErrors((prev) => ({ ...prev, [e.target.name]: "" })); // Clear error on change
    setFlashMessage(""); // Set flash message on error
  };

  return (
    <>
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <Container>
        <SignupContainer>
          <AuthNav>
            <img src="/images/infinity-logo.png" alt="logo" />
          </AuthNav>
          {flashMessage && <FlashMessage>{flashMessage}</FlashMessage>}{" "}
          {/* Display flash message */}
          <AuthTitle>Login</AuthTitle>
          <SignupForm onSubmit={handleSubmit}>
            <InputWrapper>
              <Label className="normal-text">Email</Label>
              <StyledInputGroup>
                <FaEnvelope />
                <Input
                  placeholder="Your Email"
                  type="email"
                  value={email}
                  name="email"
                  onChange={handleInputChange(setEmail)}
                />
              </StyledInputGroup>
              {formErrors.email && (
                <div style={{ color: "red", paddingBottom: "10px" }}>
                  {formErrors.email}
                </div>
              )}
            </InputWrapper>

            <InputWrapper>
              <Label className="normal-text">Password</Label>
              <StyledInputGroup>
                <FaLock />
                <Input
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={handleInputChange(setPassword)}
                />
              </StyledInputGroup>
              {formErrors.password && (
                <div style={{ color: "red", paddingBottom: "10px" }}>
                  {formErrors.password}
                </div>
              )}
            </InputWrapper>

            <GetStartedButton type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </GetStartedButton>
            {/* {error && <div>Error: {error}</div>} */}
            <AlreadyHaveAccount>
              Don't have an account?{" "}
              <Link to="/auth/signup" className="color-primary">
                Sign Up
              </Link>{" "}
            </AlreadyHaveAccount>
          </SignupForm>
        </SignupContainer>
        <HeroWrapper>
          <img src="/images/auth/signup-hero.svg" alt="signup-hero" />
        </HeroWrapper>
      </Container>
    </>
  );
};

export default Signin;
