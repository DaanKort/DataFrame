import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { INewsState } from '../interfaces/index';
import { requestNews } from '../actions/actions';

export default function News() {

  const news = useSelector<INewsState, any>(state => state.news)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNews());
  }, [dispatch]);

  return (
    <section className='news-page boxed'>
      <h2 className='news__title'>News</h2>
      <div className='news'>
        {
          news.news.map((news: INewsState, index: number) => (
            <div className='news-container' key={index}>
              <div className='news-title'>
                <h4 className='news-title__text'>{news.message}</h4>
              </div>
              <div className='news-content'>
                <a href={news.link} target='_blank' rel='noopener noreferrer'>
                  <img src={news.imageLink} className='news__image' alt='asset' />
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
