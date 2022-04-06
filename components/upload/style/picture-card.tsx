import { clearFix } from '../../_util/theme';
import type { GenerateStyle } from '../../_util/theme';
import type { UploadToken } from './interface';

const genPictureCardStyle: GenerateStyle<UploadToken> = token => {
  const { uploadPrefixCls } = token;

  return {
    [`${uploadPrefixCls}-picture-card-wrapper`]: {
      ...clearFix(),
      display: 'inline-block',
      width: '100%',
    },
    [`${uploadPrefixCls}${uploadPrefixCls}-select-picture-card`]: {
      width: token.uploadPictureCardSize,
      height: token.uploadPictureCardSize,
      marginRight: token.marginXS,
      marginBottom: token.marginXS,
      textAlign: 'center',
      verticalAlign: 'top',
      backgroundColor: token.colorBgComponentSecondary,
      border: `${token.controlLineWidth}px dashed ${token.colorBorder}`,
      borderRadius: token.radiusBase,
      cursor: 'pointer',
      transition: `border-color ${token.motionDurationSlow}`,

      [`> ${uploadPrefixCls}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
      },

      [`${uploadPrefixCls}-select-picture-card:not(${uploadPrefixCls}-disabled):hover`]: {
        borderColor: token.colorPrimary,
      },
    },
  };
};

export default genPictureCardStyle;
