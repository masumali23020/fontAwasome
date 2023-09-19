const Input = ({handelChange,  value, title, name }) => {
    return (
        <div className="flex items-center mb-4 hover:bg-[#146ebe] py-2 px-1 rounded-md cursor-pointer ">
        <input onChange={handelChange}  id="default-checkbox" type="checkbox" value={value} name={name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
        <label htmlFor="default-checkbox" className=" w-full ml-2 flex justify-between items-center text-sm font-medium text-gray-900 cursor-pointer">{title} 
        <span >2525</span>
        </label>

    
          </div>
    );
  };
  
  export default Input;