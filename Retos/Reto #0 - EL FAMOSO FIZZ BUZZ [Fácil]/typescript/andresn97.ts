
const multiples = ( value: number ): string => {
    let wordToReplace: string = '';
    if ( value%3 === 0 ) wordToReplace = 'fizz';
    if ( value%5 === 0 ) wordToReplace = 'buzz';
    if ( value%3 === 0 && value%5 === 0 ) wordToReplace = 'fizzbuzz';

    return wordToReplace;
}

for ( let i = 1; i < 101; i++ ) {
    console.log( multiples( i ) || i );
}