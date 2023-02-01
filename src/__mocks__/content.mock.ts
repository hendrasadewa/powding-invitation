import dayjs from 'dayjs';

import {
  AVAILABLE_BANK,
  MEDIA_SOURCE,
  MEDIA_TYPE,
  SOCIAL_ACCOUNT,
  YES_NO_CHOICE,
} from '@/constants/contents';
import { AVAILABLE_LAYOUT } from '@/constants/layout';

import { Content } from '@/types/contentTypes';
import { LayoutConfig } from '@/types/layoutTypes';

export const MOCK_CONTENT: Content = {
  landing: {
    id: '79248107-5aee-4f83-b1d0-dff143e7dd0f',
    name: 'John & Jane',
    eventDate: dayjs().add(30, 'd').toDate(),
    coverImgSrc: 'https://api.lorem.space/image/face?w=400&h=400&hash=79248107',
  },
  quote: {
    id: '465cd4e3-3c17-47f5-8560-62d93bf72fc9',
    content: `And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between vou compassion and
    mercy. surely in this are signs for people who reflect.`,
    source: 'Ar-rum:21',
  },
  bride: {
    id: 'dd6de617-ca03-4e50-8e72-9e524c8b54fc',
    husband: {
      id: '65332c46-48e1-4963-a4dc-4af20904e9f7',
      name: 'John Doe',
      description: 'putra dari bapak alex doe dan ibu alexis doe',
      photoSrc:
        'https://api.lorem.space/image/face?w=400&h=400&hash=4af20904e9f7',
      social: [
        {
          id: 'aaaca24e-0a15-4dbf-995b-792b51b634ef',
          type: SOCIAL_ACCOUNT.INSTAGRAM,
          account: '@johnDoe',
        },
      ],
    },
    wife: {
      id: 'a2bb8eed-4d19-460d-99ec-3572bba2daf8',
      name: 'Jane Doe',
      description: 'putri dari bapak robert doe dan ibu roberta doe',
      photoSrc:
        'https://api.lorem.space/image/face?w=400&h=400&hash=3572bba2daf8',
      social: [
        {
          id: 'ea08b796-aedc-458d-b43e-45705b9973c8',
          type: SOCIAL_ACCOUNT.INSTAGRAM,
          account: '@janeDoe',
        },
      ],
    },
  },
  countdown: {
    id: 'ccf5b9c4-792f-4d5e-8f37-085b0bc2037f',
    targetDate: dayjs().add(30, 'd').toDate(),
  },
  rundown: {
    id: 'e12c6909-3e49-4adf-a62e-4428171e605f',
    events: [
      {
        id: '8b47398d-0cb2-474e-a780-3e94f6441012',
        name: 'Akad Nikah',
        dateTimeStart: new Date(),
        dateTimeEnd: new Date(),
        locationName: 'Gedung Dewi Sartika',
        address:
          'Jalan mawar melati kenanga RT 02 RW 03, Kelurahan Mekar, Kecamatan Subur, Kota Bogor',
        mapLink: '',
        logoSrc: '/img/rings.svg',
      },
      {
        id: '2fc9de83-f689-4835-b2f1-e5b7f57509f0',
        name: 'Resepsi Nikah',
        dateTimeStart: new Date(),
        dateTimeEnd: new Date(),
        locationName: 'Gedung Dewi Sartika',
        address:
          'Jalan mawar melati kenanga RT 02 RW 03, Kelurahan Mekar, Kecamatan Subur, Kota Bogor',
        mapLink: '',
        logoSrc: '/img/toast.svg',
      },
    ],
  },
  gallery: {
    id: '7a6a7fb0-79eb-4882-81d0-79039e3d0dd9',
    name: 'Pict of Us',
    medias: [
      {
        id: '9aef251e-f42f-40c0-8f22-123f954b8eb7',
        name: 'a',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=9aef251e',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: 'ec6e37da-8db8-44f7-9ec9-bb8c53b5a9cc',
        name: 'b',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=ec6e37da',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: '04966323-cfa7-49c9-a139-8c23f58be80f',
        name: 'c',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=04966323',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: 'fcfe5247-f982-4f54-98ba-d2cb6b8fd77c',
        name: 'd',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=fcfe5247',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: '8adb86f3-6572-4ec7-bf6e-91a849512595',
        name: 'e',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=8adb86f3',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: '0e3eefc3-6f16-4485-8edc-8f92ee40d2e6',
        name: 'f',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=0e3eefc3',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: '03b34a87-0172-4829-b684-76e3d82393d1',
        name: 'g',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=fcfe5247',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: '33d68f7c-5699-4322-bac2-e8ac9e9b974a',
        name: 'h',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=8adb86f3',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
      {
        id: '06fed1cb-61c8-4265-8266-3519002d5044',
        name: 'i',
        src: 'https://api.lorem.space/image/face?w=400&h=400&hash=0e3eefc3',
        type: MEDIA_TYPE.IMAGE,
        mediaSource: MEDIA_SOURCE.SELF,
      },
    ],
  },
  reservations: {
    id: 'a6ea5581-fe9a-49a5-bbc9-158d9e42733e',
    title: 'Will you attend our wedding?',
    choices: [
      {
        id: 'f6ea0508-3c99-48f6-af6e-dc3138acc847',
        value: YES_NO_CHOICE.YES,
        label: 'Will Attend',
      },
      {
        id: 'db4de1f5-5f7e-4fe0-9a58-3752e7f11b90',
        value: YES_NO_CHOICE.NO,
        label: 'Will not Attend',
      },
    ],
  },
  gift: {
    id: '82e78854-3a9d-4762-916b-cb98d2601daf',
    title: 'Wedding Gift',
    label: `Your blessing and coming to our wedding are enough for us. However,
    if you want to give a gift we provide a Digital Envelope to make it
    easier for you. thank you`,
    accounts: [
      {
        id: '865a5ece-1399-42a4-ad57-5577f610be0e',
        bank: AVAILABLE_BANK.BCA,
        number: '111 2345 6789 1111',
        ownerName: 'an. John Doe',
      },
      {
        id: '73df37b9-74ad-4138-8f17-608c77250225',
        bank: AVAILABLE_BANK.MANDIRI,
        number: '111 2345 6789 1111',
        ownerName: 'an. Jane Doe',
      },
    ],
  },
};

export const MOCK_LAYOUT_CONFIG: LayoutConfig = {
  layout: AVAILABLE_LAYOUT.SIMPLE,
};
