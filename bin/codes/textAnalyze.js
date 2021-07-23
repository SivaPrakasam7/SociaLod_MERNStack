const nlp = require('natural');

const TextAnalyzer = class TextAnalyze {
    constructor(jdata) {
        this.jdata = jdata;
        this.tokenizer = new nlp.WordTokenizer();
        this.stemmer = nlp.PorterStemmer;
        this.stopwords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now'];
    }

    TokenStem(cont) {
        const keyword = [];
        this.tokenizer.tokenize(cont.toLowerCase()).forEach((i) => {
            if (!this.stopwords.includes(i)) keyword.push(this.stemmer.stem(i));
        });
        return keyword;
    }

    Analyze = () => {
        for (const [k, v] of Object.entries(this.jdata)) {
            console.log(k, v);
        }
    };
};

console.log((new TextAnalyzer('')).TokenStem('The Secret Designing: First Job Horror'));

// {
//     "Intro": [
//       "Sivaprakasam Boopathy",
//       "Member Of Technical Staff at eBay",
//       "San Francisco Bay Area Contact info",
//       "eBay",
//       "Anna University"
//     ],
//     "About": [
//       "About",
//       "• 10 Years of extensive experience in Web Application Development.",
//       "• Strong Development skills in Ruby, Ruby on Rails, Node.js, MySQL, Oracle.",
//       "• Able to learn new systems and software quickly and thoroughly.",
//       "• Worked with the various stages of software development life cycle like client interaction, requirement analysis, design, development and unit testing.",
//       "• Hands on experience in implementation, making builds and deployments.",
//       "• Able to translate high-level system requirements into detailed requirements and to formulate a design that specifies that requirement.",
//       "…",
//       "see more"
//     ],
//     "Contact_info": [
//       "Sivaprakasam’s Profile",
//       "linkedin.com/in/sivaprakasam",
//       "Websites",
//       "cognizant.com/  (Company Website)",
//       "railsframework.blogspot.com/  (Blog)",
//       "Twitter",
//       "bsivaprakasam"
//     ],
//     "Profile": "https://media-exp3.licdn.com/dms/image/C5603AQFBEvjWreQUqA/profile-displayphoto-shrink_200_200/0/1517754816490?e=1631750400&v=beta&t=mt7DS6H1HBm9wTtsilTPlJNDDE9IMkr-segcPFu2qrM",
//     "Name": "Sivaprakasam Boopathy",
//     "Activity": [],
//     "Experience": [
//       {
//         "Content": [
//           "Member Of Technical Staff",
//           "Company Name",
//           "eBay",
//           "Dates Employed",
//           "Jan 2018 – Present",
//           "Employment Duration",
//           "3 yrs 7 mos",
//           "Location",
//           "San Francisco Bay Area"
//         ],
//         "Img": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
//         "AltText": "eBay",
//         "Link": "https://www.linkedin.com/search/results/all/?keywords=eBay"
//       },
//       {
//         "Content": [
//           "Company Name",
//           "YP Holdings, LLC",
//           "Total Duration",
//           "4 yrs 8 mos",
//           "Title",
//           "Principal Software Engineer",
//           "Dates Employed",
//           "Aug 2016 – Jan 2018",
//           "Employment Duration",
//           "1 yr 6 mos",
//           "Location",
//           "Greater Los Angeles Area",
//           "Title",
//           "Senior Software Engineer",
//           "Dates Employed",
//           "Jun 2013 – Jul 2016",
//           "Employment Duration",
//           "3 yrs 2 mos",
//           "• Involved in analysis of existing Yellowpages.com desktop and mobile website and modifying the functionalities required to build new development and enhancement.",
//           "• Involved in migrating Ruby On Rails web application to Node.js application.",
//           "• Involved in migrating Sinatra mobile web to Node.js application.",
//           "• Integration with backend REST WebService.",
//           "• Omniture and LWES Tracking implementation.",
//           "• Writing test cases in node unit and mocha.",
//           "• Code Review, Code optimization and performance improvement.",
//           "• Maintaining the code in Git.",
//           "…",
//           "see more"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C510BAQFGhLY8M9dXbg/company-logo_100_100/0/1519869419400?e=1634774400&v=beta&t=7cSOxaa7SBXYIJapnoWIoiLmtI8-LSup7vbGAOLcVRo",
//         "AltText": "YP Holdings, LLC",
//         "Link": "https://www.linkedin.com/company/yp/"
//       },
//       {
//         "Content": [
//           "Associate",
//           "Company Name",
//           "Cognizant Technology Solutions",
//           "Dates Employed",
//           "Oct 2007 – Jun 2013",
//           "Employment Duration",
//           "5 yrs 9 mos",
//           "• Requirement Analysis, Design, Implementation, Coding, Code review, Unit testing, deployment",
//           "• Involved in analysis of existing www.wellcare.com Web Portal and modifying the functionalities required to build new development and enhancement.",
//           "• Involved in analysis, scoping, design, coding and testing of member self-service functionalities OTC, ID card, Member Materials, Coupon book, print ID card, Coverage Determination Request submission, Enrollment portal.",
//           "• Involved in analysis of existing WellCare.com Web Portal and modifying the code required to Upgrade Ruby and Ruby On Rails.",
//           "• Involved in analysis of existing code, SQL procedure required to migrate MYSQL to Oracle database.",
//           "• Maintain section 508 compliance in member and provider portal to meet CMS requirement",
//           "• Involved in analysis, scoping, design, coding and testing of SOAP WebServices",
//           "• Setting up the environment for the application",
//           "• Code optimization and performance improvement",
//           "• Building CSS Based layout for the User Interface and Implementation of AJAX",
//           "• Writing test cases using Test Driven Development (TDD)",
//           "• Writing RAKE scripts for DB Migration.",
//           "• Maintaining the code in Sub Versioning System (SVN)",
//           "• Creation of SQL, Stored Procedures",
//           "…",
//           "see more"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C4E0BAQEoboJe0-DUPg/company-logo_100_100/0/1625144835174?e=1634774400&v=beta&t=UylyXm7hhV1fCUj_UapjMyt6AY6RgPyVrz2owrWJf44",
//         "AltText": "Cognizant Technology Solutions",
//         "Link": "https://www.linkedin.com/company/cognizant/"
//       },
//       {
//         "Content": [
//           "web developer",
//           "Company Name",
//           "Broadspire",
//           "Dates Employed",
//           "2007",
//           "Employment Duration",
//           "less than a year"
//         ],
//         "Img": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
//         "AltText": "Broadspire",
//         "Link": "https://www.linkedin.com/search/results/all/?keywords=Broadspire"
//       },
//       {
//         "Content": [
//           "web developer",
//           "Company Name",
//           "360 degree interactive",
//           "Dates Employed",
//           "2006 – 2007",
//           "Employment Duration",
//           "1 yr"
//         ],
//         "Img": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
//         "AltText": "360 degree interactive",
//         "Link": "https://www.linkedin.com/search/results/all/?keywords=360%20degree%20interactive"
//       }
//     ],
//     "Certification": [],
//     "Volunteer": [],
//     "Skills": [
//       {
//         "Content": [
//           "Ruby",
//           "See 6 endorsements for Ruby",
//           "6",
//           "Kishore Seemala and 5 connections have given endorsements for this skill"
//         ],
//         "Link": "https://www.linkedin.com/in/sivaprakasam/detail/skills/(ACoAAAJgGRYBNa_1SY4pHgOWW0i47xqOWA0yt60,1)/"
//       },
//       {
//         "Content": [
//           "Ruby on Rails",
//           "See 15 endorsements for Ruby on Rails",
//           "15",
//           "Endorsed by 2 of Sivaprakasam’s colleagues at Cognizant"
//         ],
//         "Link": "https://www.linkedin.com/in/sivaprakasam/detail/skills/(ACoAAAJgGRYBNa_1SY4pHgOWW0i47xqOWA0yt60,2)/"
//       },
//       {
//         "Content": [
//           "Node.js",
//           "See 1 endorsement for Node.js",
//           "1",
//           "Ken Sitz has given an endorsement for this skill"
//         ],
//         "Link": "https://www.linkedin.com/in/sivaprakasam/detail/skills/(ACoAAAJgGRYBNa_1SY4pHgOWW0i47xqOWA0yt60,3)/"
//       }
//     ],
//     "Interest": [
//       {
//         "Content": [
//           "YP, The Real Yellow Pages®",
//           "32,633 followers"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C510BAQFGhLY8M9dXbg/company-logo_100_100/0/1519869419400?e=1634774400&v=beta&t=7cSOxaa7SBXYIJapnoWIoiLmtI8-LSup7vbGAOLcVRo",
//         "AltText": "YP, The Real Yellow Pages®",
//         "Link": "https://www.linkedin.com/company/yp/"
//       },
//       {
//         "Content": [
//           "Anna University",
//           "472,646 followers"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C560BAQEpZyTSZY9YlQ/company-logo_100_100/0/1519897730494?e=1634774400&v=beta&t=rWCWAA16dDTS6YFsjtOSLuS1Z2A9vT-6-9hPZnC2UXQ",
//         "AltText": "Anna University",
//         "Link": "https://www.linkedin.com/company/anna-university/"
//       },
//       {
//         "Content": [
//           "Web Developers United - Ruby, Rails, RoR, Full-Stack, HTML, CSS, React, Angular, JSON, JavaScript",
//           "27,147 members"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C5607AQHcQtEjjK93hg/group-logo_image-shrink_200x200/0/1576015879930?e=1626620400&v=beta&t=hCYDQuUo4Z7qwl1AjRSLh_WnPB0tUos13qEjSn7RSS0",
//         "AltText": "Web Developers United - Ruby, Rails, RoR, Full-Stack, HTML, CSS, React, Angular, JSON, JavaScript",
//         "Link": "https://www.linkedin.com/groups/62218/"
//       },
//       {
//         "Content": [
//           "Ruby and RubyOnRails",
//           "10,325 members"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C5107AQEtiyz18_vmeA/group-logo_image-shrink_200x200/0/1576136558682?e=1626620400&v=beta&t=96y_Qa_vASWcxbh0e1aqZFGJ40OYVg-Zy7Iom_lBMPA",
//         "AltText": "Ruby and RubyOnRails",
//         "Link": "https://www.linkedin.com/groups/40893/"
//       },
//       {
//         "Content": [
//           "Ruby Jobs",
//           "15,557 members"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C4D07AQFkY78vCuyZ2g/group-logo_image-shrink_200x200/0/1576134866238?e=1626620400&v=beta&t=FJoJ6eAfTIUvvNFfa1DqmKVubTQy12uKcT6rA76cwPU",
//         "AltText": "Ruby Jobs",
//         "Link": "https://www.linkedin.com/groups/1913060/"
//       },
//       {
//         "Content": [
//           "Ruby on Rails",
//           "82,322 members"
//         ],
//         "Img": "https://media-exp3.licdn.com/dms/image/C4D07AQElxajwyLs0Zg/group-logo_image-shrink_92x92/0/1525126290363?e=1626620400&v=beta&t=3t8Pr327WEdGnziscC8KZJwQsW780wSC8M4GUUzfGgY",
//         "AltText": "Ruby on Rails",
//         "Link": "https://www.linkedin.com/groups/22413/"
//       }
//     ]
//   }

// {
//   "Profile": "https://avatars.githubusercontent.com/u/66865924?v=4",
//   "Name": [
//     "Sivaprakasam",
//     "SivaPrakasam7"
//   ],
//   "About": [
//     "5 followers · 5 following · 2",
//     "sivaprakasam.educationhost.cloud"
//   ],
//   "Achivements": {
//     "Img": null,
//     "AltText": null
//   },
//   "Organization": {
//     "Link": "https://github.com/CSEKINGS",
//     "Payload": "{\"event_type\":\"user_profile.click\",\"payload\":{\"profile_user_id\":66865924,\"target\":\"MEMBER_ORGANIZATION_AVATAR\",\"user_id\":null,\"originating_url\":\"https://github.com/sivaprakasam7\"}}"
//   },
//   "Projects": [
//     {
//       "Link": "https://github.com/SivaPrakasam7/ISPLOIT",
//       "Content": [
//         "ISPLOIT",
//         "Target domain information exploits",
//         "Shell"
//       ]
//     },
//     {
//       "Link": "https://github.com/CSEKINGS/book_donation_backend",
//       "Content": [
//         "CSEKINGS/book_donation_backend",
//         "JavaScript 2"
//       ]
//     },
//     {
//       "Link": "https://github.com/SivaPrakasam7/XSEngine",
//       "Content": [
//         "XSEngine",
//         "Xpath scrap engine using selenium. User identify scraping xpath and create below xpath format.",
//         "JavaScript"
//       ]
//     },
//     {
//       "Link": "https://github.com/SivaPrakasam7/WPDRouter",
//       "Content": [
//         "WPDRouter",
//         "Wireless security, Pen-testing, Digital Forensics techniques included.",
//         "Python"
//       ]
//     },
//     {
//       "Link": "https://github.com/SivaPrakasam7/NodeAuth",
//       "Content": [
//         "NodeAuth",
//         "Node js login Google authendication and normal login with mongodb",
//         "JavaScript"
//       ]
//     },
//     {
//       "Link": "https://github.com/SivaPrakasam7/SociaLod",
//       "Content": [
//         "SociaLod",
//         "Username information scrapper from social media",
//         "Python 1"
//       ]
//     }
//   ],
//   "Activity": [
//     [
//       "Created 31 commits in 3 repositories",
//       "CSEKINGS/book_donation_backend",
//       "17 commits",
//       "SivaPrakasam7/XSEngine",
//       "13 commits",
//       "SivaPrakasam7/NodeAuth",
//       "1 commit"
//     ],
//     [
//       "Created 1 repository",
//       "SivaPrakasam7/XSEngine",
//       "JavaScript",
//       "Jul 6"
//     ]
//   ],
//   "Social": []
// }