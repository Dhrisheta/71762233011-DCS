import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          {type === 'login' ? 'Welcome Back 🎉' : 'Create Your Account 🧡'}
        </h2>
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {type === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          {type === 'login' ? (
            <>Don't have an account?{' '}
              <Link to="/signup" className="text-orange-500 hover:underline">Sign Up</Link>
            </>
          ) : (
            <>Already have an account?{' '}
              <Link to="/login" className="text-orange-500 hover:underline">Login</Link>
            </>
          )}
        </p>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
