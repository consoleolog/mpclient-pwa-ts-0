export interface ProblemImpl {
    id : null | number,
    title : string,
    content : string,
    price : number,
    level : string,
    category : string,
    problemImgName : File | string,
    answerImgName : File | string,
    writerId : number
}
export interface ProblemDataType {
    id : number ,
    title : string,
    content : string,
    price : number,
    level : string,
    category : string,
    quizImgName : string,
    writerId : number
}
// export class Problem implements ProblemImpl {
//     id : null | number;
//     title : string;
//     content : string;
//     price : number;
//     level : string;
//     category : string;
//     problemImgName : File | string;
//     answerImgName : File | string;
//     writerId : number;
//     constructor(id:null, title : string, content : string, price : number, level : string, problemImgName :File|string,answerImgName:File|string ,category : string, writerId : number ) {
//         this.id = id;
//         this.title = title;
//         this.content = content;
//         this.price = price;
//         this.level = level;
//         this.category  = category;
//
//         this.writerId = writerId;
//     }
// }