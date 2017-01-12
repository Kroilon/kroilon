import { Mongo } from 'meteor/mongo';

export const Academy = new Mongo.Collection('academy');

export const Challenges = new Mongo.Collection('activities');

export const Rooms = new Mongo.Collection('rooms');

export const Secrets = new Mongo.Collection('secrets');

export const Badges = new Mongo.Collection('badges');

export const KroilonHistory = new Mongo.Collection('history');

export const Rules = new Mongo.Collection('rules');