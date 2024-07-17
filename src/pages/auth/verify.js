import useAuthStore from "@/hooks/useAuthStore";
import { Button } from "@/components/Button/Button";
import Label from "@/components/Form/Label";
import { InputGroup, Input, InputWrapper } from "@/components/Form/v2/Input";
import Text from "@/components/Typography/Text";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
    height: auto;
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

const StyledInputGroup = styled(InputGroup)`
  margin-top: 10px;
  margin-bottom: 20px;
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

const FlashMessage = styled.div`
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
`;

const Verify = () => {
  const navigate = useNavigate();
  const { setEmail, email, otp, isLoading, error, setOTP, verifyOTP } = useAuthStore();
  const [formErrors, setFormErrors] = useState({ email: '', otp: '' });
  const [flashMessage, setFlashMessage] = useState('');
  const [searchParams] = useSearchParams();


  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    if (emailFromQuery) {
      setEmail(emailFromQuery); // Set email from query parameter
    }
  }, [searchParams, setEmail]);

  const validateForm = () => {
    let valid = true;
    const errors = { email: '', otp: '' };

    if (!email) {
      errors.email = 'Email is required';
      valid = false;
    }
    if (!otp) {
      errors.otp = 'Otp is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlashMessage(''); // Set flash message on error
    if (validateForm()) {
      try {
       const response = await verifyOTP();
       if(response?.status === 200){
        console.log('entered 200')
         navigate('/auth/signin');
       }
      } catch (error) {
        console.error('error verify',error?.response);
        if(error?.response?.status == 400){
          setFlashMessage('Invalid OTP. Please try again!'); // Set flash message on error
        }else{
          setFlashMessage('Something went wrong during Verification. Please try again.'); // Set flash message on error
        }
      }
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setFormErrors((prev) => ({ ...prev, [e.target.name]: '' })); // Clear error on change
    setFlashMessage(''); // Set flash message on error

  };

  return (
    <>
      <Helmet>
        <title>Verify Registration</title>
      </Helmet>
      <Container>
        <SignupContainer>
          <AuthNav>
            <img src="/images/infinity-logo.png" alt="logo" />
          </AuthNav>
          {flashMessage && <FlashMessage>{flashMessage}</FlashMessage>} {/* Display flash message */}

          <AuthTitle>Verify Registration</AuthTitle>
          <SignupForm onSubmit={handleSubmit}>
            <InputWrapper>
              <Label className="normal-text">Email</Label>
              <StyledInputGroup>
                <FaEnvelope />
                <Input 
                  placeholder="Your Email" 
                  type="email" 
                  readOnly
                  value={email} 
                  name="email"
                />
              </StyledInputGroup>
              {formErrors.email && <div style={{ color: 'red', paddingBottom: '10px' }}>{formErrors.email}</div>}
            </InputWrapper>
            <InputWrapper>
              <Label className="normal-text">OTP</Label>
              <StyledInputGroup>
                <FaLock />
                <Input 
                  placeholder="Enter OTP" 
                  type="text" 
                  value={otp} 
                  name="otp"
                  onChange={handleInputChange(setOTP)} 
                />
              </StyledInputGroup>
              {formErrors.otp && <div style={{ color: 'red', paddingBottom: '10px' }}>{formErrors.otp}</div>}
            </InputWrapper>
            <GetStartedButton type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Verify'}
            </GetStartedButton>
            {/* {error && <div>Error: {error}</div>} */}
          </SignupForm>
        </SignupContainer>
        <HeroWrapper>
          <img src="/images/auth/signup-hero.svg" alt="signup-hero" />
        </HeroWrapper>
      </Container>
    </>
  );
};

export default Verify;
