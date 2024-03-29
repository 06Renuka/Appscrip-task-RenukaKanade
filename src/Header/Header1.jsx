import React, { useState } from "react";

function RecommendedDropdown({ onChange }) {
    const handleDropdownChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <select
            className="text-lg font-bold leading-10 uppercase whitespace-nowrap text-stone-800"
            onChange={handleDropdownChange}
        >
            <option value="" className="flex gap-2 text-lg font-bold leading-10 uppercase whitespace-nowrap text-stone-800 " style={{border:'none'}}>RECOMMENDED</option>
            <option value="newest" >Newest first</option>
            <option value="popular">Popular</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
        </select>
    );
}


function Header1({ toggleSidebar }) {
    const [isFilterHidden, setIsFilterHidden] = useState(false);

    const handleRecommendedChange = (selectedOption) => {
        // Handle the change, e.g., update the sorting criteria
        console.log("Selected Option:", selectedOption);
    };
    const handleFilterToggle = () => {
        setIsFilterHidden(!isFilterHidden);
        toggleSidebar();
    };

    return (
        <div className="flex flex-col pt-2 bg-white container" style={{ border: '1px solid grey' }}>
            <div className="flex gap-5  justify-between w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between" style={{ maxWidth: 924 }}>
                    <div className="my-auto text-lg font-bold leading-10 uppercase text-stone-800">
                        3425 Items
                    </div>
                    <div className="flex gap-2 text-base leading-10 text-right bg-white text-zinc-500">

                    <div className="underline" onClick={handleFilterToggle}>
                            {isFilterHidden ? "\u25B6 SHOW FILTER" : "\u25C0 HIDE FILTER"}
                        </div>
                    </div>
                </div>

                <div className="flex z-10 flex-col self-end px-1  pb-2 -mt-2.5 max-w-25 text-lg leading-10 uppercase bg-white shadow-sm text-stone-800 w-[235px] max-md:px-5">

                    <RecommendedDropdown onChange={handleRecommendedChange} />
                </div>
            </div>
            <div className="mt-6 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px] max-md:max-w-full" />
        </div>
    );
}
export default Header1;

