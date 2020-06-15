import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IFrames, IFramesProps } from '../interfaces';
import { requestFrameData } from '../actions/actions';
import CardRegular from '../components/card/cardRegular';
import { Link } from 'react-router-dom';

// interface IFrameProps extends Array<IFrames> { }


const Frames: React.FC = () => {
  const framesData = useSelector<IFrames>(state => state.frames) as IFrames;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestFrameData());

  }, [dispatch])


  console.log(framesData.frames);
  return (
    <>
      <section className=' frames'>
        {
          framesData.frames.map((frame: IFramesProps, index: number) => (
            <div className="frames-frame">
              <CardRegular
                key={index}
                cardRegularTitle={frame.name}
                cardRegularButtonText='Details'
                cardRegularButtonClass='button-gold'
                cardRegularButtonLink='#'
              >
                {frame.wikiaThumbnail ? <img src={frame.wikiaThumbnail} alt='Thumbnail' /> : <p>No image available.</p>}
                <Link to={`/frame/${frame.name}`}>Show details</Link>
              </CardRegular>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Frames
