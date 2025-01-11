import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    function validate() {
        const newErrors = {};
        if (!username.trim()) newErrors.username = "Foydalanuvchi nomi talab qilinadi";
        if (password.length < 4) newErrors.password = "Parol kamida 6 ta belgidan iborat bo'lishi kerak";
        setErrors(newErrors);
        return newErrors;
    }

    function remove() {
        setUserName('');
        setPassword('');
    }

    function handleSignin(e) {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        const user = { username, password };
        setLoader(true);
        axios.post('https://auth-rg69.onrender.com/api/auth/signin', user, {
            headers: { "Content-Type": "application/json" }
        })
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                    localStorage.setItem('token', response.data.accessToken)
                    navigate('/', { state: { token: response.data.accessToken } });
                    remove();
                }
            })
            .catch(error => {
                if (error.status == 404 || error.status == 401) {
                    alert(error.message)
                }
            })
            .finally(() => {
                setLoader(false);
            });
    }

    return (
        <div className='bg-blue-500 h-[100vh]'>
            <div className='pt-[150px]'>
                <form onSubmit={handleSignin}
                    className='flex flex-col w-[300px] mx-auto bg-blue-200 p-5 rounded-xl shadow-xl'>
                    <h2 className='text-2xl font-medium text-center mb-5'>LOGIN</h2>
                    <input
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        placeholder='Username'
                        className={`focus:outline-none mb-3 py-2 px-3 rounded-md shadow-md ${errors.username ? "border-red-500" : ""}`}
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    <div className="relative mb-3">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full py-2 px-3 focus:outline-none rounded-md shadow-md ${errors.password ? "border-red-500" : ""}`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-2 right-3 text-gray-600">
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    <button
                        type='submit'
                        disabled={loader}
                        className={`bg-green-500 hover:bg-green-600 py-2 rounded-xl mt-4 text-white text-xl hover:shadow-xl shadow-md ${loader ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {loader ? "Loading..." : "Login"}
                    </button>
                    <div className='flex gap-5 text-center ml-[100px] mt-3'>
                        <p>About</p>
                        <Link to={'/signup'}>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
