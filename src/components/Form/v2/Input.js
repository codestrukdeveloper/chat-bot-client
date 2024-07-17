import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 55px;
  padding: 15px 14px 16px 14px;
  background: #f9fafe;
  border: 1px solid #e3e6f3;
  border-radius: 10px;

  :placeholder {
    letter-spacing: -0.03em;
    color: #e3e6f3;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  height: 55px;
  background: #f9fafe;
  border: 1px solid #e3e6f3;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 14px;

  svg {
    fill: #e3e6f3;
    margin-right: 12px;
  }

  input {
    background: unset;
    padding: unset;
    border: unset;
    height: inherit;
    width: inherit;
    border-radius: unset;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;
