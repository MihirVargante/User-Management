import React, { useState, useContext } from 'react';
import image from '../images/addUser.jpg';
import './style.css';
import { DataContext } from '../DataProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateUser = ({ isVisible,onClose }) => {
  const { data,addUser,setData} = useContext(DataContext);
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: 'male',
    age: '',
  });
  if (!isVisible) return null;



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const newUser = {
      ...formData,
      age: parseInt(formData.age), // Convert age to a number (if needed)
    };
    console.log(newUser)
    addUser(newUser);

    // Optionally, reset form fields after adding the user
    setFormData({
      name: '',
      password: '',
      phoneNumber: '',
      dateOfBirth: '',
      gender: 'male',
      email:'',
      age: '',
    });
    onClose()
    toast.success('User Created Successfully!!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col addCart">
        <i className="fa-solid fa-xmark place-self-end"        
        onClick={()=>{
                  onClose()
                }}></i>

        <div className="bg-white p-6 rounded-2xl shadow-lg max-h-[80vh] overflow-y-auto">
          <img src={image} alt="" className="create w-24 h-24 rounded-full mx-auto mb-2 userImage" />
          <form onSubmit={handleAddUser}>
            <div className="mb-4">
              <h2 className="block mb-2 text-xl">Name</h2>
              <input
                type="text"
                name="name"
                placeholder="Enter name..."
                value={formData.name}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="mb-4">
        `      <h2 className="block mb-2 text-xl">Email</h2>
              <input
                type="email"
                name="email"
                placeholder="Enter email..."
                value={formData.email}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              />
            </div>`
            <div className="mb-4">
              <h2 className="block mb-2 text-xl">Password</h2>
              <input
                type="password"
                name="password"
                placeholder="Enter password..."
                value={formData.password}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="mb-4">
              <h2 className="block mb-2 text-xl">Phone Number</h2>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number..."
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="mb-4">
              <h2 className="block mb-2 text-xl">Date of Birth</h2>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="mb-4">
              <h2 className="block mb-2 text-xl">Gender</h2>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <h2 className="block mb-2 text-xl">Age</h2>
              <input
                type="number"
                name="age"
                placeholder="Enter age..."
                value={formData.age}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
