import React, {FC} from 'react';
import {CarWithAuthModel} from "../models/CarWithAuthModel";

interface IProps {
    cars: CarWithAuthModel[];
}

const CarsComponent: FC <IProps> = ({cars}) => {



    return (
        <div>
            {
                cars.map((car) => (<div>{car.brand} {car.year}</div>))
            }
        </div>
    );
};

export default CarsComponent;