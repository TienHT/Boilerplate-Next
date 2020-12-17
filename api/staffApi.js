import admin from '../firebase/clientApp'
export const getStaff = async () => {
  const db = admin.firestore()
  const staffRef = db.collection('singers')
  const profileDoc = await staffRef.get()
  if (profileDoc.exists) {
    return null
  }
  else{
    let data = []
    profileDoc.forEach((doc) => {
        let newData = { id: doc.id, ...doc.data() };
        data.push(newData)
    })
    return data
  }
}
export const getCurrentStaff = async (staffID) => {
  const db = admin.firestore()
  const staffRef = db.collection('singers').doc(staffID);
  const doc = await staffRef.get();
  if (doc.exists) {
      let newData = { id: doc.id, ...doc.data() };
      if (newData.musicType) {
         let data = newData.musicType;
         let dataTemp = [];
          for (let index = 0; index <  data.length; index++) {
              let element =await data[index].get();
              dataTemp.push({id:element.id,...element.data()})
          }
          newData.musicType = dataTemp;
      }
      if (newData.instrument) {
          if (newData.instrument) {
              let data = newData.instrument;
              let dataTemp = [];
               for (let index = 0; index <  data.length; index++) {
                   let element =await data[index].get();
                   dataTemp.push({id:element.id,...element.data()})
               }
               newData.instrument = dataTemp;
           }
      }
      if(newData.isGroup){
           if (newData.isGroup) {
              let data = newData.isGroup;
              let element = await data.get()
               newData.isGroup = {id:element.id,...element.data()}
           }
      }
      return newData;
  } else {
   return null;
  }
}