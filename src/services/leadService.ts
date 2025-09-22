export interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  submittedAt: string;
  actionType: 'download' | 'preview';
}

class LeadService {
  private readonly STORAGE_KEY = 'brochureSubmissions';

  // Generate unique ID (can be replaced with Firebase auto-generated IDs later)
  private generateId(): string {
    return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Save lead to localStorage
  async saveLead(leadData: Omit<LeadData, 'id' | 'submittedAt'>): Promise<LeadData> {
    const existingLeads = this.getLeads();
    const newLead: LeadData = {
      ...leadData,
      id: this.generateId(),
      submittedAt: new Date().toISOString()
    };
    
    existingLeads.push(newLead);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingLeads));
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return newLead;
  }

  // Get all leads from localStorage
  getLeads(): LeadData[] {
    try {
      const leads = localStorage.getItem(this.STORAGE_KEY);
      return leads ? JSON.parse(leads) : [];
    } catch (error) {
      console.error('Error reading leads from localStorage:', error);
      return [];
    }
  }

  // Get leads by action type
  getLeadsByActionType(actionType: 'download' | 'preview'): LeadData[] {
    return this.getLeads().filter(lead => lead.actionType === actionType);
  }

  // Get leads by interest area
  getLeadsByInterestArea(interest: string): LeadData[] {
    return this.getLeads().filter(lead => lead.interest === interest);
  }

  // Get lead by ID
  getLeadById(id: string): LeadData | undefined {
    return this.getLeads().find(lead => lead.id === id);
  }

  // Update lead (for future Firebase integration)
  async updateLead(id: string, updates: Partial<LeadData>): Promise<LeadData | null> {
    const leads = this.getLeads();
    const leadIndex = leads.findIndex(lead => lead.id === id);
    
    if (leadIndex === -1) return null;
    
    leads[leadIndex] = { ...leads[leadIndex], ...updates };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(leads));
    
    return leads[leadIndex];
  }

  // Delete lead (for future Firebase integration)
  async deleteLead(id: string): Promise<boolean> {
    const leads = this.getLeads();
    const filteredLeads = leads.filter(lead => lead.id !== id);
    
    if (filteredLeads.length === leads.length) return false;
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredLeads));
    return true;
  }

  // Clear all leads (for testing purposes)
  clearLeads(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  // Export leads as JSON (for admin purposes)
  exportLeads(): string {
    const leads = this.getLeads();
    return JSON.stringify(leads, null, 2);
  }

  // Get analytics data
  getAnalytics() {
    const leads = this.getLeads();
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
      recentSubmissions: leads.slice(-5).reverse() // Last 5 submissions
    };
  }

  // Future Firebase integration methods (commented out for now)
  /*
  async saveLeadToFirebase(leadData: Omit<LeadData, 'id' | 'submittedAt'>): Promise<LeadData> {
    // import { addDoc, collection } from "firebase/firestore";
    // const docRef = await addDoc(collection(db, "brochureSubmissions"), {
    //   ...leadData,
    //   submittedAt: new Date().toISOString()
    // });
    // return { ...leadData, id: docRef.id, submittedAt: new Date().toISOString() };
    
    // For now, fall back to localStorage
    return this.saveLead(leadData);
  }
  */
}

export const leadService = new LeadService();
