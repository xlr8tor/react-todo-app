import { useState } from "react";
import { Wrapper, Content, Button } from "./Control.styles";


const Control = (props) => {
    const [ activeBtn, setActiveBtn] = useState({active: 'All'});

    return (
        <Wrapper>
            <Content>
                <span>{props.items} items left</span>
                <Button 
                    className={`all ${activeBtn.active === 'All'? 'Active': ''}`} 
                    onClick={() => {props.setFilter('All'); setActiveBtn({active:'All'});}}>All</Button>
                <Button 
                    className={`active ${activeBtn.active === 'Active'? 'Active': ''}`}
                    onClick={() => {
                        props.setFilter('Active');
                        setActiveBtn({active:'Active'});
                    }}>Active</Button>
                <Button 
                    className={`completed ${activeBtn.active === 'Completed'? 'Active': ''}`}
                    onClick={() => {
                        props.setFilter('Completed')
                        setActiveBtn({active:'Completed'});
                    }}>Completed</Button>
                <Button 
                    className="clear"
                    onClick={() => {
                        props.clearCompleted();
                    }}>Clear Completed</Button>
            </Content>
        </Wrapper>
    )
}

export default Control