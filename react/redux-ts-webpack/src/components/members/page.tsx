import * as React from 'react';
import { MemberEntity } from '../../model';
import { membersAPI } from '../../api/member';
import { MemberHeader } from './memberHeader'
import { MemberRow } from './memberRow'
import { Link } from 'react-router-dom'

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
    membersAPI.fecthMembersAsync()
      .then(members => {
        console.log('获取数据')
        console.log(members);
        this.setState({
          members
        })
      })
  }

  public render () {
    return (
      <div className="row">
        <h2>Members Page</h2>
        <Link to="/member">New Member</Link>
        <table className="table">
          <thead>
          <MemberHeader/>
          </thead>
          <tbody>
          { this.state.members.map((member) => (
            <MemberRow key={member.id} member={member} />
          )) }
          </tbody>
        </table>
      </div>
    )
  }
}

