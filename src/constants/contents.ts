import { BankAccountDetails, SocialAccountDetails } from '@/types/contentTypes';

export enum SOCIAL_ACCOUNT {
  INSTAGRAM = 'INSTAGRAM',
}

export const SOCIAL_ACCOUNT_DETAILS: Record<
  SOCIAL_ACCOUNT,
  SocialAccountDetails
> = {
  INSTAGRAM: {
    logo: '/img/social-ig.svg',
    name: 'Instagram',
    url: 'https://instagram.com',
  },
};

export enum YES_NO_CHOICE {
  YES = 'YES',
  NO = 'NO',
}

export enum AVAILABLE_BANK {
  MANDIRI = 'MANDIRI',
  BRI = 'BRI',
  BCA = 'BCA',
}

export const BANK_ACCOUNT_DETAILS: Record<AVAILABLE_BANK, BankAccountDetails> =
  {
    MANDIRI: {
      label: 'Bank Mandiri',
      logo: '/img/bank-mandiri.svg',
      accentColor: '#003a6e',
    },
    BRI: {
      label: 'Bank BRI',
      logo: '/img/bank-bri.svg',
      accentColor: '#003a70',
    },
    BCA: {
      label: 'Bank BCA',
      logo: '/img/bank-bca.svg',
      accentColor: '#0060ab',
    },
  };

export enum MEDIA_TYPE {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export enum MEDIA_SOURCE {
  SELF = 'SELF',
  YOUTUBE = 'YOUTUBE',
  TWITCH = 'TWITCH',
}
