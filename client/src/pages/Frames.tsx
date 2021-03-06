import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { IFrames, IFramesProps } from '../interfaces';
import Input from '../components/input'
import CardRegular from '../components/card/cardRegular';
import Loader from '../components/loader'



const Frames: React.FC = () => {
  const framesData = useSelector<IFrames, any>(state => state.frames);
  const [searchValue, setSearchValue] = useState(framesData.frames);

  const frameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.toLowerCase());
  }
  const filteredFrames = framesData.frames && framesData.frames.filter((frame: IFrames) => frame.name.toLowerCase().indexOf(searchValue) !== -1);

  console.log(framesData.frames);

  return (
    <>
      <Input type='text' inputPlaceholder='Search...' name='frame-input' inputClass='input--home input--frames' inputWrapperClass='frames-input' onInputChange={frameSearch} />
      <section className=' frames'>
        {
          filteredFrames.length !== 0 ? filteredFrames.map((frame: IFramesProps, index: number) => (
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
            :
            framesData.frames ? framesData.frames.map((frame: IFramesProps, index: number) => (
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
            )) :
              <>
                <Loader loading={true} />
              </>
        }
      </section>
    </>
  )
}

export default Frames
