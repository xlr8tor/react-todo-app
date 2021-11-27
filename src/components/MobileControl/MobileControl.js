import { useState } from "react";
import { Wrapper , Content, Button } from "./MobileControl.styles"

const MobileCotrol = (props) => {
    const [ activeBtn, setActiveBtn] = useState({active: 'All'});

    return (
        <Wrapper>
            <Content>
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
            </Content>
        </Wrapper>
    )
}

export default MobileCotrol