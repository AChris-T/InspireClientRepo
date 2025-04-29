/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

export default function PasswordVisibility() {
    const [visible, setVisible] = useState(false)
    const toggleVisibility = () => setVisible((prev) => !prev);

    const inputType = visible ? 'text' : 'password';
    const icon = visible ? <FaEyeSlash />: <IoEyeSharp />
    ;
  
    return { inputType, toggleVisibility, icon };
  };
