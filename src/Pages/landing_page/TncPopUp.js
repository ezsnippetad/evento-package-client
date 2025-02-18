import React from "react";

function TncPopUp({ handleClose }) {
  return (
    <div className="popup table fixed w-full inset-0 z-50 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto">
          <div className="bg-brightGray p-7 space-y-7">
            <div id="termsBox">
              <div className="w-full flex items-center justify-between sticky top-0 mb-5 py-5 bg-brightGray">
                <h2 className="h1 w-full max-w-xs">Terms and Conditions</h2>
                <i
                  className="icon-close cursor-pointer"
                  onClick={() => {
                    handleClose(false);
                  }}
                ></i>
              </div>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  This Terms and Conditions Agreement ("
                  <b>
                    <i>Agreement</i>
                  </b>
                  ") is a legal document that explains your rights and
                  obligations as a user of Evento Package from EVENTOPACKAGE PVT
                  LTD (the “
                  <b>
                    <i>Company</i>
                  </b>
                  ”).
                </p>
                <p className="text-10 font-normal">
                  Evento Package is an online service offered by the Company. By
                  accessing or using any website with an authorized link to the
                  Website and/or the App, registering an account, or accessing
                  or using any content, information, services, features, or
                  resources available or enabled via the Website and/or the App
                  (collectively, the "
                  <b>
                    <i>Services</i>
                  </b>
                  "), clicking on a button or taking another action to signify
                  your acceptance of this Agreement, you:
                </p>
                <p className="text-10 font-normal">
                  (1) agree to be bound by this Agreement and any future
                  amendments and additions to this Agreement as published
                  through the Services;
                </p>
                <p className="text-10 font-normal">
                  (2) represent you are of legal age in your jurisdiction of
                  residence to form a binding contract; and
                </p>
                <p className="text-10 font-normal">
                  (3) represent that you have the authority to enter into this
                  Agreement personally and, if applicable, on behalf of any
                  company, organization, or other legal entity on whose behalf
                  you use the Services.
                </p>
                <p className="text-10 font-normal">
                  Except as otherwise provided herein, if you do not agree to be
                  bound by this Agreement, you may not access or use the
                  Services.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                1. REGISTRATION AS A USER; APPLICATION OF TERMS TO YOU; YOUR
                ACCOUNT{" "}
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  You become a user of Services ("
                  <b>
                    <i>User</i>
                  </b>
                  ") by completing the registration of an account for Services
                  (“
                  <b>
                    <i>Account</i>
                  </b>
                  ”). This Agreement takes effect as soon as you indicate your
                  acceptance of these terms. You may not become a User if you
                  are under the age of 13. Services are not intended for persons
                  under 13 and the Company will not knowingly collect personal
                  information from persons under the age of 13.
                </p>
                <p className="text-10 font-normal">
                  When registering an Account, you agree to provide only true,
                  accurate, current, and complete information requested by the
                  registration form (the "
                  <b>
                    <i>Registration Data</i>
                  </b>
                  ") and to promptly update the Registration Data thereafter as
                  necessary. The Registration Data may include personally
                  identifiable information such as your email address, name,
                  phone number, postal address, personal data relating directly
                  or indirectly to you, practicable for the identity of you, and
                  other information. Your submission of Registration Data
                  through the Services is governed by Company’s Privacy Policy
                  (the “
                  <b>
                    <i>Privacy Policy</i>
                  </b>
                  ”), which we strongly advise and require you to read before
                  using the Services.
                </p>
                <p className="text-10 font-normal">
                  You represent that you are not barred from using the Services
                  under any applicable law and that you will be responsible for
                  all activities that occur under your Account. You agree to
                  monitor your Account to restrict its use by minors and other
                  unauthorized users and agree not to share your Account or
                  password with anyone. You further agree to notify the Company
                  immediately of any unauthorized use of your password or any
                  other breach of the security of your Account and to exit from
                  your Account at the end of each session. You agree not to
                  create an Account using a false identity or alias or if you
                  previously have been banned from using any of the Services.
                  You further agree that you will not maintain more than one
                  Account for the same Company service at any given time. The
                  Company reserves the right to remove or reclaim any usernames
                  at any time and for any reason. You acknowledge and agree that
                  you have no ownership or other property interest in your
                  Account and that all rights in and to your Account are owned
                  by and inure to the benefit of the Company.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. Contracting Party
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  For any interaction with Services, your contractual
                  relationship is with the Company. Except as otherwise
                  indicated at the time of the transaction, any transactions you
                  make on Services are being made from the Company.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. Subscriptions; Content and Services
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  As a User, you may obtain access to certain services,
                  software, and content available to Users. The Services service
                  and any other software, content, and updates you download or
                  access via Services, including but not limited to the Company
                  or third-party content, and any virtual items you trade, sell
                  or purchase in Services are referred to in this Agreement as “
                  <b>
                    <i>Content and Services</i>
                  </b>
                  ”; the rights to access and/or use any Contents and Services
                  accessible through Services are referred to in this Agreement
                  as "
                  <b>
                    <i>Subscriptions</i>
                  </b>
                  ".
                </p>
                <p className="text-10 font-normal">
                  Each Subscription allows you to access particular Content and
                  Services. Some Subscriptions may impose additional terms
                  specific to that Subscription ("
                  <b>
                    <i>Subscription Terms</i>
                  </b>
                  "). The Subscription Terms and the Company Privacy Policy are
                  binding on you once you indicate your acceptance of them or of
                  this Agreement.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. Your Account
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Your Account may also include billing information you provide
                  to the Company for the purchase of Subscriptions, Content, and
                  Services, and any physical merchandise offered for purchase
                  through Services (“
                  <b>
                    <i>Product</i>
                  </b>
                  ”). You may not reveal, share or otherwise allow others to use
                  your password or Account except as otherwise specifically
                  authorized by the Company. You are responsible for the
                  confidentiality of your login and password and for the
                  security of your computer system. The Company is not
                  responsible for the use of your password and Account or for
                  all of the communication and activity on Services that result
                  from the use of your login name and password by you, by any
                  person to whom you may have intentionally or by negligence
                  disclosed your login and/or password in violation of this
                  confidentiality provision. Unless it results from the
                  Company’s negligence or fault, the Company is not responsible
                  for the use of your Account by a person who fraudulently used
                  your login and password without your permission. If you
                  believe that the confidentiality of your login and/or password
                  may have been compromised, you must notify the Company via the
                  support form help@eventopackage.com without any delay.
                </p>
                <p className="text-10 font-normal">
                  Your Account, including any information pertaining to it
                  (e.g.: contact information, billing information, Account
                  history, and Subscriptions, etc.), is strictly personal. You
                  may therefore not sell or charge others for the right to use
                  your Account, or otherwise transfer your Account, nor may you
                  sell, charge others for the right to use, or transfer any
                  Subscriptions other than if and as expressly permitted by this
                  Agreement (including any Subscription Terms) or as otherwise
                  specifically permitted by the Company.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                D. Payment Processing
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Payment processing related to Content and Services and/or
                  physical goods purchased on Services is performed by either
                  the Company directly or by the Company’s affiliates on behalf
                  of the Company depending on the type of payment method used.
                  In any case, delivery of Content and Services, as well as
                  physical goods, is performed by the Company.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">2. LICENSES </h3>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. General Content and Services License{" "}
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Services and your Subscription(s) require the automatic
                  download and installation of Content and Services onto your
                  computer. The Company hereby grants, and you accept, a
                  non-exclusive license and right, to use the Content and
                  Services for your personal, non-commercial use (except where
                  commercial use is expressly allowed herein or in the
                  applicable Subscription Terms). This license ends upon
                  termination of (a) this Agreement or (b) a Subscription that
                  includes the license. The Content and Services are licensed,
                  not sold. Your license confers no title or ownership in the
                  Content and Services. To make use of the Content and Services,
                  you must have a Services Account and you may be required to be
                  running the Services client and maintaining a connection to
                  the Internet.
                </p>
                <p className="text-10 font-normal">
                  For reasons that include, without limitation, system security
                  and stability, Services may need to automatically update,
                  pre-load, create new versions of or otherwise enhance the
                  Content and Services and accordingly, the system requirements
                  to use the Content and Services may change over time. You
                  consent to such automatic updating. You understand that this
                  Agreement (including applicable Subscription Terms) does not
                  entitle you to future updates, new versions or other
                  enhancements of the Content and Services associated with a
                  particular Subscription, although the Company may choose to
                  provide such updates, etc. in its sole discretion.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. License to Use the Company’s Content in Derivative Work
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  The Company appreciates the community of Users that creates
                  secondary and audio-visual works that reference the Company’s
                  content ("
                  <b>
                    <i>Derivative Work</i>
                  </b>
                  "). You may incorporate content from the Company into your
                  Derivative Work. Except as otherwise set forth in this Clause
                  or in any Subscription Terms, you may use, reproduce, publish,
                  perform, display and distribute Derivative Work that
                  incorporates content from the Company however you wish, but
                  solely on a non-commercial basis.
                </p>
                <p className="text-10 font-normal">
                  If you incorporate any third-party content in any Derivative
                  Work, you must be sure to obtain all necessary rights from the
                  owner of that content.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. Ownership of Content and Services
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  All title, ownership rights and intellectual property rights
                  in and to the Content and Services and any and all copies
                  thereof, are owned by the Company and/or its or its
                  affiliates’ licensors. All rights are reserved, except as
                  expressly stated herein. The Content and Services are
                  protected by copyright laws, international copyright treaties
                  and conventions and other laws. The Content and Services
                  contains certain licensed materials and the Company’s and its
                  affiliates’ licensors may protect their rights in the event of
                  any violation of this Agreement.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                D. Restrictions on Use of Content and Services
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  You may not use the Content and Services for any purpose other
                  than the permitted access to Services and your Subscriptions,
                  and to make personal, non-commercial use of your
                  Subscriptions, except as otherwise permitted by this Agreement
                  or applicable Subscription Terms. Except as otherwise
                  permitted under this Agreement (including any Subscription
                  Terms or Rules of Use), or under applicable law
                  notwithstanding these restrictions, you may not, in whole or
                  in part, copy, photocopy, reproduce, publish, distribute,
                  translate, reverse engineer, derive source code from, modify,
                  disassemble, decompile, create derivative works based on, or
                  remove any proprietary notices or labels from the Content and
                  Services or any software accessed via Services without the
                  prior consent, in writing, of the Company.
                </p>
                <p className="text-10 font-normal">
                  You are entitled to use the Content and Services for your own
                  personal use, but you are not entitled to: (i) sell, grant a
                  security interest in or transfer reproductions of the Content
                  and Services to other parties in any way, nor to rent, lease
                  or license the Content and Services to others without the
                  prior written consent of the Company, except to the extent
                  expressly permitted elsewhere in this Agreement (including any
                  Subscription Terms or Rules of Use); (ii) host or provide
                  services for the Content and Services or emulate or redirect
                  the communication protocols used by the Company in any network
                  feature of the Content and Services, through protocol
                  emulation, tunnelling, modifying or adding components to the
                  Content and Services, use of a utility program or any other
                  techniques now known or hereafter developed, for any purpose
                  including, but not limited to network over the Internet,
                  network utilizing commercial or non-commercial networks or as
                  part of content aggregation networks, websites or services,
                  without the prior written consent of the Company; or (iii)
                  exploit the Content and Services or any of its parts for any
                  commercial purpose, except as expressly permitted elsewhere in
                  this Agreement (including any Subscription Terms).
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                3. BILLING, PAYMENT AND OTHER SUBSCRIPTIONS
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  You agree to pay all fees or charges to your Account in
                  accordance with the fees, charges and billing terms in effect
                  at the time a fee or charge is due and payable. You also agree
                  to pay all applicable taxes. You must provide the Company with
                  valid payment information in connection with your orders. By
                  providing the Company with your payment information, you agree
                  that (i) the Company is authorized to immediately invoice your
                  Account for all fees and charges due and payable to the
                  Company hereunder, (ii) the Company is authorized to share any
                  payment information and instructions required to complete the
                  payment transactions with its third-party payment service
                  providers (e.g., credit card transaction processing, merchant
                  settlement, and related services), and (iii) no additional
                  notice or consent is required for the foregoing
                  authorizations. You agree to immediately notify the Company of
                  any change in your payment information. The Company reserves
                  the right at any time to change its prices and billing
                  methods. If payment cannot be charged to your payment card or
                  your payment is returned for any reason, the Company reserves
                  the right to either suspend or terminate your access to the
                  paid-for services.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. Payment Authorization
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  When you provide payment information to the Company or to one
                  of its payment processors, you represent to the Company that
                  you are the authorized user of the card, PIN, key or account
                  associated with that payment, and you authorize the Company to
                  charge your credit card or to process your payment with the
                  chosen third-party payment processor for any Subscription,
                  Product or other fees incurred by you. the Company may require
                  you to provide your address or other information in order to
                  meet their obligations under applicable tax law.
                </p>
                <p className="text-10 font-normal">
                  If your use of Services is subject to any type of use or sales
                  tax or VAT, then the Company may also charge you for those
                  taxes, in addition to the Subscription or other fees published
                  in the Rules of Use.
                </p>
                <p className="text-10 font-normal">
                  The European Union VAT (“
                  <b>
                    <i>VAT</i>
                  </b>
                  ”) tax amounts collected by the Company reflect VAT due on the
                  value of any Content and Services, Product or Subscription.
                </p>
                <p className="text-10 font-normal">
                  You agree that you will not use IP proxying or other methods
                  to disguise the place of your residence, whether to circumvent
                  geographical restrictions on content, to purchase at pricing
                  not applicable to your geography, or for any other purpose. If
                  you do this, the Company may terminate your access to your
                  Account.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. Responsibility for Charges Associated with Your Account
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  As the Account holder, you are responsible for all charges
                  incurred, including applicable taxes, and all purchases made
                  by you or anyone that uses your Account, including your family
                  or friends. If you cancel your Account, the Company reserves
                  the right to collect fees, surcharges or costs incurred before
                  cancellation. Any delinquent or unpaid Accounts must be
                  settled before the Company will allow you to register again.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. Free Subscriptions
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  In some cases, the Company may offer a free Subscription to
                  certain services, software and content. As with all
                  Subscriptions, you are always responsible for any Internet
                  service provider, telephone, and other connection fees that
                  you may incur when using Services, even when the Company
                  offers a free Subscription.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                D. Third Party Sites
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Services may provide links to other third-party sites. Some of
                  these sites may charge separate fees, which are not included
                  in and are in addition to any Subscription or other fees that
                  you may pay to the Company. Services may also provide access
                  to third-party vendors, who provide content, goods and/or
                  services on Services or the Internet. Any separate charges or
                  obligations you incur in your dealings with these third
                  parties are your responsibility. the Company makes no
                  representations or warranties, either express or implied,
                  regarding any third-party site. In particular, the Company
                  makes no representation or warranty that any service or
                  subscription offered via third-party vendors will not change
                  or be suspended or terminated.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                4. ONLINE CONDUCT AND ILLEGAL BEHAVIOR{" "}
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Your online conduct and interaction with other Users should be
                  guided by common sense and basic etiquette. The Company may
                  terminate your Account or a particular Subscription for any
                  conduct or activity that we deem as illegal, improper, or
                  otherwise negatively affects the enjoyment of Services by
                  other Users. You acknowledge that the Company is not required
                  to provide you notice before terminating your Subscription(s)
                  and/or Account.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                5. THIRD PARTY CONTENT{" "}
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  In regard to all Subscriptions, Contents and Services that are
                  not authored by the Company, the Company does not screen such
                  third-party content available on Services or through other
                  sources. the Company assumes no responsibility or liability
                  for such third-party content. Some third-party application
                  software is capable of being used by businesses for business
                  purposes - however, you may only acquire such software via
                  Services for private personal use.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                6. USER GENERATED CONTENT
              </h3>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. General Provisions
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Services provide interfaces and tools for you to you may
                  submit Content, including sharing, requests or comments to
                  generate content and make it available to other users and/or
                  to the Company at your sole discretion. "
                  <b>
                    <i>User Content</i>
                  </b>
                  " means any content you make available through the Services,
                  or otherwise provided to the Company or other users, whether
                  online or offline and whether or not solicited by the Company,
                  or to the Company or its affiliates through your use of the
                  Content and Services or otherwise.
                </p>
                <p className="text-10 font-normal">
                  For clarity, you retain all of your ownership rights in your
                  User Content. However, by submitting User Content to the
                  Company, you hereby grant the Company a worldwide,
                  non-exclusive, royalty-free, sub-licensable and transferable
                  license to use, amend, reproduce, distribute, prepare
                  derivative works of, display, publish, adapt, make available
                  online or electronically transmit, and perform the User
                  Content in connection with the Service and the Company's (and
                  its successors' and affiliates') business, including without
                  limitation for promoting and redistributing part or all of the
                  Service (and derivative works thereof) in any media formats
                  and through any media channels. You also hereby grant each
                  Member / user of the Service a non-exclusive license to access
                  your User Content through the Service, and to use, reproduce,
                  distribute, display, publish, make available online or
                  electronically transmit, and perform such User Content as
                  permitted through the functionality of the Service and under
                  these Terms and Conditions. The above licenses granted by you
                  in User Content you submit to the Service cannot be terminated
                  or deleted (save for any personal information submitted, which
                  will be subject to local privacy law). You understand and
                  agree, however, that the Company may continue to distribute,
                  or perform, server copies of your User Content relating to
                  templates and documents. The above licenses granted by you in
                  user comments you submit are perpetual and irrevocable.
                </p>
                <p className="text-10 font-normal">
                  If you provide the Company with any feedback or suggestions
                  about Services, the Content and Services, or any the Company
                  products or services, the Company is free to use the feedback
                  or suggestions however it chooses, without any obligation to
                  account to you.
                </p>
                <p className="text-10 font-normal">
                  The Company has no obligation to pre-screen any content. You
                  use all User Content and interact with other users at your own
                  risk. Without limiting the foregoing, The Company reserves the
                  right in its sole discretion to pre-screen, refuse, or remove
                  any content. The Company shall have the right to remove any
                  content that violates this Agreement or is otherwise
                  objectionable.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. Representations and Warranties
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  You represent and warrant to us that you have sufficient
                  rights in all User Content to grant the Company and other
                  affected parties the licenses described under A above. This
                  includes, without limitation, any kind of intellectual
                  property rights or other proprietary or personal rights
                  affected by or included in the User Content.
                </p>
                <p className="text-10 font-normal">
                  You furthermore represent and warrant that the User Content,
                  your submission of that Content, and your granting of rights
                  in that Content does not violate any applicable contract, law
                  or regulation.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. Feedbacks, Ratings and Reviews
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Feedbacks, ratings and reviews posted by users on our Services
                  are User Content that is not endorsed by the Company and does
                  not represent the views of the Company. The Company does not
                  assume liability for ratings and reviews or for any claims for
                  economic loss resulting from such feedbacks, ratings and
                  reviews. Because we expect users to maintain a high level of
                  integrity with respect to feedback, ratings and reviews posted
                  through the Services, you agree: (i) to base any rating or
                  review you post only on your first-hand experience with the
                  applicable business, product, or service; (ii) you will not
                  provide feedback, rating or review for any business, product,
                  or service with respect to which you have a competitive,
                  ownership or other economic interest, employment relationship
                  or other affiliation; (iii) you will not submit feedback,
                  rating or review in exchange for payment or other benefits
                  from any individual or entity; (iv) your review will comply
                  with the terms of this Agreement; (v) to represent and warrant
                  that you have all rights necessary to submit the feedback,
                  rating and reviews; and (vi) to grant to the Company the right
                  to use any feedback, ratings and reviews in any way at any
                  time without any additional approval or compensation... If we
                  determine, at our sole discretion, that any rating or review
                  could diminish the integrity of the feedback, ratings and
                  reviews, we may exclude such User Content without notice.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                7. OWNERSHIP OF AND LICENSE TO USE THE SERVICES
              </h3>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. Use of the Services
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  Except with respect to User Content, The Company and its
                  suppliers own all rights, title and interest in the Services.
                  The Services are protected by copyright and other intellectual
                  property laws throughout the world. Subject to this Agreement,
                  the Company grants you a limited license to use the Services
                  solely for your personal non-commercial purposes. Any future
                  release, update or other addition to the Services shall be
                  subject to this Agreement. The Company, its suppliers and
                  service providers reserve all rights not granted in this
                  Agreement.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. Trademarks
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  The Company's stylized name and other related graphics, logos,
                  service marks and trade names used on or in connection with
                  the Services are the trademarks of the Company and may not be
                  used without permission in connection with any third-party
                  products or services. Other trademarks, service marks and
                  trade names that may appear on or in the Services are the
                  property of their respective owners. You will not remove,
                  alter or obscure any copyright notice, trademark, service mark
                  or other proprietary rights notices incorporated in or
                  accompanying the Services.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. Restrictions on Use of Services
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  The rights granted to you in this Agreement are subject to the
                  following restrictions: (a) you shall not license, sell, rent,
                  lease, transfer, assign, reproduce, distribute, host or
                  otherwise commercially exploit the Services or any portion of
                  the Services; (b) you shall not frame or use framing
                  techniques to enclose any trademark, logo or Services
                  (including images, text, page layout or form) of the Company;
                  (c) you shall not use any metatags or other "hidden text"
                  using the Company's name or trademarks; (d) you shall not
                  modify, translate, adapt, merge, make derivative works of,
                  disassemble, decompile, reverse compile or reverse engineer
                  any part of the Services except to the extent the foregoing
                  restrictions are expressly prohibited by applicable law; (e)
                  you shall not use any manual or automated software, devices or
                  other processes (including but not limited to spiders, robots,
                  scrapers, crawlers, avatars, data mining tools or the like) to
                  "scrape" or download data from the Services (except that we
                  grant the operators of public search engines revocable
                  permission to use spiders to copy materials from the Website
                  for the sole purpose of and solely to the extent necessary for
                  creating publicly available searchable indices of the
                  materials, but not caches or archives of such materials); (f)
                  you shall not access the Services to build a similar or
                  competitive website, application or service; (g) except as
                  expressly stated herein, no part of the Services may be
                  copied, reproduced, distributed, republished, downloaded,
                  displayed, posted or transmitted in any form or by any means;
                  (h) you shall not remove or destroy any copyright notices or
                  other proprietary markings contained on or in the Services;
                  (i) you shall not interfere with or attempt to interfere with
                  the proper functioning of the Services or use the Services in
                  any way not expressly permitted by this Agreement; and (j) you
                  shall not attempt to harm our Services, including but not
                  limited to, by violating or attempting to violate any related
                  security features, introducing viruses, worms, or similar
                  harmful code into the Services, or interfering or attempting
                  to interfere with use of the Services by any other user, host
                  or network, including by means of overloading, "flooding,"
                  "spamming," "mail bombing", or "crashing" the Services. Any
                  unauthorized use of the Services terminates the licenses
                  granted by the Company pursuant to this Agreement.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                D. Third-Party Links
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal">
                  The Services may contain links to third-party services such as
                  third-party websites, applications, or ads ("
                  <b>
                    <i>Third-Party Links</i>
                  </b>
                  "). When you click on such a link, we will not warn you that
                  you have left the Services. The Company does not control and
                  is not responsible for Third-Party Links. The Company provides
                  these Third-Party Links only as a convenience and does not
                  review, approve, monitor, endorse, warrant, or make any
                  representations with respect to them, or any content, products
                  or services accessible through such links. Your use of all
                  Third-Party Links is at your own risk.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                8. DISCLAIMERS AND LIABILITY PROVISIONS
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  THIS SECTION 8 DOES NOT APPLY TO EU USERS.
                </p>
                <p className="text-10 font-normal capitalize">
                  PLEASE NOTE THAT THIS SECTION DOES NOT EXCLUDE ANY GUARANTEE,
                  RIGHT OR REMEDY THAT CANNOT BE SO EXCLUDED, RESTRICTED OR
                  MODIFIED UNDER LOCAL CONSUMER PROTECTION LAW.
                </p>
                <p className="text-10 font-normal ">
                  Prior to acquiring a Subscription, you should consult the
                  product information made available on Services, including
                  Subscription description, minimum technical requirements, and
                  user reviews.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. DISCLAIMERS
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE FULLEST EXTENT
                  PERMITTED BY APPLICABLE LAW, YOUR USE OF THE SERVICES AND ANY
                  PRODUCTS OFFERED THROUGH THE SERVICES IS AT YOUR SOLE RISK,
                  AND THE SERVICES AND ANY PRODUCTS ARE PROVIDED ON AN "AS IS"
                  AND "AS AVAILABLE" BASIS, WITH ALL FAULTS. TO THE FULLEST
                  EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY PARTIES
                  EXPRESSLY DISCLAIM ALL WARRANTIES, REPRESENTATIONS, AND
                  CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING,
                  BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                  NON-INFRINGEMENT ARISING FROM USE OF THE SERVICES AND
                  PRODUCTS. THE COMPANY PARTIES MAKE NO WARRANTY, REPRESENTATION
                  OR CONDITION THAT: (1) THE SERVICES OR ANY PRODUCTS WILL MEET
                  YOUR REQUIREMENTS OR (2) YOUR USE OF THE SERVICES WILL BE
                  UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE.
                </p>
                <p className="text-10 font-normal capitalize">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY
                  PARTIES SHALL NOT BE LIABLE FOR ANY LOSS OF PROFITS OR REVENUE
                  OR FOR INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY, SPECIAL OR
                  CONSEQUENTIAL DAMAGES, OR DAMAGES OR COSTS DUE TO LOSS OF
                  DATA, PRODUCTION, OR USE, BUSINESS INTERRUPTION OR PROCUREMENT
                  OF SUBSTITUTE GOODS OR SERVICES, WHETHER OR NOT THE COMPANY
                  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-10 font-normal capitalize">
                  THE COMPANY PARTIES ASSUME NO RESPONSIBILITY FOR THE
                  TIMELINESS, DELETION, MISDELIVERY OR FAILURE TO STORE ANY
                  CONTENT, USER COMMUNICATIONS OR PERSONALIZATION SETTINGS.
                  WITHOUT LIMITING THE FOREGOING, THE COMPANY WILL NOT BE LIABLE
                  FOR DAMAGES OF ANY KIND RESULTING FROM YOUR USE OF OR
                  INABILITY TO USE THE SERVICE OR FROM ANY PRODUCTS OR
                  TRANSACTIONS OR TRANSFERS RELATING TO PRODUCTS, OR FROM ANY
                  THIRD-PARTY MATERIALS, INCLUDING FROM ANY VIRUS THAT MAY BE
                  TRANSMITTED IN CONNECTION THEREWITH, AND INCLUDING FROM ANY
                  DISPUTE WITH ANY OTHER USER OF THE SERVICE.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. LIMITATION OF LIABILITY
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER THE
                  COMPANY, ITS LICENSORS, NOR THEIR AFFILIATES, NOR ANY OF THE
                  COMPANY’S SERVICE PROVIDERS, SHALL BE LIABLE IN ANY WAY FOR
                  LOSS OR DAMAGE OF ANY KIND RESULTING FROM THE USE OR INABILITY
                  TO USE THE SERVICES, YOUR ACCOUNT, YOUR SUBSCRIPTIONS AND THE
                  CONTENT AND SERVICES INCLUDING, BUT NOT LIMITED TO, LOSS OF
                  GOODWILL, WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, OR
                  ANY AND ALL OTHER COMMERCIAL DAMAGES OR LOSSES. IN NO EVENT
                  WILL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  CONSEQUENTIAL, SPECIAL, PUNITIVE OR EXEMPLARY DAMAGES, OR ANY
                  OTHER DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE
                  SERVICES, THE CONTENT AND SERVICES, THE SUBSCRIPTIONS, AND ANY
                  INFORMATION AVAILABLE IN CONNECTION THEREWITH, OR THE DELAY OR
                  INABILITY TO USE THE CONTENT AND SERVICES, SUBSCRIPTIONS OR
                  ANY INFORMATION, EVEN IN THE EVENT OF THE COMPANY’S OR ITS
                  AFFILIATES’ FAULT, TORT (INCLUDING NEGLIGENCE), STRICT
                  LIABILITY, OR BREACH OF THE COMPANY’S WARRANTY AND EVEN IF IT
                  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THESE
                  LIMITATIONS AND LIABILITY EXCLUSIONS APPLY EVEN IF ANY REMEDY
                  FAILS TO PROVIDE ADEQUATE RECOMPENSE.
                </p>
                <p className="text-10 font-normal capitalize">
                  YOUR SOLE AND EXCLUSIVE REMEDY FOR DISSATISFACTION WITH THE
                  SERVICES OR ANY THIRD-PARTY MATERIALS IS TO STOP USING THE
                  SERVICES. WITHOUT LIMITING THE FOREGOING, UNDER NO
                  CIRCUMSTANCES WILL THE TOTAL AGGREGATE AMOUNT THAT THE COMPANY
                  PARTIES ARE LIABLE TO YOU EXCEED THE GREATER OF (A) THE TOTAL
                  AMOUNT ACTUALLY PAID TO THE COMPANY BY YOU DURING THE
                  TWELVE-MONTH PERIOD PRIOR TO THE ACT, OMISSION OR OCCURRENCE
                  GIVING RISE TO SUCH LIABILITY, (B) THE REMEDY OR PENALTY
                  IMPOSED BY THE STATUTE OR REGULATION UNDER WHICH SUCH CLAIM
                  ARISES, OR (C) Indian Rupee 300000. THE FOREGOING CAP ON
                  LIABILITY SHALL NOT APPLY TO LIABILITY OF A THE COMPANY PARTY
                  FOR (X) DEATH, TANGIBLE PROPERTY DAMAGE, OR PERSONAL INJURY
                  CAUSED BY A THE COMPANY PARTY'S GROSS NEGLIGENCE OR FOR (Y)
                  ANY INJURY CAUSED BY A THE COMPANY PARTY'S FRAUD OR FRAUDULENT
                  MISREPRESENTATION.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. NO GUARANTEES
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER THE
                  COMPANY NOR ITS AFFILIATES GUARANTEE CONTINUOUS, ERROR-FREE,
                  VIRUS-FREE OR SECURE OPERATION AND ACCESS TO THE SERVICES, THE
                  CONTENT AND SERVICES, YOUR ACCOUNT AND/OR YOUR
                  SUBSCRIPTIONS(S) OR ANY INFORMATION AVAILABLE IN CONNECTION
                  THEREWITH.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                D. LIMITED WARRANTY
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  CERTAIN PRODUCTS PURCHASED FROM THE COMPANY IS SUBJECT TO A
                  LIMITED WARRANTY, WHICH IS DESCRIBED IN DETAIL WITH THE
                  PRODUCT.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                E. INDEMNIFICATION
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  YOU AGREE TO INDEMNIFY AND HOLD THE COMPANY, ITS CORPORATE
                  PARENTS, SUBSIDIARIES, AND AFFILIATES, AND THE OFFICERS,
                  DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES, PARTNERS AND
                  LICENSORS OF EACH (COLLECTIVELY, THE "
                  <b>
                    <i>COMPANY PARTIES</i>
                  </b>
                  ") HARMLESS FROM ANY DAMAGES, LOSSES, COSTS, LIABILITIES AND
                  EXPENSES (INCLUDING REASONABLE ATTORNEYS' FEES) RELATING TO OR
                  ARISING OUT OF ANY CLAIMS CONCERNING: (A) YOUR CONTENT; (B)
                  YOUR USE / MISUSE OF THE SERVICES; (C) YOUR VIOLATION OF THIS
                  AGREEMENT; (D) YOUR VIOLATION OF ANY RIGHTS OF ANOTHER PARTY,
                  INCLUDING ANY USERS; (E) YOUR VIOLATION OF ANY APPLICABLE
                  LAWS, RULES OR REGULATIONS; (F) THIRD-PARTY CLAIMS THAT YOU OR
                  SOMEONE USING YOUR PASSWORD DID SOMETHING THAT, IF TRUE, WOULD
                  VIOLATE ANY OF THESE TERMS, (G) ANY MISREPRESENTATIONS MADE BY
                  YOU, OR (H) A BREACH OF ANY REPRESENTATIONS OR WARRANTIES
                  YOU’VE MADE TO US. THE COMPANY RESERVES THE RIGHT, AT ITS OWN
                  COST, TO ASSUME THE EXCLUSIVE DEFENCE AND CONTROL OF ANY
                  MATTER OTHERWISE SUBJECT TO INDEMNIFICATION BY YOU, IN WHICH
                  EVENT YOU WILL FULLY COOPERATE WITH THE COMPANY IN ASSERTING
                  ANY AVAILABLE DEFENCES. THIS PROVISION DOES NOT REQUIRE YOU TO
                  INDEMNIFY ANY OF THE COMPANY PARTIES FOR ANY UNCONSCIONABLE
                  COMMERCIAL PRACTICE BY SUCH PARTY OR FOR SUCH PARTY'S
                  NEGLIGENCE, FRAUD, DECEPTION, FALSE PROMISE, MISREPRESENTATION
                  OR CONCEALMENT, SUPPRESSION OR OMISSION OF ANY MATERIAL FACT.
                  YOU AGREE THAT THE PROVISIONS IN THIS SECTION WILL SURVIVE ANY
                  TERMINATION OF YOUR ACCOUNT, THIS AGREEMENT OR YOUR ACCESS TO
                  THE SERVICES.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                9. AMENDMENTS TO THIS AGREEMENT{" "}
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  This Agreement may at any time be mutually amended by your
                  explicit consent to changes proposed by the Company.
                  Furthermore, the Company may amend this Agreement (including
                  any Subscription Terms or Rules of Use) unilaterally at any
                  time in its sole discretion. In this case, you will be
                  notified by e-mail of any amendment to this Agreement made by
                  the Company within 10 (ten) days before the entry into force
                  of the said amendment. Your failure to cancel your Account
                  within ten (10) days after the entry into force of the
                  amendments, will constitute your acceptance of the amended
                  terms. If you don’t agree to the amendments or to any of the
                  terms in this Agreement, your only remedy is to cancel your
                  Account or to cease use of the affected Subscription(s). the
                  Company shall not have any obligation to refund any fees that
                  may have accrued to your Account before cancellation of your
                  Account or cessation of use of any Subscription, nor shall the
                  Company have any obligation to prorate any fees in such
                  circumstances.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                10. TERM AND TERMINATION
              </h3>
              <h3 className="text-xs text-japaneseIndigo py-2">A. Term</h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  The term of this Agreement (the "
                  <b>
                    <i>Term</i>
                  </b>
                  ") commences on the date you first indicate your acceptance of
                  these terms, and will continue in effect until otherwise
                  terminated in accordance with this Agreement.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. Termination by You
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  You may cancel your Account at any time. You may cease use of
                  a Subscription at any time or, if you choose, you may request
                  that the Company terminate your access to a Subscription.
                  Subscriptions are not transferable. Access to Subscriptions
                  purchased as a part of a pack or bundle cannot be terminated
                  individually, termination of access to one product / service
                  purchased in the pack. Your cancellation of an Account, or
                  your cessation of use of any Subscription or request that
                  access to a Subscription be terminated, will not entitle you
                  to any refund, including any Subscription fees. the Company
                  reserves the right to collect fees, surcharges or costs
                  incurred prior to the cancellation of your Account or
                  termination of your access to a particular Subscription. In
                  addition, you are responsible for any charges incurred to
                  third-party vendors or content providers before your
                  cancellation.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. Termination by the Company
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  The Company may cancel your Account or any particular
                  Subscription(s) at any time in the event that (a) the Company
                  ceases providing such Subscriptions to similarly situated
                  Users generally, or (b) you breach any terms of this Agreement
                  (including any Subscription Terms or Rules of Use). In the
                  event that your Account or a particular Subscription is
                  terminated or cancelled by the Company for a violation of this
                  Agreement or improper or illegal activity, no refund,
                  including any Subscription fees or of any unused credits in
                  your Services, will be granted.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                D. Survival of Terms
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  Clauses 2, 3, and 5 - 12 will survive any expiration or
                  termination of this Agreement.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                11. APPLICABLE LAW/JURISDICTION
              </h3>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. Dispute Resolutions
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  This document is governed by and are to be construed in
                  accordance with the laws of Gujarat applicable therein.
                </p>
                <p className="text-10 font-normal capitalize">
                  Each party irrevocably and unconditionally submits to the
                  exclusive jurisdiction of the courts of Gujarat (and any court
                  of appeal) and waives any right to object to an action being
                  brought in those courts, including on the basis of an
                  inconvenient forum or those courts not having jurisdiction.
                </p>
                <p className="text-10 font-normal capitalize">
                  For EU Customers:
                </p>
                <p className="text-10 font-normal capitalize">
                  In the event of a dispute relating to the interpretation, the
                  performance or the validity of the User Agreement, an amicable
                  solution will be sought before any legal action. You can file
                  your complaint at [insert link or e-mail]. In case of failure,
                  you may, within one year of the failed request, file an online
                  complaint on the European Commission’s Online Dispute
                  Resolution website:{" "}
                  <a
                    href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage"
                    className="underline text-blue-500 lowercase"
                  >
                    https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage
                  </a>
                  , or on the European Consumer Centre’s website:{" "}
                  <a
                    href="http://www.europe-consommateurs.eu/index.php?id=2514"
                    className="underline text-blue-500 lowercase"
                  >
                    http://www.europe-consommateurs.eu/index.php?id=2514
                  </a>
                  .
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. Procedure for Making Claims of Copyright Infringement
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  If you believe content posted on the Services infringes your
                  copyright rights, please provide our Copyright Agent with the
                  following information: (1) an electronic or physical signature
                  of the person authorized to act on behalf of the owner of the
                  copyright interest; (2) a description of the copyrighted work
                  that you claim has been infringed; (3) a description of the
                  location on the Services of the material that you claim is
                  infringing; (4) your address, telephone number and e-mail
                  address; (5) a written statement that you have a good faith
                  belief that the disputed use is not authorized by the
                  copyright owner, its agent or the law; and (6) a statement by
                  you, made under penalty of perjury, that the above information
                  in your notice is accurate and that you are the copyright
                  owner or authorized to act on the copyright owner's behalf.
                  Correspondence to our Copyright Agent regarding notice of
                  claims of copyright infringement should be addressed to:
                  SURAT, Gujarat, Gujarat, 394101.
                </p>
              </div>
              <h3 className="text-sm text-japaneseIndigo py-2">
                12. MISCELLANEOUS{" "}
              </h3>
              <h3 className="text-xs text-japaneseIndigo py-2">
                A. Electronic Communications{" "}
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  The communications between you and the Company use electronic
                  means, whether you visit the Services or send the Company
                  e-mails, or whether the Company posts notices on the Services
                  or communicates with you via e-mail. For contractual purposes,
                  you (1) consent to receive communications from the Company in
                  an electronic form; and (2) agree that all terms and
                  conditions, agreements, notices, disclosures, and other
                  communications and documents that the Company provides to you
                  electronically will have the same legal effect that such
                  communications or documents would have if they were set forth
                  in "writing." The foregoing sentence does not affect your
                  statutory rights.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                B. Assignment{" "}
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  This Agreement, and your rights and obligations hereunder, may
                  not be assigned, subcontracted, delegated or otherwise
                  transferred by you without the Company's prior written
                  consent, and any attempted assignment, subcontract,
                  delegation, or transfer in violation of the foregoing will be
                  null and void.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                C. Force Majeure
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  The Company shall not be liable for any delay or failure to
                  perform resulting from causes outside its reasonable control,
                  including, but not limited to, acts of God, war, terrorism,
                  riots, embargos, acts of civil or military authorities, fire,
                  floods, accidents, strikes or shortages of transportation
                  facilities, fuel, energy, labor or materials.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                D. Questions, Complaints, Claims
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  If you have any questions, complaints or claims with respect
                  to the Services, please contact our customer service
                  department using the contact information available on the
                  Services (help@eventopackage.com). We will do our best to
                  address your concerns.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">E. Notice</h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  Where the Company requires that you provide an e-mail address,
                  you are responsible for providing the Company with your most
                  current e-mail address. In the event that the last e-mail
                  address you provided to the Company is not valid, or for any
                  reason is not capable of delivering to you any notices
                  required/ permitted by this Agreement, the Company's dispatch
                  of the e-mail containing such notice will nonetheless
                  constitute effective notice. You may give notice to the
                  Company at the following address: SURAT, Gujarat, Gujarat,
                  394101, Attention: Legal Department. Such notice shall be
                  deemed given when received by the Company by letter delivered
                  by nationally recognized overnight delivery service or
                  first-class postage prepaid mail at the above address.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">F. Waiver</h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  Any waiver or failure to enforce any provision of this
                  Agreement on one occasion will not be deemed a waiver of any
                  other provision or of such provision on any other occasion.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                G. Severability
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  Except as otherwise expressly set forth in this Agreement, in
                  the event that any provision of this Agreement shall be held
                  by a court or other tribunal of competent jurisdiction to be
                  unenforceable, such provision shall be construed in a manner
                  to reflect, as nearly as possible, the original intention of
                  the parties, and the remaining portions shall remain in full
                  force and effect.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                H. Export Control
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  You agree to comply with all applicable import/export laws and
                  regulations. You agree not to export the Content and Services
                  or Product or allow use of your Account by individuals of any
                  terrorist supporting countries to which encryption exports are
                  at the time of exportation restricted. You represent and
                  warrant that you are not located in, under the control of, or
                  a national or resident of any such prohibited country.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                I. Entire Agreement
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  This Agreement, including any Terms and Conditions, Privacy
                  Policy, and other policies of the Company, constitutes and
                  contains the entire agreement between the parties with respect
                  to the subject matter hereof and supersedes any prior oral or
                  written agreements.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                J. Rights of Third Parties
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  You agree that this Agreement is not intended to confer and
                  does not confer any rights or remedies upon any person other
                  than the parties to this Agreement.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                K. Complying with Law
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  The Company’s obligations are subject to existing laws and
                  legal processes and the Company may comply with law
                  enforcement or regulatory requests or requirements
                  notwithstanding any contrary term.
                </p>
              </div>
              <h3 className="text-xs text-japaneseIndigo py-2">
                L. Revision Date
              </h3>
              <div className="space-y-2">
                <p className="text-10 font-normal capitalize">
                  This Agreement was last updated on 02 December 2022 ("
                  <b>
                    <i>Revision Date</i>
                  </b>
                  "). We may, at any time and without liability, modify or
                  discontinue all or part of the Services; charge, modify or
                  waive any fees or charges required to use the Services; or
                  change the Terms and Conditions of Services for some or all of
                  our users. If you were a user before the Revision Date, it
                  replaces your existing agreement with the Company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TncPopUp;
