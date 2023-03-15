
type tenisPoints =
    'Love' | 15 | 30 | 40 |
    'Deuce' | 'Ventaja P1' | 'Ventaja P2' | 'Ha ganado el P1' |
    'Ha ganado el P2';

const pointsSecuence = ( gameSecuence: string[] ): void => {
    let firstPlayerPoints: tenisPoints = 'Love';
    let secondPlayerPoints: tenisPoints = 'Love';
    gameSecuence.forEach( winner => {
        if ( 'P1' ) firstPlayerPoints = getPointsAdded(
            firstPlayerPoints, [ 'P1', secondPlayerPoints ]
        );
        if ( 'P2' ) secondPlayerPoints = getPointsAdded(
            secondPlayerPoints, [ 'P2', firstPlayerPoints ]
        );
        console.log(firstPlayerPoints)
        console.log(secondPlayerPoints)
    })
}

const getPointsAdded = (
    playerPoints: tenisPoints,
    referencePlayerPoints: [ string, tenisPoints ]
): tenisPoints => {
    let referencePlayerName: string = referencePlayerPoints[0];
    let secondPlayerPoints: tenisPoints = referencePlayerPoints[1];

    if ( playerPoints === 'Love' ) return 15;
    if ( playerPoints === 15 ) return 30;
    if ( playerPoints === 30 ) return 40;
    if ( playerPoints === secondPlayerPoints ) return "Deuce";
    if ( playerPoints === "Deuce" && secondPlayerPoints === "Deuce" )
        return ( referencePlayerName === 'P1' ? "Ventaja P1" : "Ventaja P2" );
    if ( referencePlayerName === 'P1' ) {
        if ( playerPoints === 'Ventaja P1' && secondPlayerPoints === 'Deuce' ) return "Ha ganado el P1"
    }
    if ( referencePlayerName === 'P2' ) {
        if ( playerPoints === 'Ventaja P2' && secondPlayerPoints === 'Deuce' ) return "Ha ganado el P2"
    }
}

// const getPlayersPoint = ( firstPlayerPoints: number, secondPlayerPoints: number ): string => {
//
//
//
// }