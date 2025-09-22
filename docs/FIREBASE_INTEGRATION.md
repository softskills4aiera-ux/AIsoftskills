# Firebase Integration Guide

This document outlines how to migrate the current localStorage-based lead capture system to Firebase Firestore.

## Current Implementation

The system currently uses localStorage with the key `brochureSubmissions` and stores data in the following format:

```typescript
interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  submittedAt: string;
  actionType: 'download' | 'preview';
}
```

## Firebase Migration Steps

### 1. Install Firebase Dependencies

```bash
npm install firebase
```

### 2. Firebase Configuration

Create `src/config/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 3. Update Lead Service

Modify `src/services/leadService.ts` to include Firebase methods:

```typescript
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../config/firebase';

class LeadService {
  private readonly COLLECTION_NAME = 'brochureSubmissions';

  // Save lead to Firebase
  async saveLead(leadData: Omit<LeadData, 'id' | 'submittedAt'>): Promise<LeadData> {
    try {
      const docRef = await addDoc(collection(db, this.COLLECTION_NAME), {
        ...leadData,
        submittedAt: new Date().toISOString()
      });
      
      return {
        ...leadData,
        id: docRef.id,
        submittedAt: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      // Fallback to localStorage
      return this.saveLeadToLocalStorage(leadData);
    }
  }

  // Get all leads from Firebase
  async getLeads(): Promise<LeadData[]> {
    try {
      const querySnapshot = await getDocs(collection(db, this.COLLECTION_NAME));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as LeadData[];
    } catch (error) {
      console.error('Error reading from Firebase:', error);
      // Fallback to localStorage
      return this.getLeadsFromLocalStorage();
    }
  }

  // Get leads by action type
  async getLeadsByActionType(actionType: 'download' | 'preview'): Promise<LeadData[]> {
    try {
      const q = query(
        collection(db, this.COLLECTION_NAME),
        where('actionType', '==', actionType)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as LeadData[];
    } catch (error) {
      console.error('Error querying Firebase:', error);
      return [];
    }
  }

  // Update lead in Firebase
  async updateLead(id: string, updates: Partial<LeadData>): Promise<LeadData | null> {
    try {
      const docRef = doc(db, this.COLLECTION_NAME, id);
      await updateDoc(docRef, updates);
      
      // Return updated document
      const updatedLead = await this.getLeadById(id);
      return updatedLead;
    } catch (error) {
      console.error('Error updating in Firebase:', error);
      return null;
    }
  }

  // Delete lead from Firebase
  async deleteLead(id: string): Promise<boolean> {
    try {
      await deleteDoc(doc(db, this.COLLECTION_NAME, id));
      return true;
    } catch (error) {
      console.error('Error deleting from Firebase:', error);
      return false;
    }
  }

  // Get analytics with Firebase aggregation
  async getAnalytics() {
    try {
      const leads = await this.getLeads();
      const totalLeads = leads.length;
      const downloadLeads = leads.filter(lead => lead.actionType === 'download').length;
      const previewLeads = leads.filter(lead => lead.actionType === 'preview').length;
      
      // Interest area breakdown
      const interestBreakdown = leads.reduce((acc, lead) => {
        acc[lead.interest] = (acc[lead.interest] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      return {
        totalLeads,
        downloadLeads,
        previewLeads,
        interestBreakdown,
        recentSubmissions: leads.slice(-5).reverse()
      };
    } catch (error) {
      console.error('Error getting analytics:', error);
      return null;
    }
  }

  // Local storage fallback methods
  private saveLeadToLocalStorage(leadData: Omit<LeadData, 'id' | 'submittedAt'>): LeadData {
    // Implementation for localStorage fallback
    return this.saveLeadToLocalStorage(leadData);
  }

  private getLeadsFromLocalStorage(): LeadData[] {
    // Implementation for localStorage fallback
    return this.getLeadsFromLocalStorage();
  }
}
```

### 4. Environment Variables

Create `.env.local`:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

### 5. Firebase Security Rules

Set up Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /brochureSubmissions/{document} {
      allow read, write: if request.auth != null;
      // Or for public read/write:
      // allow read, write: if true;
    }
  }
}
```

### 6. Migration Strategy

1. **Phase 1**: Implement Firebase alongside localStorage
2. **Phase 2**: Migrate existing data from localStorage to Firebase
3. **Phase 3**: Remove localStorage dependency
4. **Phase 4**: Add authentication and security rules

### 7. Data Migration Script

```typescript
// Migration utility
export const migrateToFirebase = async () => {
  const localLeads = JSON.parse(localStorage.getItem('brochureSubmissions') || '[]');
  
  for (const lead of localLeads) {
    try {
      await addDoc(collection(db, 'brochureSubmissions'), {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        interest: lead.interest,
        actionType: lead.actionType,
        submittedAt: lead.submittedAt
      });
      console.log(`Migrated lead: ${lead.name}`);
    } catch (error) {
      console.error(`Failed to migrate lead: ${lead.name}`, error);
    }
  }
  
  console.log('Migration completed');
};
```

## Benefits of Firebase Integration

1. **Real-time Updates**: Live data synchronization across devices
2. **Scalability**: Handle thousands of submissions
3. **Security**: Role-based access control
4. **Analytics**: Built-in Firebase Analytics
5. **Backup**: Automatic data backup and recovery
6. **Multi-platform**: Access data from web, mobile, and desktop apps

## Testing

After Firebase integration:

1. Test form submission
2. Verify data appears in Firebase console
3. Test admin panel functionality
4. Verify real-time updates
5. Test offline/online scenarios

## Monitoring

Set up Firebase monitoring:

- Error tracking
- Performance monitoring
- Usage analytics
- Cost optimization alerts

