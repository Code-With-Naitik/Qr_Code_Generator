import React, { Suspense, lazy, useEffect, useState } from "react";
import QRLoader from "./Components/QRLoader.jsx";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AdminProvider, useAdmin } from "./admin/AdminContext.jsx";
import Navbar_1 from "./Components/Navbar_1.jsx";
import BottomToTop from "./Components/BottomToTop.jsx";
import { sendPageView } from "./appEvents";
import "./App.scss";
import "./css/PlansAndPayments.scss";
import "./css/BottomToTop.scss";
import "./css/Home_Pg.scss";
import "./css/Navbar.scss";
import "./css/Blog.scss";
import "./css/Blog_News.scss";
// import Footer from "./Components/Footer.jsx";

// Lazy-loaded components
const Home_Main = lazy(() => import("./Components/Home_Page.jsx"));
const Privacy = lazy(() => import("./Components/Privacy.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Terms = lazy(() => import("./Components/Terms.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));
const Blog = lazy(() => import("./Components/Blog.jsx"));
const Blog_News = lazy(() => import("./Components/Blog_News.jsx"));

// Core Landing Pages (Stay in Qr_Landing_Pages)
const WiFiQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/WiFiQRCodeLandingPage.jsx"));
const MenuQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/MenuQRCodeLandingPage.jsx"));
const BusinessCardQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/BusinessCardQRCodeLandingPage.jsx"));
const InstagramQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/InstagramQRCodeLandingPage.jsx"));
const YouTubeQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/YouTubeQRCodeLandingPage.jsx"));
const PDFQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/PDFQRCodeLandingPage.jsx"));
const LocationQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/LocationQRCodeLandingPage.jsx"));
const WhatsAppQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/WhatsAppQRCodeLandingPage.jsx"));
const EventTicketQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/EventTicketQRCodeLandingPage.jsx"));
const AppStoreQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/AppStoreQRCodeLandingPage.jsx"));

// Business & Marketing
const GoogleReviewQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/GoogleReviewQRCodeLandingPage.jsx"));
const SmallBusinessQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/SmallBusinessQRCodeLandingPage.jsx"));
const MarketingCampaignQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/MarketingCampaignQRCodeLandingPage.jsx"));
const ProductPackagingQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/ProductPackagingQRCodeLandingPage.jsx"));
const FlyersQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/FlyersQRCodeLandingPage.jsx"));
const BrochuresQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/BrochuresQRCodeLandingPage.jsx"));
const RealEstateQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/RealEstateQRCodeLandingPage.jsx"));
const BusinessWebsiteQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/BusinessWebsiteQRCodeLandingPage.jsx"));
const EmailSignatureQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/EmailSignatureQRCodeLandingPage.jsx"));
const LeadGenerationQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/LeadGenerationQRCodeLandingPage.jsx"));

// Restaurant & Hospitality
const DigitalMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/DigitalMenuQRCodeLandingPage.jsx"));
const CafeMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/CafeMenuQRCodeLandingPage.jsx"));
const RestaurantOrderingQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/RestaurantOrderingQRCodeLandingPage.jsx"));
const ContactlessOrderingQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/ContactlessOrderingQRCodeLandingPage.jsx"));
const TableMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/TableMenuQRCodeLandingPage.jsx"));
const BarMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/BarMenuQRCodeLandingPage.jsx"));
const HotelServicesQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/HotelServicesQRCodeLandingPage.jsx"));
const RoomServiceQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/RoomServiceQRCodeLandingPage.jsx"));
const FoodDeliveryMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/FoodDeliveryMenuQRCodeLandingPage.jsx"));
const TakeawayMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/TakeawayMenuQRCodeLandingPage.jsx"));

// Social Media
const TikTokQRCodeLandingPage = lazy(() => import("./Components/Social Media/TikTokQRCodeLandingPage.jsx"));
const TwitterQRCodeLandingPage = lazy(() => import("./Components/Social Media/TwitterQRCodeLandingPage.jsx"));
const PinterestQRCodeLandingPage = lazy(() => import("./Components/Social Media/PinterestQRCodeLandingPage.jsx"));
const SnapchatQRCodeLandingPage = lazy(() => import("./Components/Social Media/SnapchatQRCodeLandingPage.jsx"));
const LinktreeQRCodeLandingPage = lazy(() => import("./Components/Social Media/LinktreeQRCodeLandingPage.jsx"));
const SocialMediaProfileQRCodeLandingPage = lazy(() => import("./Components/Social Media/SocialMediaProfileQRCodeLandingPage.jsx"));
const SocialMediaLinksQRCodeLandingPage = lazy(() => import("./Components/Social Media/SocialMediaLinksQRCodeLandingPage.jsx"));
const YouTubeChannelQRCodeLandingPage = lazy(() => import("./Components/Social Media/YouTubeChannelQRCodeLandingPage.jsx"));
const InstagramProfileQRCodeLandingPage = lazy(() => import("./Components/Social Media/InstagramProfileQRCodeLandingPage.jsx"));
const FacebookPageQRCodeLandingPage = lazy(() => import("./Components/Social Media/FacebookPageQRCodeLandingPage.jsx"));

// Payments & FinTech
const PayPalPaymentQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/PayPalPaymentQRCodeLandingPage.jsx"));
const StripePaymentQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/StripePaymentQRCodeLandingPage.jsx"));
const GooglePayQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/GooglePayQRCodeLandingPage.jsx"));
const ApplePayQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/ApplePayQRCodeLandingPage.jsx"));
const OnlinePaymentsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/OnlinePaymentsQRCodeLandingPage.jsx"));
const DonationsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/DonationsQRCodeLandingPage.jsx"));
const TipsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/TipsQRCodeLandingPage.jsx"));
const FreelancersQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/FreelancersQRCodeLandingPage.jsx"));
const InvoicesQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/InvoicesQRCodeLandingPage.jsx"));
const SubscriptionsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/SubscriptionsQRCodeLandingPage.jsx"));

// Files & Tools
const ExcelQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/ExcelQRCodeLandingPage.jsx"));
const WordDocumentQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/WordDocumentQRCodeLandingPage.jsx"));
const PowerPointQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/PowerPointQRCodeLandingPage.jsx"));
const ZipFileQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/ZipFileQRCodeLandingPage.jsx"));
const AudioFileQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/AudioFileQRCodeLandingPage.jsx"));
const VideoFileQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/VideoFileQRCodeLandingPage.jsx"));
const GoogleDocsQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/GoogleDocsQRCodeLandingPage.jsx"));
const GoogleSheetsQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/GoogleSheetsQRCodeLandingPage.jsx"));
const DropboxQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/DropboxQRCodeLandingPage.jsx"));
const CloudFilesQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/CloudFilesQRCodeLandingPage.jsx"));


const NotFound = lazy(() => import("./Components/404_Page.jsx"));

// Admin components
const AdminLayout = lazy(() => import("./admin/AdminLayout.jsx"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard.jsx"));
const AdminLogin = lazy(() => import("./admin/AdminLogin.jsx"));
const AdminRegister = lazy(() => import("./admin/AdminRegister.jsx"));
const AdminProfile = lazy(() => import("./admin/AdminProfile.jsx"));
const AdminQRCodes = lazy(() => import("./admin/AdminQRCodes.jsx"));
const AdminQRTypes = lazy(() => import("./admin/AdminQRTypes.jsx"));

/**
 * ProtectedRoute component to shield admin pages
 */
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAdmin();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  return children;
};

// ⚡ Main App
function App() {
  const { pathname, search } = useLocation();
  const [isGlobalLoading, setIsGlobalLoading] = useState(true); // Initial load

  // Trigger loader on route changes
  useEffect(() => {
    setIsGlobalLoading(true);
  }, [pathname]);

  const query = new URLSearchParams(search);
  const hideHeaderParam = query.get("hideHeader");
  const isAdminRoute = pathname.startsWith("/admin");
  console.log("hideHeaderParam", hideHeaderParam);


  // const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const url = pathname + search;
    const title = document.title;
    sendPageView(url, title);
  }, [pathname, search]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const noSelectElements = document.querySelectorAll(".no-select");
      noSelectElements.forEach((el) => {
        el.style.userSelect = "none";
      });
    }
  }, []);

  return (
    <>
      {/* Global QR Loader - hits 100% before revealing content */}
      {isGlobalLoading && (
        <QRLoader
          speed={pathname === "/" ? "slow" : "fast"}
          onDone={() => setIsGlobalLoading(false)}
        />
      )}

      {hideHeaderParam !== "true" && !isAdminRoute && <Navbar_1 />}
      <BottomToTop />

      <main id="main-content" className="no-select" style={{
        opacity: isGlobalLoading ? 0 : 1,
        transition: "opacity 0.3s ease-in-out"
      }}>
        <AdminProvider>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home_Main />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-news" element={<Blog_News />} />
              <Route path="/privacy_policy" element={<Privacy />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wifi-qr-code" element={<WiFiQRCodeLandingPage />} />
              <Route path="/restaurant-menu-qr-code" element={<MenuQRCodeLandingPage />} />
              <Route path="/business-card-qr-code" element={<BusinessCardQRCodeLandingPage />} />
              <Route path="/google-review-qr-code" element={<GoogleReviewQRCodeLandingPage />} />
              <Route path="/instagram-qr-code" element={<InstagramQRCodeLandingPage />} />
              <Route path="/youtube-qr-code" element={<YouTubeQRCodeLandingPage />} />
              <Route path="/pdf-qr-code" element={<PDFQRCodeLandingPage />} />
              <Route path="/location-qr-code" element={<LocationQRCodeLandingPage />} />
              <Route path="/whatsapp-qr-code" element={<WhatsAppQRCodeLandingPage />} />
              <Route path="/event-ticket-qr-code" element={<EventTicketQRCodeLandingPage />} />
              <Route path="/qr-code-for-small-business" element={<SmallBusinessQRCodeLandingPage />} />
              <Route path="/qr-code-for-marketing-campaign" element={<MarketingCampaignQRCodeLandingPage />} />
              <Route path="/qr-code-for-product-packaging" element={<ProductPackagingQRCodeLandingPage />} />
              <Route path="/qr-code-for-flyers" element={<FlyersQRCodeLandingPage />} />
              <Route path="/qr-code-for-brochures" element={<BrochuresQRCodeLandingPage />} />
              <Route path="/qr-code-for-real-estate" element={<RealEstateQRCodeLandingPage />} />
              <Route path="/qr-code-for-business-website" element={<BusinessWebsiteQRCodeLandingPage />} />
              <Route path="/qr-code-for-email-signature" element={<EmailSignatureQRCodeLandingPage />} />
              <Route path="/qr-code-for-lead-generation" element={<LeadGenerationQRCodeLandingPage />} />
              <Route path="/qr-code-for-app-store" element={<AppStoreQRCodeLandingPage />} />


              {/* 17 - 3 */}
              <Route path="/qr-code-for-digital-menu" element={<DigitalMenuQRCodeLandingPage />} />
              <Route path="/qr-code-for-cafe-menu" element={<CafeMenuQRCodeLandingPage />} />
              <Route path="/qr-code-for-restaurant-ordering" element={<RestaurantOrderingQRCodeLandingPage />} />
              <Route path="/qr-code-for-contactless-ordering" element={<ContactlessOrderingQRCodeLandingPage />} />
              <Route path="/qr-code-for-table-menu" element={<TableMenuQRCodeLandingPage />} />
              <Route path="/qr-code-for-bar-menu" element={<BarMenuQRCodeLandingPage />} />
              <Route path="/qr-code-for-hotel-services" element={<HotelServicesQRCodeLandingPage />} />
              <Route path="/qr-code-for-room-service" element={<RoomServiceQRCodeLandingPage />} />
              <Route path="/qr-code-for-food-delivery-menu" element={<FoodDeliveryMenuQRCodeLandingPage />} />
              <Route path="/qr-code-for-takeaway-menu" element={<TakeawayMenuQRCodeLandingPage />} />
              <Route path="/qr-code-for-tiktok" element={<TikTokQRCodeLandingPage />} />
              <Route path="/qr-code-for-twitter" element={<TwitterQRCodeLandingPage />} />
              <Route path="/qr-code-for-pinterest" element={<PinterestQRCodeLandingPage />} />
              <Route path="/qr-code-for-snapchat" element={<SnapchatQRCodeLandingPage />} />
              <Route path="/qr-code-for-linktree" element={<LinktreeQRCodeLandingPage />} />
              <Route path="/qr-code-for-social-media-profile" element={<SocialMediaProfileQRCodeLandingPage />} />
              <Route path="/qr-code-for-social-media-links" element={<SocialMediaLinksQRCodeLandingPage />} />
              <Route path="/qr-code-for-youtube-channel" element={<YouTubeChannelQRCodeLandingPage />} />
              <Route path="/qr-code-for-instagram-profile" element={<InstagramProfileQRCodeLandingPage />} />
              <Route path="/qr-code-for-facebook-page" element={<FacebookPageQRCodeLandingPage />} />
              <Route path="/qr-code-for-paypal-payment" element={<PayPalPaymentQRCodeLandingPage />} />
              <Route path="/qr-code-for-stripe-payment" element={<StripePaymentQRCodeLandingPage />} />
              <Route path="/qr-code-for-google-pay" element={<GooglePayQRCodeLandingPage />} />
              <Route path="/qr-code-for-apple-pay" element={<ApplePayQRCodeLandingPage />} />
              <Route path="/qr-code-for-online-payments" element={<OnlinePaymentsQRCodeLandingPage />} />
              <Route path="/qr-code-for-donations" element={<DonationsQRCodeLandingPage />} />
              <Route path="/qr-code-for-tips" element={<TipsQRCodeLandingPage />} />
              <Route path="/qr-code-for-freelancers" element={<FreelancersQRCodeLandingPage />} />
              <Route path="/qr-code-for-invoices" element={<InvoicesQRCodeLandingPage />} />
              <Route path="/qr-code-for-subscriptions" element={<SubscriptionsQRCodeLandingPage />} />


              <Route path="/qr-code-for-excel-file" element={<ExcelQRCodeLandingPage />} />
              <Route path="/qr-code-for-word-document" element={<WordDocumentQRCodeLandingPage />} />
              <Route path="/qr-code-for-powerpoint" element={<PowerPointQRCodeLandingPage />} />
              <Route path="/qr-code-for-zip-file" element={<ZipFileQRCodeLandingPage />} />
              <Route path="/qr-code-for-audio-file" element={<AudioFileQRCodeLandingPage />} />
              <Route path="/qr-code-for-video-file" element={<VideoFileQRCodeLandingPage />} />
              <Route path="/qr-code-for-google-docs" element={<GoogleDocsQRCodeLandingPage />} />
              <Route path="/qr-code-for-google-sheets" element={<GoogleSheetsQRCodeLandingPage />} />
              <Route path="/qr-code-for-dropbox-link" element={<DropboxQRCodeLandingPage />} />
              <Route path="/qr-code-for-cloud-files" element={<CloudFilesQRCodeLandingPage />} />

              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/register" element={<AdminRegister />} />
              <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="qr-types" element={<AdminQRTypes />} />
                <Route path="qr-codes" element={<AdminQRCodes />} />
                <Route path="profile" element={<AdminProfile />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AdminProvider>
        </main>


      {/* <Navbar_1 /> */}

      {/* <CountryRedirect /> */}
      {/* <Routes> */}
      {/* <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home_Main />
            </Suspense>
          }
        /> */}
      {/* <Route path="/privacy_policy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Page Not Found</div>} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
