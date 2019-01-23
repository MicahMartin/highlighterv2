import * as R from 'ramda'

/**
 * General utility class
*/
export default class Utils {

  /**
   * curried logger
   * @param {[Object]} args - any arguments can be passed to the console log
   * @param {Object} data - Single argument
   * @returns {console.log([args], data)} - console.log with supplied arguments
   */
  static log = (...args) => (data) => {
    console.log.apply(null, args.concat([data]));
    return data;
  };

  /**
   * curried tag wrapper
   * @param {String} tagName - name of the tag
   * @param {Object} attribute object - attributes object
   * @param {String} text - text to be wrapped
   * @returns {Function(Function(Function(tagName, attributes, text)))} - tag wrapper with supplied arguments
   */
  static tagWrapper = R.curry((tag) => (attributeObject) => (text) => {
    const attributes = Utils.keyEqValFormat(attributeObject);
    return `<${tag} ${attributes}>${text}</${tag}>`;
  });

  /**
   * formats an object as key="value"
   * @param {Object} obj - object to be formatted
   * @param {String} seperator - seperator for formatting
   * @returns {String} - formatted object as a string
   */
  static keyEqValFormat = (obj, seperator = ' ') => {
    const stringBuilder = [];

    for(let key in obj){
      stringBuilder.push(`${key}="${obj[key]}"`);
    }

    const result = stringBuilder.join(seperator);
    return result;
  };

  /**
   * replaces new lines (\n and \r) with spaces
   * @param {String} string - string to be formatted
   * @returns {Function} - function to be executed with supplied string
   */
  static replaceNewlines = R.curry( string => string.replace(/[\r\n]+/g, ' '));

  /**
   * gets the current url without params
   * @returns {String} - current url without params
   */
  static getUrl = () => window.location.href.split(/[?#]/)[0];

  /**
   * creates a new tab with url and focuses on it
   * @param {String} url - url to open in a new tab
   */
  static newTab = url => {
    const tab = window.open(url, '_blank');
    tab.focus();    
  };
}
