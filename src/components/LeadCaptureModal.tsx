import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, BookOpen, Download, Eye, CheckCircle, Shield, ArrowLeft } from 'lucide-react';
import { leadService } from '../services/leadService';

interface LeadCaptureForm {
  name: string;
  email: string;
  phone: string;
  interest: string;
  otp?: string;
}

interface OTPVerification {
  isRequired: boolean;
  isVerified: boolean;
  otpSent: boolean;
  attempts: number;
  maxAttempts: number;
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (formData: LeadCaptureForm) => void;
  actionType: 'download' | 'preview';
}

const interestAreas = [
  'Communication Skills',
  'Critical Thinking & Problem Solving',
  'Prompt Engineering & AI',
  'Design Thinking & Innovation',
  'Teamwork & Collaboration',
  'Data-Driven Decision Making',
  'Adaptive Learning',
  'Mental & Physical Health',
  'All Areas'
];

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ 
  isOpen, 
  onClose, 
  onSuccess, 
  actionType 
}) => {
  const [formData, setFormData] = useState<LeadCaptureForm>({
    name: '',
    email: '',
    phone: '',
    interest: 'All Areas',
    otp: ''
  });
  const [errors, setErrors] = useState<Partial<LeadCaptureForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const [currentStep, setCurrentStep] = useState<'form' | 'otp'>('form');
  const [otpVerification, setOtpVerification] = useState<OTPVerification>({
    isRequired: false,
    isVerified: false,
    otpSent: false,
    attempts: 0,
    maxAttempts: 3
  });
  const [otpCountdown, setOtpCountdown] = useState(0);

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's a valid phone number (10-15 digits)
    return cleaned.length >= 10 && cleaned.length <= 15;
  };

  const validateEmailExistence = async (email: string): Promise<boolean> => {
    try {
      // Method 1: Domain validation (check if domain exists)
      const domain = email.split('@')[1];
      
      // Check if domain has valid MX records
      const response = await fetch(`https://api.email-validator.net/validate?email=${email}&apiKey=demo`);
      if (response.ok) {
        const data = await response.json();
        return data.status === 'valid';
      }
      
      // Fallback: Simple domain check
      return await checkDomainExists(domain);
    } catch (error) {
      console.log('Email validation service unavailable, using format validation only');
      return true; // Fall back to format validation only
    }
  };

  const checkDomainExists = async (domain: string): Promise<boolean> => {
    try {
      // Simple DNS lookup simulation
      // In production, you'd use a proper DNS lookup service
      const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
      return commonDomains.includes(domain.toLowerCase()) || domain.includes('.');
    } catch {
      return true; // Default to valid if check fails
    }
  };

  const validateForm = async (): Promise<boolean> => {
    const newErrors: Partial<LeadCaptureForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address format';
    } else {
      // Additional email existence validation
      setIsValidatingEmail(true);
      const isValidEmail = await validateEmailExistence(formData.email);
      setIsValidatingEmail(false);
      if (!isValidEmail) {
        newErrors.email = 'This email address does not exist or is invalid';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // OTP Functions
  const sendOTP = async (phone: string): Promise<boolean> => {
    try {
      // Option 1: Use Twilio (Production)
      // const response = await fetch('/api/send-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ phone })
      // });
      // const result = await response.json();

      // Option 2: Use Email OTP (Easier to test)
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(`🔐 DEMO OTP for ${phone}: ${otpCode}`);
      
      // Store OTP in localStorage for testing (remove in production)
      localStorage.setItem('demo_otp', otpCode);
      localStorage.setItem('demo_otp_phone', phone);
      
      // For demo purposes, we'll simulate a successful OTP send
      setOtpVerification(prev => ({ ...prev, otpSent: true }));
      setOtpCountdown(60); // 60 seconds countdown
      
      // Start countdown timer
      const timer = setInterval(() => {
        setOtpCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return true;
    } catch (error) {
      console.error('Error sending OTP:', error);
      return false;
    }
  };

  const verifyOTP = (otp: string): boolean => {
    // Check if it's a valid 6-digit format
    if (!/^\d{6}$/.test(otp)) {
      return false;
    }
    
    // For demo purposes, verify against stored OTP
    const storedOTP = localStorage.getItem('demo_otp');
    const storedPhone = localStorage.getItem('demo_otp_phone');
    
    // Check if OTP matches and phone matches
    const isValid = storedOTP === otp && storedPhone === formData.phone;
    
    if (isValid) {
      setOtpVerification(prev => ({ ...prev, isVerified: true }));
      // Clear stored OTP after successful verification
      localStorage.removeItem('demo_otp');
      localStorage.removeItem('demo_otp_phone');
    } else {
      setOtpVerification(prev => ({ 
        ...prev, 
        attempts: prev.attempts + 1 
      }));
    }
    
    return isValid;
  };

  const resendOTP = async () => {
    if (otpCountdown > 0) return;
    
    await sendOTP(formData.phone);
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'All Areas',
        otp: ''
      });
      setErrors({});
      setCurrentStep('form');
      setOtpVerification({
        isRequired: false,
        isVerified: false,
        otpSent: false,
        attempts: 0,
        maxAttempts: 3
      });
      setOtpCountdown(0);
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!(await validateForm())) {
      return;
    }

    // If we're on the form step and phone validation passes, move to OTP
    if (currentStep === 'form') {
      setOtpVerification(prev => ({ ...prev, isRequired: true }));
      setCurrentStep('otp');
      await sendOTP(formData.phone);
      return;
    }

    // If we're on OTP step, verify the OTP
    if (currentStep === 'otp') {
      if (!formData.otp || !verifyOTP(formData.otp)) {
        setErrors({ otp: 'Invalid OTP. Please try again.' });
        return;
      }

      if (otpVerification.attempts >= otpVerification.maxAttempts) {
        setErrors({ otp: 'Too many failed attempts. Please try again later.' });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Save lead using the service
      await leadService.saveLead({
        ...formData,
        actionType
      });

      // Show success state
      setIsSuccess(true);
      
      // Call onSuccess after a brief delay
      setTimeout(() => {
        onSuccess(formData);
        onClose();
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'All Areas',
          otp: ''
        });
        setIsSuccess(false);
      }, 2000);

    } catch (error) {
      console.error('Error saving lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof LeadCaptureForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-white dark:bg-dark-200 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {actionType === 'download' ? (
                  <Download size={24} />
                ) : (
                  <Eye size={24} />
                )}
                <div>
                  <h2 className="text-xl font-bold">
                    {actionType === 'download' ? 'Download Brochure' : 'Preview Brochure'}
                  </h2>
                  <p className="text-blue-100 text-sm mt-1">
                    Get access to our comprehensive course catalog
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Success State */}
          <AnimatePresence>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your information has been saved. You'll receive the brochure shortly.
                </p>
              </motion.div>
            ) : (
              /* Form Content */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Step Indicator */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        currentStep === 'form' ? 'bg-neon-blue text-white' : 'bg-green-500 text-white'
                      }`}>
                        {currentStep === 'form' ? '1' : '✓'}
                      </div>
                      <div className={`w-16 h-1 rounded-full ${
                        currentStep === 'otp' ? 'bg-neon-blue' : 'bg-gray-300'
                      }`}></div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        currentStep === 'otp' ? 'bg-neon-blue text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        2
                      </div>
                    </div>
                  </div>

                  {currentStep === 'form' ? (
                    // Step 1: Contact Information Form
                    <>
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                       Full Name *
                     </label>
                     <div className="relative">
                       <motion.div
                         animate={{ 
                           color: errors.name ? '#ef4444' : '#9ca3af',
                           scale: errors.name ? 1.1 : 1
                         }}
                         transition={{ duration: 0.2 }}
                       >
                         <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                       </motion.div>
                       <input
                         type="text"
                         value={formData.name}
                         onChange={(e) => handleInputChange('name', e.target.value)}
                         className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-200 hover:border-neon-blue/50 ${
                           errors.name 
                             ? 'border-red-500 focus:ring-red-500' 
                             : 'border-gray-300 dark:border-gray-600 focus:border-transparent'
                         } bg-white dark:bg-dark-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                         placeholder="Enter your full name"
                       />
                     </div>
                     {errors.name && (
                       <motion.p
                         initial={{ opacity: 0, y: -10 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="text-red-500 text-sm mt-1 flex items-center"
                       >
                         <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                         {errors.name}
                       </motion.p>
                     )}
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <motion.div
                        animate={{ 
                          color: errors.email ? '#ef4444' : '#9ca3af',
                          scale: errors.email ? 1.1 : 1
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                      </motion.div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-200 hover:border-neon-blue/50 ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-gray-600 focus:border-transparent'
                        } bg-white dark:bg-dark-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400`}
                        placeholder="Enter your email address"
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm mt-1 flex items-center"
                      >
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                        {errors.email}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-200 hover:border-neon-blue/50 bg-white dark:bg-dark-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </motion.div>

                  {/* Interest Area */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Area of Interest
                    </label>
                    <div className="relative">
                      <BookOpen size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                             <select
                         value={formData.interest}
                         onChange={(e) => handleInputChange('interest', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-200 hover:border-neon-blue/50 bg-white dark:bg-dark-300 text-gray-900 dark:text-white appearance-none cursor-pointer"
                      >
                        {interestAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                    </>
                  ) : (
                    // Step 2: OTP Verification
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-center mb-6"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield size={24} className="text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Verify Your Phone Number
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          We've sent a 6-digit code to <strong>{formData.phone}</strong>
                        </p>
                        <div className="mt-2 p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                          <p className="text-xs text-yellow-800 dark:text-yellow-200">
                            🧪 <strong>Demo Mode:</strong> Check browser console for OTP code
                          </p>
                        </div>
                      </motion.div>

                      {/* OTP Input */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Enter Verification Code *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.otp || ''}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                              setFormData(prev => ({ ...prev, otp: value }));
                              if (errors.otp) setErrors(prev => ({ ...prev, otp: undefined }));
                            }}
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-200 text-center text-lg tracking-widest ${
                              errors.otp 
                                ? 'border-red-500 focus:ring-red-500' 
                                : 'border-gray-300 dark:border-gray-600 focus:border-transparent'
                            } bg-white dark:bg-dark-300 text-gray-900 dark:text-white`}
                            placeholder="000000"
                            maxLength={6}
                          />
                        </div>
                        {errors.otp && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.otp}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Resend OTP */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                      >
                        {otpCountdown > 0 ? (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Resend code in {otpCountdown}s
                          </p>
                        ) : (
                          <button
                            type="button"
                            onClick={resendOTP}
                            className="text-sm text-neon-blue hover:text-neon-purple transition-colors duration-200"
                          >
                            Resend verification code
                          </button>
                        )}
                      </motion.div>

                      {/* Back Button */}
                      <motion.button
                        type="button"
                        onClick={() => setCurrentStep('form')}
                        className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      >
                        <ArrowLeft size={16} />
                        <span>Back to form</span>
                      </motion.button>
                    </>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        {currentStep === 'form' ? (
                          <>
                            <Shield size={18} />
                            <span>Verify Phone Number</span>
                          </>
                        ) : actionType === 'download' ? (
                          <>
                            <Download size={18} />
                            <span>Get Brochure</span>
                          </>
                        ) : (
                          <>
                            <Eye size={18} />
                            <span>Preview Brochure</span>
                          </>
                        )}
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Privacy Notice */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs text-gray-500 dark:text-gray-400 text-center"
                  >
                    By submitting this form, you agree to receive communications from Ai-ERA Soft Skills Academy. 
                    We respect your privacy and will never share your information.
                  </motion.p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
