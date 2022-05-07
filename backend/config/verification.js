import dotenv from "dotenv";
dotenv.config();

export const generateVerificationHtml = (name, token) => {
  return `
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">

<style>
  :root {
    --var-color-ng-gold: #9f937f;
    --var-color-ng-navy-blue: #282a38;
    --var-color-ng-beige: #f7f3ed;
    --var-color-ng-beige-d: #e7e4e0;
    --var-color-ng-grey: #ddd;
    --p-font-size: 1.2rem;

    background-color: var(--var-color-ng-beige);
    font-family: 'Lato', sans-serif;
  }
</style>

  <div id="body">
    <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/NICHEGARDEN_logo.png" alt="nichegardenbh logo" />

    <h2>Account Verification</h2>

    <div id="section">
      <p>Hi ${name},</p>
      </br>
      <p>Thanks for getting started with Nichegarden! We need a little more information to complete your registration, including confirmation of your email address. Click below to confirm your email address:</p>
      </br>
      <a href="${process.env.CLIENT_URL}/authenticate/activate/${token}">Click here to verify</a>
      </br>
      <p>If you have any problem, please paste the above URL into your web browser.</p>
      </br>
      <p>Thanks,</p>
      <p>Nichegarden support</p>
    </div>
  </div>
        `;
};

export const generateVerificationMessage = (email) => {
  return `A verification email has been sent to ${email}. You need to verify your email to continue. If you haven't received the verification email, please check your "Spam" or "Bulk Email" folder.`;
};
