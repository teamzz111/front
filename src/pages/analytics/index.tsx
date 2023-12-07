"use client";

import AnalyticsService from "@/actions/analytics";
import Navbar from "@/components/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";
import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";
import { useMemo } from "react";
// import Chart from "./chart";

const website = [
  { name: "/home", value: 1230 },
  { name: "/contact", value: 751 },
  { name: "/gallery", value: 471 },
  { name: "/august-discount-offer", value: 280 },
  { name: "/case-studies", value: 78 },
];

const shop = [
  { name: "/home", value: 453 },
  { name: "/imprint", value: 351 },
  { name: "/shop", value: 271 },
  { name: "/pricing", value: 191 },
];

const app = [
  { name: "/shop", value: 789 },
  { name: "/product-features", value: 676 },
  { name: "/about", value: 564 },
  { name: "/login", value: 234 },
  { name: "/downloads", value: 191 },
];

const data = [
  {
    category: "Website",
    stat: "10,234",
    data: website,
  },
  {
    category: "Online Shop",
    stat: "12,543",
    data: shop,
  },
  {
    category: "Mobile App",
    stat: "2,543",
    data: app,
  },
];

export default function PlaygroundPage() {
  const { data: list } = useQuery({
    queryKey: ["get-visits"],
    queryFn: AnalyticsService.getVisits,
  });

  const barList = useMemo(() => {
    return list?.map((e) => ({
      value: e.count,
      name: e.url,
    }));
  }, [list]);

  return (
    <>
      <Navbar />
      <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
          <Card>
            <Title>Visita de páginas</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{list?.length}</Metric>
              <Text>endpoints</Text>
            </Flex>
            <Flex className="mt-6">
              <Text>Pages</Text>
              <Text className="text-right">Views</Text>
            </Flex>
            <BarList
              data={barList || []}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        </Grid>
        {/* <Chart /> */}
      </main>
    </>
  );
}
