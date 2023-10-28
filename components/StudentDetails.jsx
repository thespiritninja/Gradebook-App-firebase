import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Gradecard from './Gradecard'; 
import {studentData} from '../assets/index';

const StudentDetails = ({ route }) => {
  const { studentName } = route.params;

  const student = studentData[studentName.toLowerCase()];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Details for {studentName}</Text>
      <Gradecard studentName={studentName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default StudentDetails;
