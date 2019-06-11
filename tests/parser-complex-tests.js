import {ParserTest} from './parser-tests.js';


class ParserComplexTest extends ParserTest {

  constructor() {
    super();
  }

}

let parserTest = new ParserComplexTest();

parserTest.runTest(
  'Square Root Complex', '\\sqrt{3x-1}+(1+x)^2',
  {"kind":"math",
   "texClass":0,
   "attributes":{"display":"block"},
   "inherited":{"displaystyle":true,
                "scriptlevel":0},
   "properties":{},
   "childNodes":[
     {"kind":"mrow",
      "texClass":0,
      "attributes":{},
      "inherited":{
        "displaystyle":true,
        "scriptlevel":0},
      "properties":{},
      "childNodes":[
        {"kind":"msqrt",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mrow",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0},
            "properties":{"texprimestyle":true},
            "childNodes":[
              {"kind":"mn",
               "texClass":0,
               "attributes":{},
               "inherited":{
                 "displaystyle":true,
                 "scriptlevel":0},
               "properties":{"texprimestyle":true},
               "childNodes":[
                 {"kind":"text",
                  "text":"3"}]},
              {"kind":"mi",
               "texClass":0,
               "attributes":{},
               "inherited":{
                 "displaystyle":true,
                 "scriptlevel":0,
                 "mathvariant":"italic"},
               "properties":{"texprimestyle":true},
               "childNodes":[
                 {"kind":"text",
                  "text":"x"}]},
              {"kind":"mo",
               "texClass":2,
               "attributes":{},
               "inherited":{
                 "displaystyle":true,
                 "scriptlevel":0,
                 "form":"infix"},
               "properties":{"texprimestyle":true},
               "childNodes":[
                 {"kind":"text",
                  "text":"−"}],
               "isEmbellished":true},
              {"kind":"mn",
               "texClass":0,
               "attributes":{},
               "inherited":{
                 "displaystyle":true,
                 "scriptlevel":0},
               "properties":{"texprimestyle":true},
               "childNodes":[
                 {"kind":"text",
                  "text":"1"}]}],
            "isInferred":true}]},
        {"kind":"mo",
         "texClass":2,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"+"}],
         "isEmbellished":true},
        {"kind":"mo",
         "texClass":4,
         "attributes":{"stretchy":false},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix",
           "fence":true,
           "stretchy":true,
           "symmetric":true},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"("}],
         "isEmbellished":true},
        {"kind":"mn",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"1"}]},
        {"kind":"mo",
         "texClass":2,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "form":"infix"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"+"}],
         "isEmbellished":true},
        {"kind":"mi",
         "texClass":0,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0,
           "mathvariant":"italic"},
         "properties":{},
         "childNodes":[
           {"kind":"text",
            "text":"x"}]},
        {"kind":"msup",
         "texClass":5,
         "attributes":{},
         "inherited":{
           "displaystyle":true,
           "scriptlevel":0},
         "properties":{},
         "childNodes":[
           {"kind":"mo",
            "texClass":5,
            "attributes":{"stretchy":false},
            "inherited":{
              "displaystyle":true,
              "scriptlevel":0,
              "form":"postfix",
              "fence":true,
              "stretchy":true,
              "symmetric":true},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":")"}],
            "isEmbellished":true},
           {"kind":"mn",
            "texClass":0,
            "attributes":{},
            "inherited":{
              "displaystyle":false,
              "scriptlevel":1},
            "properties":{},
            "childNodes":[
              {"kind":"text",
               "text":"2"}]}],
         "isEmbellished":true}],
      "isInferred":true}]}
);


parserTest.runTest(
  'General Root', '\\sqrt[4]{3x-1}+(1+x)^2',
  {"kind": "math",
   "texClass": 0,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 0,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mroot",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mn",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "3"}]},
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "mathvariant": "italic"},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "x"}]},
              {"kind": "mo",
               "texClass": 2,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "form": "infix"},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "−"}],
               "isEmbellished": true},
              {"kind": "mn",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "1"}]}]},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 2},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "4"}]}]},
        {"kind": "mo",
         "texClass": 2,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "+"}],
         "isEmbellished": true},
        {"kind": "mo",
         "texClass": 4,
         "attributes": {"stretchy": false},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix",
                       "fence": true,
                       "stretchy": true,
                       "symmetric": true},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "("}],
         "isEmbellished": true},
        {"kind": "mn",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "1"}]},
        {"kind": "mo",
         "texClass": 2,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "+"}],
         "isEmbellished": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "x"}]},
        {"kind": "msup",
         "texClass": 5,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mo",
            "texClass": 5,
            "attributes": {"stretchy": false},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "postfix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": ")"}],
            "isEmbellished": true},
           {"kind": "mn",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 1},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "2"}]}],
         "isEmbellished": true}],
      "isInferred": true}]}
);


parserTest.runTest('Quadratic Formula',
                   'x = \\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',
                   {"kind": "math",
                    "texClass": 0,
                    "attributes": {"display": "block"},
                    "inherited": {"displaystyle": true,
                                  "scriptlevel": 0},
                    "properties": {},
                    "childNodes": [
                      {"kind": "mrow",
                       "texClass": 0,
                       "attributes": {},
                       "inherited": {"displaystyle": true,
                                     "scriptlevel": 0},
                       "properties": {},
                       "childNodes": [
                         {"kind": "mi",
                          "texClass": 0,
                          "attributes": {},
                          "inherited": {"displaystyle": true,
                                        "scriptlevel": 0,
                                        "mathvariant": "italic"},
                          "properties": {},
                          "childNodes": [
                            {"kind": "text",
                             "text": "x"}]},
                         {"kind": "mo",
                          "texClass": 3,
                          "attributes": {},
                          "inherited": {"displaystyle": true,
                                        "scriptlevel": 0,
                                        "form": "infix"},
                          "properties": {},
                          "childNodes": [
                            {"kind": "text",
                             "text": "="}],
                          "isEmbellished": true},
                         {"kind": "mfrac",
                          "texClass": null,
                          "attributes": {},
                          "inherited": {"displaystyle": true,
                                        "scriptlevel": 0},
                          "properties": {},
                          "childNodes": [
                            {"kind": "mrow",
                             "texClass": 0,
                             "attributes": {},
                             "inherited": {"displaystyle": false,
                                           "scriptlevel": 0},
                             "properties": {},
                             "childNodes": [
                               {"kind": "mo",
                                "texClass": 0,
                                "attributes": {},
                                "inherited": {"displaystyle": false,
                                              "scriptlevel": 0,
                                              "form": "prefix"},
                                "properties": {},
                                "childNodes": [
                                  {"kind": "text",
                                   "text": "−"}],
                                "isEmbellished": true},
                               {"kind": "mi",
                                "texClass": 0,
                                "attributes": {},
                                "inherited": {"displaystyle": false,
                                              "scriptlevel": 0,
                                              "mathvariant": "italic"},
                                "properties": {},
                                "childNodes": [
                                  {"kind": "text",
                                   "text": "b"}]},
                               {"kind": "mo",
                                "texClass": 2,
                                "attributes": {},
                                "inherited": {"displaystyle": false,
                                              "scriptlevel": 0,
                                              "form": "infix"},
                                "properties": {},
                                "childNodes": [
                                  {"kind": "text",
                                   "text": "±"}],
                                "isEmbellished": true},
                               {"kind": "msqrt",
                                "texClass": 0,
                                "attributes": {},
                                "inherited": {"displaystyle": false,
                                              "scriptlevel": 0},
                                "properties": {},
                                "childNodes": [
                                  {"kind": "mrow",
                                   "texClass": 0,
                                   "attributes": {},
                                   "inherited": {"displaystyle": false,
                                                 "scriptlevel": 0},
                                   "properties": {"texprimestyle": true},
                                   "childNodes": [
                                     {"kind": "msup",
                                      "texClass": 0,
                                      "attributes": {},
                                      "inherited": {"displaystyle": false,
                                                    "scriptlevel": 0},
                                      "properties": {"texprimestyle": true},
                                      "childNodes": [
                                        {"kind": "mi",
                                         "texClass": 0,
                                         "attributes": {},
                                         "inherited": {"displaystyle": false,
                                                       "scriptlevel": 0,
                                                       "mathvariant": "italic"},
                                         "properties": {"texprimestyle": true},
                                         "childNodes": [
                                           {"kind": "text",
                                            "text": "b"}]},
                                        {"kind": "mn",
                                         "texClass": 0,
                                         "attributes": {},
                                         "inherited": {"displaystyle": false,
                                                       "scriptlevel": 1},
                                         "properties": {"texprimestyle": true},
                                         "childNodes": [
                                           {"kind": "text",
                                            "text": "2"}]}]},
                                     {"kind": "mo",
                                      "texClass": 2,
                                      "attributes": {},
                                      "inherited": {"displaystyle": false,
                                                    "scriptlevel": 0,
                                                    "form": "infix"},
                                      "properties": {"texprimestyle": true},
                                      "childNodes": [
                                        {"kind": "text",
                                         "text": "−"}],
                                      "isEmbellished": true},
                                     {"kind": "mn",
                                      "texClass": 0,
                                      "attributes": {},
                                      "inherited": {"displaystyle": false,
                                                    "scriptlevel": 0},
                                      "properties": {"texprimestyle": true},
                                      "childNodes": [
                                        {"kind": "text",
                                         "text": "4"}]},
                                     {"kind": "mi",
                                      "texClass": 0,
                                      "attributes": {},
                                      "inherited": {"displaystyle": false,
                                                    "scriptlevel": 0,
                                                    "mathvariant": "italic"},
                                      "properties": {"texprimestyle": true},
                                      "childNodes": [
                                        {"kind": "text",
                                         "text": "a"}]},
                                     {"kind": "mi",
                                      "texClass": 0,
                                      "attributes": {},
                                      "inherited": {"displaystyle": false,
                                                    "scriptlevel": 0,
                                                    "mathvariant": "italic"},
                                      "properties": {"texprimestyle": true},
                                      "childNodes": [
                                        {"kind": "text",
                                         "text": "c"}]}],
                                   "isInferred": true}]}]},
                            {"kind": "mrow",
                             "texClass": 0,
                             "attributes": {},
                             "inherited": {"displaystyle": false,
                                           "scriptlevel": 0},
                             "properties": {"texprimestyle": true},
                             "childNodes": [
                               {"kind": "mn",
                                "texClass": 0,
                                "attributes": {},
                                "inherited": {"displaystyle": false,
                                              "scriptlevel": 0},
                                "properties": {"texprimestyle": true},
                                "childNodes": [
                                  {"kind": "text",
                                   "text": "2"}]},
                               {"kind": "mi",
                                "texClass": 0,
                                "attributes": {},
                                "inherited": {"displaystyle": false,
                                              "scriptlevel": 0,
                                              "mathvariant": "italic"},
                                "properties": {"texprimestyle": true},
                                "childNodes": [
                                  {"kind": "text",
                                   "text": "a"}]}]}]}],
                       "isInferred": true}]}
                  );


parserTest.runTest('Cauchy-Schwarz Inequality',
                   '\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2} \\leq' +
                   '  \\left( \\sum_{k=1}^n a_k^2 \\right)' +
                   '  \\left( \\sum_{k=1}^n b_k^2 \\right)',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]}],"isEmbellished":true},{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":false},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"negativethinmathspace"},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":false},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"negativethinmathspace"},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}],"isInferred":true}]}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"≤"}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]}],"isEmbellished":true},{"kind":"msubsup","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]}],"isEmbellished":true},{"kind":"msubsup","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
                  );



parserTest.runTest('An Identity of Ramanujan',
                   '\\frac{1}{\\Bigl(\\sqrt{\\phi\\sqrt{5}}-\\phi\\Bigr)' +
                   '  e^{\\frac25\\pi}} =' +
                   '    1+\\frac{e^{-2\\pi}}' +
                   '      {1+\\frac{e^{-4\\pi}}' +
                   '        {1+\\frac{e^{-6\\pi}}' +
                   '          {1+\\frac{e^{-8\\pi}}' +
                   '            {1+\\ldots} } } }',
{"kind":"math","texClass":null,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.623em","maxsize":"1.623em"},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"msqrt","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"ϕ"}]},{"kind":"msqrt","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"5"}]}],"isInferred":true}]}],"isInferred":true}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"ϕ"}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.623em","maxsize":"1.623em"},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"e"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"5"}]}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"π"}]}],"isInferred":true}]}]}]}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"e"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"prefix"},"properties":{},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"π"}]}],"isInferred":true}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"e"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"prefix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"4"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"π"}]}],"isInferred":true}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"e"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"prefix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"6"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"π"}]}],"isInferred":true}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"e"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4,"form":"prefix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"8"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"π"}]}],"isInferred":true}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mo","texClass":7,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"postfix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"…"}],"isEmbellished":true}]}]}]}]}]}]}]}]}],"isInferred":true}]}
                  );


parserTest.runTest('A Rogers-Ramanujan Identity',
                   '1 + \\frac{q^2}{(1-q)}' +
                   '  + \\frac{q^6}{(1-q)(1-q^2)} + \\cdots =' +
                   '\\prod_{j=0}^{\\infty}' +
                   '  \\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},' +
                   '     \\quad\\quad \\text{for $|q|<1$}.',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"6"}]}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mo","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⋯"}],"isEmbellished":true},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∏"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"j"}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"∞"}]}],"isInferred":true}]}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"5"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"j"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}],"isInferred":true}]}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"5"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"j"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]}],"isInferred":true}]}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","linebreakstyle":"after","separator":true},"properties":{},"childNodes":[{"kind":"text","text":","}],"isEmbellished":true},{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":true},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"1em"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":true},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"1em"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtext","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"for "}],"isSpacelike":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"q"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"<"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]}]},{"kind":"mo","texClass":6,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","separator":true},"properties":{},"childNodes":[{"kind":"text","text":"."}],"isEmbellished":true}],"isInferred":true}]}                   
                  );

parserTest.runTest('A Summation Formula',
                   '\\sum_{n=1}^\\infty {1\\over n^2} = {\\pi^2\\over 6}',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"∞"}]}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]}]}],"isInferred":true}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"π"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"6"}]}]}],"isInferred":true}]}],"isInferred":true}]}
                  );


parserTest.runTest('Cauchy Integral Formula',
                   'f(a) = \\oint_\\gamma \\frac{f(z)}{z-a}dz',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"msub","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"∮"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"γ"}]}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"f"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"z"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]}]}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true}]}
                  );

parserTest.runTest('Standard Deviation',
                   '\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^N {(x_i-\\mu)}^2}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"σ"}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"msqrt","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"N"}]}]},{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"i"}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"N"}]}],"isEmbellished":true},{"kind":"msup","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"i"}]}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"μ"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]}],"isInferred":true}]}],"isInferred":true}]}
                  );


parserTest.runTest(
  'A Cross Product Formula', '\\mathbf{V}_1 \\times \\mathbf{V}_2 =' +
    '   \\begin{vmatrix}' +
    ' \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\' +
    '    \\frac{\\partial X}{\\partial u} &' +
    ' \\frac{\\partial Y}{\\partial u} & 0 \\\\' +
    '    \\frac{\\partial X}{\\partial v} &' +
    ' \\frac{\\partial Y}{\\partial v} & 0 \\\\' +
    '   \\end{vmatrix}',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"bold"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"V"}]}],"isInferred":true}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"×"}],"isEmbellished":true},{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"bold"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"V"}]}],"isInferred":true}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mtable","texClass":0,"attributes":{"columnspacing":"1em","rowspacing":"4pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"useHeight":1},"childNodes":[{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"bold"},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"i"}]}],"isInferred":true}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"bold"},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"j"}]}],"isInferred":true}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"bold"},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"k"}]}],"isInferred":true}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"u"}]}]}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"Y"}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"u"}]}]}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]},{"kind":"mtr","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"v"}]}]}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"Y"}]}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"∂"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"v"}]}]}]}],"isInferred":true}]},{"kind":"mtd","texClass":null,"attributes":{},"inherited":{"columnalign":"center","rowalign":"baseline","displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"0"}]}],"isInferred":true}]}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]}],"isInferred":true}]});


parserTest.printTime();
