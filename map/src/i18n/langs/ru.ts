/* eslint max-len: 0 */
import { PartialLanguage } from '../iface';
import strings from './ru-RU.json';

const LANG: PartialLanguage = {
  meta: {
    name: 'Русский',
    direction: 'ltr',
  },
  strings,
};

export default LANG;
