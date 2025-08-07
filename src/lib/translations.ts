export type Language = 'en' | 'ar';

export interface Translations {
  title: string;
  subtitle: string;
  generateBtn: string;
  copyAllBtn: string;
  toastMessage: string;
  langToggle: string;
  moreProjects: string;
  followUs: string;
  male: string;
  female: string;
  fields: {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    username: string;
    location: string;
    dateOfBirth: string;
    gender: string;
    avatar: string;
    address: string;
    company: string;
    jobTitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    title: 'Fake Data Generator',
    subtitle: 'Generate realistic fake data instantly for testing, development, and privacy protection purposes.',
    generateBtn: 'Generate Fake Data',
    copyAllBtn: 'Copy All Data',
    toastMessage: 'Copied to clipboard!',
    langToggle: '🇺🇸 English',
    moreProjects: 'More Projects',
    followUs: 'Follow Us Here',
    male: 'Male',
    female: 'Female',
    fields: {
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      password: 'Password',
      username: 'Username',
      location: 'Location',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      avatar: 'Avatar',
      address: 'Address',
      company: 'Company',
      jobTitle: 'Job Title'
    }
  },
  ar: {
    title: 'مولد البيانات الوهمية',
    subtitle: 'قم بتوليد بيانات وهمية واقعية على الفور لأغراض الاختبار والتطوير وحماية الخصوصية.',
    generateBtn: 'إنشاء بيانات مزيفة',
    copyAllBtn: 'نسخ جميع البيانات',
    toastMessage: 'تم النسخ إلى الحافظة!',
    langToggle: '🇪🇬 العربية',
    moreProjects: 'المزيد من المشاريع',
    followUs: 'تابعنا هنا',
    male: 'ذكر',
    female: 'أنثى',
    fields: {
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      password: 'كلمة المرور',
      username: 'اسم المستخدم',
      location: 'الموقع',
      dateOfBirth: 'تاريخ الميلاد',
      gender: 'الجنس',
      avatar: 'الصورة الرمزية',
      address: 'العنوان',
      company: 'الشركة',
      jobTitle: 'المسمى الوظيفي'
    }
  }
};
