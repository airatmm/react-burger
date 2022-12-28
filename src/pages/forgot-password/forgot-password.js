import styles from './forgot-password.module.css';
import Form from "../form/form";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../form/form-link/form-link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { forgot } from "../../services/slices/forgot-password-slice";
import { Redirect, useHistory } from "react-router-dom";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const refreshToken = localStorage.refreshToken;
    const ifForgotSuccess = useSelector(store => store.forgot.forgotPasswordSuccess);
    const [email, setEmail] = useState('');

    const onChangeValue = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            dispatch(forgot({ email }));
        }
    };

    useEffect(() => {
        if (ifForgotSuccess && email) {
            history.push('/reset-password')
        }
    }, [ifForgotSuccess, history, email])

    if (refreshToken) {
        return <Redirect to='/' />
    }

    return (
        <main className={ styles.main }>
            <Form
                name='forgot-password'
                title='Восстановление пароля'
                handleSubmit={ handleSubmit }
                buttonText='Восстановить'
                handleClick={ handleSubmit }
            >
                <EmailInput
                    onChange={ onChangeValue }
                    value={ email }
                    name={ 'email' }
                    isIcon={ false }
                    placeholder="Укажите e-mail"
                    extraClass="pb-6"
                />
            </Form>
            <FormLink
                url='/login'
                spanText='Вспомнили пароль?'
                linkText='Войти'
            />
        </main>

    )
}

export default ForgotPassword;
