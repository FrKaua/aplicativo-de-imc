
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/components/Title';
import Form from './SRC/components/Form';






export default function App() {
  return (
    <View style={styles.container}>
<Title></Title>
<Form/>
    </View>

  );
}



const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#e0e5e5',
paddingTop: 80,

},
});