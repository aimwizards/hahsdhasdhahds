import { Treatment } from '../types';

export const treatments: Treatment[] = [
  {
    id: 'botox',
    title: 'Neurotoxin',
    description: 'Används för att släta ut och mjuka upp mimiska linjer.',
    image: 'https://cms.the-clinics.com/wp-content/uploads/2024/09/botox-1.jpg',
    howItWorks: [
      'Neurotoxin blockerar nervsignaler till muskeln.',
      'Muskeln slappnar av och rynkor orsakade av ansiktets mimik mjukas upp.',
      'Effekten är tillfällig och varar vanligtvis 3–4 månader.'
    ],
    expectedResults: [
      'Mjukare linjer i pannan.',
      'Minskad "argrynka" mellan ögonbrynen.',
      'Ett piggare och mer avslappnat utseende.'
    ]
  },
  {
    id: 'fillers',
    title: 'Fillers',
    description: 'Framhäver din naturliga skönhet med volym och form.',
    image: 'https://markmedicalcare.com/wp-content/uploads/2023/05/cosmetic-fillers.jpeg',
    howItWorks: [
      'Återställa volymförlust i ansiktet.',
      'Forma kinder, haka och käklinje.',
      'Mjuka upp linjer och veck.',
      'Återfukta och förbättra hudens elasticitet.',
      'Ge subtil förstärkning av ansiktets proportioner.'
    ],
    expectedResults: [
      'Naturlig volym och förbättrade konturer.',
      'Jämnare hud och mjukare linjer.',
      'Ett fräschare och mer balanserat utseende.',
      'Diskreta förändringar som förstärker din egen skönhet.'
    ]
  },
  {
    id: 'polynucleotides',
    title: 'Polynukleotider (PN)',
    description: 'Hudföryngring på cellnivå med "Lax DNA".',
    image: 'https://www.hautsachegut.at/wp-content/uploads/2024/07/Polynukleotid-Behandlung-1-scaled.jpeg',
    howItWorks: [
      'Stimulerar hudens celler att reparera sig och producera nytt kollagen.',
      'Förbättrar hudens elasticitet, lyster och spänst.',
      'Har en starkt återfuktande effekt genom att binda vatten.',
      'Skyddar huden mot oxidativ stress (fria radikaler).'
    ],
    expectedResults: [
      'Friskare och mer ungdomlig hudton.',
      'Minskade fina linjer och jämnare struktur.',
      'Förbättrad elasticitet och långvarig återfuktning.'
    ]
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster / Mesoterapi',
    description: 'Ger djup återfuktning och förbättrad hudkvalitet.',
    image: 'https://www.mesoestetic.es/wp/wp-content/uploads/2025/03/skinboosters_600px.jpg',
    howItWorks: [
      'Små injektioner av hyaluronsyra och/eller andra aktiva ämnen.',
      'Återställer hudens spänst och lyster på djupet.',
      'Förbättrar hudens kvalitet inifrån, inte genom att ge volym.',
      'Resultatet är en friskare, mer ungdomlig och strålande hud.'
    ],
    expectedResults: [
      'Djup återfuktning av huden.',
      'Ökad lyster och friskare hudton.',
      'Förbättrad elasticitet och spänst.',
      'Mjukare hud med jämnare struktur och minskning av fina linjer.'
    ]
  },
  {
    id: 'prp',
    title: 'PRP - med kroppens egna resurser',
    description: 'En naturlig behandling som stimulerar läkning och förnyelse.',
    image: 'https://www.laserklinikcenter-st.se/wp-content/uploads/2025/03/GettyImages-1171697897.jpg',
    howItWorks: [
      '<b>Hudföryngring:</b> Förbättrar struktur, spänst och minskar fina linjer.',
      '<b>Hårbehandling:</b> Stimulerar hårsäckar och kan bidra till ökad hårtäthet.',
      '<b>Skäggbehandling:</b> Aktiverar vilande hårsäckar för en tätare skäggväxt.',
      '<b>Ärr & hudskador:</b> Kan förbättra acneärr och hjälper huden att reparera sig.',
      '<b>Pigment & hudton:</b> Kan bidra till en jämnare hudton och minska irritation.'
    ],
    expectedResults: [
      'Resultaten utvecklas gradvis under veckor till månader.',
      'Rekommenderas som en kur på 3-4 behandlingar med 4-6 veckors mellanrum.',
      'Eftersom behandlingen använder kroppens eget blod är risken för allergiska reaktioner mycket låg.'
    ]
  }
];