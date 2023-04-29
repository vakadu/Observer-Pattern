"use client"
import { ToastContainer, toast } from "react-toastify";
import Observerable from "./observer";

const logger = (data: any) => {
    console.log(`${Date.now()} ${data}======`)
};

const toastify = (data: any) => {
    toast(data);
};

Observerable.subscribe(logger);
Observerable.subscribe(toastify);

export default function Button() {

    const handleClick = () => {
        Observerable.notify("user clicked")
    };

    return(
        <>
            <button onClick={handleClick}>
                click me
            </button>
            <ToastContainer/>
        </>
    )
}
