document.addEventListener('DOMContentLoaded', function() {
    // Register Form
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // alert(" regestinon clicked")
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        console.log(username, email )
        fetch('http://localhost/PAAS_LAB/backend/api/auth.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'register',
                username: username,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.message === "User registered successfully.") {
                window.location.href = 'dashboard.html';
            }
        });
    });

    // Login Form
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(email,password)

        fetch('http://localhost/PAAS_LAB/backend/api/auth.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'login',
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Login successful.") {
                localStorage.setItem('userId', data.user_id);
                window.location.href = 'dashboard.html';
            } else {
                alert(data.message);
            }
        });
    });

    // Upload Form
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const userId = localStorage.getItem('userId');
            const siteName = document.getElementById('siteName').value;
            const files = document.getElementById('siteFiles').files;

            const formData = new FormData();
            formData.append('user_id', userId);
            formData.append('siteName', siteName);
            for (let i = 0; i < files.length; i++) {
                formData.append('files[]', files[i]);
            }

            fetch('http://localhost/PAAS_LAB/backend/api/upload.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                loadSites();
            });
        });
    }

    // Load User Sites
    function loadSites() {
        const userId = localStorage.getItem('userId');
        fetch(`http://localhost/PAAS_LAB/backend/api/sites.php?user_id=${userId}`)
        .then(response => response.json())
        .then(sites => {
            const siteList = document.getElementById('siteList');
            if (siteList) {
                siteList.innerHTML = '';
                sites.forEach(site => {
                    siteList.innerHTML += `<li><a href="${site.url}">${site.site_name}</a></li>`;
                });
            }
        });
    }

    // Load sites on dashboard
    const siteList = document.getElementById('siteList');
    if (siteList) {
        loadSites();
    }
});
