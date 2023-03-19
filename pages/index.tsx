import Head from 'next/head'
import Image from 'next/image'
import Home from '@/modules/Home'
import { NextPage } from 'next';

const HomePage = () => {
  return (
    <div className="overflow-hidden " style={{ minHeight: 400 }}>
      <Home />
    </div>
  );
};

export default HomePage ;
