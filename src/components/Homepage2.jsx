import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPlane,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaSearch,
  FaChevronDown,
  FaExchangeAlt,
  FaArrowRight,
  FaSpinner,
  FaTimes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";
import flighthome from "../assets/flighthome.jpg";
import About from "./About";
import Features from "./Features";
import Price from "./Price";
import SpecialOffer from "./SpecialOffer";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

const Homepage2 = () => {
  // API Configuration
  // const API_BASE = "http://localhost:3000";
  const API_BASE = "https://celestian-backend.vercel.app"
  // const API_BASE = "https://gtlzbtm5-3000.inc1.devtunnels.ms/";
  

  const [tripType, setTripType] = useState("roundtrip");
  const [formData, setFormData] = useState({
    class: "Economy", 
    from: "",
    to: "",
    departure: "",
    returnDate: "",
    tripType: 1,
    adults: 1,
    children: 0,
    infants: 0,
    serType: 1, // 1: Domestic, 2: International
    cabin: "E", // E: Economy, B: Business, F: First
    fareType: "A", // A: All/Any (default)
  });

  const [dropdowns, setDropdowns] = useState({
    class: false,
    from: false,
    to: false,
  });

  // API Integration States
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");

  // Dropdown Data States
  const [locations, setLocations] = useState([]);
  const [isLoadingLocations, setIsLoadingLocations] = useState(false);

  // Passengers are controlled inline; class kept as default string

  // Load locations on component mount
  useEffect(() => {
    fetchLocations();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Enhanced API Integration Functions
  const getToken = async () => {
    try {
      console.log("Fetching token...");
      setDebugInfo("Starting token fetch...");

      const response = await fetch(`${API_BASE}/api/getToken`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });

      console.log("Token response:", response);

      setDebugInfo(`Response status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        setDebugInfo(`HTTP Error: ${response.status} - ${errorText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        setDebugInfo(`Non-JSON response: ${text.substring(0, 200)}`);
        throw new Error(
          "Server returned non-JSON response. Please check backend server."
        );
      }

      const data = await response.json();
      console.log(data);

      setDebugInfo(`Token response: ${JSON.stringify(data?.data?.data)}`);

      if (data.success) {
        console.log("Token obtained successfully");
        // If backend returns a token, store it
        if (data?.data?.data) {
          storeTokenInLocalStorage(data);
          return data.data.data;
        }
        // If backend handles token via cookies/sessions, just return true
        return true;
      } else {
        throw new Error(data.message || "Failed to get token from server");
      }
    } catch (error) {
      console.error("Error getting token:", error);
      setDebugInfo(`Token error: ${error.message}`);
      throw new Error(`Token fetch failed: ${error.message}`);
    }
  };

  // Get token from localStorage
  const getTokenFromLocalStorage = () => {
    try {
      const tokenData = localStorage.getItem("flightToken");
      console.log(tokenData);

      if (!tokenData) {
        setDebugInfo("No token found in localStorage");
        return null;
      }

      // const parsedToken = JSON.parse(tokenData);
      // console.log(parsedToken);

      // Check if token is expired
      // if (tokenData.expiry && new Date().getTime() > parsedToken.expiry) {
      //   localStorage.removeItem("flightToken");
      //   setDebugInfo("Token expired, removed from localStorage");
      //   return null;
      // }

      setDebugInfo(
        `Token found in localStorage: ${tokenData ? "Valid" : "Invalid"}`
      );
      return tokenData || null;
    } catch (error) {
      console.error("Error reading token from localStorage:", error);
      setDebugInfo(`LocalStorage token error: ${error.message}`);
      return null;
    }
  };

  // Store token in localStorage
  const storeTokenInLocalStorage = (token, expiresInMinutes = 60) => {
    try {
      console.log(token);

      const expiryTime = new Date().getTime() + expiresInMinutes * 60 * 1000;
      const tokenData = {
        token: token?.data?.data,
        expiry: expiryTime,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("flightToken", JSON.stringify(tokenData));
      setDebugInfo("Token stored in localStorage successfully");
      console.log("Token stored:", tokenData);
    } catch (error) {
      console.error("Error storing token in localStorage:", error);
      setDebugInfo(`Token storage error: ${error.message}`);
    }
  };

  // Clear token from localStorage
  const clearTokenFromLocalStorage = () => {
    try {
      localStorage.removeItem("flightToken");
      setDebugInfo("Token cleared from localStorage");
    } catch (error) {
      console.error("Error clearing token from localStorage:", error);
    }
  };

  // Test token function - simplified version
  const testToken = async () => {
    try {
      // First check localStorage
      const localToken = getTokenFromLocalStorage();
      console.log(localToken);

      if (localToken) {
        setDebugInfo("Valid token found in localStorage");
        return true;
      }

      // If no token in localStorage, fetch new one
      setDebugInfo("No token in localStorage, fetching new token...");
      await getToken();

      // Check again if token is now available
      const newTokenCheck = getTokenFromLocalStorage();
      if (newTokenCheck) {
        setDebugInfo("New token obtained and stored successfully");
        return true;
      }

      // If backend uses cookies/sessions, the token might be handled there
      // So we'll assume getToken() was successful
      setDebugInfo("Token should be available via session/cookie");
      return true;
    } catch (error) {
      console.error("Error in testToken:", error);
      setDebugInfo(`testToken error: ${error.message}`);
      return false;
    }
  };

  const fetchLocations = async () => {
    try {
      setIsLoadingLocations(true);
      // Static locations data
      const staticLocations = [
        {
          code: "DEL",
          name: "New Delhi",
          airport: "Indira Gandhi Intl",
          country: "India",
        },
        {
          code: "BOM",
          name: "Mumbai",
          airport: "Chhatrapati Shivaji Intl",
          country: "India",
        },
        {
          code: "BLR",
          name: "Bangalore",
          airport: "Kempegowda Intl",
          country: "India",
        },
        {
          code: "MAA",
          name: "Chennai",
          airport: "Chennai Intl",
          country: "India",
        },
        {
          code: "CCU",
          name: "Kolkata",
          airport: "Netaji Subhash Chandra Bose Intl",
          country: "India",
        },
        {
          code: "HYD",
          name: "Hyderabad",
          airport: "Rajiv Gandhi Intl",
          country: "India",
        },
        { code: "DXB", name: "Dubai", airport: "Dubai Intl", country: "UAE" },
        {
          code: "AUH",
          name: "Abu Dhabi",
          airport: "Abu Dhabi Intl",
          country: "UAE",
        },
        { code: "LHR", name: "London", airport: "Heathrow", country: "UK" },
        {
          code: "JFK",
          name: "New York",
          airport: "John F. Kennedy Intl",
          country: "USA",
        },
        {
          code: "LAX",
          name: "Los Angeles",
          airport: "Los Angeles Intl",
          country: "USA",
        },
        {
          code: "SIN",
          name: "Singapore",
          airport: "Changi",
          country: "Singapore",
        },
        {
          code: "BKK",
          name: "Bangkok",
          airport: "Suvarnabhumi Intl",
          country: "Thailand",
        },
        {
          code: "KUL",
          name: "Kuala Lumpur",
          airport: "Kuala Lumpur Intl",
          country: "Malaysia",
        },
        { code: "NRT", name: "Tokyo", airport: "Narita", country: "Japan" },
        {
          code: "ICN",
          name: "Seoul",
          airport: "Incheon",
          country: "South Korea",
        },
        {
          code: "CDG",
          name: "Paris",
          airport: "Charles de Gaulle",
          country: "France",
        },
        {
          code: "FRA",
          name: "Frankfurt",
          airport: "Frankfurt",
          country: "Germany",
        },
        {
          code: "AMS",
          name: "Amsterdam",
          airport: "Schiphol",
          country: "Netherlands",
        },
        {
          code: "SYD",
          name: "Sydney",
          airport: "Sydney Kingsford Smith",
          country: "Australia",
        },
      ];

      setLocations(staticLocations);
    } catch (error) {
      console.error("Error fetching locations:", error);
      setError("Failed to load locations");
    } finally {
      setIsLoadingLocations(false);
    }
  };

  const searchFlights = async (searchData) => {
    try {
      console.log("Searching flights with data:", searchData);
      setDebugInfo(`Search request: ${JSON.stringify(searchData)}`);

      // Get token from localStorage if available
      const token = getTokenFromLocalStorage();
      console.log(token);

      // const requestBody = { ...searchData };

      // Only add token to request if we have one
      // if (token) {
      //   requestBody.token = token;
      //   setDebugInfo("Including token in search request");
      // } else {
      //   setDebugInfo("No token available, proceeding without token");
      // }

      // const response = await fetch(`${API_BASE}/api/postSearchFlight`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: token ,
      // });

      const response = await fetch(`${API_BASE}/api/postSearchFlight`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,      // send token as part of JSON body
          ...searchData, // optionally include other search fields
        }),
      });
      

      setDebugInfo(`Search response status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        setDebugInfo(`Search HTTP Error: ${response.status} - ${errorText}`);

        // If unauthorized, clear invalid token
        if (response.status === 401) {
          clearTokenFromLocalStorage();
          setDebugInfo("Token invalid, removed from localStorage");
          throw new Error("Session expired. Please try again.");
        }

        throw new Error(`Search failed with status: ${response.status}`);
      }

      const data = await response.json();
      setDebugInfo(`Search results: ${data.count || 0} flights found`);

      if (data.success) {
        return data.data;
      }
      throw new Error(data.message || "Search failed");
    } catch (error) {
      console.error("Error searching flights:", error);
      setDebugInfo(`Search error: ${error.message}`);
      throw error;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSearchResults([]);
    setShowResults(false);
    setDebugInfo("Starting search process...");

    try {
      // Validate form data
      if (!formData.from || !formData.to || !formData.departure) {
        throw new Error(
          "Please fill in all required fields (From, To, and Departure Date)"
        );
      }

      // Try to ensure we have a token, but don't fail if we don't
      // (backend might handle authentication differently)
      try {
        await testToken();
        setDebugInfo("Token check completed");
      } catch (tokenError) {
        console.warn("Token check warning:", tokenError);
        setDebugInfo(
          `Token warning: ${tokenError.message} - proceeding anyway`
        );
        // Continue with search even if token fails - backend might handle auth differently
      }

      // Find airport codes from selected locations
      const fromLocation = locations.find(
        (loc) =>
          `${loc.name} (${loc.code})` === formData.from ||
          `${loc.name}, ${loc.country} (${loc.code})` === formData.from
      );
      const toLocation = locations.find(
        (loc) =>
          `${loc.name} (${loc.code})` === formData.to ||
          `${loc.name}, ${loc.country} (${loc.code})` === formData.to
      );

      if (!fromLocation || !toLocation) {
        throw new Error(
          "Please select valid departure and arrival locations from the dropdown"
        );
      }

      // Backend payload as per spec
      const formatDate = (iso) => (iso ? iso.replaceAll('-', '') : '');
      const searchData = {
        tripType: tripType === 'roundtrip' ? 2 : 1,
        serType: formData.serType,
        depCity: fromLocation.code,
        arrCity: toLocation.code,
        onDate: formatDate(formData.departure),
        reDate: tripType === 'roundtrip' ? formatDate(formData.returnDate) : '',
        adt: formData.adults,
        chd: formData.children,
        inf: formData.infants,
        cabin: formData.cabin,
        fareType: formData.fareType,
      };

      setDebugInfo(`Sending search request: ${JSON.stringify(searchData)}`);
      const results = await searchFlights(searchData);

      if (results && results.results) {
        setSearchResults(results.results);
        setShowResults(true);
        setDebugInfo(
          `Search completed: ${results.results.length} flights found`
        );
      } else {
        throw new Error("No flight results received from server");
      }
    } catch (error) {
      console.error("Search error:", error);
      setError(error.message);
      setDebugInfo(`Final error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const selectOption = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setDropdowns((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const swapLocations = () => {
    setFormData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }));
  };

  // Set minimum date for departure as today
  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  // Set minimum return date as departure date
  const getMinReturnDate = () => {
    return formData.departure || getTodayDate();
  };

  // Helpers to render API date/time and durations from API format
  const formatApiDateTime = (str) => {
    if (!str || str.length < 12) return 'N/A';
    const y = Number(str.slice(0, 4));
    const m = Number(str.slice(4, 6)) - 1;
    const d = Number(str.slice(6, 8));
    const hh = Number(str.slice(8, 10));
    const mm = Number(str.slice(10, 12));
    const dt = new Date(y, m, d, hh, mm);
    return dt.toLocaleString(undefined, { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  };

  const minutesToHm = (minsStr) => {
    const mins = Number(minsStr || 0);
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
  };

  const getSegments = (leg) => {
    if (!leg) return [];
    const vals = Array.isArray(leg) ? leg : Object.values(leg);
    return vals.filter((s) => s && s.flightNo);
  };

  const getStopsText = (leg) => {
    const segs = getSegments(leg);
    const stops = Math.max(0, segs.length - 1);
    if (stops === 0) return 'Non-stop';
    const vias = segs.slice(0, -1).map((s) => s.arrCode).join(', ');
    return `${stops} Stop${stops > 1 ? 's' : ''}${vias ? ` via ${vias}` : ''}`;
  };

  // const getSegmentDurationsText = (leg) => {
  //   const segs = getSegments(leg);
  //   if (!segs.length) return '';
  //   return segs.map((s) => minutesToHm(s.duration)).join(' + ');
  // };

  const getTotalDurationMinutes = (leg) => {
    if (!leg) return 0;
    if (leg.durTotal) return Number(leg.durTotal);
    const segs = getSegments(leg);
    return segs.reduce((sum, s) => sum + Number(s.duration || 0), 0);
  };

  return (
    <div>
      <div
        className="min-h-screen md:pb-0 pb-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${flighthome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/20 bg-opacity-20"></div>

        {/* Background Airplane */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute md:top-13 top-11 right-10 w-96 h-96 opacity-80"
            initial={{ x: 100, y: -50, rotate: 15 }}
            animate={{ x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <FaPlane className="text-9xl text-black" />
          </motion.div>
        </div>

        {/* Debug Info - Remove in production */}
        {/* {process.env.NODE_ENV === "development" && debugInfo && (
          <div className="fixed top-4 left-4 right-4 bg-yellow-100 border border-yellow-400 rounded-lg p-3 z-50 max-w-md">
            <div className="flex items-start">
              <FaInfoCircle className="text-yellow-600 mt-1 mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold text-yellow-800 text-sm">
                  Debug Info
                </h4>
                <p className="text-yellow-700 text-xs break-words">
                  {debugInfo}
                </p>
              </div>
              <button
                onClick={() => setDebugInfo("")}
                className="text-yellow-600 hover:text-yellow-800 ml-2"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )} */}

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-14 pt-8">
          <div className="flex flex-col items-center">
            {/* Main Heading */}
            <motion.h1
              className="text-[42px] md:text-6xl font-bold text-white text-center md:mb-13 mb-15"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Ready to take off?
            </motion.h1>

            {/* Flight Booking Card */}
            <motion.div
  className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-6 sm:p-9 relative border-2 border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Dashed border effect */}
  <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-2 border-l-4 border-dashed border-gray-400"></div>
  <div className="absolute right-0 top-0 bottom-0 w-1 sm:w-2 border-r-4 border-dashed border-gray-400"></div>

              {/* Trip Type Tabs and Class/Travelers */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
                {/* Trip Type Tabs */}
    <div className="flex flex-wrap sm:flex-nowrap space-x-2">
                  {[
                    { id: "roundtrip", label: "Round Trip" },
                    
                  ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setTripType(tab.id)}
          className={`px-5 py-2 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base ${
                        tripType === tab.id
                          ? "bg-gray-800 text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

    {/* Passengers: Adults / Children / Infants */}
    <div className="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3">
      {/* Row 1 on mobile: Adults + Children (Infants hidden) */}
      <div className="flex items-center gap-3">
        {/* Adults */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-sm text-gray-600">Adults</span>
          <div className="flex items-center space-x-2">
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, adults: Math.max(1, v.adults - 1), infants: Math.min(Math.max(0, v.infants), Math.max(1, v.adults - 1)) }))}>-</button>
            <span className="min-w-[1.5rem] text-center">{formData.adults}</span>
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, adults: Math.min(9, v.adults + 1) }))}>+</button>
          </div>
        </div>

        {/* Children */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="text-sm text-gray-600">Children</span>
          <div className="flex items-center space-x-2">
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, children: Math.max(0, v.children - 1) }))} disabled={formData.adults < 1}>-</button>
            <span className="min-w-[1.5rem] text-center">{formData.children}</span>
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, children: Math.min(9, v.children + 1) }))} disabled={formData.adults < 1}>+</button>
          </div>
        </div>

        {/* Infants on tablet/desktop inline */}
        <div className="hidden sm:flex items-center space-x-2 shrink-0">
          <span className="text-sm text-gray-600">Infants</span>
          <div className="flex items-center space-x-2">
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, infants: Math.max(0, v.infants - 1) }))} disabled={formData.adults < 1}>-</button>
            <span className="min-w-[1.5rem] text-center">{formData.infants}</span>
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, infants: Math.min(v.adults, v.infants + 1) }))} disabled={formData.adults < 1}>+</button>
                            </div>
                        </div>
                    </div>

      {/* Row 2 on mobile: Infants alone */}
      <div className="flex items-center gap-3 mt-2 sm:hidden">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Infants</span>
          <div className="flex items-center space-x-2">
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, infants: Math.max(0, v.infants - 1) }))} disabled={formData.adults < 1}>-</button>
            <span className="min-w-[1.5rem] text-center">{formData.infants}</span>
            <button type="button" className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700" onClick={() => setFormData(v => ({ ...v, infants: Math.min(v.adults, v.infants + 1) }))} disabled={formData.adults < 1}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSearch}>
     {/* From, To, Trip Type, Service Type, Cabin, Fare and Dates */}
     <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-end gap-4">
                  {/* From Location */}
                  <motion.div
        className="relative flex-1 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
          From <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-lg" />
                      <input
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={handleInputChange}
            placeholder="Select departure location"
                        className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 text-gray-700 cursor-pointer"
                        onClick={() => toggleDropdown("from")}
                        readOnly
            required
                      />
                      <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />

                      {dropdowns.from && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
              {isLoadingLocations ? (
                <div className="px-4 py-2 text-center text-gray-500">
                  <FaSpinner className="animate-spin mx-auto mb-2" />
                  Loading locations...
                </div>
              ) : (
                locations.map((location, index) => (
                            <div
                              key={index}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
                    onClick={() =>
                      selectOption("from", `${location.name} (${location.code})`)
                    }
                  >
                    <div className="font-semibold">
                      {location.name} ({location.code})
                    </div>
                    <div className="text-xs text-gray-500">
                      {location.airport}, {location.country}
                    </div>
                            </div>
                ))
              )}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Swap Button */}
                  <motion.div
        className="flex justify-center w-full sm:w-auto"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <motion.button
                      type="button"
                      onClick={swapLocations}
                      className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExchangeAlt className="text-gray-600 text-base" />
                    </motion.button>
                  </motion.div>

                  {/* To Location */}
                  <motion.div
        className="relative flex-1 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
          To <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaPlane className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-lg" />
                      <input
                        type="text"
                        name="to"
                        value={formData.to}
                        onChange={handleInputChange}
            placeholder="Select arrival location"
                        className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 text-gray-700 cursor-pointer"
                        onClick={() => toggleDropdown("to")}
                        readOnly
            required
                      />
                      <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />

                      {dropdowns.to && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
              {isLoadingLocations ? (
                <div className="px-4 py-2 text-center text-gray-500">
                  <FaSpinner className="animate-spin mx-auto mb-2" />
                  Loading locations...
                </div>
              ) : (
                locations.map((location, index) => (
                            <div
                              key={index}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b border-gray-100 last:border-b-0"
                    onClick={() =>
                      selectOption("to", `${location.name} (${location.code})`)
                    }
                  >
                    <div className="font-semibold">
                      {location.name} ({location.code})
                    </div>
                    <div className="text-xs text-gray-500">
                      {location.airport}, {location.country}
                    </div>
                            </div>
                ))
              )}
                        </div>
                      )}
                    </div>
                  </motion.div>

       {/* Trip Type (hidden, driven by tabs) + Service Type */}
       <div className="flex items-end gap-4 w-full sm:w-auto">
         {/* Service Type */}
         <div className="flex-1">
           <label className="block text-sm font-semibold text-gray-700 mb-2">
             Service Type
           </label>
           <select
             name="serType"
             value={formData.serType}
             onChange={handleInputChange}
             className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-700"
           >
             <option value={1}>Domestic</option>
             <option value={2}>International</option>
           </select>
         </div>

         {/* Cabin */}
         <div className="flex-1">
           <label className="block text-sm font-semibold text-gray-700 mb-2">
             Cabin
           </label>
           <select
             name="cabin"
             value={formData.cabin}
             onChange={handleInputChange}
             className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-700"
           >
             <option value="E">Economy</option>
             <option value="B">Business</option>
             <option value="F">First</option>
           </select>
         </div>

         {/* Fare Type */}
         <div className="flex-1">
           <label className="block text-sm font-semibold text-gray-700 mb-2">
             Fare Type
           </label>
           <select
             name="fareType"
             value={formData.fareType}
             onChange={handleInputChange}
             className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-gray-700"
           >
             <option value="A">All</option>
             <option value="R">Refundable</option>
             <option value="N">Non-Refundable</option>
           </select>
         </div>
       </div>

      {/* Departure Date */}
                  <motion.div
        className="relative flex-1 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
          Departure Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-lg" />
                      <input
                        type="date"
                        name="departure"
                        value={formData.departure}
                        onChange={handleInputChange}
            min={getTodayDate()}
            className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 text-gray-700"
            required
          />
        </div>
      </motion.div>

      {/* Return Date (Round Trip Only) */}
      {tripType === "roundtrip" && (
        <motion.div
          className="relative flex-1 w-full"
          
        >
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Return Date
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-lg" />
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              min={getMinReturnDate()}
                        className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-gray-50 text-gray-700"
                      />
                    </div>
                  </motion.div>
      )}
                </div>

    {/* Find Flights Button */}
                <motion.div
      className="flex justify-center sm:justify-end mt-7"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <motion.button
                    type="submit"
        disabled={isLoading}
        className={`w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg hover:shadow-xl ${
          isLoading ? "opacity-75 cursor-not-allowed" : ""
        }`}
        whileHover={!isLoading ? { scale: 1.05 } : {}}
        whileTap={!isLoading ? { scale: 0.95 } : {}}
      >
        {isLoading ? (
          <>
            <FaSpinner className="text-lg animate-spin" />
            <span>Searching Flights...</span>
          </>
        ) : (
          <>
            <span>Find Flights</span>
                    <FaSearch className="text-lg" />
          </>
        )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mx-4 mt-4 max-w-5xl mx-auto">
          <div className="flex items-center">
            <FaExclamationTriangle className="text-red-500 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-red-700 font-semibold">Search Error</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="ml-4 text-red-500 hover:text-red-700 flex-shrink-0"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* Flight Search Results */}
      {showResults && (
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Flights ({searchResults.length} found)
              </h2>
              <button
                onClick={() => setShowResults(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-8">
                <FaPlane className="text-4xl text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No Flights Found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria or dates.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {searchResults.map((flight, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="grid grid-cols-1 xl:grid-cols-[1.8fr_1fr] gap-6">
                      {/* Flight Details */}
                      <div className="flex flex-col gap-4">
                        {/* Onward Flight */}
                        <div className="border border-gray-100 rounded-lg p-3 sm:p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold">Onward</span>
                              <span className="text-xs text-gray-500">{getStopsText(flight.Flights?.Onward)}</span>
                            </div>
                            <div className="text-xs text-gray-400">Total duration: {minutesToHm(getTotalDurationMinutes(flight.Flights?.Onward))}</div>
                          </div>

                          <div className="flex flex-col gap-3">
                            {getSegments(flight.Flights?.Onward).map((segment, segIndex) => (
                              <div key={segIndex} className="grid grid-cols-3 gap-2 items-start">
                                <div className="text-left">
                                  <div className="text-lg font-bold text-gray-900">{segment.depCode}</div>
                                  <div className="text-xs text-gray-500">{formatApiDateTime(segment.depDate)}</div>
                                  <div className="text-[10px] text-gray-400">{segment.depCName} • {segment.depAName}{segment.depTer ? ` • T${segment.depTer}` : ''}</div>
                                </div>
                                <div className="text-center">
                                  <FaPlane className="text-blue-600 text-sm mx-auto" />
                                  <div className="text-xs text-gray-500 mt-1">{segment.airName || 'Unknown Airline'}</div>
                                  <div className="text-xs text-gray-500">{segment.flightNo || 'N/A'}</div>
                                  <div className="text-[10px] text-gray-400">Cabin {segment.cabin} • Fare {segment.fareClass}</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-lg font-bold text-gray-900">{segment.arrCode}</div>
                                  <div className="text-xs text-gray-500">{formatApiDateTime(segment.arrDate)}</div>
                                  <div className="text-[10px] text-gray-400">{segment.arrCName} • {segment.arrAName}{segment.arrTer ? ` • T${segment.arrTer}` : ''}</div>
                                </div>
                                <div className="col-span-3 text-[11px] text-gray-500">Segment duration: {minutesToHm(segment.duration)}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Return Flight (if round trip) */}
                        {tripType === "roundtrip" && flight.Flights?.Return && (
                          <div className="border border-gray-100 rounded-lg p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold">Return</span>
                                <span className="text-xs text-gray-500">{getStopsText(flight.Flights?.Return)}</span>
                              </div>
                              <div className="text-xs text-gray-400">Total duration: {minutesToHm(getTotalDurationMinutes(flight.Flights?.Return))}</div>
                            </div>

                            <div className="flex flex-col gap-3">
                              {getSegments(flight.Flights?.Return).map((segment, segIndex) => (
                                <div key={segIndex} className="grid grid-cols-3 gap-2 items-start">
                                  <div className="text-left">
                                    <div className="text-lg font-bold text-gray-900">{segment.depCode}</div>
                                    <div className="text-xs text-gray-500">{formatApiDateTime(segment.depDate)}</div>
                                    <div className="text-[10px] text-gray-400">{segment.depCName} • {segment.depAName}{segment.depTer ? ` • T${segment.depTer}` : ''}</div>
                                  </div>
                                  <div className="text-center">
                                    <FaPlane className="text-blue-600 text-sm mx-auto" />
                                    <div className="text-xs text-gray-500 mt-1">{segment.airName || 'Unknown Airline'}</div>
                                    <div className="text-xs text-gray-500">{segment.flightNo || 'N/A'}</div>
                                    <div className="text-[10px] text-gray-400">Cabin {segment.cabin} • Fare {segment.fareClass}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-lg font-bold text-gray-900">{segment.arrCode}</div>
                                    <div className="text-xs text-gray-500">{formatApiDateTime(segment.arrDate)}</div>
                                    <div className="text-[10px] text-gray-400">{segment.arrCName} • {segment.arrAName}{segment.arrTer ? ` • T${segment.arrTer}` : ''}</div>
                                  </div>
                                  <div className="col-span-3 text-[11px] text-gray-500">Segment duration: {minutesToHm(segment.duration)}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Price and Booking */}
                      <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-center mb-4">
                            <div className="text-2xl font-bold text-blue-600">
                              ₹{flight.Fare?.total?.total || "N/A"}
                            </div>
                            <div className="text-sm text-gray-500">
                              Total Price
                            </div>
                          </div>

                          <div className="space-y-2 mb-4 text-sm">
                            <div className="flex justify-between">
                              <span>Base Fare:</span>
                              <span>₹{flight.Fare?.total?.base || "N/A"}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Taxes & Fees:</span>
                              <span>₹{flight.Fare?.total?.tax || "N/A"}</span>
                            </div>
                            <div className="flex justify-between font-semibold border-t pt-2">
                              <span>Total:</span>
                              <span>₹{flight.Fare?.total?.total || "N/A"}</span>
                            </div>
                          </div>

                          {/* Fare & Validation quick info */}
                          <div className="mb-4 text-xs text-gray-600 space-y-2">
                            <div className="flex justify-between">
                            {flight.Fare?.bagCkin && <div>Check-in: {flight.Fare.bagCkin}</div>}
                            {flight.Fare?.bagCbin && <div>Cabin: {flight.Fare.bagCbin}</div>}
                            </div>
                            <div className="flex justify-between">
                            <div>Refund: {flight.Fare?.refundType === 'P' ? 'Partially Refundable' : flight.Fare?.refundType === 'N' ? 'Non-Refundable' : 'Refundable'}</div>
                            <div>LCC: {flight.Validation?.lcc === '1' ? 'Yes' : 'No'} • Free Meal: {flight.Validation?.freeMeal === '1' ? 'Yes' : 'No'}</div>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              setSelectedFlight(flight);
                              setShowBookingModal(true);
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                          >
                            Book Flight
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Rest of your components */}
      <Features />
      <SpecialOffer />
      <Price />
      <About />
      <Services />
      <Testimonials />
      <Faq />

      {/* Flight Booking Modal */}
      {showBookingModal && selectedFlight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {/* Modal content remains the same as your original */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                Flight Booking Details
              </h2>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6">
              {/* Your existing booking modal content */}
              <div className="text-center py-8">
                <FaInfoCircle className="text-4xl text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Booking Feature
                </h3>
                <p className="text-gray-500 mt-2">
                  Flight booking functionality will be implemented in the next
                  phase.
                </p>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Homepage2;


