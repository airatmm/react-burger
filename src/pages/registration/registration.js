import styles from './registration.module.css';
import Form from "../form/form";
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../form/form-link/form-link";

const Registration = () => {
    return (
        <main className={ styles.main }>
            <Form
                name='registration'
                title='Регистрация'
                //handleSubmit={handleSubmit}
                buttonText='Зарегистрироваться'
                //handleClick={handleClick}
            >
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    //onChange={e => setValue(e.target.value)}
                    //icon={'CurrencyIcon'}
                   // value={value}
                    name={'name'}
                    error={false}
                    //ref={inputRef}
                    //onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="pb-6"
                />
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
                <FormLink
                    url='/login'
                    spanText='Уже зарегистрированы?'
                    linkText='Войти'
                />
        </main>
    )
}

export default Registration;
