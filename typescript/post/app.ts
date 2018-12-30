enum PostStatus {    // 枚举类型
    Unpublished,
    Published,
    Draft,
}
interface Post {
    title: string;
    content?: string;  // interface 是以;结尾的
    status: PostStatus;  // 枚举类型

}
let post:Post  = {
    title: '过五关斩6将，去鹅厂',
    status: PostStatus.Published,
    content: '春招之旅',
}
console.log(post)
console.log(PostStatus[2]);