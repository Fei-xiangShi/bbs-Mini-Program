export interface UserInfo{
    id : number;
    name : string;
    accountId : string;
    studentId : string;
    gmtCreate : number;
    gmtModified : number;
    siteAdmin : boolean;
    avatarUrl : string;
    bio : string;
    email : string;
}

export class User{
    userInfo : UserInfo = {
        id : 0,
        name : "",
        accountId : "",
        studentId : "",
        gmtCreate : 0,
        gmtModified : 0,
        siteAdmin : false,
        avatarUrl : "",
        bio : "",
        email : ""
    };
}