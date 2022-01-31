// Model will be have the sturcture of request and desired response of the api call
//post call will be having request model

export interface UserAlbumResponseModel {
  userId: number[];
  title: string[];
}

export interface CustomUserModel {
  userId: number;
  title?: string;
}
