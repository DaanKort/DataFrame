import React from "react";
import Glider from "../components/glider/index";
import Button from "../components/button/index";
import { Timeline } from 'react-twitter-widgets'

export default function Home() {
  const gliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className="home-wrapper">
        <Glider settings={gliderSettings} gliderClass="glider--home">
          <div className="glider-glide glide1">
            <span className="glider__overlay" />
            <div className="glider-content">
              <h4 className="glider__title">News</h4>
              <p className="glider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                buttonText="Visit"
                buttonLink="#"
                buttonClass="glider__button button-gold"
              />
            </div>
          </div>
          <div className="glider-glide glide2">
            <span className="glider__overlay" />
            <div className="glider-content">
              <h4 className="glider__title">Invasions</h4>
              <p className="glider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                buttonText="Visit"
                buttonLink="#"
                buttonClass="glider__button button-gold"
              />
            </div>
          </div>
          <div className="glider-glide glide3">
            <span className="glider__overlay" />
            <div className="glider-content">
              <h4 className="glider__title">Items</h4>
              <p className="glider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                buttonText="Visit"
                buttonLink="#"
                buttonClass="glider__button button-gold"
              />
            </div>
          </div>
          <div className="glider-glide glide4">
            <span className="glider__overlay" />
            <div className="glider-content">
              <h4 className="glider__title">Sorties</h4>
              <p className="glider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                buttonText="Visit"
                buttonLink="#"
                buttonClass="glider__button button-gold"
              />
            </div>
          </div>
          <div className="glider-glide glide5">
            <span className="glider__overlay" />
            <div className="glider-content">
              <h4 className="glider__title">Fissures</h4>
              <p className="glider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                buttonText="Visit"
                buttonLink="#"
                buttonClass="glider__button button-gold"
              />
            </div>
          </div>
          <div className="glider-glide glide6">
            <span className="glider__overlay" />
            <div className="glider-content">
              <h4 className="glider__title">Cycles</h4>
              <p className="glider__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                buttonText="Visit"
                buttonLink="#"
                buttonClass="glider__button button-gold"
              />
            </div>
          </div>
        </Glider>
        <div className="twitter">
          <div className="twitter-feed">
            <p className='twitter-title'>Twitter Feed</p>
          </div>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'PlayWarframe'
            }}
            options={{
              height: '300',
            }}
            renderError={(_err: string) => <p className='twitter-title'>Could not load feed</p>}
          />
        </div>
      </section>
    </>
  );
}
