// //counter variable taken from global var
// let counterElement = document.getElementById('counter');
// //whether switch is pressed taken from global var
// let switchButton = document.getElementById('switch');
// //adds CSS class
// let switchClasses = switchButton.classList;
// //creates var for time to wait
// let countdownInterval;
// //counter var
// let count;

// //method to convert seconds to minutes
// let secToMin = function(timeInSec) {
//   let sec = timeInSec%60;
//   let min = (timeInSec-sec)/60;
//   if (sec < 10) {
//     sec = '0' + sec;
//   }
//   return min + ':' + sec;
// }

// /* Updates time elapsed:
// 	This will get the next alarm time from storage,
// 	calculate that time minus the current time,
// 	convert to seconds, then set the popup to that time.
// */
// let updateCountdown = function() {
//   chrome.storage.local.get('nextAlarmTime', function(data) {
//     //set count to right time, prevent a negative number.
//     count = Math.max(0, Math.ceil((data.nextAlarmTime - Date.now())/1000));
// 	//resets the HTML element to count, in minute units
//     counterElement.innerHTML = secToMin(count);
//   });
// };

// // Check if isPaused. If not,
// // Call the update countdown function immediately
// // Then update the countdown every 0.1s

// //see if it is paused
// chrome.storage.local.get('isPaused', function(data) {
//   if (!data.isPaused) {
//     updateCountdown();
//     countdownInterval = setInterval(updateCountdown, 100);
//     isNotPausedDisplay();
//   } 
// //if paused
// else {
//     chrome.storage.local.get('pausedCount', function(data) {
//       counterElement.innerHTML = secToMin(data.pausedCount);
//     });
//     isPausedDisplay();
//   }
// });

// //method to change status of if it is or is not paused
// let isNotPausedDisplay = function() {
//   switchClasses.add('is-not-paused');
//   switchClasses.remove('is-paused');
//   switchButton.innerHTML = 'Pause';
// };

// let isPausedDisplay = function() {
//   switchClasses.add('is-paused');
//   switchClasses.remove('is-not-paused');
//   switchButton.innerHTML = 'Resume';
// };

// // If the switch is set on, continue counting down.
// // If the switch is set to off, clear the existing alarm.
// switchButton.onclick = function() {
//   if (!switchClasses.contains('is-not-paused')) {
//     // If isPaused = false, create the new alarm here.
//     isNotPausedDisplay();
//     chrome.storage.local.set({ isPaused: false });
//     chrome.storage.local.get(['pausedCount','countdownMaxInMin'], function(data) {
//       clearAndCreateAlarm(data.pausedCount/60, data.countdownMaxInMin);
//     });
//     countdownInterval = setInterval(updateCountdown, 100);
//   } else {
//     // If isPaused = true, store the existing count to pass back to
//     // background.js, clear the existing alarm by using the date
//     // in storage.
//     isPausedDisplay();
//     chrome.storage.local.set({
//       isPaused: true,
//       pausedCount: count
//     });
//     clearInterval(countdownInterval);
//     clearAlarm();
//   }
// }

var deadline = setInterval(myTimer, 1000);
var now = new Date();
var t = deadline - now;
var second = Math.floor((t % 1000*60)/1000);
document.getElementById("button").style.display="none";

function comparison () {
    if (t == 5000){
        window.location.href = 'popup.html';
    }
}
    
function myTimer() {
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

comparison();
