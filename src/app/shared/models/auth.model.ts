export interface User {
  username: string;
  id: number;
}

export class UserInfo {
  public id?: number;
  public name?: string;
  public token?: string;
  public username?: string;
  public profileImage?: boolean;
}
// export interface Roles {
//   authority: Role;
// }

// export enum Role {
//   SuperAdmin = 'ROLE_SUPER_ADMIN',
//   Client = 'ROLE_CLIENT',
//   SubUser = 'ROLE_SUBUSER',
//   FieldWorker = 'ROLE_FIELDWORKER',
// }
