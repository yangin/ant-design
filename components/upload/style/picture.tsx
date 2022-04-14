import { clearFix } from '../../_util/theme';
import type { GenerateStyle, FullToken } from '../../_util/theme';

const genPictureStyle: GenerateStyle<FullToken<'Upload'>> = token => {
  const { componentCls, iconCls } = token;
  const itemCls = `${componentCls}-list-item`;

  return {
    [`${componentCls}-picture, ${componentCls}-picture-card`]: {
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
  };
};

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

export { genPictureStyle, genPictureCardStyle };
