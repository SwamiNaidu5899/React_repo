import { Component } from "react";
import ButtonF from "../Function-components/button";



class FormComponent extends Component{

    render(){ 
        return(
            <div>
                <form action="">

                    <input type="text"  placeholder="Enter UserName" /><br />
                    <input type="password" name="" placeholder="Enter Password" id="" />
                    <ButtonF/>
                </form>
            </div>
        )
    }

}

export default FormComponent