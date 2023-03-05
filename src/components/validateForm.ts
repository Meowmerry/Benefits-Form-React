import { FormInputErrorProps } from "./types/FromInputProps";

export const validateForm = (
  errors: FormInputErrorProps,
  name: string,
  zipCode: string,
  county: string,
  setErrors: React.Dispatch<React.SetStateAction<FormInputErrorProps>>
) => {
  let valid = true;
  const newErrors = { ...errors };
  const regexZipCode = /^\d{5}$/;
  const regName = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (!name || !regName.test(String(name))) {
    valid = false;
  }
  if (
    !zipCode ||
    !regexZipCode.test(String(zipCode)) ||
    String(zipCode).length !== 5
  ) {
    valid = false;
  }
  if (!county) {
    valid = false;
  }
  setErrors(newErrors);
  return valid;
};

export const validName = (name: string) => {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) return true;
  return false;
};
export const validateZipCode = (zipcode: string) => {
  const regexZipCode = /^\d{5}$/;
  if (regexZipCode.test(zipcode)) return true;
  return false;
};

export const validateCounty = (county: string) => {
  if (county) return true;
  return false;
};