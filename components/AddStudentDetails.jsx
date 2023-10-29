import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { doc, collection, addDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 

const AddStudentDetails = () => {
  const [name, setName] = useState('');
  const [absences, setAbsences] = useState('');
  const [points, setPoints] = useState('');

  const addStudent = async () => {
    if (name && absences && points) {
      try {
        const studentDoc = doc(db, 'students', name.toLowerCase());
        await setDoc(studentDoc, {
          absences: parseInt(absences),
          points: parseInt(points),
          score: 0
        });
        // console.log('Student added successfully!');
        setName('');
        setAbsences('');
        setPoints('');
      } catch (error) {
        console.error('Error adding student: ', error);
      }
    } else {
      console.log('Please fill in all the fields.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Absences"
        value={absences}
        onChangeText={text => setAbsences(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Points"
        value={points}
        onChangeText={text => setPoints(text)}
      />
      <Button title="Add Student" onPress={addStudent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
});

export default AddStudentDetails;
