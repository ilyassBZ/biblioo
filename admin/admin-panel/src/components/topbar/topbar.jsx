import React from 'react';
import "./topbar.css";
import {AccountCircle} from '@material-ui/icons';

export default function topbar() {
	return(
	 <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">BiBlio</span>
        </div>

        <div className="topRight">
          <div className="topbarIcons" >
            <AccountCircle/>
            <span className="topbaruser"></span>

          </div>
        </div>
      </div>
    </div>
		)	;

}
