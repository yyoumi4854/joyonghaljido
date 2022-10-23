import React, { useState } from 'react';
import { MW_OBJ, DB_OBJ } from './rankData';
import axios from 'axios';

// styled
import Title from '../titleStyles';
import RankingContent from './rankingStyles';

// react-icons
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import nameIds from '../../Id_book/nameId.json';
import zoomMap from '../../data/map/zoom.json';

const Ranking2 = ({ currentState, setCurrentState, pins, setPins, dongs, setDongs }) => {
  // const [tab, setTab] = useState(currentState.rankingTab);
  const [sortBtns, setSortBtns] = useState('value');
  const [toggle, setToggle] = useState({ value: 0, name: 0 });

  const tabChange = {
    noise: ['소음', DB_OBJ],
    mw: ['민원', MW_OBJ]
  };

  const handlerValueClick = () => {
    setSortBtns('value');
    let newObj = { ...toggle }
    newObj[sortBtns] = !newObj[sortBtns]
    setToggle(newObj);
  };

  const handlerNameClick = () => {
    setSortBtns('name');
    let newObj = { ...toggle }
    newObj[sortBtns] = !newObj[sortBtns]
    setToggle(newObj);
  };

  const rankingSort = (type, sortType, list) => {
    if (type === "name") {
      if (!sortType) {
        return list.sort((a, b) => a[type].localeCompare(b[type]));
      } else {
        return list.sort((a, b) => b[type].localeCompare(a[type]));
      }
    }

    if (!sortType) {
      return list.sort((a, b) => a[type] - b[type]);
    } else {
      return list.sort((a, b) => b[type] - a[type]);
    }
  };

  const selectGu = async (gu) => {
    const selecGu = nameIds.find(v => v.name === gu.name);
    console.log(selecGu);
    const mapData = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/gus/${selecGu._id}`);
    const dongsAndPins = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/location/gus/${selecGu._id}`);
    setDongs(dongsAndPins.data.dongs);
    setPins(dongsAndPins.data.pins);

    const { center } = zoomMap[selecGu.name];
    // const { center } = mapData.data;

    setCurrentState({
      ...currentState,
      currentView: 'gu',
      zoom: 7,
      map: mapData.data,
      clickedName: selecGu.name,
      center,
      guId: selecGu._id,
      guName: selecGu.name,
    });
  };

  return (
    <RankingContent>
      <ul className='tab'>
        <li
          className={currentState.rankingTab === 'noise' ? 'active' : 'tabDB'}
          onClick={() => {
            setCurrentState({ ...currentState, rankingTab: 'noise' });
          }}>소음(db)</li>
        <li
          className={currentState.rankingTab === 'mw' ? 'active' : 'tabMW'}
          onClick={() => {
            setCurrentState({ ...currentState, rankingTab: 'mw' });
          }}>민원(건)</li>
      </ul>

      <Title>
        <div className='title'>
          <h3>{tabChange[currentState.rankingTab][0]} <span>순위</span></h3>
        </div>

        <ul className="toggleList">
          <li className={sortBtns === "value" && "active"}>
            <p>수치순</p>
            <button value="value" onClick={handlerValueClick}>
              {toggle["value"] ? <BiChevronUp /> : <BiChevronDown />}
            </button>
          </li>
          <li className={sortBtns === "name" && "active"}>
            <p>글자순</p>
            <button name="aaa" onClick={handlerNameClick}>
              {toggle["name"] ? <BiChevronUp /> : <BiChevronDown />}
            </button>
          </li>
        </ul>
      </Title>

      <ul className='ranking'>
        {
          rankingSort(sortBtns, toggle[sortBtns], tabChange[currentState.rankingTab][1]).filter(v => v.value !== 0).map((x, i) => {
            return (
              <li key={i} onClick={() => { selectGu(x); }}>
                <p>{x.name}</p>
                <span>{x.value}</span>
              </li>
            )
          })
        }
      </ul>
    </RankingContent>
  );
};

export default Ranking2;
