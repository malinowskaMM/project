import React, {useState} from 'react';
import validator from 'validator';
export const Register = () => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordValidationError, setPasswordValidationError] = useState('');
    const [passwordConfirmValidationError, setPasswordConfirmValidationError] = useState('');
    const [nameError, setNameValidationError] = useState('');
    const [surnameError, setSurnameValidationError] = useState('');
    const [loginError, setLoginValidationError] = useState('');
    const [emailError, setEmailValidationError] = useState('');
    const [registerButtonVisibility, setRegisterButtonVisibility] = useState(true);


    const handleSubmit = (e) => { 
        e.preventDefault();
        validateEmail();
        validateConfirmPassword();
        console.log(login, name, surname, email, password);
    }

    const validateNameOnChange = (e) => {
        setName(e.target.value);
        if (validator.isAlphanumericLocales(name, 'pl-PL') && name.length >= 1 && name.length <= 32) {
            setNameValidationError('');
            return true;
        } else {
            setNameValidationError('Name must be between 1 and 32 characters and contains only letters and numbers.');
            return false;
        }
    }

    const validateSurnameOnChange = (e) => {
        setSurname(e.target.value);
        if (validator.isAlphanumericLocales(surname, 'pl-PL') && surname.length >= 1 && surname.length <= 32) {
            setSurnameValidationError('');
            return true;
        } else {
            setSurnameValidationError('Surname must be between 1 and 32 characters and contains only letters and numbers');
            return false;
        }
    }

    const validateLoginOnChange = (e) => {
        setLogin(e.target.value);
        if (validator.isAlphanumeric(login) && login.length >= 3 && login.length <= 32) {
            setLoginValidationError('');
            return true;
        } else {
            setLoginValidationError('Login must be between 3 and 32 characters.');
            return false;
        }
    }

    const validateEmail = (e) => {
        if (validator.isEmail(email) && email.length <= 254) {
            setEmailValidationError('');
            return true;
        } else {
            return false;
        }
    }

    const validatePasswordOnChange = (e) => {
        setPassword(e.target.value);
        if (password.length >= 9) {
            setPasswordValidationError('');
            setRegisterButtonVisibility(true);
        } else {
            setPasswordValidationError('Password must be at least 9 characters.');
            setRegisterButtonVisibility(false);
        }
    }

    const validateConfirmPassword = () => {
        if (password === confirmPassword) {
            setPasswordConfirmValidationError('');
        } else {
            setPasswordConfirmValidationError('Passwords do not match.');
        }
    }


    return (  
        <>
            <>Create an account</>
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input value={name} onChange={(e) => validateNameOnChange(e)} type="name" placeholder="Name" id="name" name="name"></input>
                <>{nameError}</>
                <label for="surname">Surname</label>
                <input value={surname} onChange={(e) => validateSurnameOnChange(e)} type="surname" placeholder="Surname" id="surname" name="surname"></input>
                <>{surnameError}</>
                <label for="login">Login</label>
                <input value={login} onChange={(e) => validateLoginOnChange(e)} type="login" placeholder="Login" id="login" name="login"></input>
                <>{loginError}</>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email"></input>
                <>{emailError}</>
                <label for="password">Password</label>
                <input value={password} onChange={(e) => validatePasswordOnChange(e)} type="password" placeholder="Password" id="password" name="password"></input>
                <>Passoword must be at least 9 characters.</>
                <>{passwordValidationError}</>
                <label for="confirmPassword">Confirm password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm your password" id="confirmPassword" name="confirmPassword"></input>
                <>{passwordConfirmValidationError}</>
                <button type="submit" >Register</button>
            </form>
            <button>Already have an account? Log in here.</button>
        </>
      )
    }