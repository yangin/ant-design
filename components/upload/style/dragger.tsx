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
      background: '@background-color-light',
      border: '@border-width-base dashed @border-color-base',
      borderRadius: '@border-radius-base',
      cursor: 'pointer',
      transition: 'border-color 0.3s',

      [uploadPrefixCls]: {
        padding: `${token.padding} 0`,
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
        borderColor: '@primary-5',
      },

      [`p.${uploadPrefixCls}-drag-icon`]: {
        marginBottom: '20px',

        [iconPrefixCls]: {
          color: '@primary-5',
          fontSize: '48px',
        },
      },

      [`p.${uploadPrefixCls}-text`]: {
        margin: '0 0 4px',
        color: '@heading-color',
        fontSize: '@font-size-lg',
      },

      [`p.${uploadPrefixCls}-hint`]: {
        color: '@text-color-secondary',
        fontSize: '@font-size-base',
      },
    },
  };
};

export default genDraggerStyle;
