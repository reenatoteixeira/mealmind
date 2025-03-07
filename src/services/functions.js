import { Timestamp } from 'firebase/firestore';

export function formatDate(timestamp) {
  if (timestamp instanceof Timestamp) {
    const date = timestamp.toDate();
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return '';
}