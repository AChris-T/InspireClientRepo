'use client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import AlertIcon from '../../../public/icons/AlertIcon';

const PasswordField = ({
  label,
  placeholder,
  register,
  name,
  validation,
  error,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm">{label}</label>
      <div
        className={`${
          error ? 'border-red-100' : 'border-white'
        } flex items-center gap-5 border p-2 rounded-lg ${className}`}
      >
        <div className="flex items-center gap-5 w-full">
          <RiLockPasswordLine color="#929191" className="text-xl" />
          <input
            {...register(name, validation)}
            type={showPassword ? 'text' : 'password'}
            className="w-full h-[30px] cursor-pointer focus:outline-none text-sm bg-transparent"
            placeholder={placeholder}
            {...props}
          />
        </div>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {showPassword ? (
            <FaEyeSlash color="#929191" />
          ) : (
            <FaEye color="#929191" />
          )}
        </button>
      </div>
      {error && (
        <p className="text-gray-200 gap-2 text-sm flex items-center">
          <AlertIcon />
          {error.message}
        </p>
      )}
    </div>
  );
};

export default PasswordField; 