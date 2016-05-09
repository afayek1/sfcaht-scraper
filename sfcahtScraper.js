var cheerio = require('cheerio');
var _       = require('underscore');

module.exports = {
    getServiceLinks: function(html) {
        var $ = cheerio.load(html);
        var $links = $('.paragraph a').slice(0, 136);

        var servicesHash = {
            "Case Management": [],
            "Education/Training/Career Counseling": [],
            "Emergency Shelter/Services": [],
            "Hotline": [],
            "Legal": [],
            "Long Term Housing": [],
            "Medical Health": [],
            "Mental Health/Counseling": [],
            "Referrals": [],
            "Resource Coordination/Advocacy": [],
            "Safe Space/Drop-In Center": [],
            "Substance-Abuse Counseling": [],
            "Trainings": [],
            "Translation/Interpretation": []
        };


        $links.each(function (i, link) {
          var url = $(link).attr("href");
          if (i<14) {
            servicesHash["Case Management"].push(url);
          } else if (i<25) {
            servicesHash["Education/Training/Career Counseling"].push(url);
          } else if (i<35) {
            servicesHash["Emergency Shelter/Services"].push(url);
          } else if (i<39) {
            servicesHash["Hotline"].push(url);
          } else if (i<48) {
            servicesHash["Legal"].push(url);
          } else if (i<57) {
            servicesHash["Long Term Housing"].push(url);
          } else if (i<60) {
            servicesHash["Medical Health"].push(url);
          } else if (i<75) {
            servicesHash["Mental Health/Counseling"].push(url);
          } else if (i<94) {
            servicesHash["Referrals"].push(url);
          } else if (i<107) {
            servicesHash["Resource Coordination/Advocacy"].push(url);
          } else if (i<110) {
            servicesHash["Safe Space/Drop-In Center"].push(url);
          } else if (i<113) {
            servicesHash["Substance-Abuse Counseling"].push(url);
          } else if (i<130) {
            servicesHash["Trainings"].push(url);
          } else {
            servicesHash["Translation/Interpretation"].push(url);
          }
        });

        return servicesHash;
    }

}

// var footerLinksLength = 6;
// var paragraphs = document.getElementsByClassName('paragraph');
// var len = (paragraphs.length - footerLinksLength) / 2
// var data = {}
// for (var i = 1; i < (paragraphs.length - footerLinksLength); i++) {
//     console.log(paragraphs[i].innerText);
// }