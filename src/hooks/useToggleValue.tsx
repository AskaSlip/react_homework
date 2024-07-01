// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
// import { useState } from "react"

import {useState} from "react";

export const useToggleValue = () => {
    const [toggledValue, setToggledValue] = useState<boolean>(true)
    const toggled = () => {
        setToggledValue(prevState => !prevState)
    }
    return [toggledValue, toggled] as const;
}