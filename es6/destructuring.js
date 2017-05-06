// destructuring;

const person = { fname: 'romeo', lname: 'enso' };
const attrib = { sports: 'outdoor', age: 23 };

const PersonAttrib = {...person, ...attrib};

console.log(PersonAttrib);

const coords = {
   x: { lat: 14.43, lng: 10.43 },
   y: { lat: 14.43, lng: 10.43 }
};

const { x: { lat: LatX, lng: lngX } } = coords;

console.log(lngX);
