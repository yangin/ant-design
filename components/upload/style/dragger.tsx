// deps-lint-skip-all
import type { GenerateStyle } from '../../_util/theme';
import type { UploadToken } from './interface';

const genDraggerStyle: GenerateStyle<UploadToken> = token => {
  const { uploadPrefixCls } = token;

  return {
    [uploadPrefixCls]: {
      '&-btn': {
        display: 'block',
        width: '100%',
        outline: 'none',
      },
    },
  };
};

export default genDraggerStyle;
