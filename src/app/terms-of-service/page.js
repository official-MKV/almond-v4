"use client";
import { motion } from "framer-motion";
import Head from "next/head";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:px-[8rem]">
      <Head>Terms of Service - Almond</Head>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose max-w-none mt-[50px] relative"
      >
        <h1 className="text-3xl font-semibold mb-4">Terms of Use</h1>
        <p>
          Please read these Terms of Use carefully before using the Almond
          Platform (“Platform”). Customers who are under 18 years of age should
          review these terms and conditions with a parent or guardian. Your
          access to and use of the Platform by way of any Device is conditioned
          on your acceptance of and compliance with the provisions of this Terms
          of Use. By your accessing or using the Platform you agree to be bound
          by these Terms of Use as amended at any time and posted on the website
          www.almondnigeria.com. If you disagree with any part hereof, do not
          access the Platform. In addition, your use of the Platform shall be
          subject to any applicable regulatory guidelines or rules. All such
          guidelines or rules are hereby incorporated by reference into the
          Terms of Use.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          DESCRIPTION OF THE ALMOND PLATFORM
        </h2>
        <p>
          The Platform is a financial service application that allows you to
          purchase airtime, pay bills, send money, receive money, and use card
          payment services via the web (www.almondnigeria.com) or mobile app
          (Almond apps). All transactions performed are final and cannot be
          recalled except in the case of a proven fraud.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          FAILED TRANSACTIONS AND REVERSALS
        </h2>
        <p>
          In the event of a failed transaction (i.e. user has been debited for
          transaction, but value was not received), please send the following
          details to support@almondnigeria.com for resolution: user’s mobile
          number, transaction amount, transaction date, transaction type, and
          any other detail we would request to enable us to resolve your
          complaint. We shall use our best endeavors to liaise with the
          applicable financial institution, telecommunication company, and/or
          merchant to resolve your logged transaction issue.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">NOTICES</h2>
        <p>
          Your email address and phone number supplied at sign-up will be used
          as a means of communicating information, notices, and documents to
          you. Any changes to such information should be logged as a ticket on
          support@almondnigeria.com.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          SECURITY AND UNAUTHORISED USE
        </h2>
        <ul className="list-disc list-inside">
          <li>
            You are responsible for all transactions conducted using your
            computer (personal or otherwise), mobile phone, tablet, or other
            electronic device (“Device”), payment card, or account. It is your
            responsibility to keep all of these secure.
          </li>
          <li>
            All passwords must be kept secret. You are liable for all activities
            undertaken using your username, associated password, or Device. You
            are responsible for maintaining the confidentiality of all Account
            information and keeping your Device from unauthorized use.
          </li>
          <li>
            We accept no liability for any unauthorized use of your Device,
            payment card, or account or any effects of the same.
          </li>
          <li>
            In the event your Device has been stolen or there is unauthorized
            access to your payment card or account, it is your responsibility to
            immediately notify your bank to restrict transactions on your card
            and account.
          </li>
          <li>
            In the event your Device has been stolen or there is unauthorized
            access to your Almond account, it is your responsibility to
            immediately log as a ticket on support@almondnigeria.com.
          </li>
          <li>
            If you dispute any purchase or withdrawal on your card or account,
            you will be required to prove that the transaction was effected
            without your authorization and such transaction will be investigated
            by our Fraud Team once we receive a logged ticket on
            support@almondnigeria.com.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          SUSPENSION OF ACCESS TO PLATFORM
        </h2>
        <ul className="list-disc list-inside">
          <li>
            Upon receipt of instructions from you to suspend or terminate your
            access to the Platform.
          </li>
          <li>
            Upon receipt of notification from you that your Device has been lost
            or stolen.
          </li>
          <li>
            If we suspect the Platform is being used for fraudulent or other
            illegal activities.
          </li>
          <li>
            If we are of the opinion that you have breached a provision
            contained in this Terms of Use.
          </li>
          <li>
            If we are of the opinion that continued access to the Platform will
            be detrimental to our business.
          </li>
          <li>
            If you provide any information that is untrue, inaccurate, not
            current or incomplete, or if we have reasonable grounds to suspect
            that such information is untrue, inaccurate, not current, or
            incomplete.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">UNACCEPTABLE USE</h2>
        <ul className="list-disc list-inside">
          <li>
            Use this Platform in a way that causes or could cause damage or
            restrict the availability or accessibility of the Platform.
          </li>
          <li>
            Conduct any fraudulent or illegal activities via the Platform.
          </li>
          <li>
            You hereby understand and agree that if a fraudulent activity is
            associated with the operation of your account, We have the right to
            apply restrictions to your account and report to the appropriate law
            enforcement agencies.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">PRIVACY STATEMENT</h2>
        <ul className="list-disc list-inside">
          <li>
            You acknowledge that by your use of the Platform, we shall be privy
            to and store some of your personal information (full name, mobile
            phone number and email address and some cases BVN).
          </li>
          <li>
            We shall use our best endeavors to ensure that your personal
            information is secure on our systems.
          </li>
          <li>
            We may use your personal information for:
            <ul className="list-disc list-inside ml-4">
              <li>
                Providing you the service, processing transactions and sending
                you related information.
              </li>
              <li>Providing, maintaining, and improving our services.</li>
              <li>Sending support and administrative messages to you.</li>
              <li>Responding to your inquiries and requests.</li>
              <li>Providing customer service.</li>
              <li>
                Updating you on products, services, promotions, rewards, and
                events offered by us and third parties.
              </li>
              <li>
                A better understanding of your needs by combining it with
                information collected from others with the objective of
                improving our service delivery.
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">INDEMNITY</h2>
        <ul className="list-disc list-inside">
          <li>
            You agree to indemnify Transatlantic Trusted Partners Limited, and
            its subsidiaries, affiliates, officers, agents, and employees for
            any loss, damages, liabilities, sanction, claims, suits, fines,
            charges, expenses due to or arising out of any transaction you
            process through the Platform.
          </li>
          <li>
            You agree to indemnify Transatlantic Trusted Partners Limited and
            its subsidiaries, affiliates, officers, agents, and employees for
            any loss, damages, liabilities, sanction, claims, suits, fines,
            charges, expenses arising from your violation of these Terms of Use.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          LIMITATION OF LIABILITY
        </h2>
        <ul className="list-disc list-inside">
          <li>
            In no event shall we be liable for:
            <ul className="list-disc list-inside ml-4">
              <li>
                Unavailability of the Platform at any time or your inability to
                use the Platform.
              </li>
              <li>
                Any form of delivery or failure thereof by a financial
                institution, merchant, or telecommunication company listed on
                the Almond Platform.
              </li>
              <li>Erroneous input of transaction details.</li>
              <li>
                Any loss arising from any failure or delay in any mobile phone
                networks or internet service provider or defective Device.
              </li>
              <li>
                Any special, indirect, incidental, punitive, or consequential
                damages, including loss of profits, however caused.
              </li>
            </ul>
          </li>
          <li>
            The above limitations and exclusions apply only to the extent
            permitted by law.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">AMENDMENTS</h2>
        <p>
          We may update or modify these Terms of Use from time to time without
          prior notice to you, and your continued access to or use of the
          Platform shall constitute acceptance of any updates, amendments,
          and/or modifications thereto.
        </p>
        <p className="mt-8 font-semibold">Last updated: 31st August, 2024</p>
      </motion.div>
    </div>
  );
}
