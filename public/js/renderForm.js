const formContainer = document.querySelectorAll(".formContainer");

const loginForm = `
    <div class="formHeader">
    <div class="closeModal hidden">x</div>
        <div class="imageContainer formImage">
            <img src="/assets/logo.png" alt="weperch_logo">
        </div>
        <h4 class="headingTextTop">Welcome to Weperch Marketplace. 
        
        </h4>
        <h6 class="headingTextBottom">Go Live. Shop Live. Do More.</h6>
    </div>
    <form action="#" enctype="multipart/form-data">
        <div class="formControlContainer">
            <label for="Fullname">Username / Email</label>
            <input type="text" id="username" name="username" class="formControl" placeholder="Username" required>
        </div>
        <div class="formControlContainer">
            <label for="Fullname">Password</label>
            <input type="password" name="password" class="formControl" placeholder="Password" required>
        </div>
        <div class="formControlContainer buttonsContainer">
            <div class="submitButton">
                <button>Login</button>
            </div>
        </div>
        <div class="formControlContainer">
            <label for="signup">Don't have an account? <span class="signupText">Signup</span></label>
        </div>
    </form>
    <div class="formFooter">
        <a href="#">Create an account for your brand.</a>
    </div>
`;

const signupForm = `
    <div class="formHeader">
    <div class="closeModal hidden">x</div>
        <div class="imageContainer formImage">
            <img src="/assets/logo.png" alt="weperch_logo">
        </div>
        <h4 class="headingTextTop">Welcome to Weperch Marketplace. 
            
        </h4>
        <h6 class="headingTextBottom">Go Live. Shop Live. Do More.</h6>
    </div>
    <form action="#" enctype="multipart/form-data">
        <div class="formControlContainer">
            <label for="Fullname">Username</label>
            <input type="text" id="username" name="username" class="formControl" placeholder="Username" required>
        </div>
        <div class="formControlContainer">
            <label for="Fullname">Email</label>
            <input type="email" name="email" class="formControl" placeholder="Email" required>
        </div>
        <div class="formControlContainer">
            <label for="Fullname">Firstname</label>
            <input type="text" name="firstname" class="formControl" placeholder="Firstname" required>
        </div>
        <div class="formControlContainer">
            <label for="Fullname">Lastname</label>
            <input type="text" name="lastname" class="formControl" placeholder="Lastname" required>
        </div>
        <div class="formControlContainer">
            <label for="Fullname">Password</label>
            <input type="password" name="password" class="formControl" placeholder="Password" required>
        </div>
        <div class="formControlContainer buttonsContainer">
            <div class="submitButton">
                <button>Signup</button>
            </div>
        </div>
        <div class="formControlContainer">
            <label for="login">Already have an account? <span class="loginText">Login</span></label>
        </div>
    </form>
    <div class="formFooter">
        <a href="#">Create an account for your brand.</a>
    </div>
`;

// Function to activate the login form
function ActivateLogin() {
    const loginText = document.querySelectorAll(".loginText");
    
    if (loginText) {
        loginText.forEach(text =>{
        text.addEventListener("click", function() {
           

            formContainer.forEach(container =>{
                container.innerHTML = loginForm;
                ActivateSignup(); // Re-activate signup after the login form is rendered
            })
            
            
        });
    })
    }
}

// Function to activate the signup form
function ActivateSignup() {
    const signupText = document.querySelectorAll(".signupText");
    const closeModal = document.querySelector(".closeModal")
    if (signupText) {
        signupText.forEach(text => {
            text.addEventListener("click", function() {
                formContainer.forEach(container =>{
                    container.innerHTML = signupForm;
                    ActivateLogin();
                })
                // Re-activate login after the signup form is rendered
            });
        });
    }
}

// Use MutationObserver to detect changes in the formContainer and re-activate the event listeners
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        // Re-attach listeners when the content changes
        ActivateLogin();
        ActivateSignup();
    });
});

// Start observing the formContainer for changes
formContainer.forEach(container =>{
    observer.observe(container, { childList: true, subtree: true });
})


// Initialize the default view with the login form and activate listeners
formContainer.forEach(container =>{
    container.innerHTML = signupForm;
})
ActivateLogin();
