import React from "react";
import { useState, useRef } from "react";
import QRCode from "react-qr-code";    //08-01--working// 
import { QRCodeSVG } from "qrcode.react";   //08-01//
import * as htmlToImage from "html-to-image";    //09-01//


// import React from "react";
import { Container } from "react-bootstrap";
// import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
// import { Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import step1 from "../assets/step1.webp";
import step2 from "../assets/step2.webp";
import step3 from "../assets/step3.webp";
// import thinking from "../assets/thinking.png"
// import img2 from "../assets/Google.png";
import { TfiWorld } from "react-icons/tfi";
import { FaRegEdit } from "react-icons/fa";
// FaRegImage
// import { FaRegFilePdf } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaThumbsUp } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
// import { FaMusic } from "react-icons/fa";
import { RiUserAddLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
// import { MdBlockFlipped } from "react-icons/md";
// MdVideoLibrary
// import { FaChevronDown } from "react-icons/fa";
// import { MdOutlinePianoOff } from "react-icons/md";
// import {
//   FaFilePdf,
//   FaTags,
//   FaUserPlus,
//   FaImage,
//   FaFont,
//   FaVideo,
//   FaListUl,
//   FaBuilding,
// } from "react-icons/fa";
// import { FaCircleCheck } from "react-icons/fa6";
// import { FaChartLine } from "react-icons/fa";
// import { FaEdit } from "react-icons/fa";
// import { FaQrcode } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";
// import { FaFileDownload } from "react-icons/fa";
// import { FaMagic } from "react-icons/fa";
// import { FaBarcode } from "react-icons/fa";
// import { FaDownload } from "react-icons/fa";
// import { FaGlobe } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { FaBolt } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";

// import qr_image_1 from "../assets/qr_image_1.png";
// import qr_image_2 from "../assets/qr_image_2.png";
// import qr_image_3 from "../assets/qr_image_3.png";
// import qr_image_4 from "../assets/qr_image_4.png";
// import qr_image_5 from "../assets/qr_image_5.png";
// import qr_image_6 from "../assets/qr_image_6.png";
// import img_7 from "../assets/img_7.png";
// import img_8 from "../assets/img_8.png";
// import img_9 from "../assets/img_9.png";
import img_10 from "../assets/img_10.webp";
import img_11 from "../assets/img11.webp";
// import img1 from "../assets/logo.jpg";
import { Link, QrCode, Whatsapp } from "react-bootstrap-icons";
// import { useSearchParams } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { BsChatDotsFill } from "react-icons/bs";
// import { RxValueNone } from "react-icons/rx";
// import { SiWhatsapp } from "react-icons/si";
// import { RiLink } from "react-icons/ri";
// import { CiLocationOn } from "react-icons/ci";
// import { SlCalender } from "react-icons/sl";
// import { TfiEmail } from "react-icons/tfi";
// import { RiQrScan2Line } from "react-icons/ri";
// import { GrGallery } from "react-icons/gr";
// import { MdDinnerDining } from "react-icons/md";
// import { FaPaypal } from "react-icons/fa";
// import { FaBitcoin } from "react-icons/fa";
// import { MdOutlineHideSource } from "react-icons/md";
import null_1 from "../assets/null1.webp";
import frame_1 from "../assets/frame_1.png";
import frame_2 from "../assets/frame_2.png";
import frame_3 from "../assets/frame_3.png";
import frame_4 from "../assets/frame_4.png";
import frame_5 from "../assets/frame_5.png";
import frame_6 from "../assets/frame_6.png";
import frame_7 from "../assets/frame_7.png";
import logo1 from "../assets/logo.png";
import { HiOutlineDownload, HiOutlineShare } from "react-icons/hi";

// import QR_1 from "../assets/QR_1.webp";
// import Text_QR from "../assets/Text_QR.png";
// import Email_QR from "../assets/Email_QR.png";
// import VCard_QR from "../assets/VCard_QR.png";
// import WIFI_QR from "../assets/WIFI_QR.png";
// import Whatsapp_QR from "../assets/Whatsapp_QR.png";
// import SMS_QR from "../assets/SMS_QR.png";

import QR_1 from "../assets/QR_MAin.png";
import Text_QR from "../assets/QR_MAin.png";
import Email_QR from "../assets/QR_MAin.png";
import VCard_QR from "../assets/QR_MAin.png";
import WIFI_QR from "../assets/QR_MAin.png";
import Whatsapp_QR from "../assets/QR_MAin.png";
import SMS_QR from "../assets/QR_MAin.png";
import { sendEvent } from "../appEvents";
import { useAdmin } from "../admin/AdminContext";

// const [qrImages1, setQrImages1] = useState({});

// const [activeTab, setActiveTab] = useState("wedding");
const QRGenerator = () => {
  const { addQrCode } = useAdmin();
  const [activeTab, setActiveTab] = useState("website"),
    [showTypeModal, setShowTypeModal] = useState(!1),
    [showContact, setShowContact] = useState(!1),
    [showLocation, setShowLocation] = useState(!1),
    [showCompany, setShowCompany] = useState(!1),
    [website, setWebsite] = useState(""),
    [phone, setPhone] = useState(""),
    [message, setMessage] = useState(""),
    [text2, setText2] = useState(""),
    [fname, setFname] = useState(""),
    [lname, setLname] = useState(""),
    [email, setEmail] = useState(""),
    [pWebsite, setPWebsite] = useState(""),
    [addressVcard, setAddressVcard] = useState(""),
    [phone1, setPhone1] = useState(""),
    [cpyName, setCpyName] = useState(""),
    [pTitleVcard, setPTitleVcard] = useState(""),
    [phone2, setPhone2] = useState(""),
    [message2, setMessage2] = useState(""),
    [email1, setEmail1] = useState(""),
    [subject, setSubject] = useState(""),
    [body, setBody] = useState(""),
    [ssid, setSsid] = useState(""),
    [password, setPassword] = useState(""),
    [hidden, setHidden] = useState(""),
    [loading, setLoading] = useState(false),
    [urlError, setUrlError] = useState("");

  // 09-01//
  const qrRef = useRef(null);

  // Callback ref to handle both desktop and mobile QR displays
  const setQrRef = (element) => {
    if (element) {
      qrRef.current = element;
    }
  };

  const [qrValue, setQrValue] = useState("");


  // const URL = "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net";

  // Validates that a URL starts with http:// or https://
  const validateWebsiteUrl = (url) => {
    const trimmed = url.trim();
    if (!trimmed) return "URL is required.";
    if (!/^https?:\/\//i.test(trimmed))
      return "URL must start with http:// or https://";
    return "";
  };

  const tabContent = {
    website: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted text-start no-delay">
                Enter your website URL
              </b>
            </div>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="https://example.com"
                className={`custom-input${urlError ? " is-invalid" : website && !urlError ? " is-valid" : ""}`}
                value={website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                  setUrlError(validateWebsiteUrl(e.target.value));
                }}
                required
              />
              {urlError && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>⚠️</span> {urlError}
                </div>
              )}
              {!urlError && website && (
                <div
                  style={{
                    color: "#198754",
                    fontSize: "0.85rem",
                    marginTop: "4px",
                  }}
                >
                  ✅ Valid URL
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    ),
    text: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold">Complete the content</h4>
            </div>

            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">
                Type any text you want to encode into a QR code.
              </b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={3}
                className="custom-input"
                placeholder="Enter your text here"
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
          </div>
        </div>
      </>
    ),
    // pdf: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR PDF</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       From menus to user guides to creative portfolios, give your clients
    //       access to PDF documents quickly and efficiently.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //   </>
    // ),
    // images: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Images</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Share memories and special moments like never before through a QR
    //       code, where each image tells a story and is accessible to everyone.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <p>Upload an image to create a QR code linking to it.</p>
    //     <Form.Control type="file" /> */}
    //   </>
    // ),
    vcard: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>

            <Form>
              {/* Name and Surname */}
              <Row className="mb-3">
                <Col>
                  <Form.Group className="py-2">
                    <b className="text-muted mb-2">Name *</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="E.g. Paul"
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="py-2">
                    <b className="text-muted">Surname</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="custom-input"
                      placeholder="E.g. Jones"
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Contact Info */}
              <Button
                variant="light"
                className="w-100 text-start border mb-2"
                onClick={() => setShowContact(!showContact)}
                aria-controls="contact-info"
                aria-expanded={showContact}
              >
                Contact info {showContact ? "▲" : "▼"}
              </Button>

              <Collapse in={showContact}>
                <div id="contact-info" className="border p-3 mb-3 rounded">
                  <Form.Group className="py-2">
                    <b className="text-muted">Phone</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="tel"
                      placeholder="E.g. +123456789"
                      className="custom-input"
                      value={phone1}
                      onChange={(e) => setPhone1(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="py-2">
                    <b className="text-muted">Email</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="E.g. name@email.com"
                      className="custom-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="py-2">
                    <b className="text-muted">Personal website</b>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="url"
                      placeholder="https://..."
                      className="custom-input"
                      value={pWebsite}
                      onChange={(e) => setPWebsite(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </Collapse>

              {/* Location */}
              <Button
                variant="light"
                className="w-100 text-start border mb-2"
                onClick={() => setShowLocation(!showLocation)}
                aria-controls="location-info"
                aria-expanded={showLocation}
              >
                Location {showLocation ? "▲" : "▼"}
              </Button>

              <Collapse in={showLocation}>
                <div id="location-info" className="border p-3 mb-3 rounded">
                  {/* Responsive buttons row */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <Button variant="outline-primary">Complete</Button>
                    <Button variant="outline-secondary" disabled>
                      Url
                    </Button>
                    <Button variant="outline-secondary" disabled>
                      Coordinates
                    </Button>
                  </div>

                  {/* Responsive form row */}
                  <Row className="g-2 mb-3">
                    <Col xs={12} md>
                      <Form.Control
                        placeholder="Search address"
                        className="custom-input"
                        value={addressVcard}
                        onChange={(e) => setAddressVcard(e.target.value)}
                      />
                    </Col>
                    <Col xs={12} md="auto">
                      <Button
                        variant="outline-primary"
                        className="w-100 h-100 rounded-3"
                      >
                        Manual entry
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Collapse>

              {/* Company */}
              <Button
                variant="light"
                className="w-100 text-start border mb-2"
                onClick={() => setShowCompany(!showCompany)}
                aria-controls="company-info"
                aria-expanded={showCompany}
              >
                Company {showCompany ? "▲" : "▼"}
              </Button>

              <Collapse in={showCompany}>
                <div id="company-info" className="border p-3 rounded">
                  <Row>
                    <Col>
                      <Form.Group className="py-2">
                        <b className="text-muted">Company</b>
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          placeholder="E.g. Company LLC"
                          className="custom-input"
                          value={cpyName}
                          onChange={(e) => setCpyName(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="py-2">
                        <b className="text-muted">Title</b>
                      </Form.Group>
                      <Form.Group>
                        <Form.Control
                          placeholder="E.g. Your profession/position"
                          className="custom-input"
                          value={pTitleVcard}
                          onChange={(e) => setPTitleVcard(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Collapse>
            </Form>
          </div>
        </div>
      </>
    ),

    whatsapp: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Number</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                maxLength={10}
                onChange={(e) =>
                  setPhone2("+91" + e.target.value.replace(/\D/g, ""))
                }
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Message</b>
            </div>
            <div className="col-12">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your text here"
                className="custom-input"
                onChange={(e) => setMessage2(e.target.value)}
              />
            </div>
          </div>
        </div>
      </>
    ),
    email: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Email</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setEmail1(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Subject</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Message</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your text here"
                className="custom-input"
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </>
    ),
    sms: (
      <>
        <div className="container">
          <div className="">
            <div className="col-md-12">
              <h4 className="fw-bold mb-3">Complete the content</h4>
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted text-start no-delay">Number</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Enter your number here"
                className="custom-input mb-3"
                maxLength={10}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />
            </div>
            <div className="col-md-12 py-2">
              <b className="text-muted no-delay">Message</b>
            </div>
            <div className="col-md-12">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your text here"
                className="custom-input mb-3"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>
      </>
    ),
    // video: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <Form.Control type="url" placeholder="Video URL" /> */}
    //   </>
    // ),
    // whatsapp: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    /* <Form.Control type="url" placeholder="Video URL" /> */
    //   </>
    // ),
    // social: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p className="P_Tages_qr text-muted no-delay">
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <Form.Control type="url" placeholder="Video URL" /> */}
    //   </>
    // ),
    wifi: (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="fw-bold mb-1">Complete the content</h4>
            </div>

            <div className="row g-3 align-items-center">
              <div className="col-md-4 col-sm-6">
                <label className="form-label fw-bold text-muted">
                  Network name (SSID)*
                </label>
                <input
                  type="text"
                  placeholder="E.g. HomeWifi"
                  className="custom-input"
                  required
                  value={ssid}
                  onChange={(e) => setSsid(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label fw-bold text-muted">
                  Network password
                </label>
                <input
                  type="text"
                  placeholder="E.g. Mypassword"
                  className="custom-input"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-2 align-items-center">
              <div className="col-md-4 col-sm-6">
                <label className="form-label fw-bold text-muted">
                  Security
                </label>
                <select className="custom-input">
                  <option value="wep">WEP</option>
                  <option value="wpa">WPA</option>
                  <option value="wpa2-eap">WPA2-EAP</option>
                  <option value="nopass">No Password</option>
                </select>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="form-check d-flex align-items-center mt-4">
                  <input
                    type="checkbox"
                    id="hiddenNetwork"
                    style={{ width: "20px", height: "20px" }}
                    className="form-check-input me-2"
                    checked={hidden}
                    onChange={(e) => setHidden(e.target.checked)}
                  />
                  <label
                    htmlFor="hiddenNetwork"
                    className="form-check-label fw-bold text-muted"
                  >
                    Hidden Network
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Form.Control type="url" placeholder="Video URL" /> */}
      </>
    ),
    // mp3: (
    //   <>
    //     <h4 className="fw-bold mb-3">QR Video</h4>
    //     <p
    //       className="P_Tages_qr text-muted no-delay
    //     "
    //     >
    //       Make it easy to access tutorials, trailers, or educational content.
    //       Increase the visibility of your content by sharing videos easily.
    //     </p>
    //     <a href="signUP">
    //       <Button variant="primary" className="rounded-pill">
    //         Register now
    //       </Button>
    //     </a>
    //     {/* <Form.Control type="url" placeholder="Video URL" /> */}
    //   </>
    // ),
  };
  // const [qrcode, setQrcode] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/api/qr-codes/"
  //       );
  //       if (!res.ok) throw new Error("Failed to fetch QR codes");
  //       const data = await res.json();
  //       console.log("API data:", data); // 👈 Check structure
  //       setQrcode(Array.isArray(data) ? data : data.qrCodes || []);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // async function generateQrCode() {
  //   try {
  //     const response = await fetch(
  //       "https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/api/qr-codes/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer {{access_token}}`, // replace with your token
  //         },
  //       }
  //     );

  //     if (!response.ok) throw new Error("Failed to generate QR Code");

  //     const result = await response.json();
  //     return result.qr_image_url; // ✅ only image URL
  //   } catch (err) {
  //     console.error("QR API Error:", err);
  //     return null;
  //   }
  // }

  // useEffect(() => {
  //   async function fetchQr() {
  //     const qrUrl = await generateQrCode({
  //       url: frameText || "https://example.com", // 👈 your text or URL
  //       fillColor: qrColor,
  //       backColor: bgColor,
  //     });
  //     if (qrUrl) setQr(qrUrl);
  //   }
  //   fetchQr();
  // }, [frameText, qrColor, bgColor]);

  // const [activeTabKey, setActiveTabKey] = useState("website");

  // const handleDownload = (qrUrl, name = "my-qr-code.png") => {
  //   if (!qrUrl) {
  //     alert("Please generate the QR code first!");
  //     return;
  //   }

  //   // Detect File Type
  //   const fileExtension = name.split(".").pop().toLowerCase();

  //   // 🎯 GA4 Event — QR Download
  //   sendEvent("qr_download", {
  //     event_category: "QR",
  //     event_label: "QR Code Downloaded",
  //     file_type: fileExtension,   // png / svg / pdf
  //     file_name: name,
  //   });

  //   // Download Logic
  //   const link = document.createElement("a");
  //   link.href = qrUrl;
  //   link.download = name;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };


  // const handleShare = async () => {
  //   if (!qrCode) {
  //     alert("Please generate a QR code first!");
  //     return;
  //   }

  //   try {
  //     // Try to create shareable file
  //     const img = new Image();
  //     img.crossOrigin = "anonymous";
  //     img.src = qrCode;
  //     await new Promise((resolve, reject) => {
  //       img.onload = resolve;
  //       img.onerror = reject;
  //     });

  //     const canvas = document.createElement("canvas");
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     const ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);

  //     const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  //     const file = new File([blob], "my-qr-code.png", { type: "image/png" });

  //     if (navigator.canShare && navigator.canShare({ files: [file] })) {
  //       await navigator.share({
  //         files: [file],
  //         title: "My QR Code",
  //         text: "Here’s my QR code!",
  //       });
  //     } else if (navigator.share) {
  //       // Fallback: share the link instead
  //       await navigator.share({
  //         title: "My QR Code",
  //         text: "Scan this QR code or open this link:",
  //         url: qrCode,
  //       });
  //     } else {
  //       // Final fallback: download
  //       const link = document.createElement("a");
  //       link.href = qrCode;
  //       link.download = "my-qr-code.png";
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  //   } catch (error) {
  //     console.error("Error sharing QR code:", error);
  //   }
  // };




  //   link = document.createElement("link");
  // (link.href = "../assets/logo.jpeg"), document.head.appendChild(link);

  // const handleDownload = (qrUrl, name = "qr-code.png") => {
  //   if (!qrUrl) {
  //     alert("Please generate the QR code first!");
  //     return;
  //   }

  //   const link = document.createElement("a");
  //   link.href = qrUrl;
  //   link.setAttribute("download", name);
  //   link.setAttribute("target", "_blank");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const downloadCurrentQR = () => {
    // Simply call handleDownload which already handles the QRCodeSVG download
    handleDownload();
  };

  //08-01 --working//
  // const getQRValue = () => {
  //   switch (activeTab) {
  //     case "website":
  //       return website || "https://example.com";

  //     case "text":
  //       return text2 || "Sample text";

  //     case "sms":
  //       return phone && message
  //         ? `SMSTO:${phone}:${message}`
  //         : "";

  //     case "email":
  //       return email1 && subject && body
  //         ? `mailto:${email1}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  //         : "";

  //     case "whatsapp":
  //       return phone2 && message2
  //         ? `https://wa.me/${phone2}?text=${encodeURIComponent(message2)}`
  //         : "";

  //     case "wifi":
  //       return ssid
  //         ? `WIFI:T:WPA;S:${ssid};P:${password};H:${hidden};;`
  //         : "";

  //     default:
  //       return "";
  //   }
  // };

  // const getQRValue = () => {
  //   switch (activeTab) {
  //     case "website":
  //       return website || "https://example.com";

  //     case "text":
  //       return text2 || "Sample Text";

  //     case "sms":
  //       return phone && message
  //         ? `SMSTO:${phone}:${message}`
  //         : "SMSTO:+919999999999:Hello";

  //     case "email":
  //       return email1
  //         ? `mailto:${email1}?subject=${encodeURIComponent(subject || "")}&body=${encodeURIComponent(body || "")}`
  //         : "mailto:test@example.com";

  //     case "whatsapp":
  //       return phone2
  //         ? `https://wa.me/${phone2}?text=${encodeURIComponent(message2 || "")}`
  //         : "https://wa.me/919999999999";

  //     case "wifi":
  //       return ssid
  //         ? `WIFI:T:WPA;S:${ssid};P:${password || ""};H:${hidden ? "true" : "false"};;`
  //         : "WIFI:T:WPA;S:MyWifi;P:12345678;;";

  //     case "vcard":
  //       return `BEGIN:VCARD
  // VERSION:3.0
  // N:${lname || ""};${fname || ""}
  // FN:${fname || ""} ${lname || ""}
  // ORG:${cpyName || ""}
  // TITLE:${pTitleVcard || ""}
  // TEL:${phone1 || ""}
  // EMAIL:${email || ""}
  // URL:${pWebsite || ""}
  // END:VCARD`;

  //     default:
  //       return "https://example.com";
  //   }
  // };


  /// 09-01///
  // 🔹 QR VALUE GENERATOR
  const getQRValue = () => {
    switch (activeTab) {
      case "website":
        return website;

      case "text":
        // return text;
        return text2;

      case "sms":
        return `SMSTO:${phone}:${message}`;

      case "email":
        // return `mailto:${email}?subject=${encodeURIComponent(
        return `mailto:${email1}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

      case "whatsapp":
        // return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        return `https://wa.me/${phone2}?text=${encodeURIComponent(message2)}`;

      case "wifi":
        return `WIFI:T:WPA;S:${ssid};P:${password};;`;

      case "vcard":
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${fname} ${lname}\nTEL:${phone1}\nEMAIL:${email}\nURL:${pWebsite}\nORG:${cpyName}\nTITLE:${pTitleVcard}\nADR:${addressVcard}\nEND:VCARD`;

      default:
        return "";
    }
  };


  // const handleShare = async () => {
  //   if (!qrCode) {
  //     alert("Please generate a QR code first!");
  //     return;
  //   }

  //   // 🎯 GA4 Event — QR Share Clicked
  //   sendEvent("qr_share", {
  //     event_category: "QR",
  //     event_label: "QR Code Shared",
  //     share_method: navigator.share ? "native_share" : "fallback_download",
  //   });

  //   // If browser supports share API
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: "My QR Code",
  //         text: "Scan this QR code or open this link:",
  //         url: qrCode,
  //       });
  //       return;
  //     } catch (err) {
  //       console.error("Share link failed:", err);
  //     }
  //   }

  //   // fallback to download
  //   const link = document.createElement("a");
  //   link.href = qrCode;
  //   link.download = "my-qr-code.png";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleShare = async () => {
    console.log("Share button clicked");
    console.log("qrRef.current:", qrRef.current);
    console.log("qrValue:", qrValue);

    if (!qrRef.current || !qrValue) {
      alert("Please generate a QR code first!");
      return;
    }

    try {
      console.log("Converting QR to PNG...");
      // Convert QR code to PNG with enhanced options
      const dataUrl = await htmlToImage.toPng(qrRef.current, {
        skipFonts: true,
        cacheBust: true,
        pixelRatio: 2,
        quality: 1,
        width: 300,
        height: 300,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      });
      console.log("Conversion successful, dataUrl length:", dataUrl.length);

      // 🎯 GA4 Event — QR Share Clicked
      sendEvent("qr_share", {
        event_category: "QR",
        event_label: `QR Code Shared - ${activeTab}`,
        share_method: navigator.share ? "native_share" : "fallback_download",
      });

      // ✅ Native Share (Mobile) - Convert data URL to blob
      if (navigator.share) {
        console.log("Native share available, attempting to share...");
        try {
          // Convert data URL to blob
          const response = await fetch(dataUrl);
          const blob = await response.blob();
          const file = new File([blob], `${activeTab}-qr.png`, { type: "image/png" });

          // Check if files can be shared
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "My QR Code",
              text: "Scan this QR code:",
            });
            console.log("Share successful");
            return;
          } else {
            console.log("Cannot share files, falling back to download");
          }
        } catch (err) {
          console.error("Share failed:", err);
        }
      }

      // ⬇️ Fallback download
      console.log("Downloading QR code...");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${activeTab}-qr.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("Download triggered");
    } catch (error) {
      console.error("Error sharing QR code:", error);
      console.error("Error details:", error.message, error.stack);
      alert("Failed to share QR code. Error: " + error.message);
    }
  };



  const frameOptions = [
    {
      key: "null",
      image: null_1,
      slot: { top: 0, left: 0, width: 100, height: 100 },
    },
    {
      key: "simple",
      image: frame_1,
      slot: { top: 1, left: 23, width: 55, height: 55 },
    },
    {
      key: "envelope",
      image: frame_3,
      slot: { top: 5, left: 24, width: 55, height: 52 },
    },
    {
      key: "tray",
      image: frame_4,
      slot: { top: 15, left: 22, width: 56, height: 56 },
    },
    {
      key: "scanme",
      image: frame_5,
      slot: { top: 22, left: 15, width: 66, height: 62 },
    },
    {
      key: "mug",
      image: frame_7,
      slot: { top: 8, left: 0, width: 38, height: 38 },
    },
    {
      key: "scooter",
      image: frame_6,
      slot: { top: 24, left: 21, width: 58, height: 50 },
    },
    {
      key: "alt",
      image: frame_2,
      slot: { top: 0, left: 10, width: 80, height: 80 },
    },
  ],
    DEFAULT_SLOT = { top: 20, left: 20, width: 60, height: 60 };
  // QUIET_ZONE_PCT = 3;

  const [selectedFrameIndex] = useState(0),
    selectedFrame = frameOptions[selectedFrameIndex] || frameOptions[0],
    slot = selectedFrame?.slot || DEFAULT_SLOT,
    qrTypes = [
      { key: "website", icon: <TfiWorld />, label: "Website" },
      { key: "text", icon: <FaRegEdit />, label: "Text" },
      { key: "vcard", icon: <RiUserAddLine />, label: "vCard" },
      { key: "wifi", icon: <FaWifi />, label: "Wi-Fi" },
      { key: "whatsapp", icon: <Whatsapp />, label: "whatsapp" },
      { key: "email", icon: <MdEmail />, label: "email" },
      { key: "sms", icon: <BsChatDotsFill />, label: "SMS" },
    ],
    [mobileStep, setMobileStep] = useState("content"),
    qrImages = {
      website: QR_1,
      text: Text_QR,
      email: Email_QR,
      vcard: VCard_QR,
      wifi: WIFI_QR,
      whatsapp: Whatsapp_QR,
      sms: SMS_QR,
    };

  const fetchWithTimeout = async (url, options = {}, timeout = 15000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), timeout)
      )
    ]);
  };


  const [qrCode, setQrCode] = useState(qrImages.website);
  const [qrSMS, setQrSMS] = useState(qrImages.sms);
  const [qrText, setQrText] = useState(qrImages.text);
  const [qrVcard, setQrVcard] = useState(qrImages.vcard);
  const [qrWifi, setQrWifi] = useState(qrImages.wifi);
  const [qrWhatsapp, setQrWhatsapp] = useState(qrImages.whatsapp);
  const [qrEmail, setQrEmail] = useState(qrImages.email);



  const [qrColor, setQrColor] = useState("#000000"),
    [bgColor, setBgColor] = useState("#FFFFFF");

  // Colors that are applied to the generated QR code
  const [generatedQrColor, setGeneratedQrColor] = useState("#000000"),
    [generatedBgColor, setGeneratedBgColor] = useState("#FFFFFF");

  const handleQrColorChange = (newColor) => {
    const previousColor = qrColor; // old color

    setQrColor(newColor);

    // GA4 EVENT
    sendEvent("qr_change_color", {
      event_category: "Customization",
      event_label: "QR Color Changed",
      old_color: previousColor,
      new_color: newColor,
    });
  };

  const handleBgColorChange = (newColor) => {
    const previousColor = bgColor; // old bg color

    setBgColor(newColor);

    // GA4 EVENT (background color)
    sendEvent("qr_change_bg_color", {
      event_category: "Customization",
      event_label: "Background Color Changed",
      old_color: previousColor,
      new_color: newColor,
    });
  };
  // generateQr = async () => {
  //   if (!website || website.trim() === "") {
  //     alert("URL is required");
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const response = await fetchWithTimeout(
  //       `${URL}/api/qr-codes/`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           name: "Example Website",
  //           qr_type: "url",
  //           content: { url: website },
  //           size: 10,
  //           border: 4,
  //           format: "png",
  //           fill_color: qrColor,
  //           back_color: bgColor,
  //         }),
  //       },
  //       15000
  //     );

  //     const text = await response.text();
  //     let data;

  //     try {
  //       data = JSON.parse(text);
  //     } catch (err) {
  //       console.error("Server returned non-JSON:", err, text);
  //       throw new Error("Invalid server response");
  //     }

  //     if (!response.ok) {
  //       console.log("API raw result:", data);

  //       // ❌ QR Generate FAIL Event
  //       sendEvent("qr_generate_failed", {
  //         event_category: "QR",
  //         event_label: "QR Generation Failed",
  //         error_message: data.message || "Unknown Error",
  //       });

  //       throw new Error(data.message || "Failed to generate QR code");
  //     }

  //     const finalImg =
  //       data.data?.qr_image ||
  //       data.data?.qr_image_url ||
  //       data.qr_image_url;

  //     setQrCode(finalImg);

  //     // ✅ SUCCESS EVENT — QR Generated
  //     sendEvent("qr_generate", {
  //       event_category: "QR",
  //       event_label: "QR Code Generated",
  //       url_length: website.length,
  //       fill_color: qrColor,
  //       back_color: bgColor,
  //       format: "png",
  //     });
  //   } catch (err) {
  //     // ❌ TIMEOUT / OTHER ERROR EVENT
  //     sendEvent("qr_generate_error", {
  //       event_category: "QR",
  //       event_label: "QR Error Occurred",
  //       error_message: err.message,
  //     });

  //     if (err.message === "timeout") {
  //       alert("QR generation took too long. Please try again.");
  //     } else {
  //       alert("Something went wrong. Try again.");
  //     }
  //     console.error("QR Error:", err);
  //   }

  //   setLoading(false);
  // };



  // const TextQr = async () => {
  //   if (!text2 || "" === text2.trim()) {
  //     alert("Text is required");
  //     return;
  //   }
  //   try {
  //     let e = await fetch(
  //       `${URL}/api/qr-codes/`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           name: "Important Note",
  //           qr_type: "text",
  //           content: { text: text2 },
  //           format: "png",
  //           fill_color: qrColor,
  //           back_color: bgColor,
  //         }),
  //       }
  //     ),
  //       r = await e.text(),
  //       t;
  //     try {
  //       t = JSON.parse(r);
  //     } catch {
  //       throw (
  //         (console.error("Server returned non-JSON:", r),
  //           Error("Server error: " + e.status))
  //       );
  //     }
  //     if (!e.ok)
  //       throw (
  //         (console.log("API raw result:", t),
  //           Error(t.message || "Failed to generate QR code"))
  //       );
  //     const a = t.data?.qr_image || t.data?.qr_image_url || t.qr_image_url;
  //     console.log("✅ Final SMS QR URL:", a),
  //       setQrText(a);
  //     // handleDownload(a);
  //   } catch (i) {
  //     console.error("Error generating SMS QR:", i);
  //   }
  // },
  //   VCardQr = async () => {
  //     if (!fname || "" === fname.trim()) {
  //       alert("name is required");
  //       return;
  //     }
  //     if (!lname || "" === lname.trim()) {
  //       alert("surname is required");
  //       return;
  //     }
  //     if (!phone1 || "" === phone1.trim()) {
  //       alert("phone is required");
  //       return;
  //     }
  //     if (!email || "" === email.trim()) {
  //       alert("email is required");
  //       return;
  //     }
  //     if (!pWebsite || "" === pWebsite.trim()) {
  //       alert("Personal Website is required");
  //       return;
  //     }
  //     if (!addressVcard || "" === addressVcard.trim()) {
  //       alert("Address is required");
  //       return;
  //     }
  //     if (!cpyName || "" === cpyName.trim()) {
  //       alert("Company Name is required");
  //       return;
  //     }
  //     if (!pTitleVcard || "" === pTitleVcard.trim()) {
  //       alert("Position Title is required");
  //       return;
  //     }
  //     try {
  //       let e = await fetch(
  //         `${URL}/api/qr-codes/`,
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             name: "Business Card",
  //             qr_type: "vcard",
  //             content: {
  //               first_name: fname,
  //               last_name: lname,
  //               phone: phone1,
  //               email: email,
  //               website: pWebsite,
  //               organization: cpyName,
  //               title: pTitleVcard,
  //               // address: addressVcard,
  //             },
  //             format: "png",
  //             fill_color: qrColor,
  //             back_color: bgColor,
  //           }),
  //         }
  //       ),
  //         r = await e.text(),
  //         t;
  //       try {
  //         t = JSON.parse(r);
  //       } catch {
  //         throw (
  //           (console.error("Server returned non-JSON:", r),
  //             Error("Server error: " + e.status))
  //         );
  //       }
  //       if (!e.ok)
  //         throw (
  //           (console.log("API raw result:", t),
  //             Error(t.message || "Failed to generate QR code"))
  //         );
  //       const a = t.data?.qr_image || t.data?.qr_image_url || t.qr_image_url;
  //       console.log("✅ Final SMS QR URL:", a),
  //         setQrVcard(a);
  //     } catch (i) {
  //       console.error("Error generating SMS QR:", i);
  //     }
  //   };
  // const WifiQr = async () => {
  //   if (!ssid || "" === ssid.trim()) {
  //     alert("SSID is required");
  //     return;
  //   }
  //   if (!password || "" === password.trim()) {
  //     alert("Password is required");
  //     return;
  //   }
  //   if (null == hidden) {
  //     alert("Hidden value is required");
  //     return;
  //   }
  //   try {
  //     let e = await fetch(
  //       `${URL}/api/qr-codes/`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           name: "Office WiFi",
  //           qr_type: "wifi",
  //           content: {
  //             ssid: ssid,
  //             password: password,
  //             security: "WPA",
  //             hidden: "true" === hidden || !0 === hidden,
  //           },
  //           description: "Guest WiFi Access",
  //           format: "png",
  //           size: 10,
  //           border: 4,
  //           fill_color: qrColor,
  //           back_color: bgColor,
  //         }),
  //       }
  //     ),
  //       r = await e.text(),
  //       t;
  //     try {
  //       t = JSON.parse(r);
  //     } catch {
  //       throw (
  //         (console.error("Server returned non-JSON:", r),
  //           Error("Server error: " + e.status))
  //       );
  //     }
  //     if (!e.ok)
  //       throw (
  //         (console.log("API raw result:", t),
  //           Error(t.message || "Failed to generate QR code"))
  //       );
  //     const i = t.data?.qr_image || t.data?.qr_image_url || t.qr_image_url;
  //     console.log("✅ Final WiFi QR URL:", i),
  //       setQrWifi(i);
  //   } catch (a) {
  //     console.error("Error generating WiFi QR:", a);
  //   }
  // },
  //   whatsappQr = async () => {
  //     if (!phone2 || "" === phone2.trim()) {
  //       alert("Phone number is required");
  //       return;
  //     }
  //     if (!message2 || "" === message2.trim()) {
  //       alert("Message is required");
  //       return;
  //     }
  //     try {
  //       let e = await fetch(
  //         `${URL}/api/qr-codes/`,
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             name: "WhatsApp Message",
  //             qr_type: "whatsapp",
  //             content: { phone: phone2, message: message2 },
  //             format: "png",
  //             fill_color: qrColor,
  //             back_color: bgColor,
  //           }),
  //         }
  //       ),
  //         r = await e.text(),
  //         t;
  //       try {
  //         t = JSON.parse(r);
  //       } catch {
  //         throw (
  //           (console.error("Server returned non-JSON:", r),
  //             Error("Server error: " + e.status))
  //         );
  //       }
  //       if (!e.ok)
  //         throw (
  //           (console.log("API raw result:", t),
  //             Error(t.message || "Failed to generate QR code"))
  //         );
  //       let i = t.data?.qr_image_url || t.qr_image_url;
  //       console.log("✅ Final SMS QR URL:", i), setQrWhatsapp(i);
  //     } catch (a) {
  //       console.error("Error generating SMS QR:", a);
  //     }
  //   };

  // const emailQr = async () => {
  //   if (!email1 || "" === email1.trim()) {
  //     alert("Email is required");
  //     return;
  //   }
  //   let e = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!e.test(email1)) {
  //     alert("Please enter a valid email address (e.g. test@example.com)");
  //     return;
  //   }
  //   if (!subject || "" === subject.trim()) {
  //     alert("Subject is required");
  //     return;
  //   }
  //   if (!body || "" === body.trim()) {
  //     alert("Body is required");
  //     return;
  //   }
  //   try {
  //     let r = await fetch(
  //       `${URL}/api/qr-codes/`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           name: "Email Us",
  //           qr_type: "email",
  //           content: {
  //             email: email1.trim(),
  //             subject: subject.trim(),
  //             body: body.trim(),
  //           },
  //           format: "png",
  //           size: 10,
  //           border: 4,
  //           fill_color: qrColor,
  //           back_color: bgColor,
  //         }),
  //       }
  //     ),
  //       t = await r.text(),
  //       i = JSON.parse(t);
  //     if (!r.ok)
  //       throw (
  //         (console.log("API raw result:", i),
  //           Error(i.message || "Failed to generate QR code"))
  //       );
  //     let a = i.data?.qr_image_url || i.qr_image_url;
  //     console.log("✅ Final Email QR URL:", a), setQrEmail(a);
  //   } catch (o) {
  //     console.error("Error generating Email QR:", o);
  //   }
  // },
  //   SMSQr = async () => {
  //     if (!phone || "" === phone.trim()) {
  //       alert("Phone number is required");
  //       return;
  //     }
  //     if (!message || "" === message.trim()) {
  //       alert("Message is required");
  //       return;
  //     }
  //     try {
  //       let e = await fetch(
  //         `${URL}/api/qr-codes/`,
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             name: "Text Us",
  //             qr_type: "sms",
  //             content: { phone, message },
  //             format: "png",
  //             size: 10,
  //             border: 4,
  //             fill_color: qrColor,
  //             back_color: bgColor,
  //           }),
  //         }
  //       ),
  //         r = await e.text(),
  //         t = JSON.parse(r);
  //       if (!e.ok) throw Error(t.message || "Failed to generate QR code");
  //       let i = t.data?.qr_image_url || t.qr_image_url;
  //       setQrSMS(i);
  //     } catch (a) {
  //       console.error("Error generating SMS QR:", a);
  //     }
  //   };

  // 08-01 --working//
  // const handleGenerate = () => {
  //   if (!getQRValue()) {
  //     alert("Please fill required fields");
  //     return;
  //   }
  //   setLoading(true);

  //   if (activeTab === "sms") {
  //     SMSQr();
  //   } else if (activeTab === "website") {
  //     generateQr();
  //   } else if (activeTab === "text") {
  //     TextQr();
  //   } else if (activeTab === "vcard") {
  //     VCardQr();
  //   } else if (activeTab === "wifi") {
  //     WifiQr();
  //   } else if (activeTab === "whatsapp") {
  //     whatsappQr();
  //   } else if (activeTab === "email") {
  //     emailQr();
  //   }

  //   setLoading(false);
  // };

  // 🔹 GENERATE QR
  const handleGenerate = () => {
    if (loading) return;

    // ✅ Validate Website URL — only http:// and https:// allowed
    if (activeTab === "website") {
      const error = validateWebsiteUrl(website);
      if (error) {
        setUrlError(error);
        alert(error);
        return;
      }
    }

    // GA EVENT
    sendEvent("qr_generate_click", {
      event_category: "CTA",
      event_label: "Generate QR Clicked",
      tab_type: activeTab, // website | sms | wifi etc
    });

    const value = getQRValue();
    if (!value) {
      alert("Please fill required fields");
      return;
    }

    // Capture colors at generation time
    setGeneratedQrColor(qrColor);
    setGeneratedBgColor(bgColor);

    setQrValue(value);

    // ✅ Save generated QR to Admin Panel (AdminContext → localStorage)
    const TAB_TO_ADMIN_TYPE = {
      website: "URL",
      text: "Text",
      vcard: "vCard",
      wifi: "WiFi",
      whatsapp: "Social",
      email: "Email",
      sms: "SMS",
    };
    const TAB_TO_NAME = {
      website: `Website QR — ${website}`,
      text: "Text QR",
      vcard: `vCard — ${fname} ${lname}`.trim(),
      wifi: `WiFi — ${ssid}`,
      whatsapp: `WhatsApp — ${phone2}`,
      email: `Email — ${email1}`,
      sms: `SMS — ${phone}`,
    };
    addQrCode({
      name: TAB_TO_NAME[activeTab] || `${activeTab} QR`,
      type: TAB_TO_ADMIN_TYPE[activeTab] || "Text",
      value: value,
      status: "active",
      fgColor: qrColor,   // foreground colour picked on homepage
      bgColor: bgColor,   // background colour picked on homepage
    });

    // Route to appropriate QR generation function based on activeTab
    // Note: These functions are currently commented out in the code
    // Uncomment the respective functions when ready to use them
    // "sms" === activeTab ? SMSQr()
    //   : "website" === activeTab ? generateQr()
    //     : "text" === activeTab ? TextQr()
    //       : "vcard" === activeTab ? VCardQr()
    //         : "wifi" === activeTab ? WifiQr()
    //           : "whatsapp" === activeTab ? whatsappQr()
    //             : "email" === activeTab && emailQr();
  };

  // 🔹 DOWNLOAD QR
  const handleDownload = async () => {
    if (!qrRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(qrRef.current, {
        skipFonts: true,
        cacheBust: true,
        pixelRatio: 2,
        quality: 1,
        width: 300,
        height: 300,
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        }
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${activeTab}-qr.png`;
      link.click();

      // GA EVENT for download
      sendEvent("qr_download", {
        event_category: "QR",
        event_label: "QR Downloaded",
        tab_type: activeTab,
      });
    } catch (error) {
      console.error("Error downloading QR code:", error);
      alert("Failed to download QR code. Please try again.");
    }
  };




  return (
    <>
      <div className="Buton_2_BG bg-light" id="QR_Main">
        {/* DESKTOP / LAPTOP (md and up) */}
        <Container className="Buton_1_BG d-none d-md-block">
          <Row>
            {/* Left: tabs + content + design */}
            <Col md={8}>
              <Tabs
                activeKey={activeTab}
                onSelect={(e) => {
                  setActiveTab(e || "website"),
                    "website" === e && setQrCode(qrImages.website),
                    "sms" === e && setQrSMS(qrImages.sms),
                    "text" === e && setQrText(qrImages.text),
                    "vcard" === e && setQrVcard(qrImages.vcard),
                    "wifi" === e && setQrWifi(qrImages.wifi),
                    "whatsapp" === e && setQrWhatsapp(qrImages.whatsapp),
                    "email" === e && setQrEmail(qrImages.email);
                }}
                className="nn1"
              >
                {qrTypes.map((e) => (
                  <Tab
                    key={e.key}
                    eventKey={e.key}
                    title={
                      <div className="Top_BTn">
                        <span className="icon_Title">{e.icon}</span>

                        <span>{e.label}</span>
                      </div>
                    }
                  >
                    <div className="pt-3">{tabContent[e.key]}</div>
                  </Tab>
                ))}
              </Tabs>
              {/* Step 2 – Design your QR (matches your desktop screenshot) */}
              <div className="mt-4 p-3">
                <h4 className="fw-bold mb-3">Design your QR</h4>

                <Tabs defaultActiveKey="frame" className="mb-3">
                  <Tab eventKey="frame">
                    {/* title="Frame" */}
                    {/* Frame Selection */}
                    {/* Frame Selector Grid */}
                    {/* Frame Preview */}
                    {/* QR Overlay */}
                    {/* <div className="d-flex gap-3 overflow-auto pb-2 mb-3">
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "0.5rem",
                                  overflowX: "auto",
                                }}
                              >
                                {frameOptions1.map((frame, idx) => (
                                  <div
                                    key={idx}
                                    role="button"
                                    className={`border rounded text-center p-2 ${
                                      selectedFrameIndex === idx
                                        ? "border-primary bg-light"
                                        : ""
                                    }`}
                                    style={{
                                      width: 130,
                                      height: 150,
                                      flex: "0 0 auto",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      position: "relative",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => setSelectedFrameIndex(idx)}
                                  >
                                    
                                    {frame.image ? (
                                      <img
                                        src={frame.image}
                                        alt={`Frame ${idx}`}
                                        loading="lazy"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                          borderRadius: "6px",
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          zIndex: 1,
                                        }}
                                      />
                                    ) : (
                                      <span></span>
                                    )}
                                    
                                    {qr && frame.slot && (
                                      <img
                                        src={qr}
                                        alt="QR Code Preview"
                                        fetchPriority="high"
                                        loading="eager"
                                        decoding="async" // non-blocking decode
                                        style={{
                                          position: "absolute",
                                          objectFit: "contain",
                                          zIndex: 2,
                                          pointerEvents: "none",
                                          top: `${frame.slot.top}%`,
                                          left: `${frame.slot.left}%`,
                                          width: `${frame.slot.width}%`,
                                          height: `${frame.slot.height}%`,
                                        }}
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div> */}

                    {/* Frame Settings */}
                    <div>
                      {/* <div className="mb-3">
                              <label className="form-label fw-bold">Text</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Scan me!"
                                value={frameText}
                                onChange={(e) => setFrameText(e.target.value)}
                              />
                            </div> */}
                      <Row className="g-3">

                        <div className="container">
                          <div className="row">
                            <div className="col-md-3 mb-3">
                              <b>Color</b>
                              <input
                                type="color"
                                value={qrColor}
                                className="custom-color"
                                //onChange={(e) => handleQrColorChange(e.target.value)}
                                onChange={(e) => setQrColor(e.target.value)} //09-01//
                              />
                            </div>

                            <div className="col-md-3">
                              <b>Background Color</b>
                              <input
                                type="color"
                                value={bgColor}
                                className="custom-color"
                                // onChange={(e) => handleBgColorChange(e.target.value)}
                                onChange={(e) => setBgColor(e.target.value)}  //09-01//
                              />
                            </div>
                          </div>

                          <div className="col-md-12 generate-btn py-4">
                            <button
                              className="btn btn-primary rounded-5"
                              disabled={loading}
                              onClick={handleGenerate}
                            >
                              {loading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm me-2"></span>
                                  Generating...
                                </>
                              ) : (
                                "Generate QR Code"
                              )}
                            </button>
                          </div>

                        </div>
                      </Row>
                    </div>
                  </Tab>

                  {/* Shape Style Section */}
                  {/* Border & Center Style Section */}
                  {/* <Tab eventKey="shape" title="Shape">
                          <div className="mt-4">
                            <div className="border rounded p-3 mb-4">
                              <h5 className="fw-bold mb-3">Shape style</h5>
                              <div className="d-flex flex-wrap gap-2 mb-3">
                                {[...Array(8)].map((_, i) => (
                                  <button
                                    key={`shape-${i + 1}`} // ✅ clearer, more explicit
                                    className="btn btn-light border p-2"
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "contain",
                                    }}
                                  >
                                    <img
                                      src={`/shapes/shape${i + 1}.png`}
                                      alt={`Shape ${i + 1}`}
                                      className="img-fluid"
                                      loading="lazy"
                                    />
                                  </button>
                                ))}
                              </div>
                              <br />
                              <div className="d-flex gap-3 align-items-center">
                                <div>
                                  <label className="form-label">
                                    Border colour
                                    <input
                                      type="color"
                                      className="form-control form-control-color"
                                      defaultValue="#000000"
                                    />
                                  </label>
                                </div>
                                <div>
                                  <label className="form-label">
                                    Background colour
                                    <input
                                      type="color"
                                      className="form-control form-control-color"
                                      defaultValue="#FFFFFF"
                                    />
                                  </label>
                                </div>
                                <button className="btn btn-outline-primary mt-4">
                                  Invert
                                </button>
                              </div>
                            </div>
                            <div className="border rounded p-3">
                              <h5 className="fw-bold mb-3">Border style</h5>
                              <div className="d-flex flex-wrap gap-2 mb-3">
                                {[...Array(10)].map((_, i) => (
                                  <button
                                    key={`border-${i + 1}`} // ✅ key on top-level element
                                    className="btn btn-light border p-2"
                                    style={{ width: "50px", height: "50px" }}
                                  >
                                    <img
                                      src={`/borders/border${i + 1}.png`}
                                      alt={`Border ${i + 1}`}
                                      className="img-fluid"
                                      loading="lazy"
                                    />
                                  </button>
                                ))}
                              </div>
                              <br />
                              <h5 className="fw-bold mb-3">Center style</h5>
                              <div className="d-flex flex-wrap gap-2 mb-3">
                                {[...Array(10)].map((_, i) => (
                                  <button
                                    key={`center-${i + 1}`} // ✅ better than just `i`
                                    className="btn btn-light border p-2"
                                    style={{ width: "50px", height: "50px" }}
                                  >
                                    <img
                                      src={`/centers/center${i + 1}.png`}
                                      alt={`Center ${i + 1}`}
                                      className="img-fluid"
                                      loading="lazy"
                                    />
                                  </button>
                                ))}
                              </div>
                              <br />
                              <div className="d-flex gap-3 align-items-center">
                                <div>
                                  <label className="form-label">Border colour</label>
                                  <input
                                    type="color"
                                    className="form-control form-control-color"
                                    defaultValue="#000000"
                                  />
                                </div>
                                <div>
                                  <label className="form-label">
                                    Background colour
                                  </label>
                                  <input
                                    type="color"
                                    className="form-control form-control-color"
                                    defaultValue="#000000"
                                  />
                                </div>
                                <button className="btn btn-outline-primary mt-4">
                                  Invert
                                </button>
                              </div>
                            </div>
                          </div>
                        </Tab> */}

                  {/* Upload logo */}
                  {/* Logo options */}

                  {/* <Tab eventKey="logo" title="Logo">
                          <div className="p-3">
                            <h6 className="mb-3 fw-bold">Select a logo</h6>
      
                            <div
                              className="d-flex gap-3 overflow-auto mb-3 pb-2"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <RxValueNone className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <SiWhatsapp className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <RiLink className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <CiLocationOn className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <FaWifi className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <SlCalender className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <TfiEmail className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <RiQrScan2Line className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <GrGallery className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <MdDinnerDining className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <FaQrcode className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <FaPaypal className="LoGo_122" />
                              </div>
                              <div
                                role="button"
                                className="border rounded p-2 text-center"
                              >
                                <FaBitcoin className="LoGo_122" />
                              </div>
                            </div>

                            <div className="border rounded p-3 text-center">
                              <input
                                type="file"
                                accept="image/*"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </Tab> */}

                  {/* <Tab eventKey="level" title="Level">
                          <div className="mt-3">
                            <h6 className="fw-bold mb-3">Select a level</h6>
                            <div className="d-flex gap-4 flex-wrap">
                              {[
                                {
                                  name: "Level Q",
                                  percent: "25%",
                                  img: "your-q-image.png",
                                },
                                {
                                  name: "Level H",
                                  percent: "30%",
                                  img: "your-h-image.png",
                                },
                                {
                                  name: "Level M",
                                  percent: "15%",
                                  img: "your-m-image.png",
                                },
                                {
                                  name: "Level L",
                                  percent: "7%",
                                  img: "your-l-image.png",
                                },
                              ].map((level) => (
                                <div
                                  key={level.name} // ✅ better: unique & stable
                                  role="button"
                                  onClick={() => setSelectedLevel(level.name)}
                                  className={`border rounded p-2 text-center ${
                                    selectedLevel === level.name
                                      ? "border-primary bg-light"
                                      : ""
                                  }`}
                                  style={{
                                    cursor: "pointer",
                                    width: "auto",
                                    height: "100px",
                                  }}
                                >
                                  <img
                                    src={level.img}
                                    alt={level.name}
                                    className="img-fluid"
                                    loading="lazy"
                                    style={{ width: "80px", height: "80px" }}
                                  />
                                  <div className="mt-2 small fw-semibold">
                                    {level.name}
                                  </div>
                                  <div className="text-muted">{level.percent}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Tab> */}
                </Tabs>
                <div className="RIght_Row"></div>
              </div>
            </Col>

            {/* Right: Preview + Download (matches your desktop screenshot) */}
            <Col md={4} className="text-center">
              <h4 className="fw-bold py-2">Download your QR</h4>
              <div
                style={{
                  position: "relative",
                  width: "auto", // change as you like
                  margin: 0,
                  padding: 0,
                  aspectRatio: "1 / 1", // keep preview square; change if you want to match frame aspect
                  // border: "1px dashed #ddd",
                }}
              >
                {/* Frame (background or foreground—most frames work fine behind the QR) */}
                {/* ---- QR Preview ---- */}
                {/* <div>
                  {activeTab === "website" && qrCode && (
                    <img
                      src={qrCode}
                      alt="Website QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("website")}
                    />
                  )}

                  {activeTab === "sms" && qrSMS && (
                    <img
                      src={qrSMS}
                      alt="SMS QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("sms")}
                    />
                  )}
                  {activeTab === "text" && qrText && (
                    <img
                      src={qrText}
                      alt="Text QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("text")}
                    />
                  )}
                  {activeTab === "email" && qrEmail && (
                    <img
                      src={qrEmail}
                      alt="Email QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("email")}
                    />
                  )}
                  {activeTab === "vcard" && qrVcard && (
                    <img
                      src={qrVcard}
                      alt="VCard QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("vcard")}
                    />
                  )}
                  {activeTab === "wifi" && qrWifi && (
                    <img
                      src={qrWifi}
                      alt="WiFi QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("wifi")}
                    />
                  )}
                  {activeTab === "whatsapp" && qrWhatsapp && (
                    <img
                      src={qrWhatsapp}
                      alt="WhatsApp QR Code"
                      style={{
                        maxWidth: "300px",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDownload("whatsapp")}
                    />
                  )}
                </div> */}

                {/* QR SLOT */}
                <div
                  style={{
                    position: "absolute",
                    top: `${slot.top}%`,
                    left: `${slot.left}%`,
                    width: `${slot.width}%`,
                    height: `${slot.height}%`,
                    // display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  {/* Quiet zone: keep a little white margin so scanners read it reliably */}
                  <div
                    ref={setQrRef}
                    style={{
                      background: generatedBgColor,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      cursor: "pointer",
                      borderRadius: "25px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px"
                    }}
                    onClick={handleDownload}
                  >
                    {qrValue ? (
                      <QRCodeSVG
                        value={qrValue}
                        size={256}
                        fgColor={generatedQrColor}
                        bgColor={generatedBgColor}
                        level="H"
                        style={{
                          width: "100%",
                          height: "100%",
                          maxWidth: "256px",
                          maxHeight: "256px"
                        }}
                      />
                    ) : (
                      <div style={{ textAlign: "center", color: "#999" }}>
                        <img
                          src={QR_1}
                          alt="TheQRIFY Img"
                          style={{
                            width: "100%",
                            height: "100%",
                            maxWidth: "356px",
                            maxHeight: "356px"
                          }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>


              <div className="col-md-12 nnnn1">
                <Button
                  variant="light"
                  className="rounded-pill border text-center"
                  onClick={downloadCurrentQR}
                >
                  <HiOutlineDownload className="Dw_Icon" />
                  Download QR
                </Button>
                <Button
                  variant="light"
                  className="rounded-pill nnnn2 border text-center"
                  onClick={handleShare}
                >
                  <HiOutlineShare className="Dw_Icon" />
                  Share QR
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        {/* MOBILE (under md) – matches your mobile screenshots */}
        <Container className="bg-white p-3 rounded shadow-sm d-md-none">
          {/* Preview Card */}
          <div className="border rounded p-3 mb-3">
            <div className="text-center text-muted small mb-2">Preview</div>

            {/* QR Preview Wrapper */}
            <div
              className="border rounded d-flex align-items-center justify-content-center mb-4"
              style={{ minHeight: "256px", padding: "20px" }}
            >
              <div
                ref={setQrRef}
                style={{
                  background: generatedBgColor,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px"
                }}
              >
                {qrValue ? (
                  <QRCodeSVG
                    value={qrValue}
                    size={220}
                    fgColor={generatedQrColor}
                    bgColor={generatedBgColor}
                    level="H"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxWidth: "256px",
                      maxHeight: "256px",
                      padding: "10px",
                    }}
                  />
                ) : (
                  <div style={{ textAlign: "center", color: "#999" }}>
                    <img
                      src={QR_1}
                      alt="TheQRIFY Img"
                      style={{
                        width: "100%",
                        height: "100%",
                        maxWidth: "256px",
                        maxHeight: "256px",
                      }} />
                  </div>
                )}
              </div>
            </div>

            {/* Step Toggles */}
            <div className="d-flex gap-2 mb-3">
              <Button
                size="sm"
                variant={"content" === mobileStep ? "primary" : "light"}
                className="flex-fill"
                onClick={() => setMobileStep("content")}
              >
                Content
              </Button>

              <Button
                size="sm"
                variant={"design" === mobileStep ? "primary" : "light"}
                className="flex-fill"
                onClick={() => setMobileStep("design")}
              >
                Design
              </Button>
            </div>

            {/* Content Step */}
            {mobileStep === "content" && (
              <>
                <Button
                  variant="light"
                  className="w-100 border rounded mb-3 d-flex justify-content-between align-items-center"
                  onClick={() => setShowTypeModal(true)}
                >
                  <span className="d-inline-flex align-items-center gap-2">
                    {qrTypes.find((t) => t.key === activeTab)?.icon}
                    {qrTypes.find((t) => t.key === activeTab)?.label}
                  </span>
                  <span className="caret">▾</span>
                </Button>

                <Modal
                  show={showTypeModal}
                  onHide={() => setShowTypeModal(false)}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Select QR Type</Modal.Title>
                  </Modal.Header>
                  <Modal.Body
                    activeKey={activeTab}
                    onSelect={(k) => {
                      setActiveTab(k || "website");

                      if (k === "sms") {
                        setQrSMS(qrImages.sms); // 👈 show default SMS QR when switching
                      }
                      if (k === "website") {
                        setQrCode(qrImages.website); // 👈 show default Website QR
                      }
                      if (k === "text") {
                        setQrText(qrImages.text); // 👈 show default text QR
                      }
                      if (k === "vcard") {
                        setQrVcard(qrImages.vcard); // 👈 show default VCard QR
                      }
                      if (k === "wifi") {
                        setQrWifi(qrImages.wifi); // 👈 show default WiFi QR
                      }
                      if (k === "whatsapp") {
                        setQrWhatsapp(qrImages.whatsapp); // 👈 show default WhatsApp QR
                      }
                      if (k === "email") {
                        setQrEmail(qrImages.email); // 👈 show default Email QR
                      }
                    }}
                    className="p-2 nn1"
                  >
                    {qrTypes.map((t) => (
                      <Button
                        key={t.key}
                        variant={t.key === activeTab ? "primary" : "light"}
                        className="w-100 d-flex align-items-center justify-content-start gap-2 mb-2"
                        onClick={() => {
                          setActiveTab(t.key);
                          setShowTypeModal(false);
                        }}
                      >
                        {t.icon}
                        {t.label}
                      </Button>
                    ))}
                  </Modal.Body>
                </Modal>

                {/* Tab Content */}
                <div className="mb-3">{tabContent[activeTab]}</div>

                {/* Generate QR */}
                <Button
                  className="btn btn-primary rounded-4 w-100 mb-2"
                  onClick={handleGenerate}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Generating...
                    </>
                  ) : (
                    "Generate QR Code"
                  )}
                  {/* {country?.toUpperCase()} */}
                </Button>

                {/* Download QR */}
                <Button
                  variant="light"
                  className="rounded-pill border mb-2 w-100 text-center"
                  //onClick={downloadCurrentQR}
                  onClick={downloadCurrentQR} //09-01//
                >
                  <HiOutlineDownload className="Dw_Icon" />
                  Download QR
                </Button>
                <Button
                  variant="light"
                  className="rounded-pill w-100 border text-center"
                  onClick={handleShare}
                >
                  <HiOutlineShare className="Dw_Icon" />
                  Share QR
                </Button>
              </>
            )}

            {/* Design Step */}
            {mobileStep === "design" && (
              <div className="bg-light p-3 rounded">
                <div className="row mb-3">
                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <b>Color</b>
                    <input
                      type="color"
                      value={qrColor}
                      className="custom-color mt-2"
                      onChange={(e) => setQrColor(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <b>Background Color</b>
                    <input
                      type="color"
                      value={bgColor}
                      className="custom-color mt-2"
                      onChange={(e) => setBgColor(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
      {/* modal for mobile type selection */}
      {/* <Modal
                show={showTypeModal}
                onHide={() => setShowTypeModal(false)}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Select a QR type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ListGroup>
                    {qrTypes.map((t) => (
                      <ListGroup.Item
                        key={`qr-${t.key}`} // ✅ scoped, descriptive key
                        action
                        onClick={() => {
                          setActiveTab(t.key);
                          setShowTypeModal(false);
                        }}
                      >
                        <span className="d-inline-flex align-items-center button2 gap-2">
                          {t.icon}
                          {t.label}
                        </span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Modal.Body>
              </Modal> */}

      {/* QR Code Generator – Create Your Free, Custom QR Code in Seconds */}

      <div className="button_4_Bg text-center bg-white py-5 mb-5" id="About">
        <Container>
          <h1 className="fw-bold">
            QR Code Generator – Create Your Free, Custom QR Code in Seconds
          </h1>

          <p className="text-muted mb-5">
            Design, customize, and download your free QR code with your own colors, shapes, and logo — all in just 3 simple steps.
            Perfect for businesses, restaurants, creators, events, products, and personal use.
          </p>

          <h2 className="fw-semibold mb-5">How to create a QR code?</h2>

          <Row className="g-3 step_1_Img justify-content-center">
            <Col md={4} sm={6} xs={12}>
              <div className="card h-100 d-flex flex-column align-items-center text-center">
                <picture className="w-100">
                  <source srcSet={step1} type="image/webp" />
                  <img
                    src={step1}
                    alt="Step 1"
                    loading="lazy"
                    className="card-img-top img-fluid p-3 step-card-img"
                  />
                </picture>

                <div className="card-body d-flex flex-column">
                  <h1 className="fw-bold h5">Step 1</h1>
                  <h2 className="fw-bold h5 mb-3">Choose the Content for Your QR Code</h2>

                  <div className="text-muted mx-4 text-start mb-2">
                    <p className="mb-2">
                      Select what you want your QR code to link to. TheQrify supports a wide variety of QR code types, including:
                    </p>
                    <ul className="text-start">
                      <li>Website URL</li>
                      <li>PDF documents</li>
                      <li>Restaurant menus</li>
                      <li>Videos</li>
                      <li>Business cards (vCard)</li>
                      <li>Social media</li>
                      <li>Apps & app stores</li>
                      <li>Text, contact info, WiFi, and more</li>
                    </ul>
                    <p className="mb-0">Simply pick the type and add your information.</p>
                  </div>

                  {/* optional spacer so footer/buttons stay at bottom */}
                  <div className="mt-auto"></div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={6} xs={12}>
              <div className="card h-100 d-flex flex-column align-items-center text-center">
                <img
                  src={step2}
                  alt="Step 2"
                  loading="lazy"
                  className="card-img-top img-fluid p-3 step-card-img"
                />

                <div className="card-body d-flex flex-column">
                  <h1 className="fw-bold h5">Step 2</h1>
                  <h2 className="fw-bold h5 mb-3">Customize & Design Your QR Code</h2>

                  <div className="text-muted mx-4 text-start mb-2">
                    <p className="mb-2">Make your QR code truly unique with our advanced design options:</p>
                    <ul className="text-start">
                      <li>Choose custom colors</li>
                      <li>Select from multiple shapes & styles</li>
                      <li>Add your own logo or brand mark</li>
                      <li>Edit frames, eyes, and patterns</li>
                      <li>Preview your QR code in real-time</li>
                    </ul>
                    <p className="mb-0">Our design tool helps you create a professional, branded QR code that stands out everywhere you display it.</p>
                  </div>

                  <div className="mt-auto"></div>
                </div>
              </div>
            </Col>

            <Col md={4} sm={6} xs={12}>
              <div className="card h-100 d-flex flex-column align-items-center text-center">
                <img
                  src={step3}
                  alt="Step 3"
                  loading="lazy"
                  className="card-img-top img-fluid p-3 step-card-img"
                />

                <div className="card-body d-flex flex-column">
                  <h1 className="fw-bold h5">Step 3</h1>
                  <h2 className="fw-bold h5 mb-3">Download Your QR Code Instantly</h2>

                  <div className="text-muted mx-4 text-start mb-2">
                    <p className="mb-2">Once your design is ready, download your QR code in multiple high-quality formats:</p>
                    <ul className="text-start">
                      <li>PNG (best for digital use)</li>
                      <li>SVG (infinite scalability for print)</li>
                      <li>PDF (ideal for documents & flyers)</li>
                    </ul>
                    <p className="mb-0">Print it, share it digitally, or integrate it into menus, posters, business cards, packaging, brochures — anywhere. And just like that… your QR code is ready to use!</p>
                  </div>

                  <div className="mt-auto"></div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="mt-5">
            <Button
              as="a"
              href="/#QR_Main"
              variant="primary"
              size="lg"
              className="fw-semibold rounded-pill touch-btn"
              style={{ backgroundColor: '#005F9E' }}
            >
              Create QR code
            </Button>
          </div>
        </Container>
      </div>

      {/* Why Choose TheQrify? */}

      {/* <div className="button_4_Bg text-center bg-white" id="About">
        <Container>
          <h1 className="fw-bold mb-4">
            Why Choose TheQrify?
          </h1>
          <Row className="g-3 step_1_Img justify-content-center">
            <Col md={2} sm={6} xs={12}></Col>
            <Col md={4} sm={4} xs={12}>
              <div className="h-100 d-flex flex-column align-items-center text-center">
                <img
                  src={thinking}
                  className="card-img-top1 img-fluid step-card-img"
                  alt="Step 3"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={5} sm={6} xs={12}>
              <div className="card-body d-flex flex-column">
                <ul className="text-start">
                  <li>100% free QR code generator</li>
                  <li>No login required</li>
                  <li>High-resolution downloads</li>
                  <li>Professional customization</li>
                  <li>Suitable for business and personal use</li>
                  <li>Simple, fast, and secure</li>
                </ul>
                <p className="mt-auto text-start">TheQrify helps you create modern, branded, and high-performing QR codes in minutes.</p>
              </div>
            </Col>
          </Row>

        </Container>
      </div> */}

      {/* Your all-in-one marketing platform */}
      {/* <Container className="py-5 text-center">
          <h2 className="mb-5 fw-bold">Your all-in-one marketing platform</h2>
          <Row className="g-4">
            {features.map((feat) => (
              <Col key={feat.title} xs={12} sm={6} md={4} lg={4}>
                <Card className="h-100 feature-card">
                  <Card.Body>
                    <div className="icon-box hover-icon mb-3 mx-auto">
                      {feat.icon}
                    </div>
                    <Card.Title className="fw-semibold">{feat.title}</Card.Title>
                    <Card.Text className="text-muted small">
                      {feat.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            <Col xs={12} sm={6} md={4} lg={4}>
              <PixelIntegrationCard />
            </Col>
          </Row>

          <div className="mt-5">
            <Button variant="primary" size="lg">
              Create QR code
            </Button>
          </div>
        </Container> */}
      {/* Discover how to use QR codes to boost your marketing strategy. */}
      {/* Left button with aria-label */}
      {/* Changed to h2 for correct heading hierarchy */}
      {/* Right button with aria-label */}
      {/* <div className="bg-white">
      <Container className="py-5">
        <p className="text-primary fw-semibold">QR CODES ON</p>
        <h2 className="mb-5 fw-bold">
          Discover how to use QR codes to boost your marketing strategy.
        </h2>

        <div className="position-relative">
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="arrow-btn"
              aria-label="Scroll left"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>

            <div className="slider-container" ref={sliderRef}>
              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_1}
                  alt="Business card with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Business cards</Card.Title>
                  <Card.Text className="text-muted">
                    Turn your card into an interactive tool by adding a QR code
                    that connects clients and employers with your work, social
                    networks and contact information.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fixed-auto fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Business cards"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_2}
                  alt="Pamphlet with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Pamphlets</Card.Title>
                  <Card.Text className="text-muted">
                    Expand the printed information on your pamphlets with a QR
                    code, offering interactive content and measuring its reach
                    in real time.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fixed-auto fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Pamphlets"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_3}
                  alt="Brochure with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Brochures</Card.Title>
                  <Card.Text className="text-muted">
                    Complement the content of your brochures by adding a QR code
                    that provides access to multimedia content such as videos
                    and online documents.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Brochures"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_6}
                  alt="Bottle with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Bottles and cans</Card.Title>
                  <Card.Text className="text-muted">
                    Turn your packaging into smart labels with a QR code that
                    offers access to information about origin, ingredients and
                    exclusive promotions.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Bottles and cans"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_5}
                  alt="Product packaging with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Product packaging</Card.Title>
                  <Card.Text className="text-muted">
                    Reduce the text on your packaging and provide access to key
                    information, exclusive discounts and social media through a
                    simple scan.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Product packaging"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>

              <Card className="qr-slide-card">
                <Card.Img
                  variant="top"
                  src={qr_image_4}
                  alt="Menu with QR code"
                  className="qr-slide-img"
                  loading="lazy"
                  decoding="async"
                />
                <Card.Body>
                  <Card.Title as="h2">Menu</Card.Title>
                  <Card.Text className="text-muted">
                    Keep your menu up to date with a QR code. Forget about
                    reprints and make it easy for your diners to access
                    interactive options.
                  </Card.Text>
                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none more-info-btn"
                    aria-label="More info about Menu"
                  >
                    More Info →
                  </a>
                </Card.Body>
              </Card>
            </div>

            <button
              onClick={() => scroll("right")}
              className="arrow-btn"
              aria-label="Scroll right"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-4 text-end">
          <Button variant="outline-primary" className="rounded-pill px-4">
            See more
          </Button>
        </div>
      </Container>
    </div> */}
      {/* Explore our extensive collection of QR codes */}
      {/* Header */}
      {/* Desktop View (Split Layout) */}
      {/* <div className="bg-white">
      <div className="container text-center py-5">
        <p className="text-primary fw-bold">QR CODES FOR</p>
        <h2 className="fw-bold">
          Explore our extensive collection of QR codes
        </h2>
        <p className="text-muted">
          QR codes can contain a wide range of content and at TheQRIFY we offer them
          all.
        </p>

        <div className="d-none d-md-flex justify-content-center mt-4">
          <div className="card shadow-lg border-1 rounded-2 w-100">
            <div className="row Img_Slide g-0 align-items-center">
              <div className="col-md-4 p-5 text-start">
                <h3>{content[activeKey].title}</h3>
                <button className="btn border-1 rounded-5 border-white mt-3">
                  {content[activeKey].button}
                </button>
              </div>
              <div className="col-md-8">
                <img
                  src={content[activeKey].img}
                  alt={content[activeKey].title}
                  className="rounded-end-3 w-100"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-block d-md-none mt-4">
          <div
            id="qrCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {Object.keys(content).map((key, index) => (
                <div
                  key={key}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div
                    className="text-white text-center shadow-lg border-0 rounded"
                    style={{
                      backgroundImage: `url(${content[key].img})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      className="card-body d-flex flex-column justify-content-end p-4"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                      }}
                    >
                      <h1 className="fw-bold">{content[key].title}</h1>
                      <button className="btn btn-light mt-3">
                        {content[key].button}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#qrCarousel"
              data-bs-slide="prev"
              aria-label="Previous Slide"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#qrCarousel"
              data-bs-slide="next"
              aria-label="Next Slide"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="d-none d-md-flex justify-content-center mt-4">
          <ul className="nav nav-tabs flex-wrap">
            <li className="nav-item">
              <button
                className={`m-2 nav-link ${
                  activeKey === "wedding" ? "active" : ""
                }`}
                onClick={() => setActiveKey("wedding")}
              >
                QR code for weddings
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`m-2 nav-link ${activeKey === "ngo" ? "active" : ""}`}
                onClick={() => setActiveKey("ngo")}
              >
                QR code for NGOs
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`m-2 nav-link ${
                  activeKey === "photographer" ? "active" : ""
                }`}
                onClick={() => setActiveKey("photographer")}
              >
                QR code for Photographers
              </button>
            </li>
          </ul>
        </div>
      </div>
</div> */}
      {/* Everything you need to know to get started */}
      <div className="bg-white mb-5">
        <div className="container">
          <div className="row justify-content-center button_4_Bg text-center py-3 mb-3" id="FAQ">
            <div className="col-md-12">
              <h1>Everything You Need to Know to Get Started with QR Codes</h1>
            </div>

            <div className="col-md-9">
              <p>
                Discover the essential concepts, benefits, and simple steps to begin using QR codes effectively.
                This guide will help you understand what QR codes are, why they are so powerful, and how anyone—from individuals to businesses—can start using them instantly.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-3 img_10_png">
              <img
                src={img_10}
                alt="QR Code"
                className="img-fluid"
                loading="lazy"
              />
            </div>
            <div className="col-md-4 FaQ_Slider">
              <div className="accordion" id="qrAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What Is a QR Code?
                    </button>
                  </h2>

                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      A <b className="B_Tages"> QR Code (Quick Response Code)</b> is a type of two-dimensional barcode that allows instant access to digital information through a simple scan.
                      Unlike traditional barcodes, QR codes can store <b className="B_Tages"> significantly more data</b>, including website links, contact details, menus, videos, app links,
                      documents, and more.
                      Created in 1994 by <b className="B_Tages"> Denso Wave</b>, a subsidiary of Toyota, QR codes were originally designed to track automotive parts and streamline logistics.
                      Today, QR codes have become an essential tool worldwide due to their:
                      <ul>
                        <li>High speed of scanning</li>
                        <li>Large storage capacity</li>
                        <li>Compatibility with all smartphones</li>
                        <li>Ability to connect the physical and digital worlds instantly</li>
                      </ul>
                      Thanks to modern smartphone cameras, anyone can scan a QR code without needing special equipment.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Benefits of Using QR Codes
                    </button>
                  </h2>

                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      QR codes have become a powerful tool for businesses, creators, and individuals due to their <b className="B_Tages"> versatility, accessibility, and convenience.</b>
                      Here are some key benefits:
                      <ol>
                        <li><b className="B_Tages">1. Fast, Contactless Information Sharing</b></li>
                        Share menus, catalogs, PDFs, website links, app downloads, or product details instantly—no typing needed.
                        <li><b className="B_Tages">2. Ideal for Marketing & Promotions</b></li>
                        QR codes are widely used in digital marketing campaigns, posters, packaging, business cards, events, and advertisements.
                        With one scan, users reach exactly where you want them—your website, social profiles, form, or product page.
                        <li><b className="B_Tages">3. Supports Online Payments</b></li>
                        QR codes enable quick, secure payments through platforms like UPI, wallets, and banking apps—making transactions effortless.
                        <li><b className="B_Tages">4. Customer Engagement & Feedback</b></li>
                        Use QR codes to collect reviews, surveys, ratings, or customer feedback directly from your audience.
                        <li><b className="B_Tages">5. Boosts Business Visibility</b></li>
                        More brands today rely on QR codes to enhance customer interactions, increase conversions, and offer seamless digital experiences.
                      </ol>
                      From restaurants and retail stores to real estate agencies, freelancers, gyms, cafés, and e-commerce brands — QR codes help everyone communicate faster
                      and more effectively.

                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How to Start Using QR Codes
                    </button>
                  </h2>

                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      Most modern smartphones have a <b className="B_Tages"> built-in QR scanner </b> within the camera app, making scanning extremely simple.
                      <ol>
                        <li><b className="B_Tages">Step 1: Open Your Camera</b></li>
                        Point your smartphone camera at any QR code and keep it still for a few seconds.
                        <li><b className="B_Tages">Step 2: Wait for the Popup</b></li>
                        A notification or link preview will appear on your screen automatically. Tap to open.
                        <li><b className="B_Tages">Step 3: If Scanning Doesn’t Work</b></li>
                      </ol>
                      <ul>
                        <li>Ensure QR scanning is enabled in your camera settings</li>
                        <li>Clean your camera lens</li>
                        <li>Improve lighting conditions</li>
                        <li>Try holding the phone steady at a slight distance</li>
                      </ul>
                      If your device does not support built-in scanning, simply download a <b className="B_Tages"> QR Code Reader</b> app from the App Store or Google Play.

                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Start Creating Your Own QR Codes
                    </button>
                  </h2>

                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#qrAccordion"
                  >
                    <div className="accordion-body">
                      Now that you understand QR codes and their benefits, creating your own is easy.
                      With TheQrify, you can generate <b className="B_Tages"> free, customizable QR codes </b> in just a few seconds—perfect for businesses, events, marketing, payments, and more.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container py-5 mb-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card shadow-sm position-relative text-center pt-5">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="Donald Jackman"
                className="rounded-circle position-absolute top-0 start-50 translate-middle"
                width="100"
                height="100"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />

              <div className="card-body mt-4">
                <h3 className="card-title mb-1">Donald Jackman</h3>
                <p className="text-muted mb-3">Content Creator</p>
                <p className="card-text">
                  I've been using imagify for nearly two years, primarily for
                  Instagram, and it has been incredibly user-friendly, making my
                  work much easier.
                </p>
                <div className="d-flex justify-content-center pt-2">
                  <StarIcons />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm position-relative text-center pt-5">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="Richard Nelson"
                className="rounded-circle position-absolute top-0 start-50 translate-middle"
                width="100"
                height="100"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body mt-4">
                <h3 className="card-title mb-1">Richard Nelson</h3>
                <p className="text-muted mb-3">Instagram Influencer</p>
                <p className="card-text">
                  I've been using imagify for nearly two years, primarily for
                  Instagram, and it has been incredibly user-friendly, making my
                  work much easier.
                </p>
                <div className="d-flex justify-content-center pt-2">
                  <StarIcons />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm position-relative text-center pt-5">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="James Washington"
                className="rounded-circle position-absolute top-0 start-50 translate-middle"
                width="100"
                height="100"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body mt-4">
                <h3 className="card-title mb-1">James Washington</h3>
                <p className="text-muted mb-3">Marketing Manager</p>
                <p className="card-text">
                  I've been using imagify for nearly two years, primarily for
                  Instagram, and it has been incredibly user-friendly, making my
                  work much easier.
                </p>
                <div className="d-flex justify-content-center pt-2">
                  <StarIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-white">
        <div className="container py-5">
          <div className="row py-5 button_4_Bg" id="FaQ1">
            <div className="col-md-12 text-center">
              <h1>FAQ – Don’t Leave With Doubts</h1>
              <p>Everything you need to know about creating, customizing, and using QR codes with TheQrify.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="accordion" id="qrAccordion1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne1"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      1. What is a QR Code Generator?
                    </button>
                  </h2>

                  <div
                    id="collapseOne1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      A QR code generator is an online tool that lets you create QR codes quickly and easily.
                      With TheQrify, you can generate multiple types of QR codes such as:
                      <ul>
                        <li>Website links</li>
                        <li>PDF documents</li>
                        <li>Images & photo galleries</li>
                        <li>Menus & price lists</li>
                        <li>Video links</li>
                        <li>Playlists</li>
                        <li>Business cards (vCards)</li>
                        <li>WiFi access</li>
                        <li>App store links</li>
                        <li>Payment links</li>
                        <li>Customer feedback forms</li>
                        <li>Event promotions</li>
                      </ul>
                      Businesses across all industries use QR codes for marketing, payments, customer engagement, and seamless digital access.
                      TheQrify makes it simple, intuitive, and fully customizable.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo1"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. Are QR Codes Free?
                    </button>
                  </h2>

                  <div
                    id="collapseTwo1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes — you can create <b className="B_Tages">free QR codes</b> with TheQrify.
                      In our upcoming version, we will offer:
                      <ul>
                        <li>Free access for basic features</li>
                        <li>Paid plans for advanced features like analytics, dynamic QR codes, and file hosting</li>
                      </ul>
                      Everything you generate during your free period remains yours forever.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree1"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. Can I create an account to generate free QR Codes?

                    </button>
                  </h2>

                  <div
                    id="collapseThree1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Absolutely.
                      You will have <b className="B_Tages">free access</b> to generate QR codes with essential features.
                      When paid plans launch, you can upgrade anytime if you want advanced tools for business.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour1"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. Why do some websites offer QR code creation for free?
                    </button>
                  </h2>

                  <div
                    id="collapseFour1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Many free platforms generate <b className="B_Tages">static QR codes</b>, which don’t allow:
                      <ul>
                        <li>Editing</li>
                        <li>Updating content</li>
                        <li>Tracking scans</li>
                        <li>Hosting files</li>
                      </ul>
                      At TheQrify, our goal is to provide <b className="B_Tages">dynamic, editable, and analytics-enabled QR codes,</b> which require hosting, storage, security, and server optimizations — hence premium plans will support these capabilities.
                      Static QR = free but limited
                      Dynamic QR = powerful, editable, trackable
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive1"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      5. Can the QR codes I generate be used for commercial purposes?
                    </button>
                  </h2>

                  <div
                    id="collapseFive1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes, 100%.
                      You can use TheQrify QR codes for:
                      <ul>
                        <li>Marketing campaigns</li>
                        <li>Product packaging</li>
                        <li>Restaurant menus</li>
                        <li>Offline-to-online promotions</li>
                        <li>Digital business cards</li>
                        <li>Retail displays</li>
                        <li>Events, exhibitions & brochures</li>
                        <li>Payments and service links</li>
                      </ul>
                      Thousands of businesses use QR codes to increase visibility, engagement, and conversions.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix1"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      6. What kind of information can be stored in a QR Code?
                    </button>
                  </h2>

                  <div
                    id="collapseSix1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      QR codes can store a wide variety of data, including:
                      <ul>
                        <li>URLs</li>
                        <li>PDFs</li>
                        <li>Videos</li>
                        <li>Images</li>
                        <li>Playlists</li>
                        <li>Price lists</li>
                        <li>Menus</li>
                        <li>Documents</li>
                        <li>Payment links</li>
                        <li>WiFi details</li>
                        <li>Contact information (vCard)</li>
                        <li>App download links</li>
                      </ul>

                      With TheQrify, you can redirect users to any type of digital content with just a scan.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven1"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      7. Do QR Codes have a scan counter or analytics?
                    </button>
                  </h2>

                  <div
                    id="collapseSeven1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes — in our paid plans (coming soon), you will get advanced analytics features such as:
                      <ul>
                        <li>Number of scans</li>
                        <li>Device type</li>
                        <li>Location insights</li>
                        <li>Scan time & engagement data</li>
                      </ul>
                      This helps you analyze and optimize your campaigns for better results.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight1"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      8. How long are QR Codes valid? Do they expire?
                    </button>
                  </h2>

                  <div
                    id="collapseEight1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      QR codes do <b className="B_Tages">not</b> expire.
                      A QR code remains active unless:
                      <ul>
                        <li>The link changes</li>
                        <li>The linked file is deleted</li>
                        <li>The website goes offline</li>
                      </ul>
                      With <b className="B_Tages">dynamic QR codes,</b> you can update the link anytime without changing the printed code — ensuring long-term usability.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine1"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      9. What is the difference between a static and dynamic QR code?
                    </button>
                  </h2>

                  <div
                    id="collapseNine1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Static QR Codes
                      <ul>
                        <li>Cannot be edited</li>
                        <li>Cannot track scans</li>
                        <li>Directly embed the URL</li>
                        <li>Best for simple, unchanging uses</li>
                      </ul>
                      Dynamic QR Codes
                      <ul>
                        <li>Fully editable even after printing</li>
                        <li>Track scan analytics</li>
                        <li>Allow link updates anytime</li>
                        <li>Ideal for business, marketing, and professional use</li>
                      </ul>
                      TheQrify offers dynamic QR capabilities in paid plans.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen1"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      10. Can I manage all my QR Codes within the generator?
                    </button>
                  </h2>

                  <div
                    id="collapseTen1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTen"
                    data-bs-parent="#qrAccordion1"
                  >
                    <div className="accordion-body">
                      Yes.
                      Once our dashboard and paid plans launch, you’ll be able to:
                      <ul>
                        <li>Create unlimited QR codes</li>
                        <li>Save and manage your designs</li>
                        <li>Edit or delete QR codes</li>
                        <li>Add logos, frames & customized styles</li>
                        <li>Update links in dynamic QR codes</li>
                        <li>Track analytics</li>
                        <li>Store your brand templates</li>
                      </ul>
                      Our goal is to provide a complete QR code management system for individuals and businesses.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2"></div>
          <div className="col-md-4 py-5">
            <img
              src={img_11}
              alt="QR Code"
              className="QR_12"
              loading="lazy"
            />
          </div>

          <div className="col-md-6 py-5 d-flex align-items-center">
            <div className="QR_12_Font">
              <h1>Want to Know More?</h1>

              <p>
                Have questions about creating, customizing, or using QR codes?
                Explore our detailed <b className="B_Tages">Frequently Asked Questions</b> and find clear answers to everything you need to get started with TheQrify.
              </p>
              <a href="#FaQ1">
                <button
                  className="btn btn-primary rounded-5"
                  onClick={() =>
                    sendEvent("faq_open", {
                      event_category: "FAQ",
                      event_label: "FAQ Item Opened",
                      faq_id: "FaQ1",
                    })
                  }
                >
                  View FAQs
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-100 text-white Buton_3_BG" >
        <div className="container py-5 d-flex flex-column align-items-center">
          <div className="mb-4">
            <a href="https://theqrify.com/">
              <img
                src={logo1}
                alt="TheQRIFY Logo"
                loading="lazy"
                width={120}
                height={55}
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>

          <p className="text-center text-sm" style={{ maxWidth: "600px" }}>
            Empowering creators and businesses with fast, customizable, and high-quality QR codes. Transform how you share information.
          </p>
        </div>

        <div className="border-top" style={{ borderColor: "#3B1A7A" }}>
          <div className="container py-3 text-center text-sm">
            <a
              href="https://theqrify.com/"
              className="text-decoration-none"
              style={{ color: "#015f9e" }}
            >
              TheQRIFY
            </a>
            ©2025. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default QRGenerator;
