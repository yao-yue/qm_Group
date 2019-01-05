import * as React from 'react';
import { MemberEntity } from '../../model';
import { membersAPI } from '../../api/member';
// import { members } from '../../api/member/mockData';

interface State {
  members: MemberEntity[]
}
interface Props {
}
export class MembersPage extends React.Component<Props, State> {
  constructor (props) {
    super(props);
    this.state = {
      members: []
    }
  }
  public componentDidMount () {   //挂载后渲染数据
    membersAPI.fecthMembers()
      .then(members => {
        this.setState({
          members
        })
      })
  }

  public render () {
    return (
      <div className="row">
        <h2>Members Page</h2>
        <table className="table">
          <thead>
          { MemberHeader() }
          </thead>
          <tbody>
          { this.state.members.map(MemberRow)}
          </tbody>
        </table>
      </div>
    )
  }
}

const MemberHeader = () => {
  return (
    <tr>
      <td>Avatar</td>
      <td>Id</td>
      <td>Name</td>
    </tr>
  )
}

const MemberRow = (member: MemberEntity) => {
  return (
    <tr key={member.id}>
      <td>
        <img src={member.avatar_url} className="avatar" />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <span>{member.login}</span>
      </td>
    </tr>
  )
}
