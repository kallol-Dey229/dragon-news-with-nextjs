'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {

        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });

        if (error) {
            toast.error('user already exist');
        }

        if (res) {
            toast.success('Registration Successful');
        }

    }


    return (
        <div className='mx-5 md:mx-30 lg:mx-65 flex justify-center items-center min-h-[80vh] bg-slate-100 mt-10'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>

                <hr className='mb-5 text-gray-200' />

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" {...register("name", { required: "Name field is required" })} className="input" placeholder="Type your Name" />

                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    </fieldset>



                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" {...register("photo", { required: "Photo field is required" })} className="input" placeholder="Type your photo url" />

                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                    </fieldset>


                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" {...register("email", { required: "Email field is required" })} className="input" placeholder="Type your email" />

                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    </fieldset>


                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "Password field is required" })} className="input" placeholder="Type your password" />
                        <span className='absolute right-9 top-4 cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </fieldset>

                    <button className='btn w-full btn-neutral'>Register</button>
                </form>

                <p className='mt-5 text-center'>Already have an account? <Link href={'/login'} className='text-blue-700'>Login</Link></p>

            </div>
        </div>
    );
};

export default RegisterPage; 
