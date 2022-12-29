import styles from './registration.module.css';
import Form from "../form/form";
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../form/form-link/form-link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../services/slices/registration-slice";
import { Redirect } from 'react-router-dom';

const Registration = () => {
    const dispatch = useDispatch();
    const isRegistrationSuccess = useSelector(store => store.registration.registrationSuccess)
    const isLogged = useSelector(store => store.user.isLogged)
    console.log(isLogged)

    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        password: '',
    });

    const onChangeValue = (e) => {
        setInputValue(inputValue => ({ ...inputValue, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registration(inputValue));
    };

    if (isRegistrationSuccess) {
        return <Redirect to='/login' />
    }

    if (isLogged) {
        return <Redirect to='/' />
    }

    return (
        <main className={ styles.main }>
            <Form
                name='registration'
                title='Регистрация'
                handleSubmit={ handleSubmit }
                buttonText='Зарегистрироваться'
                handleClick={ handleSubmit }
            >
                <Input
                    type={ 'text' }
                    placeholder={ 'Имя' }
                    onChange={ onChangeValue }
                    value={ inputValue.name || '' }
                    name={ 'name' }
                    error={ false }
                    errorText={ 'Ошибка' }
                    size={ 'default' }
                    extraClass="pb-6"
                />
                <EmailInput
                    onChange={ onChangeValue }
                    value={ inputValue.email || '' }
                    name={ 'email' }
                    isIcon={ false }
                    extraClass="pb-6"
                />
                <PasswordInput
                    onChange={ onChangeValue }
                    value={ inputValue.password || '' }
                    name={ 'password' }
                    extraClass="pb-6"
                />
            </Form>
            <FormLink
                url='/login'
                spanText='Уже зарегистрированы?'
                linkText='Войти'
            />
        </main>
    )
}

export default Registration;
