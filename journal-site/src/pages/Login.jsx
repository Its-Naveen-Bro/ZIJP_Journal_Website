import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
    
      const response = await fetch('https://journal-website-677g.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        navigate('/');
      } else {
        alert(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="section5">

      <div className="section12">
        <h1 className="text14">Login to ZIJP</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="section7" style={{ marginBottom: '20px' }}>
            <label className="text6">Email Address</label>
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
            <label className="text6">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input2" 
              required 
            />
          </div>

          <button type="submit" className="button3">Sign In</button>
        </form>

        <p className="text12">Don't have an account?</p>
        <Link to="/register" className="text13">Create Account</Link>
      </div>
    </div>
  );
}