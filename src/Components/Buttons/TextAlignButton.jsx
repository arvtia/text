import { useState } from "react"

const TextAlignButton = () => {

   const[isActive, setIsActive] =useState(false);

   return (
      <>
         <div className="px-1 py-1 flex gap-2 bg-white rounded-md relative">
            <button className='px-2 bg-gray-100 hover:bg-gray-200 rounded-md'>
               <i className='bi bi-text-center'></i>
            </button>
            <div className="px-1 hover:bg-gray-50 rounded-md"
               onClick={()=> setIsActive(!isActive)}
            >
               <i className='bi bi-chevron-down text-sm hover:text-xs'></i>
            </div>

            {/* drop down */}
            {
               isActive &&(
                  <div className="rounded-md w-fit absolute top-full left-0 mt-1 bg-white px-2 py-2">
                     <ul className="flex gap-2 ">
                        <li className="rounded-md px-2 bg-gray-100 hover:bg-gray-200 flex gap-2 items-center">
                           <i className="bi bi-text-left"></i>
                        </li>
                        <li className="px-2  rounded-md bg-gray-100 hover:bg-gray-200 flex gap-2 items-center">
                           <i className="bi bi-text-right"></i>
                        </li>
                        <li className="px-2 rounded-md bg-gray-100 hover:bg-gray-200 flex gap-2 items-center">
                           <i className="bi bi-justify"></i>
                        </li>
                     </ul>
                  </div>
               )
            }

         </div>
      </>
   )
}

export default TextAlignButton
