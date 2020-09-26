https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

    function findDifference(a, b) {
        let cubeA = 1 ;
        let cubeB = 1;
        for(let i = 0; i < a.length; i++){
            cubeA*=a[i];
        }
        for(let j = 0; j < b.length; j++){
            cubeB*=b[j];
        }
        return (cubeA > cubeB ) ? (cubeA - cubeB) : (cubeB - cubeA);
    }