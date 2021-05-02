// import React, { Component } from 'react';
import React, { Component } from 'react';
import Images from './Images';

class List extends Component {
 render() {
  return (
   <div>
    <ol>
     <li>
      Satu
      <Images linkGambar='https://source.unsplash.com/random' />
     </li>
     <li>
      Dua
      <Images linkGambar='https://source.unsplash.com/random' />
     </li>
     <li>
      Tiga
      <Images linkGambar='https://source.unsplash.com/random' />
     </li>
     <li>
      Empat
      <Images linkGambar='https://source.unsplash.com/random' />
     </li>
    </ol>
   </div>
  );
 }
}

export default List;