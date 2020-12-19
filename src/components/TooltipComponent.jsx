import React, { Component } from 'react';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.webp';
import img4 from '../assets/img/img4.webp';

class TooltipComponent extends Component {

    render() {
        return (
            <div className={`tooltip_data ${this.props.classname}`}>
                <img src={img4} alt="" className="tooltip_data_avatar" />
                <div className={`tooltip_data_triangle ${this.props.classname}`}></div>
                <div className={`tooltip_container ${this.props.classname}`}>
                    <div className="tooltip_content">
                        <div className="tooltip_content_profile">
                            <div className="tooltip_content_profile_avatar">
                                <img src={img4} alt="" />
                            </div>
                            <div className="tooltip_content_profile_description">
                                <h6>Zoyenshen</h6>
                                <p>Content</p>
                            </div>
                        </div>
                        <div className="tooltip_content_img_container">
                            <div className="tooltip_content_img">
                                <a href="/foo/bar"><img src={img1} alt="" /></a>

                            </div>
                            <div className="tooltip_content_img">
                                <a href="/foo/bar"><img src={img2} alt="" /></a>

                            </div>
                            <div className="tooltip_content_img">
                                <a href="/foo/bar"><img src={img3} alt="" /></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TooltipComponent;