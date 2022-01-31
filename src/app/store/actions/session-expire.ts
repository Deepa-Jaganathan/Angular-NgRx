import { Action } from '@ngrx/store';

export enum SessionExpireEnum {
    SESSION_ABOUT_TO_EXPIRE = '[Session] Session About To Expire',
    SESSION_EXPIRED = '[Session] Session Expired',
} 


export class sessionAboutToExpire implements Action {
    public readonly type: string = SessionExpireEnum.SESSION_ABOUT_TO_EXPIRE;
}

export class sessionExpired implements Action {
    public readonly type: string = SessionExpireEnum.SESSION_EXPIRED;
}

export type SessionActionTypes = sessionAboutToExpire | sessionExpired;