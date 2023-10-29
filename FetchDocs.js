import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from './firebaseConfig'; // Update import statement to destructure db directly

export const FirebaseFetcher = ({studentName, setDisplayData1}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getDocs(collection(db, "students"))
          .then((querySnapshot)=>{
            querySnapshot.docs.forEach(doc => {
              // console.log(doc.data(), doc.id)
              if(doc.id == studentName){
                setDisplayData1(doc.data());
              }
            });
          })
        // const data = await db.collection('students').get();
        // data.docs.forEach(doc => console.log(doc.data()));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return null; // Placeholder for the component's return
};
