import { clearFix, resetComponent } from '../../_util/theme';
import type { GenerateStyle } from '../../_util/theme';
import type { UploadToken } from './interface';

const genListStyle: GenerateStyle<UploadToken> = token => {
  const { uploadPrefixCls } = token;

  return {
    [`${uploadPrefixCls}-list`]: {
      ...resetComponent(token),
      ...clearFix(),
      lineHeight: token.lineHeight,

      [`${uploadPrefixCls}-list-item`]: {
        position: 'relative',
        height: token.lineHeight * token.fontSize,
        marginTop: token.marginXS,
        fontSize: token.fontSize,

        [`${uploadPrefixCls}-list-item-name`]: {
          display: 'inline-block',
          width: '100%',
          paddingLeft: token.fontSize + token.paddingXS,
          overflow: 'hidden',
          lineHeight: token.lineHeight,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },

        [`${uploadPrefixCls}-list-item-card-actions`]: {
          position: 'absolute',
          right: 0,

          [`${uploadPrefixCls}-list-item-card-actions-btn`]: {
            opacity: 0,
          },
        },
      },
    },
  };
};

export default genListStyle;
