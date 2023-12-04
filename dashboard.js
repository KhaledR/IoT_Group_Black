document.addEventListener('DOMContentLoaded', function() {
    // Create the header
    const header = document.createElement('header');
    header.innerHTML = `
        <h1 style="text-align: center; font-size: 24px; font-weight: bold;">
            Group Black's <span class="rectangular-shape">AWS</span>
        </h1>
        <div style="text-align: center;">
            <a class="button2" href="dashboard.html">Home</a>
            <a class="button1" href="frontpage.html">Logout</a>
        </div>
    `;
    document.body.appendChild(header);

    // Create the navigation
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <a class="nav-link" href="#" id="currentWeatherLink">Current Weather</a>
        <a class="nav-link" href="#" id="forecastLink">Forecast</a>
        <a class="nav-link" href="#" id="historicalDataLink">Historical Data</a>
        <a class="nav-link" href="# id="settingsLink">Settings</a>
        <a class="nav-link" href="#">Help</a>
    `;
    document.body.appendChild(nav);

    // Create the main section
    const main = document.createElement('main');
    main.innerHTML = `
        <h1 style="text-align: center; font-size: 42px; font-weight: bold;">
            Welcome to the Group Black's AWS Dashboard
        </h1>
        <h3 style="text-align: center; ">Please select a tab to view</h3>
    `;
    document.body.appendChild(main);

    // Create the footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p style="text-align: center; font-weight: bold;">
            &copy; 2023 402 IoT Group Black's AWS. :)
        </p>
    `;
    document.body.appendChild(footer);

    
    const currentWeatherLink = document.getElementById('currentWeatherLink');
    currentWeatherLink.addEventListener('click', handleCurrentWeatherClick);
	
	const forecastLink = document.getElementById('forecastLink');
    forecastLink.addEventListener('click', handleForecastClick);
	
	const historicalDataLink = document.getElementById('historicalDataLink');
    historicalDataLink.addEventListener('click', handleHistoricalClick);
	
	const settingsLink = document.getElementById('settingsLink');
    settingsLink.addEventListener('click', handleSettingsClick);


    // Set the body font size
    document.body.style.fontSize = '18px';
});

function handleCurrentWeatherClick(event) {
    event.preventDefault();

    // Your logic for handling the "Current Weather" link click goes here
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1 style="text-align: center; font-size: 20px; font-weight: bold;">
            Current Weather Information
        </h1>
        <h2 style="text-align: center; font-size: 18px; margin-bottom: 20px;" id="currentDate"></h2>
        <canvas id="weatherChart" style="max-width: 1080px; margin: 0 auto;"></canvas>
    `;

    // Add Chart.js script dynamically
    const chartScript = document.createElement('script');
    chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    chartScript.defer = true;
    chartScript.async = true;
    chartScript.onload = function () {
        // Your Chart.js logic goes here
        const ctx = document.getElementById('weatherChart').getContext('2d');
        const currentDateElement = document.getElementById('currentDate');
        const now = new Date();
        currentDateElement.textContent = `Date: ${now.toDateString()}`;
	
        const hours = Array.from({ length: 24 }, (_, i) => {
            const formattedHour = (i % 12 || 12) + ':00';
            return i < 12 ? formattedHour + ' AM' : formattedHour + ' PM';
        });
        const data = {
            labels: hours,
            datasets: [{
                label: 'Temperature (°C)',
                data: [22, 24, 26, 28, 30, 32, 34, 32, 30, 28, 26, 24], // Replace with your actual temperature data
                backgroundColor: 'rgba(255, 145, 77, 0.2)',
                borderColor: 'rgba(255, 145, 77, 1)',
                borderWidth: 1
            }, {
                label: 'Humidity',
                data: [70, 63, 80, 28, 30, 32, 34, 32, 30, 28, 26, 24], // Replace with your actual temperature data
                backgroundColor: 'rgba(40, 124, 40, 0.2)',
                borderColor: 'rgba(40, 124, 40, 1)',
                borderWidth: 1
            }]
        };

		
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
        const weatherChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    };
    document.head.appendChild(chartScript);
}

function handleForecastClick(event) {
    event.preventDefault();

    // Your logic for handling the "Forecast" link click goes here
    // For example, you can update the main section content dynamically
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1 style="text-align: center; font-size: 20px; font-weight: bold;">
            Weather Forecast Information
        </h1>
        <div id="forecastContainer" style="max-width: 2000px; margin: 0 auto;"></div>
    `;

    // Simulated forecast data (replace this with real data from an API)
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const today = new Date();
    const startDay = today.getDay(); // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)

    // Calculate the start date for the forecast (yesterday if today is Sunday, else today)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (startDay === 0 ? 1 : 0));

    // Create elements for each day in the forecast
    const forecastContainer = document.getElementById('forecastContainer');
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dayData = {
            day: daysOfWeek[i],
            temperature: 24, // Replace with actual temperature data
            alert: 'No alerts' // Replace with actual alert data
        };

        const dayElement = document.createElement('div');
        dayElement.innerHTML = `
            <h3 style="text-align: center;">${dayData.day}</h3>
            <p style="text-align: center;">Date: ${currentDate.toDateString()}</p>
            <p style="text-align: center;">Temperature: ${dayData.temperature}°C</p>
            <p style="text-align: center;">Alerts: ${dayData.alert}</p>
        `;
        forecastContainer.appendChild(dayElement);
}
}

function handleHistoricalClick(event) {
    event.preventDefault();
    // Your logic for handling the "Historical Data" link click goes here
    // For example, you can update the main section content dynamically
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1 style="text-align: center; font-size: 20px; font-weight: bold;">
            Historical Weather Data
        </h1>
        <div id="historicalDataContainer" style="max-width: 2000px; margin: 0 auto;">
            <!-- Your historical data content goes here -->
        </div>
    `;

    // Simulated historical data (replace this with real data from an API)
    const historicalData = [
        { date: '2023-01-01', temperature: 22, humidity: 70 },
        { date: '2023-01-02', temperature: 24, humidity: 63 },
        { date: '2023-01-03', temperature: 26, humidity: 80 },
        // Add more historical data as needed
    ];

     //Create elements for each historical entry
    const historicalDataContainer = document.getElementById('historicalDataContainer');
    historicalData.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.innerHTML = `
            <h3 style="text-align: center;">Date: ${entry.date}</h3>
            <p style="text-align: center;">Temperature: ${entry.temperature}°C</p>
            <p style="text-align: center;">Humidity: ${entry.humidity}%</p>
        `;
        historicalDataContainer.appendChild(entryElement);
    });

}
function handleSettingsClick(event) {
    event.preventDefault();
	console.log("Handle Settings Click");
    // Your logic for handling the "Settings" link click goes here
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1 style="text-align: center; font-size: 20px; font-weight: bold;">
            Settings
        </h1>
        <p style="text-align: center;">Customize your dashboard settings here.</p>
        <!-- Add more settings content as needed -->
    `;
    // Add additional logic for settings handling
	}



