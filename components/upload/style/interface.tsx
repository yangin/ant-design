import type { FullToken } from '../../_util/theme';

export interface ComponentToken {
  uploadPictureCardSize: number;
}

export interface UploadToken extends FullToken<'Upload'> {}
