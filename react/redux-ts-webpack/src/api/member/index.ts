import { MemberEntity } from '../../model';
import { members } from './mockData';

// 生命周期中， thenable  函数的类型     泛型(resolve的结果)

//组件划分的粒度，循环，每个都可以做一个组件
//函数式组件 <Prop/>({member})
const baseURL = 'https://api.github.com/orgs/lemoncode';

const fecthMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(members);
}
const fecthMembersAsync = (): Promise<MemberEntity[]> => {
    const membersURL = `${baseURL}/members`;
    return fetch(membersURL)
        .then(response => response.json())
        .then(mapToMembers);
}

// 数据是any类型   返回的类型强制约束为 MemberEntity
const mapToMembers = (githubMembers: any[]): MemberEntity[] => {
    return githubMembers.map(mapToMember);
}

//函数式编程  
// ts 严谨、模式化
const mapToMember = (githubMember): MemberEntity => {
    return {
        id: githubMember.id,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    }
}

const saveMember = (member: MemberEntity):Promise<boolean> => {
    // insertMember(member);
    return Promise.resolve(true);
}
// const insertMember = (member: MemberEntity) => {
//     member.id = members.length
//     members = [
//         ...members,
//         member,
//     ]
// }

export const membersAPI = {
    fecthMembers,
    fecthMembersAsync,
    saveMember
}