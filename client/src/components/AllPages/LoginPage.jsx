import React,{ useState }  from 'react'
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();

    const [user, setuser] = useState({
        email: "",
        password: ""
    });

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();
    
        const {email , password } = user;
    
        const res = await fetch("/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,password
          })
        });
    
        const data = res.status;
    
        console.log(data);
        if (data === 421 || !data) {
          window.alert("Please fill all the field");
        } else if (data === 422 || !data) {
          window.alert("Email is already taken");
        } else if (data === 401 || !data) {
          window.alert("Password and confirm Password will be same");
        } else if (data === 200 || !data) {
          window.alert("Registration Successful");
          navigate("/");
        } else {
          window.alert("Something went wrong");
        }
      }

    return (
        <div className='flex justify-center items-center Login_Page'>
            <div className='bg-white h-3/4 w-2/5 px-20 py-10 flex justify-center items-center rounded-xl'>
                <div className='text-center'> <span className='text-3xl'>Login</span>

                    <div className=''>
                        <input className='border border-slate-700 outline-none w-full h-10 mt-10 px-3 rounded-lg' type="text" name="email" value={user.email} onChange={handleInput}  />
                        <input className='border border-slate-700 outline-none w-full h-10 my-10 px-3 rounded-lg' type="text" name="password" value={user.password} onChange={handleInput} />
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={PostData}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage