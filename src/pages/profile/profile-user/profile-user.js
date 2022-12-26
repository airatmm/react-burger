import styles from './profile-user.module.css';
import { EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileUser = () => {
    return (
            <form
                className={ styles.form }
                //onSubmit={ handleSubmit }
            >
                <Input
                    type={ 'text' }
                    placeholder={ 'Имя' }
                    // onChange={ onChangeValue }
                    // value={ inputValue.name || '' }
                    name={ 'name' }
                    error={ false }
                    errorText={ 'Ошибка' }
                    size={ 'default' }
                    icon={ 'EditIcon' }
                    extraClass="pb-6"
                />
                <EmailInput
                    // onChange={ onChangeValue }
                    // value={ inputValue.email || '' }
                    name={ 'email' }
                    isIcon={true}
                    extraClass="pb-6"
                />
                <PasswordInput
                    // onChange={ onChangeValue }
                    // value={ inputValue.password || '' }
                    name={ 'password' }
                    icon="EditIcon"
                    extraClass="pb-6"
                />
            </form>
    )
}

export default ProfileUser;
