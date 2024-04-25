import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'name',
    label: 'Default Link',
    type: ESetting.TEXT_FIELD,
    defaultValue: '',
  },
  {
    key: 'Qrsize',
    label: 'QR Size',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 128,
  },
  {
    key: 'QrfgColor',
    label: 'QR Font Color',
    type: ESetting.COLOR_PICKER,
    defaultValue: "#000000",
  },
  {
    key: 'QrbgColor',
    label: 'QR Background Color',
    type: ESetting.COLOR_PICKER,
    defaultValue: "#FFFFFF",
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
