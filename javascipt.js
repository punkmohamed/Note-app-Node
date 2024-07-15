//assigemnt 1
    function age(age) {
        return age = age * 356;
    }
    let days = age(24)
    console.log(days) //days=8544


    //assigment 2
    function smallest(arr) {
        let element = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < element) {
                element = arr[i];
            }
        }
        return element
    }
    let arr = [3, 4, 7, 2, 1, 6, 8]
    let smallestNumber = smallest(arr)
    console.log(smallestNumber) //element =1


    //assigment 3
    const desc = (array) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] < array[j]) {
                    let element = array[i];
                    array[i] = array[j];
                    array[j] = element;
                }
            }
        }
        return array;
    }
    let array = [3, 4, 7, 2, 1, 6, 8]
    console.log(desc(array)) //[8, 7, 6, 4, 3, 2, 1]

    // assigment 4
    function Average(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum / numbers.length;
    }
    let numbers = [3, 4, 7, 2, 1, 6, 8]
    console.log(Average(numbers)) // avg=4.428571428571429 

    // assigemnt 5
    // what is the output of Console.log( [ ] == [ ] ) Console.log( { } == { } ) And
    // explain your answer
    console.log([] == [])
    //false becuase even when they have same data the do not have
    //  the same pointer of the object in the memory
    console.log({} == {})
    // false same as the array one it checks if it has the same location in the memory

    // assigemnt 6
    function main() {
        console.log("A");
        setTimeout(function print() { console.log("B"); }, 0);
        console.log("C");
    }
    main();
    // it will print (A) the first because it the first one after that it is the (C) BECAUSE even when
    //  we used timout 0 it still consider afew millesecond so the B was the last one to be print it

    // assigment 7
    var num = 8;
    var num = 10;
    console.log(num); // 10 becuase it redelcare it if we use let insted it will give us syntax error

    // assigemnt 8
    function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Ayush';
        let age = 21;
    }
    sayHi(); // so the name is hoisted but the consolelo it will print the name = undfiend because the did not delcarled
    // age  is reffrence error because let can not be hoisted