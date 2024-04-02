
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/components/title';



export default function App() {
  return (
    <View style={styles.container}>

     <Title/>
    </View>
  );
}



const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ffff',
alignItems: 'center',
justifycontent: 'center',

},
})