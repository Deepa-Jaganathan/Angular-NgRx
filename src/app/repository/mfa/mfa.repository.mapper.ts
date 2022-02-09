import { Mapper } from "src/app/core/base/mapper";
import { UserAlbumEntity } from "./mfa-entity";
import { CustomUserModel, UserAlbumResponseModel } from "./mfa.model";

export class MfaMapper extends Mapper<
  UserAlbumEntity[],
  UserAlbumResponseModel
> {
  constructor() {
    super();
  }

  mapFrom(userEntity: UserAlbumEntity[]): UserAlbumResponseModel {
    let response: CustomUserModel[] = [];
    userEntity.forEach((e) => {
      response.push({ userId: e.userId, title: e.title });
    });

    return {
      userId: userEntity.map((e) => e.id),
      title: userEntity.map((e) => e.title),
    };
  }
}
