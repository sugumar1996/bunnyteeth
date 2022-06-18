import styled, { css } from 'styled-components'
import "../../utility/styledComponents/style.scss";
import { Link } from "react-router-dom";
import { Field } from "formik";


export const Label = styled.label` 
font-size: ${props => props.fontSize ? props.fontSize : "16px"};
color: ${props => props.labelColor ? props.labelColor : "#2F3192"};
font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
float: left;
`;
export const Input = styled(Field)`
font-size: ${props => props.fontSize ? props.fontSize : "13px"};
font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
background: ${props => props.backgroundColor ? props.backgroundColor : "#ffffff"};
padding: ${props => props.inputPadding ? props.inputPadding : "10px 30px 10px 30px"};
height: ${props => props.inputHeight ? props.inputHeight : "50px"};
width: ${props => props.inputWidth ? props.inputWidth : "100%"};
border: ${props => props.inputBorder ? props.inputBorder : "1px solid #eaeaea"};
border-radius: ${props => props.borderRadius ? props.borderRadius : "5px"};
position: relative;
&:focus {
  border: 1px solid #00ACEB;
  outline: none;
}
`;
export const Button = styled.button`
min-width: 150px;
height: 46px;
display: inline-block;
padding: 5px 10px;
font-size: 16px;
font-weight: 600; 
color: #ffffff;
background-color: #00ACEB;
border-radius: 2px;
text-align: center;
border: 1px solid #00ACEB;
letter-spacing: 0.3px;
transition: .15s ease-in-out;
transition-duration: 400ms;
`;
export const Ul = styled.ul`
list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`;
// export const H2 = styled.h2`
//  font-size: ${props => props.fontSize ? props.fontSize : "48px"};
//  color: ${props => props.primaryColor ? "#2F3192" : "#2F3192"};
// `;
export const Caption = styled.caption`
 font-size: ${props => props.fontSize ? props.fontSize : "16px"};
 color: ${props => props.primaryColor ? props.primaryColor : "#696687"};
 font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
 text-transform: inherit;
 letter-spacing: ${props => props.letterSpacing ? props.letterSpacing : "0.3px"};
 margin-right: ${props => props.marginRight ? props.marginRight : "2.5px"};
 margin-bottom: ${props => props.marginBottom ? props.marginBottom : "0"};
`;
export const Li = styled.li`
 list-style-type: none;
`;
export const P = styled.p`
  font-size: ${props => props.fontSize ? props.fontSize : "18px"};
  color: ${props => props.paraColor ? props.paraColor : "#696687"}; 
`;
export const StyledLink = styled(Link)`
font-size: ${props => props.fontSize ? props.fontSize : "14px"};
color: ${props => props.color ? props.color : "#007bff"};;
`;
export const RouteLink = styled(Link)`
  color: #ffffff;
  background-color: #00ACEB;
  text-decoration: none !important;
`