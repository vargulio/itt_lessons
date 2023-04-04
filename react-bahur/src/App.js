import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Input from './components/Input';
import MyCard from './components/MyCard';
import MyComponent from './components/MyOwnComponent'; 

function App() {
  //                THIS IS JSX
  const templ = <div>Template here</div>;
  const flag = Math.random() > 0.5;
  const babi = [
    {
      name: 'Stanka',
      img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2014/March/140317/2D274905391507-today-tech-grandmabetty-140317.jpg'
    },
    {
      name: 'Ganka',
      img: "https://media.istockphoto.com/id/1366983105/photo/portrait-of-funny-senior-blonde-woman-in-sun-glasses-and-pink-sweater-on-white-background.jpg?s=612x612&w=0&k=20&c=j9IzY2eBsQ0m6Z7H_C7Pe4Payi2L6OHRRSBRON6krTc="
    }
  ];

  const template = babi.map(baba => <MyCard key={baba.name} name={baba.name} img={baba.img}></MyCard>);
  console.log('Running function');
  return (
    <React.Fragment>
      <MyComponent name={"Pesho"}></MyComponent>
      <Clock name={"Bahur"}></Clock>
      <Input></Input>
      {template}
    </React.Fragment>
  );
}

export default App;
