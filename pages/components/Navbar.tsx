import { useEffect, useState } from "react"
import { motion } from "framer-motion";


export default function Navbar(){

    const [toggle, setToggle] = useState(false);

    function handler(){
        setToggle(!toggle)
    }

    return (
        <div className="rounded-lg">
            <div className="flex justify-between lg:px-32 md:px-20 px-10  py-2 rounded-lg">
                <motion.div className="hovershake border bg-black px-2 opacity-[0.8] rounded-lg rounded-tl-sm rounded-br-sm"
                    initial = {{x:-200}}
                    animate= {{x:0}}
                    transition = {{
                        duration: 2
                    }}
                >
                    <img className="lg:w-32 lg:h-10 md:w-28 md:h-8 w-12 h-6 cursor-pointer -skew-x-12" src="https://wa1.narvii.com/static/img/amino-logo-home.svg?v=2" />
                </motion.div>
                <motion.div className="flex lg:gap-10 md:gap-5 gap-5"
                    initial = {{x:200}}
                    animate= {{x:0}}
                    transition = {{
                        duration: 2
                    }}
                >
                    {
                        !toggle ? 
                        <motion.p onClick={handler} className="hovershake mt-2 font-semibold text-gray-500 lg:text-[16px] md:text-[14px] text-[11px]"
                            initial = {{x:30}}
                            animate = {{x:0}}
                            transition = {{
                                duration : 2
                            }}
                        >
                            Search
                        </motion.p> 
                        : 
                        <motion.div className="flex border w-[130px] h-[30px] md:w-[150px] md:h-[35px] lg:w-[] lg:h-[]  bg-white rounded-lg shadow-xl"
                            initial = {{x:40}}
                            animate = {{x:1}}
                            transition = {{
                                duration : 1.5
                            }}
                        >
                            <input className="px-2 w-[100px] h-[25px] md:w-[115px] md:h-[30px] lg:w-[] lg:h-[] rounded-lg outline-none py-[1px]" type='text' placeholder='Search here' />
                            <div className="hovershake py-[6px] md:py-[8px] lg:py-2 pr-2">
                                <svg onClick={() => setToggle(!toggle)} className="active:scale-95 md:w-[26px] md:h-[20px] lg:w-[26px] lg:h-[26px]" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </motion.div>
                    }
                    <motion.p className="hovershake mt-2 font-semibold text-gray-500 cursor-pointer lg:text-[16px] md:text-[14px] text-[11px]"
                        initial = {{x:30}}
                        animate = {{x:0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        Explore
                    </motion.p>
                    <motion.p className="hovershake mt-2 font-semibold text-gray-500 cursor-pointer lg:text-[16px] md:text-[14px] text-[11px]"
                        initial = {{x:30}}
                        animate = {{x:0}}
                        transition = {{
                            duration : 2
                        }}
                    >
                        Get App
                    </motion.p>
                    <div className="hovershake lg:w-10 lg:h-10 md:w-8 md:h-8 md:mt-1 lg:mt-0 w-6 h-6 mt-1 rounded-full">
                        <motion.img className="w-[100%] h-[100%]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png" 
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
} 