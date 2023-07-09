import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import './style.css';

function SignupFormModal() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emptyField, setEmptyField] = useState('true');
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    useEffect(() => {

        if (username.length === 0 || username.length < 4 ||
            firstName.length === 0 || lastName.length === 0 || email.length === 0 ||
            password.length === 0 || password.length < 6 || password !== confirmPassword) {

            setEmptyField(true);

        } else setEmptyField(false);

    }, [email, firstName, lastName, username, password, confirmPassword])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors({});
            return dispatch(sessionActions.signup({ email, username, firstName, lastName, password }))
                .then(closeModal)
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <>
            <div className="login-form">
                <h1>Sign Up</h1>

                <form onSubmit={handleSubmit} className='form'>


                    <div className="input-fields">

                        <label>
                            Email
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <p className="errors">{errors.email}</p>}
                    </div>
                    <div className="input-fields">
                        {errors.username && <p className="errors">{errors.username}</p>}
                        <label>
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        {errors.firstName && <p className="errors">{errors.firstName}</p>}
                        <label>
                            First Name
                        </label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        {errors.lastName && <p className="errors">{errors.lastName}</p>}
                        <label>
                            Last Name
                        </label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        {errors.password && <p className="errors">{errors.password}</p>}
                        <label>
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-fields">
                        {errors.confirmPassword && <p className="errors">{errors.confirmPassword}</p>}
                        <label>
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit"
                        className={emptyField ? "signup-disabled" : 'signup-button'}
                        disabled={Boolean(emptyField)}
                        id='sign-button'>Sign Up</button>
                </form>
            </div>
        </>
    );
}

export default SignupFormModal;
