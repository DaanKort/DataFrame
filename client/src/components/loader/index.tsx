import React from 'react';

interface ILoaderProps {
    loading: boolean,
}

export default function Loader(props: ILoaderProps) {
    const { loading, }: ILoaderProps = props;

    return (
        <>
            <div className="spinner">
                {loading ? <p>Loading...</p> : <p>Coming soon... ¯\_(ツ)_/¯</p>}
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </>
    )
}
