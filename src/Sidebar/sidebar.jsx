import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col text-lg font-bold max-w-[300px] text-stone-800">
      <div className="flex gap-5 px-5 mt-6 text-base whitespace-nowrap">
      <input  type="checkbox" className="bg-white border border-solid border-neutral-600 h-[18px] w-[18px]" />

        <label htmlFor="women-checkbox" className="cursor-pointer  gap-5">
          
          Customisable
        </label>
      </div>
      <div className="mt-6 w-full border border-solid bg-neutral-200 border-neutral-200 min-h-[1px]" />
      <div className="flex gap-5 justify-between px-5 mt-6 w-full uppercase">
        <div class="form-group mb-15 mb-md-20" style={{ width: "100%" }}>

          <select class="form-select shadow-none fw-semibold rounded-0" style={{ width: "100%" }} >

            <option selected>Ideal For</option>
            <option value="1" className="mt-2">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
          </select>
        </div>
      </div>

      <div className="mt-6 w-full text-base underline text-neutral-300">
        Unselect all
      </div>
      <div className="flex gap-5 px-5 mt-6 text-base whitespace-nowrap">
      <input  type="checkbox" className="bg-white border border-solid border-neutral-600 h-[18px] w-[18px]" />
        
        <label htmlFor="men-checkbox" className="cursor-pointer">
        
          
          Men
        </label>
      </div>

      <div className="flex gap-5 px-5 mt-6 text-base whitespace-nowrap">
      <input  type="checkbox" className="bg-white border border-solid border-neutral-600 h-[18px] w-[18px]" />

        <label htmlFor="women-checkbox" className="cursor-pointer  gap-5">
          
          Women
        </label>
      </div>

      <div className="flex gap-2 px-5 mt-6 text-base">
      <input  type="checkbox" className="bg-white border border-solid border-neutral-600 h-[18px] w-[18px]" />
       
        <label htmlFor="baby-kids-checkbox" className="cursor-pointer">
        
          Baby & Kids
        </label>
      </div>

      <div className="flex gap-5 justify-between px-5 mt-6 w-full uppercase">
        <div class="form-group mb-15 mb-md-20" style={{ width: "100%" }}>

          <select class="form-select shadow-none fw-semibold rounded-0" style={{ width: "100%" }} >

            <option selected>Occasion</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-5 mt-6 w-full uppercase">
        <div class="form-group mb-15 mb-md-20" style={{ width: "100%" }}>

          <select class="form-select shadow-none fw-semibold rounded-0" style={{ width: "100%" }} >

            <option selected>Work</option>
            <option value="1" className="mt-2">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
          </select>
        </div>
      </div>

      <div className="flex gap-5 justify-between px-5 mt-6 w-full uppercase">
        <div class="form-group mb-15 mb-md-20" style={{ width: "100%" }}>

          <select class="form-select shadow-none fw-semibold rounded-0" style={{ width: "100%" }} >

            <option selected>Fabric</option>
            <option value="1" className="mt-2">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
          </select>
        </div>
      </div>



    </div>
  );
}
export default Sidebar;
