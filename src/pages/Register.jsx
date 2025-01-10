import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!username.trim()) newErrors.username = "Username is required";
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
        if (password.length < 4) newErrors.password = "Password must be at least 6 characters";
        if (password !== rePassword) newErrors.rePassword = "Passwords do not match";
        return newErrors;
    };
    function remove() {
        setEmail('')
        setUsername('')
        setPassword('')
        setRePassword('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log({ username, email, password });
        }
        remove()
    };

    return (
        <div className="bg-blue-500 h-[100vh] flex justify-center items-center">
            <form
                className="flex flex-col w-[300px] bg-blue-200 p-5 rounded-xl shadow-xl"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl text-center font-medium mb-5">REGISTER</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`mb-3 py-2 px-3 focus:outline-none rounded-md shadow-md ${errors.username ? "border-red-500" : ""
                        }`}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mb-3 py-2 px-3 focus:outline-none rounded-md shadow-md ${errors.email ? "border-red-500" : ""
                        }`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <div className="relative mb-3">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full py-2 px-3 focus:outline-none rounded-md shadow-md ${errors.password ? "border-red-500" : ""
                            }`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-2 right-3 text-gray-600"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                <div className="relative mb-3">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="RePassword"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        className={`w-full py-2 px-3 focus:outline-none rounded-md shadow-md ${errors.rePassword ? "border-red-500" : ""
                            }`}
                    />
                </div>
                {errors.rePassword && <p className="text-red-500 text-sm">{errors.rePassword}</p>}

                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-md mt-5">
                    Register
                </button>
                <div className="flex gap-5 ml-[100px] mt-4">
                    <p>About</p>
                    <Link to={"/signin"} className="hover:underline">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
