"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { userAtom } from '@/atom/userAuth';

const Login = () => {
    const router = useRouter();
    const setUser = useSetRecoilState(userAtom);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/login", formData);
            if (res) {
                localStorage.setItem('auth', "true");
                setUser(true);
                router.push("/");
            }
        } catch (e) {
            console.error("Error occurred:", e);
        }
    };

    return (
        <div className="flex justify-center h-screen">
            <div className="shadow-md my-auto p-4">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="text-center font-bold text-xl mb-6">Authentication</div>
                    <input
                        type="email"
                        className="border-2 px-2 py-1 mb-4 outline-none"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        className="border-2 px-2 py-1 mb-4 outline-none"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="bg-gray-700 text-white font-semibold px-2 py-1">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
