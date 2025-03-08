import { getDocs, getDoc, updateDoc, collection, deleteDoc, query, where, doc, setDoc } from 'firebase/firestore';
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

  async getDocumentsById(collectionName, documentId) {
    const docSnap = await getDoc(doc(this.db, collectionName, documentId));

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('No such document');
    }
  }

  async setDocumentWithId(collectionName, documentId, documentData) {
    await setDoc(doc(this.db, collectionName, documentId), documentData);
  }

  async setDocument(collectionName, documentData) {
    const docRef = doc(collection(this.db, collectionName));
    await setDoc(docRef, { id: docRef.id, ...documentData });
  }

  async updateDocument(collectionName, documentId, documentData) {
    const docRef = doc(this.db, collectionName, documentId);
    await updateDoc(docRef, documentData);
  }

  async deleteDocument(collectionName, documentId) {
    const docRef = doc(this.db, collectionName, documentId);
    await deleteDoc(docRef);
  }
}

export const DATABASE_SERVICE = new DatabaseService();
