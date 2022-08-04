import React from "react";
import { Btn, Form, Label, Textarea, Wrapper } from "./Styles";
const Contact = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Contact.Form = ({ children, submit }) => (
  <Form onSubmit={submit}>{children}</Form>
);
Contact.Label = ({ children, text }) => (
  <Label>
    {text}
    {children}
  </Label>
);
Contact.Textarea = ({ text }) => <Textarea>{text}</Textarea>;

Contact.Btn = ({}) => <Btn>Submit</Btn>;

export default Contact;
