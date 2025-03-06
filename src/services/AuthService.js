import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from './firebase.js';

class AuthService {
  constructor() {
    this.auth = auth;
  }

  async register(email, password, firstName, lastName) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password),
      user = userCredential.user;

    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    });

    return userCredential;
  }

  async login(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredentials => {
        return userCredentials.user;
      });
  }

  async logout() {
    return signOut(this.auth);
  }

  getAuthErrorMessage(errorCode) {
    const authErrorMessages = {
      'auth/email-already-in-use': 'This email is already in use. Try logging in or use a different email.',
      'auth/invalid-email': 'Invalid email address. Please check and try again.',
      'auth/invalid-credential': 'Invalid credentials. Please check and try again.',
      'auth/weak-password': 'Your password is too weak. Use at least 8 characters, including numbers and symbols.',
      'auth/network-request-failed': 'Network connection failed. Please check your internet and try again.',
      'auth/too-many-requests': 'Too many attempts. Please wait a few minutes before trying again.',
      'auth/password-does-not-meet-requirements': 'Your password does not meet the security requirements. Please choose a stronger password.',
    };

    return authErrorMessages[errorCode] || errorCode;
  }
}

export const AUTH_SERVICE = new AuthService();
