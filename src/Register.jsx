import React, {useState} from 'react';
import validator from 'validator';
export const Register = () => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');
    const [registerButtonVisibility, setRegisterButtonVisibility] = useState(true);

    const handleSubmit = (e) => { 
        e.preventDefault();
        validateConfirmPassword();
        console.log(login, name, surname, email, password);
    }

    const validateEmail = (e) => {
        if (validator.isEmail(email)) {
            return true;
        } else {
            return false;
        }
    }

    const validatePasswordOnChange = (e) => {
        setPassword(e.target.value);
        if (password.length >= 9) {
            setPasswordError('');
            setRegisterButtonVisibility(true);
        } else {
            setPasswordError('Password must be at least 9 characters.');
            setRegisterButtonVisibility(false);
        }
    }

    const validateConfirmPassword = () => {
        if (password === confirmPassword) {
            setPasswordConfirmError('');
        } else {
            setPasswordConfirmError('Passwords do not match.');
        }
    }


    return (  
        <>
            <>Create an account</>
            <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" id="name" name="name"></input>
                <label for="surname">Surname</label>
                <input value={surname} onChange={(e) => setSurname(e.target.value)} type="surname" placeholder="Surname" id="surname" name="surname"></input>
                <label for="login">Login</label>
                <input value={login} onChange={(e) => setLogin(e.target.value)} type="login" placeholder="Login" id="login" name="login"></input>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email"></input>
                <label for="password">Password</label>
                <input value={password} onChange={(e) => validatePasswordOnChange(e)} type="password" placeholder="Password" id="password" name="password"></input>
                <>Passoword must be at least 9 characters.</>
                <>{passwordError}</>
                <label for="confirmPassword">Confirm password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm your password" id="confirmPassword" name="confirmPassword"></input>
                <>{passwordConfirmError}</>
                <button type="submit" >Register</button>
            </form>
            <button>Already have an account? Log in here.</button>
        </>
      )
    }