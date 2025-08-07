import { faker } from '@faker-js/faker';
import type { Language } from './translations';

export interface FakeData {
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
}

// Arabic names arrays
const arabicNames = {
  male: [
    'أحمد محمد علي',
    'محمد أحمد حسن',
    'علي محمد أحمد',
    'حسن علي محمود',
    'محمود أحمد علي',
    'يوسف محمد حسن',
    'عمر أحمد محمود',
    'كريم محمد علي',
    'خالد أحمد حسن',
    'سامر محمد علي'
  ],
  female: [
    'فاطمة أحمد علي',
    'عائشة محمد حسن',
    'خديجة علي محمود',
    'مريم أحمد محمد',
    'نور محمد علي',
    'سارة أحمد حسن',
    'رانيا محمد محمود',
    'ياسمين علي أحمد',
    'زينب محمد حسن',
    'دينا أحمد علي'
  ]
};

const arabicCities = [
  'القاهرة، مصر',
  'الجيزة، مصر',
  'الإسكندرية، مصر',
  'شبرا الخيمة، مصر',
  'بورسعيد، مصر',
  'السويس، مصر',
  'الأقصر، مصر',
  'أسوان، مصر',
  'طنطا، مصر',
  'المنصورة، مصر'
];

const arabicCompanies = [
  'شركة التقنيات المتقدمة',
  'مؤسسة الابتكار الرقمي',
  'شركة الحلول التكنولوجية',
  'مجموعة النور للتطوير',
  'شركة المستقبل للتقنية',
  'مؤسسة الرؤية الذكية',
  'شركة الإبداع الرقمي',
  'مجموعة التميز التقني'
];

const arabicJobTitles = [
  'مهندس برمجيات أول',
  'مطور تطبيقات',
  'محلل أنظمة',
  'مدير المشاريع',
  'مطور واجهات المستخدم',
  'مهندس قواعد البيانات',
  'مصمم تجربة المستخدم',
  'أخصائي أمن المعلومات'
];

// Egyptian phone number generator
function generateEgyptianPhone(): string {
  const providers = ['010', '011', '012', '015'];
  const provider = providers[Math.floor(Math.random() * providers.length)];
  const number = Math.floor(Math.random() * 90000000) + 10000000;
  return `+20 ${provider} ${number.toString().slice(0, 4)} ${number.toString().slice(4)}`;
}

// Strong password generator
function generateStrongPassword(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Avatar URLs for different genders
const avatarUrls = {
  male: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  ],
  female: [
    'https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  ]
};

export function generateFakeData(language: Language, genderOverride?: 'male' | 'female'): FakeData {
  const gender = genderOverride || (Math.random() > 0.5 ? 'male' : 'female');
  
  if (language === 'ar') {
    const names = arabicNames[gender];
    const fullName = names[Math.floor(Math.random() * names.length)];
    
    return {
      fullName,
      email: `${faker.internet.username()}@example.com`.toLowerCase(),
      phone: generateEgyptianPhone(),
      password: generateStrongPassword(),
      username: faker.internet.username(),
      location: arabicCities[Math.floor(Math.random() * arabicCities.length)],
      dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toLocaleDateString('ar-EG'),
      gender: gender === 'male' ? 'ذكر' : 'أنثى',
      avatar: avatarUrls[gender][Math.floor(Math.random() * avatarUrls[gender].length)],
      address: `${faker.location.streetAddress()}، ${arabicCities[Math.floor(Math.random() * arabicCities.length)].split('،')[0]}`,
      company: arabicCompanies[Math.floor(Math.random() * arabicCompanies.length)],
      jobTitle: arabicJobTitles[Math.floor(Math.random() * arabicJobTitles.length)]
    };
  } else {
    return {
      fullName: faker.person.fullName({ sex: gender }),
      email: faker.internet.email(),
      phone: generateEgyptianPhone(),
      password: generateStrongPassword(),
      username: faker.internet.username(),
      location: `${faker.location.city()}, Egypt`,
      dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toLocaleDateString('en-US'),
      gender: gender === 'male' ? 'Male' : 'Female',
      avatar: avatarUrls[gender][Math.floor(Math.random() * avatarUrls[gender].length)],
      address: `${faker.location.streetAddress()}, ${faker.location.city()}, Egypt`,
      company: faker.company.name(),
      jobTitle: faker.person.jobTitle()
    };
  }
}
