

const family = ['Reechika', 'Anita', 'Sanjay'];

const familyResult = familyIterators(family);
let res = familyResult.next();
console.log(res);
console.log(res.value);

res = familyResult.next();
console.log(res);
console.log(res.value);

res = familyResult.next();
console.log(res);
console.log(res.value);

res = familyResult.next();
console.log(res);
console.log(res.value);

res = familyResult.next();
console.log(res);
console.log(res.value);


function familyIterators(family) {
    let nextIndex = 0;

    return {
        next: function () {

            if (nextIndex < family.length) {
                return {
                    value: family[nextIndex++],
                    done: false
                }
            }

            else {
                return{
                    done: true
                }
            }
        }
    }
}


/*In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

value
The next value in the iteration sequence.
done
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.*/




