import { FC, useEffect, useState } from 'react';

interface ProfileProps {
  name: string;
  age: number;
  email: string;
}

const Profile: FC = () => {

  const [userData, setUserData] = useState<ProfileProps>({
    name: '',
    age: 0,
    email: '',
  });

  useEffect(() => {
    
    const dataRegister = localStorage.getItem("dataRegister");

    if(dataRegister !== null || dataRegister !== undefined){
      const data = JSON.parse(dataRegister || '')
      setUserData(data)
    }

  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">{userData.name}</h2>
      <p className="text-gray-700">Age: {userData.age}</p>
      <p className="text-gray-700">Email: {userData.email}</p>
    </div>
  );
};

export default Profile;
