
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