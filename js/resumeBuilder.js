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

var education = {
  'schools' : [
    {
      'name' : 'University of Nottingham',
      'location' : 'Nottingham, UK',
      'degree' : 'MSc',
      'majors' : 'Chemical Engineering',
      'dates' : '2011-2012',
      'url' : 'https://www.nottingham.ac.uk/'
    },
    {
      'name' : 'University of Nottingham',
      'location' : 'Kuala Lumpur, Malaysia',
      'degree' : 'BEng',
      'majors' : 'Chemical Engineering',
      'dates' : '2008-2011',
      'url' : 'https://www.nottingham.ac.uk/'
    }
  ],
  'onlineCourses' : [
    {
      'title' : 'Front-End Web Developer Nanodegree',
      'school' : 'Udacity',
      'dates' : '2016 - ongoing',
      'url' : 'https://www.udacity.com'
    },
    {
      'title' : 'The Complete Web Development Course',
      'school' : 'Udemy',
      'dates' : '2015',
      'url' : 'https://www.udemy.com'
    }
  ],
  'display' : function() {
    for (i = 0; i < education.schools.length; i++) {
      $('#education').append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);

      $('.education-entry:last').append(formattedSchoolName);
      $('.education-entry:last').append(formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolLocation);
      $('.education-entry:last').append(formattedSchoolMajor);
    }

    $('#education').append(HTMLonlineClasses);

    for (j = 0; j < education.onlineCourses.length; j++) {
      $('#education').append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
      var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[j].url);

      $('.education-entry:last').append(formattedOnlineCourse);
      $('.education-entry:last').append(formattedOnlineDates);
      $('.education-entry:last').append(formattedOnlineURL);


    }
  }
};

education.display();
