import { useState } from "react"

export default function Form(){
let [fullName,SetfullName] =useState("Awais");
    return(
        <div className="flex flex-col items-center mt-12">
            <input 
                type="text" 
                placeholder="Write something" 
                value={fullName} 
                onChange={(e)=>SetfullName(e.target.value) }
                className="p-2 w-72 mb-5 rounded border border-gray-300"
            />
            <button 
                className="px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer"
            >
                Submit
            </button>
        </div>
    )
}