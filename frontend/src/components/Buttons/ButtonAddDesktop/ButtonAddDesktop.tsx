import { AddButton } from './index';
import { GrAdd } from "react-icons/gr";

function ButtonAddDesktop() {
    return (
        <AddButton>
            <span>Lançar nota</span>
            <GrAdd className='iconAdd'/>
        </AddButton>
    );
}
  
export default ButtonAddDesktop;
  