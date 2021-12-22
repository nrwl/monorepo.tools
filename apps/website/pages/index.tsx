import { Footer, Header } from '@monorepo-tools/website/ui-commons';
import {
  Conclusion,
  Introduction,
  MonolithCallout,
  MonorepoFeatures,
  MonorepoFeaturesOverview,
  WhatIsAMonorepo,
  WhyAMonorepo,
} from '@monorepo-tools/website/ui-home';
import ToolsReview from './tools-review';

export function Index() {
  return (
    <>
      <Header />

      <main>
        <Introduction />

        <WhatIsAMonorepo />

        <MonolithCallout />

        <WhyAMonorepo />

        <MonorepoFeaturesOverview />

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
