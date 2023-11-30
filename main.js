document.addEventListener('DOMContentLoaded', function() {
    // Create the header
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Group Black's <span class="rectangular-shape">AWS</span></h1>
        <div>
            <a class="button2" href="signup.html">Signup</a>
            <a class="button1" href="#">Login</a>
        </div>
    `;
    document.body.appendChild(header);

    // Create the main section
    const main = document.createElement('main');
    main.innerHTML = `
        <section>
            <h2>Welcome To 402 Group Black's</h2>
            <h3>Automated Weather System</h3>
        </section>
    `;
    document.body.appendChild(main);

    // Create the footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2023 402 IoT Group Black's AWS. :)</p>
    `;
    document.body.appendChild(footer);
});