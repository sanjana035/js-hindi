// In Object we ue forin

const myobject = {
    'first' : 'cpp',
    'second' : 'javascript',
    'third' : 'html'
}
for (const i in myobject) {
    console.log(`${i} language is ${myobject[i]}`);
    
}