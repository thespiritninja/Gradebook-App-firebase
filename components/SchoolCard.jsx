import { View, StyleSheet, Image} from 'react-native';
export const SchoolCard = () => {
    return(<View style={styles.container}>
      <Image source={require("../assets/school.jpg")} alt='school-image' style={styles.image}/>
    </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 50,
      justifyContent: 'center',
      alignItems: 'center', 
    },
    image: {
      width: 375,
      height: 375,
    },
  });