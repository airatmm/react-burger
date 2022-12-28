import styles from './profile-user.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserData } from "../../../services/slices/get-user-data-slice";
import { editUser } from "../../../services/slices/edit-user-slice";

const ProfileUser = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store)
    //console.log(user)
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

    function onButtonActive(name) {
        setButtonsDisabled(prev => ({
            ...prev,
            [name]: !prev[name],
        }))
    }

    const onChangeValue = (e) => {
        setInputValue(inputValue => ({ ...inputValue, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            dispatch(editUser(inputValue));
        }
    };
    useEffect(() => {
        setInputValue({ ...user, password: '' });
    }, [user]);

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch])

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
                onIconClick={ () => onButtonActive('name') }
                disabled={ buttonsDisabled.name }
                icon={ buttonsDisabled.name ? "EditIcon" : "CloseIcon" }
                extraClass={ "pb-6" }
            />
            <Input
                type={ 'email' }
                name={ 'email' }
                placeholder={ 'E-mail' }
                onChange={ onChangeValue }
                value={ inputValue.email || '' }
                onIconClick={ () => onButtonActive('email') }
                disabled={ buttonsDisabled.email }
                icon={ buttonsDisabled.email ? "EditIcon" : "CloseIcon" }
                extraClass={ "pb-6" }
            />
            <Input
                type={ 'password' }
                name={ 'password' }
                placeholder={ 'Пароль' }
                onChange={ onChangeValue }
                value={ inputValue.password || '' }
                onIconClick={ () => onButtonActive('password') }
                disabled={ buttonsDisabled.password }
                icon={ buttonsDisabled.password ? "EditIcon" : "CloseIcon" }
                extraClass={ "pb-6" }
            />
            <div className={ styles.buttons }>
                <Button
                    htmlType="button"
                    size="medium"
                    type="secondary"
                >Отмена</Button>
                <Button
                    htmlType="button"
                    size="medium"
                    type="primary"
                    onClick={ handleSubmit }
                >Сохранить</Button>
            </div>
        </form>
    )
}

export default ProfileUser;
