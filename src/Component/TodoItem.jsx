import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaSmile, FaSadTear } from 'react-icons/fa';

function TodoItem(prop){

  
 return(
 <div className='flex  items-center mt-2  rounded-md p-2 bg-purple-300   mx-4'>
     <div className=" flex items-center ">
     {prop.list.ismark ? <FaSmile className=' text-green-500 size-6 align-middle '></FaSmile> :<FaSadTear className=' text-orange-900 size-6 align-middle '></FaSadTear>}
     <li key={prop.list.id} className='font-sans text-2xl pr-4 pl-2  text-black text-wrap  w-48 '>{prop.list.value}</li>
     </div>
  <div className=" flex  items-center ml-auto ">
  <input type='checkbox' checked={prop.list.ismark} className='size-5 m-2 border-green-400 ml-14 items-end cursor-pointer ' onChange={()=>{
     prop.onmark(prop.list.id)
  }}></input>
  <FaEdit className='size-6 m-2 text-orange-600 cursor-pointer' onClick={()=>{
    prop.onedit(prop.list.id)
  }} ></FaEdit>
  <FaTrash className='size-6 m-2 text-red-700 cursor-pointer ' onClick={()=>{
    prop.ondelete(prop.list.id)
  }}></FaTrash>
  </div>


 </div>
  
 )
}
export default  TodoItem