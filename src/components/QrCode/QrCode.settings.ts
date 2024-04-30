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
];

const colorSettings: TSetting[] = [
  {
    key: 'QrfgColor',
    label: 'Font',
    type: ESetting.COLOR_PICKER,
    defaultValue: "#000000",
  },
  {
    key: 'QrbgColor',
    label: 'Background',
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
  {
    key: 'qrColors',
    label: 'QR Colors',
    type: ESetting.GROUP,
    components: colorSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
