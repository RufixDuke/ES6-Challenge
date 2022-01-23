class Town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    calculateAge() {
        var age = (new Date().getFullYear() - this.buildYear) / 3;
        
        return age;
    }
}

class Park extends Town {
    constructor(name, buildYear, numberTrees, parkArea,
        numberPark) {
            super (name, buildYear);
            this.numberTrees = numberTrees;
            this.parkArea = parkArea;
        }

        densityTree(){
            var density = this.numberTrees / this.parkArea;
            console.log(`${this.name} has a tree 
            density of ${density} trees per square km`);
        }

        averageAge() {
            var ages = this.buildYear;
            return this.calculateAge(ages);

            console.log(ages);
        }


        highNumberTrees() {
            if(this.numberTrees > 1000){
                return this.name;
            } else {
                return 0;
            }
        }
}

const nationalPark = new Park('National Park', 1990, 
900, 25);
const ibadanPark = new Park('Ibadan Park', 1960, 1500, 30);
const abeokutaPark = new Park('Abeokuta Park', 1970, 500, 35);


// Density of each Park
nationalPark.densityTree();
ibadanPark.densityTree();
abeokutaPark.densityTree();

// AVERAGE AGE of each town's park

const nationalYear = nationalPark.averageAge();
const ibadanYear = ibadanPark.averageAge();
const abeokutaYear = abeokutaPark.averageAge();

const average = (nationalYear + ibadanYear + abeokutaYear) / 3;
console.log(average);

// Highest number of trees

const nationalTree = nationalPark.highNumberTrees();
const ibadanTree = ibadanPark.highNumberTrees();
const abeokutaTree = abeokutaPark.highNumberTrees();

function highestTrees(){
    const arr = [nationalPark, ibadanPark, abeokutaPark];
    arr.map( (pa) => {
        if(pa.numberTrees > 1000){
            console.log(pa.name)
        }
    })
}

highestTrees();



class Street extends Town {
    constructor(name, buildYear, lengthStreet, sizes = "normal") {
            super (name, buildYear);
            this.lengthStreet = lengthStreet;
            this.sizes = sizes;
    }


    streetLength(){
        var len = this.lengthStreet;
        
        return len;

        console.log(len);
    }


    sizeStreet() {
        var sizeStreet = this.sizes;

        return sizeStreet;

        console.log(sizeStreet);
    }


};

const ibadanStreet = new Street("Ibadan Street", 2000, 5, "small");
const abeokutaStreet = new Street("Abeokuta Street", 2001, 4, "normal");
const oyoStreet = new Street("Oyo Street", 1998, 3.5, "big");
const akureStreet = new Street("Akure Street", 2002, 3, "huge");

// Length of the street

const ibadanLen = ibadanStreet.streetLength();
const abeoLen = abeokutaStreet.streetLength();
const oyoLen = oyoStreet.streetLength();
const akureLen = akureStreet.streetLength();

const totalLen = ibadanLen + abeoLen + oyoLen + akureLen;
console.log(totalLen, (totalLen / 3));

// Sizes

const ibadanSize = ibadanStreet.sizeStreet()
const abeoSize = abeokutaStreet.sizeStreet();
const oyoSize = oyoStreet.sizeStreet();
const akureSize = akureStreet.sizeStreet();

console.log(ibadanSize);
console.log(abeoSize);
console.log(oyoSize);
console.log(akureSize);
console.log(`Ibadan Street with ${ibadanLen}m length is ${ibadanSize}`)

















































