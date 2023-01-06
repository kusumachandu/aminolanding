import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AminoLanding() {
    return (
        <div>
            <Navbar />
            <div className="flex gap-10 w-[83%] m-auto py-5">
                <div className="w-[44%] ml-3  lg:h-[420px] sm:h-[350px]">
                    <p className=" lg:mt-[70px] sm:mt-[30px] text-blue-900 lg:text-3xl sm:text-lg font-semibold">Make A Real Impact On Your Community And Social Network</p>
                    <p className="px-1 lg:text-sm sm:text-xs pt-4 lg:w-[400px] sm:w-[250px] text-gray-400">Amino has authentic mobile communities for whatever you're into</p>
                    <p className="px-1 lg:text-sm sm:text-xs pt-3 lg:w-[400px] sm:w-[250px] text-gray-400">Amino Creator Manager Allows anyone to create a community</p>

                    <div className="flex gap-5 lg:pt-12 sm:pt-7">
                        <div className="hovershake flex border py-1 w-[150px] bg-blue-400 rounded-xl text-white text-end cursor-pointer active:scale-95">
                            <div className="pl-2 pt-[1px]">
                                <img className="lg:w-10 lg:h-10 sm:w-8 sm:h-8" src="https://cdn.iconscout.com/icon/free/png-256/mobile-2085-902096.png" />
                            </div>
                            <div>
                                <p className="lg:text-[10px] sm:text-[8px]  ml-1  mt-1 uppercase">Available on</p>
                                <p className="lg:text-sm sm:text-[10px] ml-1 font-semibold uppercase">App Store</p>
                            </div>
                        </div>
                        <div className="hovershake flex border-2 border-blue-400 rounded-xl w-[150px] text-blue-400 text-end cursor-pointer active:scale-95">
                            <div className="pl-2 pt-[5px]">
                                <img className="lg:w-10 sm:w-8 lg:h-10 sm:w-8" src="https://cdn.iconscout.com/icon/free/png-256/play-store-3660045-3094479.png" />
                            </div>
                            <div>
                                <p className="lg:text-[10px] sm:text-[8px] mr-0 mt-2 uppercase">Android App on</p>
                                <p className="mr-0 font-semibold uppercase lg:text-sm sm:text-[10px]">Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[60%] sm:pr-10 lg:pr-0 lg:py-[2px] sm:py-9  relative">
                    <div className="lg:w-[70%] sm:w-[90%]  ml-[30%] lg:h-[420px] sm:h-[230px] bg-white rounded-full">
                        <img className="w-[100%] h-[100%]" src="https://wa1.narvii.com/static/img/app-demo2x.webp?v=4" />
                    </div>
                    <div className="absolute border rounded-lg py-4 px-4 lg:w-[210px] sm:w-[100px] bg-white shadow-2xl lg:-mt-[40%] sm:-mt-[50%] sm:overflow-hidden">
                        <p className="lg:px-3 text-gray-800 font-semibold lg:text-lg sm:text-[8px]">Explore More..</p>
                        <p className="lg:px-3 text-gray-600 font-extralight lg:text-[16px] sm:text-[8px]">On your interests</p>
                    </div>
                    <p className="lg:w-[50px] lg:h-[50px] sm:w-[30px] sm:h-[30px] rounded-full bg-blue-400 lg:pt-3 sm:pt-[6px] absolute lg:-mt-[29%] sm:-mt-[33%] lg:ml-20 sm:ml-9">
                        <svg className="text-white lg:ml-[10px] sm:ml-[5px] lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px]" viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </p>
                </div>
            </div>
            <div className="w-[85%] m-auto lg:mt-10 sm:mt-1">
                <div className="sm:w-[40%] lg:w-[85%] sm:m-auto">
                    <p className="font-semibold lg:text-xl text-center text-gray-600 sm:text-xl">Try New Communities With Your Interests</p>
                </div>
                <div className="flex justify-around pt-8">
                    <div className="lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide1">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all  hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8226/d3cee72c23349a98576f8ad589149425e5174fb3_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Anime</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide1">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src='https://cm1.narvii.com/8511/8cc7031ea92323558fecd058593f75df4dcf6d1f_375.jpg' />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">K-Pop</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide2">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/7199/891fcfc315922dd1cf35ef9b52513d37d0ca15bd_375.jpg"/>
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Hardwood</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide3">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8429/3e0621dd5536f161cd6b8f27c0927b9f8b99fa01_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Overwatch</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide4">                       
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/7882/b027755440fc39d03b452a14904e31ac08c1e23a_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Art</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide5"> 
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8466/0bc9ce27c0064627e19bccfebbb65cf2a4916a30_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Undertale</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide6">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8500/8be8bbddd7d35f3825ffc90ceab53381d23a9321_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Crafty</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide7">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8324/9a2ebbb03d5b6719d14a617992ec8d7e9105e63c_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Studying</p>
                    </div>
                    <div className="border  lg:h-[150px] lg:w-[100px] sm:w-[150px] sm:h-[150px] hovershake topslide8">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/7404/c9e94e2d7facb0db8a1e0ad55e8a50a063c3087f_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold lg:text-xl sm:text-sm">Horror</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}