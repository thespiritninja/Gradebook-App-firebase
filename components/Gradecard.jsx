import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { studentData } from '../assets';
import React, { useState } from 'react';
import shreyasImg from '../assets/shreyas.png';
import kunalImg from '../assets/kunal.png';
import mandarImg from '../assets/mandar.png';
import kashImg from '../assets/kash.png';

const Gradecard = ({ studentName }) => {
    const displayData = studentData[studentName.toLowerCase()];
    const [data, setData] = useState(displayData);
    const studentImages = {
        shreyas:shreyasImg,
        kunal:kunalImg,
        mandar:mandarImg,
        kash:kashImg,

    }
    const increasePoints = () => {
        const updatedData = { ...data, 
            points: data.points < 100 ? data.points + 1 : 100,
            score: data.points - (data.absences / 10)
        };
        setData(updatedData);
    };

    const increaseAbsences = () => {
        const updatedData = { ...data, 
            absences: data.absences + 1,
            score: data.points - (data.absences / 10)
        };
        setData(updatedData);
    };

    return (
        <View style={styles.main}>
            <View style={styles.idCard}>
                <Image source={studentImages[studentName.toLowerCase()]} style={styles.studentImage} />
                <Text>Name: {studentName}</Text>
                <Text style={{ paddingTop: 10 }}>Score: {data.score}</Text>
            </View>
            <View style={styles.grades}>
                <View style={styles.diff}>
                    <Text>Absences: {data.absences}</Text>
                    <Text>Points: {data.points}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={increaseAbsences} style={styles.addButtonRed}>
                        <Text style={styles.buttonText}>+Absence</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={increasePoints} style={styles.addButtonGreen}>
                        <Text style={styles.buttonText}>+Point</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        padding: 30,
    },
    grades: {
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    diff: {
        flexDirection: 'column',
    },
    idCard: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    studentImage: {
        width: 100, 
        height: 100,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },
    addButtonRed: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    addButtonGreen: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Gradecard;
