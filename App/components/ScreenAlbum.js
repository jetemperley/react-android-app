
/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// the albums screen

import { FlatList, View } from "react-native";
import AppCategoryCard from "./AppCategoryCard";
import { styles } from "./AppColors";
import DataManager from "./DataManager";
import { useStateIfMounted } from "use-state-if-mounted";

export default function ScreenAlbum({navigation}){

	const[, refresh] = useStateIfMounted();
    DataManager.getInst().addRefresh(refresh);	

    return (
        <View style={styles.container}>
			<View style={styles.comfy}>
            <FlatList
                numColumns={2}
                data = {DataManager.getInst().getCategories()}
                keyExtractor = {(item) => {return item.id;}}
                renderItem = {({item}) => {
                    console.log(item);
                    return (
                      	<AppCategoryCard 
						  	source = {item.image}
                    		title = {item.category}
							onPress={()=>{
								navigation.navigate(
									'CatMemes',
									{category: item.category});
						}}/>
                    );
				}}/>
			</View>
        </View>
    );
}