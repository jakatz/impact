Meteor.methods({
  'sendEmail': function(to, subject, html) {
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    // Don't allow sending email unless logged in
    if (!Meteor.user()) {
      throw new Meteor.Error(403, "not logged in");
    }

    SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));

    var emailData = {
      name: "Jon Katz",
      favoriteRestaurant: "YUM",
      bestFriend: "Yo mama"
    };

    var employees = 'employees';

    Email.send({
      to: to,
      from: 'ProjectImpact@vulcunimpact.meteor.com',
      subject: subject,
      html: SSR.render('htmlEmail', emailData)
    });
  },

  'validateEmailAddress': function(address) {
    check(address, String);
  },

  'addEmployee': function(name, email, joinDate, product) {
    Employees.insert({
      name: name,
      email: email,
      join_date: joinDate,
      product: product,
      created_on: new Date(),
      rating: 0
    });
  },

  'addReview': function(week, submittedBy, product, suckerId, rating) {
    Reviews.insert({
      week: week,
      submitted_by: submittedBy,
      product: product,
      sucker: suckerId,
      rating: rating,
      comment: ""
    });
  }
});