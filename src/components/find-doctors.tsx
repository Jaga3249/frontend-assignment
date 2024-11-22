import { MapPin, Send } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { doctorLists } from "../../data";
import toast from "react-hot-toast";
interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  setSearchResult: Dispatch<SetStateAction<any>>;
  serachResult: any;
}

const FindYourDoctor = ({ setStep, serachResult, setSearchResult }: Props) => {
  const [location, setLocation] = useState<string[]>([]);
  const [specialization, setSpecialization] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("");
  // const [doctors, setDoctors] = useState(doctorLists);

  const handleSearch = () => {
    if (!selectedLocation || !selectedSpecialization) {
      toast.error("please select location and specilization");
      return;
    }
    const updatedResult = doctorLists.filter((doctor) => {
      return (
        doctor.location.city === selectedLocation &&
        doctor.specialty === selectedSpecialization
      );
    });

    setSearchResult(updatedResult);
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    const updateLocation = Array.from(
      new Set(doctorLists.map((doctor) => doctor.location.city))
    );
    // const updateSpecialization = Array.from(
    //   new Set(doctorLists.map((doctor) => doctor.specialty))
    // );
    // setSpecialization(updateSpecialization);
    setLocation(updateLocation);
  }, []);
  useEffect(() => {
    if (selectedLocation) {
      const updateSpecialization = Array.from(
        new Set(
          doctorLists
            .filter((doctor) => doctor.location.city === selectedLocation)
            .map((doctor) => doctor.specialty)
        )
      );
      setSpecialization(updateSpecialization);
    } else {
      setSpecialization([]); // Clear specializations if no location is selected
    }
  }, [selectedLocation]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Find Your Doctor
      </h1>
      <p className="text-gray-600 mb-6">
        Book appointments with trusted healthcare providers
      </p>
      <div className="p-8 flex flex-col gap-4 items-center mb-6 w-full max-w-xl bg-white rounded-lg shadow-md">
        <div className="w-full flex gap-4 items-center">
          <div className="w-full flex flex-1 gap-1 p-3 border border-gray-300 rounded-lg focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-400">
            <MapPin className="text-gray-400" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full border-none outline-none bg-transparent"
            >
              <option value="" disabled>
                Select Your Location
              </option>
              {location.map((loc, i) => (
                <option value={loc} key={i}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          {/* <div
            className="w-10 h-10 flex items-center justify-center border border-gray-200
           rounded-md bg-white shadow-sm cursor-pointer"
          >
            <Send size={16} className="text-gray-700" />
          </div> */}
        </div>
        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="w-full flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-400"
        >
          <option value="" disabled>
            Select Specialization
          </option>
          {specialization.map((specialization, i) => (
            <option value={specialization} key={i}>
              {specialization}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="w-full bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
        >
          Search Doctors
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-xl">
          Popular Specializations
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-sm cursor-pointer hover:bg-gray-200 shadow-sm">
            General Practice
          </span>
          <span className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-sm cursor-pointer hover:bg-gray-200 shadow-sm">
            Dentistry
          </span>
          <span className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-sm cursor-pointer hover:bg-gray-200 shadow-sm">
            Pediatrics
          </span>
          <span className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-sm cursor-pointer hover:bg-gray-200 shadow-sm">
            Cardiology
          </span>
        </div>
      </div>
    </div>
  );
};

export default FindYourDoctor;
