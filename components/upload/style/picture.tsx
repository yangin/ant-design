import { TinyColor } from '@ctrl/tinycolor';
import { clearFix } from '../../_util/theme';
import type { GenerateStyle, FullToken } from '../../_util/theme';

const genPictureStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls, iconCls } = token;
  const listCls = `${componentCls}-list`;
  const itemCls = `${listCls}-item`;

  return {
    [`${componentCls}-picture-card-wrapper`]: {
      [`${listCls}-picture, ${listCls}-picture-card`]: {
        [itemCls]: {
          position: 'relative',
          height: '66px',
          padding: token.paddingXS,
          border: `${token.controlLineWidth}px ${token.uploadPictureCardBorderStyle} ${token.colorBorder}`,
          borderRadius: token.radiusBase,

          [`${itemCls}-error`]: {
            borderColor: token.colorError,
          },
        },

        [`${itemCls}-info`]: {
          padding: 0,
        },

        [`${itemCls}:hover ${itemCls}-info`]: {
          background: 'transparent',
        },

        [`${itemCls}-uploading`]: {
          borderStyle: 'dashed',
        },

        [`${itemCls}-thumbnail`]: {
          width: '48px',
          height: '48px',
          lineHeight: '60px',
          textAlign: 'center',
          opacity: 0.8,

          [iconCls]: {
            fontSize: 26,
          },

          img: {
            display: 'block',
            width: '48px',
            height: '48px',
            overflow: 'hidden',
          },
        },

        // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
        [`${itemCls}-error ${itemCls}-thumbnail ${iconCls}`]: {
          [`svg path[fill='#e6f7ff']`]: {
            fill: token.colorBgError,
          },
          [`svg path[fill='#1890ff']`]: {
            fill: token.colorError,
          },
        },

        [`${itemCls}-icon`]: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          fontSize: '26px',
          transform: 'translate(-50%, -50%)',

          [iconCls]: {
            fontSize: '26px',
          },
        },

        [`${itemCls}-image`]: {
          maxWidth: '100%',
        },

        [`${itemCls}-name`]: {
          display: 'inline-block',
          boxSizing: 'border-box',
          maxWidth: '100%',
          margin: '0 0 0 8px',
          paddingRight: '8px',
          paddingLeft: '48px',
          overflow: 'hidden',
          lineHeight: '44px',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          transition: `all ${token.motionDurationSlow}`,
        },

        [`${itemCls}-uploading ${itemCls}-name`]: {
          marginBottom: '12px',
        },

        [`${itemCls}-progress`]: {
          bottom: '14px',
          width: 'calc(100% - 24px)',
          marginTop: 0,
          paddingLeft: '56px',
        },

        [`${iconCls}-close`]: {
          position: 'absolute',
          top: '8px',
          right: '8px',
          lineHeight: 1,
          opacity: 1,
        },
      },
    },
  };
};

const genPictureCardStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls, iconCls } = token;
  const listCls = `${componentCls}-list`;
  const itemCls = `${listCls}-item`;

  return {
    [`${componentCls}-picture-card-wrapper`]: {
      ...clearFix(),
      display: 'inline-block',
      width: '100%',
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

      // list
      [`${listCls}-picture-card`]: {
        [`${listCls}-picture-card-container`]: {
          display: 'inline-block',
          width: token.uploadPictureCardSize,
          height: token.uploadPictureCardSize,
          margin: `0 ${token.marginXS}px ${token.marginXS}px 0`,
          verticalAlign: 'top',
        },

        '&::after': {
          display: 'none',
        },

        [itemCls]: {
          height: '100%',
          margin: 0,
        },

        [`${itemCls}-info`]: {
          position: 'relative',
          height: '100%',
          overflow: 'hidden',

          '&::before': {
            position: 'absolute',
            zIndex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: new TinyColor('#000').setAlpha(0.5).toRgbString(),
            opacity: 0,
            transition: `all ${token.motionDurationSlow}`,
            content: '" "',
          },
        },

        [`${itemCls}:hover ${itemCls}-info::before`]: {
          opacity: 1,
        },

        [`${itemCls}-actions`]: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 10,
          whiteSpace: 'nowrap',
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: `all ${token.motionDurationSlow}`,

          [`${iconCls}-eye, ${iconCls}-download, ${iconCls}-delete`]: {
            zIndex: 10,
            width: '16px',
            margin: '0 4px',
            // FIXME: @text-color-dark: fade(@white, 85%);
            color: new TinyColor('#fff').setAlpha(0.85).toRgbString(),
            fontSize: '16px',
            cursor: 'pointer',
            transition: `all ${token.motionDurationSlow}`,

            '&:hover': {
              // FIXME: @text-color-dark: fade(@white, 85%);
              color: '#fff',
            },
          },
        },

        [`${itemCls}-info:hover + ${itemCls}-actions, ${itemCls}-actions:hover`]: {
          opacity: 1,
        },

        [`${itemCls}-thumbnail, ${itemCls}-thumbnail img`]: {
          position: 'static',
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        },

        [`${itemCls}-name`]: {
          display: 'none',
          margin: '8px 0 0',
          padding: '0',
          lineHeight: token.lineHeight,
          textAlign: 'center',
        },

        [`${itemCls}-file ${itemCls}-name`]: {
          position: 'absolute',
          bottom: '10px',
          display: 'block',
        },

        [`${itemCls}-uploading`]: {
          [`&${itemCls}`]: {
            backgroundColor: token.colorBgComponent,
          },

          [`${itemCls}-info`]: {
            height: 'auto',

            [`&::before, ${iconCls}-eye, ${iconCls}-delete`]: {
              display: 'none',
            },
          },
        },

        [`${itemCls}-progress`]: {
          bottom: '32px',
          width: 'calc(100% - 14px)',
          paddingLeft: '0',
        },
      },
    },
  };
};

export { genPictureStyle, genPictureCardStyle };
