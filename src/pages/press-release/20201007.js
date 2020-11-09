import Layout from '../../components/layout';
import Article from '../../components/article';
import PressRelease from '../../components/press-release';

export default function PressRelease20201007Page() {
  return (
    <Layout title="Press Release | Global Privacy Control">
      <PressRelease>
        <Article title="Announcing Global Privacy Control: Making it Easy for Consumers to Exercise Their Privacy Rights">
          <div className="col-10">
            <p>
              <time className="d-block mb-3" dateTime="2020-10-07">
                Oct. 7, 2020
              </time>
            </p>

            <p>
              Announcing Global Privacy Control: Making it Possible for
              Consumers to Easily Exercise Their “Do Not Sell” Rights Under CCPA
            </p>
            <p>
              With the introduction of privacy regulations such as the{' '}
              <a href="https://oag.ca.gov/privacy/ccpa">
                California Consumer Privacy Act (CCPA)
              </a>{' '}
              and the{' '}
              <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN">
                General Data Protection Regulation (GDPR)
              </a>{' '}
              , consumers have more rights to limit the sale and sharing of
              their personal data than ever before. CCPA in particular gives
              California residents a legal right to opt out of the sale of their
              data and requires businesses to respect user preferences through a
              signal from their web browser communicating the consumer’s request
              to opt out.
            </p>
            <p>
              While this is great progress, it doesn’t amount to much if it is
              hard for people to take advantage of their new rights. Today,
              there is no defined or accepted technical standard for how such a
              web browser signal would work. Without that, users don’t have an
              easy way to express their preferences.
            </p>
            <p>
              Indeed, in his{' '}
              <a href="https://www.commerce.senate.gov/services/files/47115516-3540-4AB8-8676-57882CF6B9E0">
                recent testimony before the US Senate
              </a>{' '}
              , California Attorney General{' '}
              <a href="https://twitter.com/agbecerra?s=21">Xavier Becerra</a>{' '}
              explained:
            </p>

            <blockquote>
              <p className="mb-0">
                One provision of our regulations intended to facilitate the
                submission of a request to opt-out of sale by requiring
                businesses to comply when a consumer has enabled a global
                privacy control at the device or browser level, which should be
                less time-consuming and burdensome. I urge the technology
                community to develop consumer-friendly controls to make exercise
                of the right to opt out of the sale of information meaningful
                and frictionless.
              </p>
            </blockquote>

            <p>
              This effort, initially spearheaded by{' '}
              <a href="https://twitter.com/ashk4n">Ashkan Soltani</a> (
              <a href="https://www.georgetowntech.org">Georgetown Law</a>) and{' '}
              <a href="https://twitter.com/SZimmeck">Sebastian Zimmeck</a> (
              <a href="https://www.wesleyan.edu">Wesleyan University</a>) now
              includes <a href="https://www.nytimes.com">The New York Times</a>,{' '}
              <a href="https://www.washingtonpost.com">The Washington Post</a>,{' '}
              <a href="https://www.ft.com">Financial Times</a>,{' '}
              <a href="https://automattic.com">
                Automattic (WordPress.com &amp; Tumblr)
              </a>
              , <a href="https://glitch.com">Glitch</a>,{' '}
              <a href="https://spreadprivacy.com/announcing-global-privacy-control/">
                DuckDuckGo
              </a>
              , <a href="https://brave.com/global-privacy-control/">Brave</a>,{' '}
              <a href="https://www.mozilla.org/en-US/">Mozilla</a>,{' '}
              <a href="https://disconnect.me">Disconnect</a>,{' '}
              <a href="https://www.abine.com/blog/2020/online-privacy-leaders-launch-gpc-global-privacy-control-standard/">
                Abine
              </a>
              ,{' '}
              <a href="https://digitalcontentnext.org">
                Digital Content Next (DCN)
              </a>
              ,{' '}
              <a href="https://advocacy.consumerreports.org/issue/tech-privacy/">
                Consumer Reports
              </a>
              , and the{' '}
              <a href="https://www.eff.org">
                Electronic Frontier Foundation (EFF)
              </a>
              .
            </p>

            <p>
              In the initial experimental phase, individuals can download
              browsers and extensions from{' '}
              <a href="https://www.abine.com/blog/2020/online-privacy-leaders-launch-gpc-global-privacy-control-standard/">
                Abine
              </a>
              , <a href="https://brave.com/global-privacy-control/">Brave</a>,{' '}
              <a href="https://disconnect.me">Disconnect</a>,{' '}
              <a href="https://spreadprivacy.com/announcing-global-privacy-control/">
                DuckDuckGo
              </a>{' '}
              , and <a href="https://www.eff.org">EFF</a> in order to
              communicate their “do not sell or share” preference to
              participating publishers. Additionally, we are committed to
              developing GPC into an open standard that many other organizations
              will support and are in the process of identifying the best venue
              for this proposal.
            </p>
            <p>
              We look forward to working with AG Becerra to make GPC legally
              binding under CCPA. At the same time, we are exploring GPC’s
              applicability and functionality with regard to other similar laws
              worldwide, such as the GDPR. We are excited about the prospect of
              empowering people with an easy-to-use tool to exercise their
              privacy rights.
            </p>

            <hr className="my-5" />

            {/* <!-- QUOTES SECTION --> */}
            <h2 className="mb-4 font-weight-bold text-center">
              Quotes from Participating Orgs
            </h2>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/abine.svg`}
                alt="Abine logo"
              />
              <p>
                We believe consumers rights to online privacy must be expanded.
                And it is equally importantly to make online privacy easier for
                people. The combination of legislation and enforcement,
                protocols like the Global Privacy Control, as well as simple
                auditable privacy tools for consumers and the organizations they
                interact with, all play critical parts in realizing Privacy 2.0.
                Abine’s Blur and DeleteMe products and services will actively
                support initiatives like the GPC and other experiments to
                strengthen and clarify approaches that can deliver results.
              </p>
              <footer>
                <a href="https://twitter.com/robshavell">Rob Shavell</a>,
                Co-founder &amp; CEO @<a href="https://www.abine.com">Abine</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/brave.svg`}
                alt="Brave logo"
              />
              <p>
                Brave is about putting users in charge of their online
                experience and building products that incorporate privacy by
                default, so we’re excited to launch GPC alongside our partners
                to give users the control they deserve. The Web needs such
                standards to continue being what it was meant to be, and we look
                forward to the wide dissemination of GPC across publisher sites
                and consumer tech to strengthen the global rise of the privacy
                wave.
              </p>
              <footer>
                <a href="https://twitter.com/BrendanEich">Brendan Eich</a>, CEO
                &amp; co-founder @ <a href="https://brave.com">Brave</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/cr.svg`}
                alt="Consumer Reports logo"
              />
              <p>
                Consumer Reports is committed to finding novel and practical
                solutions to safeguard our privacy. While the CCPA offers
                Californians important new rights, it’s just not practical to
                opt out of data sales on a site-by-site basis. We are proud to
                work on this project to offer universal controls to make data
                rights more manageable for consumers.
              </p>
              <footer>
                <a href="https://twitter.com/JustinBrookman">Justin Brookman</a>
                , Director of Tech Policy @
                <a href="https://www.consumerreports.org">Consumer Reports</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/dcn.svg`}
                alt="Digital Content Next logo"
              />
              <p>
                As new privacy laws around the globe catch up to public
                expectations, we’re proud to work with such an esteemed group of
                privacy-forward leaders to experiment with technical solutions
                which reduce friction and increase trust between a user and the
                sites they choose to interact. The GPC is intended to be a
                simple, easy-to-use solution with immediate utility in
                California as now required by law.
              </p>
              <footer>
                <a href="https://twitter.com/jason_kint">Jason Kint</a>, CEO @
                <a href="https://digitalcontentnext.org">
                  Digital Content Next
                </a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/disconnect.svg`}
                alt="Disconnect logo"
              />
              <p>
                Exercising our privacy rights under the CCPA should be easy. The
                GPC signal has the potential to empower people to automatically
                opt out of the sale of their data globally, rather than manually
                researching complicated opt out processes and sending requests
                to one site or service at a time.
              </p>
              <footer>
                <a href="https://twitter.com/caseyoppenheim">Casey Oppenheim</a>
                , Co-founder &amp; CEO @
                <a href="https://disconnect.me">Disconnect</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/duckduckgo-horizontal.svg`}
                alt="DuckDuckGo logo"
              />
              <p>
                Getting privacy online should be simple and accessible to
                everyone, period. Global Privacy Control (GPC) takes us one step
                closer to making this vision a reality by creating a simple
                universal setting for users to express their preference for
                privacy. DuckDuckGo is proud to be a founding member of this
                effort and starting today, the GPC will be launching in our
                mobile browser and desktop browser extensions, making the
                setting available to over ten million consumers.
              </p>
              <footer>
                <a href="https://twitter.com/yegg">Gabriel Weinberg</a>, CEO
                &amp; Founder @<a href="https://duckduckgo.com">DuckDuckGo</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/eff.svg`}
                alt="EFF logo"
              />
              <p>
                EFF is excited to deploy GPC as part of Privacy Badger. It is
                critical for people to have easy-to-use and easy-to-understand
                technical tools to exercise their privacy rights. GPC is both,
                and can work alongside existing privacy-protective tools.
              </p>
              <footer>
                <a href="https://twitter.com/eff">Lee Tien</a>, Legislative
                Director @ <a href="https://www.eff.org">EFF</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/glitch.svg`}
                alt="Glitch logo"
              />
              <p>
                Glitch is all about making things easy for developers; we can’t
                wait to make it easy for devs to build apps that lead the way in
                respecting user privacy. Consumers have the right to limit how
                their data is accessed and used. Developers and technologists
                should design experiences so that exercising those rights is
                easy and universal. The GPC is hopefully the first of many steps
                we’ll take as an industry to promote greater privacy on the web.
              </p>
              <footer>
                <a href="https://twitter.com/anildash">Anil Dash</a>, CEO @
                <a href="https://glitch.com">Glitch</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/mozilla.svg`}
                alt="Mozilla logo"
              />
              <p>
                Mozilla is pleased to support the Global Privacy Control
                initiative. People’s data rights must be recognized and
                respected, and this is a step in the right direction. We look
                forward to working with the rest of the web standards community
                to bring these protections to everyone.
              </p>
              <footer>
                <a href="https://twitter.com/selenamarie">Selena Deckelmann</a>,
                Vice President @
                <a href="https://www.mozilla.org/en-US/firefox/">
                  Firefox Desktop
                </a>
              </footer>
            </blockquote>
          </div>
        </Article>
      </PressRelease>
    </Layout>
  );
}
