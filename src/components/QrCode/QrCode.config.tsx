import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdQrCode2 } from 'react-icons/md';

import QrCodeSettings, { BasicSettings } from './QrCode.settings';

export default {
  craft: {
    displayName: 'QrCode',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(QrCodeSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'QrCode',
    exposed: true,
    icon: MdQrCode2,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      /*{
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },*/
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    Qrsize: 128,
    QrfgColor: '#000000',
    QrbgColor: '#FFFFFF',
    iterableChild: true,
  },
} as T4DComponentConfig<IQrCodeProps>;

export interface IQrCodeProps extends webforms.ComponentProps {
  name: string;
  Qrsize: number;
  QrfgColor: string;
  QrbgColor: string;
}
