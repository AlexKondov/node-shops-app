import '../sass/style.scss';

import { $, $$ } from './modules/bling';

import autocomplete from './modules/autocomplete';
import makeMap from './modules/map';

autocomplete($('#address'), $('#lat'), $('#lng'));

makeMap($('#map'))
