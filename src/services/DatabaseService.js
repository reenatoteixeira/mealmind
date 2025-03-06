import { getDocs, collection, query, where, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.js';

class DatabaseService {
  constructor() {
    this.db = db;
  }

  async getDocuments(collectionName) {
    return await getDocs(collection(this.db, collectionName))
      .then((querySnapshot) => {
        return querySnapshot.docs.map(doc => (doc.data()));
      });
  }

  async getDocumentsByAttribute(collectionName, documentAttribute, operator, value) {
    const q = query(collection(this.db, collectionName), where(documentAttribute, operator, value));

    return await getDocs(q)
      .then((querySnapshot) => {
        return querySnapshot.docs.map(doc => (doc.data()));
      });
  }

  async setDocument(collectionName, documentId, documentData) {
    await setDoc(doc(this.db, collectionName, documentId), documentData);
  }
}

export const DATABASE_SERVICE = new DatabaseService();
