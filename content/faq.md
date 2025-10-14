---
title: Frequently Asked Questions
---

---WhatIsGPC
title: What is the Global Privacy Control (GPC)?

---

Global Privacy Control (GPC) is a proposed specification designed to allow
Internet users to notify businesses of their privacy preferences, such as
whether or not they want their personal information to be sold or shared. It
consists of a setting or extension in the user’s browser or mobile device and
acts as a mechanism that websites can use to indicate they support the
specification.

GPC is technology-agnostic and applies across platforms, including mobile and
smart platforms (for example, apps, smart TVs, and other connected devices).
It is not limited to any one tracking technology and covers mechanisms such as
cookies, local storage, pixels, device identifiers, and device fingerprinting.

---WhoIsGPC
title: Who is supporting the development of GPC?

---

GPC is being developed by a broad coalition of stakeholders:
technologists, web publishers, technology companies,
browser vendors, extension developers, academics, and
civil rights organizations.

The GPC was initially spearheaded by [Ashkan
Soltani](https://twitter.com/ashk4n) ([Georgetown
Law](https://www.georgetowntech.org/)) and [Sebastian
Zimmeck](https://twitter.com/SZimmeck) ([Wesleyan
University](https://www.wesleyan.edu/)) in collaboration with [The New York
Times](https://www.nytimes.com), [The Washington
Post](https://www.washingtonpost.com/), [Financial Times](https://www.ft.com/),
[Automattic (Wordpress.com & Tumblr)](https://automattic.com/),
[Glitch](https://glitch.com/),
[DuckDuckGo](https://spreadprivacy.com/announcing-global-privacy-control/),
[Brave](https://brave.com/global-privacy-control/),
[Mozilla](https://www.mozilla.org/en-US/), [Disconnect](https://disconnect.me/),
[Abine](https://joindeleteme.com/blog/how-to-enable-global-privacy-control/),
[Digital Content Next (DCN)](https://digitalcontentnext.org/), [Consumer
Reports](https://advocacy.consumerreports.org/issue/tech-privacy/), and the
[Electronic Frontier Foundation (EFF)](https://www.eff.org/).

---HowToSignal
title: I’m a web user. How can I use GPC to signal my privacy preferences to websites?

---

GPC is available for an increasing number of browsers and browser extensions,
listed [here](https://globalprivacycontrol.org/#download). If you want to use GPC,
you can download and enable it via a participating browser or browser
extension ([User Guide](/GPC_for_Users.pdf)). Several browsers support GPC natively, including Brave and DuckDuckGo
(on by default) and Firefox (available in settings). More information about downloading
GPC is available [here](https://globalprivacycontrol.org/orgs).

---Publisher
title: I’m a publisher, developer, or other service. How can I support GPC?

---

The GPC spec is easy to implement on a wide variety of websites and other
services. The proposed specification and back-end implementation reference
documentation are available [here](https://global-privacy-control.vercel.app/).
Follow the [publisher guide](/implementation) to learn how to implement GPC.
For additional information, please feel free to reach out on Github or Twitter
([@globablprivctrl](https://twitter.com/globalprivctrl)).

---Policymaker
title: I’m a policymaker. How can I support GPC or learn more about how it could apply in my jurisdiction?

---

As it is intended to invoke users’ privacy rights, we encourage policymakers
from around the world to engage in the development of this specification. If you
would like to learn more about how GPC could work in your jurisdiction, please
contact us via email at
[info[at]globalprivacycontrol.org](mailto:info[at]globalprivacycontrol.org).

---GetInvolved
title: How can I get involved in developing the proposed specification?

---

GPC was initially introduced at the World Wide Web Consortium (W3C) Privacy Community Group (Privacy CG) in April 2020. In November 2024, GPC was adopted as an official work item of the W3C Privacy Working Group where it is currently in the process of being standardized. Anyone can raise issues or submit pull requests to the GPC spec [here](https://w3c.github.io/gpc/) as part of the standardization process.

---Benefit
title: How does GPC benefit consumers, publishers, software makers, and advertisers?

---

The online advertising ecosystem is evolving, and consumer expectations are
changing. An increasing number of web users do not want to be tracked by parties
they aren’t choosing to interact with, and new laws, technological changes, and
advertising business models reflect these preferences.

GPC provides consumers and businesses with clear expectations and guidelines for
the sharing and sale of data online. It permits users to easily and clearly
exercise their privacy rights, facilitates greater trust between businesses and
their customers, and fosters certainty for businesses and advertisers by relying
on an open standard.

---IsItBinding
title: Is GPC legally binding?

---

GPC is intended to serve as an expression of users’ intent to
invoke their online privacy rights. Depending on the jurisdiction
and applicable laws, a user’s expression through GPC may have
legal impact. However, GPC on its own does not create any
legally binding obligations.

GPC may impact existing law in several ways: In California, Section 1798.135(c)
of the [California Consumer Privacy Act
(CCPA)](http://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?division=3.&part=4.&lawCode=CIV&title=1.81.5)
gives users the right to opt out of the sale of their personal information.

Furthermore, Section 999.315 of the [CCPA
Regulations](https://oag.ca.gov/privacy/ccpa/regs) requires businesses to honor
these opt-out requests. The regulations specify that "[a] business shall provide
two or more designated methods for submitting requests to opt-out […]
[including] user-enabled global privacy controls, such as a browser plug-in or
privacy setting, device setting, or other mechanism, that communicate or signal
the consumer’s choice to opt-out of the sale of their personal information. […]
User-enabled global privacy controls, such as a browser plug-in or privacy
setting, device setting, or other mechanism, that communicate or signal the
consumer’s choice to opt-out of the sale of their personal information shall be
considered a request directly from the consumer, not through an authorized
agent."

On this basis, it is possible that the GPC may become a legally binding opt-out
signal in California.

In addition, the [European General Data Protection Regulation
(GDPR)](https://gdpr-info.eu/) gives users the right to object to their personal
data being processed. The GPC signal is intended to convey a general request
that data controllers limit the sale or sharing of the user's personal data to
other data controllers. It is possible that a GPC signal opting out of
processing could create a legally binding obligation for data processors.

In Bermuda, the Privacy Commissioner has
[indicated](https://www.privacy.bm/post/global-privacy-control-interoperability-in-action)
that he believes the GPC may be used to create a legally binding obligation on
businesses under their laws, which provide users the right to “request an
organisation to cease, or not begin, using his [or her] personal information
[…] for the purposes of advertising, marketing or public relations,” or
“where the use of that personal information is causing or is likely to cause
substantial damage or substantial distress to the individual or to another
individual.”

Additional information is available in the [proposed
specification](https://w3c.github.io/gpc/).

---DND
title: Why not just use Do Not Track (DNT)?

---

Do Not Track was an effort preceding GPC to permit users to communicate their
privacy preferences to websites they visit. Unfortunately, in the appendices to
their Final Statement of Reasons, the California Attorney General (AG)
determined that the AG could not require businesses to comply with DNT requests
because the requests do not clearly convey users’ intent to opt out of the sale
of their data. A more detailed discussion of the inadequacies of DNT is
available as [Appendix E](https://oag.ca.gov/privacy/ccpa/regs) of
the AG’s Final Statement of Reasons.

When considering whether DNT was sufficient under the CCPA, the AG specifically
determined that a new type of privacy signal would benefit users and businesses
and that its regulation is “intended to support innovation for privacy services
that facilitate the exercise of consumer rights in furtherance of the CCPA.”

GPC responds to this call for innovation by providing a mechanism for privacy
signaling that is applicable to current laws, technologies, and business
practices. The Attorney General has said that he believes GPC is “a technical
standard that would make it easier for consumers to stop the sale of their
personal information” and that he is
“[heartened](https://twitter.com/AGBecerra/status/1313884769478828032?s=20) to
see a wave of innovation in this space.”

---ExistingDNS
title: How does GPC interact with companies' existing Do Not Sell links?

---

The California AG has determined that businesses must honor two methods of
submitting opt-outs. GPC is meant to provide users with an additional option
for objecting to the sale of their data, and it functions identically to
clicking a “Do Not Sell My Personal Information” link provided by a business.

---Conflict
title: What if there is a conflict between a GPC signal and a user-selected privacy preference?

---

Some jurisdictions allow businesses to sell user data when there is a conflict
between global and site-specific preferences — for instance, if a user has
provided specific permission to a website to sell their data. The [CCPA
Regulations](https://w3c.github.io/gpc/#bib-ccpa-regulations)
§999.315(c)(2) state that when a GPC signal conflicts with the existing privacy
settings a consumer has with the business, the business shall respect the GPC
signal but may notify the consumer of the conflict and give the consumer an
opportunity to confirm the business-specific privacy setting or participation in
a financial incentive program.

A conflict between GPC and site-specific privacy preferences may be resolved
differently in other jurisdictions.

Additionally, some implementations of GPC allow users to consent to the sale or
sharing of their data on an individual basis.

---Default
title: Can GPC be enabled by default?

---

The GPC preference expression should accurately reflect the users’ privacy
preferences. The threshold for obtaining user consent differs between
jurisdictions. GPC strives to honor those differences while still providing
users with choice about how businesses use their data. In some jurisdictions,
the presence of GPC in a user’s browser may constitute an adequate signal to not
sell their data, while regulations in another jurisdiction may require the
user’s explicit consent in order to send a GPC signal.

What constitutes a deliberate choice may differ between regional
regulations. For example, regulations in one jurisdiction may consider the use
of a privacy-focused browser to imply a GPC preference, such as under the CCPA
[Final Statement of Reasons - Appendix E
#73](https://oag.ca.gov/sites/all/files/agweb/pdfs/privacy/ccpa-fsor-appendix-e.pdf)
("_The consumer exercises their choice by affirmatively choosing the privacy
control […] including when utilizing privacy-by-design products or
services_"), while regulations in another jurisdiction may require explicit
consent from the user to send a GPC signal.

---StateCompliance
title: How many states require compliance with GPC?

---

As of Jaunary 15, 2025, four states — California, Colorado, Connecticut, and New Jersey — have explicitly issued guidance stating that GPC must be interpreted as a legally binding opt-out request under their privacy laws. Additionally, another eight states’ privacy laws state that consumers are entitled to exercise opt-out rights through universal opt-out mechanisms. For more information, see the [Legal and Implementation Considerations Guide](/implementation)
