// deps-lint-skip-all
import { genComponentStyleHook, resetComponent } from '../../_util/theme';
import genDraggerStyle from './dragger';
import genListStyle from './list';
import genPictureCardStyle from './picture-card';
import type { GenerateStyle, FullToken } from '../../_util/theme';

export interface ComponentToken {
  uploadPictureCardSize: number;
}

const genResetStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      ...resetComponent(token),
      outline: 0,
      p: {
        margin: 0,
      },

      "input[type='file']": {
        cursor: 'pointer',
      },
    },
  };
};

const genBaseStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls } = token;

  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-select`]: {
        display: 'inline-block',
      },

      [`${componentCls}-disabled`]: {
        cursor: 'not-allowed',
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(
  'Upload',
  token => [
    genResetStyle(token),
    genBaseStyle(token),
    genDraggerStyle(token),
    genPictureCardStyle(token),
    genListStyle(token),
  ],
  () => ({
    uploadPictureCardSize: 104,
  }),
);
