// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import foot from "./assets/foot.png";
// import { motion } from "framer-motion";

// const Rounds = () => {
//     const rounds = [
//         {
//             title: "Vidyayuddha (The Battle of Knowledge)",
//             description: "Test your logical and analytical skills through a series of challenging questions.",
//             time: "10:00 AM - 11:00 AM",
//             position: { top: "30%", left: "15%" }
//         },
//         {
//             title: "Abhijnana (Test Of Recognition)",
//             description: "Identify, decode, and recognize patterns to progress in the challenge.",
//             time: "11:30 AM - 12:30 PM",
//             position: { top: "50%", left: "40%" }
//         },
//         {
//             title: "Sanjeevanayuddha (The Battle of Survival)",
//             description: "A face-off coding battle where only the strongest can advance.",
//             time: "2:00 PM - 3:30 PM",
//             position: { top: "30%", left: "65%" }
//         },
//         {
//             title: "Vibhrampatha (The Path Of Illusions)",
//             description: "Navigate through a maze of illusions, debugging and problem-solving to escape.",
//             time: "4:00 PM - 5:30 PM",
//             position: { top: "50%", left: "90%" }
//         }
//     ];

//     // Function to calculate rotation angle between two points
//     const getRotationAngle = (start, end) => {
//         const dx = parseFloat(end.left) - parseFloat(start.left);
//         const dy = parseFloat(end.top) - parseFloat(start.top);
//         return Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees
//     };

//     const generateFootprints = (start, end, startIndex) => {
//         const footprints = [];
//         const steps = 8; // Number of footprints between points
//         const rotation = getRotationAngle(start, end);

//         for (let i = 1; i <= steps; i++) {
//             const top = parseFloat(start.top) + ((parseFloat(end.top) - parseFloat(start.top)) * i / steps) + "%";
//             const left = parseFloat(start.left) + ((parseFloat(end.left) - parseFloat(start.left)) * i / steps) + "%";

//             footprints.push(
//                 <motion.div
//                     key={`footprint-${startIndex}-${i}`}
//                     className="absolute text-3xl" // Larger footprint size
//                     style={{
//                         top,
//                         left,
//                         transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
//                         color: "#FFD700", // Dark Orange color for footprints
//                         //textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" / / Soft shadow for depth
//                     }
//                     }
//                     initial={{ opacity: 0 }
//                     }
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1, delay: (startIndex * 6 + i) * 0.5 }} // Smooth and gradual
//                 >
//                     👣
//                 </motion.div >
//             );
//         }
//         return footprints;
//     };

//     return (
//         <section id="rounds" className="relative bg-[#F5DEB3] min-h-screen p-8 flex flex-col items-center mt-24">
//             {/* Ancient-style title */}
//             <h2 className="text-4xl font-extrabold text-[#8B4513] mb-6 border-b-4 border-[#D2691E] pb-2">
//                 🏹 Event Journey Map 🏹
//             </h2>

//             {/* Background Map */}
//             <div className="relative w-full h-[600px] bg-center bg-cover" style={{ backgroundImage: "url('/ancient-map-texture.jpg')" }}>

//                 {/* Footprints appearing step by step */}
//                 {rounds.map((round, index) => (
//                     index < rounds.length - 1 && generateFootprints(round.position, rounds[index + 1].position, index)
//                 ))}

//                 {/* Location Markers and Text Boxes */}
//                 {rounds.map((round, index) => (
//                     <div
//                         key={index}
//                         className="absolute flex flex-col items-center"
//                         style={{ top: round.position.top, left: round.position.left, transform: "translate(-50%, -50%)" }}
//                     >
//                         {/* Location Pin */}
//                         <FaMapMarkerAlt className="text-red-600 text-3xl drop-shadow-lg animate-bounce" />

//                         {/* Round Details Box */}
//                         <div className="bg-[#FFF8DC] p-4 rounded-lg shadow-lg w-52 text-center border-2 border-[#8B4513] mt-2">
//                             <h3 className="text-lg font-semibold text-[#4B2C20]">{round.title}</h3>
//                             <p className="text-[#5A3E2B] italic text-sm">{round.description}</p>
//                             <span className="text-sm text-[#654321] font-medium">{round.time}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Rounds;

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import foot from "./assets/foot2.png";
import bgImage from "./assets/bg6.png";
import { motion } from "framer-motion";
import "@fontsource/medievalsharp"; // Import MedievalSharp font

const Rounds = () => {
    const rounds = [
        {
            title: "Vidyayuddha (The Battle of Knowledge)",
            description: "Test your logical and analytical skills through a series of challenging questions.",
            time: "10:00 AM - 11:00 AM",
            position: { top: "30%", left: "15%" }
        },
        {
            title: "Abhijnana (Test Of Recognition)",
            description: "Identify, decode, and recognize patterns to progress in the challenge.",
            time: "11:30 AM - 12:30 PM",
            position: { top: "50%", left: "40%" }
        },
        {
            title: "Sanjeevanayuddha (The Battle of Survival)",
            description: "A face-off coding battle where only the strongest can advance.",
            time: "2:00 PM - 3:30 PM",
            position: { top: "50%", left: "65%" }
        },
        {
            title: "Vibhrampatha (The Path Of Illusions)",
            description: "Navigate through a maze of illusions, debugging and problem-solving to escape.",
            time: "4:00 PM - 5:30 PM",
            position: { top: "70%", left: "90%" }
        }
    ];

    const getRotationAngle = (start, end) => {
        const dx = parseFloat(end.left) - parseFloat(start.left);
        const dy = parseFloat(end.top) - parseFloat(start.top);
        return Math.atan2(dy, dx) * (180 / Math.PI);
    };

    const generateFootprints = (start, end, startIndex) => {
        const footprints = [];
        const steps = 8;
        const rotation = getRotationAngle(start, end);

        for (let i = 1; i <= steps; i++) {
            const top = parseFloat(start.top) + ((parseFloat(end.top) - parseFloat(start.top)) * i / steps) + "%";
            const left = parseFloat(start.left) + ((parseFloat(end.left) - parseFloat(start.left)) * i / steps) + "%";

            footprints.push(
                <motion.img
                    key={`footprint-${startIndex}-${i}`}
                    src={foot}
                    alt="footprint"
                    className="absolute w-20 h-20"
                    style={{
                        top,
                        left,
                        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                        opacity: 0.8
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: (startIndex * 6 + i) * 0.5 }}
                />
            );
        }
        return footprints;
    };

    return (
        <section id="rounds">
            <div
                className="h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h2 className="text-4xl font-extrabold text-[#f4e1c1] mb-6 border-b-2 border-[#D2691E] pb-2 font-[MedievalSharp]">
                    Karya Yatra Marg
                </h2>

                <div className="relative w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: "url('/ancient-map-texture.jpg')" }}>
                    {rounds.map((round, index) => (
                        index < rounds.length - 1 && generateFootprints(round.position, rounds[index + 1].position, index)
                    ))}

                    {rounds.map((round, index) => (
                        <div
                            key={index}
                            className="absolute flex flex-col items-center"
                            style={{ top: round.position.top, left: round.position.left, transform: "translate(-50%, -50%)" }}
                        >
                            <FaMapMarkerAlt className="text-red-600 text-3xl drop-shadow-lg animate-bounce" />

                            <div className="bg-[#FFF8DC] p-4 rounded-lg shadow-lg w-52 text-center border-2 border-[#8B4513] mt-2">
                                <h3 className="text-lg font-bold text-[#4B2C20] font-[MedievalSharp]">{round.title}</h3>
                                <p className="text-[#5A3E2B] italic text-sm font-serif">{round.description}</p>
                                <span className="text-sm text-[#654321] font-medium">{round.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rounds;
