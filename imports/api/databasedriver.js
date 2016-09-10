import { Mongo } from 'meteor/mongo';

export const Academy = new Mongo.Collection('academy');

export const Challenges = new Mongo.Collection('challenges');

export const Rooms = new Mongo.Collection('rooms');

export const Badges = new Mongo.Collection('badges');
