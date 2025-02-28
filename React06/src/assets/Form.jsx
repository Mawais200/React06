import { useState } from "react"

export default function Form(){
let [formData, setFormData] = useState({ fullName: "", userName: "" });
    return(
        <div >
            <div className="flex flex-col items-center mt-12">
            <label htmlFor="fullName">
            <input 
                type="text" 
                placeholder="Write Name" 
                value={formData.fullName} 
                id="fullName"
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="p-2 w-72 mb-5 rounded border border-gray-300"
            />
            <button 
                className="px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer"onSubmit={(e)=>e.preventDefault()}
            >
                Submit
            </button>
            </label>
            </div>
            <div className="flex flex-col items-center mt-12">
            <label htmlFor="userName">
            <input 
                type="text" 
                placeholder="Write user Name" 
                value={formData.userName} 
                id="userName"
                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                className="p-2 w-72 mb-5 rounded border border-gray-300"
            />
            <button 
                className="px-4 py-2 bg-blue-500 text-white border-none rounded cursor-pointer" onSubmit={(e)=>e.preventDefault()}
            >
                Submit
            </button>
            </label>
            </div>
        </div>
        
    )
}