import styles from './login.module.css';
import Form from "../form/form";
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import FormLink from "../form/form-link/form-link";

const Login = () => {
    return (
        <main className={ styles.main }>
            <Form
                name='login'
                title='Вход'
                //handleSubmit={handleSubmit}
                buttonText='Войти'
                //handleClick={handleClick}
            >
                <EmailInput
                    // onChange={onChange}
                    // value={value}
                    name={ 'email' }
                    isIcon={ false }
                    extraClass="pb-6"
                />
                <PasswordInput
                    // onChange={onChange}
                    // value={value}
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
