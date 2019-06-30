$(document).ready(function () {
    const firstDate = new Date(); //getting date/time
    // const newLocal = firstDate.getMinutes();
    $('#firstTime').click(function () {
        let firstHour = firstDate.getHours();
        let firstMin = firstDate.getMinutes();
        let firstSecond = firstDate.getSeconds();
        $('.initialTime').html(`Your start time is ${firstHour} hh: ${firstMin} mm: ${firstSecond} sec.`);

    })


    $('#secondTime').click(function () {
        const finalDate = new Date(); //getting final hours
        const finalHour = finalDate.getHours();
        const finalMin = finalDate.getMinutes();
        const finalSecond = finalDate.getSeconds();

        if ($('.initialTime').text().length === 0) {
            alert('PLEASE ENTER YOUR START TIME !!!');
        } else {
            $('.finalTime').html(`Your stop time is ${finalHour} hh: ${finalMin} mm: ${finalSecond} sec.`);
            $('.finalRound').css({ 'visibility': 'visible' });

        }

        // Changing time to hours, min, sec respectively
        const totalTimeInSecond = (finalDate.getTime() - firstDate.getTime());
        let secondsToTime = (totalTimeInSecond) => {
            let hours = Math.floor((totalTimeInSecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((totalTimeInSecond) % (1000 * 60 * 60) / (1000 * 60));
            let secs = Math.floor((totalTimeInSecond % (1000 * 60)) / 1000);
            return `${hours} HH: ${mins} MM: ${secs} SEC.`
        }


        $('.finalRound').click(function () {
            $('.actualResult').html(`Your working period is: ${secondsToTime(totalTimeInSecond)}`);
        })

    });


    // Video Background
    $('.video').YTPlayer({
        fittoBackground: true,
        videoId: '5-LyRjHlRgQ'
    });
})
