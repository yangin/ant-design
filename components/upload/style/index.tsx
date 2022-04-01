// deps-lint-skip-all
import {
  useStyleRegister,
  useToken,
  UseComponentStyleResult,
  GenerateStyle,
  resetComponent,
} from '../../_util/theme';
import genDraggerStyle from './dragger';
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
    [uploadPrefixCls]: {},
  };
};

// ============================== Export ==============================
export default function useStyle(prefixCls: string): UseComponentStyleResult {
  const [theme, token, hashId] = useToken();

  const UploadToken: UploadToken = {
    ...token,
    uploadPrefixCls: `.${prefixCls}`,
  };

  return [
    useStyleRegister({ theme, token, hashId, path: [prefixCls] }, () => [
      genResetStyle(UploadToken, hashId),
      genBaseStyle(UploadToken, hashId),
      genDraggerStyle(UploadToken, hashId),
    ]),
    hashId,
  ];
}
