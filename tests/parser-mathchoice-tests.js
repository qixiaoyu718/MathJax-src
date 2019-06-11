import {ParserTest} from './parser-tests.js';


class ParserMathchoiceTest extends ParserTest {

  constructor() {
    super();
  }

}

let parserTest = new ParserMathchoiceTest();

parserTest.runTest(
  'Modulo', 'a\\mod b',
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
            "text": "a"}]},
        {"kind": "mspace",
         "texClass": 0,
         "attributes": {"width": "18mu"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [],
         "isSpacelike": true},
        {"kind": "mi",
         "texClass": 1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"autoOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "mod"}]},
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
               "attributes": {"width": "thinmathspace"},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [],
               "isSpacelike": true}],
            "isInferred": true,
            "isSpacelike": true}],
         "isSpacelike": true},
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
               "attributes": {"width": "thinmathspace"},
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
            "text": "b"}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Modulo Sub0', 'X_{a\\mod b}',
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
               "text": "X"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 1},
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
                     "text": "a"}]},
                 {"kind": "mspace",
                  "texClass": 0,
                  "attributes": {"width": "12mu"},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1},
                  "properties": {"texprimestyle": true},
                  "childNodes": [],
                  "isSpacelike": true},
                 {"kind": "mi",
                  "texClass": 1,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1},
                  "properties": {"texprimestyle": true,
                                 "autoOP": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "mod"}]},
                 {"kind": "mstyle",
                  "texClass": 0,
                  "attributes": {"scriptlevel": 0},
                  "inherited": {"displaystyle": false},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mspace",
                        "texClass": 0,
                        "attributes": {"width": "thinmathspace"},
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
                  "attributes": {"scriptlevel": 0},
                  "inherited": {"displaystyle": false},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mrow",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 0},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mspace",
                        "texClass": 0,
                        "attributes": {"width": "thinmathspace"},
                        "inherited": {"displaystyle": false,
                                      "scriptlevel": 0},
                        "properties": {"texprimestyle": true},
                        "childNodes": [],
                        "isSpacelike": true}],
                     "isInferred": true,
                     "isSpacelike": true}],
                  "isSpacelike": true},
                 {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1,
                                "mathvariant": "italic"},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "text",
                     "text": "b"}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Modulo Sub1', 'X_{1_{a\\mod b}}',
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
               "text": "X"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mrow",
               "texClass": -1,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 1},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "msub",
                  "texClass": -1,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mn",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 1},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "1"}]},
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 2},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mrow",
                        "texClass": 0,
                        "attributes": {},
                        "inherited": {"displaystyle": false,
                                      "scriptlevel": 2},
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
                              "text": "a"}]},
                          {"kind": "mspace",
                           "texClass": 0,
                           "attributes": {"width": "12mu"},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 2},
                           "properties": {"texprimestyle": true},
                           "childNodes": [],
                           "isSpacelike": true},
                          {"kind": "mi",
                           "texClass": 1,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 2},
                           "properties": {"texprimestyle": true,
                                          "autoOP": true},
                           "childNodes": [
                             {"kind": "text",
                              "text": "mod"}]},
                          {"kind": "mstyle",
                           "texClass": 0,
                           "attributes": {"scriptlevel": 0},
                           "inherited": {"displaystyle": false},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "mrow",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {"displaystyle": false,
                                            "scriptlevel": 0},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "mspace",
                                 "texClass": 0,
                                 "attributes": {"width": "thinmathspace"},
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
                           "attributes": {"scriptlevel": 0},
                           "inherited": {"displaystyle": false},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "mrow",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {"displaystyle": false,
                                            "scriptlevel": 0},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "mspace",
                                 "texClass": 0,
                                 "attributes": {"width": "thinmathspace"},
                                 "inherited": {"displaystyle": false,
                                               "scriptlevel": 0},
                                 "properties": {"texprimestyle": true},
                                 "childNodes": [],
                                 "isSpacelike": true}],
                              "isInferred": true,
                              "isSpacelike": true}],
                           "isSpacelike": true},
                          {"kind": "mi",
                           "texClass": 0,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 2,
                                         "mathvariant": "italic"},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "text",
                              "text": "b"}]}],
                        "isInferred": true}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Modulo Sub2', 'X_{1_{2_{a\\mod b}}}',
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
               "text": "X"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mrow",
               "texClass": -1,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 1},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "msub",
                  "texClass": -1,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mn",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 1},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "1"}]},
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 2},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mrow",
                        "texClass": -1,
                        "attributes": {},
                        "inherited": {"displaystyle": false,
                                      "scriptlevel": 2},
                        "properties": {"texprimestyle": true},
                        "childNodes": [
                          {"kind": "msub",
                           "texClass": -1,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 2},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "mn",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {"displaystyle": false,
                                            "scriptlevel": 2},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "text",
                                 "text": "2"}]},
                             {"kind": "TeXAtom",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {"displaystyle": false,
                                            "scriptlevel": 3},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "mrow",
                                 "texClass": 0,
                                 "attributes": {},
                                 "inherited": {"displaystyle": false,
                                               "scriptlevel": 3},
                                 "properties": {"texprimestyle": true},
                                 "childNodes": [
                                   {"kind": "mi",
                                    "texClass": 0,
                                    "attributes": {},
                                    "inherited": {"displaystyle": false,
                                                  "scriptlevel": 3,
                                                  "mathvariant": "italic"},
                                    "properties": {"texprimestyle": true},
                                    "childNodes": [
                                      {"kind": "text",
                                       "text": "a"}]},
                                   {"kind": "mspace",
                                    "texClass": 0,
                                    "attributes": {"width": "12mu"},
                                    "inherited": {"displaystyle": false,
                                                  "scriptlevel": 3},
                                    "properties": {"texprimestyle": true},
                                    "childNodes": [],
                                    "isSpacelike": true},
                                   {"kind": "mi",
                                    "texClass": 1,
                                    "attributes": {},
                                    "inherited": {"displaystyle": false,
                                                  "scriptlevel": 3},
                                    "properties": {"texprimestyle": true,
                                                   "autoOP": true},
                                    "childNodes": [
                                      {"kind": "text",
                                       "text": "mod"}]},
                                   {"kind": "mstyle",
                                    "texClass": 0,
                                    "attributes": {"scriptlevel": 0},
                                    "inherited": {"displaystyle": false},
                                    "properties": {"texprimestyle": true},
                                    "childNodes": [
                                      {"kind": "mrow",
                                       "texClass": 0,
                                       "attributes": {},
                                       "inherited": {"displaystyle": false,
                                                     "scriptlevel": 0},
                                       "properties": {"texprimestyle": true},
                                       "childNodes": [
                                         {"kind": "mspace",
                                          "texClass": 0,
                                          "attributes": {"width": "thinmathspace"},
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
                                    "attributes": {"scriptlevel": 0},
                                    "inherited": {"displaystyle": false},
                                    "properties": {"texprimestyle": true},
                                    "childNodes": [
                                      {"kind": "mrow",
                                       "texClass": 0,
                                       "attributes": {},
                                       "inherited": {"displaystyle": false,
                                                     "scriptlevel": 0},
                                       "properties": {"texprimestyle": true},
                                       "childNodes": [
                                         {"kind": "mspace",
                                          "texClass": 0,
                                          "attributes": {"width": "thinmathspace"},
                                          "inherited": {"displaystyle": false,
                                                        "scriptlevel": 0},
                                          "properties": {"texprimestyle": true},
                                          "childNodes": [],
                                          "isSpacelike": true}],
                                       "isInferred": true,
                                       "isSpacelike": true}],
                                    "isSpacelike": true},
                                   {"kind": "mi",
                                    "texClass": 0,
                                    "attributes": {},
                                    "inherited": {"displaystyle": false,
                                                  "scriptlevel": 3,
                                                  "mathvariant": "italic"},
                                    "properties": {"texprimestyle": true},
                                    "childNodes": [
                                      {"kind": "text",
                                       "text": "b"}]}],
                                 "isInferred": true}]}]}],
                        "isInferred": true}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Modulo Sub3', 'X_{1_{2_{3_{a\\mod b}}}}',
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
               "text": "X"}]},
           {"kind": "TeXAtom",
            "texClass": 0,
            "attributes": {},
            "inherited": {"displaystyle": false,
                          "scriptlevel": 1},
            "properties": {"texprimestyle": true},
            "childNodes": [
              {"kind": "mrow",
               "texClass": -1,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 1},
               "properties": {"texprimestyle": true},
               "childNodes": [
                 {"kind": "msub",
                  "texClass": -1,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                                "scriptlevel": 1},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mn",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 1},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "text",
                        "text": "1"}]},
                    {"kind": "TeXAtom",
                     "texClass": 0,
                     "attributes": {},
                     "inherited": {"displaystyle": false,
                                   "scriptlevel": 2},
                     "properties": {"texprimestyle": true},
                     "childNodes": [
                       {"kind": "mrow",
                        "texClass": -1,
                        "attributes": {},
                        "inherited": {"displaystyle": false,
                                      "scriptlevel": 2},
                        "properties": {"texprimestyle": true},
                        "childNodes": [
                          {"kind": "msub",
                           "texClass": -1,
                           "attributes": {},
                           "inherited": {"displaystyle": false,
                                         "scriptlevel": 2},
                           "properties": {"texprimestyle": true},
                           "childNodes": [
                             {"kind": "mn",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {"displaystyle": false,
                                            "scriptlevel": 2},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "text",
                                 "text": "2"}]},
                             {"kind": "TeXAtom",
                              "texClass": 0,
                              "attributes": {},
                              "inherited": {"displaystyle": false,
                                            "scriptlevel": 3},
                              "properties": {"texprimestyle": true},
                              "childNodes": [
                                {"kind": "mrow",
                                 "texClass": -1,
                                 "attributes": {},
                                 "inherited": {"displaystyle": false,
                                               "scriptlevel": 3},
                                 "properties": {"texprimestyle": true},
                                 "childNodes": [
                                   {"kind": "msub",
                                    "texClass": -1,
                                    "attributes": {},
                                    "inherited": {"displaystyle": false,
                                                  "scriptlevel": 3},
                                    "properties": {"texprimestyle": true},
                                    "childNodes": [
                                      {"kind": "mn",
                                       "texClass": 0,
                                       "attributes": {},
                                       "inherited": {"displaystyle": false,
                                                     "scriptlevel": 3},
                                       "properties": {"texprimestyle": true},
                                       "childNodes": [
                                         {"kind": "text",
                                          "text": "3"}]},
                                      {"kind": "TeXAtom",
                                       "texClass": 0,
                                       "attributes": {},
                                       "inherited": {"displaystyle": false,
                                                     "scriptlevel": 4},
                                       "properties": {"texprimestyle": true},
                                       "childNodes": [
                                         {"kind": "mrow",
                                          "texClass": 0,
                                          "attributes": {},
                                          "inherited": {"displaystyle": false,
                                                        "scriptlevel": 4},
                                          "properties": {"texprimestyle": true},
                                          "childNodes": [
                                            {"kind": "mi",
                                             "texClass": 0,
                                             "attributes": {},
                                             "inherited": {"displaystyle": false,
                                                           "scriptlevel": 4,
                                                           "mathvariant": "italic"},
                                             "properties": {"texprimestyle": true},
                                             "childNodes": [
                                               {"kind": "text",
                                                "text": "a"}]},
                                            {"kind": "mspace",
                                             "texClass": 0,
                                             "attributes": {"width": "12mu"},
                                             "inherited": {"displaystyle": false,
                                                           "scriptlevel": 4},
                                             "properties": {"texprimestyle": true},
                                             "childNodes": [],
                                             "isSpacelike": true},
                                            {"kind": "mi",
                                             "texClass": 1,
                                             "attributes": {},
                                             "inherited": {"displaystyle": false,
                                                           "scriptlevel": 4},
                                             "properties": {"texprimestyle": true,
                                                            "autoOP": true},
                                             "childNodes": [
                                               {"kind": "text",
                                                "text": "mod"}]},
                                            {"kind": "mstyle",
                                             "texClass": 0,
                                             "attributes": {"scriptlevel": 0},
                                             "inherited": {"displaystyle": false},
                                             "properties": {"texprimestyle": true},
                                             "childNodes": [
                                               {"kind": "mrow",
                                                "texClass": 0,
                                                "attributes": {},
                                                "inherited": {"displaystyle": false,
                                                              "scriptlevel": 0},
                                                "properties": {"texprimestyle": true},
                                                "childNodes": [
                                                  {"kind": "mspace",
                                                   "texClass": 0,
                                                   "attributes": {"width": "thinmathspace"},
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
                                             "attributes": {"scriptlevel": 0},
                                             "inherited": {"displaystyle": false},
                                             "properties": {"texprimestyle": true},
                                             "childNodes": [
                                               {"kind": "mrow",
                                                "texClass": 0,
                                                "attributes": {},
                                                "inherited": {"displaystyle": false,
                                                              "scriptlevel": 0},
                                                "properties": {"texprimestyle": true},
                                                "childNodes": [
                                                  {"kind": "mspace",
                                                   "texClass": 0,
                                                   "attributes": {"width": "thinmathspace"},
                                                   "inherited": {"displaystyle": false,
                                                                 "scriptlevel": 0},
                                                   "properties": {"texprimestyle": true},
                                                   "childNodes": [],
                                                   "isSpacelike": true}],
                                                "isInferred": true,
                                                "isSpacelike": true}],
                                             "isSpacelike": true},
                                            {"kind": "mi",
                                             "texClass": 0,
                                             "attributes": {},
                                             "inherited": {"displaystyle": false,
                                                           "scriptlevel": 4,
                                                           "mathvariant": "italic"},
                                             "properties": {"texprimestyle": true},
                                             "childNodes": [
                                               {"kind": "text",
                                                "text": "b"}]}],
                                          "isInferred": true}]}]}],
                                 "isInferred": true}]}]}],
                        "isInferred": true}]}]}],
               "isInferred": true}]}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Choose', 'n \\choose k',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":0},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"withDelims":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Choose Sub0', 'X_{n \\choose k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"open":"(","close":")","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":0},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Choose Sub1', 'X_{1_{n \\choose k}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"open":"(","close":")","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":0},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Choose Sub2', 'X_{1_{2_{n \\choose k}}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"open":"(","close":")","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":0},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Choose Sub3', 'X_{1_{2_{3_{n \\choose k}}}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"open":"(","close":")","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":4,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":0},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":5,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":5,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":4,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Over With Delims', '1 \\overwithdelims [ ] 2',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"[","close":"]","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"withDelims":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Over With Delims Sub0', 'X_{1 \\overwithdelims [ ] 2}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Over With Delims Sub1', 'X_{1_{1 \\overwithdelims [ ] 2}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Over With Delims Sub2', 'X_{1_{2_{1 \\overwithdelims [ ] 2}}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Over With Delims Sub3', 'X_{1_{2_{3_{1 \\overwithdelims [ ] 2}}}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":4,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":5},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":5},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":4,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Above With Delims', 'a \\abovewithdelims [ ] 1pt b',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"[","close":"]","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"1pt"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"withDelims":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Above With Delims Sub0', 'X_{a \\abovewithdelims [ ] 1pt b}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"1pt"},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Above With Delims Sub1', 'X_{1_{a \\abovewithdelims [ ] 1pt b}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"1pt"},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":2,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Above With Delims Sub2', 'X_{1_{2_{a \\abovewithdelims [ ] 1pt b}}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"1pt"},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":3,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);

parserTest.runTest(
  'Above With Delims Sub3', 'X_{1_{2_{3_{a \\abovewithdelims [ ] 1pt b}}}}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"msub","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"X"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":2},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"2"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"msub","texClass":-1,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":3},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"3"}]},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"open":"[","close":"]","texClass":0,"texprimestyle":true},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texClass":4,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":4,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"["}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":"1pt"},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"withDelims":true,"texprimestyle":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":5,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"a"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":5,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"b"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texClass":5,"texprimestyle":true},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":4},"properties":{"texprimestyle":true},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"1.2em","maxsize":"1.2em"},"inherited":{"displaystyle":false,"scriptlevel":4,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"]"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}]}],"isInferred":true}]}
);


parserTest.runTest(
  'Probability', 'P(E) = {n \\choose k} p^k (1-p)^{ n-k}',
{"kind":"math","texClass":0,"attributes":{"display":"block"},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"P"}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"E"}]},{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"mo","texClass":3,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"="}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"open":"(","close":")","texClass":0},"childNodes":[{"kind":"TeXAtom","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":4},"childNodes":[{"kind":"mrow","texClass":4,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":4,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true},{"kind":"mfrac","texClass":null,"attributes":{"linethickness":0},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"withDelims":true},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":0,"mathvariant":"italic"},"properties":{"texprimestyle":true},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"TeXAtom","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{"texClass":5},"childNodes":[{"kind":"mrow","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"minsize":"2.047em","maxsize":"2.047em"},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true}],"isInferred":true,"isEmbellished":true}],"isEmbellished":true}]}],"isInferred":true}]},{"kind":"msup","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"p"}]},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"k"}]}]},{"kind":"mo","texClass":4,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":"("}],"isEmbellished":true},{"kind":"mn","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"text","text":"1"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"p"}]},{"kind":"msup","texClass":5,"attributes":{},"inherited":{"displaystyle":true,"scriptlevel":0},"properties":{},"childNodes":[{"kind":"mo","texClass":5,"attributes":{"stretchy":false},"inherited":{"displaystyle":true,"scriptlevel":0,"form":"postfix","fence":true,"stretchy":true,"symmetric":true},"properties":{},"childNodes":[{"kind":"text","text":")"}],"isEmbellished":true},{"kind":"TeXAtom","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mrow","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1},"properties":{},"childNodes":[{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"n"}]},{"kind":"mo","texClass":2,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"form":"infix"},"properties":{},"childNodes":[{"kind":"text","text":"−"}],"isEmbellished":true},{"kind":"mi","texClass":0,"attributes":{},"inherited":{"displaystyle":false,"scriptlevel":1,"mathvariant":"italic"},"properties":{},"childNodes":[{"kind":"text","text":"k"}]}],"isInferred":true}]}],"isEmbellished":true}],"isInferred":true}]}
);


parserTest.printTime();
