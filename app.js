        function toggleCounters(button) {
            button.style.display = 'none';
			let counters = button.nextElementSibling;
			let counterValueElement = counters.querySelector('.counterValue');
			counterValueElement.textContent = '1';
            counters.style.display = 'inline';
        }

       function increment(button) {
            let counterValueElement = button.previousElementSibling;
            let counterValue = parseInt(counterValueElement.textContent);
            counterValue++;
            counterValueElement.textContent = counterValue;
        }
		
        function decrement(button) {
            let counterValueElement = button.nextElementSibling;
            let counterValue = parseInt(counterValueElement.textContent);
            if (counterValue > 0) {
                counterValue--;
                counterValueElement.textContent = counterValue;
            }
			
			if (counterValue === 0) {
				button.parentElement.style.display = 'none';
				let container = button.parentElement.parentElement;
				let buyButton = container.querySelector('.btn');
				buyButton.style.display = 'inline';
			}
        }