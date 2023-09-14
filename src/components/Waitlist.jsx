import Mailchimp from "react-mailchimp-form";

export const WaitlistComponent = () => {
  return (
    <Mailchimp
      action="https://faqmaker.us21.list-manage.com/subscribe/post?u=d73dd5725db13ea12bd64f0b4&amp;id=cbe01515c9&amp;f_id=00a3e0e6f0"
      fields={[
        {
          name: "EMAIL",
          placeholder: "Email",
          type: "email",
          required: true,
        },
      ]}
      messages={{
        sending: "Sending...",
        success: "Thank you for subscribing!",
        error: "An unexpected internal error has occurred.",
        empty: "You must write an e-mail.",
        duplicate: "Too many subscribe attempts for this email address",
        button: "Join ➜",
      }}
      className="waitlistForm"
    />
  );
};
