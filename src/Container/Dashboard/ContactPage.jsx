import React from "react";
import Contact from "../../Components/Dashbord/Contact/Contact";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Firebase/authContex";
import { toast } from "react-toastify";
const ContactPage = () => {
  const { register, resetField, handleSubmit } = useForm();
  const { user } = useAuth();

  const SubmitHandler = () => {
    resetField("message");
    toast.success("Message Sent");
  };
  return (
    <Contact>
      <Contact.Form submit={handleSubmit(SubmitHandler)}>
        <Contact.Label text="Name">
          <input type="text" value={user.displayName} readOnly />
        </Contact.Label>
        <Contact.Label text="Email">
          <input type="email" value={user.email} readOnly />
        </Contact.Label>
        <Contact.Label text="Message">
          <textarea
            id=""
            {...register("message", {
              required: true,
              min: 10,
              max: 100,
            })}></textarea>
        </Contact.Label>
        <Contact.Btn />
      </Contact.Form>
    </Contact>
  );
};

export default ContactPage;
