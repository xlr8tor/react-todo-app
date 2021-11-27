import ListItem from "../ListItem/ListItem";
import Control from "../Control/Control";
import MobileCotrol from "../MobileControl/MobileControl";

import { Wrapper, Content,  Paragraph } from "./Grid.styles";
// 3rd Party
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const Grid = ({todoList,onDelete,isActive,FILTER_MAP,filter,setFilter,setTodolist,clearCompleted}) => {
   const handleOnDragEnd = (result) => {
        const items = Array.from(todoList);
        const [reorderedItems] = items.splice(result.source.index,1);
        items.splice(result.destination.index, 0, reorderedItems);
        setTodolist(items);
        //console.log(todoList)
   }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
                {provided => (
                    <Wrapper>
                        <Content {...provided.droppableProps} ref={provided.innerRef}>
                                {todoList.filter(FILTER_MAP[filter]).map((todo,i) => {
                                    return (
                                        <ListItem 
                                        key={todo.id} 
                                        text={todo} 
                                        onDelete={onDelete} 
                                        index={i}
                                        isActive={isActive}
                                        completed={todo.completed}
                                        />
                                    )                                
                                })}
                                {provided.placeholder}  
                            <Control 
                                items={todoList.length}
                                setFilter={setFilter}
                                clearCompleted={clearCompleted}
                            />
                        </Content>    
                        <MobileCotrol 
                            setFilter={setFilter}
                        />
                       <Paragraph>
                            <p className="dnd">Drag and Drop to reorder list</p> 
                       </Paragraph>
                    </Wrapper>
                )}
            </Droppable>
        </DragDropContext>
        
    )
}

export default Grid;