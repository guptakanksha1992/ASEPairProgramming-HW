/**
 * Created by akankshagupta on 10/1/16.
 */

import { Notes } from '../collections/Notes.js'

Meteor.publish('notes', function () {
   return Notes.find({author: this.userId});
});