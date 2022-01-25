// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
// You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

var personalInfo = () => {
    // pii is scoped inside the person function. Only accessible from within this function
    var pii = {
      name: 'Isaac Santos',
      ssn: '123-45-6789',
    };
    // Return a new object that has access to the person function scope
    // Only returns name 
    return {
      getName: () => {
        return pii.name;
      }
    };
};
  
console.log(personalInfo().getName());