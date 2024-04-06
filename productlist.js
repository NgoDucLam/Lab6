import React from "react";
import { View,Text,Button } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "./actions";
const productlist=({products})=>{
    const dispatch=useDispatch();//phan phoi trang thai
    return(
        <View>
            {
                products.map(product=>(
                    <View key={product.id}>
                         <Text>{product.name}</Text>   
                         <Button title="Add to Cart" onPress={()=>dispatch(addItem(product))}/>
                    </View>
                ))
            }
        </View>
    );
};
export default productlist;