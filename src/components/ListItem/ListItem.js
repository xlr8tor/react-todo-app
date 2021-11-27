import {useState} from "react";
import { Wrapper, Content } from "./ListItem.styles";
import cross from '../../images/icon-cross.svg';
import { Draggable } from "react-beautiful-dnd";

const ListItem = (props) => {
    const [checked,setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
        props.isActive({id:props.text.id, completed:!checked, active: checked})
    }

    return (
        <Draggable key={props.text.id} draggableId={props.text.id.toString()} index={props.index}>
            {provided => (
                <Wrapper>
                    <Content ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                        <input 
                        type="checkbox" 
                        onChange={handleChecked} 
                        checked={props.completed}
                        />
                        <p onClick={() => { 
                                handleChecked()}}>
                        {props.text.todo}</p>
                        <img 
                        src={cross} 
                        alt="close button" 
                        onClick = {() => {
                            props.onDelete(props.text.id)
                        }}
                        />
                    </Content>
                </Wrapper>
            )}
        </Draggable>
        
        

    )
}

export default ListItem;