import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./style.css";
import { useEffect } from "react";

function LoginFormModal() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [emptyField, setEmptyField] = useState('true');
    const { closeModal } = useModal();

    //use effect missing?

    useEffect(() => {

        if (credential.length < 4 || password.length < 6) {

            setEmptyField(true);

        } else setEmptyField(false);

    }, [credential, password])



    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(sessionActions.login({ credential, password }))
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors({ credential: "The provided credentials were invalid." });
                }
            });
    };

    const demoSignIn = (e) => {
        e.preventDefault();
        const password = "password"
        const credential = "demo@user.io"
        dispatch(sessionActions.login({ credential, password }));
        closeModal();
    }




    return (
        <>
            <div className="login-form">
                <h1>Log In</h1>

                <form onSubmit={handleSubmit} className='form'>
                    <div className="credentials-input-fields">
                        <label>
                            Username or Email
                        </label>

                        <input
                            className="credentials-input"
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />

                        <div className="input-fields">
                            <label>
                                Password
                            </label>
                            <input
                                className="credentials-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    {errors.credential && (<p className="errors-messages">{errors.credential}</p>)}

                    <button type="submit"
                        className={emptyField ? "login-disabled" : 'login-button'}
                        disabled={Boolean(emptyField)}
                        id='log-button'>Log In</button>
                    <button onClick={demoSignIn} type="submit" className='submit-button' id='demouser-button'>Log in as Demo User</button>

                </form>
            </div>
        </>
    );
}

export default LoginFormModal;