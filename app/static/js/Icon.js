/* Icon.js
Our own solution for svg icons :(
*/
import $ from 'jquery';


// list of all the icons
var Icons = {
  mail: require('../svg/mail.svg'),
  cog: require('../svg/cog.svg'),
  sun: require('../svg/sun-fill.svg') ,
  moon: require('../svg/moon-fill.svg'),

  play: require('../svg/play_arrow.svg'),
  twitter: require('../svg/twitter.svg'),
  image: require('../svg/image.svg'),
  text: require('../svg/file-text.svg'),
  close: require('../svg/close.svg'),

  chat: require('../svg/chat.svg') ,
  link: require('../svg/link.svg') ,

  upvote: require('../svg/chevron-up.svg'),
  downvote: require('../svg/chevron-down.svg'),

  search: require('../svg/search.svg'),

  check: require('../svg/check.svg'),
  add: require('../svg/add.svg')
};

// here we apply em.
$(document).ready(function(){
  $('div[data-icon],span[data-icon]').each(function(i){
    this.innerHTML = Icons[$(this).data('icon')];
  });
});

module.exports = Icons;
