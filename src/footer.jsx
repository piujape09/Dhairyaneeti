import "@fontsource/medievalsharp";
import React from "react";

const Footer = () => {
    return (
        <section id="footer" className="bg-[#4d2407] border-t-2 border-[#cf8239] text-[#F4E1C1] py-6" style={{ fontFamily: "'MedievalSharp', cursive" }}>
            <footer className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-[#FFD700] drop-shadow-lg">⚔️ Technical Event ⚔️</h2>
                <p className="text-[#E6C28B] text-sm mt-2">
                    A legendary coding battle filled with logic, scripting, face-offs, and illusions.
                </p>

                {/* Navigation Links */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#home" className="hover:underline text-[#FFD700]">Home</a>
                    <a href="#rounds" className="hover:underline text-[#FFD700]">Rounds</a>
                    <a href="#contact" className="hover:underline text-[#FFD700]">Contact</a>
                    <a href="#register" className="hover:underline text-[#FFD700]">Register</a>
                </div>

                {/* Copyright Notice */}
                <div className="mt-4 text-[#E6C28B] text-sm">
                    © {new Date().getFullYear()} Technical Event. All Rights Reserved.
                </div>
            </footer>
        </section>
    );
};

export default Footer;
