'use client';
import React from 'react';
import AlertIcon from '../../../public/icons/AlertIcon';

const InputField = ({
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  register,
  name,
  validation,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm">{label}</label>
      <div
        className={`${
          error ? 'border-red-100' : 'border-white'
        } flex items-center gap-5 border p-2 rounded-lg ${className}`}
      >
        {Icon && <Icon />}
        <input
          {...register(name, validation)}
          type={type}
          className="w-full h-[30px] focus:outline-none text-sm bg-transparent"
          placeholder={placeholder}
          {...props}
        />
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

export default InputField; 