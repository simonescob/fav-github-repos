import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trigger } from '../utils/events';
import { supabase } from '../client'

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here
    console.log(`Email: ${email} Password: ${password}`);

    localStorage.removeItem("repositories");

    const dataRegister = localStorage.getItem("dataRegister");

    if(dataRegister !== null || dataRegister !== undefined){

      console.log("loggined");
      const data = JSON.parse(dataRegister || '')
      console.log("data register", data);

      if(data.email === email && data.password === password){
      
        localStorage.setItem("token", 'code');
        trigger("authed");
        signInWithGithub();
        navigate('/list-repos');

      }else{
      
        setErrMsg('Sorry, the password or email you provided is not valid. Please make sure you enter the correct information and try again.')
        setTimeout(() => {
          setErrMsg('');
        }, 5000);
      
      }

    }

  };

  const togglePass = () => {
    setShowPass(!showPass);
  }

  async function signInWithGithub() {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    console.log('data signInWithGithub', data);
  }

  useEffect(() => {

    let token = localStorage.getItem("token")

    if(token === 'code'){
      navigate('/list-repos');
    }
    
  }, [])
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {errMsg !== '' && <div className="text-red-500 mb-4">{errMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type={ showPass === false ? "password" : "text" }
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded w-full"
              required
            />

            <div className="underline cursor-pointer" onClick={togglePass}>Show password</div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
