import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, History } from "lucide-react";

const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
};

const Timer = () => {
    const timerRef = useRef(null);

    const [time, setTime] = useState(() => {
        const saved = localStorage.getItem("timer");
        return saved ? JSON.parse(saved).time : 0;
    });

    const [isRunning, setIsRunning] = useState(() => {
        const saved = localStorage.getItem("timer");
        return saved ? JSON.parse(saved).isRunning : false;
    });

    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem("timer_history");
        return saved ? JSON.parse(saved) : [];
    });

    // Auto-save no localStorage
    useEffect(() => {
        localStorage.setItem(
            "timer",
            JSON.stringify({ time, isRunning })
        );
    }, [time, isRunning]);

    // Atualiza timer ao rodar
    const toggleTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            timerRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        if (time > 0) {
            const newEntry = {
                time: formatTime(time),
                date: new Date().toLocaleString(),
            };

            const updatedHistory = [newEntry, ...history];
            setHistory(updatedHistory);

            localStorage.setItem(
                "timer_history",
                JSON.stringify(updatedHistory)
            );
        }

        clearInterval(timerRef.current);
        timerRef.current = null;
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="flex flex-col items-center justify-center">

            {/* Glass panel */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="
                    backdrop-blur-xl bg-white/10 border border-white/20
                    rounded-3xl p-10 shadow-2xl
                    flex flex-col items-center w-[360px]
                "
            >
                {/* Timer display */}
                <motion.h2
                    key={time} // <-- isso força a animação a rodar A CADA segundo
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.15, 0.98, 1] }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                    }}
                    className="text-6xl font-bold tracking-wide mb-8 drop-shadow-lg text-white"
                >
                    {formatTime(time)}
                </motion.h2>

                {/* Buttons */}
                <div className="flex space-x-4">

                    {/* Start / Pause */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={toggleTimer}
                        className="
                            flex items-center gap-2
                            px-6 py-3 rounded-xl text-white font-semibold
                            shadow-lg backdrop-blur-xl
                            transition-all duration-200
                            bg-gradient-to-r from-blue-500 to-blue-700
                            hover:shadow-[0_0_20px_#00baff]
                        "
                    >
                        {isRunning ? (
                            <>
                                <Pause size={20} /> Pause
                            </>
                        ) : (
                            <>
                                <Play size={20} /> Start
                            </>
                        )}
                    </motion.button>

                    {/* Reset */}
                    <motion.button
                        whileTap={{ rotate: -90, scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={resetTimer}
                        className="
                            flex items-center gap-2
                            px-6 py-3 rounded-xl text-white font-semibold
                            shadow-lg backdrop-blur-xl
                            transition-all duration-200
                            bg-gradient-to-r from-red-500 to-red-700
                            hover:shadow-[0_0_20px_#ff0055]
                        "
                    >
                        <RotateCcw size={20} /> Reset
                    </motion.button>
                </div>

                {/* HISTÓRICO */}
                <div className="mt-10 w-full">
                    <div className="flex items-center gap-3 text-white opacity-80 mb-3">
                        <History size={20} />
                        <span className="text-lg font-semibold">History</span>
                    </div>

                    <div className="max-h-48 overflow-auto pr-2 custom-scrollbar">
                        {history.length === 0 ? (
                            <p className="text-gray-300 text-sm">No history yet...</p>
                        ) : (
                            history.map((entry, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="
                                        text-white text-sm bg-white/5
                                        border border-white/10 p-3 rounded-xl
                                        mb-2 backdrop-blur-md
                                    "
                                >
                                    <p className="font-semibold">{entry.time}</p>
                                    <p className="opacity-70 text-xs">{entry.date}</p>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Timer;
