export type FormInputPropsType = {
  getCounties: (zip: string) => Promise<void>;
  setErrors: React.Dispatch<React.SetStateAction<FormInputErrorProps>>;
  errors: FormInputErrorProps;
  counties: CountyProps[];
  loading: boolean;
};
export type FormInputProps = {
  name: string;
  zipCode: string;
  county: string;
};
export type FormInputErrorProps = {
  name?: string;
  zipCode?: string;
  county?: string;
};

export type CountyProps = {
  countyName: string;
  fipsCountyCode: string;
  stateCode: string;
  stateName: string;
  zipCode: string;
};
