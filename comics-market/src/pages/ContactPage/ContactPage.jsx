import pagesStyle from "../../pages/Pages.module.css";
import styles from "./ContactPage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <section>
            <div className={styles.title}><p className={styles.logoTitle}>BOOM COMICS</p><p>_Contact</p></div>
            <p className={styles.paragraph}>
Last updated: March 21, 2025. <br /><br />

1. Information We Collect:
We collect personal information when you register on our site, place an order, subscribe to our newsletter, or fill out a form. This may include your name, email address, billing information, shipping address, and payment details.<br /><br />

2. How We Use Your Information:
The information we collect may be used in the following ways:<br /><br />

To process transactions and fulfill orders.
To personalize your experience and respond to customer service requests.
To send periodic emails about promotions, new products, and updates (you can opt-out at any time).
To improve our website and enhance your shopping experience.<br /><br />
3. Sharing Your Information:
We do not sell, trade, or transfer your personal information to third parties except for trusted partners who assist us in operating our website, processing payments, and delivering products. All partners are required to keep your information confidential.<br /><br />

4. Data Protection:
We implement a variety of security measures to maintain the safety of your personal information. Our website uses secure servers and encryption to protect sensitive data.<br /><br />

5. Your Rights:
You have the right to access, correct, update, or request the deletion of your personal information. Please contact us using the information below for any requests.<br /><br />

6. Cookies and Tracking Technologies:
We use cookies to enhance your experience, analyze website traffic, and customize content. You can control cookie preferences through your browser settings.<br /><br />

7. Data Retention:
We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.<br /><br />

8. Children's Privacy:
Our website is not intended for individuals under 13 years of age. We do not knowingly collect information from children under 13.<br /><br />

9. Contact Us:
If you have any questions about this privacy policy or wish to exercise your data protection rights, please contact us at: privatepolicy@boomcomics.com</p>
        </section>
      <Footer />
    </>
  );
}
