import React from 'react'
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    name: string;
}
interface Props extends RouteComponentProps<MatchParams> { }

const FramesDetail: React.FC<Props> = ({ match }) => {
    const {
        params: { name },
    } = match;

    return (
        <h4>{name}</h4>
    )
}

export default FramesDetail;
