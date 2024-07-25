import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {UserModel} from "../../models/UserModel";
import {userService} from "../../services/api.services";

const RegistrationFormComponent = () => {


    let {
        handleSubmit,
        register
    } = useForm<UserModel>(
    //     {
    //     defaultValues: {
    //         username: 'AskaSlipc',
    //         password: 'V@renichka1488'
    //     }
    // }
    )
    const [isRedistrated, setIsRedistrated] = useState<boolean>(false)

    const onSubmitFormHandler = async (data: UserModel) => {
        let isReg = await userService.saveUser(data)
        setIsRedistrated(isReg)
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitFormHandler)}>

                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>register me</button>
            </form>

            <div>
                {
                    isRedistrated && (<span>registration completed</span>)
                }
            </div>

        </div>
    );
};

export default RegistrationFormComponent;