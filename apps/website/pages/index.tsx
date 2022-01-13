import { Footer, Header } from '@monorepo-tools/website/ui-commons';
import {
  Conclusion,
  Introduction,
  MonolithCallout,
  MonorepoFeatures,
  MonorepoFeaturesOverview,
  ToolsReview,
  ToolsSupportCallout,
  WhatIsAMonorepo,
  WhyAMonorepo,
} from '@monorepo-tools/website/ui-home';

export function Index() {
  return (
    <>
      <Header />

      <main role="main">
        <Introduction />

        <WhatIsAMonorepo />

        <MonolithCallout />

        <WhyAMonorepo />

        <MonorepoFeaturesOverview />

        <ToolsSupportCallout />

        <MonorepoFeatures />

        <Conclusion />

        <div>
          <ToolsReview />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Index;
