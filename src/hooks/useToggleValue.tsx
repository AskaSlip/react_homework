import {useState} from "react";

export const useToggleValue = () => {
    const [toggledValue, setToggledValue] = useState<boolean>(true)
    const toggled = () => {
        setToggledValue(prevState => !prevState)
    }
    return [toggledValue, toggled] as const;
}