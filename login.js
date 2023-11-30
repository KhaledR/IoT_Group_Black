document.addEventListener('DOMContentLoaded', function() {
    // Create the header
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Group Black's <span class="rectangular-shape">AWS</span></h1>
        <div>
            <a class="button1" href="frontpage.html">Back</a>
        </div>
    `;
    document.body.appendChild(header);

    // Create the main section
    const main = document.createElement('main');
    main.innerHTML = `
        <form>
            <h2>Enter Username and Password</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
        </form>
    `;
    document.body.appendChild(main);

    // Create the footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2023 402 IoT Group Black's AWS. :)</p>
    `;
    document.body.appendChild(footer);
});