import React, { useState, useEffect } from "react";
// import carsData from "../../lib/carsData.json"; // Removed
import { supabase } from "../../lib/supabase"; // Import Supabase client
import iconRentDetails1 from "../../assets/images/icon-rent-details-1.svg";
import iconRentDetails2 from "../../assets/images/icon-rent-details-2.svg";
import iconRentDetails3 from "../../assets/images/icon-rent-details-3.svg";
import iconRentDetails4 from "../../assets/images/icon-rent-details-4.svg";
import iconRentDetails5 from "../../assets/images/icon-rent-details-5.svg";
import iconCalendar from "../../assets/images/icon-calendar.svg";
import iconPhone from "../../assets/images/icon-phone.svg";

const Inquiry = () => {
  const [loading, setLoading] = useState(false);
  const [carTypes, setCarTypes] = useState([]); // State for car types
  const [form, setForm] = useState({
    car_type: "",
    pickup_location: "",
    pickup_date: "",
    email: "",
    return_date: "",
  });

  // Fetch car types from Supabase on mount
  useEffect(() => {
    const fetchCarTypes = async () => {
      const { data, error } = await supabase
        .from('cars')
        .select('title')
        .eq('is_available', true);
      
      if (error) {
        console.error("Error fetching car types:", error);
      } else if (data) {
        // Remove year from title to get clean name if needed, or just use title
        // Deduplicate if necessary
        const types = Array.from(new Set(data.map(car => car.title.replace(/\b(19|20)\d{2}\b/, '').trim())));
        setCarTypes(types);
      }
    };

    fetchCarTypes();
  }, []);

  // Format date to YYYY-MM-DD for input fields
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "pickup_date" || name === "return_date") {
      // For date fields, ensure we're storing the date in a consistent format
      setForm({
        ...form,
        [name]: value,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.PUBLIC_API_URL}/api/inquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      const data = await response.json();
      console.log("Success:", data);
      setForm({
        car_type: "",
        pickup_location: "",
        pickup_date: "",
        email: "",
        return_date: "",
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/* Rent Details Section Start */}
      <div className="rent-details">
        <div className="container">
          {/* Filter Form Start */}
          <form onSubmit={handleSubmit}>
            <div className="row no-gutters align-items-center">
              <div className="col-md-12">
                <div className="rent-details-box">
                  <div className="rent-details-form">
                    {/* Rent Details Item Start */}
                    <div className="rent-details-item">
                      <div className="icon-box">
                        <img
                          src={iconRentDetails1.src}
                          alt="icon-rent-details-1"
                        />
                      </div>
                      <div className="rent-details-content">
                        <h3>Car</h3>
                        <select
                          name="car_type"
                          value={form.car_type}
                          onChange={handleChange}
                          className="rent-details-form form-select"
                          style={{ border: "none", outline: "none" }}
                        >
                          <option value="" disabled selected>
                            Choose Car Type
                          </option>
                          {carTypes.map((type, i) => (
                            <option value={type} key={i}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    {/* Rent Details Item End */}

                    {/* Rent Details Item Start */}
                    <div className="rent-details-item">
                      <div className="icon-box">
                        <img
                          src={iconRentDetails2.src}
                          alt="icon-rent-details-2"
                        />
                      </div>
                      <div className="rent-details-content">
                        <h3>pickup location</h3>
                        <select
                          name="pickup_location"
                          value={form.pickup_location}
                          onChange={handleChange}
                          className="rent-details-form form-select"
                          style={{ border: "none", outline: "none" }}
                        >
                          <option value="" disabled selected>
                            Pick Up Location
                          </option>
                          <option value="Home Delivery">Home Delivery</option>
                          <option value="self pickup">self pickup</option>
                        </select>
                      </div>
                    </div>
                    {/* Rent Details Item End */}

                    {/* Rent Details Item Start */}
                    <div className="rent-details-item">
                      <div className="icon-box">
                        <img
                          src={iconCalendar.src}
                          alt="icon-calendar"
                        />
                      </div>
                      <div className="rent-details-content">
                        <h3>pickup date</h3>
                        <p>
                          <input
                            type="date"
                            name="pickup_date"
                            value={form.pickup_date}
                            onChange={handleChange}
                            className="rent-details-form pickup-datepicker"
                            required
                            style={{ border: "none", outline: "none" }}
                          />
                        </p>
                      </div>
                    </div>
                    {/* Rent Details Item End */}
                    {/* Rent Details Item Start */}
                    <div className="rent-details-item">
                      <div className="icon-box">
                        <img
                          src={iconPhone.src}
                          alt="icon-phone"
                        />
                      </div>
                      <div className="rent-details-content">
                        <h3>Phone number</h3>
                        <p>
                          <input
                            type="number"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter number"
                            className=""
                            required
                            style={{
                              border: "none",
                              outline: "none",
                              padding: "0px 5px",
                              borderRadius: "5px",
                              boxShadow: "none",
                              backgroundColor: "transparent"
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    {/* Rent Details Item End */}

                    {/* Rent Details Item Start */}
                    <div className="rent-details-item">
                      <div className="icon-box">
                        <img
                          src={iconCalendar.src}
                          alt="icon-calendar"
                        />
                      </div>
                      <div className="rent-details-content">
                        <h3>Return Date</h3>
                        <p>
                          <input
                            type="date"
                            name="return_date"
                            value={form.return_date}
                            onChange={handleChange}
                            className="return-datepicker"
                            required
                            style={{ border: "none", outline: "none" }}
                          />
                        </p>
                      </div>
                    </div>
                    {/* Rent Details Item End */}

                    <div className="rent-details-item rent-details-search">
                      <button
                        type="submit"
                        style={{
                          padding: "15px",
                          backgroundColor: "#FF3600",
                          color: "#fff",
                          borderRadius: "50px",
                          border: "none",
                          width: "100%",
                        }}
                        disabled={loading}
                      >
                        {loading ? (
                          <i className="fa-solid fa-spinner fa-spin"></i>
                        ) : (
                          <i className="fa-solid fa-paper-plane"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Filter Form End */}
        </div>
      </div>
      {/* Rent Details Section End */}
    </>
  );
};

export default Inquiry;
