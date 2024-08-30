import Layout from '@/components/Layout';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// className="bg-[#38220f] text-white py-2 px-8 rounded-md text-lg hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-opacity-50"

const BgCoffee = {
    backgroundImage: 'url("/images/coffee-beans-bg.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
}

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your actual admin credentials validation
        if (email === 'thandarhtethtetsan23@gmail.com' && password === 'adminpassword') {
            router.push('/contact'); // Replace with your actual next page route
        } else {
            alert('Invalid email or password');
        }
    };
    return (
        <Layout>
            <div style={BgCoffee} className="flex items-center justify-center min-h-screen">
                <div className="bg-slate-800 border border-slate-600 rounded-md p-12 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                    <h1 className="text-4xl font-bold text-center text-white mb-8">
                        Admin's Login
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="relative my-8">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-80 py-3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Admin's Email:
                            </label>
                        </div>
                        <div className="relative my-8">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-80 py-3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=""
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] left-0 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password:
                            </label>
                        </div>
                        <div className="flex items-center justify-center mt-8">
                            <button
                                type="submit"
                                className="bg-[#38220f] text-white py-2 px-8 rounded-md text-lg hover:bg-[#38220f]-900 focus:outline-none focus:ring-2 focus:ring-[#38220f]-500 focus:ring-opacity-50"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default login;

