import Timer from "./components/Timer.jsx";

const App = () => {
    return (
        <div className="
            min-h-screen
            flex items-center justify-center
            bg-gradient-to-br from-gray-900 via-black to-gray-800
            relative text-center
        ">

            {/* Glow background effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-teal-400/20 blur-[180px] rounded-full -top-20 -left-20"></div>
                <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[180px] rounded-full bottom-0 right-0"></div>
            </div>

            <div className="relative z-10">
                <Timer />
            </div>
        </div>
    );
};

export default App;
