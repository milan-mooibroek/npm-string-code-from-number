module.exports = class  {
    constructor(characters = 'abcdefghijklmnopqrstuvwxyz0123456789') {
        if (typeof characters === 'string' && characters.length > 0) {
            this.characters = [...new Set(characters.split(''))];
             ((new Set(this.characters)).size !== this.characters.length) && console.error('Removed duplicates from string.');
        } else {
            throw new Error('Please enter an string with at least one unique value.');
        }
    }
    generate(number) {
        if (!Number.isInteger(number) || number < 1) throw new Error('Please enter a positive integer.');
        const characters = this.characters;
        let hash = '';
        let hashArray = [number];
        while (hashArray.some(function(id) {
            return id > characters.length;
        })) {
            hashArray.forEach(function (id, i, ids) {
                if (id > characters.length) {
                    ids[i] -= characters.length;
                    if (ids[(i + 1)]) {
                        ids[(i + 1)] += 1;
                    } else {
                        ids.push(1);
                    }
                }
            });
        }
        hashArray.forEach(function (id) {
            hash += characters[(id - 1)];
        })
        return hash
    }
}