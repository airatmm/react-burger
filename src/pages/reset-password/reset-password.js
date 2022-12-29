import styles from './reset-password.module.css';
import Form from "../form/form";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import FormLink from "../form/form-link/form-link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { reset } from "../../services/slices/reset-password-slice";
import { Redirect, useHistory } from "react-router-dom";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // const prevPathname = history.location.state && history.location.state.prevPathname;
    const prevPathname = history.location.state?.prevPathname;
    const isLogged = useSelector(store => store.user.isLogged)
    console.log(isLogged)
    const ifResetSuccess = useSelector(store => store.reset.resetPasswordSuccess);

    const [inputValue, setInputValue] = useState({
        password: '',
        token: '',
    });

    const { password, token } = inputValue;

    const onChangeValue = (e) => {
        setInputValue(inputValue => ({ ...inputValue, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password && token) {
        dispatch(reset(inputValue));
        }
    };
    useEffect(() => {
        if (password && token && ifResetSuccess) {
            history.push('/login')
        }
    }, [ifResetSuccess, history, password, token])

    if (!prevPathname) {
        return (
            <Redirect to={{
                pathname: '/login',
            }}
            />
        );
    }

    if (isLogged) {
        return <Redirect to='/' />
    }

    return (
        <main className={ styles.main }>
            <Form
                name='reset-password'
                title='Восстановление пароля'
                handleSubmit={handleSubmit}
                buttonText='Сохранить'
                handleClick={handleSubmit}
            >
                <PasswordInput
                    onChange={onChangeValue}
                    value={password}
                    name={ 'password' }
                    placeholder={'Введите новый пароль'}
                    extraClass="pb-6"
                />
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={onChangeValue}
                    //icon={'CurrencyIcon'}
                    value={token}
                    name={'token'}
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
