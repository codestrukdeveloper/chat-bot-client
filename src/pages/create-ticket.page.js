import { Button } from "@/components/Button/Button";
import FileUpload from "@/components/FileUpload/FileUpload";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import { TextareaEditor } from "@/components/Form/Textarea";
import { InputWrapper } from "@/components/Form/v2/Input";
import { NavWrapper } from "@/components/Navbar/Navbar.docs";
import Text from "@/components/Typography/Text";
import { Fragment } from "react";
import { useNavigate } from "react-router";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background:  #F9FAFE;

}
`;

const CreateTicketTitle = styled(Text)`
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  margin: auto;
  font-weight: 600;

  @media screen and (max-width: 996px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

const CreateTicketForm = styled.form`
  margin: 30px 120px 38px 120px;

  @media screen and (max-width: 996px) {
    margin: 41px 20px 41px 20px;
  }
`;

const StyledInputWrapper = styled(InputWrapper)`
  :not(:last-child) {
    margin-bottom: 14px;
  }

  label {
    font-size: 16px;
    line-height: 24px;
  }

  input,
  textarea {
    border: 1px solid #e2e5f2;
    background: white;
    box-shadow: 0px 0px 37px 3px rgba(0, 0, 0, 0.01);
    border-radius: 11px;
  }
`;

const StyledTextareaEditor = styled(TextareaEditor)`
  margin-top: 14px;
  overflow: hidden;
`;

const StyledFileUpload = styled(FileUpload)`
  margin-top: 14px;
  background: white;
  border-radius: 13px;
  border: 1px dashed #e3e6f3;
  width: 424px;

  @media screen and (max-width: 996px) {
    width: 100%;
  }
`;

const StyledSubmitButton = styled(Button)`
  width: 192px;
  justify-content: center;
  padding: 14px;
  font-size: 14px;
  line-height: 21px;
  margin-top: 55px;

  @media screen and (max-width: 996px) {
    margin-top: 41px;
  }
`;

function CreateTicket() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <GlobalStyle />
      <NavWrapper>
        <img
          src="/images/logo.png"
          alt="logo"
          onClick={() => navigate("/docs")}
        />
        <CreateTicketTitle>Create Ticket</CreateTicketTitle>
      </NavWrapper>
      <CreateTicketForm>
        <StyledInputWrapper>
          <Label>Ticket Title</Label>
          <Input type="text" placeholder="Write In Here" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Subject</Label>
          <Input type="text" placeholder="Write In Here" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Description</Label>
          <StyledTextareaEditor showButton={false} />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Upload File (Images and pdf only)</Label>
          <StyledFileUpload type="file" showButton showDesc={false} />
        </StyledInputWrapper>
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </CreateTicketForm>
    </Fragment>
  );
}

export default CreateTicket;
