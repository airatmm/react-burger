import styles from './profile-user.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { editUser } from "../../../services/slices/edit-user-slice";

const ProfileUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store)

    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [buttonsDisabled, setButtonsDisabled] = useState({
        name: true,
        email: true,
        password: true,
    })
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function onButtonActive(name, ref) {
        setButtonsDisabled(prev => ({
            ...prev,
            [name]: !prev[name],
        }))
        setTimeout(() => ref.current.focus(), 0);
    }


    const onChangeValue = (e) => {
        setInputValue(inputValue => ({ ...inputValue, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            dispatch(editUser(inputValue));
            setButtonsDisabled({ name: true, email: true, password: true })
        }
    };

    function handleReset(e) {
        e.preventDefault()
        setButtonsDisabled({ name: true, email: true, password: true })
        setInputValue({ ...user, password: '' })
    }

    useEffect(() => {
        setInputValue({ ...user, password: '' });
    }, []);

    return (
        <form
            className={ styles.form }
            onSubmit={ handleSubmit }
        >
            <Input
                type={ 'text' }
                name={ 'name' }
                placeholder={ 'Имя' }
                onChange={ onChangeValue }
                value={ inputValue.name || '' }
                onIconClick={ () => onButtonActive('name', nameRef) }
                disabled={ buttonsDisabled.name }
                icon={ buttonsDisabled.name ? "EditIcon" : "CloseIcon" }
                ref={ nameRef }
                extraClass={ "pb-6" }
            />
            <Input
                type={ 'email' }
                name={ 'email' }
                placeholder={ 'E-mail' }
                onChange={ onChangeValue }
                value={ inputValue.email || '' }
                onIconClick={ () => onButtonActive('email', emailRef) }
                disabled={ buttonsDisabled.email }
                icon={ buttonsDisabled.email ? "EditIcon" : "CloseIcon" }
                ref={ emailRef }
                extraClass={ "pb-6" }
            />
            <Input
                type={ 'password' }
                name={ 'password' }
                placeholder={ 'Пароль' }
                onChange={ onChangeValue }
                value={ inputValue.password || '' }
                onIconClick={ () => onButtonActive('password', passwordRef) }
                disabled={ buttonsDisabled.password }
                icon={ buttonsDisabled.password ? "EditIcon" : "CloseIcon" }
                ref={ passwordRef }
                extraClass={ "pb-6" }
            />
            { !buttonsDisabled.name || !buttonsDisabled.email || !buttonsDisabled.password
                ?
                <div className={ styles.buttons }>
                    <Button
                        htmlType="button"
                        size="medium"
                        type="secondary"
                        onClick={ handleReset }
                    >Отмена</Button>
                    <Button
                        htmlType="button"
                        size="medium"
                        type="primary"
                        onClick={ handleSubmit }
                    >Сохранить</Button>
                </div>
                :
                null }
        </form>
    )
}

export default ProfileUser;
