var totalPriceFinal = 0;  
var tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";


      
		function totalPricePlus(value,price){
			totalPriceFinal = (parseFloat(totalPriceFinal) + price).toFixed(2);
			document.getElementById('totalPrice').textContent = "Total Price: " + totalPriceFinal;
		}
		
		function totalPriceMinus(value,price){
			totalPriceFinal = (parseFloat(totalPriceFinal) - price).toFixed(2);
			document.getElementById('totalPrice').textContent = "Total Price: " + totalPriceFinal;
		}
		
		function toggleCounters(button) {
            button.style.display = 'none';
			let counters = button.nextElementSibling;
			let counterValueElement = counters.querySelector('.counterValue');
			counterValueElement.textContent = '1';
            counters.style.display = 'inline';
			console.log(button.parentNode.querySelector('.price'));
			var priceElement = button.parentNode.querySelector('.price');
			let price = parseFloat(priceElement.textContent);
			let value = parseInt(counterValueElement.textContent);
			totalPricePlus(value, price);
			
			if (!(tg.MainButton.isVisible)){
				tg.MainButton.setText(totalPriceFinal.toString());
				tg.MainButton.show();
			}
			else {
				tg.MainButton.setText(totalPriceFinal.toString());
			}
			
        }

       function increment(button) {
            let counterValueElement = button.previousElementSibling;
            let counterValue = parseInt(counterValueElement.textContent);
            counterValue++;
            counterValueElement.textContent = counterValue;
			let priceElement = (button.parentNode).parentNode.querySelector('.price');
			let price = parseFloat(priceElement.textContent);
			totalPricePlus(counterValue,price);
			tg.MainButton.setText("Hello1");
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
				
				let allCounterValues = document.querySelectorAll('.counterValue');
				let totalItems = Array.from(allCounterValues)
					.map(element => parseInt(element.textContent))
					.reduce((total, value) => total + value, 0);
				if (totalItems === 0) {
					tg.MainButton.setText("0");
					tg.MainButton.hide();
				}
			}
			
			let priceElement = (button.parentNode).parentNode.querySelector('.price');
			let price = parseFloat(priceElement.textContent);
			totalPriceMinus(counterValue, price);
        }
		
Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(totalPriceFinal);
});
		
		
		
		
