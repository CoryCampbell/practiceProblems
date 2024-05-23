/*
STARTER SNIPPETS FOR VS CODE:
>>>> all snippets must be separated by a comma if you want to add new ones <<<<

Inside VS Code, press: ctrl + shift + P (
Type and open: "Snippets: Configure User Snippets"
click "New Global Snippet"
Name it whatever you like, I used: "Custom User Snippets"
copy and paste the following code right before the last closing curly brace:
*/

/*
"SNIPPET: class Object Creation": {
        "scope": "javascript",
        "prefix": "obj",
        "body": [
        "class ${1:NewObject} {",
            "    constructor(${2:option1}, ${3:option2}, ${4:option3}) {",
            "        this.${2:option1} = ${2:option1};",
            "        this.${3:option2} = ${3:option2};",
            "        this.${4:option3} = ${4:option3};",
            "    }",
            "}"
        ],
        "description": "Quick class Object creation with constructor, place by typing obj"
    },

    "SNIPPET: Extends a new class Object": {
        "scope": "javascript",
        "prefix": "ext",
        "body": [
            "class ${1:ExtendedObject} extends ${2:Object} {",
            "    constructor(${3:option1}, ${4:option2}, ${5:option3}) {",
            "        super($3, $4);",
            "        this.$5 = $5",
            "    }",
            "}"
        ],
        "description": "Quick Extends a new class Object with a constructor and also a super, place by typing ext. use tab to advance to next placeholder"
    },

    "SNIPPET: Require for mocha": {
        "scope": "javascript",
        "prefix": "req",
        "body": ["const ${1:Default} = require('./${2:default}')", "$0"],
        "description": "Quick setup for using a Require line to test with Mocha."
    },

    "SNIPPET: Module.exports": {
        "scope": "javascript",
        "prefix": "mod",
        "body": ["module.exports = ${1:Default}", "$2"],
        "description": "quick setup for module.exports, type mod to use"
    }
*/
