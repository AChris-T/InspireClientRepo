'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useResetPasswordMutation } from '@/redux/authApi';
import { PasswordField, passwordValidation, confirmPasswordValidation } from '@/components/form';

export default function ResetPasswordForm({ email, otp }) {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [message, setMessage] = useState({ type: '', text: '' });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setMessage({ type: '', text: '' });
    if (data.password !== data.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }
    try {
      await resetPassword({ email, otp, newPassword: data.password }).unwrap();
      setMessage({ type: 'success', text: 'Password reset successfully! You can now log in.' });
    } catch (err) {
      setMessage({
        type: 'error',
        text:
          err?.data?.error || err?.data?.message || 'Failed to reset password. Please try again.',
      });
    }
  };

  const getMessageColor = (type) => {
    switch (type) {
      case 'error':
        return 'text-red-400';
      case 'success':
        return 'text-lemon-100';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-black-100 text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md flex flex-col items-center gap-8"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Create New Password</h2>
          <p className="text-gray-300 text-sm mb-6">
            Your password must be different from the previously used password
          </p>
        </div>
        <div className="w-full flex flex-col gap-6">
          <PasswordField
            label="Password"
            placeholder="Enter your password (Min 8 Characters )"
            register={register}
            name="password"
            validation={passwordValidation}
            error={errors.password}
          />
          <PasswordField
            label="Confirm password"
            placeholder="Confirm your password"
            register={register}
            name="confirmPassword"
            validation={confirmPasswordValidation('password')}
            error={errors.confirmPassword}
          />
        </div>
        {message.text && (
          <div className={`${getMessageColor(message.type)} text-sm mb-2`}>{message.text}</div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-lemon-100 text-black font-medium rounded py-3 mt-2 mb-2 disabled:opacity-60"
        >
          {isLoading ? 'Resetting...' : 'Confirm'}
        </button>
      </form>
    </div>
  );
}
