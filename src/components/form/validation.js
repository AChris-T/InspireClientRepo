// Common validation rules for forms
export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address',
  },
};

export const passwordValidation = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Password must be at least 8 characters',
  },
};

export const confirmPasswordValidation = (passwordFieldName = 'password') => ({
  required: 'Please confirm your password',
  validate: (value, formValues) =>
    value === formValues[passwordFieldName] || 'Passwords do not match',
});

export const businessNameValidation = {
  required: 'Business name is required',
};

export const requiredField = (fieldName) => ({
  required: `${fieldName} is required`,
}); 