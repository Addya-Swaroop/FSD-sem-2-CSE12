import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Form Data State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Error State
  const [errors, setErrors] = useState({});

  // Success Message State
  const [success, setSuccess] = useState("");

  // API Users State
  const [users, setUsers] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(true);

  // Fetch API Data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");

      console.log(formData);

      // Clear Form
      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        
        <h1 className="title">
          Registration Form
        </h1>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>

          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />

          {
            errors.name && (
              <p className="error">
                {errors.name}
              </p>
            )
          }

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />

          {
            errors.email && (
              <p className="error">
                {errors.email}
              </p>
            )
          }

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />

          {
            errors.password && (
              <p className="error">
                {errors.password}
              </p>
            )
          }

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-btn"
          >
            Register
          </button>
        </form>

        {/* Success Message */}
        {
          success && (
            <p className="success">
              {success}
            </p>
          )
        }

        {/* API Data Section */}
        <div className="api-section">

          <h2 className="api-title">
            User Data from API
          </h2>

          {
            loading ? (
              <p className="loading">
                Loading...
              </p>
            ) : (
              users.map((user) => (
                <div
                  key={user.id}
                  className="user-card"
                >
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>

                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>
              ))
            )
          }

        </div>
      </div>
    </div>
  );
}

export default App;