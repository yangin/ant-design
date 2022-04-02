import type { GenerateStyle } from '../../_util/theme';
import type { UploadToken } from './interface';

const genDraggerStyle: GenerateStyle<UploadToken> = token => {
  const { uploadPrefixCls, iconPrefixCls } = token;

  return {
    [`${uploadPrefixCls}-drag`]: {
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      background: token.colorBgComponentSecondary,
      border: `${token.controlLineWidth}px dashed ${token.colorBorder}`,
      borderRadius: token.radiusBase,
      cursor: 'pointer',
      transition: `border-color ${token.motionDurationSlow}`,

      [uploadPrefixCls]: {
        padding: `${token.padding}px 0`,
      },

      [`${uploadPrefixCls}${uploadPrefixCls}-disabled`]: {
        cursor: 'not-allowed',
      },

      [`${uploadPrefixCls}-btn`]: {
        display: 'table',
        height: '100%',
        outline: 'none',
      },

      [`${uploadPrefixCls}-drag-container`]: {
        display: 'table-cell',
        verticalAlign: 'middle',
      },

      [`${uploadPrefixCls}:not(${uploadPrefixCls}-disabled):hover`]: {
        borderColor: token.colorPrimaryHover,
      },

      [`p${uploadPrefixCls}-drag-icon`]: {
        marginBottom: 20,

        [iconPrefixCls]: {
          color: token['blue-5'],
          fontSize: 48,
        },
      },

      [`p${uploadPrefixCls}-text`]: {
        margin: '0 0 4px',
        color: token.colorTextHeading,
        fontSize: token.fontSizeLG,
      },

      [`p${uploadPrefixCls}-hint`]: {
        color: token.colorTextSecondary,
        fontSize: token.fontSize,
      },
    },
  };
};

export default genDraggerStyle;
