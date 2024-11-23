import { MapPin } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Doctor, doctorLists } from "../../data";
import toast from "react-hot-toast";

interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  setSearchResult: Dispatch<SetStateAction<Doctor[]>>;
  searchResult: Doctor[];
  setcopysearchResult: Dispatch<SetStateAction<Doctor[]>>;
}

const FindYourDoctor = ({
  setStep,
  setSearchResult,
  setcopysearchResult,
}: Props) => {
  const [locations, setLocations] = useState<string[]>([]);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<string>("");

  // Fetch unique locations on initial render
  useEffect(() => {
    const uniqueLocations = [
      ...new Set(doctorLists.map((doctor) => doctor.location.city)),
    ];
    setLocations(uniqueLocations);
  }, []);

  // Update specializations when the location changes
  useEffect(() => {
    if (selectedLocation) {
      const filteredSpecializations = [
        ...new Set(
          doctorLists
            .filter((doctor) => doctor.location.city === selectedLocation)
            .map((doctor) => doctor.specialty)
        ),
      ];
      setSpecializations(filteredSpecializations);
    } else {
      setSpecializations([]);
    }
  }, [selectedLocation]);

  const handleSearch = () => {
    if (!selectedLocation || !selectedSpecialization) {
      toast.error(
        "Please select your preferred location and area of specialization"
      );
      return;
    }

    const filteredDoctors = doctorLists.filter(
      (doctor) =>
        doctor.location.city === selectedLocation &&
        doctor.specialty === selectedSpecialization
    );
    setcopysearchResult(filteredDoctors);
    setSearchResult(filteredDoctors);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Find Your Doctor
      </h1>
      <p className="text-gray-600 mb-6">
        Book appointments with trusted healthcare providers
      </p>

      <div className="p-8 flex flex-col gap-4 items-center mb-6 w-full max-w-xl bg-white rounded-lg shadow-md">
        {/* Location Dropdown */}
        <div className="w-full flex gap-4 items-center">
          <div className="w-full flex-1 p-3 border border-gray-300 rounded-lg focus-within:border-yellow-400 focus-within:ring-1 focus-within:ring-yellow-400 flex items-center gap-1">
            <MapPin className="text-gray-400" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full border-none outline-none bg-transparent"
            >
              <option value="" disabled>
                Select Your Location
              </option>
              {locations.map((loc, index) => (
                <option value={loc} key={index}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Specialization Dropdown */}
        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-400"
        >
          <option value="" disabled>
            Select Specialization
          </option>
          {specializations.map((spec, index) => (
            <option value={spec} key={index}>
              {spec}
            </option>
          ))}
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
        >
          Search Doctors
        </button>
      </div>

      {/* Popular Specializations */}
      <div className="flex flex-col gap-4">
        <h2 className="text-center font-semibold text-xl">
          Popular Specializations
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {["General Practice", "Dentistry", "Pediatrics", "Cardiology"].map(
            (specialization, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-gray-600 text-sm cursor-pointer hover:bg-gray-200 shadow-sm"
              >
                {specialization}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FindYourDoctor;
