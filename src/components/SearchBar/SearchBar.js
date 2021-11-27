import {useState} from "react";
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({submit}) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <Wrapper>
            <Content>
                <input type="checkbox" name="" id="" />
                <input 
                type="text" 
                placeholder="Create a new todo..."
                value = {inputValue}

                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown = {(event) => {
                    if(event.key === "Enter"){
                        submit(inputValue);
                        setInputValue("")
                    }
                }}
                />
            </Content>
        </Wrapper>
    )
   
}

export default SearchBar;