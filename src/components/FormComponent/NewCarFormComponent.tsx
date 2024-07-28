import React from 'react';
import {useForm} from "react-hook-form";
import {CarWithAuthModel} from "../../models/CarWithAuthModel";
import {carService} from "../../services/api.services";

const NewCarFormComponent = () => {


    let {
        register,
        handleSubmit
    }
    = useForm<CarWithAuthModel>()

const createNewCarHandler =  (data: CarWithAuthModel) => {
        carService.createCar(data)
    console.log(data);
}


    return (
        <div>
            <form onSubmit={handleSubmit(createNewCarHandler)}>
                <input type="text" {...register('brand')} placeholder={'brand'}/>
                <input type="number" {...register('price')} placeholder={'price'}/>
                <input type="number" {...register('year')} placeholder={'year'}/>
                <button>create car</button>
            </form>
        </div>
    );
};

export default NewCarFormComponent;