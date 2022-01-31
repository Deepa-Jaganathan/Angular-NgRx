import { UserAlbum, UserAlbumTitle } from '../../models/user-album';
import {get, sortBy} from 'lodash-es'

export function UserAlbumTransformation(source: any): UserAlbum[] {
    const album = sortBy(source, [
        function (o) {
            return o.title;
        },
    ]);
    console.log(album);
    return <UserAlbum[]>album;
}

export function UserAlbumTitleTransformation(source: any): UserAlbumTitle[] {
    const response: any[] = source;
    const albumArray = [];

    console.log(response)

    response.forEach((res) => {
        albumArray.push({
            userId: get(res, 'userId'),
            title: `${get(res, 'id')}.${get(res, 'title')}`,
        })
    })
    return albumArray;
}

export function UserAlbumCompleteTransformation(source: any): UserAlbum[] {
    const album: any[] = source;
    const albumArray: UserAlbum[] = [];
    console.log(album);
    album.forEach((res) => {
        if(get(res, 'completed') === true){
            albumArray.push({
                userId: get(res, 'userId'),
                id: get(res, 'id'),
                title: get(res, 'title'),
            })
        }

    })
    return <UserAlbum[]>albumArray;
}
