// usePrevious - hook that allows a component to keep track of the previous value of a variable.

import {useEffect, useRef} from "react";

export const usePrevious =<T, > (value: T) => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}