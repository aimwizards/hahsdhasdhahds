import { ContactInfo, SocialLinks, CompanyInfo, ResultImage } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'Dr. Hadde Beauty',
  tagline: 'Aesthetic Medicine for Your Health and Beauty',
  description: 'Upptäck din inre lyster med behandlingar som förenar vetenskap och estetik.',
  location: 'Stockholm, Solna',
  foundedYear: 2024
};

export const contactInfo: ContactInfo = {
  phone: '',
  email: 'info@drhaddebeauty.se',
  address: {
    street: 'Solnavägen 29H',
    city: 'Solna, Sverige',
    postalCode: '171 45'
  }
};

export const socialLinks: SocialLinks = {
  instagram: 'https://instagram.com/haddebeauty',
  facebook: '#'
};

export const bookingUrl = 'https://www.bokadirekt.se/places/dr-hadde-beauty-131864';

export const resultImages: ResultImage[] = [
  {
    id: 'result-1',
    beforeImage: 'https://i.postimg.cc/vZKt6ytW/Namnl-s.png',
    afterImage: 'https://i.postimg.cc/vZKt6ytW/Namnl-s.png',
    treatment: 'Estetisk Behandling',
    title: 'Naturliga Resultat',
    description: 'Professionell behandling med fokus på harmoni och naturlig skönhet',
    featured: true
  },
  {
    id: 'result-2',
    beforeImage: 'https://i.postimg.cc/zfRSCQx4/Namnl-s2.png',
    afterImage: 'https://i.postimg.cc/zfRSCQx4/Namnl-s2.png',
    treatment: 'Estetisk Behandling',
    title: 'Harmoniska Förbättringar',
    description: 'Subtila förändringar som framhäver din unika skönhet',
    featured: true
  },
  {
    id: 'result-3',
    beforeImage: 'https://i.postimg.cc/vBF73vjT/Namnl-s3.png',
    afterImage: 'https://i.postimg.cc/vBF73vjT/Namnl-s3.png',
    treatment: 'Estetisk Behandling',
    title: 'Kvalificerad Vård',
    description: 'Säkra behandlingar utförda av legitimerad läkare',
    featured: true
  }
];

export const doctorInfo = {
  name: 'Dr. Hayder Alghazi',
  title: 'Legitimerad Läkare',
  image: '/img777.jpg',
  description: [
    'Jag heter Dr. Hayder Alghazi, legitimerad läkare och grundare av Dr Hadde Beauty. Min medicinska bakgrund är bred och omfattar flera specialistområden, bland annat kirurgi, akutmedicin, internmedicin och hud, vilket har gett mig en djup förståelse för både människokroppen och hudens komplexa uppbyggnad.',
    'Min passion för estetiska behandlingar växte fram ur viljan att kombinera medicinsk kunskap med konstnärlig precision – med fokus på att bygga vidare på ditt naturliga utseende, utan stora förändringar. Jag strävar efter att framhäva din unika skönhet genom hudföryngring, förbättrad hudkvalitet och subtila, harmoniska resultat.',
    'Jag arbetar alltid med evidensbaserade metoder och beprövade produkter, och håller mig kontinuerligt uppdaterad med de senaste studierna och teknikerna inom estetisk medicin. Min erfarenhet gör att jag inte bara kan skapa vackra resultat, utan också identifiera och hantera eventuella komplikationer – vilket ger dig som patient en extra trygghet.',
    'För mig står säkerhet, noggrannhet och naturliga resultat i centrum. Varje behandling inleds med en noggrann konsultation där vi går igenom dina önskemål, medicinska förutsättningar och förväntningar, så att du alltid känner dig trygg och välinformerad.'
  ]
};