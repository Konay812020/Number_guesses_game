const h = document.querySelector('#about');

const info = document.getElementById('info');

const input = document.querySelector('input');

const button = document.querySelector('button');

const try_info = document.getElementById('tries');

const minv = 1;

const maxv = 10;

const multiplyer = ((maxv) - (minv - 1));

const check = setInterval(checkf, 100);

let number = Math.floor(Math.random() * multiplyer) + 1;

let Max_Tries = 5;

let Tries_left = Max_Tries;

try_info.innerText = tryf(Tries_left);

h.innerText = 'The number is between ' + minv + 'and ' + maxv;

button.addEventListener('click', function() {

  if (button.innerText == 'Restart') {

    restart();

  }

  else if (Tries_left != 0) {

    if (input.value != '') {

      if (input.value == number) {

        info.innerText = 'You won';

        button.innerText = 'Restart';

        try_info.innerText = tryf(Tries_left);

      }

      else if (input.value < minv) {

        info.innerText = 'The number you entered is too less this number should be more than 0';

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

      else if (input.value > maxv) {

        info.innerText = 'The number you entered is too large this number should be less than 10';

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

      else if (input.value < number) {

        info.innerText = 'The number you entered is less than my number try entring some bigger values';

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

      else if (input.value > number) {

        info.innerText = 'The number you entered is bigger than my number try entring some less values';

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

    }

  }

});

function restart() {

  document.location.reload();

}

function tryf(x) {

  sx = String(x);

  return ('Tries left: ' + sx);

}

function checkf() {

  if (Tries_left <= 0) {

    info.innerText = 'You lose';

    button.innerText = 'Restart';

  }

}