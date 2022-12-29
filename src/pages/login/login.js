import styles from './login.module.css';
import Form from "../form/form";
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../form/form-link/form-link";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../../services/slices/login-slice";
import { Redirect } from "react-router-dom";
import { setUserData } from "../../services/slices/user-slice";

const Login = () => {
    const dispatch = useDispatch();

    const isLogged = useSelector(store => store.user.isLogged)
    console.log(isLogged)

    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    });

    const onChangeValue = (e) => {
        setInputValue(inputValue => ({ ...inputValue, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(inputValue));
        dispatch(setUserData(inputValue))
    };

    if (isLogged) {
        return <Redirect to='/' />
    }
    return (
        <main className={ styles.main }>
            <Form
                name='login'
                title='Вход'
                handleSubmit={handleSubmit}
                buttonText='Войти'
                handleClick={handleSubmit}
            >
                <EmailInput
                    onChange={onChangeValue}
                    value={inputValue.email}
                    name={ 'email' }
                    isIcon={ false }
                    extraClass="pb-6"
                />
                <PasswordInput
                    onChange={onChangeValue}
                    value={inputValue.password}
                    name={ 'password' }
                    extraClass="pb-6"
                />
            </Form>
            <div className={ styles.additional }>
                <FormLink
                    url='/registration'
                    spanText='Вы — новый пользователь?'
                    linkText='Зарегистрироваться'
                />
                <FormLink
                    url='/forgot-password'
                    spanText='Забыли пароль?'
                    linkText='Восстановить пароль'
                />
            </div>
        </main>

    )
}

export default Login;
