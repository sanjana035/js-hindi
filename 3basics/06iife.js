////Immediately Invoked Function Expression(IIFE)

(function chai(){
    console.log(`DB Connected`);
})();
///global scope ke polution se problem ke iife ka use krte hai declaration wagera me

( () => {
    console.log(`DB Connected two`);   
})();
( (name) => {
    console.log(`DB Connected two ${name}`);   
})("sanjana");