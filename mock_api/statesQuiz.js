'use strict';

const item = require('./quizBuilder').item;
const matchable = require('./quizBuilder').matchable;
const quiz = require('./quizBuilder').quiz;

const quizConfig = {
  title: 'U.S. Capitals',
  description: 'Match the state to its capital',
  alphabetical: true,
  suddenDeath: false,
  studyMode: true,
  timerSeconds: 300,
};

const quizData = [
  matchable(0, [item(0, 0, 'Alabama'), item(0, 1, 'Montgomery')]),
  matchable(1, [item(1, 0, 'Alaska'), item(1, 1, 'Juneau')]),
  matchable(2, [item(2, 0, 'Arizona'), item(2, 1, 'Phoenix')]),
  matchable(3, [item(3, 0, 'Arkansas'), item(3, 1, 'Little Rock')]),
  matchable(4, [item(4, 0, 'California'), item(4, 1, 'Sacramento')]),
  matchable(5, [item(5, 0, 'Colorado'), item(5, 1, 'Denver')]),
  matchable(6, [item(6, 0, 'Connecticut'), item(6, 1, 'Hartford')]),
  matchable(7, [item(7, 0, 'Delaware'), item(7, 1, 'Dover')]),
  matchable(8, [item(8, 0, 'District of Columbia'), item(8, 1, 'Washington')]),
  matchable(9, [item(9, 0, 'Florida'), item(9, 1, 'Tallahassee')]),
  matchable(10, [item(10, 0, 'Georgia'), item(10, 1, 'Atlanta')]),
  matchable(11, [item(11, 0, 'Hawaii'), item(11, 1, 'Honolulu')]),
  matchable(12, [item(12, 0, 'Idaho'), item(12, 1, 'Boise')]),
  matchable(13, [item(13, 0, 'Illinois'), item(13, 1, 'Sprinfield')]),
  matchable(14, [item(14, 0, 'Indiana'), item(14, 1, 'Indianapolis')]),
  matchable(15, [item(15, 0, 'Iowa'), item(15, 1, 'Des Moines')]),
  matchable(16, [item(16, 0, 'Kansas'), item(16, 1, 'Topeka')]),
  matchable(17, [item(17, 0, 'Kentucky'), item(17, 1, 'Frankfort')]),
  matchable(18, [item(18, 0, 'Louisiana'), item(18, 1, 'Baton Rouge')]),
  matchable(19, [item(19, 0, 'Maine'), item(19, 1, 'Augusta')]),
  matchable(20, [item(20, 0, 'Maryland'), item(20, 1, 'Annaplis')]),
  matchable(21, [item(21, 0, 'Massachusetts'), item(21, 1, 'Boston')]),
  matchable(22, [item(22, 0, 'Michigan'), item(22, 1, 'Lansing')]),
  matchable(23, [item(23, 0, 'Minnesota'), item(23, 1, 'Saint Paul')]),
  matchable(24, [item(24, 0, 'Mississippi'), item(24, 1, 'Jackson')]),
  matchable(25, [item(25, 0, 'Missouri'), item(25, 1, 'Jefferson City')]),
  matchable(26, [item(26, 0, 'Montana'), item(26, 1, 'Helena')]),
  matchable(27, [item(27, 0, 'Nebraska'), item(27, 1, 'Lincoln')]),
  matchable(28, [item(28, 0, 'Nevada'), item(28, 1, 'Carson City')]),
  matchable(29, [item(29, 0, 'New Hampshire'), item(29, 1, 'Concord')]),
  matchable(30, [item(30, 0, 'New Jersey'), item(30, 1, 'Trenton')]),
  matchable(31, [item(31, 0, 'New Mexico'), item(31, 1, 'Santa Fe')]),
  matchable(32, [item(32, 0, 'New York'), item(32, 1, 'Albany')]),
  matchable(33, [item(33, 0, 'North Carolina'), item(33, 1, 'Raleigh')]),
  matchable(34, [item(34, 0, 'North Dakota'), item(34, 1, 'Bismark')]),
  matchable(35, [item(35, 0, 'Ohio'), item(35, 1, 'Columbus')]),
  matchable(36, [item(36, 0, 'Oklahoma'), item(36, 1, 'Oklahoma City')]),
  matchable(37, [item(37, 0, 'Oregon'), item(37, 1, 'Salem')]),
  matchable(38, [item(38, 0, 'Pennsylvania'), item(38, 1, 'Harrisburg')]),
  matchable(39, [item(39, 0, 'Rhode Island'), item(39, 1, 'Providence')]),
  matchable(40, [item(40, 0, 'South Carolina'), item(40, 1, 'Columbia')]),
  matchable(41, [item(41, 0, 'South Dakota'), item(41, 1, 'Pierre')]),
  matchable(42, [item(42, 0, 'Tennessee'), item(42, 1, 'Nashville')]),
  matchable(43, [item(43, 0, 'Texas'), item(43, 1, 'Austin')]),
  matchable(44, [item(44, 0, 'Utah'), item(44, 1, 'Salt Lake City')]),
  matchable(45, [item(45, 0, 'Vermont'), item(45, 1, 'Montpelier')]),
  matchable(46, [item(46, 0, 'Virginia'), item(46, 1, 'Richmond')]),
  matchable(47, [item(47, 0, 'Washington'), item(47, 1, 'Olympia')]),
  matchable(48, [item(48, 0, 'West Virginia'), item(48, 1, 'Charleston')]),
  matchable(49, [item(49, 0, 'Wisconsin'), item(49, 1, 'Madison')]),
  matchable(50, [item(50, 0, 'Wyoming'), item(50, 1, 'Cheyenne')]),
];

module.exports = quiz(quizData, quizConfig);