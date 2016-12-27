/**
 * Use this file when you want to make available a certain
 * function to one or more templates. By using the 'registerHelper'
 * function we are creating a global scope that every template can 
 * access to invoke that registered function.
 * 
 * Do not create one single file to contain all the helpers instead
 * create one file per "package" like we did with the "PerformanceGlobalHelpers.js"
 * inside the package "performance".
 * 
 * If you want to make a certain function available to helper files (.js files)
 * you must export them from here and import the one you want to use
 * inside the helper file. 
 */


import { Academy } from '/imports/api/databasedriver.js';

/**
 * Functions registered inside this helper can be used
 * ONLY  BY TEMPLATES (this provides a global scope).
 * To use the same functions inside the helpers (.js files)
 * you must import them.
 */
if (Meteor.isClient) {

  /**
   * Get a specific user based upon the given NB.
   */

  Template.registerHelper('getUserByNB', getUserByNB);

  Template.registerHelper('getUniqueValuesOfKey', getUniqueValuesOfKey);
}


export function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}

export function getUniqueValuesOfKey(array, key) {
  return array.reduce(function (carry, item) {
    if (item[key] && !carry.indexOf(item[key]))
      carry.push(item[key]);
    return carry;
  }, []);
}