import { clearFix } from '../../_util/theme';
import type { GenerateStyle, FullToken } from '../../_util/theme';

const genPictureCardStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls } = token;

  return {
    [`${componentCls}-picture-card-wrapper`]: {
      ...clearFix(),
      display: 'inline-block',
      width: '100%',
    },
    [`${componentCls}${componentCls}-select-picture-card`]: {
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

      [`> ${componentCls}`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
      },

      [`${componentCls}-select-picture-card:not(${componentCls}-disabled):hover`]: {
        borderColor: token.colorPrimary,
      },
    },
  };
};

export default genPictureCardStyle;
