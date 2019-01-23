import Utils from './Utils.js';

/**
 * Twitter services class
*/
export default class TwitterUtils {

  static formatTweet(textContent) {
    // TODO: babel plugin for safe nav operator
    // good chance creator would be null :(
    const twitterCreator = document.querySelector("meta[name='twitter:creator']") ? 
          `— ${document.querySelector("meta[name='twitter:creator']").getAttribute("content")}` : 
          '';

    const tweetText = `"${Utils.replaceNewlines(textContent)}" ${twitterCreator}`;

    return tweetText;
  };

  static sendTweet(tweetText) {
    const tweetIntent = `https://twitter.com/intent/tweet?text=${tweetText}&url=${Utils.getUrl()}&via=BostonGlobe`;
    Utils.newTab(tweetIntent);
    return tweetIntent;
  };
}
