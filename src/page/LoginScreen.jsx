import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";

const LoginScreen = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/game'); // Redirect to the Game Screen
  };

  return (
    <div>
    <div className=" mt-4 flex justify-between">
    <p className="ml-4 text-xl md:text-3xl font-bold">MCQ GAME</p>
    <button className="bg-sky-400 p-1 w-20 md:p-2 md:w-40 text-xl md:text-3xl rounded-md mr-20 text-white font-bold" onClick={handleLogin}>Login</button>
    </div>
    <div className="flex flex-col justify-center items-center h-screen w-screen ">
    <h1 className=" text-2xl md:text-4xl font-bold">ReactJS MCQ Game App</h1>

    <img  className="mt-4 rounded-md w-72 md:w-auto" src="https://media.istockphoto.com/id/1343877330/photo/intellectual-game-concept-word-quiz-on-wooden-cubes.webp?b=1&s=170667a&w=0&k=20&c=87AgkNG7c0RBzLS683i3Ij-rHaXYxVAYHDxZExunRRA=" alt="" />
   
</div>
    </div>
  
  );
};

export default LoginScreen;