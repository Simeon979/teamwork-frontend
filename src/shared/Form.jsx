import styled from 'styled-components';

const FormContainer = styled.main`
  max-width: 768px;
  height: auto;
  padding: 1.5em;
  background-color: inherit;
`;
const FormHeader = styled.h2`
  color: #d4d0c7;
  margin-bottom: 2em;
`;

const Form = styled.form`
  margin-top: 1em;
  width: 80%;
  background-color: inherit;
`;

const InputLabel = styled.label`
  font-size: 1.5em;
  text-transform: uppercase;
  color: #edebe6;
`;

const Input = styled.input`
  display: block;
  padding: 1em;
  margin-bottom: 1.5em;
  width: 100%;
  border: none;
  border-bottom: solid 1px #726582;
  background-color: inherit;
  color: #edebe6;
  &::placeholder {
    color: #d4d0c7;
  }
`;

const TextArea = styled.textarea`
  display: block;
  padding: 1em;
  margin-bottom: 1.5em;
  width: 100%;
  border: none;
  border-bottom: solid 1px #726582;
  background-color: inherit;
  color: #edebe6;
  &::placeholder {
    color: #d4d0c7;
  }
`;

const Submit = styled.input`
  padding: 1em; 
  border: 1px solid #726582;
  background-color: inherit;
  color: #edebe6;
  transition: .4s;
  width: 40%;
  &:hover {
    background-color: #edebe6;
    color: #41295a;
  }
`;

export {
  FormContainer,
  FormHeader,
  Form,
  InputLabel,
  Input,
  TextArea,
  Submit,
};
