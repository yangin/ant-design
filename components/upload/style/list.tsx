import { clearFix, resetComponent } from '../../_util/theme';
import type { GenerateStyle, FullToken } from '../../_util/theme';

const genListStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls, antCls } = token;

  return {
    [`${componentCls}-list`]: {
      ...resetComponent(token),
      ...clearFix(),
      lineHeight: token.lineHeight,

      [`${componentCls}-list-item`]: {
        position: 'relative',
        height: token.lineHeight * token.fontSize,
        marginTop: token.marginXS,
        fontSize: token.fontSize,

        [`${componentCls}-list-item-name`]: {
          display: 'inline-block',
          width: '100%',
          paddingLeft: token.fontSize + token.paddingXS,
          overflow: 'hidden',
          lineHeight: token.lineHeight,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },

        [`${componentCls}-list-item-card-actions`]: {
          position: 'absolute',
          right: 0,

          [`${componentCls}-list-item-card-actions-btn`]: {
            opacity: 0,
          },

          [`${componentCls}-list-item-card-actions-btn${antCls}-btn-sm`]: {
            height: '20px',
            lineHeight: 1,
          },
        },
      },
    },
  };
};

export default genListStyle;
