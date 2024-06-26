import { Ad1, Ad2, Ad3 } from "@/components/ads/ads";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: {
    index: true,
    follow: true,
  },
};

const PolicyPage = () => {
  return (
    <section className="w-full h-full flex flex-col items-start gap-y-4 py-6 basic-container px-2 sm:px-2 md:px-4 xl:px-0">
      <ClientWrapper>
        <Ad1 />
      </ClientWrapper>
      <h1
        className={cn(
          "md:text-6xl text-center w-full font-[800]",
          poppins.className
        )}
      >
        Privacy Policy
      </h1>
      <span className="w-full text-center text-muted-foreground">
        Updated on January 24th, 2023
      </span>
      <div className="max-w-[750px] mx-auto flex flex-col items-start gap-y-4 w-full">
        <p className="w-full text-left">
          The privacy of our visitors at {process.env.NEXTAUTH_URL} is very
          important to us.
        </p>{" "}
        <p className="w-full text-left">
          As with most other websites, we collect and use the data contained in
          log files. The information in the log files include your IP (internet
          protocol) address, your ISP, the browser you use to visit our site
          (such as Internet Explorer or Firefox), the time you visited our site
          and the pages you visited throughout our site.
        </p>
        <p className="w-full text-left">
          Keep in mind that we may use cookies to store information, such as
          your personal preferences when you visit our site. This could include
          only showing you a popup once in your visit, or the ability to login
          to some of our features, such as forums. We never sell your personal
          information to third parties.
        </p>
        <p className="w-full text-left">
          We also serve third party advertisements on {process.env.NEXTAUTH_URL}{" "}
          to support our site. Some of these advertisers may use technology such
          as cookies and web beacons when they advertise on our site, which will
          also send these advertisers (such as Google through the Google AdSense
          program) information including your IP address, your ISP, the browser
          you used to visit our site. This is generally used for geo-targeting
          purposes or showing certain ads based on specific sites visited. We
          also gather audience data (such as age, gender and interest) using
          Google Analytics.
        </p>
        <p className="w-full text-left">
          Google, as a third party vendor, uses cookies to serve ads on this
          site. Google’s use of the DART cookie enables it to serve ads to your
          users based on their visit to your sites and other sites on the
          Internet. Users may opt out of the use of the DART cookie by visiting
          the Google ad and content network privacy policy.
        </p>{" "}
        <p className="w-full text-left">
          {" "}
          {process.env.NEXTAUTH_URL} also includes links to other third party
          websites. Such links are not an endorsement by{" "}
          {process.env.NEXTAUTH_URL} of those websites and/or the products or
          services offered there. Third party websites may have different
          privacy policies and {process.env.NEXTAUTH_URL} is not responsible for
          the privacy practices of those third party websites. If you click on a
          link to a third party website, {process.env.NEXTAUTH_URL} encourages
          you to check the privacy policy of that website, as it may differ
          substantially from that of this Privacy Policy.
        </p>{" "}
        <p className="w-full text-left">
          {" "}
          {process.env.NEXTAUTH_URL} reserves the right to update, amend and/or
          change this Privacy Policy at any time in its sole discretion and
          without notice. Updates to this Privacy Policy will be posted here.
          Any information {process.env.NEXTAUTH_URL} collects from you online is
          subject only to {process.env.NEXTAUTH_URL}’s most current Privacy
          Policy. You are encouraged to revisit this Privacy Policy from time to
          time in order to review any changes that have been made.{" "}
          {process.env.NEXTAUTH_URL}’s Privacy Policy was last updated on
          February 11, 2014. Your continued access and use of{" "}
          {process.env.NEXTAUTH_URL} following the posting of any such changes
          shall automatically be deemed your acceptance of the same.
        </p>
        <ClientWrapper>
          <Ad2 />
        </ClientWrapper>
        <p className="w-full text-left">
          If any portion of this Privacy Policy is deemed unlawful, void or
          unenforceable by any arbitrator, this Privacy Policy as a whole shall
          not be deemed unlawful, void or unenforceable, but only that portion
          of this Privacy Policy that is unlawful, void or unenforceable shall
          be stricken from this Privacy Policy.
        </p>
        <p className="w-full text-left">
          All covenants, agreements, representations and warranties made in this
          Privacy Policy, as may be amended by {process.env.NEXTAUTH_URL} from
          time to time, shall survive your acceptance of this Privacy Policy.
        </p>
        <p className="w-full text-left">
          The Privacy Policy and the Terms of Use represent the entire
          understanding and agreement between you and {process.env.NEXTAUTH_URL}
          regarding the subject matter of the same, and supersede all other
          previous agreements, understandings and/or representations regarding
          the same.
        </p>
        <p className="w-full text-left">
          If you have any further questions, comments, concerns or feedback
          regarding this Privacy Policy, please contact us.
        </p>
      </div>
      <ClientWrapper>
        <Ad3 />
      </ClientWrapper>
    </section>
  );
};

export default PolicyPage;
