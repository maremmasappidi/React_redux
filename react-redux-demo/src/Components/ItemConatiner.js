import React from 'react'
import {connect} from 'react-redux'
const ItemContainer = (props) => {
    return ( 
        <div>
            <h2>Item -{props.item}</h2>


        </div>
     )
}
const mapStateToProps =(state,ownprops)=>

{
    const itemState=ownprops.cake?state.cake.numOfCakes:state.iceCream.numOfIceCreams
    return{
        item:itemState
    }
    
    

}
export default connect(mapStateToProps) (ItemContainer) ;