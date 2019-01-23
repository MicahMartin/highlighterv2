import Utils from '../Utils/Utils.js';

/**
 * Facebook services class
*/
export default class FacebookUtils {

  static shareFacebook(selection) {
    try {
      window.FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: `${Utils.getUrl()}`,
        quote: selection,
      });
    } catch (e) {
      console.error('fb share :', e);
    }

    return selection;
  };
}
