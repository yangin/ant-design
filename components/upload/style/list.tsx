import { clearFix } from '../../_util/theme';
import type { GenerateStyle, FullToken } from '../../_util/theme';

const genListStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls, antCls, iconCls } = token;
  const itemCls = `${componentCls}-list-item`;
  const actionsCls = `${itemCls}-card-actions`;

  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-list`]: {
        ...clearFix(),
        lineHeight: token.lineHeight,

        [itemCls]: {
          position: 'relative',
          height: token.lineHeight * token.fontSizeBase,
          marginTop: token.marginXS,
          fontSize: token.fontSizeBase,

          [`${itemCls}-name`]: {
            display: 'inline-block',
            width: '100%',
            paddingLeft: token.fontSizeBase + token.paddingXS,
            overflow: 'hidden',
            lineHeight: token.lineHeight,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },

          [actionsCls]: {
            position: 'absolute',
            right: 0,

            [`${actionsCls}-btn`]: {
              opacity: 0,
            },

            [`${actionsCls}-btn${antCls}-btn-sm`]: {
              height: '20px',
              lineHeight: 1,
            },

            [`${actionsCls}.picture`]: {
              top: '22px',
              lineHeight: 0,
            },

            [`
              ${actionsCls}-btn:focus,
              ${actionsCls}.picture ${actionsCls}-btn
            `]: {
              opacity: 1,
            },

            [iconCls]: {
              color: token.uploadActionsColor,
            },
          },

          [`${itemCls}-info`]: {
            height: '100%',
            padding: '0 4px',
            transition: `background-color ${token.motionDurationSlow}`,

            '> span': {
              display: 'block',
              width: '100%',
              height: '100%',
            },

            [`${componentCls}-text-icon ${iconCls}`]: {
              position: 'absolute',
              top: token.fontSizeBase / 2 - 2,
              color: token.colorTextSecondary,
              fontSize: token.fontSizeBase,
            },
          },

          [`${iconCls}-close`]: {
            position: 'absolute',
            top: 6,
            right: 4,
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

          [`${itemCls}:hover ${itemCls}-info`]: {
            backgroundColor: token.controlItemBgHover,
          },

          [`
          ${itemCls}:hover ${iconCls}-close,
          ${itemCls}:hover ${actionsCls}-btn
        `]: {
            opacity: 1,
          },

          [`
          ${itemCls}-error,
          ${itemCls}-error ${componentCls}-text-icon > ${iconCls},
          ${itemCls}-error ${itemCls}-name
        `]: {
            color: token.colorError,
          },

          [`${itemCls}-error ${actionsCls}`]: {
            [iconCls]: {
              color: token.colorError,
            },

            [`${actionsCls}-btn`]: {
              opacity: 1,
            },
          },

          [`${itemCls}-progress`]: {
            position: 'absolute',
            bottom: '-12px',
            width: '100%',
            paddingLeft: token.fontSizeBase + 12,
            fontSize: token.fontSizeBase,
            lineHeight: 0,
          },
        },
      },
    },
  };
};

export default genListStyle;
