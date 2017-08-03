# confere.js  [![Build Status](https://travis-ci.org/isneezy/confere.js.svg?branch=master)](https://travis-ci.org/isneezy/confere.js)
confere.js is a simple promise based javascript validation library heavily inspired by the laravel validation!

## Installation
Download or clone the repo
add lib/confere.js to your html script

## Usage
```
var dataValidator = new Confrere({
    rules: {
        name: 'required|min:3|max:254',
        email: 'required|email|max:254',
        birth_date: 'required|date|date_before:2004-01-01' //ex: under 13 not allowed
    }
});

dataValidator.validate ({
    name: "Jhon Doe",
    email: "myemail@gmail.com",
    birth_date: "1992-05-12",
}).then (function () {
    //the data is valid, do some stuff ex: submiting the data    
}).catch(function (result) {
    //the data is invalid, show error messages, you can use the result.fields to retrive all validation errors errors    
});
```

## Contributing
Found a bug?  
Open an Issue on github, if you fixed yourself, fork the repo, create a branch,
commit your changes ad open a pull request.  
Please be sure to not include unnecessary changes on your commit and add some test whenever is possible
  
## Credits
Matt Kruse [http://www.mattkruse.com/](http://www.mattkruse.com/) - For his awesome js date functions found in [JavascriptToolbox.com](javascriptToolbox.com)