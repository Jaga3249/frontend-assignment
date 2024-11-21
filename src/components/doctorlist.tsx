import { Filter, MoveLeft } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Doctor } from "../../data";
import toast from "react-hot-toast";

interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  serachResult: any;
  setSearchResult: Dispatch<SetStateAction<any>>;
}
const DoctorList = ({ setStep, serachResult, setSearchResult }: Props) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  // Function to handle booking an appointment
  const handleBookAppointment = (doctor: Doctor) => {
    if (!selectedTimeSlot) {
      toast.error("Please select a time slot");
      return;
    }
    const filterdata = serachResult.map((item: Doctor) => {
      if (item.name === doctor.name) {
        setSelectedDoctor({ ...item, booked: !item.booked });
        return { ...item, booked: !item.booked };
      }
      return item;
    });
    setSearchResult(filterdata);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen border-2 bg-yellow-50 relative">
        <div className="w-full max-w-2xl">
          <button
            className="text-[#5A5A5A] font-medium text-sm bg-[#fff] py-2 px-3 flex gap-2 items-center rounded-md"
            onClick={() => setStep((prev) => prev - 1)}
          >
            <MoveLeft />
            Back to Search
          </button>
          <div className="flex justify-between items-center mt-4">
            <div>
              <h2 className="text-2xl font-semibold">
                Doctors in {serachResult[0].location.city}
              </h2>
              <p className="text-gray-500 mt-2">
                {serachResult.length} doctors found
              </p>
            </div>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex gap-2 items-center rounded-md bg-[#fff] py-2 px-4 text-sm"
            >
              <Filter />
              Filters
            </button>
          </div>

          <div className="mt-6 space-y-6">
            {serachResult.map((doctor: Doctor, index: number) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div className="flex flex-col space-y-1">
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p className="text-gray-500">{doctor.specialty}</p>
                  <p className="text-gray-500">{doctor.location.address}</p>
                  <p className="text-gray-500">
                    Current queue: {doctor.currentQueue} patients
                  </p>
                  <p className="text-gray-500">
                    Estimated wait: {doctor.estimatedWaitTime}
                  </p>
                </div>

                <div className="flex flex-col -mt-8 justify-between">
                  <select
                    className={`border border-gray-300 rounded-lg py-2 px-3 ${
                      doctor.booked && "cursor-not-allowed opacity-50"
                    }`}
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    disabled={doctor.booked} // Disable select if booked
                  >
                    <option value="" disabled>
                      Select Time Slot
                    </option>
                    {doctor.availableTimeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => {
                      handleBookAppointment(doctor);
                      // Ensure doctor.booked is set to true
                    }}
                    className={`bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4 ${
                      doctor.booked && "cursor-not-allowed opacity-50"
                    }`}
                    disabled={doctor.booked} // Disable button if booked
                  >
                    {doctor.booked ? "Booked" : "Book Appointment"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Sidebar */}
        {isFilterOpen && (
          <div className="bg-gray-800 bg-opacity-50 fixed top-0 left-0 h-full w-full z-20 transition-opacity duration-300 ease-in-out">
            <div className="bg-white w-[300px] h-full fixed right-0 top-0 p-6 shadow-lg">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 text-xl absolute top-4 right-4"
              >
                &times;
              </button>
              <h3 className="text-xl font-semibold mb-4">Filter Results</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">
                    Distance
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Select distance</option>
                    <option>1 km</option>
                    <option>5 km</option>
                    <option>10 km</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600">
                    Availability
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Select availability</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>

                <button
                  className="w-full bg-yellow-500 text-white py-2 mt-6 rounded-lg"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Booking Confirmation Modal */}
        {isModalOpen && selectedDoctor && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-30 select-none">
            <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Booking Confirmed</h3>
              <p className="mb-2">
                Your appointment with <strong>{selectedDoctor?.name}</strong>{" "}
                has been booked.
              </p>
              <p className="mb-1">
                <strong>Updated wait time:</strong>{" "}
                {selectedDoctor?.estimatedWaitTime} minutes
              </p>
              <p className="mb-4">
                <strong>Current queue size:</strong>{" "}
                {selectedDoctor?.currentQueue} patients
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DoctorList;
