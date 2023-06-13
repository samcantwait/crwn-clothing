import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match.')
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('This email address already belongs to a user.')
            } else {
                console.log('user creation encountered an error ', error);
            }
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    onChange={handleChange}
                    required
                    aria-required="true"
                    name="displayName"
                    value={displayName} />

                <FormInput
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    required
                    aria-required="true"
                    name="email"
                    value={email} />

                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    required
                    aria-required="true"
                    name="password"
                    value={password} />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    onChange={handleChange}
                    required
                    aria-required="true"
                    name="confirmPassword"
                    value={confirmPassword} />
                <Button buttonType='default' type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;