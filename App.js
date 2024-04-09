
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/components/title';
import Main from './SRC/components/Main';



export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
     <Main/>
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