import { useState } from "react";

export default function useToggle(initialState = false) {
    const [state, setState] = useState(initialState);

    function toggle() {
        setState(!state);
    }

    return [state, toggle];
}