import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function ForgotPassword() {
  return (
    <div className="section5">
      <div className="section12">
        <h2 className="text14">Reset Password</h2>
        
        <form>
          <div className="section13">
            <Mail size={20} className="icon2" />
            <input type="email" placeholder="Enter your E-mail" className="input3" />
          </div>

          <button type="submit" className="button5">Send Password Reset Link</button>
        </form>

        <Link to="/login" className="text13">Back to Login</Link>
      </div>
    </div>
  );
}