const sgMail = require("@sendgrid/mail");

module.exports = ({
  apiKey,
  from,
  passwordResetEmailTemplate,
  verificationEmailTemplate
}) => {
  if (!apiKey || !from)
    throw "SendGridAdapter requires an API Key && from Email Address";
  if (!passwordResetEmailTemplate)
    throw "SendGridAdapter requires password reset email template";
  if (!verificationEmailTemplate)
    throw "SendGridAdapter requires verification email template";

  sgMail.setApiKey(apiKey);

  const sendMail = ({
    to,
    subject,
    templateId,
    dynamic_template_data,
    html
  }) => {
    const mail = {
      from,
      to,
      subject,
      html,
      templateId,
      dynamic_template_data
    };
    return sgMail.send(mail);
  };

  const sendPasswordResetEmail = ({ link, appName, user }) => {
    return sendMail({
      to: user.get("email") || user.get("username"),
      templateId: passwordResetEmailTemplate,
      dynamic_template_data: {
        link,
        appName,
        email: user.get("email") || user.get("username")
      }
    });
  };

  const sendVerificationEmail = ({ link, appName, user }) => {
    return sendMail({
      to: user.get("email") || user.get("username"),
      templateId: verificationEmailTemplate,
      dynamic_template_data: {
        link,
        appName,
        email: user.get("email") || user.get("username")
      }
    });
  };

  return {
    sendMail,
    sendVerificationEmail,
    sendPasswordResetEmail
  };
};
