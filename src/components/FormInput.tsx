import {  FunctionComponent, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  FormInputProps,
  FormInputPropsType,
} from "./types/FromInputProps";
import { validName } from "./validateForm";
import "../index.css";
import { RenderLoading } from "./RenderLoading";
import { BaseLabel } from "./BaseLabel";
import { BaseInput } from "./BaseInput";
import { BaseSelect } from "./BaseSelect";
import { ButtonSubmit } from "./ButtonSubmit";

const FormInput: FunctionComponent<FormInputPropsType> = (props) => {
  const navigate = useNavigate();
  const { getCounties, setErrors, errors, counties, loading } = props;;
  const [formValues, setFormValues] = useState<FormInputProps>({
    name: "",
    zipCode: "",
    county: "",
  });;
  const [disabled, setDisable] = useState<boolean>(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (formValues.zipCode) {
      getCounties(formValues.zipCode);
    }
  }, [getCounties, formValues.zipCode]);

  useEffect(() => {
    if (formValues.county) {
      setDisable(false);
    }
  }, [formValues.county]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validName(value)
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: error ? null : "Name is required, name can only contain letters" });
  };

  const handleChangeZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
    if (value.length === 5 && counties.length > 0) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log('value', value);
    setFormValues({ ...formValues, [name]: value })
    if (value) {
      setErrors({ ...errors, [name]: "" });
    } else if (!value) {
      setErrors({ ...errors, [name]: "County is required" });
    }
  };

  const handleSubmit = () => {
    const data: FormInputProps = {
      zipCode: formValues.zipCode,
      name: formValues.name,
      county: formValues.county,
    };
    navigate("/welcome", { state: { data: data } });
  };

  return (
    <div className=" max-h-0 flex justify-center ">
      <div className="h-fit shadow-lg shadow-cyan-500/50 ... mt-8 w-full md:w-1/2 xl:w-1/3">
        <form className="rounded px-8 pt-6 pb-8 mb-4 sm:px-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <BaseLabel name={'Name'} />
            <BaseInput id="name" type="text" inputRef={inputRef} name="name" value={formValues.name} errors={errors} placeholder={'Enter your name'} handleChange={handleChangeName} />
            {errors?.name && (
              <span className="text-red-500 text-[12px]">{errors?.name}</span>
            )}
          </div>

          <div className="mb-4">
            <BaseLabel name={'Zip Code'} />
            <BaseInput id="zipCode" type="number" maxLength={5} inputRef={inputRef} name="zipCode" placeholder={'Enter your 5-digit zip code'} value={formValues.zipCode} errors={errors} handleChange={handleChangeZipCode} />
            {errors?.zipCode && (
              <span className="text-red-500  text-[12px]">{errors?.zipCode}</span>
            )}
          </div>
          {loading && <RenderLoading />}
          {formValues.name && formValues.zipCode && !loading && counties?.length > 0 && (
            <div className="mb-4">
              <BaseLabel name={'County'} />
              <BaseSelect name={"county"} value={formValues.county} handleSelect={handleSelect} errors={errors} counties={counties} />
              {errors?.county && (
                <span className="text-red-500  text-[12px]">{errors?.county}</span>
              )}
            </div>
          )}
          <ButtonSubmit disabled={disabled}  />
        </form>
      </div>
    </div>
  );
};
export default FormInput;
