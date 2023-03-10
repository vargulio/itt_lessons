function bahur() {
    // something just for firemen
}

console.log(bahur.prototype);

const user = {
    name: 'Raj',
    location: {
        city: 'NY',
        state: 'NY'
    }
};
const copy = Object.assign({}, user);

copy.location.city = 'Albany';
console.log('original: ', user.location);
console.log('copy:', copy.location);