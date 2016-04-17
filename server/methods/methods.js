import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.methods({
    'myMethod'() {
      console.log('myMethod');
    }
  });
}
