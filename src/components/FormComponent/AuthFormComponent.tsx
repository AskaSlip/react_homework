import React from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPairModel} from "../../models/TokenObtainPairModel";
import {authService} from "../../services/api.services";

const AuthFormComponent = () => {


    let {
        register,
        handleSubmit
    } = useForm(
            {
            defaultValues: {
                username: 'AskaSlipc',
                password: 'V@renichka1488'
            }
        }
    )


    const authenticate =  (data: TokenObtainPairModel) => {
        authService.authUser (data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>log in</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;