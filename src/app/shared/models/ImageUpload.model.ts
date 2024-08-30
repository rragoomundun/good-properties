import { Status } from '../enums/status.enum';

export interface ImageUpload {
  image: string | ArrayBuffer | null;
  fileKey: string;
  fileLink: string;
  status: Status;
  error: any;
}
