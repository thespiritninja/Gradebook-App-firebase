import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StudentList = ({ navigation }) => {
  const students = ["Shreyas", "Kunal", "Mandar", "Kash"];

  const handleStudentPress = (studentName) => {
    navigation.navigate('StudentDetails', { studentName });
  };

  return (
    <>
    <View style={styles.container}>
      {students.map((studentName) => (
        <TouchableOpacity
          key={studentName}
          onPress={() => handleStudentPress(studentName)}
          style={styles.studentButton}
        >
          <Text style={styles.studentText}>{studentName}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    studentButton: {
      padding: 10,
      margin: 5,
      backgroundColor: 'lightblue',
      borderRadius: 5,
    },
    studentText: {
      fontSize: 16,
    },
  });
  

export default StudentList;
