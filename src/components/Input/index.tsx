import { HTMLAttributes, InputHTMLAttributes } from "react";
import InputStyle from "./styles";
import { UseFormRegister } from "react-hook-form";
import { IValidation } from "@/utils";

type InputType = {
  name: string;
  register: UseFormRegister<any>;
  validation?: IValidation;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ name, register, validation, ...props }: InputType) => {
  return (
    <input
      {...register(name, validation)}
      {...props}
      className={InputStyle()}
    />
  );
};

export default Input;
