var formattedName = HTMLheaderName.replace('%data%','Karsheng Lee');
var formattedRole = HTMLheaderRole.replace('%data%', 'Web Developer');


$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var skills = ['programming', 'web developemnt','chemical engineering' ]
var bio = {
  'name' : 'Karsheng',
  'role' : 'Web Developer',
  'contacts' : {
      'email' : 'karshenglee@gmail.com',
      'mobile' : '+6012-6930715',
      'github' : 'karsheng',
      'twitter' : '@karshenglee',
      'location' : 'Kuala Lumpur'
  },
  'biopic': 'https://scontent-sin1-1.cdninstagram.com/t51.2885-15/e15/10616777_526199117481379_500143064_n.jpg?ig_cache_key=NzkyNzQ0NDU1NDg3ODY3MTEx.2',
  'welcomeMessage' : 'Hello I am Karsheng. I am a very good web developer!',
  'skills' : skills,
  'display' : function () {
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace('%data%', bio.biopic)
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedLocation);
    $('#header').append(formattedbioPic);
    $('#header').append(formattedWelcomeMessage);
    $('#header').append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
      var skill = HTMLskills.replace('%data%', bio.skills[i])
      $('#skills-h3').append(skill);
    }
  }
};

bio.display();
