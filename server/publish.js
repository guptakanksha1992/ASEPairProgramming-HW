/**
 * Created by akankshagupta on 10/1/16.
 */

Meteor.publish('recipes', function () {
   return Recipes.find({author: this.userId});
});