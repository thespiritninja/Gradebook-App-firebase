import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import shreyasImg from '../assets/shreyas.png';
import kunalImg from '../assets/kunal.png';
import mandarImg from '../assets/mandar.png';
import kashImg from '../assets/kash.png';
import defaultImg from '../assets/favicon.png';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
const Gradecard = ({ studentName }) => {
    const [displayData1, setdisplayData1] = useState({});
    const studentImages = {
        shreyas:shreyasImg,
        kunal:kunalImg,
        mandar:mandarImg,
        kash:kashImg,
        default: defaultImg,
    }
    const increasePoints = () => {
        const updatedData = { ...displayData1, 
            points: displayData1.points < 100 ? displayData1.points + 1 : 100,
            score: displayData1.points - (displayData1.absences / 10)
        };
        setdisplayData1(updatedData);
    };

    const increaseAbsences = () => {
        const updatedData = { ...displayData1, 
            absences: displayData1.absences + 1,
            score: displayData1.points - (displayData1.absences / 10)
        };
        setdisplayData1(updatedData);
    };
    console.log(displayData1);
    useEffect(()=>{
        function onSetDisplay(value){
            setdisplayData1(value);
        }
        async function fetchData(){
            try {
                await getDocs(collection(db, "students"))
                  .then((querySnapshot)=>{
                    querySnapshot.docs.forEach(doc => {
                      if(doc.id == studentName.toLowerCase()){
                        onSetDisplay(doc.data());
                      }
                    });
                  })
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        }
        fetchData();
    },[])

    return (
        <View style={styles.main}>
            {/* <FirebaseFetcher studentName={studentName.toLowerCase()} setDisplayData1={setdisplayData1} /> */}
            <View style={styles.idCard}>
                <Image source={studentImages[studentName.toLowerCase()] ? studentImages[studentName.toLowerCase()] : studentImages[defaultImg]  } style={styles.studentImage} />
                <Text>Name: {studentName}</Text>
                <Text style={{ paddingTop: 10 }}>Score: {displayData1.score}</Text>
            </View>
            <View style={styles.grades}>
                <View style={styles.diff}>
                    <Text>Absences: {displayData1.absences}</Text>
                    <Text>Points: {displayData1.points}</Text>
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
