import { useCallback, useState } from "react";
import FormInput from "./FormInput";
import Navbar from "./Navbar";
import { CountyProps, FormInputErrorProps } from "./types/FromInputProps";
import axios from "axios";

function Home() {
  const [counties, setCounties] = useState<CountyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormInputErrorProps>({
    name: "",
    zipCode: "",
    county: "",
  });
  const getCounties = useCallback(async (zipCode: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https:api-connecture.healthpilot.com/api/Geo/counties/${zipCode}`
      );
      const { data } = response;
      if (data?.length <= 0) {
        setErrors({ ...errors, zipCode: "Not a valid zip code" });
      } else if (data && data.length > 0) {
        setCounties(data);
        setErrors({ ...errors, zipCode: "" });
        setLoading(false);
      }
    } catch (error) {
      console.log("Error! ", error);
    }
  }, []); // errors

  return (
    <div className="bg-healthpilot-primary max-h-screen">
      <Navbar />
      <FormInput
        getCounties={getCounties}
        setErrors={setErrors}
        errors={errors}
        counties={counties}
        loading={loading}
      />
    </div>
  );
}

export default Home;
