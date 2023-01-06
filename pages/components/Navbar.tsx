import { useEffect, useState } from "react"


export default function Navbar(){

    const [toggle, setToggle] = useState(false);

    function handler(){
        setToggle(!toggle)
    }

    return (
        <div className="rounded-lg">
            <div className="flex justify-between lg:px-32 sm:px-14 py-2 rounded-lg">
                <div className="hovershake border bg-black px-2 opacity-[0.8] rounded-lg rounded-tl-sm rounded-br-sm">
                    <img className="lg:w-32 lg:h-10 sm:w-28 sm:h-8 cursor-pointer -skew-x-12" src="https://wa1.narvii.com/static/img/amino-logo-home.svg?v=2" />
                </div>
                <div className="flex lg:gap-10 sm:gap-5">
                    {
                        !toggle ? 
                        <p onClick={handler} className="hovershake mt-2 font-semibold text-gray-500 lg:text-[16px] sm:text-[12px]">Search</p> 
                        : 
                        <div className="flex border bg-white rounded-lg shadow-xl">
                            <input className=" px-2 rounded-lg" type='text' placeholder='Search here' />
                            <div className="hovershake py-2 pr-2">
                                <svg onClick={() => setToggle(!toggle)} className="active:scale-95" viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    }
                    <p className="hovershake mt-2 font-semibold text-gray-500 cursor-pointer lg:text-[16px] sm:text-[12px]">Explore</p>
                    <p className="hovershake mt-2 font-semibold text-gray-500 cursor-pointer lg:text-[16px] sm:text-[12px]">Get App</p>
                    <div className="hovershake lg:w-10 lg:h-10 sm:w-6 sm:h-6 sm:mt-1 lg:mt-0 rounded-full">
                        <img className="w-[100%] h-[100%]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png" />
                    </div>
                </div>
            </div>
        </div>
    )
} 