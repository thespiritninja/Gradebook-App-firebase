import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 

const StudentList = ({ navigation }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsCollection = collection(db, 'students');
      const studentsSnapshot = await getDocs(studentsCollection);
      const studentsData = [];
      studentsSnapshot.forEach((doc) => {
        studentsData.push(doc);
      });
      setStudents(studentsData);
    };
    fetchStudents();
  }, []);

  const handleStudentPress = (studentName) => {
    navigation.navigate('StudentDetails', { studentName });
  };

  return (
    <View style={styles.container}>
      {students.map((student, index) => (
        <TouchableOpacity
        key={index}
        onPress={() => handleStudentPress(student.id)}
        style={styles.studentButton}
      >
        <Text style={styles.studentText}>{student.id}</Text>
      </TouchableOpacity>
      ))}
    </View>
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
