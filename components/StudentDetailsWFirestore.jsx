import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Gradecard from './Gradecard'; 
import { FirebaseFetcher } from '../FetchDocs';

const StudentDetailsWFirestore = ({ route }) => {
  const { studentName } = route.params;
  return (
    <View style={styles.container}>
        <FirebaseFetcher />
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

export default StudentDetailsWFirestore;

