import Navbar from "../components/Navbar";

export default function AminoLanding() {
    return (
        <div>
            <Navbar />
            <div className="flex gap-10 w-[83%] m-auto py-5">
                <div className="w-[44%] ml-3  h-[420px]">
                    <p className=" mt-[70px] text-blue-900 text-3xl font-semibold">Make A Real Impact On Your Community And Social Network</p>
                    <p className="px-3 text-sm pt-2 w-[400px] text-gray-400">Amino has authentic mobile communities for whatever you're into</p>
                    <p className="px-3 text-sm pt-2 w-[400px] text-gray-400">Amino Creator Manager Allows anyone to create a community</p>

                    <div className="flex gap-5 pt-10">
                        <div className=" flex border py-1 w-[150px] bg-blue-400 rounded-xl text-white text-end cursor-pointer active:scale-95">
                            <div className="pl-2 pt-[1px]">
                                <img className="w-10 h-10" src="https://cdn.iconscout.com/icon/free/png-256/mobile-2085-902096.png" />
                            </div>
                            <div>
                                <p className="text-[10px] ml-1  mt-1 uppercase">Available on</p>
                                <p className="text-sm ml-1 font-semibold uppercase">App Store</p>
                            </div>
                        </div>
                        <div className="flex border-2 border-blue-400 rounded-xl w-[150px] text-blue-400 text-end cursor-pointer active:scale-95">
                            <div className="pl-2 pt-[5px]">
                                <img className="w-10 h-10" src="https://cdn.iconscout.com/icon/free/png-256/play-store-3660045-3094479.png" />
                            </div>
                            <div>
                                <p className="text-[10px] mr-0 mt-1 uppercase">Android App on</p>
                                <p className="mr-0 font-semibold uppercase text-sm">Google Play</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[60%]  relative">
                    <div className="w-[70%]  ml-[30%] h-[420px] bg-white rounded-full">
                        <img className="w-[100%] h-[100%]" src="https://wa1.narvii.com/static/img/app-demo2x.webp?v=4" />
                    </div>
                    <div className="absolute border rounded-lg py-4 px-4 w-[210px] bg-white shadow-2xl -mt-[40%]">
                        <p className="px-3 text-gray-800 font-semibold">Explore More..</p>
                        <p className="px-3 text-gray-600 font-extralight">On your interests</p>
                    </div>
                    <p className="w-[50px] h-[50px] rounded-full bg-blue-400 pt-3 absolute -mt-[30%] ml-20">
                        <svg className="text-white ml-[10px]" viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </p>
                </div>
            </div>
            <div className=" w-[85%] m-auto mt-10">
                <div>
                    <p className="font-semibold text-xl text-center text-gray-600">Try New Communities With Your Interests</p>
                </div>
                <div className="flex justify-around pt-8">
                    <div className="h-[150px] w-[100px]">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/8226/d3cee72c23349a98576f8ad589149425e5174fb3_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Anime</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src='https://cm1.narvii.com/8511/8cc7031ea92323558fecd058593f75df4dcf6d1f_375.jpg' />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">K-Pop</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/7199/891fcfc315922dd1cf35ef9b52513d37d0ca15bd_375.jpg"/>
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Hardwood</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/8429/3e0621dd5536f161cd6b8f27c0927b9f8b99fa01_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Overwatch</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]">                       
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/7882/b027755440fc39d03b452a14904e31ac08c1e23a_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Art</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]"> 
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/8466/0bc9ce27c0064627e19bccfebbb65cf2a4916a30_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Undertale</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/8500/8be8bbddd7d35f3825ffc90ceab53381d23a9321_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Crafty</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/8324/9a2ebbb03d5b6719d14a617992ec8d7e9105e63c_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Studying</p>
                    </div>
                    <div className="border  h-[150px] w-[100px]">
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 shadow-2xl" src="https://cm1.narvii.com/7404/c9e94e2d7facb0db8a1e0ad55e8a50a063c3087f_375.jpg" />
                        <p className="absolute -mt-[30px] text-white font-bold text-xl">Horror</p>
                    </div>
                </div>
            </div>
        </div>
    )
}