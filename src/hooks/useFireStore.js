import React from 'react';
import { db } from '../firebase/config';

export default function useFireStore(collection, condition) {
  const [documents, setDocuments] = React.useState([]);

  React.useEffect(() => {
    let collectionRef = db.collection(collection).orderBy('createdAt');

    // condition
    /**
     *
     * {
     *  fieldName: 'abc'
     *  operator: '=='
     *  value: 'abc'
     * }
     *
     *
     */

    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    const unsubcribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));

      setDocuments(documents);
    });

    return unsubcribe;
  }, [collection, condition]);

  return documents;
}
