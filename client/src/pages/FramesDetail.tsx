import React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IFrames, IFramesProps } from '../interfaces';

interface MatchParams {
  name: string;
}
interface Props extends RouteComponentProps<MatchParams> { }

const FramesDetail: React.FC<Props> = ({ match }) => {
  const framesData = useSelector<IFrames>(state => state.frames) as IFrames;
  const {
    params: { name },
  } = match;

  console.log(framesData.frames);

  interface IAbility {
    name: string;
    description: string;
  }

  return (
    <>
      <Link className='frames-button-back' to='/frames'>Back</Link>
      {
        framesData.frames.map((frame: IFramesProps, index: number) => (
          frame.name === name &&
          <div className="frame" key={index}>
            <div className='frame-init'>
              <div className="frame-header-wrapper">
                <h4>{name}</h4>
              </div>
              {frame.wikiaThumbnail ? <img className='frame-img' src={frame.wikiaThumbnail} alt='Thumbnail' /> : <p className='card-content-not-available'>No image available.</p>}
            </div>
            <div className="frame-stats">
              <div className="combat-stats border">
                <h4>Combat stats: </h4>
                <p className='frame-stats__combat regular'><span className='gold'>Health:</span> {frame.health}</p>
                <p className='frame-stats__combat regular'><span className='gold'>Shield:</span> {frame.shield}</p>
              </div>
              <h4>Abilities: </h4>
              {frame.abilities.map((ability: IAbility, index: number) => (
                <div className="frame-ability-wrapper" key={index}>
                  <h5 className='gold'>{ability.name}:</h5>
                  <p>{ability.description}</p>
                </div>
              ))}
              <h4>Decription: </h4>
              <p>{frame.description}</p>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default FramesDetail;
