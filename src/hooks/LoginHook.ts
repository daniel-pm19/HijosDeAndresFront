import { useState } from "react";
export function LoginHook() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please complete all fields");
            return false;
        }

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const userData = await response.json();

            if (!response.ok) {
                alert(userData.message || "Invalid credentials");
                return false;
            }

            localStorage.setItem("user", JSON.stringify(userData));
            alert("Login successful!");
            return true;
        } catch (error) {
            console.error(error);
            alert("An error occurred during login");
            return false;
        }
    };

    return { email, password, setEmail, setPassword, handleLogin };
}