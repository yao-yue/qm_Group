import * as React from 'react';
import { Input, Button } from '../../common/components/form'
import { MemberEntity } from '../../model';

interface Props {
    member: MemberEntity;
    onChange: (filedName: string, value: string) => void;
    onSave: () => void;
}

export const MemberForm: React.StatelessComponent<Props> = (props) => {
    return (
        <form >
            <h1>Mange member</h1>
            <Input name="login" label="login" value={props.member.login} onChange={props.onChange} />
            <Input
                name="avata_url"
                label="Avatar Url"
                value={props.member.avatar_url}
                onChange={props.onChange} />
            <Button label="Save" className="btn btn-default" onClick={props.onSave}  />
        </form>
    )
}