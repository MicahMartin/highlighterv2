import React from 'react';
import ReactDOM from 'react-dom';
import Highlighter from './Components/Highlighter/Highlighter.js';
import * as R from 'ramda'

import Button from './Components/Button/Button.js'
import Utils from './Utils/Utils.js'
import TwitterUtils from './Utils/TwitterUtils.js'
import FacebookUtils from './Utils/FacebookUtils.js'
import CommentUtils from './Utils/CommentUtils.js'

import './index.css';

const container = document.getElementById('root');
const logger = Utils.log("Button logger");

// twitter button
const twitterFuncs = R.compose(TwitterUtils.sendTweet, logger, encodeURIComponent, TwitterUtils.formatTweet);

// comment button
const quoteSpan = Utils.tagWrapper('span')({
    id: "tooltip-quote",
    style: "font-style: italic; font-size: 12px; color: blue;"
});
const commentFormatter = R.compose(quoteSpan, Utils.replaceNewlines);
const commentFuncs = R.compose(CommentUtils.addQuoteToForm, logger, commentFormatter);

// TODO: put this event listener in toolTip
// instead of loading & re-rendering just switch display state
ReactDOM.render(
  <Highlighter>
    <Button key="twitter" type="twitter" clickHandler={twitterFuncs} />
    <Button key="comment" type="comment" clickHandler={commentFuncs} />
    <Button key="facebook" type="facebook" clickHandler={FacebookUtils.shareFacebook} />
  </Highlighter>,
  container
);
