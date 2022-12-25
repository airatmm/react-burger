import styles from './forgot-password.module.css';
import Form from "../form/form";
import { EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../form/form-link/form-link";

const ForgotPassword = () => {
    return (
        <main className={ styles.main }>
            <Form
                name='forgot-password'
                title='Восстановление пароля'
                //handleSubmit={handleSubmit}
                buttonText='Восстановить'
                //handleClick={handleClick}
            >
                <EmailInput
                    // onChange={onChange}
                    // value={value}
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
