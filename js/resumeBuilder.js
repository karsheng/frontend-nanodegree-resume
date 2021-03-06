var formattedName = HTMLheaderName.replace('%data%', 'Karsheng Lee');
var formattedRole = HTMLheaderRole.replace('%data%', 'Web Developer');

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var skills = ['programming', 'web design', 'web development','chemical engineering'];
var bio = {
  'name' : 'Karsheng',
  'role' : 'Web Developer',
  'contacts' : {
      'email' : 'karshenglee@gmail.com',
      'mobile' : '+6012-6930715',
      'github' : 'karsheng',
      'githubLink' : 'https://github.com/karsheng',
      'twitter' : '@karshenglee',
      'twitterLink' : 'https://twitter.com/karshenglee',
      'location' : 'Kuala Lumpur'
  },
  'biopic': 'https://scontent-sin1-1.cdninstagram.com/t51.2885-15/e15/10616777_526199117481379_500143064_n.jpg?ig_cache_key=NzkyNzQ0NDU1NDg3ODY3MTEx.2',
  'welcomeMessage' : 'Hello I am Karsheng. I am an aspiring web developer!',
  'skills' : skills
};
var emailLink = '<a class="link-text" href="mailto:"' + bio.contacts.email + '">' + bio.contacts.email + '</a>';
var twitterLink = '<a class="link-text" href="' + bio.contacts.twitterLink + '" target="_blank">' + bio.contacts.twitter + '</a>';
var githubLink = '<a class="link-text" href="' + bio.contacts.githubLink + '" target="_blank">' + bio.contacts.github + '</a>';

var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%', emailLink);
var formattedTwitter = HTMLtwitter.replace('%data%', twitterLink);
var formattedGithub = HTMLgithub.replace('%data%', githubLink);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

bio.display = function () {

  var formattedbioPic = HTMLbioPic.replace('%data%', bio.biopic);
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
    var skill = HTMLskills.replace('%data%', bio.skills[i]);
    $('#skills').append(skill);
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
      'dates' : 2012,
      'url' : 'https://www.nottingham.ac.uk/'
    },
    {
      'name' : 'University of Nottingham',
      'location' : 'Kuala Lumpur, Malaysia',
      'degree' : 'BEng',
      'majors' : 'Chemical Engineering',
      'dates' : 2011,
      'url' : 'https://www.nottingham.ac.uk/'
    }
  ],
  'onlineCourses' : [
    {
      'title' : 'Front-End Web Developer Nanodegree',
      'school' : 'Udacity',
      'dates' : 2016,
      'url' : 'https://www.udacity.com'
    },
    {
      'title' : 'The Complete Web Development Course',
      'school' : 'Udemy',
      'dates' : 2015,
      'url' : 'https://www.udemy.com'
    }
  ],
  'display' : function() {
    for (var i = 0; i < education.schools.length; i++) {
      $('#education').append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
      var formattedSchool = formattedSchoolName + formattedSchoolDegree;
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);

      $('.education-entry:last').append(formattedSchool);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolLocation);
      $('.education-entry:last').append(formattedSchoolMajor);
    }

    $('#education').append(HTMLonlineClasses);

    for (var j = 0; j < education.onlineCourses.length; j++) {
      $('#education').append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);
      var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].dates);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[j].url);
      formattedOnlineURL = formattedOnlineURL.replace('#', education.onlineCourses[j].url);

      $('.education-entry:last').append(formattedOnlineCourse);
      $('.education-entry:last').append(formattedOnlineDates);
      $('.education-entry:last').append(formattedOnlineURL);
    }
  }
};

education.display();

var work = {
  'jobs' : [
    {
    'title' : 'Web Developer',
    'employer' : 'Freelance',
    'dates' : '2015 - Current',
    'location' : 'Kuala Lumpur, Malaysia',
    'description' : 'I have been developing website for others. Now I want to do this professionally.'
    },
    {
    'title' : 'Process Engineer',
    'employer' : 'SBM Offshore',
    'dates' : '2013 - Current',
    'location' : 'Kuala Lumpur, Malaysia',
    'description' : 'I work in the oil and gas industry.'
    }
  ],
  'display' : function() {
    for (var i = 0; i < work.jobs.length; i++) {
      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
      var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
      var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

      $('.work-entry:last').append(formattedEmployerTitle);
      $('.work-entry:last').append(formattedDates);
      $('.work-entry:last').append(formattedWorkLocation);
      $('.work-entry:last').append(formattedDescription);
    }
  }
};

work.display();

var projects = {
  'projects' : [
    {
      'title' : 'Peach',
      'dates'  : '2016 - Ongoing',
      'description' : 'A fashion consulting app.',
      'images': ['images/peach-1-300x300_1x.png','images/peach-2-300x300_1x.png']
    },
    {
      'title' : 'ATCM Offical Website',
      'dates' : '2015',
      'description': 'The official website of the Association of Trust Companies Malaysia.',
      'images': ['images/atcm-1-300x300_1x.png','images/atcm-2-300x300_1x.png']
    }
  ],
  'display' : function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $('#projects').append(HTMLprojectStart);

      var formattedProjectName = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
      var formattedProjectYear = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
      var formattedProjectDesc = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

      $('.project-entry:last').append(formattedProjectName);
      $('.project-entry:last').append(formattedProjectYear);
      $('.project-entry:last').append(formattedProjectDesc);

      for (var j = 0; j < projects.projects[i].images.length; j++) {
        var image = projects.projects[i].images[j];
        var formattedProjectImage = HTMLprojectImage.replace('%data%', image);

        $('.project-entry:last').append(formattedProjectImage);
      }
    }
  }
};

projects.display();

$('#mapDiv').append(googleMap);

function displayFooter() {
  $('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
  $('#footerContacts').append(formattedGithub);
  $('#footerContacts').append(formattedTwitter);
  $('#footerContacts').append(formattedLocation);
}

displayFooter();

var twitterWidget = '<a class="twitter-timeline" data-height="700" data-width="400" href="https://twitter.com/karshenglee">Tweets by karshenglee</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>'

function displayTwitterFeed(tw) {
    $('#twitterFeed').append(HTMLtwitterFeed);
    $('.twitter-feed').append(tw);
}

displayTwitterFeed(twitterWidget);

var roleText = $('#header').find('span').first();
roleText.addClass('role-text');

var projectsDiv = $('#projects');
projectsDiv.addClass('light-blue');

var workExperienceDiv = $('#workExperience');
workExperienceDiv.removeClass('gray');

var educationDiv = $('#education');
educationDiv.removeClass('gray');

var twitterFeedDiv = $('#twitterFeed');
twitterFeedDiv.addClass('light-blue');

function changeOnlineURLClass() {
  $('.education-entry').each(function() {
      var hyperlinkText = $(this).find('a').last();
      if (hyperlinkText.text().indexOf('http') > -1) {
        hyperlinkText.addClass('online-url');
      }
  });
}

function addHorizontalLine() {
  $('.work-entry').each(function() {
      $(this).append('<hr>');
  });
  $('.project-entry').each(function() {
      $(this).append('<hr>');
  });
  $('.education-entry').each(function() {
      $(this).append('<hr>');
  });
}

changeOnlineURLClass();

$('#lets-connect').children('h2').removeClass('orange');
$('#lets-connect').children('h2').addClass('light-blue');
