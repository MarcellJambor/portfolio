import React, { useEffect, useState } from 'react';
import Netflix from "../data/netflix.json";
import Ecommerce from "../data/ecommerce.json";
import Blog from "../data/blog.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {NetflixImages} from '../data/netlfix-images';
import { EcommerceImages } from '../data/ecommerce-images';
import {BlogImages} from '../data/blog-images';
import { FaGithub } from "react-icons/fa";

const Modal = ({ OnClose, project }) => {
  const [data, setData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [images,setImages]=useState([])

  const handleClose = (e) => {
    if (e.target.className==='modal') {
        OnClose();
    }
  }

  useEffect(() => {
    switch (project) {
      case 'netflix':
        setData(Netflix);
        setImages(NetflixImages);
        break;
      case 'ecommerce':
        setData(Ecommerce);
        setImages(EcommerceImages);
        break;
      case 'blog':
        setData(Blog);
        setImages(BlogImages);
        break;
      default:
        setData({});
        break;
    }
  }, [project]);

  return (
    <div className='modal' onClick={handleClose}>
      <div className='modal-body'>
            <div className="modal-body-title">
                <h2>{data?.title ? data.title : "No Information Available"}</h2>
                <a href={data?.link} target='blank'>
                    <FaGithub />
                </a>
            </div>
            <div className='images'>
        {images.length > 0 && (
            <img
              src={images[0].src}
              alt="Open Gallery"
              onClick={() => setOpen(true)}
            />
          )}
        <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        />
        </div>
            <p>{data?.heading}</p>
      </div>
    </div>
  );
};

export default Modal;
