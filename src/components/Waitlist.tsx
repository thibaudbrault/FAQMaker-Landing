import Helmet from "react-helmet";

export function WaitlistMini() {
  return (
    <>
      <div
        id="getWaitlistContainer"
        data-waitlist_id="10551"
        data-widget_type="WIDGET_2"
        className="flex items-center justify-center [&_#primaryCTA]:font-bold [&_#primaryCTA]:uppercase [&_#primaryCTA]:after:content-['🡒']"
      ></div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>
    </>
  );
}

export function WaitlistFull() {
  return (
    <>
      <div
        id="getWaitlistContainer"
        data-waitlist_id="10551"
        data-widget_type="WIDGET_1"
      ></div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>
    </>
  );
}
