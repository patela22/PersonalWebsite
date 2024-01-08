import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Firefly - A Filesharing Web App using quick authentication'
              label='ReactJS, Firebase'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Price-Finder - a web app that finds the best price for a product from a selection of websites'
              label='JavaScript, Python, AWS'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Number Guesser - a Mobile App that determines the number you drew'
              label='Dart, Python, AWS'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Reversi - a Pure Java implementation of the Reversi board game'
              label='Java, Java Swing'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Maze - Creates a random maze and solves it using BFS, DFS, and A*'
              label='Java, Javalib'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
