import { clearFix } from '../../_util/theme';
import type { GenerateStyle, FullToken } from '../../_util/theme';

const genListStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls, antCls, iconCls } = token;
  const itemCls = `${componentCls}-list-item`;
  const actionsCls = `${itemCls}-actions`;
  const actionCls = `${itemCls}-action`;

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

            [actionCls]: {
              opacity: 0,
            },

            [`${actionCls}${antCls}-btn-sm`]: {
              height: '20px',
              lineHeight: 1,
              // FIXME: should not override small button
              '> span': {
                transform: 'scale(1)',
              },
            },

            [`
              ${actionCls}:focus,
              &.picture ${actionCls}
            `]: {
              opacity: 1,
            },

            [iconCls]: {
              color: token.uploadActionsColor,
              transition: `all ${token.motionDurationSlow}`,
            },

            [`&:hover ${iconCls}`]: {
              color: token.colorText,
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

          [`${itemCls}-progress`]: {
            position: 'absolute',
            bottom: '-12px',
            width: '100%',
            paddingLeft: token.fontSizeBase + 12,
            fontSize: token.fontSizeBase,
            lineHeight: 0,
          },
        },

        [`${itemCls}:hover ${itemCls}-info`]: {
          backgroundColor: token.controlItemBgHover,
        },

        [`
        ${itemCls}:hover ${actionCls}
        `]: {
          opacity: 1,
          color: token.colorText,
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

          [actionCls]: {
            opacity: 1,
          },
        },
      },
    },
  };
};

export default genListStyle;
