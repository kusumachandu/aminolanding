import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {motion} from "framer-motion"

export default function AminoLanding() {
    return (
        <div>
            <Navbar />
            <div className="md:flex lg:flex md:gap-10 lg:gap-10 w-[83%] m-auto py-5">
                <div className="md:w-[44%] lg:w-[44%] ml-3  lg:h-[420px] md:h-[350px] h-[350px]">
                    <motion.p className=" lg:mt-[70px] mg:mt-[30px] mt-[30px] text-blue-900 lg:text-3xl md:text-lg text-4xl font-semibold text-center md:text-start lg:text-start"
                        initial = {{x:-200}}
                        animate = {{x: 0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        Make A Real Impact On Your Community And Social Network
                    </motion.p>
                    <motion.p className="px-5 md:px-1 lg:px-1 lg:text-sm md:text-xs pt-4 lg:w-[400px] md:w-[250px] text-gray-400 text-center md:text-start"
                        initial = {{x:-300}}
                        animate = {{x: 0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        Amino has authentic mobile communities for whatever you're into
                    </motion.p>
                    <motion.p className="px-10 md:px-1 lg:px-1 lg:text-sm md:text-xs pt-3 lg:w-[400px] md:w-[250px] text-gray-400 text-center md:text-start lg:text-start"
                        initial = {{x:-400}}
                        animate = {{x: 0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        Amino Creator Manager Allows anyone to create a community
                    </motion.p>

                    <motion.div className="flex gap-5 lg:pt-12 md:pt-7 pt-10"
                        initial = {{x:-200}}
                        animate = {{x: 0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        <div className="hovershake flex border ml-16 md:ml-0 py-1 w-[120px] md:w-[120px] lg:w-[150px] bg-blue-400 rounded-xl text-white text-end cursor-pointer active:scale-95">
                            <div className="pl-2 pt-[1px]">
                                <img className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-8 h-8" src="https://cdn.iconscout.com/icon/free/png-256/mobile-2085-902096.png" />
                            </div>
                            <div>
                                <p className="lg:text-[10px] md:text-[8px] text-[8px]  ml-1  mt-1 uppercase">Available on</p>
                                <p className="lg:text-sm md:text-[10px] text-[10px] ml-1 font-semibold uppercase">App Store</p>
                            </div>
                        </div>
                        <div className="hovershake flex border-2 border-blue-400 rounded-xl w-[120px] md:w-[120px] lg:w-[150px] text-blue-400 text-end cursor-pointer active:scale-95">
                            <div className="pl-2 pt-[5px]">
                                <img className="lg:w-10 md:w-7 lg:h-10 w-8" src="https://cdn.iconscout.com/icon/free/png-256/play-store-3660045-3094479.png" />
                            </div>
                            <div>
                                <p className="lg:text-[10px] md:text-[8px] text-[8px] mr-0 mt-2 uppercase">Android App on</p>
                                <p className="mr-0 font-semibold uppercase lg:text-sm md:text-[10px] text-[10px]">Google Play</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="w-[85%] lg:pr-0  lg:py-[2px] md:py-[2px] py-10 relative"
                    initial = {{x:200}}
                    animate = {{x: 0}}
                    transition = {{
                        duration : 2
                    }}
                >
                    <div className="lg:w-[60%] md:w-[70%] w-[90%]  ml-[30%] lg:ml-[40%] lg:h-[420px] md:h-[310px] h-[290px] bg-white rounded-full">
                        <img className="w-[100%] h-[100%]" src="https://wa1.narvii.com/static/img/app-demo2x.webp?v=4" />
                    </div>
                    <div className="absolute border rounded-lg py-4 px-4 lg:w-[210px] md:w-[170px] w-[120px] bg-white shadow-2xl lg:-mt-[35%] md:-mt-[40%] -mt-[50%] lg:ml-24 md:ml-0 ml-0 sm:overflow-hidden hover:z-10 hover:scale-105">
                        <p className="lg:px-3 text-gray-800 font-semibold lg:text-lg text-[10px] md:text-[12px]">Explore More..</p>
                        <p className="lg:px-3 text-gray-600 font-extralight lg:text-[16px] text-[8px] md:text-[12px]">On your interests</p>
                    </div>
                    <p className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full bg-blue-400 lg:pt-3 pt-[6px] absolute lg:-mt-[25%] md:-mt-[28%] -mt-[35%] lg:ml-44 ml-9 md:ml-16 hover:scale-105">
                        <svg className="text-white lg:ml-[10px] ml-[5px] lg:w-[30px] lg:h-[30px] w-[30px] h-[30px] md:h-[30px] md:w-[30px] md:ml-[5px]" viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </p>
                </motion.div>
            </div>
            <div className="w-[85%] m-auto lg:mt-10 sm:mt-1">
                <div className="w-[50%] md:w-[40%] lg:w-[85%] md:m-auto m-auto">
                    <p className="font-bold md:font-semibold lg:font-semibold lg:text-xl text-center text-gray-600 sm:text-xl">Try New Communities With Your Interests</p>
                </div>
                <div className="md:flex lg:flex justify-around pt-8 ">
                    <motion.div className="lg:h-[150px] lg:w-[100px]  md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake hover:topslide1 mb-10 md:mb-0 lg:mb-0 m-auto"
                        initial = {{y:-200}}
                        animate = {{
                            y: 0,
                            opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]
                        
                        }}
                        transition = {{
                            duration : 0.5
                        }}
                    >
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all  hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8226/d3cee72c23349a98576f8ad589149425e5174fb3_375.jpg" />
                        <p className="absolute lg-mt-[30px] md:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">Anime</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 hover:topslide1 m-auto"
                        initial = {{y:-200}}
                        animate = {{y: 0, opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 1
                        }}
                    >
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src='https://cm1.narvii.com/8511/8cc7031ea92323558fecd058593f75df4dcf6d1f_375.jpg' />
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">K-Pop</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 m-auto hover:topslide2"
                        initial = {{y:-200}}
                        animate = {{y: 0, opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 1.2
                        }}
                    >
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/7199/891fcfc315922dd1cf35ef9b52513d37d0ca15bd_375.jpg"/>
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-2xl">Hardwood</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 m-auto hover:topslide3"
                        initial = {{y:-200}}
                        animate = {{y: 0, opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8429/3e0621dd5536f161cd6b8f27c0927b9f8b99fa01_375.jpg" />
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">Overwatch</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 m-auto hover:topslide4"
                        initial = {{y:-200}}
                        animate = {{y: 0,opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 2.5
                        }}
                    >                       
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/7882/b027755440fc39d03b452a14904e31ac08c1e23a_375.jpg" />
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">Art</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 m-auto hover:topslide5"
                        initial = {{y:-200}}
                        animate = {{y: 0,opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 3
                        }}
                    > 
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8466/0bc9ce27c0064627e19bccfebbb65cf2a4916a30_375.jpg" />
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">Undertale</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 m-auto hover:topslide6"
                        initial = {{y:-200}}
                        animate = {{y: 0,opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 3.5
                        }}
                    >
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8500/8be8bbddd7d35f3825ffc90ceab53381d23a9321_375.jpg" />
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">Crafty</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 m-auto hover:topslide7"
                        initial = {{y:-200}}
                        animate = {{y: 0,opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 4
                        }}
                    >
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/8324/9a2ebbb03d5b6719d14a617992ec8d7e9105e63c_375.jpg" />
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">Studying</p>
                    </motion.div>
                    <motion.div className="border  lg:h-[150px] lg:w-[100px] md:w-[150px] md:h-[150px] w-[300px] h-[300px] hovershake mb-10 md:mb-0 lg:mb-0 m-auto hover:topslide8"
                        initial = {{y:-200}}
                        animate = {{y: 0, opacity: 1, 
                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 350, 350, 0],
                            borderRadius: ["10%", "10%", "30%", "30%", "10%"]}}
                        transition = {{
                            duration : 4.5
                        }}
                    >
                        <img className="w-[100%] h-[100%] rounded-lg cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-2xl" src="https://cm1.narvii.com/7404/c9e94e2d7facb0db8a1e0ad55e8a50a063c3087f_375.jpg" />
                        <p className="absolute md:-mt-[30px] lg:-mt-[30px] -mt-[40px] text-white font-bold lg:text-xl md:text-sm text-3xl">Horror</p>
                    </motion.div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}