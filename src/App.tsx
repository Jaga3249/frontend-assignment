import { useEffect, useState } from "react";
import DoctorList from "./components/doctorlist";
import FindYourDoctor from "./components/find-doctors";
import { Doctor } from "../data";

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [serachResult, setSearchResult] = useState<Doctor[]>([]);
  const [copysearchResult, setcopysearchResult] = useState<Doctor[]>([]);

  return (
    <div className="">
      {step === 1 && (
        <FindYourDoctor
          setStep={setStep}
          setSearchResult={setSearchResult}
          searchResult={serachResult}
          setcopysearchResult={setcopysearchResult}
        />
      )}
      {step === 2 && (
        <DoctorList
          setStep={setStep}
          searchResult={serachResult}
          setSearchResult={setSearchResult}
          copysearchResult={copysearchResult}
          setcopysearchResult={setcopysearchResult}
        />
      )}
    </div>
  );
};
export default App;
