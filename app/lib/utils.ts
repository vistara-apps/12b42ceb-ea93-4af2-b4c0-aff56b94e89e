import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

export const BASIC_RIGHTS = {
  'right-to-remain-silent': {
    title: 'Right to Remain Silent',
    description: 'You have the right to remain silent and not answer questions.',
    script: {
      english: "I am exercising my right to remain silent. I do not wish to answer questions.",
      spanish: "Estoy ejerciendo mi derecho a permanecer en silencio. No deseo responder preguntas."
    }
  },
  'right-to-refuse-search': {
    title: 'Right to Refuse Search',
    description: 'You can refuse consent to search your person, belongings, or vehicle.',
    script: {
      english: "I do not consent to any searches. I am exercising my Fourth Amendment rights.",
      spanish: "No consiento a ninguna búsqueda. Estoy ejerciendo mis derechos de la Cuarta Enmienda."
    }
  },
  'right-to-attorney': {
    title: 'Right to an Attorney',
    description: 'You have the right to have an attorney present during questioning.',
    script: {
      english: "I want to speak to an attorney before answering any questions.",
      spanish: "Quiero hablar con un abogado antes de responder cualquier pregunta."
    }
  },
  'right-to-leave': {
    title: 'Right to Leave',
    description: 'You have the right to ask if you are free to leave.',
    script: {
      english: "Am I free to leave? Am I being detained or arrested?",
      spanish: "¿Soy libre de irme? ¿Me están deteniendo o arrestando?"
    }
  }
};
