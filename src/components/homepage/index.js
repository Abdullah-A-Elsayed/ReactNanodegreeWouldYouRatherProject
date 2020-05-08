import React from "react";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import PollsList from "./pollsList";
import { connect } from "react-redux";
function HomePage({ answeredPollsIds, UnansweredPollsIds }) {
  return (
    <div className="mainContainer">
      <Card style={{ borderRadius: "5px" }}>
        <TabView>
          <TabPanel
            headerClassName="homepageTabHeader"
            header="Unanswered Questions"
          >
            <PollsList polls={answeredPollsIds} />
          </TabPanel>
          <TabPanel
            headerClassName="homepageTabHeader"
            header="Answered Questions"
          >
            <PollsList polls={UnansweredPollsIds} />
          </TabPanel>
        </TabView>
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => {
  const userObject = state.users[state.authedUser];
  const answeredPollsIds = Object.keys(userObject.answers);
  return {
    answeredPollsIds,
    UnansweredPollsIds: Object.keys(state.polls).filter(
      (k) => answeredPollsIds.indexOf(k) === -1
    ),
  };
};
export default connect(mapStateToProps)(HomePage);
