import { Fragment } from "react";
import styled from "styled-components";

import HeaderMain from "@/components/Header/Header-Main";
import Text from "@/components/Typography/Text";
import { Helmet } from "react-helmet-async";

const HTMLTag = styled.div`
  line-height: 32px;
  padding: 0 84px;

  .title {
    color: #081131;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize["lg"]};
    margin-bottom: 20px;
  }

  .sub-title {
    color: #081131;
    font-weight: bold;
  }

  @media screen and (max-width: 996px) {
    padding: 50px 0 0 0;

    .title,
    .sub-title {
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

const TextsWrapper = styled.div`
  font-size: ${(props) => props.theme.fontSize["lg"]};

  p {
    font-size: ${(props) => props.theme.fontSize["lg"]};
  }

  :not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["sm"]};

    p {
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <HeaderMain
        title="Privacy Policy"
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      />
      <HTMLTag>
        <TextsWrapper>
          <Text className="title">
            The information collected by automated means for our own business
            purposes includes the following:
          </Text>
          <Text>
            - Details about the devices that are used to access our website
            (such as your IP address, the type of operating system you are
            using, and the web browser you are. using);
          </Text>
          <Text>- Dates and times of visits to, and use of, our websites;</Text>
          <Text>
            - Information about how our websites are being used (such as the
            content that is being viewed on our websites, how Customers and
            Website Visitors navigate between - web pages on our websites, which
            actions Customers and Website Visitors take on our websites, and the
            data and time Customers and Website Visitors access our. websites);
          </Text>
          <Text>- URLs that refer visitors to our websites;</Text>
          <Text>- Search terms used to reach our websites.</Text>
        </TextsWrapper>
        <TextsWrapper>
          <Text className="title">
            The information collected by automated means on behalf of our
            Customers may include the following:
          </Text>
          <Text>
            - Details about the devices that are used to access our Customers’
            website (such as End Users’ IP address, the type of operating system
            End Users are using, and the - - web browser End Users are using);
          </Text>
          <Text>
            - Dates and times of visits to, and use of, our Customers’ websites;
          </Text>
          <Text>
            - Information about how our Customers’ websites are being used (such
            as the content that is being viewed on our Customers’ websites, how
            End Users navigate - between web pages on the Customers’ websites,
            which actions Customers and Website Visitors take on the Customers’
            websites, and the data and time End Users access Customers’
            websites);Information we collect Visiting PowerChap.co
          </Text>
          <Text>- URLs that refer visitors to our websites;</Text>
          <Text>- Search terms used to reach our websites.</Text>
        </TextsWrapper>
        <TextsWrapper as="p">
          We collect associated information such as email, phone number and
          personal information given to us during sign up/Shopify app download.
          This information is collected after accepting our terms and privacy
          policy. We use Google Analytics and facebook pixel and cookies to
          analyze our site's performance. These services help us track
          approximate location, browser information, device information and
          language used. These are used to give insights about visitors to
          powerchap.co
        </TextsWrapper>
        <TextsWrapper as="p">
          Your privacy and your End Users’ privacy is important, so PowerChap
          has created the following Privacy Policy to let you know what
          information we collect when you visit our website and/or when your End
          Users engage with the PowerChap Platform, why we collect that
          information, and how, it is used (if at all). Our Privacy Policy is
          our commitment to you that we provide not only the highest quality
          services and products, but that we understand that you expect us to
          safeguard the personal and business information that we collect. All
          of our employees that have access to and/or are associated with the
          processing of personal information are obliged to respect the
          confidentiality of your and your End Users’ personal information. To
          this end, our Privacy Policy allows you to make an informed decision
          regarding your usage of the tools and services that we provide.
        </TextsWrapper>
        <TextsWrapper as="p">
          The terms “Company,” “we,” “us,” and “our” refer to PowerChap
          (“PowerChap”). The terms “you,” “your,” “yours” and “Customer” refers
          to the business entities and individuals who visit the PowerChap
          Website and/or use the PowerChap platform. The term “End User” refers
          to an individual that shops on one of our Customers’ online stores.
          This Privacy Policy is governed by our Terms of Service. By using this
          website and/or the PowerChap Platform or PowerChap’s Services, you
          consent to the data practices described herein. As technology and
          circumstances change, we will continue to update, modify and enhance
          this Privacy Policy on this webpage for your benefit. It is your
          responsibility to review this Privacy Policy frequently and remain
          informed about any changes to it, so we encourage you to visit this
          page often.
        </TextsWrapper>
        <TextsWrapper as="p">
          The Privacy Policy herein will proceed in three different sections.
          Section 1 pertains to the use and collection of your data on the
          PowerChap Website (https://www.PowerChap.co ) and its sub-domains.
          Section 2 pertains to the use and collection of your End Users’ data
          on PowerChap’s Platform as it is used by you, our Customer. Section 3
          explains certain policies that pertain to both the use and collection
          of data on the PowerChap Website and the PowerChap Platform.
        </TextsWrapper>
        <TextsWrapper>
          <Text className="title">
            USE AND COLLECTION OF DATA ON OR THROUGH THE PowerChap WEBSITE
          </Text>
          <Text className="sub-title">Cookies</Text>
          <Text>
            “Cookies” are small text files that websites send to a visitor’s
            computer or other Internet-connected device to uniquely identify the
            visitor’s browser or to store information or settings in the
            visitor’s browser. These small programs enhance your use of the
            Internet, in general, and, specifically, we use cookies to enhance
            your usage of our functions.
          </Text>
          <TextsWrapper as="p">
            Please note that we employ the use of cookies and that, currently,
            we, our service providers, and our business partners may collect
            certain information about the use of the PowerChap Website and
            third-party websites using cookies (along with web beacons and other
            technologies). Cookies may also provide us and third parties with
            Recording Session information, show us visitor preferences regarding
            return visits to our website, help us manage subscription or private
            areas on our website, record user-specific tracking or aggregate
            tracking information of visitors, and deliver user-customized
            content based on your specific information (e.g., internet protocol
            (“IP”) address, internet service provider (“ISP”), referring/exit
            pages, date/time stamp, clickstream data, browser type, screen type,
            resolution, operating system, etc.). Likewise, as part of our
            services, we may offer our Customers the ability to use cookies and
            similar technologies on their websites or in the SMS messages they
            send to their End Users; and, if a Customer does so, we collect
            information on the Customer’s behalf.
          </TextsWrapper>
          <TextsWrapper as="p">
            We also employ a software technology called clear gifs (a.k.a. Web
            Beacons), tags, and scripts that help us better manage the content
            on our website by informing us what content is effective. Clear gifs
            are tiny graphics with a unique identifier, similar in function to
            cookies, and are used to track the online movements of website
            users, such as yourself. In contrast to cookies, which are stored on
            a user’s computer hard drive, clear gifs are embedded invisibly on
            webpages and are about the size of the period at the end of this
            sentence. We do not tie the information gathered by clear gifs to
            our customers’ personal information.
          </TextsWrapper>
          <TextsWrapper as="p">
            Cookies can be disabled, however, if you turn off your cookies you
            may find your enjoyment of the Internet, and our website, to be
            reduced or impaired. You may turn off your cookies by adjusting the
            appropriate setting on your browser. Please consult the HELP menu of
            your browser to learn how to turn your cookies off.
          </TextsWrapper>
          <TextsWrapper as="p">
            The information we collect by automated means varies based on
            whether we are collecting information for our own business purposes
            or whether we are collecting information from or on behalf of our
            Customers to provide our services.
          </TextsWrapper>

          <TextsWrapper>
            <Text className="sub-title">Data collected </Text>
            <TextsWrapper as="p">
              The information collected by automated means for our own business
              purposes includes the following:
            </TextsWrapper>

            <TextsWrapper>
              <Text>
                - Details about the devices that are used to access our website
                (such as your IP address, the type of operating system you are
                using, and the web browser you are. using);
              </Text>
              <Text>
                - Dates and times of visits to, and use of, our websites;
              </Text>
              <Text>
                - Information about how our websites are being used (such as the
                content that is being viewed on our websites, how Customers and
                Website Visitors navigate between - webpages on our websites,
                which actions Customers and Website Visitors take on our
                websites, and the data and time Customers and Website Visitors
                access our. websites);
              </Text>
              <Text>- URLs that refer visitors to our websites;</Text>
              <Text>- Search terms used to reach our websites.</Text>
              <Text>
                The information collected by automated means on behalf of our
                Customers may include the following:
              </Text>
            </TextsWrapper>

            <TextsWrapper>
              <Text>
                - Details about the devices that are used to access our
                Customers’ website (such as End Users’ IP address, the type of
                operating system End Users are using, and the - - web browser
                End Users are using);
              </Text>
              <Text>
                - Dates and times of visits to, and use of, our Customers’
                websites;
              </Text>
              <Text>
                - Information about how our Customers’ websites are being used
                (such as the content that is being viewed on our Customers’
                websites, how End Users navigate - between webpages on the
                Customers’ websites, which actions Customers and Website
                Visitors take on the Customers’ websites, and the data and time
                End Users access Customers’ websites);
              </Text>
              <Text>
                - URLs that refer End Users to our Customers’ websites;
              </Text>
              <Text>- Search terms used to reach our Customers’ websites.</Text>
            </TextsWrapper>
          </TextsWrapper>
        </TextsWrapper>
      </HTMLTag>
    </Fragment>
  );
};

export default PrivacyPolicy;
