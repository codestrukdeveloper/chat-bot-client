import styled from "styled-components";

const Input = styled.input`
  padding: 13px 20px;
  border-radius: 10px;
  border: 1px solid #c1c7d4;
  margin-top: 12px;

  :placeholder {
    color: #adb5c2;
    font-size: 12px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export default Input;
