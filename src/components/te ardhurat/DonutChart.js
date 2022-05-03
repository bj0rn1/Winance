import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

const DonutChart = () => {
  let table = useSelector((state) => state.table);

  const [active, setActive] = useState(null);
  const width = 400;
  const half = width / 2;
  const total = table.reduce((n, { leket }) => n + leket, 0);
  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={table}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size =
                active && active.kategoria == data.kategoria ? 12 : 8;
              return half - size;
            }}
            pieValue={(data) => data.leket}
            padAngle={0.05}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.kategoria}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>
          {active ? (
            <>
              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={40}
                dy={-20}
              >
                {`${active.kategoria}`}
              </Text>

              <Text textAnchor="middle" fill="#fff" fontSize={20} dy={20}>
                {` ${active.leket} leke te reja`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                {`${total} leke te reja`}
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                {`${table.length} kategori`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
};

export default DonutChart;
