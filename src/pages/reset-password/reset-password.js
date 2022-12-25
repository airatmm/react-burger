import styles from './reset-password.module.css';
import Form from "../form/form";
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../form/form-link/form-link";

const ResetPassword = () => {
    return (
        <main className={ styles.main }>
            <Form
                name='reset-password'
                title='Восстановление пароля'
                //handleSubmit={handleSubmit}
                buttonText='Сохранить'
                //handleClick={handleClick}
            >
                <PasswordInput
                    // onChange={onChange}
                    // value={value}
                    name={ 'password' }
                    placeholder={'Введите новый пароль'}
                    extraClass="pb-6"
                />
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    //onChange={e => setValue(e.target.value)}
                    //icon={'CurrencyIcon'}
                    // value={value}
                    name={'code'}
                    error={false}
                    //ref={inputRef}
                    //onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
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
};

export default ResetPassword;
