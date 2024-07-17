import { Button } from "@/components/Button/Button";
import NavbarDocs from "@/components/Navbar/Navbar.docs";
import Text from "@/components/Typography/Text";
import { Fragment } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ArticleContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 64px 90px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  margin: 63px 120px 84px 120px;
  height: 1476px;
  padding: 68px 60px 60px 60px;

  @media screen and (max-width: 996px) {
    margin: 40px 20px 52px 20px;
    height: auto;
    padding: 20.28px 20.94px 52.72px 20.95px;
  }
`;

const BreadCrumb = styled.div`
  width: max-content;
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.03em;
    color: #292d32;
    display: inline-block;

    &.active-breadcrumb {
      color: ${(props) => props.theme.colors["cb-purple"]};
    }
  }

  .next {
    margin: 0 8px;
    display: block;
  }

  @media screen and (max-width: 996px) {
    a {
      font-size: 12px;

      :last-child {
        width: 107px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .next {
      margin: 0 2px;
    }
  }
`;

const ArticleTitle = styled(Text)`
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
  font-size: 58px;
  line-height: 78px;
  width: 898px;
  margin: 40px 0;

  @media screen and (max-width: 996px) {
    font-size: 24px;
    line-height: 36px;
    margin: 24px 0;
    width: 100%;
  }
`;

const ArticleSubTitle = styled(Text)`
  font-weight: 600;
  font-size: 42px;
  line-height: 63px;
  letter-spacing: -0.03em;
  color: #292d32;
  margin-bottom: 24px;

  @media screen and (max-width: 996px) {
    & {
      font-size: 24px !important;
      line-height: 36px !important;
    }
  }
`;

const ArticleText = styled.div`
  line-height: 24px;
  letter-spacing: -0.03em;

  :not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 996px) {
    :not(:last-child) {
      margin-bottom: 24px;
    }

    p {
      line-height: 18px;
      font-size: 12px;
    }
  }
`;

const ArticleHelpfulBox = styled.div`
  margin-top: 60px;
  background: #7b40f2;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  height: 222px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 3;

  ::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: url("/images/docs/helpful-l.svg") no-repeat;
  }

  ::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: url("/images/docs/helpful-r.svg") right no-repeat;
  }

  @media screen and (max-width: 996px) {
    margin-top: 45px;
  }
`;

const ThumbContainer = styled.div`
  display: flex;
  width: 297px;
  justify-content: space-between;
  height: 56px;
  margin-top: 31px;

  @media screen and (max-width: 996px) {
    width: 218px;
    height: 40px;
  }
`;

const ThumbButton = styled(Button)`
  cursor: pointer;
  width: 140px;
  height: 56px;
  padding: 10px 30px;
  justify-content: center;
  border: 1px solid #ffffff;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.03em;

  :hover {
    background: white;
    transition: 0.3s;
    color: ${(props) => props.theme.colors["cb-purple"]};
  }

  @media screen and (max-width: 996px) {
    width: 102px;
    font-size: 17.6544px;
    line-height: 26px;
    padding: 9px 20px;
    height: 40px;
  }
`;

const ArticleHelpfulTitle = styled(Text)`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  color: white;

  @media screen and (max-width: 996px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

function ArticleBySlug() {
  const location = useLocation();
  const pathnameLists = location.pathname.split("/").filter((path) => path);

  const breadcrumb = location.pathname
    .split("/")
    .filter((path) => path)
    .map((path) => {
      const splitPath = path.split("");
      const resultPath = splitPath
        .map((path, index) => (index === 0 ? path.toUpperCase() : path))
        .map((path) => (path === "-" ? (path = " ") : path));
      return resultPath.join("");
    })
    .map((name, index, array) => {
      const lastBreadcrumb = array.length - 1;
      const offsetBreadcrumb = pathnameLists.findIndex(
        (path) => path === pathnameLists[index]
      );

      const linkOfBreadCrumb = pathnameLists
        .slice(0, offsetBreadcrumb + 1)
        .join("/");

      if (index === lastBreadcrumb) {
        return (name = `<a href=/${linkOfBreadCrumb} class="active-breadcrumb">${name}</a>`);
      }

      return `<a href=/${linkOfBreadCrumb}>${name}</a>`;
    })
    .join(" <span class='next'>></span> ");

  return (
    <Fragment>
      <NavbarDocs />
      <ArticleContainer>
        <BreadCrumb dangerouslySetInnerHTML={{ __html: breadcrumb }} />
        <ArticleTitle>Amet minim mollit non deserunt ullamco</ArticleTitle>
        <ArticleText>
          <Text>
            It’s easy to begin working with HelpDesk. 3 steps are enough to
            start managing communication with customers across your entire team.
            In this article, you’ll learn how to:
          </Text>
          <br />
          <Text>1. Complete the sign up process</Text>
          <Text>2. Set up email forwarding to HelpDesk</Text>
          <Text>3. Add your teammates</Text>
        </ArticleText>
        <ArticleText>
          <ArticleSubTitle>Sign up process</ArticleSubTitle>
          <Text>
            The sign up process in HelpDesk is fast and easy. You can create an
            account using your email address or sign up with Google.
          </Text>
          <br />
          <Text>1. Complete the sign up process</Text>
          <Text>2. Go to the sign up page.</Text>
          <Text>3. Enter your business email, full name, and password.</Text>
          <Text>4. Click “Continue”.</Text>
          <Text>5. Sign up with Google</Text>
          <Text>6. Go to the sign up page.</Text>
          <Text>7. Click the “Sign up with Google” button.</Text>
          <Text>8. Choose your Google account.</Text>
          <Text>9. Complete the sign up process via Google.</Text>
        </ArticleText>
        <ArticleText>
          <ArticleSubTitle>Set up email forwarding</ArticleSubTitle>
          <Text>
            To transfer all the messages to HelpDesk, set up forwarding or
            redirection rule in your current email client or directly from your
            own server. This way, the emails that your customers send to your
            mailbox will be forwarded to HelpDesk as tickets.
          </Text>
          <br />
          <Text>
            Check our guide on how to set up email forwarding for different
            email providers.
          </Text>
        </ArticleText>
        <ArticleHelpfulBox>
          <ArticleHelpfulTitle>Was this article helpful?</ArticleHelpfulTitle>
          <ThumbContainer>
            <ThumbButton>
              <FaThumbsUp />
              Yes
            </ThumbButton>
            <ThumbButton>
              <FaThumbsDown />
              No
            </ThumbButton>
          </ThumbContainer>
        </ArticleHelpfulBox>
      </ArticleContainer>
    </Fragment>
  );
}

export default ArticleBySlug;
