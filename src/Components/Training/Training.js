
const TRAINING_LIST_ARRAY = [
    {
      id: 1,
      title: "Find First Character",
      input: {
        name: "string",
        type: "string"
      },
      output: {
        name: "index",
        type: "integer"
      },
      edge_cases: [
        'upper and lower case characters',
        'empty string',
        'spaces',
        'no unique characters'
      ],
      considerations: [
        'each character one or more',
        'character appears once its unique',
        'count the characters'
      ],
      data_structures: [
        'hash table'
      ],
      methodologies: [
        ''
      ],
      sample_data: [
        'css box',
        'chedder cheese',
        'time tracker',
        'file management',
        'aabbccc',
        ''
      ],
      description: `Description: Given a string, find first unique (non-repeating) character and return it index.  Definition: Unique - Only occurs once in the string of characters`,
      category: "General"
    },
    {
      id: 2,
      title: "Group Anagrams",
      input: {
        name: "array of strings",
        type: "array of strings"
      },
      output: {
        name: "grouped anagrams",
        type: "grouped array of arrays"
      },
      edge_cases: [
        'upper and lower case letters',
        'empty string',
        'no unique charaters',
        'special characters'
      ],
      considerations: [
        'If a string does not have an comparative anagram, then they will appear in their own distinct array as a one array element.',
      ],
      data_structures: [
        'hash table'
      ],
      methodologies: [
        ''
      ],
      sample_data: [
        "['ab', 'abc', 'abcd', ...]",
        '',
        ''
      ],
      description: `Given an array of strings ['ab', 'abc', 'abcd', ...], return the strings grouped in array of arrays by anagram. Definition: Anagram - when two strings (Words) have the same letters, but they can be in a different order.`,
      category: "General"
    },
    {
      id: 3,
      title: 'Validate Palindrome',
      input: {
        name: "string",
        type: "string"
      },
      output: {
        name: "valid palindrome",
        type: "boolean"
      },
      edge_cases: [
        'empty string',
        'no unique characters',
        'spaces',
        'special characters'
      ],
      considerations: [
        'remove special characters',
        'treat upper and lower case the same',
      ],
      data_structures: [
        'hash table'
      ],
      methodologies: [
        'pointer traversal'
      ],
      sample_data: [
        'racecar',
        'level',
        'rotator'
      ],
      description: `Description: Given a string, find first unique (non-repeating) character and return it index.  Definition: Unique - Only occurs once in the string of characters`,
      category: "General"
    }
  ];
  const allCategories = [];
  TRAINING_LIST_ARRAY.forEach((topic)=> {
    allCategories.push(topic.category)
  });
  const CATEGORIES = allCategories.filter((item,i,ar)=> ar.indexOf(item)===i);
  //console.log(CATEGORIES);

  
  export {CATEGORIES, TRAINING_LIST_ARRAY};