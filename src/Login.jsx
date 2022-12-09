import React, {useState} from 'react';
export const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login, password);
    }


  return (  
    <>
        <form onSubmit={handleSubmit}>
            <label for="login">login</label>
            <input value={login} onChange={(e) => setLogin(e.target.value)} type="login" placeholder="your login" id="login" name="login"></input>
            <label for="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="your password" id="password" name="password"></input>
            <button type="submit">Log In</button>
        </form>
        <button>Don't have an account? Register here.</button>
        <button>Forgot your password?</button>
    </>
  )

}