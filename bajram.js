<script>
  function countdown() {
    var endDate = new Date("2023-06-28"); // Unesite željeni datum ovdje
    var now = new Date();
    var timeLeft = endDate - now;

    if (timeLeft < 0) {
      document.getElementById("timer").innerHTML = "Bajram šerif mubarek olsun!";
    } else {
      var days = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

      document.getElementById("timer").innerHTML ="Jos " + days + " Dana";
    }
  }

  setInterval(countdown, 1000);
</script>