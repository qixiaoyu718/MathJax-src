import {ParserTest} from './parser-tests.js';

class ParserAmsTest extends ParserTest {

  constructor() {
    super();
  }

}

let parserTest = new ParserAmsTest();

parserTest.runTest(
  'Symbol', '\\digamma',
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
            "text": "ϝ"}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Operator', '\\dotplus',
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
        {"kind": "mo",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "∔"}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);

parserTest.runTest(
  'Delimiter', '\\ulcorner',
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
        {"kind": "mo",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "⌜"}],
         "isEmbellished": true}],
      "isInferred": true,
      "isEmbellished": true}],
   "isEmbellished": true}
);


parserTest.runTest(
  'Delimiter-left-right', '\\left\\ulcorner A \\right\\urcorner',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"⌜","close":"⌝","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":true,"stretchy":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix"},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"⌜"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"A"}]},{"kind":"mo","texClass":5,"attributes":{"fence":true,"stretchy":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix"},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"⌝"}],"isEmbellished":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Macro', 'A\\implies B',
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
            "text": "A"}]},
        {"kind": "mstyle",
         "texClass": 0,
         "attributes": {"scriptlevel": 0},
         "inherited": {"displaystyle": true},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mspace",
               "texClass": 0,
               "attributes": {"width": "thickmathspace"},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}],
         "isSpacelike": true},
        {"kind": "mo",
         "texClass": 3,
         "attributes": {"stretchy": false},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix",
                       "accent": true,
                       "stretchy": true},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "⟹"}],
         "isEmbellished": true},
        {"kind": "mstyle",
         "texClass": 0,
         "attributes": {"scriptlevel": 0},
         "inherited": {"displaystyle": true},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mspace",
               "texClass": 0,
               "attributes": {"width": "thickmathspace"},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {},
         "childNodes": [
           {"kind": "text",
            "text": "B"}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'AMS-math-mo', '\\iiiint',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"⨌"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);

parserTest.runTest(
  'AMS-math-macro', '\\ddddot{1}',
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
        {"kind": "TeXAtom",
         "texClass": 0,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": -1,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mover",
               "texClass": -1,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0,
                             "accent": true},
               "properties": {},
               "childNodes": [
                 {"kind": "mn",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "1"}]},
                 {"kind": "mo",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0,
                                "form": "infix",
                                "accent": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "⃜"}],
                  "isEmbellished": true}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Normal Fraction', '\\frac{n}{k}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "n"}]},
           {"kind": "mi",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0,
                          "mathvariant": "italic"},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "text",
               "text": "k"}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Text Fraction', '\\tfrac{n}{k}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mstyle",
         "texClass": null,
         "attributes": {"displaystyle": false,
                        "scriptlevel": 0},
         "inherited": {},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mfrac",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1,
                                "mathvariant": "italic"},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "n"}]},
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1,
                                "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "k"}]}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Display Fraction', '\\dfrac{n}{k}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mstyle",
         "texClass": null,
         "attributes": {"displaystyle": true,
                        "scriptlevel": 0},
         "inherited": {},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mfrac",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0,
                                "mathvariant": "italic"},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "n"}]},
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0,
                                "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "k"}]}]}],
            "isInferred": true}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Normal Sub Fraction', 'a_\\frac{n}{k}',
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
        {"kind": "msub",
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
               "text": "a"}]},
           {"kind": "mfrac",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 2,
                             "mathvariant": "italic"},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "n"}]},
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 2,
                             "mathvariant": "italic"},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "text",
                  "text": "k"}]}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Text Sub Fraction', 'a_\\tfrac{n}{k}',
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
        {"kind": "msub",
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
               "text": "a"}]},
           {"kind": "mstyle",
            "texClass": null,
            "attributes": {"displaystyle": false,
                           "scriptlevel": 0},
            "inherited": {},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mrow",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mfrac",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 1,
                                   "mathvariant": "italic"},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "n"}]},
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 1,
                                   "mathvariant": "italic"},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "k"}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Display Sub Fraction', 'a_\\dfrac{n}{k}',
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
        {"kind": "msub",
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
               "text": "a"}]},
           {"kind": "mstyle",
            "texClass": null,
            "attributes": {"displaystyle": true,
                           "scriptlevel": 0},
            "inherited": {},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mrow",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mfrac",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
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
                        "text": "n"}]},
                    {"kind": "mi",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0,
                                   "mathvariant": "italic"},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "k"}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Normal Binomial', '\\binom{n}{k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"0"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"withDelims":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Text Binomial', '\\tbinom{n}{k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mstyle","texClass":0,"attributes":{"displaystyle":false,"scriptlevel":0},"inherited":{},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"0"},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"withDelims":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Display Binomial', '\\dbinom{n}{k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mstyle","texClass":0,"attributes":{"displaystyle":true,"scriptlevel":0},"inherited":{},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"0"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"withDelims":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Normal Sub Binomial', 'a_\\binom{n}{k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"open":"(","close":")","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"0"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Text Sub Binomial', 'a_\\tbinom{n}{k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mstyle","texClass":0,"attributes":{"displaystyle":false,"scriptlevel":0},"inherited":{},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"0"},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Display Sub Binomial', 'a_\\dbinom{n}{k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mstyle","texClass":0,"attributes":{"displaystyle":true,"scriptlevel":0},"inherited":{},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"0"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Center Fraction', '\\cfrac{a}{bbb}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": null,
               "attributes": {"width": 0,
                              "height": "8.6pt",
                              "depth": "3pt"},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": null,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {},
                     "childNodes": [],
                     "isSpacelike": true}],
                  "isInferred": true,
                  "isSpacelike": true}],
               "isSpacelike": true},
              {"kind": "mstyle",
               "texClass": 0,
               "attributes": {"displaystyle": false,
                              "scriptlevel": 0},
               "inherited": {},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "TeXAtom",
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
                        "properties": {},
                        "childNodes": [
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 0,
                                         "mathvariant": "italic"},
                           "properties": {},
                           "childNodes": [
                             {"kind": "text",
                              "text": "a"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}]},
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": null,
               "attributes": {"width": 0,
                              "height": "8.6pt",
                              "depth": "3pt"},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": null,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [],
                     "isSpacelike": true}],
                  "isInferred": true,
                  "isSpacelike": true}],
               "isSpacelike": true},
              {"kind": "mstyle",
               "texClass": 0,
               "attributes": {"displaystyle": false,
                              "scriptlevel": 0},
               "inherited": {},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mrow",
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
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 0,
                                         "mathvariant": "italic"},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "text",
                              "text": "b"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Left Fraction', '\\cfrac[l]{a}{bbb}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {"numalign": "left",
                        "denomalign": "left"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": null,
               "attributes": {"width": 0,
                              "height": "8.6pt",
                              "depth": "3pt"},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": null,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {},
                     "childNodes": [],
                     "isSpacelike": true}],
                  "isInferred": true,
                  "isSpacelike": true}],
               "isSpacelike": true},
              {"kind": "mstyle",
               "texClass": 0,
               "attributes": {"displaystyle": false,
                              "scriptlevel": 0},
               "inherited": {},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "TeXAtom",
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
                        "properties": {},
                        "childNodes": [
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 0,
                                         "mathvariant": "italic"},
                           "properties": {},
                           "childNodes": [
                             {"kind": "text",
                              "text": "a"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}]},
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": null,
               "attributes": {"width": 0,
                              "height": "8.6pt",
                              "depth": "3pt"},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": null,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [],
                     "isSpacelike": true}],
                  "isInferred": true,
                  "isSpacelike": true}],
               "isSpacelike": true},
              {"kind": "mstyle",
               "texClass": 0,
               "attributes": {"displaystyle": false,
                              "scriptlevel": 0},
               "inherited": {},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mrow",
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
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 0,
                                         "mathvariant": "italic"},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "text",
                              "text": "b"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Right Fraction', '\\cfrac[r]{a}{bbb}',
  {"kind": "math",
   "texClass": null,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": null,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mfrac",
         "texClass": null,
         "attributes": {"numalign": "right",
                        "denomalign": "right"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": null,
               "attributes": {"width": 0,
                              "height": "8.6pt",
                              "depth": "3pt"},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": null,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {},
                     "childNodes": [],
                     "isSpacelike": true}],
                  "isInferred": true,
                  "isSpacelike": true}],
               "isSpacelike": true},
              {"kind": "mstyle",
               "texClass": 0,
               "attributes": {"displaystyle": false,
                              "scriptlevel": 0},
               "inherited": {},
               "properties": {},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "TeXAtom",
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
                        "properties": {},
                        "childNodes": [
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 0,
                                         "mathvariant": "italic"},
                           "properties": {},
                           "childNodes": [
                             {"kind": "text",
                              "text": "a"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}]},
           {"kind": "mrow",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 0},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mpadded",
               "texClass": null,
               "attributes": {"width": 0,
                              "height": "8.6pt",
                              "depth": "3pt"},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": null,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": null,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [],
                     "isSpacelike": true}],
                  "isInferred": true,
                  "isSpacelike": true}],
               "isSpacelike": true},
              {"kind": "mstyle",
               "texClass": 0,
               "attributes": {"displaystyle": false,
                              "scriptlevel": 0},
               "inherited": {},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "mrow",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mrow",
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
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 0,
                                         "mathvariant": "italic"},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "text",
                              "text": "b"}]}],
                        "isInferred": true}]}],
                  "isInferred": true}]}]}]}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Above Left Arrow', '\\xleftarrow{abcd}',
{"kind":"math","texClass":3,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texClass":3,"texprimestyle":true},"childNodes":[{"kind":"text","text":"←"}],"isEmbellished":true},{"kind":"mpadded","texClass":0,"attributes":{"width":"+10mu","lspace":"7mu","voffset":".15em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);

parserTest.runTest(
  'Above Below Left Arrow', '\\xleftarrow[xyz]{abcd}',
{"kind":"math","texClass":3,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"munderover","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texClass":3,"texprimestyle":true},"childNodes":[{"kind":"text","text":"←"}],"isEmbellished":true},{"kind":"mpadded","texClass":0,"attributes":{"width":"+10mu","lspace":"7mu","voffset":"-.24em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"y"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true}]},{"kind":"mpadded","texClass":0,"attributes":{"width":"+10mu","lspace":"7mu","voffset":".15em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);

parserTest.runTest(
  'Above Left Arrow in Context', 'A\\xleftarrow{abcd}B',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"A"}]},{"kind":"mover","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texClass":3,"texprimestyle":true},"childNodes":[{"kind":"text","text":"←"}],"isEmbellished":true},{"kind":"mpadded","texClass":0,"attributes":{"width":"+10mu","lspace":"7mu","voffset":".15em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"B"}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Above Right Arrow', '\\xrightarrow{abcd}',
{"kind":"math","texClass":3,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mover","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texClass":3,"texprimestyle":true},"childNodes":[{"kind":"text","text":"→"}],"isEmbellished":true},{"kind":"mpadded","texClass":0,"attributes":{"width":"+11mu","lspace":"5mu","voffset":".15em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);

parserTest.runTest(
  'Above Below Right Arrow', '\\xrightarrow[xyz]{abcd}',
{"kind":"math","texClass":3,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"munderover","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texClass":3,"texprimestyle":true},"childNodes":[{"kind":"text","text":"→"}],"isEmbellished":true},{"kind":"mpadded","texClass":0,"attributes":{"width":"+11mu","lspace":"5mu","voffset":"-.24em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"x"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"y"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"z"}]}],"isInferred":true}]},{"kind":"mpadded","texClass":0,"attributes":{"width":"+11mu","lspace":"5mu","voffset":".15em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}
);

parserTest.runTest(
  'Above Right Arrow in Context', 'A\\xrightarrow{abcd}B',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"A"}]},{"kind":"mover","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"subsupOK":true},"childNodes":[{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","accent":true,"stretchy":true},"properties":{"texClass":3,"texprimestyle":true},"childNodes":[{"kind":"text","text":"→"}],"isEmbellished":true},{"kind":"mpadded","texClass":0,"attributes":{"width":"+11mu","lspace":"5mu","voffset":".15em"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"d"}]}],"isInferred":true}]}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"B"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Genfrac', '\\genfrac{[}{]}{0pt}{3}{a}{b}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mstyle","texClass":0,"attributes":{"displaystyle":false,"scriptlevel":2},"inherited":{},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"open":"[","close":"]","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"0pt"},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"withDelims":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'MultiInt', '\\idotsint',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mo","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⋯"}],"isEmbellished":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.runTest(
  'MultiInt in Context', 'a \\idotsint b',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mo","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⋯"}],"isEmbellished":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'MultiInt with Command', '\\idotsint\\sin x',
{"kind":"math","texClass":1,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mo","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"⋯"}],"isEmbellished":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","largeop":true,"symmetric":true},"properties":{"texClass":1},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mi","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"fnOP":true},"childNodes":[{"kind":"text","text":"sin"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{"texClass":-1},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"x"}]}],"isInferred":true}]}
);


parserTest.runTest(
  'MultiInt with Limits', '\\idotsint\\limits_a^b+3',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":true},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"negativethinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":true},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"negativethinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"munderover","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movesupsub":true},"childNodes":[{"kind":"TeXAtom","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":1,"movablelimits":false,"movesupsub":true,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"movablelimits":false,"texprimestyle":true},"childNodes":[{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"mstyle","texClass":0,"attributes":{"scriptlevel":0},"inherited":{"displaystyle":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mspace","texClass":0,"attributes":{"width":"thinmathspace"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[],"isSpacelike":true}],"isInferred":true,"isSpacelike":true}],"isSpacelike":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","largeop":true,"symmetric":true},"properties":{"texClass":1,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true},{"kind":"mo","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"⋯"}],"isEmbellished":true},{"kind":"mo","texClass":1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","largeop":true,"symmetric":true},"properties":{"texClass":1,"texprimestyle":true},"childNodes":[{"kind":"text","text":"∫"}],"isEmbellished":true}],"isInferred":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"+"}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"3"}]}],"isInferred":true}]}
);

parserTest.runTest(
  'DeclareMathOp', '\\DeclareMathOperator{\\R}{R}a\\R b',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":1,"attributes":{"mathvariant":"normal"},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texClass":1,"movablelimits":false,"movesupsub":false,"fnOP":true},"childNodes":[{"kind":"text","text":"R"}]},{"kind":"mo","texClass":-1,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{"texClass":-1},"childNodes":[{"kind":"text","text":"⁡"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]}],"isInferred":true}]}
);

parserTest.printTime();
