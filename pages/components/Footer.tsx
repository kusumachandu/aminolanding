export default function Footer(){
    return(
        <div className="bg-blue-400 px-20 border-t-8 border-black mt-10 py-5">
            <div className="flex justify-between py-5">
                <div className="">
                    <div className="">
                        <img className="w-[24] h-7 -skew-x-12" src="https://wa1.narvii.com/static/img/amino-logo-home.svg?v=2" />
                    </div>
                    <div className="py-5">
                        <p className="font-bold py-1 text-gray-300">Build your own community,</p>
                        <p className="font-bold py-1 text-gray-300">Unite with your People,</p>
                        <p className="font-bold text-gray-300">Go deep and geek out.</p>
                    </div>
                    <div className="flex gap-10 font-bold">
                        <div className="cursor-pointer">Overview</div>
                        <div className="cursor-pointer">Features</div>
                        <div className="cursor-pointer">Help</div>
                        <div className="cursor-pointer">Privacy</div>
                    </div>
                </div>
                <div>
                    <p className="px-4 font-bold py-2">Get The App</p>
                    <div className="flex border rounded-lg bg-white mb-2 w-[150px] hovershake">
                        <div className="w-7 h-7 pl-2 pt-1">
                            <img className="w-7 h-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Apple_Logo.svg/45px-Apple_Logo.svg.png" />
                        </div>
                        <div className="ml-3">
                            <p className="text-xs">Download on the </p>
                            <p className="font-bold">App Store</p>
                        </div>
                    </div>
                    <div className="flex border rounded-lg bg-white hovershake">
                        <div className="pl-2 py-1">
                            <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                        <div className="ml-1">
                            <p className="text-xs ">Get It On</p>
                            <p className="font-bold ">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="py-3"></hr>
            <div className="flex justify-between">
                <div>@ All rights reserved</div>
                <div className="flex gap-8 mt-[-1%]">
                    <div className="border px-1 py-1 rounded-lg bg-gray-100 hovershake">
                        <svg className="pt-2" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </div>
                    <div className="border px-1 py-1 rounded-lg bg-gray-100 hovershake">
                        <svg className="pt-2" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </div>
                    <div className="border px-1 py-1 rounded-lg bg-gray-100 hovershake">
                        <svg className="pt-2" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <div className="border px-1 py-1 rounded-lg bg-gray-100 hovershake">
                        <svg className="pt-2" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="black" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}