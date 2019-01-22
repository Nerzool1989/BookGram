var user = {};
user.name = 'dodd';
user.cons = function() {
    console.log( this.name);
};

console.log(user.cons());

setTimeout((user.cons).bind(user.cons, user), 1000);