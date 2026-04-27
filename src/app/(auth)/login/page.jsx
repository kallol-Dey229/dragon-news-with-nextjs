'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signIn.email({

            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error('Invalid Email');
        }

        if (res) {
            toast.success('Login Successful');
        }
    }
    return (
        <div className='mx-5 md:mx-30 lg:mx-65 flex justify-center items-center min-h-[80vh] bg-slate-100 mt-10'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>

                <hr className='mb-5 text-gray-200' />

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" {...register("email", { required: "Email field is required" })} className="input" placeholder="Type your email" />

                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "Password field is required" })} className="input" placeholder="Type your password" />
                        <span className='absolute right-2 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </fieldset>

                    <button className='btn w-full btn-neutral'>Login</button>
                </form>

                <p className='mt-5 text-center'>Don&apos;t have an account? <Link href={'/register'} className='text-red-700'>Register</Link></p>

            </div>
        </div>
    );
};

export default LoginPage;