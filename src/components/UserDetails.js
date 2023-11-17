import React,{Fragment, useContext, useState} from 'react'
import { DataContext } from '../DataProvider'
import CreateUser from './CreateUser'
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDetails = () => {
  const {data, addUser,setData}=useContext(DataContext)
  const [showModal,setShowModal]=useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const users=data.users;
  console.log("we are indetails")
  console.log(users)
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleDeleteUser = (userId) => {
    const updatedUsers = data.users.filter((user) => user.id !== userId);
    setData({ ...data, users: updatedUsers });
    toast.success('User Deleted Successfully!!');
  };
  // Filtering users based on the search query
  const filteredUsers = users.filter((user) => {
    const name = user.name ? user.name.toLowerCase() : '';
    const email = user.email ? user.email.toLowerCase() : '';
    const query = searchQuery.toLowerCase();
  
    return (
      name.includes(query) || email.includes(query)
    );
  });
  return (
    <Fragment>
    <div>
    <div className="w-full flex items-center border-2 headerBar">
      <div className="text-2xl ml-1 userList">User List</div>
      <div className="rounded-2xl search-bar mx-auto my-3" >
        <i class="fa-solid fa-magnifying-glass ml-1"></i>
        <input type="text" className="w-11/12 py-2 px-4 search-bar-input focus:rounded-2xl focus:border-none " value={searchQuery} onChange={handleSearchInputChange} placeholder="Search name,email...."/>
      </div>
      <button type="button" onClick={()=>setShowModal(true)} class="text-white bg-gradient-to-br addBtn from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><i class="fa-solid fa-user-plus"></i></button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full mt-2 ">
        <thead className="bg-gray-50 border-b-2">
          <tr>
            <th className="p-3 tracking-wide font-semibold text-sm text-left">ID</th>
            <th className="p-3 tracking-wide font-semibold text-sm text-left">Name</th>
            <th className="p-3 tracking-wide font-semibold text-sm text-left">PhoneNo</th>
            <th className="p-3 tracking-wide font-semibold text-sm text-left">Email</th>
            <th className="p-3 tracking-wide font-semibold text-sm text-left">Creation Date</th>
            <th className="p-3 tracking-wide font-semibold text-sm text-left">Gender</th>
            <th className="p-3 tracking-wide font-semibold text-sm text-left">Delete</th>
          </tr>
        </thead>

        {filteredUsers && filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="p-3 text-sm text-gray-700 border-b-2">{user.id}</td>
                  <td className="p-3 text-sm text-gray-700 border-b-2">{user.name}</td>
                  <td className="p-3 text-sm text-gray-700 border-b-2">{user.phoneNumber}</td>
                  <td className="p-3 text-sm text-gray-700 border-b-2">{user.email}</td>
                  <td className="p-3 text-sm text-gray-700 border-b-2">{user.createdDate}</td>
                  <td className="p-3 text-sm text-gray-700 border-b-2">{user.gender}</td>
                  <td className="p-3 text-sm text-gray-700 border-b-2"><button onClick={() => handleDeleteUser(user.id)}><i class="fa-solid fa-trash"></i></button></td>
                </tr>
              ))}
      </table>
    </div>
    </div>
    <CreateUser isVisible={showModal} onClose={()=>{
      setShowModal(false)
    }}/>
    </Fragment>
  )
}

export default UserDetails
