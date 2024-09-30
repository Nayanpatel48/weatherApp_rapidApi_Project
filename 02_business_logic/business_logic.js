//*uncomment star statements to make it work
//demonstrates how to use JavaScript to fetch weather data from an API and display it on a webpage.

//code inside the function will be executed as soon as the webpage finishes loading.
//*window.onload = function() {

    //*const data = null;

    //*const xhr = new XMLHttpRequest();
    //object (xhr) is created to make an HTTP GET request to the Yahoo Weather API

    //*xhr.withCredentials = true;
    //property is set to true because the API likely uses cookies for authentication.

    //An event listener is added to the xhr object using addEventListener(). 
    //This listener function will be called whenever the state of the request changes.
    //*xhr.addEventListener('readystatechange', function () {

        //If the readyState is DONE, it means that the request has completed and the response is available.
    	//*if (this.readyState === this.DONE) {

    		//*const response = JSON.parse(this.responseText);
    		//Parse the JSON-formatted response data into a JavaScript object.

            // Access temperature after parsing
            //*const temperature = response.current_observation.condition.temperature;

            //used below statement to know the data type of temprature variable
            //console.log(typeof(temperature)) number
            //humidity, pressure, text are also data of type number

            // Access humidity, pressure, text after parsing
            //*const humidity = response.current_observation.condition.humidity;
            //*const pressure = response.current_observation.condition.pressure;
            //*const text = response.current_observation.condition.text;
            //console.log("Temperature:", temperature); 55 // Print the temperature value
        
    		// // Update HTML elements
    		// document.getElementById('temprature').innerText = temperature;
    		// document.getElementById('humidity').innerText = humidity;
    		// document.getElementById('pressure').innerText = pressure;
            // document.getElementById('text').innerText = text;

            //dummy values
    		document.getElementById('temprature').innerText = 99;
    		document.getElementById('humidity').innerText = 89;
    		document.getElementById('pressure').innerText = 90;
            document.getElementById('text').innerText = 89;
        //*}
    //*});

    //*xhr.open('GET', 'https://yahoo-weather5.p.rapidapi.com/weather?location=london&format=json&u=f');
    //xhr.open() method is called to specify the HTTP method (GET) and the URL of the API endpoint.

    //*xhr.setRequestHeader('x-rapidapi-key', 'ea145a5c5cmshcb7851e3501e854p1b3259jsn3a3d65f508e4');
    //This header is used to authenticate with the Yahoo Weather API. 
    //It ensures that only authorized users or applications can access and interact with the API's resources.

    //*xhr.setRequestHeader('x-rapidapi-host', 'yahoo-weather5.p.rapidapi.com');
    //This header specifies the hostname of the API.
    //It specifies the server or service where the API is located.

    //*xhr.send(data);
//*};