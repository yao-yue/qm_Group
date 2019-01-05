import { MemberEntity } from '../../model';
import { members } from './mockData';

// 生命周期中， thenable  函数的类型     泛型(resolve的结果)
const fecthMembers = ():Promise<MemberEntity[]> => {
    return Promise.resolve(members);
}

export const membersAPI = {
    fecthMembers 
}