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
        <a class="nav-link" href="#">Forecast</a>
        <a class="nav-link" href="#">Historical Data</a>
        <a class="nav-link" href="#">Settings</a>
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

    // Add an event listener for the "Current Weather" link
    const currentWeatherLink = document.getElementById('currentWeatherLink');
    currentWeatherLink.addEventListener('click', handleCurrentWeatherClick);

    // Set the body font size
    document.body.style.fontSize = '18px';
});

function handleCurrentWeatherClick(event) {
    event.preventDefault();

    // Your logic for handling the "Current Weather" link click goes here
    // For example, you can update the main section content dynamically
    const main = document.querySelector('main');
    main.innerHTML = `
        <h1 style="text-align: center; font-size: 20px; font-weight: bold;">
            Current Weather Information
        </h1>
        <div id="map" style="height: 300px; margin-bottom: 20px;"></div>
        <canvas id="temperatureChart" style="max-width: 600px; margin: 0 auto;"></canvas>
    `;

    // Add Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Add Chart.js script dynamically
    const chartScript = document.createElement('script');
    chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    chartScript.defer = true;
    chartScript.async = true;
    chartScript.onload = function () {
        // Your Chart.js logic goes here
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [20, 22, 25, 28, 30],
                backgroundColor: 'rgba(255, 145, 77, 0.2)',
                borderColor: 'rgba(255, 145, 77, 1)',
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
        const temperatureChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    };
    document.head.appendChild(chartScript);
}

// Function to initialize Google Map
function initMap() {
    const bulacanLocation = { lat: 14.7943, lng: 120.8790 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: bulacanLocation,
        zoom: 10
    });
    const marker = new google.maps.Marker({
        position: bulacanLocation,
        map: map,
        title: 'Bulacan, Philippines'
    });
}


