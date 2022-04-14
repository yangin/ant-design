import { clearFix, resetComponent } from '../../_util/theme';
import type { GenerateStyle, FullToken } from '../../_util/theme';

const genListStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls, antCls, iconCls } = token;

  return {
    [`${componentCls}-list`]: {
      ...resetComponent(token),
      ...clearFix(),
      lineHeight: token.lineHeight,

      [`${componentCls}-list-item`]: {
        position: 'relative',
        height: token.lineHeight * token.fontSizeBase,
        marginTop: token.marginXS,
        fontSize: token.fontSizeBase,

        [`${componentCls}-list-item-name`]: {
          display: 'inline-block',
          width: '100%',
          paddingLeft: token.fontSizeBase + token.paddingXS,
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

          [`${componentCls}-list-item-card-actions.picture`]: {
            top: '22px',
            lineHeight: 0,
          },

          [`
            ${componentCls}-list-item-card-actions-btn:focus,
            ${componentCls}-list-item-card-actions.picture ${componentCls}-list-item-card-actions-btn
            `]: {
            opacity: 1,
          },

          [iconCls]: {
            color: '@upload-actions-color',
          },
        },

        [`${componentCls}-list-item-info`]: {
          height: '100%',
          padding: '0 4px',
          transition: `background-color ${token.motionDurationSlow}`,

          '> span': {
            display: 'block',
            width: '100%',
            height: '100%',
          },

          [`
      ${componentCls}-text-icon ${iconCls}`]: {
            position: 'absolute',
            top: token.fontSizeBase / 2 - 2,
            color: token.colorTextSecondary,
            fontSize: token.fontSizeBase,
          },

          [`${iconCls}-close`]: {
            position: 'absolute',
            top: '6px',
            right: '4px',
            color: token.colorTextSecondary,
            fontSize: 10,
            lineHeight: 0,
            cursor: 'pointer',
            opacity: 0,
            transition: `all ${token.motionDurationSlow}`,

            [`${iconCls}-close:hover`]: {
              color: token.colorText,
            },
          },
        },
      },
    },
  };
};

export default genListStyle;
