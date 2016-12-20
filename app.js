var app = angular.module('app', ['angularMoment', 'ngAnimate']);

app.controller('MainController', function($scope){
  // Set Initial Variables
  $scope.view = {};
  $scope.view.posts = [];
  $scope.view.viewSubmitPost = false;
  $scope.view.sort = 'votes';
  //Create initial dummy data
  $scope.view.posts[0] = {
    title: 'Comcast',
    author: 'Stephanie M.',
    image: 'https://app.popinnow.com/media/images/popin_logo_tall_green.svg',
    description: 'What are your favorite snacks that keep you alert and focused at work',
    date: Date.parse('2016-12-20T18:59:57.859Z'),
    comments: [{
      comment_author: "Comment Author Here",
      comment: "Blah blah blah. "
    }, {
      comment_author: "Comment Author 2 Here",
      comment: "Blah Blah Blah."
    }],
    votes: -3,
    answers: 2,
  };
  $scope.view.posts[1] = {
    title: 'Tesla',
    author: 'Jennifer Jones',
    image: 'https://app.popinnow.com/media/images/popin_logo_tall_green.svg',
    description: 'What should be in our temas Q3 all-hands meeting coming up next Thursday? This is a long example with the maximum character count truncated down to a size that can fit in the view with out looking ridiculous. woop woop.',
    date: Date.parse('2016-12-19T18:59:57.859Z'),
    comments: [{
      comment_author: "Comment Author Here",
      comment: "Blah blah blah. "
    }, {
      comment_author: "Comment Author 2 Here",
      comment: "Blah Blah Blah."
    }],
    votes: 2,
    answers: 100,
  };
  $scope.view.posts[2] = {
    title: '',
    author: 'Jennifer at Tesla',
    image: 'https://app.popinnow.com/media/images/popin_logo_tall_green.svg',
    description: 'What should be in our team\'s Q3 all-hands meeting coming up next Thursday?',
    date: Date.parse('2016-12-24T18:59:57.859Z'),
    comments: [{
      comment_author: "Comment Author Here",
      comment: "Blah blah blah. "
    }, {
      comment_author: "Comment Author 2 Here",
      comment: "Blah Blah Blah."
    }],
    votes: 5,
    answers: 100,
  };


  // functions

  $scope.upVote = function(post){
    post.votes++;
  };

  $scope.downVote = function(post){
    post.votes--;
  };


});
