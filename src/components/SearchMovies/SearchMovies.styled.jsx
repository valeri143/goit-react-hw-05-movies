import styled from "@emotion/styled";
import {  Form, Field  } from "formik"

export const StyledForm = styled(Form)`
display: flex;
align-items: center;
width: 100%;
max-width: 600px;
background-color: #fff;
border-radius: 3px;
overflow: hidden;
`

export const StyledInput = styled(Field)`
  width: 50%;
  font: inherit;
  font-size: 20px;
  border-color: gray;
  padding-left: 4px;
  padding-right: 4px;
`
export const StyledButton = styled.button`
height: 28px;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
&:hover {
    opacity: 1;
  }
`