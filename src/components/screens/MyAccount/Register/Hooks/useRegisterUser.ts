import React, { useState } from "react";
interface RegisterInput {
  email: string;
  password: string;
  passwordRepeat: string;
}
interface IUseRegisterUser {
  handleSubmit: any;
  handleInputChange: any;
  inputs: RegisterInput;
}

const useRegisterUser = (callback): IUseRegisterUser => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    passwordRepeat: ""
  });
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = (event: any, inputName: string) => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [inputName]: event.nativeEvent.text
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useRegisterUser;
