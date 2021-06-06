import InputForm from "./InputForm";
import Button from "./Button";
import {useState} from "react";

function InputFormContainer() {

    return (
        <form id="inputForm">
            <label>
                <InputForm id={"inputName"} placeholder={"Name"}/>
                <InputForm id={"inputURL"} placeholder={"Image URL"} />
            </label>
            <Button>Clear Input Fields</Button>
            <Button>Add</Button>
        </form>
    )
}

export default InputFormContainer;