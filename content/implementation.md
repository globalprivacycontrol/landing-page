---
title: What's going on?
---

---WhatIsGPC
title: What is GPC?

---

GPC is a way users can universally express, to all sites, their preference not
to be tracked on the web. It is a browser-level signal, maintained either by a
browser or browser extension, that a user or privacy-focused technology can set.
The easiest way to think of GPC is as a robot that selects the Do Not Sell
preference on a site on behalf of a user. The open source tool was developed by
a coalition of advocates, academics, and companies to allow users to exercise
new rights to opt out of data sharing at scale.

Sites that detect GPC may interpret the signal in a variety of ways depending
on their interpretation of the privacy laws applicable to the site. Some sites
use GPC to turn off all third party user tracking regardless of location, others
use it as a tool to limit certain data sharing in only some jurisdictions.
Regardless of such use, it is now recognized as a way to express Do Not Sell
preference under the CCPA. [GPC](https://berjon.com/gpc-under-the-gdpr/) may
also have legal effects under other legal regimes, including in Europe under the
GDPR. However, this document focuses on its relevance under the CCPA.

---WhatDoesEnforcementMean
title: What does the enforcement of GPC mean for site maintainers?

---

Websites that employ third party systems for the tracking of users for ad targeting
or other commercial purposes will now need to take steps to honor GPC choices,
creating an automated flow that takes the signal and uses it to mark the session
as Do Not Sell as defined under CCPA, potentially through using compatible systems
like the IAB’s [USP API](https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/USP%20API.md).
If the business knows the identity of the user, the “Do Not Sell” applies to all
uses of the person’s information, not just the web session.

Because the GPC is on a window-level object and on request headers, its presence is
the fastest way to handle decision-making around user privacy. GPC has been adopted
by The Washington Post, The New York Times, and a variety of other publishers. It
also is supported by a number of major Consent Management Platforms (CMPs),
including OneTrust, SourcePoint, and WireWheel. GPC simplifies the process of user
opt out. It does so without adding technical complexity that could slow ad execution.
The ease of execution means that GPC is a positive development for helping sites
follow CCPA regulations.

---ExpectedImpact
title: Expected Impact

---

As of the writing of this document over 40 million users are utilizing a browser or
extension with GPC support. Some systems that allow the user to express their
privacy preference with GPC are Abine, Brave, DuckDuckGo, OptMeowt, and Privacy Badger.

Impact on your site will depend on your interpretation of the CCPA and CPRA. There
are open questions about what specific processing activities are covered by an opt-out
request under those laws; the California Privacy Protection Agency is currently
drafting rules to provide more clarity to implementers, but those rules have not been
finalized. Not all of those 40 million users are in California, and if you limit your
processing of GPC to California, the percentage of users using it will depend on how
much of your traffic you get from California. However, if you accept GPC beyond
California, it may result in a larger impact.

To understand the impact on your individual site, we generally recommend tracking the
percentage of users activating a GPC signal as a non-user-identified metric in your
site’s analytics.

---ImplementationGuidance
title: Implementation Guidance

---

What follows are known best-practices for site-owners and publishers to implement GPC
parsing in a way that brings them in compliance with the CCPA. A site may choose to
further implement GPC by using the signal for other regions’ regulations, or as a
general user preference to be used across all sessions, but that functionality is
highly varied from site to site and not described here.

Importantly, GPC is convenient to implement as a stateless protocol. Sites do not need
to keep track of a user’s status being opted out as every request will contain it.

---Transparency
title: "Transparency: Implementing .well-known/gpc.json and Privacy Policy Update"

---

GPC makes use of [_.well-known_ identifiers](https://datatracker.ietf.org/doc/html/rfc5785)
for sites to signal compliance with the [GPC specification](https://globalprivacycontrol.github.io/gpc-spec/).
The existence of this file indicates you are using GPC as part of your compliance with
privacy laws. There may be a variety of tools for implementing _.well-known_ files in
your Content Management System (CMS) or website. Here is an [example for WordPress](https://github.com/pfefferle/wordpress-well-known)
and another [for Gatsby](https://www.npmjs.com/package/gatsby-plugin-well-known). If
you can find a method of implementing `.well-known/gpc.json` that is native to your
CMS, we recommend you do so. What follows is a basic example assuming you have the
capability to designate a static folder and files for your site.

First create a folder named `.well-known` at the base of your site, so it would have
a path of `yoursite.com/.well-known/`. In that folder create a file with the name of
`gpc.json`. The file’s value should then look something like this with `lastUpdate`
set to the date you have last updated the file.

    {
        "gpc": true,
        "lastUpdate": "2022-04-20"
    }

This will give you a valid GPC file that states you comply with GPC within the
context you understand it to apply.

Adopters will usually supplement the _.well-known_ file with a statement in their
Privacy Policy that states exactly how they interpret GPC within their own systems.
The exact message in your privacy policy is up to you and may require review by your
legal team. A suggested addition, similar to the [privacy policy of The New York Times](https://www.nytimes.com/privacy/california-notice):

> “Finally, if your browser supports it, you can turn on the Global Privacy Control to opt-out of the “sale” of your personal information under California’s CCPA.”

---USPAPI
title: "Changing Data Sharing Practices: Implementing the GPC signal with the IAB’s USP API"

---

The USP API is a method of compliance recommended by the IAB. While there are other
ways to comply with CCPA, the USP API is the most commonly used so instructions for
syncing GPC with the USP API follow. If you use a CMP, it is highly likely that
your use of the USP API is dependent on their system. Before moving forward with
the guidance below, check with your CMP to see if they support GPC and if they
provide a way to turn that support on. [If you are using OneTrust, here is a link to how you can turn on GPC support](https://my.onetrust.com/s/article/UUID-7c78b8b2-8399-d284-b9e9-fe4ec44e8aed?language=en_US).
Your CMS may also include tools to comply with GPC. [Here’s an example for Express-based NodeJS applications](https://www.npmjs.com/package/express-gpc).

The following example relies on the assumption that the page accepting the signal
is doing so in concert with the IAB's CCPA Framework and has given the user
explicit notice somewhere on their page. This sample script does not include
other methods by which you may monitor and set the CCPA preference of a user. It
should be placed as early on the page as possible to gain the maximum performance
result from leveraging GPC.

    // This will cover cases where it is set to null or set.
    // In the case of older user agents, it should not be assumed that the lack of a signal is equivalent to permission to sell.
        if (navigator.globalPrivacyControl){
            var CCPAConsent = ''
            switch (navigator.globalPrivacyControl) {
                case "1":
                    // Y indicates the user has selected opt out
                    CCPAConsent = 'Y';
                    break;
                default:
                    // N indicates the user has not selected to opt out
                    CCPAConsent = 'N';
            }
            var uspFramework = {
                version: 1,
                notice: 'Y',
                optOut: CCPAConsent, // You will have other things
                                     // besides GPC that are likely to
                                     // set this value.
                lspa: 'Y'
            }
            // Will return a USP string like `1YYY`
            var uspString = Object.values(uspFramework).reduce((a, c) => { return a+c }, '')
            window.__uspapi = (command, version, callback) => {
                if (command === 'getUSPData' && version === 1) {
                    callback(uspString, true)
                }
            }
        } else {
            // Standard logic for handling CCPA without the navigator.globalPrivacyControl setting.
        }

---Results
title: Results

---

Because of its presence at the level of the browser and its immediate availability,
requests with GPC where CCPA has to be followed have a significantly lower time to
first ad load.
