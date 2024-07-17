import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import DashboardLayout from "./layouts/dashboard.layout";
import MainLayout from "./layouts/main.layout";
import DocsLayout from "./layouts/docs.layout";

import MessagesPage from "./pages/dashboard/messages/messages.page";
import DashboardPage from "./pages/dashboard/dashboard/dashboard.page";
import CampaignPage from "./pages/dashboard/campaign/campaign.page";
import HelpdeskPage from "./pages/dashboard/helpdesk/helpdesk.page";
import AnalitycPage from "./pages/dashboard/analityc/analytic.page";
import PluginsPage from "./pages/dashboard/plugin/plugin.page";
import SettingsPage from "./pages/dashboard/settings/settings.page";
import ContactPage from "./pages/dashboard/contacts/contacts.page";
import VisitorsPage from "./pages/dashboard/visitors/visitors.page";
import SettingPlugins from "./pages/dashboard/plugin/settings/settings.page";
import DetailPluginPage from "./pages/dashboard/plugin/detail/detail.page";
import NotesPage from "./pages/dashboard/notes/notes.page";
import UsersPage from "./pages/dashboard/users/users.page";

import LandingPage from "./pages/landing.page";
import Features from "./pages/features.page";
import PrivacyPolicyPage from "./pages/privacy-policy.page";
import CreateTicketPage from "./pages/create-ticket.page";

import SignupPage from "./pages/auth/signup";
import VerifyPage from "./pages/auth/verify";
import SigninPage from "./pages/auth/signin";

import GettingStartedPage from "./pages/docs/getting-started/getting-started.page";
import HomepageDocs from "./pages/docs/home/home.page";

import ComponentDraggable from "./pages/component-draggable";
import NotFound from "./pages/404.page";
import ArticleBySlug from "./pages/docs/getting-started/[article]";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const aElements = document.querySelectorAll("a");
    aElements.forEach((element) => {
      element.addEventListener("click", () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    });

    return () => {
      aElements.forEach((element) => {
        element.removeEventListener("click", () => {});
      });
    };
  }, [pathname]);

  return (
    <>
      <Helmet defaultTitle="ChatBot" />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="features" element={<Features />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="messages">
            <Route index element={<MessagesPage />} />
            <Route path=":id" element={<MessagesPage />} />
          </Route>

          <Route path="visitors" element={<VisitorsPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="campaign" element={<CampaignPage />} />
          <Route path="helpdesk" element={<HelpdeskPage />} />
          <Route path="analytics" element={<AnalitycPage />} />

          <Route path="notes">
            <Route index element={<NotesPage />} />
            <Route path=":noteId" element={<NotesPage />} />
          </Route>

          <Route path="plugins">
            <Route index element={<PluginsPage />} />
            <Route path=":name" element={<DetailPluginPage />} />
            <Route path=":name/setting" element={<SettingPlugins />} />
          </Route>

          <Route path="users" element={<UsersPage />} />

          <Route path="settings" element={<SettingsPage />}></Route>
        </Route>
        {/* End - Dashboard Route */}

        <Route path="/create-ticket" element={<CreateTicketPage />} />

        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/verify" element={<VerifyPage />} />
        <Route path="/auth/signin" element={<SigninPage />} />

        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<HomepageDocs />} />
          <Route path="getting-started">
            <Route index element={<GettingStartedPage />} />
            <Route path=":slug" element={<ArticleBySlug />} />
          </Route>
        </Route>

        <Route path="/components-draggable" element={<ComponentDraggable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
