import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IFrames, IFramesProps } from '../interfaces';
import { requestFrameData } from '../actions/actions';
import CardRegular from '../components/card/cardRegular';



const Frames: React.FC = () => {
  const framesData = useSelector<IFrames>(state => state.frames) as IFrames;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestFrameData());
  }, [dispatch])

  return (
    <>
      <section className=' frames'>
        {
          framesData.frames.map((frame: IFramesProps, index: number) => (
            <div className="frames-frame" key={index}>
              <CardRegular
                cardRegularTitle={frame.name}
                cardRegularButtonText='Details'
                cardRegularButtonClass='button-gold'
                cardRegularButtonLink={`/frame/${frame.name}`}
              >
                {frame.wikiaThumbnail ? <img src={frame.wikiaThumbnail} alt='Thumbnail' /> : <p className='card-content card-content-not-available' >No image available.</p>}
              </CardRegular>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Frames
