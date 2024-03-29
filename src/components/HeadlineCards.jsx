import React from "react";

const HeadlineCards = () => {
    return (
        <div className="max-w-[1540px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6" >
            {/* card */}
            <div className="rounded-xl relative" >
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                 <p className="font-bold text-2xl px-2 pt-4">Suns's Out, Bogo's Out</p>
                 <p className="px-2">Through 8/26</p>
                 <button className="border-white bg-white text-black mx-2 absolute button-4">Order Now</button>
                </div>
                <img 
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/7937463/pexels-photo-7937463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="/"
                 />
            </div> 
            {/* card */}
            <div className="rounded-xl relative" >
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                 <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                 <p className="px-2">Added Daily</p>
                 <button className="border-white bg-white text-black mx-2 absolute botton-4">Order Now</button>
                </div>
                <img 
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/3298179/pexels-photo-3298179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="/"
                 />
            </div>
            {/* card */}
            <div className="rounded-xl relative" >
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                 <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too!</p>
                 <p className="px-2">Through 8/26</p>
                 <button className="border-white bg-white text-black mx-2 absolute button-4"> Tasty Treats</button>
                </div>
                <img 
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="/"
                 />
            </div>
        </div>
    )
}

export default HeadlineCards