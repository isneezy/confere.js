import ConfereJS from './Confere';

var conferejs = new ConfereJS({
    rules: {
        name: 'required|min:3|max:254',
        email: 'required|email|max:254',
        username: 'required|max:16|min:4|exists:users,username'
    }
});

conferejs.validator('integer', function(name, value, params){

});

conferejs.validate({
    name: 'I',
    email: 'ivanvila.com',
    username: 'isneezy'
}).then(res => {
    console.log('input data is valid');
}).catch(res => {
    console.log(res);
});

export default ConfereJS