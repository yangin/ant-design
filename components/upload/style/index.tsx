// deps-lint-skip-all
import { useStyleRegister, useToken, resetComponent } from '../../_util/theme';
import genDraggerStyle from './dragger';
import genListStyle from './list';
import genPictureCardStyle from './picture-card';
import type { UseComponentStyleResult, GenerateStyle } from '../../_util/theme';
import type { UploadToken } from './interface';

const genResetStyle: GenerateStyle<UploadToken> = token => {
  const { uploadPrefixCls } = token;

  return {
    [uploadPrefixCls]: {
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

const genBaseStyle: GenerateStyle<UploadToken> = token => {
  const { uploadPrefixCls } = token;

  return {
    [`${uploadPrefixCls}-wrapper`]: {
      [`${uploadPrefixCls}-select`]: {
        display: 'inline-block',
      },

      [`${uploadPrefixCls}-disabled`]: {
        cursor: 'not-allowed',
      },
    },
  };
};

// ============================== Export ==============================
export default function useStyle(
  prefixCls: string,
  iconPrefixCls: string,
): UseComponentStyleResult {
  const [theme, token, hashId] = useToken();

  const UploadToken: UploadToken = {
    ...token,
    uploadPrefixCls: `.${prefixCls}`,
    iconPrefixCls: `.${iconPrefixCls}`,
    uploadPictureCardSize: 104,
  };

  return [
    useStyleRegister({ theme, token, hashId, path: [prefixCls] }, () => [
      genResetStyle(UploadToken),
      genBaseStyle(UploadToken),
      genDraggerStyle(UploadToken),
      genPictureCardStyle(UploadToken),
      genListStyle(UploadToken),
    ]),
    hashId,
  ];
}
