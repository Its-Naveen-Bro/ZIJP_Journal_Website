import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userToken', data.token); 
        
        alert("Login successful!");
        navigate('/');
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
    }
  };

  return (
    <div className="section5">
      <div className="section12">
        <h2 className="text5">Log in to your account</h2>
        <p className="text4" style={{ marginBottom: '30px' }}>
          Access your research, submissions, and saved searches.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="section7">
            <label className="text6">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
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
              placeholder="Enter your password" 
              className="input2" 
              required
            />
            <Link to="/forgot-password" className="text11">Forgot your password?</Link>
          </div>

          <button type="submit" className="button3">Log In</button>
        </form>

        <p className="text12">
          Don't have an account? <Link to="/register" className="text8">New User</Link>
        </p>

      </div>
    </div>
  );
}