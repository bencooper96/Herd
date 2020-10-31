import React, { Component } from "react";
import HIWDesktopConstituent from "./forConstituents/hiwDesktopLayout";
import HIWMobileConstituent from "./forConstituents/hiwMobileLayout";

import HIWDesktopRepresentative from "./forRepresentatives/hiwDesktopLayout";
import HIWMobileRepresentative from "./forRepresentatives/hiwMobileLayout";

import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

class HIWTabs extends Component {
  state = {
    consTab: true,
    repsTab: false,
  };
  navTabClassName =
    "flex-1 mx-5 text-center block border border-gray-800 rounded hover:border-gray-200 text-gray-800 hover:bg-gray-200 py-2 px-4";

  activeTabClassName =
    "flex-1 mx-5 text-center block border border-gray-500 rounded py-2 px-4 bg-blue-100";

  render() {
    return (
      <div className="mt-10">
        <Tabs>
          <TabList className="flex justify-between">
            <Tab
              className={this.navTabClassName}
              selectedClassName={this.activeTabClassName}
            >
              <button>For Constituents</button>
            </Tab>
            <Tab
              className={this.navTabClassName}
              selectedClassName={this.activeTabClassName}
            >
              <button>For Representatives</button>
            </Tab>
          </TabList>

          <TabPanel>
            <p className="text-l md:text-xl py-2 px-6 text-left my-4 sm:my-0">
              Your ideas, contributing to the collective, local voice.
              <br /> Synthesized for maximum impact.
              <br /> Sent to all the right people.
            </p>
            <HIWDesktopConstituent />
            <HIWMobileConstituent />
          </TabPanel>
          <TabPanel>
            <p className="text-l md:text-xl py-2 px-6 text-left my-4 sm:my-0">
              Collect guided and context-rich feedback from your constituents
              about the issues that matter to them and to you.
            </p>
            <HIWDesktopRepresentative />
            <HIWMobileRepresentative />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default HIWTabs;
