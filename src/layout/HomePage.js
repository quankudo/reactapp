import React from 'react';
import Header from '../components/Header/header'
import Navbar from '../components/navbar/navbar';
import Home from '../components/home/home';
import Content from '../components/content/content';
import Endow from '../components/endow/endow';
import Utilities from '../components/utilities/utilities';
import NiceNumber from '../components/niceNumber/niceNumber';
import Instruct from '../components/instruct/instruct';
import Banners from '../components/banners/banners';
import Infomation from '../components/infomation/infomation';
import Question from '../components/question/question';
import Account from '../components/account/account';
import Footer from '../components/footer/footer';
function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <Navbar />
      <Home />
      <Content />
      <Endow />
      <Utilities />
      <NiceNumber />
      <Instruct />
      <Banners />
      <Infomation />
      <Question />
      <Account />
      <Footer />
    </div>
  );
}

export default HomePage;
