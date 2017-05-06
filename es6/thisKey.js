
//this keyword
function add(a, b) {
return this.x + this.y + a + b;
}

const a = { x: 2, y: 5 };
//call args 1st arg will be an obj or {}
// 2nd list of arguments;
console.log(add.call(a, 5, 7));
//apply accepts obj, [], null
// 2nd single array of arguments;
console.log(add.apply(a, [10, 43]));


function f() {
  return this.a;
}

const g = f.bind({ a: 'hello' });

const h = f.bind({ a: 'world' });
// can only bind once if the variable is binded already.
const i = g.bind({ a: 'ywee' });

const o = { a: 'yooo', f, g, h, i };
console.log(o.f(), o.g(), o.h(), o.i());

var obj = {
  // traditional func
  // this will bind on the obj itself
  traditionalFunc: function() {
    console.log('traditional this === obj' , this === obj);
  },

  // in an => func
  // this will bind only when it is created;
  arrowFunc: () => {
    console.log('arrow func this === obj ' , this === obj);
    console.log('arrow func this === window ' , this === window);
  }
};

obj.traditionalFunc();
obj.arrowFunc();

// can attach to an independent fun
// this will refer to obj created binded to it.

// 1.
const bam = {
  prop: 37,
  f: function() {
    console.log(this.prop);
  }
}
bam.f();

//2.
const boo = { prop: 57 };
function independent() {
  return this.prop;
}

boo.f = independent;
console.log(boo.f());
