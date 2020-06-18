import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IFrames, IFramesProps } from '../interfaces';
import { requestFrameData } from '../actions/actions';
import Input from '../components/input'
import CardRegular from '../components/card/cardRegular';



const Frames: React.FC = () => {
  const framesData = useSelector<IFrames, any>(state => state.frames);
  // const [searchValue, setSearchValue] = useState(framesData.frames);
  // const frameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value.toLowerCase());
  // }
  // const filteredFrames = framesData.frames.filter((frame: IFrames) => frame.name.toLowerCase().indexOf(searchValue) !== -1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFrameData());
  }, [dispatch])

  return (
    <>
      {/* <Input type='text' inputPlaceholder='Search...' inputClass='input--home input--frames' onInputChange={frameSearch} /> */}
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
