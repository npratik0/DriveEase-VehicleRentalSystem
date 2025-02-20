const ProfileDropdown = () => {
    return (
      <div className="absolute right-0 bg-white shadow-md p-4 rounded w-48">
        <p className="font-semibold">John Doe</p>
        <p className="text-sm text-gray-600">johndoe@email.com</p>
        <button className="text-blue-600 mt-2 w-full text-left">Edit Profile</button>
        <button className="text-red-600 mt-2 w-full text-left">Logout</button>
      </div>
    );
  };
  
  export default ProfileDropdown;
  