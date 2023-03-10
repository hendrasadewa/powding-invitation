import {
  AVAILABLE_BANK,
  MEDIA_SOURCE,
  MEDIA_TYPE,
  SOCIAL_ACCOUNT,
} from '@/constants/contents';

export interface Event {
  id: string;
  name: string;
  eventDate: Date;
  coverImgSrc: string;
}

export interface Quote {
  id: string;
  content: string;
  source: string;
}

export interface SocialAccount {
  id: string;
  type: SOCIAL_ACCOUNT;
  account: string;
}

export interface SocialAccountDetails {
  logo: string;
  name: string;
  url: string;
}

export interface Bride {
  id: string;
  name: string;
  description: string;
  photoSrc: string;
  social: SocialAccount[];
}

export interface RundownEvent {
  id: string;
  name: string;
  dateTimeStart: Date;
  dateTimeEnd: Date;
  locationName: string;
  address: string;
  mapLink: string;
  logoSrc?: string;
}

export interface Media {
  id: string;
  name: string;
  src: string;
  type: MEDIA_TYPE;
  mediaSource: MEDIA_SOURCE;
}

export interface Gallery {
  id: string;
  name: string;
  medias: Media[];
}

export interface Option {
  id: string;
  label: string;
  value: string;
}

export interface Reservations {
  id: string;
  title: string;
  choices: Option[];
  defaultSelected?: Option;
}

export interface BankAccount {
  id: string;
  bank: AVAILABLE_BANK;
  number: string;
  ownerName: string;
}

export interface BankAccountDetails {
  label: string;
  logo: string;
  accentColor: string;
}

export interface Gift {
  id: string;
  title: string;
  label: string;
  accounts: BankAccount[];
}

interface Countdown {
  id: string;
  targetDate: Date;
}

interface Rundown {
  id: string;
  events: RundownEvent[];
}

interface Brides {
  id: string;
  husband: Bride;
  wife: Bride;
}

export interface Content {
  landing: Event;
  quote: Quote;
  bride: Brides;
  countdown: Countdown;
  rundown: Rundown;
  gallery: Gallery;
  reservations: Reservations;
  gift: Gift;
}
