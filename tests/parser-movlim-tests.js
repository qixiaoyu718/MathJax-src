import {ParserTest} from './parser-tests.js';


class ParserMovlimTest extends ParserTest {

  constructor() {
    super();
  }

}

let parserTest = new ParserMovlimTest();


parserTest.runTest(
  'Limits SubSup', '\\int^2\\limits_3',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{"texClass":1,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.runTest(
  'Limits UnderOver', '\\lim_3\\nolimits^2',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msubsup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":false},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix"},"properties":{"movablelimits":false,"movesupsub":true,"texClass":1},"childNodes":[{"kind":"text","text":"lim"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.runTest(
  'Limits', '\\sum\\limits^2_3',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"movablelimits":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.runTest(
  'Vector Op', '\\vec{+}',
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
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": 0,
               "attributes": {},
               "inherited": {
                 "displaystyle": true,
                 "scriptlevel": 0,
                 "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "form": "infix"},
                  "properties": {"movablelimits": false,
                                 "texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "+"}],
                  "isEmbellished": true},
                 {"kind": "mo",
                  "texClass": 3,
                  "attributes": {"stretchy": false},
                  "inherited": {
                    "displaystyle": true,
                    "scriptlevel": 0,
                    "form": "infix",
                    "accent": true,
                    "stretchy": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "\u2192"}],
                  "isEmbellished": true}],
               "isEmbellished": true}],
            "isInferred": true,
            "isEmbellished": true}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Overline', '\\overline{a}',
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
      "inherited": {
        "displaystyle": true,
        "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mover",
         "texClass": 0,
         "attributes": {},
         "inherited": {
           "displaystyle": true,
           "scriptlevel": 0,
           "accent": false},
         "properties": {"subsupOK": true},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {
              "displaystyle": true,
              "scriptlevel": 0,
              "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "a"}]},
           {"kind": "mo",
            "texClass": 0,
            "attributes": {"accent": false},
            "inherited": {
              "displaystyle": false,
              "scriptlevel": 1,
              "form": "infix",
              "accent": true,
              "stretchy": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "\u00af"}],
            "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Overline Limits', '\\overline{\\int\\limits^2}',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"rspace":0},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix"},"properties":{"texprimestyle":true},"childNodes":[],"isEmbellished":true},{"kind":"mover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"lspace":0,"rspace":0},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","largeop":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}],"isEmbellished":true}]},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Overline Sum', '\\overline{\\sum}',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"movablelimits":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.runTest(
  'Overline 1', '\\overline{\\sum}',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"movablelimits":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.runTest(
  'Overline 2', '\\overline{\\mathop{a}}',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movablelimits":false,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Overline 3', '\\overline{\\mathop{a}}^2',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msup","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movablelimits":false,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Overline 4', '\\overline{\\sum^2_3}',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"rspace":0},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix"},"properties":{"texprimestyle":true},"childNodes":[],"isEmbellished":true},{"kind":"munderover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"lspace":0,"rspace":0},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}],"isEmbellished":true}]},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Overline 5', '\\overline{\\sum}^2_3',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msubsup","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"movablelimits":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.runTest(
  'Overline 6', '\\overline{\\underline{\\sum}}',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":false},"properties":{"subsupOK":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":0,"attributes":{"rspace":0},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix"},"properties":{"texprimestyle":true},"childNodes":[],"isEmbellished":true},{"kind":"munder","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accentunder":true},"properties":{"subsupOK":true,"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"movablelimits":false,"lspace":0,"rspace":0},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","accent":true,"stretchy":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"_"}],"isEmbellished":true}],"isEmbellished":true}]},{"kind":"mo","texClass":0,"attributes":{"accent":false},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"¯"}],"isEmbellished":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Overbrace 1', '\\overbrace{abc}',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movesupsub":true,"subsupOK":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":true},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"c"}]}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"⏞"}],"isEmbellished":true}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Underbrace', '\\underbrace{abc}',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movesupsub":true,"subsupOK":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"munder","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accentunder":true},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"⏟"}],"isEmbellished":true}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Overbrace Op 1', '\\overbrace{\\mathop{a}}',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movesupsub":true,"subsupOK":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":true},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movablelimits":false,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"⏞"}],"isEmbellished":true}]}],"isInferred":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Overbrace Op 2', '\\overbrace{\\mathop{a}}^2',
{"kind":"math","texClass":-1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movesupsub":true,"subsupOK":true,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movablelimits":false,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]}],"isInferred":true}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"⏞"}],"isEmbellished":true}]}],"isInferred":true}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Overbrace 2', '\\overbrace{\\sum}',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movesupsub":true,"subsupOK":true},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":true},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"movablelimits":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"⏞"}],"isEmbellished":true}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.runTest(
  'Overbrace 3', '\\overbrace{\\sum}^2',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movesupsub":true,"subsupOK":true,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mover","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"accent":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":1,"attributes":{"movablelimits":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"movablelimits":true,"symmetric":true},"properties":{"texClass":1,"movesupsub":true,"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∑"}],"isEmbellished":true},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"⏞"}],"isEmbellished":true}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"text","text":"2"}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);


parserTest.printTime();
