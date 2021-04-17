import React from "react";
import { BsBookmark,BsBookmarkFill } from 'react-icons/bs';
import { RiArrowRightSLine } from 'react-icons/ri';
import './apiitem.scss';

const ApiItem = ({ item,toggleBookmark }) => {
  return (
    <>
      <div className="api-item" key={item.id}>
            <div className="item-icon">
              <img src={item.icon} alt="" />
            </div>
            <div className="item-detail">
              <h2> {item.name} </h2>
              <div className="item-category">{item.category}</div>
              <div className="item-description">{item.description}</div>
            </div>
            <div className="item-hover">
              <button onClick={() => toggleBookmark(item.id)}>
                {item.bookmark ? <BsBookmarkFill /> : <BsBookmark />  }
                Bookmark
              </button>
              <a href={item.url}>
                API Docs
                <RiArrowRightSLine />
              </a>
            </div>
          </div>
    </>
  );
};

export default ApiItem;
