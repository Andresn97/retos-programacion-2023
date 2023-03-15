
const tenisPoints = ['Love', '15', '30', '40', 'Deuce'];

const pointsSecuence = ( winnersSecuence: string[] ): void => {

    let firstPlayerPoints: number = 0;
    let secondPlayerPoints: number = 0;
    let isFinished: boolean = false;

    winnersSecuence.forEach(winner => {

        if (!isFinished) {

            (winner === 'P1')
                ? firstPlayerPoints++
                : secondPlayerPoints++

            if (firstPlayerPoints == secondPlayerPoints && firstPlayerPoints == 3)
                console.log(tenisPoints[4])

            if (firstPlayerPoints <= 3 && secondPlayerPoints <= 3) {
                if (firstPlayerPoints != secondPlayerPoints)
                    console.log(`${tenisPoints[firstPlayerPoints]} - ${tenisPoints[secondPlayerPoints]}`)
            }
            if (firstPlayerPoints >= 4 || secondPlayerPoints >= 4) {

                if (firstPlayerPoints - 1 == secondPlayerPoints) {
                    console.log('Ventaja P1');
                } else if (secondPlayerPoints - 1 == firstPlayerPoints) {
                    console.log('Ventaja P2');
                } else {
                    if (firstPlayerPoints > secondPlayerPoints) console.log('Ha ganado el P1');
                    else if (secondPlayerPoints > firstPlayerPoints) console.log('Ha ganado el P2');
                    else console.log(tenisPoints[4]);
                }

            }

        }

    });
}

pointsSecuence(["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P2", 'P1', 'P2', 'P1', 'P1']);

