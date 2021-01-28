import Layout from '../../components/layout';
import Article from '../../components/article';
import PressRelease from '../../components/press-release';

export default function PressRelease20210128Page() {
  return (
    <Layout title="Press Release | Global Privacy Control">
      <PressRelease>
        <Article title="GPC Privacy Browser Signal Now Used by Millions and Honored by Hundreds of Thousands of Websites">
          <div className="col-10">
            <p>
              <time className="d-block mb-3" dateTime="2021-01-28">
                Jan. 28, 2021
              </time>
            </p>
            <p>
            In conjunction with Data Privacy Day, we are excited to 
            announce a major milestone on the path to making the Global 
            Privacy Control (GPC) legally binding under the California 
            Consumer Privacy Act (CCPA): <strong>Millions of users have adopted 
            GPC-enabled technologies, and major publishers--alongside hundreds of thousands of
            smaller websites--support GPC as a valid means for California consumers to opt out of
            the sale of their personal information.</strong>
            </p>
            <p>
            As of today, over 40 million users are utilizing a browser or 
            extension with GPC support—such as <a href="https://www.abine.com/blog/2020/online-privacy-leaders-launch-gpc-global-privacy-control-standard/">Abine</a>
            , <a href="https://brave.com/">Brave</a>
            , <a href="https://spreadprivacy.com/announcing-global-privacy-control/"> DuckDuckGo</a>
            , <a href="https://disconnect.me/"> Disconnect</a>
            , and <a href="https://www.eff.org/gpc-privacy-badger"> Privacy Badger</a>.
             Major publishers such as <a href="https://nytimes.com">The New York Times</a> now recognize the GPC signal as a valid 
            opt-out of sale under CCPA.  Others, including <a href="https://washingtonpost.com">The Washington Post</a>, <a href="https://www.meredith.com">Meredith Digital (People.com, Allrecipes.com, etc)</a>, <a href="https://automattic.com">Automattic (WordPress.com)</a>, and   
             <a href="https://cafemedia.com/"> CafeMedia</a> have 
            committed to honoring it this coming quarter. Leading Consent 
            Management Platforms <a href="https://www.onetrust.com/solutions/consent-management-platform/">OneTrust</a>
            , <a href="https://www.sourcepoint.com/cmp">Sourcepoint</a>
            , <a href="https://wirewheel.io">WireWheel</a>
            , and <a href="https://complianz.io">Complianz.io</a> also 
            now support GPC so we expect to see many more publishers and websites 
            that will honor GPC in the coming months. 
            </p>
            <p>
            The introduction of privacy regulations such as the CCPA and the newly 
            passed California Privacy Rights Act (CPRA) give consumers the legal 
            right to opt out of the sale of their data, including via automated 
            means such as a browser-based Global Privacy Control. Two months ago, 
            we announced the initial experimental phase of GPC and are excited 
            to see its growing adoption in the marketplace.
            </p>
            <p>
            With millions of people exercising their rights and a common 
            implementation across multiple technology providers, we believe 
            GPC answers California Attorney General Xavier Becerra's <a href="https://www.commerce.senate.gov/services/files/8AF136EE-DE50-4258-98C6-249F5BCECFA4">call</a> for 
            frictionless privacy controls and can ultimately be legally binding 
            under CCPA and CPRA.
            </p>
            <p>
            We invite other browsers, publishers, and online businesses to meet 
            the growing demand for online privacy by respecting their customers' 
            preferences and <a href="https://globalprivacycontrol.org/faq#Publisher">supporting GPC</a>. 
            </p>

            
            <hr className="my-5" />

            {/* <!-- QUOTES SECTION --> */}
            <h2 className="mb-4 font-weight-bold text-center">
              Quotes from Participating Orgs
            </h2>
            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/press-release-logos/meredith.svg`}
                alt="Meredith Digital logo"
              />
              <p>
              Meredith Digital is committed to providing consumers choice and 
              respecting their privacy in order to maintain and strengthen their 
              trusted relationships with our brands. We have already provided CCPA
               rights nationally to consumers and are extremely supportive of GPC,
                which is part of our evolving efforts to our digital audience of 
                150 million consumers.
              </p>
              <footer>
                <a href="linkedin.com/in/alysia-borsa-0911249/">Alysia Borsa</a>,
                President @ <a href="https://www.meredith.com/">Meredith Digital</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/press-release-logos/nyt.svg`}
                alt="New York Times logo"
              />
              <p>
              The trust of our readers is essential, and privacy is about trust. 
              Supporting Global Privacy Control on nytimes.com is a powerful way 
              for us to meet more of our readers' expectations of privacy in relevant 
              jurisdictions by providing them with a simple, easy-to-use way to convey 
              their preference once across all sites.
              </p>
              <footer>
                <a href="https://twitter.com/robinberjon">Robin Berjon</a>,
                VP Data Governance @ <a href="https://www.nytimes.com">The New York Times</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/press-release-logos/washington-post.svg`}
                alt="Washington Post logo"
              />
              <p>
              We take the privacy of our readers seriously and are committed to 
              providing the best reading experience. With further adoption of GPC, 
              it will allow us to continue to bring utility and value to our readers
              </p>
              <footer>
                <a href="https://twitter.com/chronotope">Aram Zucker-Scharff</a>,
                Senior Software Engineer @ <a href="https://www.washingtonpost.com">The Washington Post</a>
              </footer>
            </blockquote>
            
            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/press-release-logos/cafemedia.svg`}
                alt="CafeMedia logo"
              />
              <p>
              CafeMedia already enables CCPA Do Not Sell preferences for more than 
              3,000 independent publishers, reaching more than 170 million monthly 
              active users. We will begin supporting GPC as a way to enable people 
              to opt out of the sale of their personal information, as required by 
              CCPA. We’re excited to build on our efforts to accurately reflect 
              people’s preferences on how their personal information is used.
              </p>
              <footer>
                <a href="https://twitter.com/pbannist">Paul Bannister</a>,
                Chief Strategy Officer @ <a href="https://cafemedia.com/">CafeMedia</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
              
                src={`${process.env.publicPrefix}/img/participating-logos/duckduckgo-horizontal.svg`}
                alt="DuckDuckGo logo"
              />
              <p>
              DuckDuckGo delivers all-in-one privacy protection in our mobile browser and desktop browser extension. Today, we are thrilled to be enabling GPC by default so that DuckDuckGo users can easily exercise their legal privacy rights on the hundreds of thousands of websites soon to be respecting GPC. Since we don’t track our users, we are also respecting the GPC signal ourselves on our website and private search engine at duckduckgo.com.
              </p>
              <footer>
                <a href="https://twitter.com/yegg">Gabriel Weinberg</a>,
                CEO & Founder @ <a href="https://duckduckgo.com.com/">DuckDuckGo</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/brave.svg`}
                alt="Brave logo"
              />
              <p>
              Privacy-by-default tools are necessary for a sustainable, trusted, user-focused Web, and this is why Brave implemented Global Privacy Control in our desktop and Android browsers last October, alongside our existing privacy protections. Today, we’re proud to say that GPC has been added to our iOS app as well, and is being rolled out across our websites, ensuring that all our users get the ultimate tracking protection they deserve.
              </p>
              <footer>
                <a href="https://twitter.com/pes10k">Peter Snyder</a>,
                Senior Privacy Researcher and Director of Privacy @ <a href="https://www.brave.com/">Brave</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/onetrust.svg`}
                alt="One Trust logo"
              />
              <p>
              Consumer’s expect privacy. As privacy professionals it is our 
              responsibility to respect those  choices, while also providing a 
              consistent experience across the internet. OneTrust is honored 
              to partner with GPC to expand individual privacy controls and 
              support organizations in achieving compliance through the use of 
              the Privacy Browser Signal.
              </p>
              <footer>
                <a href="https://twitter.com/blakebrannon">Blake Brannon</a>,
                Chief Technology Officer @ <a href="https://www.onetrust.com/solutions/consent-management-platform/">OneTrust</a>
              </footer>
            </blockquote>

            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/press-release-logos/sourcepoint.svg`}
                alt="Sourcepoint logo"
              />
              <p>
              Improving experience for users who want to exercise their data rights 
              should be an imperative for all organizations. Sourcepoint is pleased 
              to support the GPC initiative and drive continued innovation in consumer 
              privacy experience.
              </p>
              <footer>
                <a href="https://twitter.com/bnb">Ben Barokas</a>,
                Co-Founder & CEO @ <a href="https://www.sourcepoint.com/cmp">Sourcepoint</a>
              </footer>
            </blockquote>
            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/press-release-logos/wirewheel.svg`}
                alt="WireWheel logo"
              />
              <p>
              WireWheel was founded on the principle of enabling companies to 
              be the best stewards of their customer’s information, so we are 
              excited to support GPC efforts to more easily and automatically 
              exercise their privacy rights. As new privacy laws are enacted 
              around the world, initiatives such as GPC will be critical to 
              simplifying the process for consumers to communicate privacy preferences.
              </p>
              <footer>
                <a href="https://twitter.com/justinant1">Justin Antonipillai</a>,
                Founder & CEO @ <a href="https://wirewheel.io">WireWheel</a>
              </footer>
            </blockquote>
            <blockquote className="mb-5">
              <img
                src={`${process.env.publicPrefix}/img/participating-logos/complianz.svg`}
                alt="Complianz logo"
              />
              <p>
              Complianz allows 200.000 websites around the globe to respect 
              GPC as it is likely to become the next standard for consumers 
              to exercise their rights under international privacy legislation.
              </p>
              <footer>
                <a href="">Leon Wimmenhoeve</a>,
                Founder & CEO @ <a href="https://complianz.io/">Complianz</a>
              </footer>
            </blockquote>
          </div>
        </Article>
      </PressRelease>
    </Layout>
  );
}
