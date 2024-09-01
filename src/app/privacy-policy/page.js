"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <motion.div
        className="min-h-screen "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="container mx-auto px-4 py-12">
          <section className="bg-white p-8  rounded-md">
            <h2 className="text-2xl font-semibold mb-4">
              Almond Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              This privacy policy (“Policy”) applies to the website(s) and
              mobile application(s) (hereinafter referred to as, the "Sites")
              provided by Almond, a digital product of Transatlantic Trusted
              Partners Limited (“Transatlantic Trust”, “we”, “us”, “our”), and
              other products/services of Transatlantic Trust Limited and
              subsidiaries. This Policy discloses our data protection practices
              on our Sites, products, and subscriber-based services
              (“Services”), inclusive of the type of personal data that we
              collect, our method of collection of personal data, use of
              personal data, and procedures for sharing personal data with third
              parties.
            </p>
            <p className="text-gray-700 mb-4">
              The Sites covered by this Policy include our existing websites,
              mobile applications, and all other additional websites and mobile
              applications produced and managed by Transatlantic Trust. Details
              of existing Sites include the following:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Almond - www.almondnigeria.com;</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We value the trust you place in us and understand that your
              privacy is of utmost importance to you. In light of this, we make
              use of the highest standards to ensure secure transactions and the
              privacy of customer information. We are committed to protecting
              your personal data (i.e., any information you provide to us
              through which you can be identified) in accordance with the
              provisions of the Nigeria Data Protection Act 2023 and other
              applicable data protection laws (“Data Protection Laws”). By
              visiting the Sites (including all websites and mobile applications
              which may be added or removed from time to time) you agree to the
              terms and conditions of this Privacy Policy. If you do not want
              your personal data processed in accordance with this Policy,
              please do not use or access the Sites or the Services. We reserve
              the right, at our sole discretion, to alter and update this Policy
              from time to time. We therefore invite you to review the current
              version of this Policy each time you return to the Sites.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Eligibility</h3>
            <p className="text-gray-700 mb-4">
              The Sites and Services are intended solely for persons who, if
              they are natural persons, are eighteen (18) years of age or older,
              and any registration by, use of, or access to the Sites and
              Services by any natural person under eighteen (18) is
              unauthorized, unlicensed, and in violation of this Policy.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Consent</h3>
            <p className="text-gray-700 mb-4">
              By using the Sites, Services, and by providing your personal data,
              you consent to the collection and use of the information you
              disclose to us in accordance with this Policy, including but not
              limited to your consent for sharing your personal data in line
              with the terms contained in this Policy. If we decide to change
              this Policy, we will post those changes on this page so that you
              are always aware of what information we collect, how we use it,
              and under what circumstances we disclose it. If you do not agree
              to give consent to the use of personal data as described in this
              Policy, please do not use or access the Sites or Services.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-4">
              Lawful Basis for Collecting and Processing Personal Data
            </h3>
            <p className="text-gray-700 mb-4">
              In accordance with the provisions of Data Protection Laws, prior
              to the processing of personal data there must be in existence a
              legal basis for such processing. In compliance with the provisions
              of Data Protection Laws, we process your personal data in line
              with the following legal basis:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Consent:</strong> where you have consented to our
                processing of your personal data for one or more specific
                reasons. Such consent is given by you through your continuous
                use of the Services and the Sites.
              </li>
              <li>
                <strong>Performance of a contract:</strong> in order to perform
                a contract we have with you or a contract to which you are a
                party to and in order to take necessary steps at your request
                prior to entering into such a contract.
              </li>
              <li>
                <strong>Legal obligation:</strong> where processing of personal
                data is required by law. We are required by law to retain
                certain account opening information and personal data of our
                customers beyond the date such customers cease to carry on
                business with us.
              </li>
              <li>
                <strong>Legitimate interest:</strong> in order to protect the
                vital interests of other data subjects, and in order to carry
                out the purposes of our business. In addition to this, we have a
                legitimate interest to prevent fraud, money laundering, and to
                verify the identity of data subjects, in order to protect our
                customers and business, to understand how people interact with
                our Sites, to provide communication which we think will be of
                interest to you, and to determine the effectiveness of
                promotional campaigns and advertising.
              </li>
              <li>
                <strong>Public interest:</strong> such processing is necessary
                for the performance of a task carried out in the interest of the
                public or in the exercise of an official public mandate vested
                on us.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-4">
              Information We May Collect From You
            </h3>
            <p className="text-gray-700 mb-4">
              When you use the Sites or Services, we collect and store your
              personal data which is provided by you from time to time. Personal
              data/information in this context shall include all data such as:
              any means of information relating to an identified or identifiable
              natural person who can be identified by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>A name;</li>
              <li>An identification number;</li>
              <li>Location data, an online identifier;</li>
              <li>Address, a photo, an email address;</li>
              <li>Facial recognition data;</li>
              <li>Bank details;</li>
              <li>
                Other unique identifiers such as but not limited to MAC address,
                IP address, IMEI number, IMSI number, SIM.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              For the purpose of accessing our Services, the personal data we
              may collect include: your full legal names, marital status, title,
              date of birth, gender, photo, facial recognition data, business
              name, email address, mailing address, telephone number, bank
              account number, payment card details, bank verification number,
              national identification number, international passport number,
              means of identification, guarantors' contact details, bank
              statements, usernames, passwords, your preferences, interests,
              feedback and survey responses, preference in receiving marketing
              information from us and our third parties, and your communication
              preferences, etc.
            </p>
          </section>
        </main>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
