export interface MemberImpl {
    id : number | null,
    username : string,
    password : string;
    intro : string;
    displayName : string;
    educateState : string;
}
export class Member implements MemberImpl {
     id : null | number;
     username : string;
     password : string;
     intro : string;
     displayName : string;
     educateState : string;
    constructor(id:null,username:string,password :string,intro : string, displayName : string, educateState : string) {
        this.id = id;
        this.username = username;
        this.password  = password;
        this.intro  = intro;
        this.displayName  = displayName;
        this.educateState  = educateState;
    }
}
