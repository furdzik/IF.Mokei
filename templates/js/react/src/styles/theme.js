import { colors, typography } from './basic';

/*
  @TODO consider using css variables
  https://github.com/furdzik/IF.Kamisama/issues/35
*/

export default {
  ...colors,
  ...typography,

  layout: {
    width: '100rem',
    sidePadding: '2rem'
  }
};
