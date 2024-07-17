import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Chart from "react-apexcharts";

import Text from "@/components/Typography/Text";
import Hamburger from "@/components/Hamburger/Hamburger";

import {
  CategoryTitle,
  SidebarCategory,
  CategoryLists,
  ListCategory,
} from "@/components/Sidebar/Sidebar-Category";

import {
  Analytic,
  AnalyticDetail,
  AnalyticHeader,
  AnalyticsContainer,
  AnalyticsContent,
  ChartWrapper,
  DetailContent,
  DetailContentHeader,
  DetailDateHeader,
  ListBox,
  ListContent,
  ListDetailWrapper,
  ListTitle,
} from "./analytic.style";

function Analityc() {
  const [showMenuCategory, setShowMenuCategory] = useState(false);
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const currentAnalytic = search.get("q") ?? "conversation";

  return (
    <AnalyticsContainer>
      <SidebarCategory isToggledByMobile={showMenuCategory && "open"}>
        <CategoryTitle weight="medium">Conversation</CategoryTitle>
        <CategoryLists className="category-list">
          <ListCategory
            onClick={() => navigate("?q=conversation")}
            className={`${currentAnalytic === "conversation" && "active"}`}
          >
            <Text size="xs">Conversation</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Missed Conversations</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Conversations time</Text>
          </ListCategory>
        </CategoryLists>

        <CategoryTitle weight="medium">Direct Message</CategoryTitle>
        <CategoryLists className="category-list">
          <ListCategory>
            <Text size="xs">Chat messages</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Emails</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Text messages</Text>
          </ListCategory>
        </CategoryLists>

        <CategoryTitle weight="medium">User and agents</CategoryTitle>
        <CategoryLists className="category-list">
          <ListCategory>
            <Text size="xs">Visitors</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Leads</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Users</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Registrations</Text>
          </ListCategory>
          <ListCategory
            className={`${
              currentAnalytic === "agent-response-time" && "active"
            }`}
            onClick={() => navigate("?q=agent-response-time")}
          >
            <Text size="xs">Agent response time</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Agent conversations</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Agent conversations time</Text>
          </ListCategory>
          <ListCategory
            className={`${currentAnalytic === "agent-ratings" && "active"}`}
            onClick={() => navigate("?q=agent-ratings")}
          >
            <Text size="xs">Agent ratings</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Countries</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Languages</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Browsers</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Operating systems</Text>
          </ListCategory>
        </CategoryLists>

        <CategoryTitle weight="medium">Automation</CategoryTitle>
        <CategoryLists className="category-list">
          <ListCategory>
            <Text size="xs">Subscribe</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Follow up</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Message automations</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Email automations</Text>
          </ListCategory>
        </CategoryLists>

        <CategoryTitle weight="medium">Articles</CategoryTitle>
        <CategoryLists className="category-list">
          <ListCategory>
            <Text size="xs">Searches</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Article views</Text>
          </ListCategory>
          <ListCategory
            className={`${currentAnalytic === "article-views" && "active"}`}
            onClick={() => navigate("?q=article-views")}
          >
            <Text size="xs">Article views by articles</Text>
          </ListCategory>
          <ListCategory
            className={`${currentAnalytic === "article-ratings" && "active"}`}
            onClick={() => navigate("?q=article-ratings")}
          >
            <Text size="xs">Article ratings</Text>
          </ListCategory>
        </CategoryLists>
      </SidebarCategory>
      <AnalyticsContent>
        {currentAnalytic === "conversation" && (
          <ConversationChart
            setShowMenuCategory={setShowMenuCategory}
            showMenuCategory={showMenuCategory}
          />
        )}
        {currentAnalytic === "agent-response-time" && (
          <AgentResponseTimeChart
            setShowMenuCategory={setShowMenuCategory}
            showMenuCategory={showMenuCategory}
          />
        )}
        {currentAnalytic === "agent-ratings" && (
          <AgentRatingsChart
            setShowMenuCategory={setShowMenuCategory}
            showMenuCategory={showMenuCategory}
          />
        )}
        {currentAnalytic === "article-views" && (
          <ArticleViewsChart
            setShowMenuCategory={setShowMenuCategory}
            showMenuCategory={showMenuCategory}
          />
        )}
        {currentAnalytic === "article-ratings" && (
          <ArticleRatingsChart
            setShowMenuCategory={setShowMenuCategory}
            showMenuCategory={showMenuCategory}
          />
        )}
      </AnalyticsContent>
    </AnalyticsContainer>
  );
}
const ConversationChart = ({ setShowMenuCategory, showMenuCategory }) => {
  const [state] = useState({
    options: {
      chart: {
        id: "conversation-chart",
        fontFamily: "Poppins",
        foreColor: "#C1C7D4",
        toolbar: {
          autoSelected: "pan",
          show: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      colors: ["#7B40F2"],
      stroke: {
        width: 2,
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return `<div class="my-chart-tooltip">${series[seriesIndex][dataPointIndex]}</div>`;
        },
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        data: [
          {
            x: new Date("2021-12-01").getTime(),
            y: 1,
          },
          {
            x: new Date("2021-12-02").getTime(),
            y: 0,
          },
          {
            x: new Date("2021-12-03").getTime(),
            y: 0,
          },
          {
            x: new Date("2021-12-04").getTime(),
            y: 1.2,
          },
          {
            x: new Date("2021-12-05").getTime(),
            y: 0.4,
          },
          {
            x: new Date("2021-12-06").getTime(),
            y: 1.2,
          },
          {
            x: new Date("2021-12-07").getTime(),
            y: 1.4,
          },
          {
            x: new Date("2021-12-08").getTime(),
            y: 1.4,
          },
        ],
      },
    ],
  });

  return (
    <>
      <Analytic>
        <AnalyticHeader>
          <Hamburger
            line={2}
            lineColor="cb-purple"
            onClick={() => setShowMenuCategory(!showMenuCategory)}
          />
          <Text className="analytic-title">Conversation</Text>
        </AnalyticHeader>
        <Text className="analytic-last-update">Friday, 10 December 2021</Text>
        <ChartWrapper>
          <Chart
            height="100%"
            type="area"
            options={state.options}
            series={state.series}
          />
        </ChartWrapper>
      </Analytic>
      <AnalyticDetail>
        <DetailDateHeader>10/02/2021 - 10/02/2021</DetailDateHeader>
        <DetailContent>
          <DetailContentHeader>
            <Text className="title">Conversation Count</Text>
            <Text className="desc">
              count of new conversations started by users
            </Text>
          </DetailContentHeader>
          <ListDetailWrapper>
            <ListTitle>
              <Text>Date</Text>
              <Text>Count</Text>
            </ListTitle>
            <ListContent>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>10/02/2021</Text>
                <Text>1</Text>
              </ListBox>
            </ListContent>
          </ListDetailWrapper>
        </DetailContent>
      </AnalyticDetail>
    </>
  );
};

const AgentResponseTimeChart = ({ setShowMenuCategory, showMenuCategory }) => {
  function minTommss(minutes) {
    let sign = minutes < 0 ? "-" : "";
    let min = Math.floor(Math.abs(minutes));
    let sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return (
      "00:" +
      sign +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec
    );
  }

  function minDecimal(min, sec) {
    return (min + sec * 0.0168).toFixed(2);
  }

  const [state] = useState({
    options: {
      chart: {
        id: "agent-response-time-chart",
        foreColor: "#C1C7D4",
        fontFamily: "Poppins",
        toolbar: {
          autoSelected: "pan",
          show: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      colors: ["#7B40F2"],
      stroke: {
        width: 2,
      },
      legend: {
        show: false,
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return minTommss(value);
          },
          style: {
            fontSize: "14px",
          },
        },
      },
      xaxis: {
        categories: ["Jane Cooper", "Wade Warren", "Esther Howard"],
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    series: [
      {
        data: [minDecimal(1, 40), minDecimal(6, 40), minDecimal(5, 0)],
      },
    ],
  });

  return (
    <>
      <Analytic>
        <AnalyticHeader>
          <Hamburger
            line={2}
            lineColor="cb-purple"
            onClick={() => setShowMenuCategory(!showMenuCategory)}
          />
          <Text className="analytic-title">Agent response time</Text>
        </AnalyticHeader>
        <Text className="analytic-last-update">Friday, 10 December 2021</Text>
        <ChartWrapper>
          <Chart
            height="100%"
            type="bar"
            options={state.options}
            series={state.series}
          />
        </ChartWrapper>
      </Analytic>
      <AnalyticDetail>
        <DetailDateHeader>10/02/2021 - 10/02/2021</DetailDateHeader>
        <DetailContent>
          <DetailContentHeader>
            <Text className="title">Average agent response time</Text>
            <Text className="desc">
              Average time for agents to send the first reply after the user
              sends the first message.
            </Text>
          </DetailContentHeader>
          <ListDetailWrapper>
            <ListTitle>
              <Text>Agent Name</Text>
              <Text>Count</Text>
            </ListTitle>
            <ListContent>
              <ListBox>
                <Text>Jane Cooper</Text>
                <Text>00:01:40</Text>
              </ListBox>
              <ListBox>
                <Text>Wade Warren</Text>
                <Text>00:06:40</Text>
              </ListBox>
              <ListBox>
                <Text>Esther Howard</Text>
                <Text>00:05:40</Text>
              </ListBox>
            </ListContent>
          </ListDetailWrapper>
        </DetailContent>
      </AnalyticDetail>
    </>
  );
};

const AgentRatingsChart = ({ setShowMenuCategory, showMenuCategory }) => {
  const [state] = useState({
    options: {
      chart: {
        id: "agent-ratings-chart",
        fontFamily: "Poppins",
        foreColor: "#C1C7D4",
        toolbar: {
          autoSelected: "pan",
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      colors: ["#7B40F2"],
      stroke: {
        width: 2,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: ["Jane Cooper", "Wade Warren"],
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    series: [
      {
        data: [70, 80],
      },
    ],
  });

  return (
    <>
      <Analytic>
        <AnalyticHeader>
          <Hamburger
            line={2}
            lineColor="cb-purple"
            onClick={() => setShowMenuCategory(!showMenuCategory)}
          />
          <Text className="analytic-title">Agent ratings</Text>
        </AnalyticHeader>
        <Text className="analytic-last-update">Friday, 10 December 2021</Text>
        <ChartWrapper>
          <Chart
            height="100%"
            type="bar"
            options={state.options}
            series={state.series}
          />
        </ChartWrapper>
      </Analytic>
      <AnalyticDetail>
        <DetailDateHeader>10/02/2021 - 10/02/2021</DetailDateHeader>
        <DetailContent>
          <DetailContentHeader>
            <Text className="title">Agent ratings</Text>
            <Text className="desc">Ratings assigned to agents.</Text>
          </DetailContentHeader>
          <ListDetailWrapper>
            <ListTitle>
              <Text>Agent Name</Text>
              <Text>Count</Text>
            </ListTitle>
            <ListContent>
              <ListBox>
                <Text>Jane Cooper</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>Wade Warren</Text>
                <Text>2</Text>
              </ListBox>
              <ListBox>
                <Text>Esther Howard</Text>
                <Text>3</Text>
              </ListBox>
            </ListContent>
          </ListDetailWrapper>
        </DetailContent>
      </AnalyticDetail>
    </>
  );
};

const ArticleViewsChart = ({ setShowMenuCategory, showMenuCategory }) => {
  const [state] = useState({
    options: {
      chart: {
        id: "articles-views-chart",
        fontFamily: "Poppins",
        foreColor: "#C1C7D4",
        toolbar: {
          autoSelected: "pan",
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      colors: ["#7B40F2"],
      stroke: {
        width: 2,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          "Amet minim mollit... ",
          "Amet minim mollit... ",
          "Amet minim mollit... ",
          "Amet minim mollit... ",
        ],
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    series: [
      {
        data: [55, 80, 60, 40],
      },
    ],
  });

  return (
    <>
      <Analytic>
        <AnalyticHeader>
          <Hamburger
            line={2}
            lineColor="cb-purple"
            onClick={() => setShowMenuCategory(!showMenuCategory)}
          />
          <Text className="analytic-title">Article views</Text>
        </AnalyticHeader>
        <Text className="analytic-last-update">Friday, 10 December 2021</Text>
        <ChartWrapper>
          <Chart
            height="100%"
            type="bar"
            options={state.options}
            series={state.series}
          />
        </ChartWrapper>
      </Analytic>
      <AnalyticDetail>
        <DetailDateHeader>10/02/2021 - 10/02/2021</DetailDateHeader>
        <DetailContent>
          <DetailContentHeader>
            <Text className="title">Article views</Text>
            <Text className="desc">
              Number of times articles have veen viewed by users.
            </Text>
          </DetailContentHeader>
          <ListDetailWrapper>
            <ListTitle>
              <Text>Article</Text>
              <Text>Count</Text>
            </ListTitle>
            <ListContent>
              <ListBox>
                <Text>Amet minim molli</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>Amet minim molli</Text>
                <Text>2</Text>
              </ListBox>
              <ListBox>
                <Text>Amet minim molli</Text>
                <Text>3</Text>
              </ListBox>
            </ListContent>
          </ListDetailWrapper>
        </DetailContent>
      </AnalyticDetail>
    </>
  );
};

const ArticleRatingsChart = ({ setShowMenuCategory, showMenuCategory }) => {
  const [state] = useState({
    options: {
      chart: {
        id: "articles-ratings-chart",
        fontFamily: "Poppins",
        foreColor: "#C1C7D4",
        toolbar: {
          autoSelected: "pan",
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      colors: ["#7B40F2"],
      stroke: {
        width: 2,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          "Amet minim mollit... ",
          "Amet minim mollit... ",
          "Amet minim mollit... ",
          "Amet minim mollit... ",
        ],
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    series: [
      {
        data: [55, 80, 60, 40],
      },
    ],
  });

  return (
    <>
      <Analytic>
        <AnalyticHeader>
          <Hamburger
            line={2}
            lineColor="cb-purple"
            onClick={() => setShowMenuCategory(!showMenuCategory)}
          />
          <Text className="analytic-title">Article ratings</Text>
        </AnalyticHeader>
        <Text className="analytic-last-update">Friday, 10 December 2021</Text>
        <ChartWrapper>
          <Chart
            height="100%"
            type="bar"
            options={state.options}
            series={state.series}
          />
        </ChartWrapper>
      </Analytic>
      <AnalyticDetail>
        <DetailDateHeader>10/02/2021 - 10/02/2021</DetailDateHeader>
        <DetailContent>
          <DetailContentHeader>
            <Text className="title">Article ratings</Text>
            <Text className="desc">
              Number of times articles have veen viewed by users.
            </Text>
          </DetailContentHeader>
          <ListDetailWrapper>
            <ListTitle>
              <Text>Article</Text>
              <Text>Count</Text>
            </ListTitle>
            <ListContent>
              <ListBox>
                <Text>Amet minim molli</Text>
                <Text>1</Text>
              </ListBox>
              <ListBox>
                <Text>Amet minim molli</Text>
                <Text>2</Text>
              </ListBox>
              <ListBox>
                <Text>Amet minim molli</Text>
                <Text>3</Text>
              </ListBox>
            </ListContent>
          </ListDetailWrapper>
        </DetailContent>
      </AnalyticDetail>
    </>
  );
};

export default Analityc;
