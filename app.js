let counterValue = 0;

        function toggleCounters() {
            document.getElementById('buyButton').style.display = 'none';
            document.getElementById('counters').style.display = 'block';
        }

        function increment() {
            counterValue++;
            document.getElementById('counterValue').textContent = counterValue;
        }

        function decrement() {
            if (counterValue > 0) {
                counterValue--;
                document.getElementById('counterValue').textContent = counterValue;
            }
        }