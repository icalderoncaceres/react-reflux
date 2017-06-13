/**
 * Copyright (c) 2017, TrueService.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * TrueService
 */

 //Global uris
 global.apiUri = "http://10.41.6.154:3000/";
 global.mediaUri = "http://10.41.6.154:3000/";

//Import from react
import React from 'react';
import {render} from 'react-dom';

//Import master page
import MasterPage from "./components/main/MasterPage.react";

//Render
render(<MasterPage />, document.getElementById('mainApp'));
