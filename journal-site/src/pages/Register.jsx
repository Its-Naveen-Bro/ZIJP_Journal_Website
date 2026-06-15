import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    securityAnswer: '',
    country: 'India'
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('https://journal-website-677g.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Account created successfully!");
        
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          securityQuestion: '',
          securityAnswer: '',
          country: 'India'
        });

        navigate('/login');
        
      } else {
        alert("Failed to create account. Email might already exist.");
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
    }
  };

  return (
    <div className="section5">
      <div className="section6">
        <h1 className="text1">Create Account in ZIJP</h1>
        <p className="text10"><span className="text9">*</span> Required</p>
        
        <form onSubmit={handleSubmit}>
          
          <div className="grid2">
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Given / First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input2" 
                required 
              />
            </div>
            <div className="section7">
              <label className="text6">Middle Name</label>
              <input 
                type="text" 
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="input2" 
              />
            </div>
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Last / Surname</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input2" 
                required 
              />
            </div>
          </div>

          <div className="grid2">
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input2" 
                required 
              />
            </div>
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Password</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input2" 
                required 
              />
            </div>
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input2" 
                required 
              />
            </div>
          </div>

          <div className="grid3">
            <div className="section7">
              <label className="text6">Create Security Question</label>
              <input 
                type="text" 
                name="securityQuestion"
                value={formData.securityQuestion}
                onChange={handleChange}
                className="input2" 
              />
            </div>
            <div className="section7">
              <label className="text6">Security Answer</label>
              <input 
                type="text" 
                name="securityAnswer"
                value={formData.securityAnswer}
                onChange={handleChange}
                className="input2" 
              />
            </div>
          </div>

          <div className="grid4">
            <div className="section7">
              <label className="text6"><span className="text9">*</span> Country / Region</label>
              <select 
                className="select1" 
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>
          </div>

          <button type="submit" className="button3">Submit</button>
        </form>

      </div>
    </div>
  );
}