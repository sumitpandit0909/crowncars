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
import iconUser from "../../assets/images/icon-user.svg";

const Inquiry = () => {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carTypes, setCarTypes] = useState([]); // State for car types
  const [form, setForm] = useState({
    full_name: "",
    car_type: "",
    pickup_location: "",
    pickup_date: "",
    number: "",
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

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        full_name: "",
        car_type: "",
        pickup_location: "",
        pickup_date: "",
        number: "",
        return_date: "",
      });
      setIsModalOpen(false); // Close modal on success
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    // Basic validation of row fields before opening modal
    if (!form.car_type || !form.pickup_location || !form.pickup_date || !form.return_date) {
      alert("Please fill in all search details.");
      return;
    }
    setIsModalOpen(true);
  };
  return (
    <>
      {/* Rent Details Section Start */}
      <div className="rent-details">
        <div className="container">
          {/* Filter Form Start */}
          <form onSubmit={handleOpenModal}>
            <div className="row no-gutters align-items-center">
              <div className="col-md-12">
                <div 
                  className="rent-details-box" 
                  style={{ 
                    border: "0.5px solid rgba(255, 255, 255, 0.1)", 
                    borderRadius: isMobile ? "30px" : "60px", 
                    padding: isMobile ? "25px 20px" : "12px 30px", 
                    margin: "0 auto", 
                    width: isMobile ? "100%" : "auto", 
                    minWidth: isMobile ? "auto" : "max-content",
                    maxWidth: "1170px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <div 
                    className="rent-details-form" 
                    style={{ 
                      display: "flex", 
                      flexDirection: isMobile ? "column" : "row",
                      flexWrap: "wrap",
                      justifyContent: "center", 
                      alignItems: "stretch", 
                      gap: isMobile ? "20px" : "0", 
                      width: "100%" 
                    }}
                  >
                    {/* Car Field */}
                    <div className="rent-details-item" style={{ 
                      width: isMobile ? "100%" : "auto", 
                      minWidth: isMobile ? "auto" : "200px",
                      borderRight: (!isMobile) ? "1px solid rgba(255,255,255,0.08)" : "none", 
                      borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none",
                      padding: isMobile ? "0 0 15px 0" : "0 20px",
                      display: "flex", 
                      alignItems: "center",
                      flex: isMobile ? "none" : "1"
                    }}>
                      <div className="icon-box" style={{ marginRight: "12px", opacity: 0.8 }}>
                        <img src={iconRentDetails1.src} alt="icon-rent-details-1" style={{ width: "22px" }} />
                      </div>
                      <div className="rent-details-content" style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "12px", marginBottom: "2px", color: "#FF3600", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Car</h3>
                        <select
                          name="car_type"
                          value={form.car_type}
                          onChange={handleChange}
                          className="form-select"
                          style={{ 
                            border: "none", 
                            outline: "none", 
                            fontSize: "15px", 
                            padding: "0", 
                            background: "transparent",
                            color: "#E2E2E2",
                            fontWeight: "500",
                            width: "100%",
                            cursor: "pointer"
                          }}
                          required
                        >
                          <option value="" disabled>Select Type</option>
                          {carTypes.map((type, i) => (
                            <option value={type} key={i} style={{ backgroundColor: "#000000ff",color:"white" }}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Pickup Date */}
                    <div className="rent-details-item" style={{ 
                      width: isMobile ? "100%" : "auto", 
                      minWidth: isMobile ? "auto" : "180px",
                      borderRight: (!isMobile) ? "1px solid rgba(255,255,255,0.08)" : "none", 
                      borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none",
                      padding: isMobile ? "15px 0" : "0 20px",
                      display: "flex", 
                      alignItems: "center",
                      flex: isMobile ? "none" : "1"
                    }}>
                      <div className="icon-box" style={{ marginRight: "12px", opacity: 0.8 }}>
                        <img src={iconCalendar.src} alt="icon-calendar" style={{ width: "22px" }} />
                      </div>
                      <div className="rent-details-content" style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "12px", marginBottom: "2px", color: "#FF3600", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Pickup</h3>
                        <input
                          type="date"
                          name="pickup_date"
                          value={form.pickup_date}
                          onChange={handleChange}
                          required
                          style={{ 
                            border: "none", 
                            outline: "none", 
                            fontSize: "15px", 
                            padding: "0", 
                            background: "transparent", 
                            color: "#E2E2E2", 
                            fontWeight: "500",
                            width: "100%",
                            cursor: "pointer",
                            colorScheme: "dark"
                          }}
                          onClick={(e) => e.target.showPicker && e.target.showPicker()}
                          onFocus={(e) => e.target.showPicker && e.target.showPicker()}
                        />
                      </div>
                    </div>

                    {/* Return Date */}
                    <div className="rent-details-item" style={{ 
                      width: isMobile ? "100%" : "auto", 
                      minWidth: isMobile ? "auto" : "180px",
                      borderRight: (!isMobile) ? "1px solid rgba(255,255,255,0.08)" : "none", 
                      borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none",
                      padding: isMobile ? "15px 0" : "0 20px",
                      display: "flex", 
                      alignItems: "center",
                      flex: isMobile ? "none" : "1"
                    }}>
                      <div className="icon-box" style={{ marginRight: "12px", opacity: 0.8 }}>
                        <img src={iconCalendar.src} alt="icon-calendar" style={{ width: "22px" }} />
                      </div>
                      <div className="rent-details-content" style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "12px", marginBottom: "2px", color: "#FF3600", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Return</h3>
                        <input
                          type="date"
                          name="return_date"
                          value={form.return_date}
                          onChange={handleChange}
                          required
                          style={{ 
                            border: "none", 
                            outline: "none", 
                            fontSize: "15px", 
                            padding: "0", 
                            background: "transparent", 
                            color: "#E2E2E2", 
                            fontWeight: "500",
                            width: "100%",
                            cursor: "pointer",
                            colorScheme: "dark"
                          }}
                          onClick={(e) => e.target.showPicker && e.target.showPicker()}
                          onFocus={(e) => e.target.showPicker && e.target.showPicker()}
                        />
                      </div>
                    </div>

                    {/* Pickup Location */}
                    <div className="rent-details-item" style={{ 
                      width: isMobile ? "100%" : "auto", 
                      minWidth: isMobile ? "auto" : "180px",
                      borderRight: (!isMobile) ? "1px solid rgba(255,255,255,0.08)" : "none", 
                      borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none",
                      padding: isMobile ? "15px 0" : "0 20px",
                      display: "flex", 
                      alignItems: "center",
                      flex: isMobile ? "none" : "1"
                    }}>
                      <div className="icon-box" style={{ marginRight: "12px", opacity: 0.8 }}>
                        <img src={iconRentDetails2.src} alt="icon-rent-details-2" style={{ width: "22px" }} />
                      </div>
                      <div className="rent-details-content" style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "12px", marginBottom: "2px", color: "#FF3600", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Location</h3>
                        <select
                          name="pickup_location"
                          value={form.pickup_location}
                          onChange={handleChange}
                          className="form-select"
                          style={{ 
                            border: "none", 
                            outline: "none", 
                            fontSize: "15px", 
                            padding: "0", 
                            background: "transparent",
                            color: "#E2E2E2",
                            fontWeight: "500",
                            width: "100%",
                            cursor: "pointer"
                          }}
                          required
                        >
                          <option value="" disabled>Select</option>
                          <option value="Home Delivery" style={{ backgroundColor: "#000000ff",color:"white" }}>Home Delivery</option>
                          <option value="Self Pickup" style={{ backgroundColor: "#000000ff",color:"white" }}>Self Pickup</option>
                        </select>
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="rent-details-item rent-details-search" style={{ 
                      width: isMobile ? "100%" : "auto", 
                      padding: isMobile ? "10px 0 0 0" : "0 0 0 20px", 
                      display: "flex", 
                      justifyContent: "center" 
                    }}>
                      <button
                        type="submit"
                        className="btn-main"
                        style={{
                          width: isMobile ? "100%" : "55px",
                          height: "55px",
                          backgroundColor: "#FF3600",
                          color: "#fff",
                          borderRadius: isMobile ? "12px" : "50%",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "0.3s all ease",
                          fontSize: isMobile ? "16px" : "18px",
                          fontWeight: "600",
                          boxShadow: "0 8px 15px rgba(255, 54, 0, 0.3)",
                          textTransform: "uppercase"
                        }}
                      >
                        {isMobile && <span style={{ marginRight: "10px" }}>Rent Now</span>}
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Modal Popup Section */}
      {isModalOpen && (
        <div className="custom-modal-overlay" style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.85)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          backdropFilter: "blur(5px)"
        }}>
          <div className="custom-modal-content" style={{
            backgroundColor: "#1a1a1a",
            padding: "40px",
            borderRadius: "20px",
            width: "90%",
            maxWidth: "500px",
            border: "1px solid #FF3600",
            position: "relative",
            animation: "fadeInUp 0.3s ease-out"
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer"
              }}
            >
              &times;
            </button>
            <h2 style={{ color: "#fff", marginBottom: "30px", fontSize: "24px", textAlign: "center" }}>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label style={{ color: "#FF3600", display: "block", marginBottom: "10px", fontWeight: "600" }}>Full Name</label>
                <div style={{ position: "relative" }}>
                  <img src={iconUser.src} alt="icon" style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", width: "20px" }} />
                  <input
                    type="text"
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    required
                    style={{
                      width: "100%",
                      padding: "15px 15px 15px 45px",
                      backgroundColor: "#2a2a2a",
                      border: "1px solid #444",
                      borderRadius: "10px",
                      color: "#fff",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label style={{ color: "#FF3600", display: "block", marginBottom: "10px", fontWeight: "600" }}>Phone Number</label>
                <div style={{ position: "relative" }}>
                  <img src={iconPhone.src} alt="icon" style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", width: "20px" }} />
                  <input
                    type="number"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    required
                    style={{
                      width: "100%",
                      padding: "15px 15px 15px 45px",
                      backgroundColor: "#2a2a2a",
                      border: "1px solid #444",
                      borderRadius: "10px",
                      color: "#fff",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "18px",
                  backgroundColor: "#FF3600",
                  color: "#fff",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                  cursor: "pointer",
                  marginTop: "10px",
                  boxShadow: "0 10px 20px rgba(255, 54, 0, 0.2)"
                }}
              >
                {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Rent Details Section End */}
    </>
  );
};

export default Inquiry;
