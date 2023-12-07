import { ValidationRule } from "react-hook-form";

export interface IValidation {
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: ValidationRule<RegExp>;
  required?: string | ValidationRule<boolean>;
  validate?: any;
}
