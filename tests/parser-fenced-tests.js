import {ParserTest} from './parser-tests.js';


class ParserFencedTest extends ParserTest {

  constructor() {
    super();
  }

}

let parserTest = new ParserFencedTest();


parserTest.runTest(
  'Fenced', '\\left(\\frac{a}{\\left[bc\\right]}\\right)',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"open":"[","close":"]","texClass":7,"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
);


// Test for delimiter lookup.
parserTest.runTest(
  'Fenced2', '\\{\\frac{a}{\\uparrow bc\\downarrow}\\}',
  {"kind": "math",
 "texClass": 4,
 "attributes": {"display": "block"},
 "inherited": {"displaystyle": true,
               "scriptlevel": 0},
 "properties": {},
 "childNodes": [
   {"kind": "mrow",
    "texClass": 4,
    "attributes": {},
    "inherited": {"displaystyle": true,
                  "scriptlevel": 0},
    "properties": {},
    "childNodes": [
      {"kind": "mo",
       "texClass": 4,
       "attributes": {"fence": false,
                      "stretchy": false},
       "inherited": {"displaystyle": true,
                     "scriptlevel": 0,
                     "form": "prefix",
                     "fence": true,
                     "stretchy": true,
                     "symmetric": true},
       "properties": {},
       "childNodes": [
         {"kind": "text",
          "text": "{"}],
       "isEmbellished": true},
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
             "text": "a"}]},
         {"kind": "mrow",
          "texClass": 3,
          "attributes": {},
          "inherited": {"displaystyle": false,
                        "scriptlevel": 0},
          "properties": {"texprimestyle": true},
          "childNodes": [
            {"kind": "mo",
             "texClass": 3,
             "attributes": {"stretchy": false},
             "inherited": {"displaystyle": false,
                           "scriptlevel": 0,
                           "form": "prefix",
                           "stretchy": true},
             "properties": {"texprimestyle": true},
             "childNodes": [
               {"kind": "text",
                "text": "↑"}],
             "isEmbellished": true},
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
                      "text": "c"}]},
                {"kind": "mo",
                  "texClass": 3,
                  "attributes": {"stretchy": false},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 0,
                    "form": "postfix",
                    "stretchy": true},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                      "text": "↓"}],
                  "isEmbellished": true}]}]},
        {"kind": "mo",
          "texClass": 5,
          "attributes": {"fence": false,
            "stretchy": false},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "form": "postfix",
            "fence": true,
            "stretchy": true,
            "symmetric": true},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "}"}],
          "isEmbellished": true}],
      "isInferred": true}]}
);

parserTest.runTest(
  'Fenced3', '\\left\\{\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\\right\\}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"{","close":"}","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"{"}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"|","close":"]","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"[","close":"|","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true},{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"∥","close":"","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"∥"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"A"}]},{"kind":"mo","texClass":5,"attributes":{"fence":true,"stretchy":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix"},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":""}],"isEmbellished":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"}"}],"isEmbellished":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Middle', '\\left(a\\middle|b\\right)',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mo","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"|"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Fenced Nostretch 1', '(\\frac{a}{[bc]})',
  {"kind": "math",
 "texClass": 4,
 "attributes": {"display": "block"},
 "inherited": {"displaystyle": true,
               "scriptlevel": 0},
 "properties": {},
 "childNodes": [
   {"kind": "mrow",
    "texClass": 4,
    "attributes": {},
    "inherited": {"displaystyle": true,
                  "scriptlevel": 0},
    "properties": {},
    "childNodes": [
      {"kind": "mo",
       "texClass": 4,
       "attributes": {"stretchy": false},
       "inherited": {"displaystyle": true,
                     "scriptlevel": 0,
                     "form": "prefix",
                     "fence": true,
                     "stretchy": true,
                     "symmetric": true},
       "properties": {},
       "childNodes": [
         {"kind": "text",
          "text": "("}],
       "isEmbellished": true},
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
             "text": "a"}]},
         {"kind": "mrow",
          "texClass": 4,
          "attributes": {},
          "inherited": {"displaystyle": false,
                        "scriptlevel": 0},
          "properties": {"texprimestyle": true},
          "childNodes": [
            {"kind": "mo",
             "texClass": 4,
             "attributes": {"stretchy": false},
             "inherited": {"displaystyle": false,
                           "scriptlevel": 0,
                           "form": "prefix",
                           "fence": true,
                           "stretchy": true,
                           "symmetric": true},
             "properties": {"texprimestyle": true},
             "childNodes": [
               {"kind": "text",
                "text": "["}],
             "isEmbellished": true},
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
                      "text": "c"}]},
                {"kind": "mo",
                  "texClass": 5,
                  "attributes": {"stretchy": false},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 0,
                    "form": "postfix",
                    "fence": true,
                    "stretchy": true,
                    "symmetric": true},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                      "text": "]"}],
                  "isEmbellished": true}]}]},
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
          "isEmbellished": true}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Fenced Noleft', '\\left. ab \\right)',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"","close":")","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":true,"stretchy":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix"},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":""}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Fenced Noright', '\\left( ab \\right.',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":"","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mo","texClass":5,"attributes":{"fence":true,"stretchy":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix"},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":""}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Fenced Arrows 5', '\\left\\{\\frac{a}{\\left\\uparrow bc\\right\\downarrow}\\right\\}',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"{","close":"}","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"{"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"open":"↑","close":"↓","texClass":7,"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":true,"symmetric":true},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"prefix","stretchy":true},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"text","text":"↑"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mo","texClass":5,"attributes":{"fence":true,"symmetric":true},"inherited":{"displaystyle":false,"scriptlevel":0,"form":"postfix","stretchy":true},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"text","text":"↓"}],"isEmbellished":true}]}]},{"kind":"mo","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"}"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Fenced Arrows 1', '\\left\\uparrow \\frac{a}{b} \\right\\downarrow',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"↑","close":"↓","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","stretchy":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"↑"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"mo","texClass":5,"attributes":{"fence":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","stretchy":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"↓"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Fenced Arrows 2', '\\uparrow \\frac{a}{b} \\downarrow',
  {"kind": "math",
 "texClass": 3,
 "attributes": {"display": "block"},
 "inherited": {"displaystyle": true,
               "scriptlevel": 0},
 "properties": {},
 "childNodes": [
   {"kind": "mrow",
    "texClass": 3,
    "attributes": {},
    "inherited": {"displaystyle": true,
                  "scriptlevel": 0},
    "properties": {},
    "childNodes": [
      {"kind": "mo",
       "texClass": 3,
       "attributes": {"stretchy": false},
       "inherited": {"displaystyle": true,
                     "scriptlevel": 0,
                     "form": "prefix",
                     "stretchy": true},
       "properties": {},
       "childNodes": [
         {"kind": "text",
          "text": "↑"}],
       "isEmbellished": true},
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
                  "text": "b"}]}]},
        {"kind": "mo",
          "texClass": 3,
          "attributes": {"stretchy": false},
          "inherited": {"displaystyle": true,
            "scriptlevel": 0,
            "form": "postfix",
            "stretchy": true},
          "properties": {},
          "childNodes": [
            {"kind": "text",
              "text": "↓"}],
          "isEmbellished": true}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Fenced Arrows 3', '\\left\\uparrow \\frac{a}{b}\\middle\\downarrow c \\right\\uparrow',
{"kind":"math","texClass":7,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":7,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"↑","close":"↑","texClass":7},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"fence":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"prefix","stretchy":true},"properties":{"texClass":4},"childNodes":[{"kind":"text","text":"↑"}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","stretchy":true},"properties":{},"childNodes":[{"kind":"text","text":"↓"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[],"isInferred":true,"isSpacelike":true}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"c"}]},{"kind":"mo","texClass":5,"attributes":{"fence":true,"symmetric":true},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","stretchy":true},"properties":{"texClass":5},"childNodes":[{"kind":"text","text":"↑"}],"isEmbellished":true}]}],"isInferred":true}]}
);


parserTest.printTime();
