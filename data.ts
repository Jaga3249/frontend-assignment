interface Location {
  city: string;
  state: string;
  zipCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  address: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  location: Location;
  distance: number;
  currentQueue: number;
  estimatedWaitTime: string;
  ratings: number;
  availableTimeSlots: string[];
  booked: boolean;
}

export const doctorLists: Doctor[] = [
  // Bhubaneswar
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      zipCode: "751024",
      coordinates: { latitude: 20.2961, longitude: 85.8245 },
      address: "123 Main Road, Bhubaneswar",
    },
    distance: 5,
    currentQueue: 3,
    estimatedWaitTime: "15 mins",
    ratings: 4.8,
    availableTimeSlots: ["10:00 AM", "11:30 AM", "02:00 PM"],
    booked: false,
  },
  {
    id: 2,
    name: "Dr. Amit Sahu",
    specialty: "Cardiologist",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      zipCode: "751024",
      coordinates: { latitude: 20.2961, longitude: 85.8245 },
      address: "456 Central Avenue, Bhubaneswar",
    },
    distance: 6,
    currentQueue: 2,
    estimatedWaitTime: "10 mins",
    ratings: 4.7,
    availableTimeSlots: ["09:00 AM", "12:00 PM", "03:00 PM"],
    booked: false,
  },
  {
    id: 3,
    name: "Dr. Ananya Das",
    specialty: "Pediatrician",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      zipCode: "751024",
      coordinates: { latitude: 20.2961, longitude: 85.8245 },
      address: "789 Park Street, Bhubaneswar",
    },
    distance: 5,
    currentQueue: 1,
    estimatedWaitTime: "5 mins",
    ratings: 4.9,
    availableTimeSlots: ["10:30 AM", "01:00 PM", "04:00 PM"],
    booked: true,
  },
  {
    id: 4,
    name: "Dr. Rajiv Mishra",
    specialty: "Pediatrician",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      zipCode: "751024",
      coordinates: { latitude: 20.2961, longitude: 85.8245 },
      address: "321 Elm Street, Bhubaneswar",
    },
    distance: 7,
    currentQueue: 3,
    estimatedWaitTime: "20 mins",
    ratings: 4.6,
    availableTimeSlots: ["10:00 AM", "12:00 PM", "03:00 PM"],
    booked: false,
  },
  {
    id: 5,
    name: "Dr. Suresh Patnaik",
    specialty: "Orthopedic Surgeon",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      zipCode: "751024",
      coordinates: { latitude: 20.2961, longitude: 85.8245 },
      address: "234 Maple Lane, Bhubaneswar",
    },
    distance: 4,
    currentQueue: 2,
    estimatedWaitTime: "10 mins",
    ratings: 4.7,
    availableTimeSlots: ["09:00 AM", "11:00 AM", "03:00 PM"],
    booked: true,
  },
  {
    id: 6,
    name: "Dr. Meera Mohanty",
    specialty: "Orthopedic Surgeon",
    location: {
      city: "Bhubaneswar",
      state: "Odisha",
      zipCode: "751024",
      coordinates: { latitude: 20.2961, longitude: 85.8245 },
      address: "567 Pine Drive, Bhubaneswar",
    },
    distance: 5,
    currentQueue: 1,
    estimatedWaitTime: "5 mins",
    ratings: 4.8,
    availableTimeSlots: ["10:00 AM", "12:30 PM", "04:00 PM"],
    booked: false,
  },

  // Cuttack
  {
    id: 7,
    name: "Dr. Suman Reddy",
    specialty: "Dermatologist",
    location: {
      city: "Cuttack",
      state: "Odisha",
      zipCode: "753014",
      coordinates: { latitude: 20.4625, longitude: 85.8828 },
      address: "891 Willow Street, Cuttack",
    },
    distance: 12,
    currentQueue: 4,
    estimatedWaitTime: "25 mins",
    ratings: 4.4,
    availableTimeSlots: ["10:00 AM", "01:00 PM", "04:00 PM"],
    booked: true,
  },
  {
    id: 8,
    name: "Dr. Rajiv Mishra",
    specialty: "Dermatologist",
    location: {
      city: "Cuttack",
      state: "Odisha",
      zipCode: "753014",
      coordinates: { latitude: 20.4625, longitude: 85.8828 },
      address: "123 Ash Street, Cuttack",
    },
    distance: 13,
    currentQueue: 5,
    estimatedWaitTime: "30 mins",
    ratings: 4.5,
    availableTimeSlots: ["09:30 AM", "12:00 PM", "03:30 PM"],
    booked: false,
  },
  {
    id: 9,
    name: "Dr. Rakesh Nayak",
    specialty: "Neurologist",
    location: {
      city: "Cuttack",
      state: "Odisha",
      zipCode: "753014",
      coordinates: { latitude: 20.4625, longitude: 85.8828 },
      address: "567 Birch Lane, Cuttack",
    },
    distance: 14,
    currentQueue: 3,
    estimatedWaitTime: "20 mins",
    ratings: 4.8,
    availableTimeSlots: ["09:00 AM", "12:00 PM", "03:00 PM"],
    booked: true,
  },
  {
    id: 10,
    name: "Dr. Smita Panda",
    specialty: "Neurologist",
    location: {
      city: "Cuttack",
      state: "Odisha",
      zipCode: "753014",
      coordinates: { latitude: 20.4625, longitude: 85.8828 },
      address: "345 Oak Avenue, Cuttack",
    },
    distance: 15,
    currentQueue: 2,
    estimatedWaitTime: "10 mins",
    ratings: 4.7,
    availableTimeSlots: ["10:00 AM", "01:30 PM", "04:00 PM"],
    booked: false,
  },

  // Rourkela
  {
    id: 13,
    name: "Dr. Ananya Das",
    specialty: "Cardiologist",
    location: {
      city: "Rourkela",
      state: "Odisha",
      zipCode: "769001",
      coordinates: { latitude: 22.2271, longitude: 84.8648 },
      address: "234 Palm Street, Rourkela",
    },
    distance: 8,
    currentQueue: 1,
    estimatedWaitTime: "5 mins",
    ratings: 4.9,
    availableTimeSlots: ["10:30 AM", "01:00 PM", "04:00 PM"],
    booked: true,
  },
  {
    id: 14,
    name: "Dr. Amit Ranjan",
    specialty: "Cardiologist",
    location: {
      city: "Rourkela",
      state: "Odisha",
      zipCode: "769001",
      coordinates: { latitude: 22.2271, longitude: 84.8648 },
      address: "678 Cedar Drive, Rourkela",
    },
    distance: 9,
    currentQueue: 3,
    estimatedWaitTime: "20 mins",
    ratings: 4.7,
    availableTimeSlots: ["10:00 AM", "12:30 PM", "04:30 PM"],
    booked: false,
  },
  {
    id: 15,
    name: "Dr. Seema Dash",
    specialty: "Dermatologist",
    location: {
      city: "Rourkela",
      state: "Odisha",
      zipCode: "769001",
      coordinates: { latitude: 22.2271, longitude: 84.8648 },
      address: "456 Redwood Lane, Rourkela",
    },
    distance: 10,
    currentQueue: 2,
    estimatedWaitTime: "15 mins",
    ratings: 4.5,
    availableTimeSlots: ["09:30 AM", "01:00 PM", "03:30 PM"],
    booked: false,
  },
];
